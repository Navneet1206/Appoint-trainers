// app/api/payment/verify/route.ts
import { type NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import Subscription from "@/models/Subscription";
import Booking from "@/models/Booking";

const subscriptionPlans = {
  "1month": { price: 2999, sessions: 8, duration: 30 },
  "3month": { price: 7999, sessions: 24, duration: 90 },
  "6month": { price: 14999, sessions: 48, duration: 180 },
};

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const authHeader = request.headers.get("authorization");
    if (!authHeader) {
      return NextResponse.json({ message: "Authorization header missing" }, { status: 401 });
    }

    const token = authHeader.split(" ")[1];
    interface JwtPayload {
      userId: string;
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "fallback-secret") as JwtPayload;

    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, planId, bookingData } = await request.json();

    // Verify payment signature
    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
      .update(body.toString())
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      return NextResponse.json({ message: "Payment verification failed" }, { status: 400 });
    }

    const plan = subscriptionPlans[planId as keyof typeof subscriptionPlans];
    const user = await User.findById(decoded.userId);

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Create subscription
    const startDate = new Date();
    const endDate = new Date(startDate.getTime() + plan.duration * 24 * 60 * 60 * 1000);

    const subscription = await Subscription.create({
      userId: user._id,
      planId,
      planName: `${plan.duration / 30} Month Plan`,
      startDate,
      endDate,
      totalSessions: plan.sessions,
      remainingSessions: plan.sessions,
      status: "active",
      paymentId: razorpay_payment_id,
      orderId: razorpay_order_id,
      amount: plan.price,
      trainerName: "To be assigned",
    });

  
    await Booking.create({
      userId: user._id,
      subscriptionId: subscription._id,
      trainerGenderPreference: bookingData.trainerGender || "Any", // Use gender preference from frontend
      fullName: bookingData.fullName,
      email: bookingData.email,
      phone: bookingData.phone,
      address: bookingData.address,
      city: bookingData.city,
      preferredDate: bookingData.date,
      preferredTime: bookingData.time,
      specialRequests: bookingData.specialRequests,
      status: "confirmed",
    });

    // Update user with subscription
    await User.findByIdAndUpdate(user._id, {
      currentSubscription: subscription._id,
      phone: bookingData.phone,
      address: bookingData.address,
      city: bookingData.city,
    });

    return NextResponse.json({
      message: "Payment verified and subscription created successfully",
      subscriptionId: subscription._id,
    });
  } catch (error) {
    console.error("Payment verification error:", error);
    return NextResponse.json({ message: "Payment verification failed" }, { status: 500 });
  }
}