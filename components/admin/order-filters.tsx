"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, X, Calendar, DollarSign, Download } from "lucide-react"
import { DateRangePicker } from "@/components/ui/date-range-picker"

interface OrderFiltersProps {
  onFiltersChange: (filters: any) => void
}

export function OrderFilters({ onFiltersChange }: OrderFiltersProps) {
  const [filters, setFilters] = useState({
    search: "",
    status: "",
    paymentStatus: "",
    dateRange: "",
    amountRange: "",
    service: "",
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
      paymentStatus: "",
      dateRange: "",
      amountRange: "",
      service: "",
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
            فیلترهای سفارشات
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
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-1 items-center space-x-2 space-x-reverse">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute right-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="جستجو در سفارشات..."
                value={filters.search}
                onChange={(e) => handleFilterChange("search", e.target.value)}
                className="pr-8"
              />
            </div>

            <Select value={filters.status} onValueChange={(value) => handleFilterChange("status", value)}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="وضعیت" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">همه</SelectItem>
                <SelectItem value="pending">در انتظار</SelectItem>
                <SelectItem value="processing">در حال پردازش</SelectItem>
                <SelectItem value="completed">تکمیل شده</SelectItem>
                <SelectItem value="cancelled">لغو شده</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filters.service} onValueChange={(value) => handleFilterChange("service", value)}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="خدمت" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">همه خدمات</SelectItem>
                <SelectItem value="consultation">مشاوره</SelectItem>
                <SelectItem value="visa">ویزا</SelectItem>
                <SelectItem value="application">درخواست</SelectItem>
                <SelectItem value="package">پکیج کامل</SelectItem>
              </SelectContent>
            </Select>

            <DateRangePicker value={filters.dateRange} onChange={(value) => handleFilterChange("dateRange", value)} />
          </div>

          <div className="flex items-center space-x-2 space-x-reverse">
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              فیلترهای بیشتر
            </Button>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              خروجی Excel
            </Button>
          </div>
        </div>

        {/* Quick Filter Buttons */}
        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t">
          <Button
            variant={filters.status === "pending" ? "default" : "outline"}
            size="sm"
            onClick={() => handleFilterChange("status", filters.status === "pending" ? "" : "pending")}
          >
            سفارشات در انتظار
          </Button>
          <Button
            variant={filters.paymentStatus === "pending" ? "default" : "outline"}
            size="sm"
            onClick={() => handleFilterChange("paymentStatus", filters.paymentStatus === "pending" ? "" : "pending")}
          >
            <DollarSign className="h-4 w-4 ml-1" />
            پرداخت نشده
          </Button>
          <Button
            variant={filters.status === "completed" ? "default" : "outline"}
            size="sm"
            onClick={() => handleFilterChange("status", filters.status === "completed" ? "" : "completed")}
          >
            تکمیل شده
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
                    وضعیت: {filters.status}
                    <button onClick={() => handleFilterChange("status", "")} className="mr-1 hover:text-red-600">
                      ×
                    </button>
                  </Badge>
                )}
                {filters.paymentStatus && (
                  <Badge variant="secondary" className="text-xs">
                    پرداخت: {filters.paymentStatus}
                    <button onClick={() => handleFilterChange("paymentStatus", "")} className="mr-1 hover:text-red-600">
                      ×
                    </button>
                  </Badge>
                )}
                {filters.service && (
                  <Badge variant="secondary" className="text-xs">
                    خدمات: {filters.service}
                    <button onClick={() => handleFilterChange("service", "")} className="mr-1 hover:text-red-600">
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
