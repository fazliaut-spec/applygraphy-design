"use server"

/**
 * Google reCAPTCHA (v2) site-key used ONLY in the browser.
 * This is Google’s official public “test” key so it’s safe to hard-code.
 * https://developers.google.com/recaptcha/docs/faq#test-keys
 */
export const RECAPTCHA_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"

export async function verifyRecaptcha(token: string): Promise<boolean> {
  try {
    // در حالت حرفه‌ای بهتر است این خط از environment variable بخواند
    const secret = "6LeRj3srAAAAANZawi0oEVwcKuUyhfhOwvF4oeYP"

    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${secret}&response=${token}`,
    })

    const data = await res.json()
    return data.success === true
  } catch (error) {
    console.error("reCAPTCHA verification failed:", error)
    return false
  }
}
