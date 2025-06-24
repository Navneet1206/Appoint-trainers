import { type NextRequest, NextResponse } from "next/server"
import Razorpay from "razorpay"
import jwt from "jsonwebtoken"

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
})

const subscriptionPlans = {
  "1month": { price: 2999, sessions: 8, duration: 30 },
  "3month": { price: 7999, sessions: 24, duration: 90 },
  "6month": { price: 14999, sessions: 48, duration: 180 },
}

export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization")
    if (!authHeader) {
      return NextResponse.json({ message: "Authorization header missing" }, { status: 401 })
    }

    const token = authHeader.split(" ")[1]
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "fallback-secret") as any

    const { planId } = await request.json()
    const plan = subscriptionPlans[planId as keyof typeof subscriptionPlans]

    if (!plan) {
      return NextResponse.json({ message: "Invalid plan selected" }, { status: 400 })
    }

    // Create Razorpay order
    const order = await razorpay.orders.create({
      amount: plan.price * 100, // Amount in paise
      currency: "INR",
      receipt: `order_${Date.now()}`,
      notes: {
        userId: decoded.userId,
        planId,
        sessions: plan.sessions.toString(),
      },
    })

    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId: process.env.RAZORPAY_KEY_ID,
    })
  } catch (error) {
    console.error("Payment order creation error:", error)
    return NextResponse.json({ message: "Failed to create payment order" }, { status: 500 })
  }
}
