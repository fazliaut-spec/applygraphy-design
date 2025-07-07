// Public reCAPTCHA site key (safe to expose in client)
export const RECAPTCHA_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // Test key

// Server-side reCAPTCHA verification function
export async function verifyRecaptcha(token: string): Promise<boolean> {
  if (!token) return false

  // In development, always return true for testing
  if (process.env.NODE_ENV === "development") {
    console.log("Development mode: reCAPTCHA verification skipped")
    return true
  }

  try {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY
    if (!secretKey) {
      console.warn("RECAPTCHA_SECRET_KEY not configured")
      return true // Allow in development
    }

    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${secretKey}&response=${token}`,
    })

    const data = await response.json()
    return data.success === true
  } catch (error) {
    console.error("reCAPTCHA verification error:", error)
    return false
  }
}

// Helper function to get reCAPTCHA configuration
export function getRecaptchaConfig() {
  return {
    siteKey: RECAPTCHA_SITE_KEY,
    theme: "light" as const,
    size: "normal" as const,
  }
}
