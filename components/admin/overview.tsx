"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, FileText, ShoppingCart, MessageSquare, TrendingUp, TrendingDown } from "lucide-react"

interface StatsCardProps {
  title: string
  value: string
  description: string
  icon: React.ReactNode
  trend?: {
    value: string
    isPositive: boolean
  }
}

function StatsCard({ title, value, description, icon, trend }: StatsCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
        {trend && (
          <div className="flex items-center mt-2">
            {trend.isPositive ? (
              <TrendingUp className="h-4 w-4 text-green-500 ml-1" />
            ) : (
              <TrendingDown className="h-4 w-4 text-red-500 ml-1" />
            )}
            <span className={`text-xs ${trend.isPositive ? "text-green-500" : "text-red-500"}`}>{trend.value}</span>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export function AdminOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatsCard
        title="کل کاربران"
        value="2,847"
        description="افزایش 12% نسبت به ماه گذشته"
        icon={<Users className="h-4 w-4 text-muted-foreground" />}
        trend={{ value: "+12%", isPositive: true }}
      />
      <StatsCard
        title="درخواست‌های فعال"
        value="1,234"
        description="درخواست‌های در حال بررسی"
        icon={<FileText className="h-4 w-4 text-muted-foreground" />}
        trend={{ value: "+8%", isPositive: true }}
      />
      <StatsCard
        title="سفارشات امروز"
        value="89"
        description="کاهش 3% نسبت به دیروز"
        icon={<ShoppingCart className="h-4 w-4 text-muted-foreground" />}
        trend={{ value: "-3%", isPositive: false }}
      />
      <StatsCard
        title="پیام‌های جدید"
        value="156"
        description="پیام‌های پاسخ داده نشده"
        icon={<MessageSquare className="h-4 w-4 text-muted-foreground" />}
        trend={{ value: "+24%", isPositive: true }}
      />
    </div>
  )
}
