"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { MessageSquare, Users, Calendar, BarChart3, Send, Eye, CheckCircle, Clock, AlertCircle } from "lucide-react"

interface ChatInquiry {
  id: string
  userName: string
  userEmail: string
  message: string
  timestamp: Date
  status: "pending" | "responded" | "escalated"
  priority: "low" | "medium" | "high"
}

interface Consultation {
  id: string
  userName: string
  userEmail: string
  service: string
  date: Date
  time: string
  status: "scheduled" | "completed" | "cancelled"
  notes?: string
}

export default function AdminPanel() {
  const [selectedInquiry, setSelectedInquiry] = useState<ChatInquiry | null>(null)
  const [response, setResponse] = useState("")

  const mockInquiries: ChatInquiry[] = [
    {
      id: "1",
      userName: "علی احمدی",
      userEmail: "ali@example.com",
      message: "سلام، می‌خواهم در مورد تحصیل در کانادا اطلاعات بیشتری داشته باشم. آیا می‌توانید راهنمایی کنید؟",
      timestamp: new Date("2024-01-15T10:30:00"),
      status: "pending",
      priority: "high",
    },
    {
      id: "2",
      userName: "فاطمه کریمی",
      userEmail: "fateme@example.com",
      message: "برای اخذ ویزای تحصیلی آلمان چه مدارکی لازم است؟",
      timestamp: new Date("2024-01-15T09:15:00"),
      status: "responded",
      priority: "medium",
    },
    {
      id: "3",
      userName: "محمد رضایی",
      userEmail: "mohammad@example.com",
      message: "آیا امکان دریافت بورسیه برای تحصیل در استرالیا وجود دارد؟",
      timestamp: new Date("2024-01-15T08:45:00"),
      status: "escalated",
      priority: "low",
    },
  ]

  const mockConsultations: Consultation[] = [
    {
      id: "1",
      userName: "سارا محمدی",
      userEmail: "sara@example.com",
      service: "مشاوره جامع تحصیلی",
      date: new Date("2024-01-20"),
      time: "14:00",
      status: "scheduled",
    },
    {
      id: "2",
      userName: "حسین علوی",
      userEmail: "hosein@example.com",
      service: "مشاوره ویزا",
      date: new Date("2024-01-18"),
      time: "10:00",
      status: "completed",
      notes: "مشاوره کامل انجام شد. مدارک تکمیلی ارسال شده.",
    },
  ]

  const handleSendResponse = () => {
    if (selectedInquiry && response.trim()) {
      // Here you would typically send the response to the user
      console.log("Sending response:", response, "to:", selectedInquiry.userEmail)
      alert("پاسخ با موفقیت ارسال شد")
      setResponse("")
      setSelectedInquiry(null)
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge variant="destructive">در انتظار پاسخ</Badge>
      case "responded":
        return <Badge variant="default">پاسخ داده شده</Badge>
      case "escalated":
        return <Badge variant="secondary">ارجاع شده</Badge>
      case "scheduled":
        return <Badge variant="secondary">برنامه‌ریزی شده</Badge>
      case "completed":
        return <Badge variant="default">تکمیل شده</Badge>
      case "cancelled":
        return <Badge variant="destructive">لغو شده</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "high":
        return <AlertCircle className="h-4 w-4 text-red-500" />
      case "medium":
        return <Clock className="h-4 w-4 text-yellow-500" />
      case "low":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#02153D]">پنل مدیریت مشاوران</h1>
          <p className="text-gray-600 mt-2">مدیریت درخواست‌ها و مشاوره‌های مشتریان</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">درخواست‌های جدید</p>
                  <p className="text-3xl font-bold text-[#FF6A5C]">12</p>
                </div>
                <MessageSquare className="h-8 w-8 text-[#FF6A5C]" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">مشاوره‌های امروز</p>
                  <p className="text-3xl font-bold text-[#02153D]">5</p>
                </div>
                <Calendar className="h-8 w-8 text-[#02153D]" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">کاربران فعال</p>
                  <p className="text-3xl font-bold text-green-600">248</p>
                </div>
                <Users className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">نرخ رضایت</p>
                  <p className="text-3xl font-bold text-blue-600">94%</p>
                </div>
                <BarChart3 className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="inquiries" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="inquiries">درخواست‌های چت</TabsTrigger>
            <TabsTrigger value="consultations">مشاوره‌ها</TabsTrigger>
          </TabsList>

          {/* Chat Inquiries Tab */}
          <TabsContent value="inquiries">
            <Card>
              <CardHeader>
                <CardTitle>درخواست‌های چت</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-right">اولویت</TableHead>
                      <TableHead className="text-right">کاربر</TableHead>
                      <TableHead className="text-right">پیام</TableHead>
                      <TableHead className="text-right">زمان</TableHead>
                      <TableHead className="text-right">وضعیت</TableHead>
                      <TableHead className="text-right">عملیات</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockInquiries.map((inquiry) => (
                      <TableRow key={inquiry.id}>
                        <TableCell>{getPriorityIcon(inquiry.priority)}</TableCell>
                        <TableCell>
                          <div>
                            <p className="font-medium">{inquiry.userName}</p>
                            <p className="text-sm text-gray-600">{inquiry.userEmail}</p>
                          </div>
                        </TableCell>
                        <TableCell className="max-w-xs">
                          <p className="truncate">{inquiry.message}</p>
                        </TableCell>
                        <TableCell>{inquiry.timestamp.toLocaleString("fa-IR")}</TableCell>
                        <TableCell>{getStatusBadge(inquiry.status)}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button size="sm" variant="outline" onClick={() => setSelectedInquiry(inquiry)}>
                                  <Eye className="h-4 w-4" />
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-2xl">
                                <DialogHeader>
                                  <DialogTitle>پاسخ به درخواست</DialogTitle>
                                </DialogHeader>
                                <div className="space-y-4">
                                  <div>
                                    <h4 className="font-medium mb-2">پیام کاربر:</h4>
                                    <p className="bg-gray-100 p-3 rounded-lg">{inquiry.message}</p>
                                  </div>
                                  <div>
                                    <h4 className="font-medium mb-2">پاسخ شما:</h4>
                                    <Textarea
                                      value={response}
                                      onChange={(e) => setResponse(e.target.value)}
                                      placeholder="پاسخ خود را اینجا بنویسید..."
                                      className="min-h-[120px] text-right"
                                    />
                                  </div>
                                  <div className="flex justify-end gap-2">
                                    <Button variant="outline">لغو</Button>
                                    <Button onClick={handleSendResponse} className="bg-[#FF6A5C] hover:bg-[#FF6A5C]/90">
                                      <Send className="h-4 w-4 mr-2" />
                                      ارسال پاسخ
                                    </Button>
                                  </div>
                                </div>
                              </DialogContent>
                            </Dialog>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Consultations Tab */}
          <TabsContent value="consultations">
            <Card>
              <CardHeader>
                <CardTitle>مشاوره‌های برنامه‌ریزی شده</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-right">کاربر</TableHead>
                      <TableHead className="text-right">خدمت</TableHead>
                      <TableHead className="text-right">تاریخ</TableHead>
                      <TableHead className="text-right">ساعت</TableHead>
                      <TableHead className="text-right">وضعیت</TableHead>
                      <TableHead className="text-right">یادداشت</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockConsultations.map((consultation) => (
                      <TableRow key={consultation.id}>
                        <TableCell>
                          <div>
                            <p className="font-medium">{consultation.userName}</p>
                            <p className="text-sm text-gray-600">{consultation.userEmail}</p>
                          </div>
                        </TableCell>
                        <TableCell>{consultation.service}</TableCell>
                        <TableCell>{consultation.date.toLocaleDateString("fa-IR")}</TableCell>
                        <TableCell>{consultation.time}</TableCell>
                        <TableCell>{getStatusBadge(consultation.status)}</TableCell>
                        <TableCell>{consultation.notes || "-"}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
