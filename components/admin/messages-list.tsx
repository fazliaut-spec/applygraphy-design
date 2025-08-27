"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MessageSquare, Search, Clock, AlertCircle, CheckCircle, User, Calendar } from "lucide-react"

interface Message {
  id: string
  subject: string
  content: string
  senderName: string
  senderEmail: string
  senderAvatar?: string
  priority: "low" | "medium" | "high" | "urgent"
  status: "unread" | "read" | "replied" | "archived"
  category: "general" | "application" | "visa" | "academic" | "technical"
  createdAt: string
  lastReplyAt?: string
}

interface AdminMessagesListProps {
  onMessageSelect: (message: Message) => void
  selectedMessageId?: string
}

export function AdminMessagesList({ onMessageSelect, selectedMessageId }: AdminMessagesListProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [priorityFilter, setPriorityFilter] = useState("all")
  const [categoryFilter, setCategoryFilter] = useState("all")

  // Mock data - replace with actual API call
  const messages: Message[] = [
    {
      id: "1",
      subject: "سوال در مورد پردازش درخواست",
      content: "سلام، می‌خواستم بدانم درخواست من چه وضعیتی دارد؟",
      senderName: "علی احمدی",
      senderEmail: "ali@example.com",
      priority: "medium",
      status: "unread",
      category: "application",
      createdAt: "2024-01-15T10:30:00Z",
    },
    {
      id: "2",
      subject: "مشکل در آپلود مدارک",
      content: "هنگام آپلود مدارک با خطا مواجه می‌شوم.",
      senderName: "فاطمه کریمی",
      senderEmail: "fateme@example.com",
      priority: "high",
      status: "read",
      category: "technical",
      createdAt: "2024-01-14T15:45:00Z",
      lastReplyAt: "2024-01-14T16:00:00Z",
    },
    {
      id: "3",
      subject: "اطلاعات ویزای تحصیلی",
      content: "لطفاً اطلاعات کاملی در مورد ویزای تحصیلی آلمان ارائه دهید.",
      senderName: "محمد رضایی",
      senderEmail: "mohammad@example.com",
      priority: "low",
      status: "replied",
      category: "visa",
      createdAt: "2024-01-13T09:15:00Z",
      lastReplyAt: "2024-01-13T14:30:00Z",
    },
  ]

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

  const filteredMessages = messages.filter((message) => {
    const matchesSearch =
      message.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.senderName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.content.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || message.status === statusFilter
    const matchesPriority = priorityFilter === "all" || message.priority === priorityFilter
    const matchesCategory = categoryFilter === "all" || message.category === categoryFilter

    return matchesSearch && matchesStatus && matchesPriority && matchesCategory
  })

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5" />
          پیام‌ها ({filteredMessages.length})
        </CardTitle>

        {/* Filters */}
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="جستجو در پیام‌ها..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger>
                <SelectValue placeholder="وضعیت" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">همه وضعیت‌ها</SelectItem>
                <SelectItem value="unread">خوانده نشده</SelectItem>
                <SelectItem value="read">خوانده شده</SelectItem>
                <SelectItem value="replied">پاسخ داده شده</SelectItem>
                <SelectItem value="archived">آرشیو شده</SelectItem>
              </SelectContent>
            </Select>

            <Select value={priorityFilter} onValueChange={setPriorityFilter}>
              <SelectTrigger>
                <SelectValue placeholder="اولویت" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">همه اولویت‌ها</SelectItem>
                <SelectItem value="urgent">فوری</SelectItem>
                <SelectItem value="high">بالا</SelectItem>
                <SelectItem value="medium">متوسط</SelectItem>
                <SelectItem value="low">پایین</SelectItem>
              </SelectContent>
            </Select>

            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger>
                <SelectValue placeholder="دسته‌بندی" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">همه دسته‌ها</SelectItem>
                <SelectItem value="general">عمومی</SelectItem>
                <SelectItem value="application">درخواست</SelectItem>
                <SelectItem value="visa">ویزا</SelectItem>
                <SelectItem value="academic">تحصیلی</SelectItem>
                <SelectItem value="technical">فنی</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-0">
        <div className="space-y-1 max-h-[600px] overflow-y-auto">
          {filteredMessages.map((message) => (
            <div
              key={message.id}
              className={`p-4 border-b cursor-pointer hover:bg-gray-50 transition-colors ${
                selectedMessageId === message.id ? "bg-blue-50 border-blue-200" : ""
              }`}
              onClick={() => onMessageSelect(message)}
            >
              <div className="flex items-start gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={message.senderAvatar || "/placeholder.svg"} />
                  <AvatarFallback>
                    <User className="h-5 w-5" />
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium text-sm truncate">{message.senderName}</h4>
                      <Badge className={getPriorityColor(message.priority)} variant="secondary">
                        {message.priority === "urgent" && "فوری"}
                        {message.priority === "high" && "بالا"}
                        {message.priority === "medium" && "متوسط"}
                        {message.priority === "low" && "پایین"}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(message.status)}
                      <span className="text-xs text-gray-500">
                        {new Date(message.createdAt).toLocaleDateString("fa-IR")}
                      </span>
                    </div>
                  </div>

                  <h5 className="font-medium text-sm mb-1 truncate">{message.subject}</h5>

                  <p className="text-sm text-gray-600 line-clamp-2 mb-2">{message.content}</p>

                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {message.category === "general" && "عمومی"}
                      {message.category === "application" && "درخواست"}
                      {message.category === "visa" && "ویزا"}
                      {message.category === "academic" && "تحصیلی"}
                      {message.category === "technical" && "فنی"}
                    </Badge>

                    {message.lastReplyAt && (
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Calendar className="h-3 w-3" />
                        آخرین پاسخ: {new Date(message.lastReplyAt).toLocaleDateString("fa-IR")}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {filteredMessages.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              <MessageSquare className="h-12 w-12 mx-auto mb-4 text-gray-300" />
              <p>پیامی یافت نشد</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
