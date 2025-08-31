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
          
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="hover:shadow-lg transition-shadow duration-300 border-r-4 border-r-[#FF6A5C]"
            >
              
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
