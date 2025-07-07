import { type NextRequest, NextResponse } from "next/server"
import { verifyRecaptcha } from "@/lib/recaptcha"

export async function POST(request: NextRequest) {
  try {
    const { name, email, password, recaptchaToken } = await request.json()

    // Verify reCAPTCHA
    const isRecaptchaValid = await verifyRecaptcha(recaptchaToken)
    if (!isRecaptchaValid) {
      return NextResponse.json({ error: "reCAPTCHA verification failed" }, { status: 400 })
    }

    // Validate input
    if (!name || !email || !password) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    if (password.length < 8) {
      return NextResponse.json({ error: "Password must be at least 8 characters long" }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // TODO: Integrate with Supabase or your preferred auth provider
    // For now, we'll simulate a successful signup
    console.log("User signup attempt:", { name, email })

    // Simulate email verification process
    // In a real app, you would:
    // 1. Hash the password
    // 2. Store user in database
    // 3. Send verification email
    // 4. Return success response

    return NextResponse.json({
      message: "Account created successfully! Please check your email for verification.",
      user: { name, email },
    })
  } catch (error) {
    console.error("Signup error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
