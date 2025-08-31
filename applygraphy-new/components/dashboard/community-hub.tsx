"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageCircle, Users, Heart } from "lucide-react"

const featuredThreads = [
  {
    id: 1,
    user: {
      name: "سارا احمدی",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "س.ا",
    },
    question: "تجربه تحصیل در آلمان - دانشگاه برلین",
    replies: 24,
    likes: 18,
    timeAgo: "۲ ساعت پیش",
  },
  {
    id: 2,
    user: {
      name: "علی رضایی",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "ع.ر",
    },
    question: "راهنمای کامل بورسیه تحصیلی کانادا",
    replies: 31,
    likes: 42,
    timeAgo: "۵ ساعت پیش",
  },
  {
    id: 3,
    user: {
      name: "مریم کریمی",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "م.ک",
    },
    question: "نکات مهم برای مصاحبه ویزای تحصیلی",
    replies: 19,
    likes: 27,
    timeAgo: "۱ روز پیش",
  },
]

export function CommunityHub() {
  return (
    <section className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          سوال بپرسید. تجربه‌تان را به اشتراک بگذارید.
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          جامعه‌ای رایگان و باز برای افرادی که قصد تحصیل در خارج دارند — سوال بپرسید، به دیگران کمک کنید و تجربیات واقعی
          را بخوانید.
        </p>
        <Button
          size="lg"
          className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Users className="w-5 h-5 ml-2" />
          عضویت در جامعه رایگان
        </Button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {featuredThreads.map((thread) => (
          <Card key={thread.id} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
            <CardContent className="p-6">
              <div className="flex items-start gap-3 mb-4">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={thread.user.avatar || "/placeholder.svg"} alt={thread.user.name} />
                  <AvatarFallback className="bg-gradient-to-r from-blue-500 to-green-500 text-white">
                    {thread.user.initials}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800 text-sm">{thread.user.name}</h4>
                  <p className="text-xs text-gray-500">{thread.timeAgo}</p>
                </div>
              </div>

              <h3 className="font-semibold text-gray-800 mb-4 line-clamp-2">{thread.question}</h3>

              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <MessageCircle className="w-4 h-4" />
                  <span>{thread.replies} پاسخ</span>
                </div>
                <div className="flex items-center gap-1">
                  <Heart className="w-4 h-4" />
                  <span>{thread.likes}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
