/**
 * Public & server-side helpers for Google reCAPTCHA v2 / v3.
 * - Only the SITE key is shipped to the client (safe).
 * - Secret key stays server-side via env var RECAPTCHA_SECRET_KEY.
 */

export const RECAPTCHA_SITE_KEY = "REPLACE_WITH_YOUR_PUBLIC_SITE_KEY"

/**
 * verifyRecaptcha – server-side validation of a client token.
 */
export async function verifyRecaptcha(token: string): Promise<boolean> {
  if (!process.env.RECAPTCHA_SECRET_KEY) {
    console.warn("RECAPTCHA_SECRET_KEY is not set; skipping verification.")
    // In non-production preview fallback to “true” to avoid blocking local tests
    return process.env.NODE_ENV !== "production"
  }

  const params = new URLSearchParams({
    secret: process.env.RECAPTCHA_SECRET_KEY,
    response: token,
  })

  const res = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params.toString(),
  })

  if (!res.ok) {
    console.error("reCAPTCHA verification HTTP error", res.status)
    return false
  }

  const data: { success: boolean } = await res.json()
  return data.success
}
