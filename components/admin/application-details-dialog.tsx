"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  User,
  GraduationCap,
  FileText,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Download,
  MessageSquare,
  CheckCircle,
  XCircle,
  Clock,
  AlertCircle,
} from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface Application {
  id: string
  studentName: string
  email: string
  phone: string
  university: string
  program: string
  country: string
  status: "pending" | "reviewing" | "approved" | "rejected" | "completed"
  submittedAt: string
  documents: Array<{
    name: string
    type: string
    url: string
    uploadedAt: string
  }>
  personalInfo: {
    birthDate: string
    nationality: string
    passportNumber: string
    address: string
  }
  academicInfo: {
    degree: string
    gpa: string
    graduationYear: string
    institution: string
  }
  notes: string[]
}

interface ApplicationDetailsDialogProps {
  application: Application | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ApplicationDetailsDialog({ application, open, onOpenChange }: ApplicationDetailsDialogProps) {
  const [status, setStatus] = useState(application?.status || "pending")
  const [note, setNote] = useState("")
  const { toast } = useToast()

  if (!application) return null

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "rejected":
        return <XCircle className="h-4 w-4 text-red-500" />
      case "reviewing":
        return <Clock className="h-4 w-4 text-blue-500" />
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      default:
        return <AlertCircle className="h-4 w-4 text-yellow-500" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-800"
      case "rejected":
        return "bg-red-100 text-red-800"
      case "reviewing":
        return "bg-blue-100 text-blue-800"
      case "completed":
        return "bg-green-100 text-green-900"
      default:
        return "bg-yellow-100 text-yellow-800"
    }
  }

  const handleStatusUpdate = () => {
    // Here you would typically make an API call to update the status
    toast({
      title: "وضعیت به‌روزرسانی شد",
      description: "وضعیت درخواست با موفقیت تغییر کرد.",
    })
  }

  const handleAddNote = () => {
    if (!note.trim()) return

    // Here you would typically make an API call to add the note
    toast({
      title: "یادداشت اضافه شد",
      description: "یادداشت جدید با موفقیت ثبت شد.",
    })
    setNote("")
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            جزئیات درخواست - {application.studentName}
          </DialogTitle>
          <DialogDescription>شماره درخواست: {application.id}</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Status and Quick Actions */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {getStatusIcon(application.status)}
              <Badge className={getStatusColor(application.status)}>
                {application.status === "pending" && "در انتظار بررسی"}
                {application.status === "reviewing" && "در حال بررسی"}
                {application.status === "approved" && "تایید شده"}
                {application.status === "rejected" && "رد شده"}
                {application.status === "completed" && "تکمیل شده"}
              </Badge>
            </div>
            <div className="text-sm text-gray-500">
              تاریخ ثبت: {new Date(application.submittedAt).toLocaleDateString("fa-IR")}
            </div>
          </div>

          <Tabs defaultValue="info" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="info">اطلاعات شخصی</TabsTrigger>
              <TabsTrigger value="academic">اطلاعات تحصیلی</TabsTrigger>
              <TabsTrigger value="documents">مدارک</TabsTrigger>
              <TabsTrigger value="management">مدیریت</TabsTrigger>
            </TabsList>

            <TabsContent value="info" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    اطلاعات شخصی
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>نام و نام خانوادگی</Label>
                    <div className="p-2 bg-gray-50 rounded">{application.studentName}</div>
                  </div>
                  <div className="space-y-2">
                    <Label>ایمیل</Label>
                    <div className="p-2 bg-gray-50 rounded flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      {application.email}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>شماره تماس</Label>
                    <div className="p-2 bg-gray-50 rounded flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      {application.phone}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>تاریخ تولد</Label>
                    <div className="p-2 bg-gray-50 rounded flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {application.personalInfo.birthDate}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>ملیت</Label>
                    <div className="p-2 bg-gray-50 rounded">{application.personalInfo.nationality}</div>
                  </div>
                  <div className="space-y-2">
                    <Label>شماره پاسپورت</Label>
                    <div className="p-2 bg-gray-50 rounded">{application.personalInfo.passportNumber}</div>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label>آدرس</Label>
                    <div className="p-2 bg-gray-50 rounded flex items-start gap-2">
                      <MapPin className="h-4 w-4 mt-1" />
                      {application.personalInfo.address}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="academic" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5" />
                    اطلاعات تحصیلی
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>دانشگاه مقصد</Label>
                    <div className="p-2 bg-gray-50 rounded">{application.university}</div>
                  </div>
                  <div className="space-y-2">
                    <Label>رشته تحصیلی</Label>
                    <div className="p-2 bg-gray-50 rounded">{application.program}</div>
                  </div>
                  <div className="space-y-2">
                    <Label>کشور مقصد</Label>
                    <div className="p-2 bg-gray-50 rounded">{application.country}</div>
                  </div>
                  <div className="space-y-2">
                    <Label>مقطع تحصیلی</Label>
                    <div className="p-2 bg-gray-50 rounded">{application.academicInfo.degree}</div>
                  </div>
                  <div className="space-y-2">
                    <Label>معدل</Label>
                    <div className="p-2 bg-gray-50 rounded">{application.academicInfo.gpa}</div>
                  </div>
                  <div className="space-y-2">
                    <Label>سال فارغ‌التحصیلی</Label>
                    <div className="p-2 bg-gray-50 rounded">{application.academicInfo.graduationYear}</div>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label>دانشگاه قبلی</Label>
                    <div className="p-2 bg-gray-50 rounded">{application.academicInfo.institution}</div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="documents" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    مدارک ارسالی
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {application.documents.map((doc, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <FileText className="h-5 w-5 text-blue-500" />
                          <div>
                            <div className="font-medium">{doc.name}</div>
                            <div className="text-sm text-gray-500">
                              نوع: {doc.type} • آپلود شده در: {new Date(doc.uploadedAt).toLocaleDateString("fa-IR")}
                            </div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          دانلود
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="management" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>تغییر وضعیت</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label>وضعیت جدید</Label>
                      <Select value={status} onValueChange={setStatus}>
                        <SelectTrigger>
                          <SelectValue />
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
                    <Button onClick={handleStatusUpdate} className="w-full">
                      به‌روزرسانی وضعیت
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>افزودن یادداشت</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Textarea
                      placeholder="یادداشت جدید..."
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      rows={3}
                    />
                    <Button onClick={handleAddNote} className="w-full">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      افزودن یادداشت
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {application.notes.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle>یادداشت‌های قبلی</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {application.notes.map((note, index) => (
                        <div key={index} className="p-3 bg-gray-50 rounded-lg">
                          <div className="text-sm text-gray-600 mb-1">
                            {new Date().toLocaleDateString("fa-IR")} - ادمین
                          </div>
                          <div>{note}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  )
}
