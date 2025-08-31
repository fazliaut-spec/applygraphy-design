import { type NextRequest, NextResponse } from "next/server"
import { verifyRecaptcha } from "@/lib/recaptcha"

export async function POST(request: NextRequest) {
  try {
    const { email, password, captchaToken } = await request.json()

    // Verify reCAPTCHA
    const isRecaptchaValid = await verifyRecaptcha(captchaToken)
    if (!isRecaptchaValid) {
      return NextResponse.json({ error: "reCAPTCHA verification failed" }, { status: 400 })
    }

    // Validate input
    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // For demo purposes, just log and return success
    console.log("User signin:", { email })

    return NextResponse.json({
      success: true,
      message: "Signed in successfully!",
      user: { email },
    })
  } catch (error) {
    console.error("Signin error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
