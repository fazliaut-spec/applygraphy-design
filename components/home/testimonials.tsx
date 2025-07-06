import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "سارا احمدی",
    role: "دانشجوی کارشناسی ارشد - دانشگاه تورنتو",
    content: "با کمک اپلای‌گرافی توانستم به دانشگاه رویایی‌ام در کانادا راه پیدا کنم. مشاوره‌هایشان فوق‌العاده بود.",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    country: "🇨🇦",
  },
  {
    name: "علی رضایی",
    role: "دانشجوی دکترا - دانشگاه آکسفورد",
    content: "تیم اپلای‌گرافی در تمام مراحل کنارم بودند. از آمادگی آیلتس تا دریافت ویزا همه چیز عالی پیش رفت.",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    country: "🇬🇧",
  },
  {
    name: "مریم کریمی",
    role: "دانشجوی پزشکی - دانشگاه میلان",
    content: "آمادگی آزمون IMAT با اپلای‌گرافی واقعاً تفاوت ساز بود. الان دارم در ایتالیا پزشکی می‌خونم.",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    country: "🇮🇹",
  },
  {
    name: "امیرحسین نوری",
    role: "دانشجوی کارشناسی - دانشگاه برلین",
    content: "پکیج کامل اپلای‌گرافی شامل همه چیز بود. حتی برای پیدا کردن خونه و کار کمکم کردند.",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    country: "🇩🇪",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#02153D] mb-4">نظرات دانشجویان</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            داستان موفقیت دانشجویانی که با کمک ما به اهدافشان رسیدند
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="hover:shadow-lg transition-shadow duration-300 border-r-4 border-r-[#FF6A5C]"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-12 w-12 ml-4">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback className="bg-[#FF6A5C] text-white">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-semibold text-[#02153D] flex items-center gap-2">
                      {testimonial.name}
                      <span className="text-lg">{testimonial.country}</span>
                    </h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#FF6A5C] text-[#FF6A5C]" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
