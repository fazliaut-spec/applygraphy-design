// Application configuration
export const APP_CONFIG = {
  name: "ApplyGraphy",
  description: "Your trusted partner for educational migration and university applications",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://applygraphy.com",
  contact: {
    email: "applygraphy@gmail.com",
    phone: "+98 933 057 8976",
    address: "Via Tourino 9, Italy",
  },
  social: {
    twitter: "@applygraphy",
    linkedin: "company/applygraphy",
    instagram: "@applygraphy",
  },
  features: {
    enableAuth: true,
    enableChat: true,
    enableUniversitySearch: true,
    enableAIMatching: true,
    enableMultiLanguage: true,
  },
  languages: {
    default: "en",
    supported: ["en", "fa", "it"],
  },
  api: {
    universitiesApi: "http://universities.hipolabs.com",
    timeout: 10000,
  },
}

// Environment-specific configuration
export const ENV_CONFIG = {
  isDevelopment: process.env.NODE_ENV === "development",
  isProduction: process.env.NODE_ENV === "production",
  isTest: process.env.NODE_ENV === "test",
}

// External service configuration
export const EXTERNAL_SERVICES = {
  supabase: {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL,
    anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },
  openai: {
    apiKey: process.env.OPENAI_API_KEY,
  },
  recaptcha: {
    secretKey: process.env.RECAPTCHA_SECRET_KEY,
  },
}
