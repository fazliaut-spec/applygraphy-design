import { countryToLanguage, defaultLocale, type Locale } from "./config"

export async function detectUserLanguage(): Promise<Locale> {
  try {
    // Try to get user's country from IP
    const response = await fetch("https://ipapi.co/json/")
    const data = await response.json()

    if (data.country_code) {
      const detectedLanguage = countryToLanguage[data.country_code]
      if (detectedLanguage) {
        return detectedLanguage
      }
    }
  } catch (error) {
    console.log("Could not detect user location:", error)
  }

  // Fallback to browser language
  if (typeof window !== "undefined") {
    const browserLang = navigator.language.split("-")[0] as Locale
    if (Object.keys(countryToLanguage).includes(browserLang)) {
      return browserLang
    }
  }

  return defaultLocale
}

export async function detectUserCountry(): Promise<string | null> {
  try {
    const response = await fetch("https://ipapi.co/json/")
    const data = await response.json()
    return data.country_code || null
  } catch (error) {
    console.log("Could not detect user country:", error)
    return null
  }
}
