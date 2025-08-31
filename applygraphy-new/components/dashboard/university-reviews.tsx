"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

const universityReviews = [
  {
    id: 1,
    university: "دانشگاه تورنتو",
    logo: "/placeholder.svg?height=60&width=60",
    rating: 4.8,
    totalReviews: 234,
    review: "محیط تحصیلی فوق‌العاده و اساتید بسیار حرفه‌ای. امکانات تحقیقاتی عالی.",
    reviewer: {
      name: "احمد محمدی",
      program: "مهندسی کامپیوتر",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "ا.م",
    },
  },
  {
    id: 2,
    university: "دانشگاه آکسفورد",
    logo: "/placeholder.svg?height=60&width=60",
    rating: 4.9,
    totalReviews: 189,
    review: "تجربه‌ای بی‌نظیر در یکی از معتبرترین دانشگاه‌های جهان. فرصت‌های شغلی عالی.",
    reviewer: {
      name: "فاطمه کریمی",
      program: "اقتصاد",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "ف.ک",
    },
  },
  {
    id: 3,
    university: "دانشگاه MIT",
    logo: "/placeholder.svg?height=60&width=60",
    rating: 4.9,
    totalReviews: 312,
    review: "بهترین دانشگاه برای علوم و فناوری. شبکه فارغ‌التحصیلان قدرتمند.",
    reviewer: {
      name: "علی رضایی",
      program: "مهندسی برق",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "ع.ر",
    },
  },
]

export function UniversityReviews() {
  return (
    <section className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">نظرات واقعی از دانشجویان واقعی</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          نظرات و رتبه‌بندی‌های معتبر دانشجویان برای دانشگاه‌های جهان را کشف کنید — از متقاضیانی مثل شما.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {universityReviews.map((review) => (
          <Card key={review.id} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-15 h-15 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Image
                    src={review.logo || "/placeholder.svg"}
                    alt={review.university}
                    width={60}
                    height={60}
                    className="rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800">{review.university}</h3>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(review.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {review.rating} ({review.totalReviews} نظر)
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative mb-4">
                <Quote className="w-6 h-6 text-blue-500 mb-2" />
                <p className="text-gray-700 italic">"{review.review}"</p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t">
                <Avatar className="w-8 h-8">
                  <AvatarImage src={review.reviewer.avatar || "/placeholder.svg"} alt={review.reviewer.name} />
                  <AvatarFallback className="bg-gradient-to-r from-blue-500 to-green-500 text-white text-xs">
                    {review.reviewer.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-semibold text-gray-800">{review.reviewer.name}</p>
                  <p className="text-xs text-gray-500">{review.reviewer.program}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button
          size="lg"
          variant="outline"
          className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300"
        >
          مشاهده همه نظرات
        </Button>
      </div>
    </section>
  )
}
