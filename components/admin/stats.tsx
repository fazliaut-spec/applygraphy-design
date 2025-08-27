"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Users, Calendar, TrendingUp, DollarSign } from "lucide-react"

export function AdminStats() {
  const stats = [
    {
      title: "درخواست‌های جدید",
      value: "12",
      change: "+2.5%",
      icon: MessageSquare,
      color: "text-[#FF6A5C]",
      bgColor: "bg-[#FF6A5C]/10",
    },
    {
      title: "مشاوره‌های امروز",
      value: "5",
      change: "+12%",
      icon: Calendar,
      color: "text-[#02153D]",
      bgColor: "bg-[#02153D]/10",
    },
    {
      title: "کاربران فعال",
      value: "248",
      change: "+8.2%",
      icon: Users,
      color: "text-green-600",
      bgColor: "bg-green-600/10",
    },
    {
      title: "درآمد ماهانه",
      value: "₹2.4M",
      change: "+15.3%",
      icon: DollarSign,
      color: "text-blue-600",
      bgColor: "bg-blue-600/10",
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <div className={`p-2 rounded-lg ${stat.bgColor}`}>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingUp className="mr-1 h-3 w-3" />
              {stat.change} از ماه گذشته
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
