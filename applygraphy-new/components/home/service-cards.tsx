"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, GraduationCap, FileText, Plane, BookOpen, Award, MapPin } from "lucide-react"

const services = [
  {
    id: 1,
    title: "دوره‌های زبان",
    description: "آمادگی برای آزمون‌های IELTS، TOEFL و سایر آزمون‌های زبان با بهترین اساتید",
    image: "/images/language-courses-bg.jpg",
    icon: BookOpen,
    href: "/language-courses",
    features: ["کلاس‌های آنلاین و حضوری", "تست‌های آزمایشی", "پشتیبانی ۲۴ ساعته"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "آزمون‌های بین‌المللی",
    description: "آمادگی کامل برای GRE، GMAT، SAT و سایر آزمون‌های استاندارد بین‌المللی",
    image: "/images/international-exams-bg.jpg",
    icon: Award,
    href: "/international-exams",
    features: ["برنامه مطالعاتی شخصی", "بانک سوالات جامع", "شبیه‌سازی آزمون"],
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "خدمات ویزا",
    description: "راهنمایی کامل برای دریافت ویزای تحصیلی کشورهای مختلف",
    image: "/images/visa-services-bg.jpg",
    icon: Plane,
    href: "/visa-services",
    features: ["بررسی مدارک", "تکمیل فرم‌ها", "آمادگی مصاحبه"],
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 4,
    title: "درخواست تحصیلی",
    description: "کمک در تهیه و ارسال مدارک اپلیکیشن به بهترین دانشگاه‌های جهان",
    image: "/images/academic-applications-bg.jpg",
    icon: FileText,
    href: "/academic-applications",
    features: ["نگارش SOP", "تهیه CV", "درخواست توصیه‌نامه"],
    color: "from-orange-500 to-red-500",
  },
  {
    id: 5,
    title: "مشاوره مقصد",
    description: "انتخاب بهترین کشور و دانشگاه متناسب با اهداف و بودجه شما",
    image: "/images/destination-consulting-bg.jpg",
    icon: MapPin,
    href: "/destination-consulting",
    features: ["تحلیل پروفایل", "مقایسه کشورها", "برنامه‌ریزی مالی"],
    color: "from-indigo-500 to-purple-500",
  },
  {
    id: 6,
    title: "پکیج کامل",
    description: "خدمات جامع از ابتدا تا انتها برای تحصیل در خارج از کشور",
    image: "/images/travel-package-bg.jpg",
    icon: GraduationCap,
    href: "/full-package",
    features: ["مشاوره کامل", "تمام خدمات", "پشتیبانی مادام‌العمر"],
    color: "from-teal-500 to-blue-500",
  },
]

export function ServiceCards() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#02153D] mb-4">خدمات ما</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            مجموعه کاملی از خدمات تخصصی برای تحقق رویای تحصیل در خارج از کشور
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.id}
              className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-0"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                <div className={`absolute top-4 right-4 p-3 rounded-full bg-gradient-to-r ${service.color}`}>
                  <service.icon className="h-6 w-6 text-white" />
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#02153D] mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-[#FF6A5C] rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className="w-full bg-[#FF6A5C] hover:bg-[#FF6A5C]/90 text-white group-hover:bg-[#02153D] transition-colors"
                >
                  <Link href={service.href}>
                    اطلاعات بیشتر
                    <ArrowLeft className="mr-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#FF6A5C] to-[#02153D] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">آماده شروع هستید؟</h3>
            <p className="text-lg mb-6 opacity-90">با مشاوره رایگان ما، اولین قدم را برای تحصیل در خارج بردارید</p>
            <Button asChild size="lg" variant="secondary" className="bg-white text-[#02153D] hover:bg-gray-100">
              <Link href="/contact">
                دریافت مشاوره رایگان
                <ArrowLeft className="mr-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
