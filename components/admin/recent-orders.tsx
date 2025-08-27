"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"

const recentOrders = [
  {
    id: 1,
    customerName: "علی احمدی",
    service: "مشاوره تحصیلی کامل",
    amount: "2,500,000",
    status: "completed",
    createdAt: "1 ساعت پیش",
  },
  {
    id: 2,
    customerName: "فاطمه محمدی",
    service: "ویرایش انگیزه‌نامه",
    amount: "500,000",
    status: "pending",
    createdAt: "3 ساعت پیش",
  },
  {
    id: 3,
    customerName: "حسن رضایی",
    service: "مشاوره ویزا",
    amount: "1,200,000",
    status: "processing",
    createdAt: "6 ساعت پیش",
  },
  {
    id: 4,
    customerName: "مریم کریمی",
    service: "ترجمه مدارک",
    amount: "300,000",
    status: "completed",
    createdAt: "1 روز پیش",
  },
]

export function RecentOrders() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>سفارشات اخیر</CardTitle>
        <CardDescription>آخرین سفارشات ثبت شده</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentOrders.map((order) => (
            <div key={order.id} className="flex items-center justify-between p-3 border rounded-lg">
              <div className="space-y-1">
                <p className="text-sm font-medium">{order.customerName}</p>
                <p className="text-xs text-muted-foreground">{order.service}</p>
                <p className="text-xs font-medium">{order.amount} تومان</p>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <Badge
                  variant={
                    order.status === "completed" ? "default" : order.status === "processing" ? "secondary" : "outline"
                  }
                >
                  {order.status === "completed"
                    ? "تکمیل شده"
                    : order.status === "processing"
                      ? "در حال پردازش"
                      : "در انتظار"}
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
