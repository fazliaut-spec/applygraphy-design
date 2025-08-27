/**
 * Google reCAPTCHA (v2) site-key used ONLY in the browser.
 * This is the public key you provided - safe to hard-code.
 */
export const RECAPTCHA_SITE_KEY = "6LdjSrQrAAAAAJ6bU0m4d4N4X7vOlVR9rkyVVXKr"

export async function verifyRecaptcha(token: string): Promise<boolean> {
  console.log("🔍 Starting reCAPTCHA verification...")

  if (!token) {
    console.log("❌ No reCAPTCHA token provided")
    return false
  }

  try {
    // Your secret key for server-side verification
    const secret = "6LdjSrQrAAAAAMHhPqSylXAIuCepUshLXSWq9a2H"

    console.log("📡 Sending verification request to Google...")

    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${secret}&response=${token}`,
    })

    if (!response.ok) {
      console.log("❌ HTTP error from Google reCAPTCHA API:", response.status)
      return false
    }

    const data = await response.json()
    console.log("📋 reCAPTCHA API response:", {
      success: data.success,
      score: data.score,
      action: data.action,
      hostname: data.hostname,
      challenge_ts: data.challenge_ts,
      error_codes: data["error-codes"],
    })

    if (data.success === true) {
      console.log("✅ reCAPTCHA verification successful")
      return true
    } else {
      console.log("❌ reCAPTCHA verification failed:", data["error-codes"])
      return false
    }
  } catch (error) {
    console.error("💥 reCAPTCHA verification error:", error)
    return false
  }
}
