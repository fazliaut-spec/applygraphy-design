"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Reply, Forward, Archive, Trash2, Clock, User } from "lucide-react"
import { useState } from "react"

interface Message {
  id: string
  sender: string
  subject: string
  content: string
  timestamp: string
  isFromAdmin: boolean
  priority: "low" | "medium" | "high"
}

interface MessageViewProps {
  message?: Message
}

export function MessageView({ message }: MessageViewProps) {
  const [replyText, setReplyText] = useState("")
  const [showReply, setShowReply] = useState(false)

  if (!message) {
    return (
      <Card className="h-full">
        <CardContent className="flex items-center justify-center h-full">
          <div className="text-center text-muted-foreground">
            <User className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>پیامی انتخاب نشده است</p>
            <p className="text-sm">برای مشاهده محتوا، یک پیام را انتخاب کنید</p>
          </div>
        </CardContent>
      </Card>
    )
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

  const handleReply = () => {
    // Handle reply logic here
    console.log("Reply:", replyText)
    setReplyText("")
    setShowReply(false)
  }

  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>{message.isFromAdmin ? "A" : <User className="h-5 w-5" />}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-lg">{message.subject}</CardTitle>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-sm text-muted-foreground">از: {message.sender}</span>
                {getPriorityBadge(message.priority)}
              </div>
              <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                {message.timestamp}
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Reply className="h-4 w-4 mr-1" />
              پاسخ
            </Button>
            <Button variant="outline" size="sm">
              <Forward className="h-4 w-4 mr-1" />
              ارسال
            </Button>
            <Button variant="outline" size="sm">
              <Archive className="h-4 w-4 mr-1" />
              آرشیو
            </Button>
            <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700 bg-transparent">
              <Trash2 className="h-4 w-4 mr-1" />
              حذف
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="prose prose-sm max-w-none">
          <div className="whitespace-pre-wrap text-sm leading-relaxed">
            {message.content ||
              `سلام،

مدارک ارسالی شما بررسی شد. لطفاً موارد زیر را تکمیل کنید:

۱. گواهی زبان انگلیسی (آیلتس یا تافل)
۲. ترجمه رسمی مدرک تحصیلی
۳. نامه انگیزه به زبان انگلیسی

پس از تکمیل این موارد، درخواست شما برای بررسی نهایی ارسال خواهد شد.

با تشکر،
تیم پشتیبانی اپلای‌گرافی`}
          </div>
        </div>

        {showReply && (
          <div className="border-t pt-4 space-y-3">
            <h4 className="font-medium">پاسخ شما:</h4>
            <Textarea
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              placeholder="پاسخ خود را بنویسید..."
              rows={4}
            />
            <div className="flex gap-2">
              <Button onClick={handleReply}>ارسال پاسخ</Button>
              <Button variant="outline" onClick={() => setShowReply(false)}>
                انصراف
              </Button>
            </div>
          </div>
        )}

        {!showReply && (
          <div className="border-t pt-4">
            <Button onClick={() => setShowReply(true)} className="w-full">
              <Reply className="h-4 w-4 mr-2" />
              پاسخ دادن
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
