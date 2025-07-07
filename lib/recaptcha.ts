// Public reCAPTCHA site key - safe to expose in client-side code
export const RECAPTCHA_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // Test key - replace with your real key

// reCAPTCHA verification function for server-side
export async function verifyRecaptcha(token: string): Promise<boolean> {
  if (!token) return false

  try {
    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    })

    const data = await response.json()
    return data.success
  } catch (error) {
    console.error("reCAPTCHA verification error:", error)
    return false
  }
}
