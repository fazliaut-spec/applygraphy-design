export const locales = ["en", "fa", "ar", "es", "fr", "de", "zh", "ja", "ko"] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = "en"

export const localeNames: Record<Locale, string> = {
  en: "English",
  fa: "فارسی",
  ar: "العربية",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
  zh: "中文",
  ja: "日本語",
  ko: "한국어",
}

// Country to language mapping
export const countryToLanguage: Record<string, Locale> = {
  IR: "fa", // Iran
  AF: "fa", // Afghanistan
  TJ: "fa", // Tajikistan
  SA: "ar", // Saudi Arabia
  AE: "ar", // UAE
  EG: "ar", // Egypt
  JO: "ar", // Jordan
  LB: "ar", // Lebanon
  SY: "ar", // Syria
  IQ: "ar", // Iraq
  ES: "es", // Spain
  MX: "es", // Mexico
  AR: "es", // Argentina
  CO: "es", // Colombia
  FR: "fr", // France
  CA: "fr", // Canada (Quebec)
  BE: "fr", // Belgium
  DE: "de", // Germany
  AT: "de", // Austria
  CH: "de", // Switzerland
  CN: "zh", // China
  TW: "zh", // Taiwan
  HK: "zh", // Hong Kong
  JP: "ja", // Japan
  KR: "ko", // South Korea
  // Default to English for other countries
}
