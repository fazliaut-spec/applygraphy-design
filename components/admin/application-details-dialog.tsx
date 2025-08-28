"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import {
  User,
  GraduationCap,
  MapPin,
  Calendar,
  FileText,
  Download,
  MessageSquare,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
} from "lucide-react"

interface Application {
  id: string
  studentName: string
  email: string
  phone: string
  status: "pending" | "reviewing" | "approved" | "rejected" | "completed"
  university: string
  program: string
  country: string
  degree: string
  submittedAt: string
  progress: number
  documents: Array<{
    name: string
    type: string
    uploadedAt: string
    status: "pending" | "approved" | "rejected"
  }>
  notes: Array<{
    id: string
    author: string
    content: string
    createdAt: string
  }>
}

interface ApplicationDetailsDialogProps {
  application: Application | null
  open: boolean
  onOpenChange: (open: boolean) => void
  onStatusUpdate: (applicationId: string, status: string, note?: string) => void
}

export function ApplicationDetailsDialog({
  application,
  open,
  onOpenChange,
  onStatusUpdate,
}: ApplicationDetailsDialogProps) {
  const [newStatus, setNewStatus] = useState("")
  const [statusNote, setStatusNote] = useState("")

  if (!application) return null

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "reviewing":
        return "bg-blue-100 text-blue-800"
      case "approved":
        return "bg-green-100 text-green-800"
      case "rejected":
        return "bg-red-100 text-red-800"
      case "completed":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <Clock className="h-4 w-4" />
      case "reviewing":
        return <AlertCircle className="h-4 w-4" />
      case "approved":
        return <CheckCircle className="h-4 w-4" />
      case "rejected":
        return <XCircle className="h-4 w-4" />
      case "completed":
        return <CheckCircle className="h-4 w-4" />
      default:
        return <Clock className="h-4 w-4" />
    }
  }

  const handleStatusUpdate = () => {
    if (newStatus) {
      onStatusUpdate(application.id, newStatus, statusNote)
      setNewStatus("")
      setStatusNote("")
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            جزئیات درخواست - {application.studentName}
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="details" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="details">اطلاعات کلی</TabsTrigger>
            <TabsTrigger value="documents">مدارک</TabsTrigger>
            <TabsTrigger value="notes">یادداشت‌ها</TabsTrigger>
            <TabsTrigger value="status">وضعیت</TabsTrigger>
          </TabsList>

          <TabsContent value="details" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    اطلاعات شخصی
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <Label className="text-sm font-medium">نام و نام خانوادگی</Label>
                    <p className="text-sm text-gray-600">{application.studentName}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium">ایمیل</Label>
                    <p className="text-sm text-gray-600">{application.email}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium">شماره تماس</Label>
                    <p className="text-sm text-gray-600">{application.phone}</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" />
                    اطلاعات تحصیلی
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <Label className="text-sm font-medium">دانشگاه</Label>
                    <p className="text-sm text-gray-600">{application.university}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium">رشته تحصیلی</Label>
                    <p className="text-sm text-gray-600">{application.program}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium">مقطع</Label>
                    <p className="text-sm text-gray-600">{application.degree}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium">کشور</Label>
                    <p className="text-sm text-gray-600 flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {application.country}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  پیشرفت درخواست
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">پیشرفت کلی</span>
                    <span className="text-sm font-medium">{application.progress}%</span>
                  </div>
                  <Progress value={application.progress} className="w-full" />
                  <div className="flex items-center gap-2 mt-3">
                    <Badge className={getStatusColor(application.status)}>
                      {getStatusIcon(application.status)}
                      <span className="mr-1">
                        {application.status === "pending" && "در انتظار بررسی"}
                        {application.status === "reviewing" && "در حال بررسی"}
                        {application.status === "approved" && "تایید شده"}
                        {application.status === "rejected" && "رد شده"}
                        {application.status === "completed" && "تکمیل شده"}
                      </span>
                    </Badge>
                    <span className="text-sm text-gray-500">
                      ارسال شده در {new Date(application.submittedAt).toLocaleDateString("fa-IR")}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="documents" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  مدارک ارسالی
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {application.documents.map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <FileText className="h-4 w-4 text-gray-500" />
                        <div>
                          <p className="font-medium">{doc.name}</p>
                          <p className="text-sm text-gray-500">
                            {doc.type} • آپلود شده در {new Date(doc.uploadedAt).toLocaleDateString("fa-IR")}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={getStatusColor(doc.status)}>
                          {doc.status === "pending" && "در انتظار"}
                          {doc.status === "approved" && "تایید شده"}
                          {doc.status === "rejected" && "رد شده"}
                        </Badge>
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notes" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  یادداشت‌ها و تاریخچه
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {application.notes.map((note) => (
                    <div key={note.id} className="border-r-4 border-blue-200 pr-4 py-2">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-medium">{note.author}</span>
                        <span className="text-sm text-gray-500">
                          {new Date(note.createdAt).toLocaleDateString("fa-IR")}
                        </span>
                      </div>
                      <p className="text-gray-700">{note.content}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="status" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>تغییر وضعیت درخواست</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>وضعیت جدید</Label>
                  <Select value={newStatus} onValueChange={setNewStatus}>
                    <SelectTrigger>
                      <SelectValue placeholder="انتخاب وضعیت جدید" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pending">در انتظار بررسی</SelectItem>
                      <SelectItem value="reviewing">در حال بررسی</SelectItem>
                      <SelectItem value="approved">تایید شده</SelectItem>
                      <SelectItem value="rejected">رد شده</SelectItem>
                      <SelectItem value="completed">تکمیل شده</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>یادداشت (اختیاری)</Label>
                  <Textarea
                    placeholder="یادداشت خود را در مورد تغییر وضعیت بنویسید..."
                    value={statusNote}
                    onChange={(e) => setStatusNote(e.target.value)}
                    rows={3}
                  />
                </div>

                <Button onClick={handleStatusUpdate} disabled={!newStatus} className="w-full">
                  به‌روزرسانی وضعیت
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
