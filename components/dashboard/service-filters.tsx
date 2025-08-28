"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, X } from "lucide-react"

interface ServiceFiltersProps {
  onFiltersChange?: (filters: any) => void
}

export function ServiceFilters({ onFiltersChange }: ServiceFiltersProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [category, setCategory] = useState("")
  const [status, setStatus] = useState("")
  const [priceRange, setPriceRange] = useState("")

  const handleSearch = () => {
    const filters = {
      search: searchTerm,
      category,
      status,
      priceRange,
    }
    onFiltersChange?.(filters)
  }

  const clearFilters = () => {
    setSearchTerm("")
    setCategory("")
    setStatus("")
    setPriceRange("")
    onFiltersChange?.({})
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>فیلتر خدمات</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <div className="flex-1">
            <Input
              placeholder="جستجو در خدمات..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>
          <Button onClick={handleSearch} size="icon">
            <Search className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger>
              <SelectValue placeholder="دسته‌بندی" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="consultation">مشاوره تحصیلی</SelectItem>
              <SelectItem value="visa">خدمات ویزا</SelectItem>
              <SelectItem value="application">درخواست دانشگاه</SelectItem>
              <SelectItem value="education">آموزش</SelectItem>
              <SelectItem value="package">پکیج کامل</SelectItem>
            </SelectContent>
          </Select>

          <Select value={status} onValueChange={setStatus}>
            <SelectTrigger>
              <SelectValue placeholder="وضعیت" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="active">فعال</SelectItem>
              <SelectItem value="pending">در انتظار</SelectItem>
              <SelectItem value="completed">تکمیل شده</SelectItem>
              <SelectItem value="cancelled">لغو شده</SelectItem>
            </SelectContent>
          </Select>

          <Select value={priceRange} onValueChange={setPriceRange}>
            <SelectTrigger>
              <SelectValue placeholder="محدوده قیمت" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-1000000">زیر ۱ میلیون</SelectItem>
              <SelectItem value="1000000-3000000">۱ تا ۳ میلیون</SelectItem>
              <SelectItem value="3000000-5000000">۳ تا ۵ میلیون</SelectItem>
              <SelectItem value="5000000+">بالای ۵ میلیون</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex gap-2">
          <Button onClick={handleSearch} className="flex-1">
            <Filter className="mr-2 h-4 w-4" />
            اعمال فیلتر
          </Button>
          <Button variant="outline" onClick={clearFilters}>
            <X className="mr-2 h-4 w-4" />
            پاک کردن
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
