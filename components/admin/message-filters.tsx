"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DateRangePicker } from "@/components/ui/date-range-picker"
import { Search, Filter, X } from "lucide-react"

interface MessageFiltersProps {
  onFiltersChange: (filters: any) => void
}

export function MessageFilters({ onFiltersChange }: MessageFiltersProps) {
  const [filters, setFilters] = useState({
    search: "",
    status: "all",
    priority: "all",
    category: "all",
    dateRange: null as any,
    sender: "",
  })

  const handleFilterChange = (key: string, value: any) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)
    onFiltersChange(newFilters)
  }

  const clearFilters = () => {
    const emptyFilters = {
      search: "",
      status: "all",
      priority: "all",
      category: "all",
      dateRange: null,
      sender: "",
    }
    setFilters(emptyFilters)
    onFiltersChange(emptyFilters)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Filter className="h-5 w-5" />
          فیلترهای پیام‌ها
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="search">جستجو</Label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                id="search"
                placeholder="موضوع، فرستنده یا محتوا..."
                value={filters.search}
                onChange={(e) => handleFilterChange("search", e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>وضعیت پیام</Label>
            <Select value={filters.status} onValueChange={(value) => handleFilterChange("status", value)}>
              <SelectTrigger>
                <SelectValue placeholder="انتخاب وضعیت" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">همه وضعیت‌ها</SelectItem>
                <SelectItem value="unread">خوانده نشده</SelectItem>
                <SelectItem value="read">خوانده شده</SelectItem>
                <SelectItem value="replied">پاسخ داده شده</SelectItem>
                <SelectItem value="archived">آرشیو شده</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>اولویت</Label>
            <Select value={filters.priority} onValueChange={(value) => handleFilterChange("priority", value)}>
              <SelectTrigger>
                <SelectValue placeholder="انتخاب اولویت" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">همه اولویت‌ها</SelectItem>
                <SelectItem value="urgent">فوری</SelectItem>
                <SelectItem value="high">بالا</SelectItem>
                <SelectItem value="medium">متوسط</SelectItem>
                <SelectItem value="low">پایین</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>دسته‌بندی</Label>
            <Select value={filters.category} onValueChange={(value) => handleFilterChange("category", value)}>
              <SelectTrigger>
                <SelectValue placeholder="انتخاب دسته‌بندی" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">همه دسته‌ها</SelectItem>
                <SelectItem value="general">عمومی</SelectItem>
                <SelectItem value="application">درخواست</SelectItem>
                <SelectItem value="visa">ویزا</SelectItem>
                <SelectItem value="academic">تحصیلی</SelectItem>
                <SelectItem value="technical">فنی</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="sender">فرستنده</Label>
            <Input
              id="sender"
              placeholder="نام یا ایمیل فرستنده..."
              value={filters.sender}
              onChange={(e) => handleFilterChange("sender", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label>بازه زمانی</Label>
            <DateRangePicker value={filters.dateRange} onChange={(value) => handleFilterChange("dateRange", value)} />
          </div>
        </div>

        <div className="flex justify-end">
          <Button variant="outline" onClick={clearFilters}>
            <X className="h-4 w-4 mr-2" />
            پاک کردن فیلترها
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
