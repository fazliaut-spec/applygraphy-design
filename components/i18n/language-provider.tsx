"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import { detectUserLanguage } from "@/lib/i18n/geolocation"
import { defaultLocale, type Locale } from "@/lib/i18n/config"
import { translations, type TranslationKey } from "@/lib/i18n/translations"

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: TranslationKey) => string
  isRTL: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const initializeLanguage = async () => {
      // Check if user has a saved preference
      const savedLocale = localStorage.getItem("preferred-language") as Locale
      if (savedLocale && Object.keys(translations).includes(savedLocale)) {
        setLocaleState(savedLocale)
      } else {
        // Detect language based on IP/browser
        const detectedLocale = await detectUserLanguage()
        setLocaleState(detectedLocale)
      }
      setIsLoading(false)
    }

    initializeLanguage()
  }, [])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem("preferred-language", newLocale)

    // Update document direction for RTL languages
    document.documentElement.dir = ["fa", "ar"].includes(newLocale) ? "rtl" : "ltr"
    document.documentElement.lang = newLocale
  }

  const t = (key: TranslationKey): string => {
    return translations[locale]?.[key] || translations[defaultLocale][key] || key
  }

  const isRTL = ["fa", "ar"].includes(locale)

  // Update document direction when locale changes
  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr"
    document.documentElement.lang = locale
  }, [locale, isRTL])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return <LanguageContext.Provider value={{ locale, setLocale, t, isRTL }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
