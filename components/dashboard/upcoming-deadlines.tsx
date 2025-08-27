"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, AlertTriangle } from "lucide-react"

const upcomingDeadlines = [
  {
    id: 1,
    title: "ارسال مدارک دانشگاه تورنتو",
    university: "دانشگاه تورنتو",
    deadline: "15 فروردین 1403",
    daysLeft: 5,
    priority: "high",
    type: "documents",
  },
  {
    id: 2,
    title: "مصاحبه آنلاین MIT",
    university: "دانشگاه MIT",
    deadline: "20 فروردین 1403",
    daysLeft: 10,
    priority: "medium",
    type: "interview",
  },
  {
    id: 3,
    title: "پرداخت هزینه درخواست",
    university: "دانشگاه آکسفورد",
    deadline: "25 فروردین 1403",
    daysLeft: 15,
    priority: "low",
    type: "payment",
  },
  {
    id: 4,
    title: "ارسال نمرات زبان",
    university: "دانشگاه هاروارد",
    deadline: "30 فروردین 1403",
    daysLeft: 20,
    priority: "medium",
    type: "test_scores",
  },
]

export function UpcomingDeadlines() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Clock className="h-5 w-5 ml-2" />
          مهلت‌های پیش رو
        </CardTitle>
        <CardDescription>مهم‌ترین مهلت‌های شما</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {upcomingDeadlines.map((deadline) => (
            <div key={deadline.id} className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-start space-x-3 space-x-reverse">
                <div
                  className={`p-2 rounded-full ${
                    deadline.priority === "high"
                      ? "bg-red-100 text-red-600"
                      : deadline.priority === "medium"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-green-100 text-green-600"
                  }`}
                >
                  {deadline.type === "documents" && <Calendar className="h-4 w-4" />}
                  {deadline.type === "interview" && <Clock className="h-4 w-4" />}
                  {deadline.type === "payment" && <AlertTriangle className="h-4 w-4" />}
                  {deadline.type === "test_scores" && <Calendar className="h-4 w-4" />}
                </div>

                <div className="space-y-1">
                  <p className="text-sm font-medium">{deadline.title}</p>
                  <p className="text-xs text-muted-foreground">{deadline.university}</p>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Badge
                      variant={
                        deadline.priority === "high"
                          ? "destructive"
                          : deadline.priority === "medium"
                            ? "secondary"
                            : "outline"
                      }
                      className="text-xs"
                    >
                      {deadline.priority === "high" ? "فوری" : deadline.priority === "medium" ? "متوسط" : "عادی"}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{deadline.daysLeft} روز مانده</span>
                  </div>
                </div>
              </div>

              <div className="text-left">
                <p className="text-xs text-muted-foreground mb-1">مهلت</p>
                <p className="text-sm font-medium">{deadline.deadline}</p>
                <Button size="sm" variant="outline" className="mt-2 bg-transparent">
                  اقدام
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
