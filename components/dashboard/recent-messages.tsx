"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageSquare, Reply } from "lucide-react"

const recentMessages = [
  {
    id: 1,
    sender: "مشاور تحصیلی",
    subject: "بررسی مدارک شما",
    preview: "مدارک شما بررسی شد و نیاز به تکمیل اطلاعات تماس دارید...",
    time: "2 ساعت پیش",
    unread: true,
    avatar: "/placeholder.svg?height=32&width=32",
    type: "advisor",
  },
  {
    id: 2,
    sender: "پشتیبانی",
    subject: "وضعیت درخواست شما",
    preview: "درخواست شما با موفقیت ثبت شد و در حال بررسی است...",
    time: "5 ساعت پیش",
    unread: true,
    avatar: "/placeholder.svg?height=32&width=32",
    type: "support",
  },
  {
    id: 3,
    sender: "مشاور ویزا",
    subject: "مراحل اخذ ویزا",
    preview: "برای اخذ ویزای تحصیلی کانادا مراحل زیر را دنبال کنید...",
    time: "1 روز پیش",
    unread: false,
    avatar: "/placeholder.svg?height=32&width=32",
    type: "visa",
  },
]

export function RecentMessages() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>پیام‌های اخیر</CardTitle>
          <CardDescription>آخرین مکالمات شما</CardDescription>
        </div>
        <Button variant="outline" size="sm">
          <MessageSquare className="h-4 w-4 ml-1" />
          همه پیام‌ها
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {recentMessages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start space-x-3 space-x-reverse p-3 rounded-lg border ${message.unread ? "bg-muted/50 border-primary/20" : ""}`}
            >
              <Avatar className="h-8 w-8">
                <AvatarImage src={message.avatar || "/placeholder.svg"} alt={message.sender} />
                <AvatarFallback>{message.sender.charAt(0)}</AvatarFallback>
              </Avatar>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <p className="text-sm font-medium">{message.sender}</p>
                    <Badge variant="outline" className="text-xs">
                      {message.type === "advisor" ? "مشاور" : message.type === "support" ? "پشتیبانی" : "ویزا"}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    {message.unread && (
                      <Badge variant="secondary" className="text-xs">
                        جدید
                      </Badge>
                    )}
                    <span className="text-xs text-muted-foreground">{message.time}</span>
                  </div>
                </div>

                <h4 className="text-sm font-medium mb-1">{message.subject}</h4>
                <p className="text-xs text-muted-foreground line-clamp-2 mb-2">{message.preview}</p>

                <Button size="sm" variant="ghost" className="h-6 px-2">
                  <Reply className="h-3 w-3 ml-1" />
                  پاسخ
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
