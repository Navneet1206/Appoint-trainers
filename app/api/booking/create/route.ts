import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { connectDB } from "@/lib/mongodb"
import User from "@/models/User"

// Generate 6-digit OTP
function generateOTP(): string {
  return Math.floor(100000 + Math.random() * 900000).toString()
}

export async function POST(request: NextRequest) {
  try {
    await connectDB()

    const bookingData = await request.json()
    const { email, fullName } = bookingData

    // Check if user exists
    let user = await User.findOne({ email })
    let isNewUser = false

    if (!user) {
      // Create new user without password
      user = await User.create({
        name: fullName,
        email,
        isVerified: false,
      })
      isNewUser = true
    }

    // Generate OTP
    const otp = generateOTP()
    const otpExpiry = new Date(Date.now() + 10 * 60 * 1000) // 10 minutes

    // Store OTP in user document
    await User.findByIdAndUpdate(user._id, {
      otp,
      otpExpiry,
      tempBookingData: bookingData,
    })

    // Send OTP email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "SavayasYoga - Verify Your Booking",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #10b981;">Welcome to SavayasYoga!</h2>
          <p>Hi ${fullName},</p>
          <p>Thank you for booking a yoga session with us. Please use the following OTP to verify your booking:</p>
          <div style="background: #f0fdf4; padding: 20px; border-radius: 10px; text-align: center; margin: 20px 0;">
            <h1 style="color: #10b981; font-size: 32px; margin: 0;">${otp}</h1>
          </div>
          <p>This OTP will expire in 10 minutes.</p>
          <p>If you didn't request this, please ignore this email.</p>
          <p>Best regards,<br>SavayasYoga Team</p>
        </div>
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({
      message: "OTP sent successfully",
      isNewUser,
    })
  } catch (error) {
    console.error("Booking creation error:", error)
    return NextResponse.json({ message: "Failed to create booking" }, { status: 500 })
  }
}
