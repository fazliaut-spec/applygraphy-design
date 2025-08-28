"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ServiceCheckout } from "@/components/payment/service-checkout"
import {
  GraduationCap,
  Plane,
  FileText,
  Globe,
  BookOpen,
  Users,
  ArrowLeft,
  Star,
  Clock,
  CheckCircle,
} from "lucide-react"

const services = [
  {
    id: "academic-applications",
    title: "درخواست‌های تحصیلی",
    titleEn: "Academic Applications",
    description: "کمک کامل برای درخواست تحصیل در بهترین دانشگاه‌های جهان",
    icon: GraduationCap,
    color: "bg-blue-500",
    features: ["بررسی مدارک", "نوشتن انگیزه‌نامه", "آماده‌سازی CV", "پیگیری درخواست"],
    startingPrice: 299,
    duration: "2-4 هفته",
    rating: 4.9,
    reviews: 1250,
    popular: true,
  },
  {
    id: "visa-services",
    title: "خدمات ویزا",
    titleEn: "Visa Services",
    description: "راهنمایی کامل برای اخذ ویزای تحصیلی و مهاجرت",
    icon: Plane,
    color: "bg-green-500",
    features: ["مشاوره ویزا", "آماده‌سازی مدارک", "راهنمایی مصاحبه", "پیگیری درخواست"],
    startingPrice: 199,
    duration: "1-2 هفته",
    rating: 4.8,
    reviews: 890,
  },
  {
    id: "document-translation",
    title: "ترجمه مدارک",
    titleEn: "Document Translation",
    description: "ترجمه رسمی و تأیید مدارک تحصیلی و اداری",
    icon: FileText,
    color: "bg-purple-500",
    features: ["ترجمه رسمی", "تأیید مدارک", "ارسال سریع", "ضمانت کیفیت"],
    startingPrice: 49,
    duration: "3-5 روز",
    rating: 4.7,
    reviews: 2100,
  },
  {
    id: "destination-consulting",
    title: "مشاوره مقصد",
    titleEn: "Destination Consulting",
    description: "انتخاب بهترین کشور و دانشگاه متناسب با شرایط شما",
    icon: Globe,
    color: "bg-orange-500",
    features: ["تحلیل پروفایل", "انتخاب کشور", "معرفی دانشگاه", "برنامه‌ریزی"],
    startingPrice: 149,
    duration: "1 هفته",
    rating: 4.9,
    reviews: 750,
  },
  {
    id: "language-preparation",
    title: "آمادگی زبان",
    titleEn: "Language Preparation",
    description: "دوره‌های تخصصی آمادگی برای آزمون‌های بین‌المللی زبان",
    icon: BookOpen,
    color: "bg-red-500",
    features: ["دوره IELTS/TOEFL", "تست آزمایشی", "تصحیح رایتینگ", "کلاس آنلاین"],
    startingPrice: 399,
    duration: "6-8 هفته",
    rating: 4.8,
    reviews: 1500,
  },
  {
    id: "mentorship",
    title: "منتورشیپ",
    titleEn: "Mentorship",
    description: "راهنمایی شخصی توسط دانشجویان و فارغ‌التحصیلان موفق",
    icon: Users,
    color: "bg-indigo-500",
    features: ["مشاوره شخصی", "تجربه‌های واقعی", "شبکه‌سازی", "پشتیبانی مداوم"],
    startingPrice: 99,
    duration: "ماهانه",
    rating: 4.9,
    reviews: 650,
  },
]

export function ServiceCards() {
  const [showCheckout, setShowCheckout] = useState(false)

  return (
    <section className="py-16 bg-gray-50" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#02153D] mb-4">خدمات ما</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            مجموعه کاملی از خدمات تخصصی برای موفقیت در مسیر تحصیل و مهاجرت
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <Card
                key={service.id}
                className="group hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                {service.popular && (
                  <Badge className="absolute top-4 left-4 bg-[#FF6A5C] text-white z-10">
                    <Star className="h-3 w-3 mr-1" />
                    محبوب
                  </Badge>
                )}

                <CardHeader className="relative">
                  <div
                    className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span>{service.rating}</span>
                    </div>
                    <span>({service.reviews} نظر)</span>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{service.duration}</span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    {service.features.length > 3 && (
                      <li className="text-sm text-gray-500">و {service.features.length - 3} مورد دیگر...</li>
                    )}
                  </ul>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <span className="text-sm text-gray-500">شروع از</span>
                      <div className="text-2xl font-bold text-[#FF6A5C]">${service.startingPrice}</div>
                    </div>
                    <Button
                      onClick={() => setShowCheckout(true)}
                      className="bg-[#FF6A5C] hover:bg-[#FF6A5C]/90 group-hover:scale-105 transition-transform"
                    >
                      سفارش
                      <ArrowLeft className="h-4 w-4 mr-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Button onClick={() => setShowCheckout(true)} size="lg" className="bg-[#FF6A5C] hover:bg-[#FF6A5C]/90">
            مشاهده تمام خدمات
            <ArrowLeft className="h-5 w-5 mr-2" />
          </Button>
        </div>
      </div>

      <ServiceCheckout isOpen={showCheckout} onClose={() => setShowCheckout(false)} />
    </section>
  )
}
