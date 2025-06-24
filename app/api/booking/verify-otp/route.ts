import { type NextRequest, NextResponse } from "next/server"
import { connectDB } from "@/lib/mongodb"
import User from "@/models/User"

export async function POST(request: NextRequest) {
  try {
    await connectDB()

    const { email, otp } = await request.json()

    // Find user with OTP
    const user = await User.findOne({
      email,
      otp,
      otpExpiry: { $gt: new Date() },
    })

    if (!user) {
      return NextResponse.json({ message: "Invalid or expired OTP" }, { status: 400 })
    }

    // Clear OTP
    await User.findByIdAndUpdate(user._id, {
      $unset: { otp: 1, otpExpiry: 1 },
    })

    const isNewUser = !user.password

    return NextResponse.json({
      message: "OTP verified successfully",
      isNewUser,
    })
  } catch (error) {
    console.error("OTP verification error:", error)
    return NextResponse.json({ message: "OTP verification failed" }, { status: 500 })
  }
}
