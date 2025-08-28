"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MessageSquare, Search, Filter, Clock, AlertCircle, CheckCircle, User, Calendar } from "lucide-react"

interface Message {
  id: string
  senderName: string
  senderEmail: string
  subject: string
  content: string
  priority: "low" | "medium" | "high" | "urgent"
  status: "unread" | "read" | "replied" | "closed"
  category: "general" | "application" | "visa" | "technical" | "complaint"
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
      senderName: "علی احمدی",
      senderEmail: "ali@example.com",
      subject: "سوال در مورد درخواست ویزا",
      content: "سلام، من در مورد وضعیت درخواست ویزای خود سوال دارم...",
      priority: "high",
      status: "unread",
      category: "visa",
      createdAt: "2024-01-15T10:30:00Z",
    },
    {
      id: "2",
      senderName: "مریم کریمی",
      senderEmail: "maryam@example.com",
      subject: "مشکل در آپلود مدارک",
      content: "من نمی‌توانم مدارک خود را آپلود کنم. لطفاً راهنمایی کنید.",
      priority: "medium",
      status: "read",
      category: "technical",
      createdAt: "2024-01-14T14:20:00Z",
      lastReplyAt: "2024-01-14T15:30:00Z",
    },
    {
      id: "3",
      senderName: "حسن رضایی",
      senderEmail: "hassan@example.com",
      subject: "درخواست مشاوره تحصیلی",
      content: "برای انتخاب رشته و دانشگاه نیاز به مشاوره دارم.",
      priority: "low",
      status: "replied",
      category: "general",
      createdAt: "2024-01-13T09:15:00Z",
      lastReplyAt: "2024-01-13T16:45:00Z",
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

  const filteredMessages = messages.filter((message) => {
    const matchesSearch =
      message.senderName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.senderEmail.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || message.status === statusFilter
    const matchesPriority = priorityFilter === "all" || message.priority === priorityFilter
    const matchesCategory = categoryFilter === "all" || message.category === categoryFilter

    return matchesSearch && matchesStatus && matchesPriority && matchesCategory
  })

  return (
    <div className="space-y-4">
      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            فیلترهای پیام‌ها
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="جستجو در پیام‌ها..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pr-10"
              />
            </div>

            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger>
                <SelectValue placeholder="وضعیت" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">همه وضعیت‌ها</SelectItem>
                <SelectItem value="unread">خوانده نشده</SelectItem>
                <SelectItem value="read">خوانده شده</SelectItem>
                <SelectItem value="replied">پاسخ داده شده</SelectItem>
                <SelectItem value="closed">بسته شده</SelectItem>
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
                <SelectItem value="technical">فنی</SelectItem>
                <SelectItem value="complaint">شکایت</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Messages List */}
      <div className="space-y-2">
        {filteredMessages.map((message) => (
          <Card
            key={message.id}
            className={`cursor-pointer transition-colors hover:bg-gray-50 ${
              selectedMessageId === message.id ? "ring-2 ring-blue-500" : ""
            }`}
            onClick={() => onMessageSelect(message)}
          >
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <User className="h-4 w-4 text-gray-500" />
                    <span className="font-medium">{message.senderName}</span>
                    <span className="text-sm text-gray-500">({message.senderEmail})</span>
                  </div>

                  <h3 className="font-semibold text-gray-900 mb-1 truncate">{message.subject}</h3>

                  <p className="text-sm text-gray-600 line-clamp-2 mb-3">{message.content}</p>

                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Calendar className="h-3 w-3" />
                    <span>{new Date(message.createdAt).toLocaleDateString("fa-IR")}</span>
                    {message.lastReplyAt && (
                      <>
                        <span>•</span>
                        <span>آخرین پاسخ: {new Date(message.lastReplyAt).toLocaleDateString("fa-IR")}</span>
                      </>
                    )}
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2 mr-4">
                  <Badge className={getPriorityColor(message.priority)}>
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
                    {message.category === "general" && "عمومی"}
                    {message.category === "application" && "درخواست"}
                    {message.category === "visa" && "ویزا"}
                    {message.category === "technical" && "فنی"}
                    {message.category === "complaint" && "شکایت"}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredMessages.length === 0 && (
        <Card>
          <CardContent className="text-center py-8">
            <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">هیچ پیامی یافت نشد</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
