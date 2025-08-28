"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"

const serviceData = [
  { service: "مشاوره تحصیلی", orders: 145, revenue: 2900000 },
  { service: "ویزای تحصیلی", orders: 120, revenue: 3600000 },
  { service: "ثبت نام دانشگاه", orders: 98, revenue: 1960000 },
  { service: "مشاوره مهاجرت", orders: 87, revenue: 2610000 },
  { service: "آکادمی اپلای‌گرافی", orders: 76, revenue: 1520000 },
  { service: "پکیج کامل", orders: 45, revenue: 4500000 },
]

export function ServicePopularityChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>محبوبیت خدمات</CardTitle>
        <CardDescription>تعداد سفارشات و درآمد هر خدمت</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            orders: {
              label: "تعداد سفارش",
              color: "hsl(var(--chart-1))",
            },
            revenue: {
              label: "درآمد (تومان)",
              color: "hsl(var(--chart-2))",
            },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={serviceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="service" angle={-45} textAnchor="end" height={80} />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="orders" fill="var(--color-orders)" name="تعداد سفارش" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
