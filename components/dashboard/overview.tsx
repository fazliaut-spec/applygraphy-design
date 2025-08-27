"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Clock, CheckCircle, AlertCircle } from "lucide-react"

interface StatsCardProps {
  title: string
  value: string
  description: string
  icon: React.ReactNode
  color?: string
}

function StatsCard({ title, value, description, icon, color = "text-muted-foreground" }: StatsCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className={color}>{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

export function DashboardOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatsCard
        title="کل درخواست‌ها"
        value="12"
        description="درخواست‌های تحصیلی شما"
        icon={<FileText className="h-4 w-4" />}
        color="text-blue-500"
      />
      <StatsCard
        title="در حال بررسی"
        value="5"
        description="درخواست‌های در انتظار"
        icon={<Clock className="h-4 w-4" />}
        color="text-yellow-500"
      />
      <StatsCard
        title="تایید شده"
        value="4"
        description="درخواست‌های موفق"
        icon={<CheckCircle className="h-4 w-4" />}
        color="text-green-500"
      />
      <StatsCard
        title="نیاز به اقدام"
        value="3"
        description="درخواست‌های ناقص"
        icon={<AlertCircle className="h-4 w-4" />}
        color="text-red-500"
      />
    </div>
  )
}
