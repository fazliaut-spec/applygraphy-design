export interface Service {
  id: string
  name: string
  nameEn: string
  description: string
  price: number
  originalPrice?: number
  currency: string
  category: string
  duration: string
  rating: number
  studentsCount: number
  features: string[]
  popular?: boolean
  available: boolean
  createdAt: string
  updatedAt: string
}

export interface ServiceCategory {
  id: string
  name: string
  nameEn: string
  description: string
  icon: string
  serviceCount: number
}

export interface ServiceBooking {
  id: string
  serviceId: string
  userId: string
  status: "pending" | "confirmed" | "completed" | "cancelled"
  scheduledDate?: string
  notes?: string
  createdAt: string
}

// Real service data with Persian content
const SERVICES_DATA: Service[] = [
  {
    id: "comprehensive-consultation",
    name: "مشاوره جامع تحصیلی",
    nameEn: "Comprehensive Academic Consultation",
    description: "مشاوره کامل برای انتخاب دانشگاه، رشته و برنامه‌ریزی تحصیلی",
    price: 2500000,
    originalPrice: 3000000,
    currency: "IRR",
    category: "consulting",
    duration: "2 ساعت",
    rating: 4.8,
    studentsCount: 156,
    features: [
      "بررسی کامل پروفایل تحصیلی",
      "انتخاب بهترین دانشگاه‌ها",
      "راهنمایی انتخاب رشته",
      "برنامه‌ریزی زمانی پذیرش",
      "پشتیبانی 30 روزه",
      "ضمانت رضایت",
    ],
    popular: true,
    available: true,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-15T00:00:00Z",
  },
  {
    id: "motivation-letter-review",
    name: "بررسی و ویرایش انگیزه‌نامه",
    nameEn: "Motivation Letter Review & Editing",
    description: "بررسی، ویرایش و بهبود انگیزه‌نامه توسط متخصصان",
    price: 800000,
    currency: "IRR",
    category: "documents",
    duration: "3-5 روز کاری",
    rating: 4.9,
    studentsCount: 89,
    features: ["بررسی محتوا و ساختار", "ویرایش زبان و گرامر", "بازخورد تخصصی", "تضمین کیفیت", "ارسال نسخه نهایی"],
    popular: false,
    available: true,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-10T00:00:00Z",
  },
  {
    id: "interview-preparation",
    name: "آمادگی مصاحبه",
    nameEn: "Interview Preparation",
    description: "تمرین مصاحبه با مشاوران مجرب و دریافت بازخورد",
    price: 1200000,
    currency: "IRR",
    category: "preparation",
    duration: "1.5 ساعت",
    rating: 4.7,
    studentsCount: 67,
    features: [
      "شبیه‌سازی مصاحبه واقعی",
      "بازخورد فوری و تخصصی",
      "نکات کلیدی موفقیت",
      "تمرین چندباره",
      "راهنمای سوالات متداول",
    ],
    popular: false,
    available: true,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-12T00:00:00Z",
  },
  {
    id: "document-translation",
    name: "ترجمه رسمی مدارک",
    nameEn: "Official Document Translation",
    description: "ترجمه رسمی و تایید شده مدارک تحصیلی و شخصی",
    price: 500000,
    currency: "IRR",
    category: "documents",
    duration: "2-3 روز کاری",
    rating: 4.6,
    studentsCount: 234,
    features: ["ترجمه رسمی و معتبر", "تایید دفتر خانه", "تحویل سریع", "ضمانت کیفیت", "پشتیبانی پس از تحویل"],
    popular: false,
    available: true,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-08T00:00:00Z",
  },
  {
    id: "visa-consultation",
    name: "مشاوره ویزای تحصیلی",
    nameEn: "Student Visa Consultation",
    description: "راهنمایی کامل برای اخذ ویزای تحصیلی",
    price: 1800000,
    currency: "IRR",
    category: "visa",
    duration: "1 ساعت",
    rating: 4.8,
    studentsCount: 123,
    features: ["بررسی مدارک ویزا", "راهنمایی مصاحبه", "پیگیری درخواست", "پشتیبانی کامل", "ضمانت موفقیت"],
    popular: false,
    available: true,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-14T00:00:00Z",
  },
  {
    id: "ielts-course",
    name: "دوره آمادگی آیلتس",
    nameEn: "IELTS Preparation Course",
    description: "دوره جامع آمادگی آزمون آیلتس با ضمانت نمره",
    price: 3500000,
    originalPrice: 4000000,
    currency: "IRR",
    category: "courses",
    duration: "8 هفته",
    rating: 4.9,
    studentsCount: 445,
    features: ["کلاس‌های زنده آنلاین", "تست‌های تمرینی", "بازخورد شخصی", "ضمانت نمره 6.5", "منابع کامل", "پشتیبانی 24/7"],
    popular: true,
    available: true,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-16T00:00:00Z",
  },
]

const CATEGORIES_DATA: ServiceCategory[] = [
  {
    id: "consulting",
    name: "مشاوره تحصیلی",
    nameEn: "Academic Consulting",
    description: "مشاوره‌های تخصصی برای انتخاب دانشگاه و رشته",
    icon: "graduation-cap",
    serviceCount: 3,
  },
  {
    id: "documents",
    name: "مدارک و ترجمه",
    nameEn: "Documents & Translation",
    description: "خدمات ترجمه و تهیه مدارک",
    icon: "file-text",
    serviceCount: 2,
  },
  {
    id: "preparation",
    name: "آمادگی و تمرین",
    nameEn: "Preparation & Practice",
    description: "آمادگی برای مصاحبه و آزمون‌ها",
    icon: "target",
    serviceCount: 2,
  },
  {
    id: "visa",
    name: "خدمات ویزا",
    nameEn: "Visa Services",
    description: "راهنمایی و مشاوره ویزا",
    icon: "plane",
    serviceCount: 1,
  },
  {
    id: "courses",
    name: "دوره‌های آموزشی",
    nameEn: "Educational Courses",
    description: "دوره‌های آمادگی آزمون‌های بین‌المللی",
    icon: "book-open",
    serviceCount: 1,
  },
]

// API Functions
export async function getAllServices(): Promise<Service[]> {
  try {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500))
    return SERVICES_DATA
  } catch (error) {
    console.error("Error fetching services:", error)
    return []
  }
}

export async function getServicesByCategory(categoryId: string): Promise<Service[]> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 300))
    return SERVICES_DATA.filter((service) => service.category === categoryId)
  } catch (error) {
    console.error("Error fetching services by category:", error)
    return []
  }
}

export async function getServiceById(id: string): Promise<Service | null> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 200))
    return SERVICES_DATA.find((service) => service.id === id) || null
  } catch (error) {
    console.error("Error fetching service:", error)
    return null
  }
}

export async function getServiceCategories(): Promise<ServiceCategory[]> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 200))
    return CATEGORIES_DATA
  } catch (error) {
    console.error("Error fetching categories:", error)
    return []
  }
}

export async function searchServices(query: string): Promise<Service[]> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 300))
    const lowercaseQuery = query.toLowerCase()
    return SERVICES_DATA.filter(
      (service) =>
        service.name.toLowerCase().includes(lowercaseQuery) ||
        service.nameEn.toLowerCase().includes(lowercaseQuery) ||
        service.description.toLowerCase().includes(lowercaseQuery),
    )
  } catch (error) {
    console.error("Error searching services:", error)
    return []
  }
}

export async function getPopularServices(): Promise<Service[]> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 200))
    return SERVICES_DATA.filter((service) => service.popular)
  } catch (error) {
    console.error("Error fetching popular services:", error)
    return []
  }
}

export async function bookService(
  serviceId: string,
  userId: string,
  scheduledDate?: string,
  notes?: string,
): Promise<ServiceBooking> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const booking: ServiceBooking = {
      id: `booking_${Date.now()}`,
      serviceId,
      userId,
      status: "pending",
      scheduledDate,
      notes,
      createdAt: new Date().toISOString(),
    }

    return booking
  } catch (error) {
    console.error("Error booking service:", error)
    throw new Error("خطا در رزرو سرویس")
  }
}

export async function getUserBookings(userId: string): Promise<ServiceBooking[]> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 300))
    // This would fetch from a real database
    return [
      {
        id: "booking_1",
        serviceId: "comprehensive-consultation",
        userId,
        status: "confirmed",
        scheduledDate: "2024-02-15T10:00:00Z",
        notes: "مشاوره برای انتخاب دانشگاه در کانادا",
        createdAt: "2024-01-20T00:00:00Z",
      },
    ]
  } catch (error) {
    console.error("Error fetching user bookings:", error)
    return []
  }
}

export async function updateServiceRating(serviceId: string, rating: number, review?: string): Promise<boolean> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 500))
    // This would update the service rating in the database
    console.log(`Updated rating for service ${serviceId}: ${rating}`)
    return true
  } catch (error) {
    console.error("Error updating service rating:", error)
    return false
  }
}

export function formatPrice(price: number, currency = "IRR"): string {
  if (currency === "IRR") {
    return new Intl.NumberFormat("fa-IR").format(price) + " تومان"
  }
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
  }).format(price)
}

export function calculateDiscountPercentage(originalPrice: number, currentPrice: number): number {
  return Math.round(((originalPrice - currentPrice) / originalPrice) * 100)
}
