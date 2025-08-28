"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageCircle, Clock, User } from "lucide-react"

interface Message {
  id: string
  sender: string
  subject: string
  preview: string
  timestamp: string
  isRead: boolean
  isFromAdmin: boolean
  priority: "low" | "medium" | "high"
}

const messages: Message[] = [
  {
    id: "1",
    sender: "تیم پشتیبانی",
    subject: "بررسی مدارک شما",
    preview: "مدارک ارسالی شما بررسی شد و نیاز به تکمیل اطلاعات دارد...",
    timestamp: "۲ ساعت پیش",
    isRead: false,
    isFromAdmin: true,
    priority: "high",
  },
  {
    id: "2",
    sender: "مشاور تحصیلی",
    subject: "پیشنهاد دانشگاه‌های جدید",
    preview: "بر اساس پروفایل شما، چند دانشگاه مناسب پیدا کردیم...",
    timestamp: "۵ ساعت پیش",
    isRead: true,
    isFromAdmin: true,
    priority: "medium",
  },
  {
    id: "3",
    sender: "سیستم خودکار",
    subject: "یادآوری مهلت درخواست",
    preview: "مهلت ارسال درخواست به دانشگاه تورنتو تا ۳ روز دیگر باقی مانده...",
    timestamp: "۱ روز پیش",
    isRead: false,
    isFromAdmin: true,
    priority: "high",
  },
]

interface MessagesListProps {
  onMessageSelect?: (message: Message) => void
}

export function MessagesList({ onMessageSelect }: MessagesListProps) {
  const [selectedMessage, setSelectedMessage] = useState<string | null>(null)

  const handleMessageClick = (message: Message) => {
    setSelectedMessage(message.id)
    onMessageSelect?.(message)
  }

  const getPriorityBadge = (priority: Message["priority"]) => {
    switch (priority) {
      case "high":
        return (
          <Badge variant="destructive" className="text-xs">
            فوری
          </Badge>
        )
      case "medium":
        return (
          <Badge variant="default" className="text-xs">
            متوسط
          </Badge>
        )
      case "low":
        return (
          <Badge variant="secondary" className="text-xs">
            کم
          </Badge>
        )
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageCircle className="h-5 w-5" />
          پیام‌ها
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="space-y-1">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`p-4 border-b cursor-pointer hover:bg-muted/50 transition-colors ${
                selectedMessage === message.id ? "bg-muted" : ""
              } ${!message.isRead ? "bg-blue-50 border-l-4 border-l-blue-500" : ""}`}
              onClick={() => handleMessageClick(message)}
            >
              <div className="flex items-start gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>{message.isFromAdmin ? "A" : <User className="h-4 w-4" />}</AvatarFallback>
                </Avatar>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className={`text-sm font-medium truncate ${!message.isRead ? "font-bold" : ""}`}>
                      {message.sender}
                    </h4>
                    <div className="flex items-center gap-2">
                      {getPriorityBadge(message.priority)}
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {message.timestamp}
                      </span>
                    </div>
                  </div>

                  <h5 className={`text-sm mb-1 truncate ${!message.isRead ? "font-semibold" : ""}`}>
                    {message.subject}
                  </h5>

                  <p className="text-xs text-muted-foreground line-clamp-2">{message.preview}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t">
          <Button variant="outline" className="w-full bg-transparent">
            مشاهده همه پیام‌ها
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
