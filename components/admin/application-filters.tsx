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
    university: "",
    country: "",
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
      university: "",
      country: "",
      dateRange: "",
    }
    setFilters(emptyFilters)
    onFiltersChange(emptyFilters)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Filter className="h-5 w-5" />
          فیلترهای درخواست‌ها
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
                placeholder="نام، ایمیل یا شماره درخواست..."
                value={filters.search}
                onChange={(e) => handleFilterChange("search", e.target.value)}
                className="pl-10"
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
                <SelectItem value="all">همه وضعیت‌ها</SelectItem>
                <SelectItem value="pending">در انتظار بررسی</SelectItem>
                <SelectItem value="reviewing">در حال بررسی</SelectItem>
                <SelectItem value="approved">تایید شده</SelectItem>
                <SelectItem value="rejected">رد شده</SelectItem>
                <SelectItem value="completed">تکمیل شده</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>دانشگاه</Label>
            <Select value={filters.university} onValueChange={(value) => handleFilterChange("university", value)}>
              <SelectTrigger>
                <SelectValue placeholder="انتخاب دانشگاه" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">همه دانشگاه‌ها</SelectItem>
                <SelectItem value="harvard">دانشگاه هاروارد</SelectItem>
                <SelectItem value="mit">دانشگاه MIT</SelectItem>
                <SelectItem value="stanford">دانشگاه استنفورد</SelectItem>
                <SelectItem value="oxford">دانشگاه آکسفورد</SelectItem>
                <SelectItem value="cambridge">دانشگاه کمبریج</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>کشور</Label>
            <Select value={filters.country} onValueChange={(value) => handleFilterChange("country", value)}>
              <SelectTrigger>
                <SelectValue placeholder="انتخاب کشور" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">همه کشورها</SelectItem>
                <SelectItem value="usa">آمریکا</SelectItem>
                <SelectItem value="uk">انگلستان</SelectItem>
                <SelectItem value="canada">کانادا</SelectItem>
                <SelectItem value="germany">آلمان</SelectItem>
                <SelectItem value="australia">استرالیا</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>بازه زمانی</Label>
            <Select value={filters.dateRange} onValueChange={(value) => handleFilterChange("dateRange", value)}>
              <SelectTrigger>
                <SelectValue placeholder="انتخاب بازه زمانی" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">همه زمان‌ها</SelectItem>
                <SelectItem value="today">امروز</SelectItem>
                <SelectItem value="week">هفته گذشته</SelectItem>
                <SelectItem value="month">ماه گذشته</SelectItem>
                <SelectItem value="quarter">سه ماه گذشته</SelectItem>
                <SelectItem value="year">سال گذشته</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-end">
            <Button variant="outline" onClick={clearFilters} className="w-full bg-transparent">
              <X className="h-4 w-4 mr-2" />
              پاک کردن فیلترها
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
