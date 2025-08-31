import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, MapPin } from "lucide-react"

const testimonials = [
  {
    name: "محمد رضایی",
    country: "کانادا",
    city: "تورنتو",
    flag: "🇨🇦",
    content:
      "با کمک تیم اپلای‌گرافی توانستم در عرض دو ماه کار مناسبی در تورنتو پیدا کنم. راهنمایی‌هایشان برای آمادگی مصاحبه و شبکه‌سازی فوق‌العاده بود.",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    service: "یافتن کار",
  },
  {
    name: "سارا احمدی",
    country: "آلمان",
    city: "برلین",
    flag: "🇩🇪",
    content:
      "پیدا کردن خانه در برلین کار آسانی نبود، اما با کمک مشاوران محلی اپلای‌گرافی توانستم خانه‌ای مناسب و با قیمت منطقی پیدا کنم.",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    service: "پیدا کردن مسکن",
  },
  {
    name: "علی نوری",
    country: "استرالیا",
    city: "سیدنی",
    flag: "🇦🇺",
    content:
      "فرآیند گرفتن گواهینامه در استرالیا پیچیده بود، اما با راهنمایی‌های دقیق تیم اپلای‌گرافی توانستم در اولین تلاش موفق شوم.",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    service: "گرفتن گواهینامه",
  },
  {
    name: "مریم کریمی",
    country: "انگلستان",
    city: "لندن",
    flag: "🇬🇧",
    content:
      "از ورود به فرودگاه تا پیدا کردن کار، تیم اپلای‌گرافی در تمام مراحل کنارم بودند. احساس می‌کردم خانواده‌ای در لندن دارم.",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    service: "پشتیبانی کامل",
  },
]

export function ConsultingTestimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#02153D] mb-4">تجربیات موفقیت</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            داستان موفقیت کسانی که با کمک ما در کشور جدید زندگی موفقی آغاز کرده‌اند
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
                      <span className="text-lg">{testimonial.flag}</span>
                    </h4>
                    <div className="flex items-center text-sm text-gray-600 gap-1">
                      <MapPin className="h-4 w-4" />
                      {testimonial.city}، {testimonial.country}
                    </div>
                    <p className="text-xs text-[#FF6A5C] font-medium">{testimonial.service}</p>
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
