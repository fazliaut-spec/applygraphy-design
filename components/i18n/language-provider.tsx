"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface LanguageContextType {
  language: "fa" | "en"
  setLanguage: (lang: "fa" | "en") => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  fa: {
    home: "خانه",
    about: "درباره ما",
    services: "خدمات",
    contact: "تماس با ما",
  },
  en: {
    home: "Home",
    about: "About Us",
    services: "Services",
    contact: "Contact Us",
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<"fa" | "en">("fa")

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.fa] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
