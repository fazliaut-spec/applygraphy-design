"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Plus, Eye, FileText } from "lucide-react"

const applications = [
  {
    id: 1,
    university: "دانشگاه تورنتو",
    program: "مهندسی کامپیوتر",
    status: "in_progress",
    progress: 75,
    deadline: "15 فروردین 1403",
    documents: 8,
    totalDocuments: 12,
  },
  {
    id: 2,
    university: "دانشگاه آکسفورد",
    program: "پزشکی",
    status: "submitted",
    progress: 100,
    deadline: "20 اسفند 1402",
    documents: 15,
    totalDocuments: 15,
  },
  {
    id: 3,
    university: "دانشگاه MIT",
    program: "فیزیک",
    status: "draft",
    progress: 30,
    deadline: "25 فروردین 1403",
    documents: 3,
    totalDocuments: 10,
  },
]

export function ApplicationsSection() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>درخواست‌های من</CardTitle>
          <CardDescription>وضعیت درخواست‌های تحصیلی شما</CardDescription>
        </div>
        <Button>
          <Plus className="h-4 w-4 ml-2" />
          درخواست جدید
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {applications.map((application) => (
            <div key={application.id} className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="font-medium">{application.university}</h3>
                  <p className="text-sm text-muted-foreground">{application.program}</p>
                </div>
                <Badge
                  variant={
                    application.status === "submitted"
                      ? "default"
                      : application.status === "in_progress"
                        ? "secondary"
                        : "outline"
                  }
                >
                  {application.status === "submitted"
                    ? "ارسال شده"
                    : application.status === "in_progress"
                      ? "در حال انجام"
                      : "پیش‌نویس"}
                </Badge>
              </div>

              <div className="space-y-2 mb-3">
                <div className="flex justify-between text-sm">
                  <span>پیشرفت</span>
                  <span>{application.progress}%</span>
                </div>
                <Progress value={application.progress} className="h-2" />
              </div>

              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center space-x-4 space-x-reverse">
                  <span>مهلت: {application.deadline}</span>
                  <span className="flex items-center">
                    <FileText className="h-4 w-4 ml-1" />
                    {application.documents}/{application.totalDocuments} مدرک
                  </span>
                </div>
                <Button size="sm" variant="outline">
                  <Eye className="h-4 w-4 ml-1" />
                  مشاهده
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
