"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Target, TrendingUp, CheckCircle } from "lucide-react"

const benefits = [
  {
    icon: Target,
    title: "تطبیق دقیق",
    description: "بر اساس پروفایل تحصیلی و اهداف شما",
  },
  {
    icon: TrendingUp,
    title: "تحلیل احتمال پذیرش",
    description: "محاسبه دقیق شانس پذیرش در هر دانشگاه",
  },
  {
    icon: CheckCircle,
    title: "پیشنهادات شخصی‌سازی شده",
    description: "توصیه‌های منحصر به فرد برای هر فرد",
  },
]

export function AiMatchingSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#02153D] to-[#1a2951] text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-[#FF6A5C] rounded-full">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <span className="text-[#FF6A5C] font-semibold text-lg">هوش مصنوعی</span>
            </div>

            <h2 className="text-4xl font-bold mb-6">
              سیستم تطبیق هوشمند
              <br />
              <span className="text-[#FF6A5C]">اپلای‌گرافی</span>
            </h2>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              با استفاده از الگوریتم‌های پیشرفته هوش مصنوعی، بهترین دانشگاه‌ها و رشته‌های تحصیلی متناسب با پروفایل و اهداف
              شما را پیدا کنید.
            </p>

            {/* Benefits */}
            <div className="space-y-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="p-2 bg-[#FF6A5C]/20 rounded-lg">
                    <benefit.icon className="h-6 w-6 text-[#FF6A5C]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-[#FF6A5C] hover:bg-[#FF6A5C]/90 text-white">
                <Link href="/smart-matching">شروع تطبیق هوشمند</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-[#02153D] bg-transparent"
              >
                <Link href="/ai-matching">اطلاعات بیشتر</Link>
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <div className="relative h-80 rounded-lg overflow-hidden mb-6">
                  <Image src="/images/ai-matching-demo.jpg" alt="سیستم تطبیق هوشمند" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">تحلیل هوشمند پروفایل</h3>
                  <p className="text-gray-300 mb-4">سیستم ما بیش از ۵۰ پارامتر مختلف را تحلیل می‌کند</p>

                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-[#FF6A5C]">۱۰۰۰+</div>
                      <div className="text-sm text-gray-300">دانشگاه</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#FF6A5C]">۹۵%</div>
                      <div className="text-sm text-gray-300">دقت</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#FF6A5C]">۲۴/۷</div>
                      <div className="text-sm text-gray-300">دسترسی</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
