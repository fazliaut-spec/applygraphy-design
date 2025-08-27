"use client"

import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"

interface ApplicationsChartProps {
  dateRange: {
    from: Date
    to: Date
  }
  detailed?: boolean
}

export function ApplicationsChart({ dateRange, detailed = false }: ApplicationsChartProps) {
  // Mock data - in real app, this would come from API based on dateRange
  const data = [
    {
      date: "1402/08/01",
      pending: 12,
      approved: 8,
      rejected: 3,
      total: 23,
    },
    {
      date: "1402/08/02",
      pending: 15,
      approved: 12,
      rejected: 2,
      total: 29,
    },
    {
      date: "1402/08/03",
      pending: 18,
      approved: 15,
      rejected: 4,
      total: 37,
    },
    {
      date: "1402/08/04",
      pending: 22,
      approved: 18,
      rejected: 3,
      total: 43,
    },
    {
      date: "1402/08/05",
      pending: 25,
      approved: 22,
      rejected: 5,
      total: 52,
    },
    {
      date: "1402/08/06",
      pending: 28,
      approved: 25,
      rejected: 4,
      total: 57,
    },
    {
      date: "1402/08/07",
      pending: 32,
      approved: 28,
      rejected: 6,
      total: 66,
    },
  ]

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        {detailed ? (
          <>
            <Line type="monotone" dataKey="pending" stroke="#f59e0b" name="در انتظار" strokeWidth={2} />
            <Line type="monotone" dataKey="approved" stroke="#10b981" name="تایید شده" strokeWidth={2} />
            <Line type="monotone" dataKey="rejected" stroke="#ef4444" name="رد شده" strokeWidth={2} />
          </>
        ) : (
          <Line type="monotone" dataKey="total" stroke="#3b82f6" name="کل درخواست‌ها" strokeWidth={2} />
        )}
      </LineChart>
    </ResponsiveContainer>
  )
}
