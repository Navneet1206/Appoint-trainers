import { type NextRequest, NextResponse } from "next/server"
import jwt from "jsonwebtoken"
import { connectDB } from "@/lib/mongodb"
import User from "@/models/User"
import Subscription from "@/models/Subscription"

export async function GET(request: NextRequest) {
  try {
    await connectDB()

    const authHeader = request.headers.get("authorization")
    if (!authHeader) {
      return NextResponse.json({ message: "Authorization header missing" }, { status: 401 })
    }

    const token = authHeader.split(" ")[1]
    interface JwtPayload {
      userId: string;
      // add other properties if needed
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "fallback-secret") as JwtPayload

    const user = await User.findById(decoded.userId).populate("currentSubscription")
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 })
    }

    const subscription = await Subscription.findById(user.currentSubscription)

    const userData = {
      name: user.name,
      email: user.email,
      phone: user.phone || "Not provided",
      subscription: subscription
        ? {
            plan: subscription.planName,
            startDate: subscription.startDate,
            endDate: subscription.endDate,
            status: subscription.status,
            sessionsRemaining: subscription.remainingSessions,
          }
        : {
            plan: "No active subscription",
            startDate: null,
            endDate: null,
            status: "expired",
            sessionsRemaining: 0,
          },
      trainer: {
        name: "Priya Sharma", // This would come from booking data
        specialization: "Hatha Yoga",
        contact: "+91 98765 43210",
      },
      nextSession:
        subscription?.status === "active"
          ? {
              date: "2024-01-15",
              time: "07:00 AM",
            }
          : null,
    }

    return NextResponse.json(userData)
  } catch (error) {
    console.error("Profile fetch error:", error)
    return NextResponse.json({ message: "Failed to fetch profile" }, { status: 500 })
  }
}
