import { type NextRequest, NextResponse } from "next/server"
import { verifyRecaptcha } from "@/lib/recaptcha"

export async function POST(request: NextRequest) {
  console.log("🔐 Sign-in attempt started")

  try {
    const body = await request.json()
    const { email, password, captchaToken } = body

    console.log("📧 Sign-in data:", {
      email,
      hasPassword: !!password,
      hasCaptchaToken: !!captchaToken,
    })

    // Verify reCAPTCHA first
    console.log("🤖 Verifying reCAPTCHA...")
    const isRecaptchaValid = await verifyRecaptcha(captchaToken)

    if (!isRecaptchaValid) {
      console.log("❌ reCAPTCHA verification failed")
      return NextResponse.json(
        {
          success: false,
          error: "تأیید reCAPTCHA ناموفق بود. لطفاً دوباره تلاش کنید.",
        },
        { status: 400 },
      )
    }

    console.log("✅ reCAPTCHA verification successful")

    // Validate input
    if (!email || !password) {
      console.log("❌ Missing email or password")
      return NextResponse.json(
        {
          success: false,
          error: "ایمیل و رمز عبور الزامی است",
        },
        { status: 400 },
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      console.log("❌ Invalid email format:", email)
      return NextResponse.json(
        {
          success: false,
          error: "فرمت ایمیل نامعتبر است",
        },
        { status: 400 },
      )
    }

    // Simulate authentication logic
    console.log("🔍 Authenticating user...")

    // For demo purposes, accept any email/password combination
    // In a real app, you would check against your database
    const isValidUser = email.includes("@") && password.length >= 6

    if (!isValidUser) {
      console.log("❌ Invalid credentials")
      return NextResponse.json(
        {
          success: false,
          error: "ایمیل یا رمز عبور نامعتبر است",
        },
        { status: 401 },
      )
    }

    console.log("✅ User authenticated successfully")

    return NextResponse.json({
      success: true,
      message: "ورود با موفقیت انجام شد!",
      user: {
        email,
        name: "کاربر تست",
        id: "test-user-id",
      },
    })
  } catch (error) {
    console.error("💥 Sign-in error:", error)
    return NextResponse.json(
      {
        success: false,
        error: "خطای داخلی سرور. لطفاً دوباره تلاش کنید.",
      },
      { status: 500 },
    )
  }
}
