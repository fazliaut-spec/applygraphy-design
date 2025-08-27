"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, MapPin, GraduationCap, FileText, Eye, Upload } from "lucide-react"
import { ApplicationDetailsDialog } from "@/components/dashboard/application-details-dialog"

interface Application {
  id: string
  universityName: string
  universityLogo?: string
  program: string
  degree: string
  country: string
  city: string
  status: "draft" | "submitted" | "under_review" | "accepted" | "rejected" | "waitlisted"
  progress: number
  submissionDate?: string
  deadline: string
  requiredDocuments: {
    name: string
    status: "pending" | "uploaded" | "verified"
  }[]
  tuitionFee?: string
  scholarship?: boolean
}

interface ApplicationsListProps {
  filters: {
    status: string
    country: string
    program: string
  }
}

export function ApplicationsList({ filters }: ApplicationsListProps) {
  const [selectedApplicationId, setSelectedApplicationId] = useState<string | null>(null)

  const applications: Application[] = [
    {
      id: "1",
      universityName: "دانشگاه تورنتو",
      universityLogo: "/placeholder.svg?height=60&width=60",
      program: "مهندسی کامپیوتر",
      degree: "کارشناسی ارشد",
      country: "کانادا",
      city: "تورنتو",
      status: "under_review",
      progress: 85,
      submissionDate: "1402/06/15",
      deadline: "1402/09/30",
      requiredDocuments: [
        { name: "انگیزه‌نامه", status: "verified" },
        { name: "رزومه", status: "verified" },
        { name: "ریز نمرات", status: "uploaded" },
        { name: "مدرک زبان", status: "pending" },
      ],
      tuitionFee: "$45,000",
      scholarship: true,
    },
    {
      id: "2",
      universityName: "دانشگاه تکنیکال مونیخ",
      universityLogo: "/placeholder.svg?height=60&width=60",
      program: "مهندسی مکانیک",
      degree: "کارشناسی ارشد",
      country: "آلمان",
      city: "مونیخ",
      status: "accepted",
      progress: 100,
      submissionDate: "1402/05/20",
      deadline: "1402/08/15",
      requiredDocuments: [
        { name: "انگیزه‌نامه", status: "verified" },
        { name: "رزومه", status: "verified" },
        { name: "ریز نمرات", status: "verified" },
        { name: "مدرک زبان", status: "verified" },
      ],
      tuitionFee: "رایگان",
      scholarship: false,
    },
    {
      id: "3",
      universityName: "دانشگاه سیدنی",
      universityLogo: "/placeholder.svg?height=60&width=60",
      program: "علوم کامپیوتر",
      degree: "کارشناسی ارشد",
      country: "استرالیا",
      city: "سیدنی",
      status: "draft",
      progress: 45,
      deadline: "1402/10/15",
      requiredDocuments: [
        { name: "انگیزه‌نامه", status: "uploaded" },
        { name: "رزومه", status: "pending" },
        { name: "ریز نمرات", status: "pending" },
        { name: "مدرک زبان", status: "pending" },
      ],
      tuitionFee: "$42,000",
      scholarship: true,
    },
    {
      id: "4",
      universityName: "دانشگاه آکسفورد",
      universityLogo: "/placeholder.svg?height=60&width=60",
      program: "هوش مصنوعی",
      degree: "دکتری",
      country: "انگلستان",
      city: "آکسفورد",
      status: "waitlisted",
      progress: 100,
      submissionDate: "1402/04/10",
      deadline: "1402/07/01",
      requiredDocuments: [
        { name: "انگیزه‌نامه", status: "verified" },
        { name: "رزومه", status: "verified" },
        { name: "ریز نمرات", status: "verified" },
        { name: "مدرک زبان", status: "verified" },
      ],
      tuitionFee: "£35,000",
      scholarship: true,
    },
  ]

  const filteredApplications = applications.filter((app) => {
    if (filters.status !== "all" && app.status !== filters.status) return false
    if (filters.country !== "all" && app.country !== filters.country) return false
    if (filters.program !== "all" && !app.program.includes(filters.program)) return false
    return true
  })

  const getStatusBadge = (status: Application["status"]) => {
    switch (status) {
      case "draft":
        return <Badge variant="secondary">پیش‌نویس</Badge>
      case "submitted":
        return <Badge variant="outline">ارسال شده</Badge>
      case "under_review":
        return <Badge variant="default">در حال بررسی</Badge>
      case "accepted":
        return <Badge className="bg-green-600 hover:bg-green-700">پذیرش</Badge>
      case "rejected":
        return <Badge variant="destructive">رد شده</Badge>
      case "waitlisted":
        return <Badge className="bg-yellow-600 hover:bg-yellow-700">لیست انتظار</Badge>
    }
  }

  const getStatusColor = (status: Application["status"]) => {
    switch (status) {
      case "draft":
        return "bg-gray-200"
      case "submitted":
        return "bg-blue-200"
      case "under_review":
        return "bg-yellow-200"
      case "accepted":
        return "bg-green-200"
      case "rejected":
        return "bg-red-200"
      case "waitlisted":
        return "bg-orange-200"
    }
  }

  return (
    <>
      <div className="grid gap-6">
        {filteredApplications.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <div className="text-gray-400 mb-4">
                <FileText className="w-16 h-16" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">هیچ درخواستی یافت نشد</h3>
              <p className="text-gray-500 text-center mb-4">
                با فیلترهای انتخاب شده هیچ درخواستی یافت نشد. فیلترها را تغییر دهید یا درخواست جدیدی ایجاد کنید.
              </p>
              <Button>درخواست جدید</Button>
            </CardContent>
          </Card>
        ) : (
          filteredApplications.map((application) => (
            <Card key={application.id} className="overflow-hidden">
              <div className={`h-2 ${getStatusColor(application.status)}`} />
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage
                        src={application.universityLogo || "/placeholder.svg"}
                        alt={application.universityName}
                      />
                      <AvatarFallback>{application.universityName.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-xl">{application.universityName}</CardTitle>
                      <CardDescription className="flex items-center gap-4 mt-1">
                        <span className="flex items-center gap-1">
                          <GraduationCap className="h-4 w-4" />
                          {application.program} - {application.degree}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {application.city}, {application.country}
                        </span>
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {application.scholarship && (
                      <Badge variant="outline" className="text-green-600 border-green-600">
                        بورسیه
                      </Badge>
                    )}
                    {getStatusBadge(application.status)}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-medium text-sm text-gray-700 mb-2">پیشرفت درخواست</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>تکمیل شده</span>
                        <span>{application.progress}%</span>
                      </div>
                      <Progress value={application.progress} className="h-2" />
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-sm text-gray-700 mb-2">تاریخ‌های مهم</h4>
                    <div className="space-y-1 text-sm">
                      {application.submissionDate && (
                        <div className="flex items-center gap-2">
                          <Calendar className="h-3 w-3" />
                          <span>ارسال: {application.submissionDate}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2">
                        <Calendar className="h-3 w-3" />
                        <span>مهلت: {application.deadline}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-sm text-gray-700 mb-2">اطلاعات مالی</h4>
                    <div className="text-sm">
                      <div>شهریه: {application.tuitionFee}</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-sm text-gray-700 mb-2">وضعیت مدارک</h4>
                  <div className="flex flex-wrap gap-2">
                    {application.requiredDocuments.map((doc, index) => (
                      <Badge
                        key={index}
                        variant={
                          doc.status === "verified" ? "default" : doc.status === "uploaded" ? "secondary" : "outline"
                        }
                        className={
                          doc.status === "verified"
                            ? "bg-green-100 text-green-800 hover:bg-green-200"
                            : doc.status === "uploaded"
                              ? "bg-blue-100 text-blue-800 hover:bg-blue-200"
                              : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                        }
                      >
                        {doc.name}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" onClick={() => setSelectedApplicationId(application.id)}>
                    <Eye className="mr-2 h-4 w-4" />
                    مشاهده جزئیات
                  </Button>
                  {application.status === "draft" && (
                    <Button size="sm">
                      <Upload className="mr-2 h-4 w-4" />
                      ادامه درخواست
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      <ApplicationDetailsDialog
        applicationId={selectedApplicationId}
        open={!!selectedApplicationId}
        onOpenChange={() => setSelectedApplicationId(null)}
      />
    </>
  )
}
