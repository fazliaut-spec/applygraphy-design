"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  MessageSquare,
  Send,
  Archive,
  Flag,
  User,
  Calendar,
  Mail,
  Phone,
  AlertCircle,
  CheckCircle,
  Clock,
} from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface Message {
  id: string
  subject: string
  content: string
  senderName: string
  senderEmail: string
  senderPhone?: string
  senderAvatar?: string
  priority: "low" | "medium" | "high" | "urgent"
  status: "unread" | "read" | "replied" | "archived"
  category: "general" | "application" | "visa" | "academic" | "technical"
  createdAt: string
  lastReplyAt?: string
  replies?: Array<{
    id: string
    content: string
    senderName: string
    senderType: "user" | "admin"
    createdAt: string
  }>
}

interface AdminMessageViewProps {
  message: Message | null
}

export function AdminMessageView({ message }: AdminMessageViewProps) {
  const [replyContent, setReplyContent] = useState("")
  const [priority, setPriority] = useState(message?.priority || "medium")
  const [status, setStatus] = useState(message?.status || "read")
  const { toast } = useToast()

  if (!message) {
    return (
      <Card className="h-full">
        <CardContent className="flex items-center justify-center h-full">
          <div className="text-center text-gray-500">
            <MessageSquare className="h-12 w-12 mx-auto mb-4 text-gray-300" />
            <p>پیامی انتخاب نشده است</p>
            <p className="text-sm">برای مشاهده جزئیات، یک پیام را انتخاب کنید</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "urgent":
        return "bg-red-100 text-red-800"
      case "high":
        return "bg-orange-100 text-orange-800"
      case "medium":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "unread":
        return <AlertCircle className="h-4 w-4 text-blue-500" />
      case "read":
        return <Clock className="h-4 w-4 text-yellow-500" />
      case "replied":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "archived":
        return <CheckCircle className="h-4 w-4 text-gray-500" />
      default:
        return <MessageSquare className="h-4 w-4" />
    }
  }

  const handleSendReply = () => {
    if (!replyContent.trim()) return

    // Here you would typically make an API call to send the reply
    toast({
      title: "پاسخ ارسال شد",
      description: "پاسخ شما با موفقیت ارسال شد.",
    })
    setReplyContent("")
    setStatus("replied")
  }

  const handleUpdateStatus = () => {
    // Here you would typically make an API call to update the status
    toast({
      title: "وضعیت به‌روزرسانی شد",
      description: "وضعیت پیام با موفقیت تغییر کرد.",
    })
  }

  const handleUpdatePriority = () => {
    // Here you would typically make an API call to update the priority
    toast({
      title: "اولویت به‌روزرسانی شد",
      description: "اولویت پیام با موفقیت تغییر کرد.",
    })
  }

  const handleArchive = () => {
    // Here you would typically make an API call to archive the message
    toast({
      title: "پیام آرشیو شد",
      description: "پیام با موفقیت آرشیو شد.",
    })
  }

  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              {message.subject}
            </CardTitle>
            <div className="flex items-center gap-2">
              {getStatusIcon(message.status)}
              <Badge className={getPriorityColor(message.priority)} variant="secondary">
                {message.priority === "urgent" && "فوری"}
                {message.priority === "high" && "بالا"}
                {message.priority === "medium" && "متوسط"}
                {message.priority === "low" && "پایین"}
              </Badge>
              <Badge variant="outline">
                {message.category === "general" && "عمومی"}
                {message.category === "application" && "درخواست"}
                {message.category === "visa" && "ویزا"}
                {message.category === "academic" && "تحصیلی"}
                {message.category === "technical" && "فنی"}
              </Badge>
            </div>
          </div>
          <Button variant="outline" onClick={handleArchive}>
            <Archive className="h-4 w-4 mr-2" />
            آرشیو
          </Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Sender Information */}
        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
          <Avatar className="h-12 w-12">
            <AvatarImage src={message.senderAvatar || "/placeholder.svg"} />
            <AvatarFallback>
              <User className="h-6 w-6" />
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h4 className="font-medium">{message.senderName}</h4>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Mail className="h-4 w-4" />
                {message.senderEmail}
              </div>
              {message.senderPhone && (
                <div className="flex items-center gap-1">
                  <Phone className="h-4 w-4" />
                  {message.senderPhone}
                </div>
              )}
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(message.createdAt).toLocaleDateString("fa-IR")}
              </div>
            </div>
          </div>
        </div>

        {/* Message Content */}
        <div className="space-y-4">
          <div className="p-4 border rounded-lg">
            <p className="whitespace-pre-wrap">{message.content}</p>
          </div>

          {/* Replies */}
          {message.replies && message.replies.length > 0 && (
            <div className="space-y-3">
              <h5 className="font-medium">پاسخ‌ها:</h5>
              {message.replies.map((reply) => (
                <div
                  key={reply.id}
                  className={`p-4 rounded-lg ${
                    reply.senderType === "admin" ? "bg-blue-50 border-blue-200" : "bg-gray-50 border-gray-200"
                  } border`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-sm">
                      {reply.senderName} {reply.senderType === "admin" && "(ادمین)"}
                    </span>
                    <span className="text-xs text-gray-500">
                      {new Date(reply.createdAt).toLocaleDateString("fa-IR")}
                    </span>
                  </div>
                  <p className="whitespace-pre-wrap text-sm">{reply.content}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Management Controls */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
          <div className="space-y-2">
            <label className="text-sm font-medium">تغییر وضعیت:</label>
            <div className="flex gap-2">
              <Select value={status} onValueChange={setStatus}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="unread">خوانده نشده</SelectItem>
                  <SelectItem value="read">خوانده شده</SelectItem>
                  <SelectItem value="replied">پاسخ داده شده</SelectItem>
                  <SelectItem value="archived">آرشیو شده</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" onClick={handleUpdateStatus}>
                به‌روزرسانی
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">تغییر اولویت:</label>
            <div className="flex gap-2">
              <Select value={priority} onValueChange={setPriority}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">پایین</SelectItem>
                  <SelectItem value="medium">متوسط</SelectItem>
                  <SelectItem value="high">بالا</SelectItem>
                  <SelectItem value="urgent">فوری</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" onClick={handleUpdatePriority}>
                <Flag className="h-4 w-4 mr-2" />
                به‌روزرسانی
              </Button>
            </div>
          </div>
        </div>

        {/* Reply Section */}
        <div className="space-y-4">
          <h5 className="font-medium">پاسخ دادن:</h5>
          <Textarea
            placeholder="پاسخ خود را بنویسید..."
            value={replyContent}
            onChange={(e) => setReplyContent(e.target.value)}
            rows={4}
          />
          <div className="flex justify-end">
            <Button onClick={handleSendReply} disabled={!replyContent.trim()}>
              <Send className="h-4 w-4 mr-2" />
              ارسال پاسخ
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
