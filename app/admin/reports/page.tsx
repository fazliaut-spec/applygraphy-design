"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DateRangePicker } from "@/components/ui/date-range-picker"
import { ApplicationsChart } from "@/components/admin/charts/applications-chart"
import { RevenueChart } from "@/components/admin/charts/revenue-chart"
import { UsersChart } from "@/components/admin/charts/users-chart"
import { CountryDistributionChart } from "@/components/admin/charts/country-distribution-chart"
import { ServicePopularityChart } from "@/components/admin/charts/service-popularity-chart"

export default function AdminReportsPage() {
  const [dateRange, setDateRange] = useState({
    from: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
    to: new Date(),
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">گزارشات</h1>
          <p className="text-muted-foreground">آمار و گزارشات سیستم را مشاهده کنید.</p>
        </div>
        <DateRangePicker date={dateRange} onDateChange={setDateRange} />
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">نمای کلی</TabsTrigger>
          <TabsTrigger value="applications">درخواست‌ها</TabsTrigger>
          <TabsTrigger value="revenue">درآمد</TabsTrigger>
          <TabsTrigger value="users">کاربران</TabsTrigger>
          <TabsTrigger value="services">خدمات</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>درخواست‌های دانشگاهی</CardTitle>
                <CardDescription>تعداد درخواست‌های دانشگاهی در بازه زمانی انتخاب شده</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <ApplicationsChart dateRange={dateRange} />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>درآمد</CardTitle>
                <CardDescription>میزان درآمد در بازه زمانی انتخاب شده</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <RevenueChart dateRange={dateRange} />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="applications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>درخواست‌های دانشگاهی</CardTitle>
              <CardDescription>تعداد درخواست‌های دانشگاهی به تفکیک وضعیت</CardDescription>
            </CardHeader>
            <CardContent className="h-96">
              <ApplicationsChart dateRange={dateRange} detailed />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>توزیع کشورها</CardTitle>
              <CardDescription>توزیع درخواست‌ها بر اساس کشور مقصد</CardDescription>
            </CardHeader>
            <CardContent className="h-96">
              <CountryDistributionChart dateRange={dateRange} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="revenue" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>درآمد</CardTitle>
              <CardDescription>میزان درآمد به تفکیک نوع خدمات</CardDescription>
            </CardHeader>
            <CardContent className="h-96">
              <RevenueChart dateRange={dateRange} detailed />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>کاربران</CardTitle>
              <CardDescription>تعداد کاربران جدید در بازه زمانی انتخاب شده</CardDescription>
            </CardHeader>
            <CardContent className="h-96">
              <UsersChart dateRange={dateRange} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="services" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>محبوبیت خدمات</CardTitle>
              <CardDescription>میزان محبوبیت خدمات بر اساس تعداد سفارش</CardDescription>
            </CardHeader>
            <CardContent className="h-96">
              <ServicePopularityChart dateRange={dateRange} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
