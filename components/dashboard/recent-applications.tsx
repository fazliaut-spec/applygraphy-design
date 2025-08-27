"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, Calendar } from "lucide-react"

const recentApplications = [
  {
    id: 1,
    university: "دانشگاه تورنتو",
    program: "مهندسی کامپیوتر",
    status: "in_progress",
    deadline: "15 فروردین 1403",
    lastUpdate: "2 روز پیش",
  },
  {
    id: 2,
    university: "دانشگاه آکسفورد",
    program: "پزشکی",
    status: "submitted",
    deadline: "20 اسفند 1402",
    lastUpdate: "1 هفته پیش",
  },
  {
    id: 3,
    university: "دانشگاه MIT",
    program: "فیزیک",
    status: "draft",
    deadline: "25 فروردین 1403",
    lastUpdate: "3 روز پیش",
  },
]

export function RecentApplications() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>درخواست‌های اخیر</CardTitle>
          <CardDescription>آخرین فعالیت‌های شما</CardDescription>
        </div>
        <Button variant="outline" size="sm">
          مشاهده همه
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {recentApplications.map((application) => (
            <div key={application.id} className="flex items-center justify-between p-3 border rounded-lg">
              <div className="space-y-1">
                <p className="text-sm font-medium">{application.university}</p>
                <p className="text-xs text-muted-foreground">{application.program}</p>
                <div className="flex items-center space-x-2 space-x-reverse text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>مهلت: {application.deadline}</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
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
                <Button size="sm" variant="ghost">
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
