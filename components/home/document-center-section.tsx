"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Download, CheckCircle, Clock, Users, Shield } from "lucide-react"

const documents = [
  {
    title: "راهنمای کامل اپلیکیشن",
    description: "مراحل کامل ارسال درخواست به دانشگاه‌های خارجی",
    icon: FileText,
    downloadCount: "۲۵۰۰+",
    type: "PDF",
  },
  {
    title: "نمونه انگیزه‌نامه",
    description: "مجموعه نمونه انگیزه‌نامه‌های موفق برای رشته‌های مختلف",
    icon: FileText,
    downloadCount: "۱۸۰۰+",
    type: "DOC",
  },
  {
    title: "چک‌لیست مدارک",
    description: "فهرست کامل مدارک مورد نیاز برای هر کشور",
    icon: CheckCircle,
    downloadCount: "۳۲۰۰+",
    type: "PDF",
  },
  {
    title: "تقویم تحصیلی",
    description: "مهم‌ترین تاریخ‌های اپلیکیشن دانشگاه‌های جهان",
    icon: Clock,
    downloadCount: "۱۵۰۰+",
    type: "PDF",
  },
]

const stats = [
  {
    icon: Users,
    value: "۱۰,۰۰۰+",
    label: "دانلود موفق",
  },
  {
    icon: FileText,
    value: "۵۰+",
    label: "منبع آموزشی",
  },
  {
    icon: Shield,
    value: "۱۰۰%",
    label: "رایگان",
  },
]

export function DocumentCenterSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#02153D] mb-4">مرکز منابع آموزشی</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            دسترسی رایگان به منابع آموزشی، راهنماها و ابزارهای مفید برای تحصیل در خارج
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-8 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2">
                  <stat.icon className="h-8 w-8 text-[#FF6A5C]" />
                </div>
                <div className="text-2xl font-bold text-[#02153D] mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {documents.map((doc, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow group">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-[#FF6A5C]/10 rounded-lg">
                    <doc.icon className="h-6 w-6 text-[#FF6A5C]" />
                  </div>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">{doc.type}</span>
                </div>

                <h3 className="font-bold text-[#02153D] mb-2">{doc.title}</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">{doc.description}</p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{doc.downloadCount} دانلود</span>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-[#FF6A5C] text-[#FF6A5C] hover:bg-[#FF6A5C] hover:text-white group-hover:bg-[#FF6A5C] group-hover:text-white transition-colors bg-transparent"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    دانلود
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#02153D] to-[#1a2951] rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">به منابع کامل دسترسی پیدا کنید</h3>
          <p className="text-lg mb-6 opacity-90">
            با عضویت رایگان، به بیش از ۱۰۰ منبع آموزشی و راهنمای تخصصی دسترسی پیدا کنید
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#FF6A5C] hover:bg-[#FF6A5C]/90 text-white">
              <Link href="/resources">مشاهده تمام منابع</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-[#02153D] bg-transparent"
            >
              <Link href="/auth?mode=signup">عضویت رایگان</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
