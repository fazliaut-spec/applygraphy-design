// Application configuration
export const config = {
  app: {
    name: "Applygraphy",
    description: "Smart Immigration Platform",
    url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  },
  api: {
    universities: "http://universities.hipolabs.com",
  },
  recaptcha: {
    siteKey: "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI", // Test key
  },
  features: {
    enableAuth: true,
    enableUniversitySearch: true,
    enableConsultation: true,
    enableAIMatching: true,
  },
} as const

export type Config = typeof config
