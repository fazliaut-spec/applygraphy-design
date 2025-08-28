"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, X } from "lucide-react"

interface ApplicationFiltersProps {
  onFiltersChange?: (filters: any) => void
}

export function ApplicationFilters({ onFiltersChange }: ApplicationFiltersProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [status, setStatus] = useState("")
  const [country, setCountry] = useState("")
  const [university, setUniversity] = useState("")
  const [degree, setDegree] = useState("")

  const handleSearch = () => {
    const filters = {
      search: searchTerm,
      status,
      country,
      university,
      degree,
    }
    onFiltersChange?.(filters)
  }

  const clearFilters = () => {
    setSearchTerm("")
    setStatus("")
    setCountry("")
    setUniversity("")
    setDegree("")
    onFiltersChange?.({})
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>فیلتر درخواست‌ها</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <div className="flex-1">
            <Input
              placeholder="جستجو در نام دانشگاه، رشته یا کشور..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>
          <Button onClick={handleSearch} size="icon">
            <Search className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Select value={status} onValueChange={setStatus}>
            <SelectTrigger>
              <SelectValue placeholder="وضعیت" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pending">در انتظار بررسی</SelectItem>
              <SelectItem value="in-progress">در حال پردازش</SelectItem>
              <SelectItem value="submitted">ارسال شده</SelectItem>
              <SelectItem value="accepted">پذیرفته شده</SelectItem>
              <SelectItem value="rejected">رد شده</SelectItem>
            </SelectContent>
          </Select>

          <Select value={country} onValueChange={setCountry}>
            <SelectTrigger>
              <SelectValue placeholder="کشور" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="germany">آلمان</SelectItem>
              <SelectItem value="canada">کانادا</SelectItem>
              <SelectItem value="australia">استرالیا</SelectItem>
              <SelectItem value="uk">انگلستان</SelectItem>
              <SelectItem value="france">فرانسه</SelectItem>
            </SelectContent>
          </Select>

          <Select value={degree} onValueChange={setDegree}>
            <SelectTrigger>
              <SelectValue placeholder="مقطع تحصیلی" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bachelor">کارشناسی</SelectItem>
              <SelectItem value="master">کارشناسی ارشد</SelectItem>
              <SelectItem value="phd">دکتری</SelectItem>
              <SelectItem value="diploma">دیپلم</SelectItem>
            </SelectContent>
          </Select>

          <Input placeholder="نام دانشگاه" value={university} onChange={(e) => setUniversity(e.target.value)} />
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
