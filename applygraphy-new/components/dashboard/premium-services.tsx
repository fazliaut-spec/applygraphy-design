"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageSquare, FileCheck, Calendar, Users } from "lucide-react"

const services = [
  {
    icon: MessageSquare,
    title: "مشاوره تک‌به‌تک",
    description: "جلسه ۳۰ دقیقه‌ای با مشاور متخصص",
    price: "۲۵۰,۰۰۰ تومان",
    popular: false,
  },
  {
    icon: FileCheck,
    title: "بررسی مدارک",
    description: "بازبینی و بهبود مدارک درخواست",
    price: "۱۵۰,۰۰۰ تومان",
    popular: true,
  },
  {
    icon: Calendar,
    title: "برنامه‌ریزی کامل",
    description: "تایم‌لاین شخصی‌سازی شده برای درخواست",
    price: "۳۰۰,۰۰۰ تومان",
    popular: false,
  },
  {
    icon: Users,
    title: "جلسه گروهی",
    description: "ورکشاپ آنلاین با سایر متقاضیان",
    price: "۱۰۰,۰۰۰ تومان",
    popular: false,
  },
]

export function PremiumServices() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-green-50 rounded-3xl shadow-lg p-8 md:p-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          کمک نیاز دارید؟ با متخصص صحبت کنید — هر وقت بخواهید
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          بدون فشار. بدون بسته‌بندی اجباری. فقط پشتیبانی متخصص در صورت نیاز — مثل بررسی مدارک یا مشاوره شخصی.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {services.map((service, index) => {
          const IconComponent = service.icon
          return (
            <Card
              key={index}
              className={`hover:shadow-lg transition-all duration-300 border-0 shadow-md relative ${
                service.popular ? "ring-2 ring-blue-500 transform scale-105" : ""
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">محبوب‌ترین</span>
                </div>
              )}
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-blue-600 mb-4">{service.price}</div>
                <Button
                  size="sm"
                  className="w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white rounded-full"
                >
                  رزرو جلسه
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="text-center">
        <p className="text-sm text-gray-600 mb-4">همه خدمات با ضمانت رضایت ۱۰۰٪ ارائه می‌شوند</p>
        <Button
          size="lg"
          variant="outline"
          className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300"
        >
          مشاهده همه خدمات
        </Button>
      </div>
    </section>
  )
}
