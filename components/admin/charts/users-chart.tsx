"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Line, LineChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"

const usersData = [
  { month: "فروردین", users: 120, newUsers: 45 },
  { month: "اردیبهشت", users: 180, newUsers: 60 },
  { month: "خرداد", users: 240, newUsers: 75 },
  { month: "تیر", users: 320, newUsers: 80 },
  { month: "مرداد", users: 410, newUsers: 90 },
  { month: "شهریور", users: 520, newUsers: 110 },
]

export function UsersChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>رشد کاربران</CardTitle>
        <CardDescription>تعداد کاربران جدید و کل کاربران در ماه‌های اخیر</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            users: {
              label: "کل کاربران",
              color: "hsl(var(--chart-1))",
            },
            newUsers: {
              label: "کاربران جدید",
              color: "hsl(var(--chart-2))",
            },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={usersData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line type="monotone" dataKey="users" stroke="var(--color-users)" strokeWidth={2} name="کل کاربران" />
              <Line
                type="monotone"
                dataKey="newUsers"
                stroke="var(--color-newUsers)"
                strokeWidth={2}
                name="کاربران جدید"
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
