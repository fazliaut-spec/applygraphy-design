"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Filter, X } from "lucide-react"

interface ApplicationFiltersProps {
  onFiltersChange: (filters: any) => void
}

export function ApplicationFilters({ onFiltersChange }: ApplicationFiltersProps) {
  const [filters, setFilters] = useState({
    search: "",
    status: "",
    country: "",
    university: "",
    dateRange: "",
  })

  const handleFilterChange = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)
    onFiltersChange(newFilters)
  }

  const clearFilters = () => {
    const emptyFilters = {
      search: "",
      status: "",
      country: "",
      university: "",
      dateRange: "",
    }
    setFilters(emptyFilters)
    onFiltersChange(emptyFilters)
  }

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Filter className="h-5 w-5" />
          فیلترهای درخواست‌ها
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          <div className="space-y-2">
            <Label htmlFor="search">جستجو</Label>
            <div className="relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                id="search"
                placeholder="نام، ایمیل یا شناسه..."
                value={filters.search}
                onChange={(e) => handleFilterChange("search", e.target.value)}
                className="pr-10"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>وضعیت درخواست</Label>
            <Select value={filters.status} onValueChange={(value) => handleFilterChange("status", value)}>
              <SelectTrigger>
                <SelectValue placeholder="انتخاب وضعیت" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pending">در انتظار بررسی</SelectItem>
                <SelectItem value="reviewing">در حال بررسی</SelectItem>
                <SelectItem value="approved">تایید شده</SelectItem>
                <SelectItem value="rejected">رد شده</SelectItem>
                <SelectItem value="completed">تکمیل شده</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>کشور مقصد</Label>
            <Select value={filters.country} onValueChange={(value) => handleFilterChange("country", value)}>
              <SelectTrigger>
                <SelectValue placeholder="انتخاب کشور" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="germany">آلمان</SelectItem>
                <SelectItem value="canada">کانادا</SelectItem>
                <SelectItem value="australia">استرالیا</SelectItem>
                <SelectItem value="uk">انگلستان</SelectItem>
                <SelectItem value="usa">آمریکا</SelectItem>
                <SelectItem value="netherlands">هلند</SelectItem>
                <SelectItem value="france">فرانسه</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>دانشگاه</Label>
            <Input
              placeholder="نام دانشگاه..."
              value={filters.university}
              onChange={(e) => handleFilterChange("university", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label>بازه زمانی</Label>
            <Select value={filters.dateRange} onValueChange={(value) => handleFilterChange("dateRange", value)}>
              <SelectTrigger>
                <SelectValue placeholder="انتخاب بازه" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">امروز</SelectItem>
                <SelectItem value="week">هفته گذشته</SelectItem>
                <SelectItem value="month">ماه گذشته</SelectItem>
                <SelectItem value="quarter">سه ماه گذشته</SelectItem>
                <SelectItem value="year">سال گذشته</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex justify-end mt-4">
          <Button variant="outline" onClick={clearFilters} className="flex items-center gap-2 bg-transparent">
            <X className="h-4 w-4" />
            پاک کردن فیلترها
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
