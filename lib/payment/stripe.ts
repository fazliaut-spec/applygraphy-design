"use client"

import { loadStripe } from "@stripe/stripe-js"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export { stripePromise }

export interface PaymentIntent {
  id: string
  amount: number
  currency: string
  status: string
  client_secret: string
}

export interface PaymentService {
  id: string
  name: string
  nameEn: string
  price: number
  currency: string
  category: string
  description: string
  features: string[]
  duration: string
  popular?: boolean
  contactRequired?: boolean
}

export const paymentServices: PaymentService[] = [
  {
    id: "academic-application-basic",
    name: "درخواست تحصیلی پایه",
    nameEn: "Basic Academic Application",
    price: 299,
    currency: "USD",
    category: "academic",
    description: "خدمات پایه برای درخواست تحصیل در خارج",
    features: ["بررسی مدارک تحصیلی", "راهنمایی انتخاب رشته", "کمک در تکمیل فرم‌های درخواست", "پشتیبانی ایمیلی"],
    duration: "2-3 هفته",
    contactRequired: true,
  },
  {
    id: "academic-application-premium",
    name: "درخواست تحصیلی پریمیوم",
    nameEn: "Premium Academic Application",
    price: 599,
    currency: "USD",
    category: "academic",
    description: "خدمات کامل برای درخواست تحصیل در خارج",
    features: ["تمام خدمات پایه", "نوشتن انگیزه‌نامه", "آماده‌سازی CV آکادمیک", "مشاوره تلفنی", "پیگیری درخواست‌ها"],
    duration: "3-4 هفته",
    popular: true,
    contactRequired: true,
  },
  {
    id: "visa-consultation",
    name: "مشاوره ویزا",
    nameEn: "Visa Consultation",
    price: 199,
    currency: "USD",
    category: "visa",
    description: "مشاوره کامل برای اخذ ویزای تحصیلی",
    features: ["بررسی مدارک ویزا", "راهنمایی مصاحبه", "آماده‌سازی اسناد مالی", "پشتیبانی تا اخذ ویزا"],
    duration: "1-2 هفته",
    contactRequired: true,
  },
  {
    id: "language-preparation",
    name: "آمادگی زبان",
    nameEn: "Language Preparation",
    price: 399,
    currency: "USD",
    category: "language",
    description: "دوره‌های آمادگی برای آزمون‌های زبان",
    features: ["دوره IELTS/TOEFL", "تست‌های آزمایشی", "تصحیح رایتینگ", "کلاس‌های آنلاین"],
    duration: "6-8 هفته",
    contactRequired: true,
  },
  {
    id: "full-package",
    name: "پکیج کامل",
    nameEn: "Complete Package",
    price: 1299,
    currency: "USD",
    category: "complete",
    description: "پکیج کامل شامل تمام خدمات",
    features: [
      "تمام خدمات درخواست تحصیلی",
      "مشاوره ویزا",
      "آمادگی زبان",
      "مشاوره انتخاب کشور",
      "پشتیبانی 24/7",
      "ضمانت پذیرش",
    ],
    duration: "8-12 هفته",
    popular: true,
    contactRequired: true,
  },
]

export async function createPaymentIntent(serviceId: string, amount: number) {
  const response = await fetch("/api/payment/create-intent", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      serviceId,
      amount: amount * 100, // Convert to cents
      currency: "usd",
    }),
  })

  if (!response.ok) {
    throw new Error("Failed to create payment intent")
  }

  return response.json()
}
