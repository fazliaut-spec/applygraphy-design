"use client"

import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"

interface RevenueChartProps {
  dateRange: {
    from: Date
    to: Date
  }
  detailed?: boolean
}

export function RevenueChart({ dateRange, detailed = false }: RevenueChartProps) {
  // Mock data - in real app, this would come from API based on dateRange
  const data = [
    {
      date: "1402/08/01",
      consulting: 1200000,
      applications: 800000,
      services: 600000,
      total: 2600000,
    },
    {
      date: "1402/08/02",
      consulting: 1500000,
      applications: 1000000,
      services: 750000,
      total: 3250000,
    },
    {
      date: "1402/08/03",
      consulting: 1800000,
      applications: 1200000,
      services: 900000,
      total: 3900000,
    },
    {
      date: "1402/08/04",
      consulting: 2200000,
      applications: 1400000,
      services: 1100000,
      total: 4700000,
    },
    {
      date: "1402/08/05",
      consulting: 2500000,
      applications: 1600000,
      services: 1300000,
      total: 5400000,
    },
    {
      date: "1402/08/06",
      consulting: 2800000,
      applications: 1800000,
      services: 1500000,
      total: 6100000,
    },
    {
      date: "1402/08/07",
      consulting: 3200000,
      applications: 2000000,
      services: 1700000,
      total: 6900000,
    },
  ]

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip formatter={(value: number) => [new Intl.NumberFormat("fa-IR").format(value) + " تومان", ""]} />
        <Legend />
        {detailed ? (
          <>
            <Area type="monotone" dataKey="consulting" stackId="1" stroke="#3b82f6" fill="#3b82f6" name="مشاوره" />
            <Area type="monotone" dataKey="applications" stackId="1" stroke="#10b981" fill="#10b981" name="درخواست‌ها" />
            <Area type="monotone" dataKey="services" stackId="1" stroke="#f59e0b" fill="#f59e0b" name="خدمات" />
          </>
        ) : (
          <Area type="monotone" dataKey="total" stroke="#3b82f6" fill="#3b82f6" name="کل درآمد" />
        )}
      </AreaChart>
    </ResponsiveContainer>
  )
}
