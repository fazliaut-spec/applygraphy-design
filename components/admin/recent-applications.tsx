"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"

const recentApplications = [
  {
    id: 1,
    studentName: "علی احمدی",
    university: "دانشگاه تورنتو",
    program: "مهندسی کامپیوتر",
    status: "pending",
    submittedAt: "2 ساعت پیش",
  },
  {
    id: 2,
    studentName: "فاطمه محمدی",
    university: "دانشگاه آکسفورد",
    program: "پزشکی",
    status: "approved",
    submittedAt: "5 ساعت پیش",
  },
  {
    id: 3,
    studentName: "حسن رضایی",
    university: "دانشگاه MIT",
    program: "فیزیک",
    status: "rejected",
    submittedAt: "1 روز پیش",
  },
  {
    id: 4,
    studentName: "مریم کریمی",
    university: "دانشگاه هاروارد",
    program: "اقتصاد",
    status: "pending",
    submittedAt: "2 روز پیش",
  },
]

export function RecentApplications() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>درخواست‌های اخیر</CardTitle>
        <CardDescription>آخرین درخواست‌های ثبت شده</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentApplications.map((application) => (
            <div key={application.id} className="flex items-center justify-between p-3 border rounded-lg">
              <div className="space-y-1">
                <p className="text-sm font-medium">{application.studentName}</p>
                <p className="text-xs text-muted-foreground">{application.university}</p>
                <p className="text-xs text-muted-foreground">{application.program}</p>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <Badge
                  variant={
                    application.status === "approved"
                      ? "default"
                      : application.status === "pending"
                        ? "secondary"
                        : "destructive"
                  }
                >
                  {application.status === "approved"
                    ? "تایید شده"
                    : application.status === "pending"
                      ? "در انتظار"
                      : "رد شده"}
                </Badge>
                <Button size="sm" variant="outline">
                  <Eye className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
