"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Clock, Eye, BookOpen } from "lucide-react"
import Image from "next/image"

const contentPosts = [
  {
    id: 1,
    title: "راهنمای کامل دریافت بورسیه تحصیلی در کانادا",
    description: "همه چیز که باید درباره انواع بورسیه‌ها و نحوه درخواست آن‌ها بدانید",
    thumbnail: "/placeholder.svg?height=200&width=300",
    author: {
      name: "دکتر سارا احمدی",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "د.ا",
      title: "مشاور تحصیلی",
    },
    readTime: "۸ دقیقه",
    views: 1234,
    publishedAt: "۲ روز پیش",
  },
  {
    id: 2,
    title: "تجربه زندگی دانشجویی در آلمان: از A تا Z",
    description: "داستان واقعی یک دانشجوی ایرانی از اولین روزهای ورود تا فارغ‌التحصیلی",
    thumbnail: "/placeholder.svg?height=200&width=300",
    author: {
      name: "علی رضایی",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "ع.ر",
      title: "دانشجوی دکترا",
    },
    readTime: "۱۲ دقیقه",
    views: 2156,
    publishedAt: "۱ هفته پیش",
  },
  {
    id: 3,
    title: "۱۰ اشتباه رایج در نوشتن انگیزه‌نامه",
    description: "نکاتی که می‌تواند شانس پذیرش شما را به طور قابل توجهی افزایش دهد",
    thumbnail: "/placeholder.svg?height=200&width=300",
    author: {
      name: "مریم کریمی",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "م.ک",
      title: "مشاور ارشد",
    },
    readTime: "۶ دقیقه",
    views: 987,
    publishedAt: "۳ روز پیش",
  },
]

export function ContentFeed() {
  return (
    <section className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">بینش‌ها، داستان‌ها و نکات درخواست</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          مطالب روزانه ایجاد شده توسط متقاضیان و دانشجویان — یاد بگیرید و از طریق صداهای واقعی ارتباط برقرار کنید.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-8">
        {contentPosts.map((post) => (
          <Card
            key={post.id}
            className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md overflow-hidden"
          >
            <div className="relative">
              <Image
                src={post.thumbnail || "/placeholder.svg"}
                alt={post.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-gray-700">
                <BookOpen className="w-3 h-3 inline ml-1" />
                {post.readTime}
              </div>
            </div>

            <CardContent className="p-6">
              <h3 className="font-bold text-gray-800 mb-2 line-clamp-2">{post.title}</h3>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">{post.description}</p>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Eye className="w-3 h-3" />
                  <span>{post.views.toLocaleString("fa-IR")} بازدید</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Clock className="w-3 h-3" />
                  <span>{post.publishedAt}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t">
                <Avatar className="w-8 h-8">
                  <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
                  <AvatarFallback className="bg-gradient-to-r from-blue-500 to-green-500 text-white text-xs">
                    {post.author.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-semibold text-gray-800">{post.author.name}</p>
                  <p className="text-xs text-gray-500">{post.author.title}</p>
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
          className="border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300"
        >
          مشاهده همه مطالب
        </Button>
      </div>
    </section>
  )
}
