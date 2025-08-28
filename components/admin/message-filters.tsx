"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, X, Calendar } from "lucide-react"

interface MessageFiltersProps {
  onFiltersChange: (filters: any) => void
}

export function MessageFilters({ onFiltersChange }: MessageFiltersProps) {
  const [filters, setFilters] = useState({
    search: "",
    status: "",
    priority: "",
    category: "",
    dateRange: "",
    sender: "",
  })

  const [activeFiltersCount, setActiveFiltersCount] = useState(0)

  const handleFilterChange = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)

    // Count active filters
    const activeCount = Object.values(newFilters).filter((v) => v !== "").length
    setActiveFiltersCount(activeCount)

    onFiltersChange(newFilters)
  }

  const clearFilters = () => {
    const emptyFilters = {
      search: "",
      status: "",
      priority: "",
      category: "",
      dateRange: "",
      sender: "",
    }
    setFilters(emptyFilters)
    setActiveFiltersCount(0)
    onFiltersChange(emptyFilters)
  }

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            فیلترهای پیام‌ها
            {activeFiltersCount > 0 && (
              <Badge variant="secondary" className="text-xs">
                {activeFiltersCount} فیلتر فعال
              </Badge>
            )}
          </div>
          {activeFiltersCount > 0 && (
            <Button variant="outline" size="sm" onClick={clearFilters}>
              <X className="h-4 w-4 ml-1" />
              پاک کردن همه
            </Button>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {/* Search */}
          <div className="space-y-2">
            <Label htmlFor="search">جستجو</Label>
            <div className="relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                id="search"
                placeholder="موضوع، فرستنده..."
                value={filters.search}
                onChange={(e) => handleFilterChange("search", e.target.value)}
                className="pr-10"
              />
            </div>
          </div>

          {/* Status Filter */}
          <div className="space-y-2">
            <Label>وضعیت پیام</Label>
            <Select value={filters.status} onValueChange={(value) => handleFilterChange("status", value)}>
              <SelectTrigger>
                <SelectValue placeholder="انتخاب وضعیت" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="unread">خوانده نشده</SelectItem>
                <SelectItem value="read">خوانده شده</SelectItem>
                <SelectItem value="replied">پاسخ داده شده</SelectItem>
                <SelectItem value="closed">بسته شده</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Priority Filter */}
          <div className="space-y-2">
            <Label>اولویت</Label>
            <Select value={filters.priority} onValueChange={(value) => handleFilterChange("priority", value)}>
              <SelectTrigger>
                <SelectValue placeholder="انتخاب اولویت" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="urgent">فوری</SelectItem>
                <SelectItem value="high">بالا</SelectItem>
                <SelectItem value="medium">متوسط</SelectItem>
                <SelectItem value="low">پایین</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Category Filter */}
          <div className="space-y-2">
            <Label>دسته‌بندی</Label>
            <Select value={filters.category} onValueChange={(value) => handleFilterChange("category", value)}>
              <SelectTrigger>
                <SelectValue placeholder="انتخاب دسته" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">عمومی</SelectItem>
                <SelectItem value="application">درخواست</SelectItem>
                <SelectItem value="visa">ویزا</SelectItem>
                <SelectItem value="technical">فنی</SelectItem>
                <SelectItem value="complaint">شکایت</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Date Range Filter */}
          <div className="space-y-2">
            <Label>بازه زمانی</Label>
            <Select value={filters.dateRange} onValueChange={(value) => handleFilterChange("dateRange", value)}>
              <SelectTrigger>
                <SelectValue placeholder="انتخاب بازه" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">امروز</SelectItem>
                <SelectItem value="yesterday">دیروز</SelectItem>
                <SelectItem value="week">هفته گذشته</SelectItem>
                <SelectItem value="month">ماه گذشته</SelectItem>
                <SelectItem value="quarter">سه ماه گذشته</SelectItem>
                <SelectItem value="year">سال گذشته</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Sender Filter */}
          <div className="space-y-2">
            <Label htmlFor="sender">فرستنده</Label>
            <Input
              id="sender"
              placeholder="نام یا ایمیل فرستنده..."
              value={filters.sender}
              onChange={(e) => handleFilterChange("sender", e.target.value)}
            />
          </div>
        </div>

        {/* Quick Filter Buttons */}
        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t">
          <Button
            variant={filters.status === "unread" ? "default" : "outline"}
            size="sm"
            onClick={() => handleFilterChange("status", filters.status === "unread" ? "" : "unread")}
          >
            پیام‌های خوانده نشده
          </Button>
          <Button
            variant={filters.priority === "urgent" ? "default" : "outline"}
            size="sm"
            onClick={() => handleFilterChange("priority", filters.priority === "urgent" ? "" : "urgent")}
          >
            فوری
          </Button>
          <Button
            variant={filters.priority === "high" ? "default" : "outline"}
            size="sm"
            onClick={() => handleFilterChange("priority", filters.priority === "high" ? "" : "high")}
          >
            اولویت بالا
          </Button>
          <Button
            variant={filters.dateRange === "today" ? "default" : "outline"}
            size="sm"
            onClick={() => handleFilterChange("dateRange", filters.dateRange === "today" ? "" : "today")}
          >
            <Calendar className="h-4 w-4 ml-1" />
            امروز
          </Button>
        </div>

        {/* Active Filters Display */}
        {activeFiltersCount > 0 && (
          <div className="mt-4 pt-4 border-t">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>فیلترهای فعال:</span>
              <div className="flex flex-wrap gap-1">
                {filters.search && (
                  <Badge variant="secondary" className="text-xs">
                    جستجو: {filters.search}
                    <button onClick={() => handleFilterChange("search", "")} className="mr-1 hover:text-red-600">
                      ×
                    </button>
                  </Badge>
                )}
                {filters.status && (
                  <Badge variant="secondary" className="text-xs">
                    وضعیت:{" "}
                    {filters.status === "unread"
                      ? "خوانده نشده"
                      : filters.status === "read"
                        ? "خوانده شده"
                        : filters.status === "replied"
                          ? "پاسخ داده شده"
                          : "بسته شده"}
                    <button onClick={() => handleFilterChange("status", "")} className="mr-1 hover:text-red-600">
                      ×
                    </button>
                  </Badge>
                )}
                {filters.priority && (
                  <Badge variant="secondary" className="text-xs">
                    اولویت:{" "}
                    {filters.priority === "urgent"
                      ? "فوری"
                      : filters.priority === "high"
                        ? "بالا"
                        : filters.priority === "medium"
                          ? "متوسط"
                          : "پایین"}
                    <button onClick={() => handleFilterChange("priority", "")} className="mr-1 hover:text-red-600">
                      ×
                    </button>
                  </Badge>
                )}
                {filters.category && (
                  <Badge variant="secondary" className="text-xs">
                    دسته:{" "}
                    {filters.category === "general"
                      ? "عمومی"
                      : filters.category === "application"
                        ? "درخواست"
                        : filters.category === "visa"
                          ? "ویزا"
                          : filters.category === "technical"
                            ? "فنی"
                            : "شکایت"}
                    <button onClick={() => handleFilterChange("category", "")} className="mr-1 hover:text-red-600">
                      ×
                    </button>
                  </Badge>
                )}
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
