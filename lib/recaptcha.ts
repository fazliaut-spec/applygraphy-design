/**
 * Google reCAPTCHA (v2) site-key used ONLY in the browser.
 * This is the public key you provided - safe to hard-code.
 */
export const RECAPTCHA_SITE_KEY = "6LeRj3srAAAAAHJFgYIaof6qzJlRmOMKUASdXBSX"

export async function verifyRecaptcha(token: string): Promise<boolean> {
  try {
    // Your secret key for server-side verification
    const secret = "6LeRj3srAAAAANZawi0oEVwcKuUyhfhOwvF4oeYP"

    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${secret}&response=${token}`,
    })

    const data = await response.json()
    return data.success === true
  } catch (error) {
    console.error("reCAPTCHA verification failed:", error)
    return false
  }
}
