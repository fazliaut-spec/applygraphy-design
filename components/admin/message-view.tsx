"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import {
  MessageSquare,
  Send,
  User,
  Calendar,
  Mail,
  Phone,
  Flag,
  Tag,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react"

interface Message {
  id: string
  senderName: string
  senderEmail: string
  senderPhone?: string
  subject: string
  content: string
  priority: "low" | "medium" | "high" | "urgent"
  status: "unread" | "read" | "replied" | "closed"
  category: "general" | "application" | "visa" | "technical" | "complaint"
  createdAt: string
  lastReplyAt?: string
  replies?: Array<{
    id: string
    author: string
    content: string
    createdAt: string
    isAdmin: boolean
  }>
}

interface AdminMessageViewProps {
  message: Message | null
  onReply: (messageId: string, reply: string) => void
  onStatusUpdate: (messageId: string, status: string) => void
  onPriorityUpdate: (messageId: string, priority: string) => void
}

export function AdminMessageView({ message, onReply, onStatusUpdate, onPriorityUpdate }: AdminMessageViewProps) {
  const [replyContent, setReplyContent] = useState("")
  const [isReplying, setIsReplying] = useState(false)

  if (!message) {
    return (
      <Card className="h-full">
        <CardContent className="flex items-center justify-center h-full">
          <div className="text-center">
            <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">پیامی انتخاب نشده است</p>
            <p className="text-sm text-gray-400">برای مشاهده جزئیات، یک پیام را انتخاب کنید</p>
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
      case "low":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "unread":
        return "bg-blue-100 text-blue-800"
      case "read":
        return "bg-gray-100 text-gray-800"
      case "replied":
        return "bg-green-100 text-green-800"
      case "closed":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "unread":
        return <AlertCircle className="h-3 w-3" />
      case "read":
        return <Clock className="h-3 w-3" />
      case "replied":
        return <CheckCircle className="h-3 w-3" />
      case "closed":
        return <CheckCircle className="h-3 w-3" />
      default:
        return <Clock className="h-3 w-3" />
    }
  }

  const handleReply = () => {
    if (replyContent.trim()) {
      onReply(message.id, replyContent)
      setReplyContent("")
      setIsReplying(false)
    }
  }

  return (
    <div className="space-y-4">
      {/* Message Header */}
      <Card>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <CardTitle className="text-xl mb-2">{message.subject}</CardTitle>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>{message.senderName}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Mail className="h-4 w-4" />
                  <span>{message.senderEmail}</span>
                </div>
                {message.senderPhone && (
                  <div className="flex items-center gap-1">
                    <Phone className="h-4 w-4" />
                    <span>{message.senderPhone}</span>
                  </div>
                )}
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(message.createdAt).toLocaleDateString("fa-IR")}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Badge className={getPriorityColor(message.priority)}>
                <Flag className="h-3 w-3 ml-1" />
                {message.priority === "urgent" && "فوری"}
                {message.priority === "high" && "بالا"}
                {message.priority === "medium" && "متوسط"}
                {message.priority === "low" && "پایین"}
              </Badge>

              <Badge className={getStatusColor(message.status)}>
                {getStatusIcon(message.status)}
                <span className="mr-1">
                  {message.status === "unread" && "خوانده نشده"}
                  {message.status === "read" && "خوانده شده"}
                  {message.status === "replied" && "پاسخ داده شده"}
                  {message.status === "closed" && "بسته شده"}
                </span>
              </Badge>

              <Badge variant="outline">
                <Tag className="h-3 w-3 ml-1" />
                {message.category === "general" && "عمومی"}
                {message.category === "application" && "درخواست"}
                {message.category === "visa" && "ویزا"}
                {message.category === "technical" && "فنی"}
                {message.category === "complaint" && "شکایت"}
              </Badge>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Message Content */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">محتوای پیام</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose prose-sm max-w-none">
            <p className="whitespace-pre-wrap">{message.content}</p>
          </div>
        </CardContent>
      </Card>

      {/* Replies */}
      {message.replies && message.replies.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">پاسخ‌ها</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {message.replies.map((reply, index) => (
                <div key={reply.id}>
                  <div
                    className={`p-4 rounded-lg ${
                      reply.isAdmin ? "bg-blue-50 border-r-4 border-blue-500" : "bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{reply.author}</span>
                        {reply.isAdmin && (
                          <Badge variant="secondary" className="text-xs">
                            ادمین
                          </Badge>
                        )}
                      </div>
                      <span className="text-sm text-gray-500">
                        {new Date(reply.createdAt).toLocaleDateString("fa-IR")}
                      </span>
                    </div>
                    <p className="whitespace-pre-wrap">{reply.content}</p>
                  </div>
                  {index < message.replies!.length - 1 && <Separator className="my-4" />}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">عملیات</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">تغییر وضعیت</label>
              <Select value={message.status} onValueChange={(value) => onStatusUpdate(message.id, value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="unread">خوانده نشده</SelectItem>
                  <SelectItem value="read">خوانده شده</SelectItem>
                  <SelectItem value="replied">پاسخ داده شده</SelectItem>
                  <SelectItem value="closed">بسته شده</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">تغییر اولویت</label>
              <Select value={message.priority} onValueChange={(value) => onPriorityUpdate(message.id, value)}>
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
            </div>
          </div>

          <Separator />

          {/* Reply Section */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-medium">پاسخ به پیام</h4>
              {!isReplying && (
                <Button onClick={() => setIsReplying(true)} variant="outline">
                  پاسخ دادن
                </Button>
              )}
            </div>

            {isReplying && (
              <div className="space-y-3">
                <Textarea
                  placeholder="پاسخ خود را بنویسید..."
                  value={replyContent}
                  onChange={(e) => setReplyContent(e.target.value)}
                  rows={4}
                />
                <div className="flex gap-2">
                  <Button onClick={handleReply} disabled={!replyContent.trim()}>
                    <Send className="h-4 w-4 ml-2" />
                    ارسال پاسخ
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setIsReplying(false)
                      setReplyContent("")
                    }}
                  >
                    انصراف
                  </Button>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
