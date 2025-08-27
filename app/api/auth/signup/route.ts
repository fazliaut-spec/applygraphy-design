import { type NextRequest, NextResponse } from "next/server"
import { verifyRecaptcha } from "@/lib/recaptcha"

export async function POST(request: NextRequest) {
  console.log("📝 Sign-up attempt started")

  try {
    const body = await request.json()
    const { email, password, firstName, lastName, phone, captchaToken } = body

    console.log("📧 Sign-up data:", {
      email,
      firstName,
      lastName,
      phone,
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

    if (password.length < 8) {
      console.log("❌ Password too short")
      return NextResponse.json(
        {
          success: false,
          error: "رمز عبور باید حداقل ۸ کاراکتر باشد",
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

    // Phone validation (Iranian format)
    const phoneRegex = /^09\d{9}$/
    if (phone && !phoneRegex.test(phone)) {
      console.log("❌ Invalid phone format:", phone)
      return NextResponse.json(
        {
          success: false,
          error: "فرمت شماره تماس نامعتبر است (مثال: 09123456789)",
        },
        { status: 400 },
      )
    }

    // Simulate user creation
    console.log("👤 Creating new user...")

    // In a real app, you would:
    // 1. Check if email already exists
    // 2. Hash the password
    // 3. Save to database
    // 4. Send verification email

    const newUser = {
      id: `user_${Date.now()}`,
      email,
      firstName,
      lastName,
      phone,
      createdAt: new Date().toISOString(),
    }

    console.log("✅ User created successfully:", newUser.id)

    return NextResponse.json({
      success: true,
      message: "حساب کاربری با موفقیت ایجاد شد!",
      user: newUser,
    })
  } catch (error) {
    console.error("💥 Sign-up error:", error)
    return NextResponse.json(
      {
        success: false,
        error: "خطای داخلی سرور. لطفاً دوباره تلاش کنید.",
      },
      { status: 500 },
    )
  }
}
