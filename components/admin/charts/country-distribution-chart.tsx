"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts"

const countryData = [
  { country: "آلمان", value: 35, color: "#0088FE" },
  { country: "کانادا", value: 25, color: "#00C49F" },
  { country: "استرالیا", value: 20, color: "#FFBB28" },
  { country: "انگلستان", value: 12, color: "#FF8042" },
  { country: "فرانسه", value: 8, color: "#8884D8" },
]

export function CountryDistributionChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>توزیع کشورهای مقصد</CardTitle>
        <CardDescription>درصد انتخاب کشورهای مختلف توسط متقاضیان</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            value: {
              label: "درصد",
            },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={countryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ country, value }) => `${country}: ${value}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {countryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <ChartTooltip content={<ChartTooltipContent />} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
