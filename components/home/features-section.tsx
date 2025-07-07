"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Brain, Search, Users, Award, Clock, Shield } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "هوش مصنوعی پیشرفته",
    description: "سیستم تطبیق هوشمند که بهترین فرصت‌های تحصیلی را برای شما پیدا می‌کند",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Search,
    title: "جستجوی پیشرفته",
    description: "جستجو در هزاران دانشگاه معتبر جهان با فیلترهای دقیق و کاربردی",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    title: "مشاوران متخصص",
    description: "تیم مجرب مشاوران تحصیلی که سال‌ها تجربه در این حوزه دارند",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Award,
    title: "نرخ موفقیت بالا",
    description: "بیش از ۹۸٪ از دانشجویان ما موفق به دریافت پذیرش از دانشگاه‌های مطلوب شده‌اند",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Clock,
    title: "پشتیبانی ۲۴/۷",
    description: "تیم پشتیبانی ما همیشه آماده پاسخگویی به سوالات شما است",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Shield,
    title: "تضمین کیفیت",
    description: "تمام خدمات ما با ضمانت کیفیت و رضایت کامل ارائه می‌شود",
    color: "from-teal-500 to-blue-500",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#02153D] mb-4">چرا اپلای‌گرافی؟</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ویژگی‌هایی که ما را از سایر مراکز مشاوره متمایز می‌کند
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-gray-50 to-white"
            >
              <CardContent className="p-8 text-center">
                <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${feature.color} mb-6`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#02153D] mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
