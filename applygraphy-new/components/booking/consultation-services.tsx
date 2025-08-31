"use client"

import { cn } from "@/lib/utils"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check, Phone, Clock, Users, GraduationCap, FileText, Plane } from "lucide-react"

const consultationServices = [
  {
    id: "initial",
    title: "مشاوره اولیه رایگان",
    description: "ارزیابی اولیه وضعیت تحصیلی و راهنمایی کلی",
    duration: "۳۰ دقیقه",
    price: "رایگان",
    type: "phone",
    icon: Phone,
    features: ["بررسی مدارک تحصیلی", "راهنمایی کلی مسیر تحصیل", "معرفی کشورهای مناسب", "پاسخ به سوالات اولیه"],
    popular: false,
  },
  {
    id: "comprehensive",
    title: "مشاوره جامع تحصیلی",
    description: "بررسی کامل پرونده و ارائه برنامه تفصیلی",
    duration: "۶۰ دقیقه",
    price: "۵۰۰,۰۰۰ تومان",
    type: "video",
    icon: GraduationCap,
    features: [
      "تحلیل کامل پرونده تحصیلی",
      "انتخاب رشته و دانشگاه",
      "برنامه زمان‌بندی کامل",
      "راهنمای آمادگی آزمون‌ها",
      "استراتژی درخواست بورسیه",
    ],
    popular: true,
  },
  {
    id: "application",
    title: "مشاوره درخواست تحصیلی",
    description: "راهنمایی تخصصی برای تکمیل فرم‌های درخواست",
    duration: "۴۵ دقیقه",
    price: "۳۰۰,۰۰۰ تومان",
    type: "video",
    icon: FileText,
    features: ["بررسی فرم‌های درخواست", "نگارش انگیزه‌نامه", "آماده‌سازی مدارک", "راهنمای مصاحبه", "پیگیری درخواست‌ها"],
    popular: false,
  },
  {
    id: "visa",
    title: "مشاوره ویزا و مهاجرت",
    description: "راهنمایی کامل فرآیند اخذ ویزا",
    duration: "۴۵ دقیقه",
    price: "۴۰۰,۰۰۰ تومان",
    type: "video",
    icon: Plane,
    features: ["بررسی مدارک ویزا", "آمادگی مصاحبه ویزا", "راهنمای مالی", "برنامه سفر", "مشاوره اسکان"],
    popular: false,
  },
  {
    id: "group",
    title: "مشاوره گروهی",
    description: "جلسات گروهی برای موضوعات عمومی",
    duration: "۹۰ دقیقه",
    price: "۱۵۰,۰۰۰ تومان",
    type: "group",
    icon: Users,
    features: ["جلسات ۵-۱۰ نفره", "موضوعات عمومی", "تعامل با سایر متقاضیان", "هزینه مقرون‌به‌صرفه", "ضبط جلسه"],
    popular: false,
  },
]

interface ConsultationServicesProps {
  selectedService: string | null
  onServiceSelect: (serviceId: string) => void
}

export function ConsultationServices({ selectedService, onServiceSelect }: ConsultationServicesProps) {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-[#02153D] mb-4">خدمات مشاوره</h2>
        <p className="text-gray-600">خدمات مشاوره‌ای ما را انتخاب کنید و از تجربه کارشناسان مجرب بهره‌مند شوید</p>
      </div>

      {/* Free consultation highlight */}
      <Card className="border-2 border-[#FF6A5C] bg-gradient-to-r from-[#FF6A5C]/5 to-[#02153D]/5">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#FF6A5C] rounded-full flex items-center justify-center">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#02153D]">مشاوره رایگان تلفنی</h3>
                <p className="text-gray-600">همین الان با ما تماس بگیرید</p>
              </div>
            </div>
            <Button asChild size="lg" className="bg-[#FF6A5C] hover:bg-[#FF6A5C]/90">
              <a href="tel:+989330578976" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                ۰۹۳۳۰۵۷۸۹۷۶
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Service cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {consultationServices.map((service) => (
          <Card
            key={service.id}
            className={cn(
              "relative cursor-pointer transition-all duration-300 hover:shadow-lg",
              selectedService === service.id
                ? "border-2 border-[#FF6A5C] shadow-lg"
                : "border border-gray-200 hover:border-[#FF6A5C]/50",
              service.popular && "ring-2 ring-[#FF6A5C]/20",
            )}
            onClick={() => onServiceSelect(service.id)}
          >
            {service.popular && <Badge className="absolute -top-2 right-4 bg-[#FF6A5C] text-white">محبوب‌ترین</Badge>}

            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-[#02153D]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <service.icon className="h-8 w-8 text-[#02153D]" />
              </div>
              <CardTitle className="text-lg text-[#02153D]">{service.title}</CardTitle>
              <p className="text-sm text-gray-600">{service.description}</p>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#FF6A5C]">{service.price}</div>
                <div className="text-sm text-gray-500 flex items-center justify-center gap-1">
                  <Clock className="h-4 w-4" />
                  {service.duration}
                </div>
              </div>

              <div className="space-y-2">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                className={cn(
                  "w-full",
                  selectedService === service.id
                    ? "bg-[#FF6A5C] hover:bg-[#FF6A5C]/90 text-white"
                    : "bg-gray-100 hover:bg-[#FF6A5C] hover:text-white text-gray-700",
                )}
              >
                {selectedService === service.id ? "انتخاب شده" : "انتخاب سرویس"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
