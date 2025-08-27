"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Calendar, MapPin, DollarSign, FileText, Download, Upload } from "lucide-react"

interface ApplicationDetailsDialogProps {
  applicationId: string | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ApplicationDetailsDialog({ applicationId, open, onOpenChange }: ApplicationDetailsDialogProps) {
  // Mock data - in real app, this would be fetched based on applicationId
  const application = {
    id: "1",
    universityName: "دانشگاه تورنتو",
    universityLogo: "/placeholder.svg?height=80&width=80",
    program: "مهندسی کامپیوتر",
    degree: "کارشناسی ارشد",
    country: "کانادا",
    city: "تورنتو",
    status: "under_review" as const,
    progress: 85,
    submissionDate: "1402/06/15",
    deadline: "1402/09/30",
    applicationFee: "$125",
    tuitionFee: "$45,000",
    scholarship: true,
    estimatedDecision: "1402/10/15",
    requirements: {
      gpa: "3.5+",
      ielts: "7.0+",
      gre: "320+",
      workExperience: "2+ سال",
    },
    documents: [
      { name: "انگیزه‌نامه", status: "verified", uploadDate: "1402/06/10", size: "2.3 MB" },
      { name: "رزومه", status: "verified", uploadDate: "1402/06/10", size: "1.8 MB" },
      { name: "ریز نمرات", status: "uploaded", uploadDate: "1402/06/12", size: "3.1 MB" },
      { name: "مدرک زبان", status: "pending", uploadDate: null, size: null },
      { name: "توصیه‌نامه ۱", status: "verified", uploadDate: "1402/06/08", size: "1.2 MB" },
      { name: "توصیه‌نامه ۲", status: "uploaded", uploadDate: "1402/06/14", size: "1.5 MB" },
    ],
    timeline: [
      { date: "1402/06/01", event: "شروع درخواست", status: "completed" },
      { date: "1402/06/10", event: "آپلود مدارک اولیه", status: "completed" },
      { date: "1402/06/15", event: "ارسال درخواست", status: "completed" },
      { date: "1402/07/01", event: "تایید دریافت", status: "completed" },
      { date: "1402/08/15", event: "شروع بررسی", status: "current" },
      { date: "1402/10/15", event: "اعلام نتیجه", status: "pending" },
    ],
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "verified":
        return <Badge className="bg-green-100 text-green-800">تایید شده</Badge>
      case "uploaded":
        return <Badge className="bg-blue-100 text-blue-800">آپلود شده</Badge>
      case "pending":
        return <Badge variant="outline">در انتظار</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const getTimelineStatus = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500"
      case "current":
        return "bg-blue-500"
      case "pending":
        return "bg-gray-300"
      default:
        return "bg-gray-300"
    }
  }

  if (!applicationId) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={application.universityLogo || "/placeholder.svg"} alt={application.universityName} />
              <AvatarFallback>{application.universityName.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <DialogTitle className="text-2xl">{application.universityName}</DialogTitle>
              <DialogDescription className="text-lg">
                {application.program} - {application.degree}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h3 className="font-semibold">اطلاعات کلی</h3>
              <div className="space-y-1 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>
                    {application.city}, {application.country}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>مهلت: {application.deadline}</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  <span>شهریه: {application.tuitionFee}</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">وضعیت درخواست</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>پیشرفت</span>
                  <span>{application.progress}%</span>
                </div>
                <Progress value={application.progress} className="h-2" />
                <div className="flex items-center gap-2">
                  {application.scholarship && (
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      بورسیه
                    </Badge>
                  )}
                  <Badge>در حال بررسی</Badge>
                </div>
              </div>
            </div>
          </div>

          <Separator />

          {/* Requirements */}
          <div>
            <h3 className="font-semibold mb-3">الزامات</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="font-medium">GPA</div>
                <div className="text-sm text-gray-600">{application.requirements.gpa}</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="font-medium">IELTS</div>
                <div className="text-sm text-gray-600">{application.requirements.ielts}</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="font-medium">GRE</div>
                <div className="text-sm text-gray-600">{application.requirements.gre}</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="font-medium">تجربه کار</div>
                <div className="text-sm text-gray-600">{application.requirements.workExperience}</div>
              </div>
            </div>
          </div>

          <Separator />

          {/* Documents */}
          <div>
            <h3 className="font-semibold mb-3">مدارک</h3>
            <div className="space-y-3">
              {application.documents.map((doc, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-gray-500" />
                    <div>
                      <div className="font-medium">{doc.name}</div>
                      {doc.uploadDate && (
                        <div className="text-sm text-gray-500">
                          آپلود شده در {doc.uploadDate} • {doc.size}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {getStatusBadge(doc.status)}
                    {doc.status === "pending" ? (
                      <Button size="sm" variant="outline">
                        <Upload className="mr-2 h-4 w-4" />
                        آپلود
                      </Button>
                    ) : (
                      <Button size="sm" variant="outline">
                        <Download className="mr-2 h-4 w-4" />
                        دانلود
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Timeline */}
          <div>
            <h3 className="font-semibold mb-3">مراحل درخواست</h3>
            <div className="space-y-4">
              {application.timeline.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className={`w-3 h-3 rounded-full ${getTimelineStatus(item.status)}`} />
                  <div className="flex-1">
                    <div className="font-medium">{item.event}</div>
                    <div className="text-sm text-gray-500">{item.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
