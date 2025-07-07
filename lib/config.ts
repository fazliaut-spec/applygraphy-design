// Application configuration constants
export const APP_CONFIG = {
  name: "ApplyGraphy",
  description: "پلتفرم جامع مشاوره تحصیلی و مهاجرت",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  contact: {
    email: "applygraphy@gmail.com",
    phone: "+98 933 057 8976",
    address: "Via Tourino 9, Italy",
  },
  social: {
    instagram: "https://instagram.com/applygraphy",
    telegram: "https://t.me/applygraphy",
    whatsapp: "https://wa.me/989330578976",
  },
}

// Supported languages
export const SUPPORTED_LANGUAGES = [
  { code: "fa", name: "فارسی", flag: "🇮🇷" },
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
]

// Service categories
export const SERVICE_CATEGORIES = [
  {
    id: "consultation",
    name: "مشاوره تحصیلی",
    description: "مشاوره تخصصی برای انتخاب رشته و دانشگاه",
    icon: "🎓",
  },
  {
    id: "application",
    name: "درخواست پذیرش",
    description: "کمک در تکمیل فرم‌های پذیرش دانشگاه",
    icon: "📝",
  },
  {
    id: "visa",
    name: "خدمات ویزا",
    description: "راهنمایی و کمک در اخذ ویزای تحصیلی",
    icon: "🛂",
  },
  {
    id: "language",
    name: "آموزش زبان",
    description: "دوره‌های آمادگی آزمون‌های بین‌المللی",
    icon: "🗣️",
  },
]
