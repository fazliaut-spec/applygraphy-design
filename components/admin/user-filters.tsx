"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, X } from "lucide-react"

interface UserFiltersProps {
  onFiltersChange?: (filters: any) => void
}

export function UserFilters({ onFiltersChange }: UserFiltersProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [status, setStatus] = useState("")
  const [role, setRole] = useState("")
  const [registrationDate, setRegistrationDate] = useState("")

  const handleSearch = () => {
    const filters = {
      search: searchTerm,
      status,
      role,
      registrationDate,
    }
    onFiltersChange?.(filters)
  }

  const clearFilters = () => {
    setSearchTerm("")
    setStatus("")
    setRole("")
    setRegistrationDate("")
    onFiltersChange?.({})
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>فیلتر کاربران</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <div className="flex-1">
            <Input
              placeholder="جستجو در نام، ایمیل یا شماره تلفن..."
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
          <Select value={status} onValueChange={setStatus}>
            <SelectTrigger>
              <SelectValue placeholder="وضعیت" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="active">فعال</SelectItem>
              <SelectItem value="inactive">غیرفعال</SelectItem>
              <SelectItem value="pending">در انتظار تایید</SelectItem>
              <SelectItem value="suspended">مسدود</SelectItem>
            </SelectContent>
          </Select>

          <Select value={role} onValueChange={setRole}>
            <SelectTrigger>
              <SelectValue placeholder="نقش" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="user">کاربر عادی</SelectItem>
              <SelectItem value="premium">کاربر ویژه</SelectItem>
              <SelectItem value="consultant">مشاور</SelectItem>
              <SelectItem value="admin">مدیر</SelectItem>
            </SelectContent>
          </Select>

          <Select value={registrationDate} onValueChange={setRegistrationDate}>
            <SelectTrigger>
              <SelectValue placeholder="تاریخ ثبت نام" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">امروز</SelectItem>
              <SelectItem value="week">هفته گذشته</SelectItem>
              <SelectItem value="month">ماه گذشته</SelectItem>
              <SelectItem value="3months">۳ ماه گذشته</SelectItem>
              <SelectItem value="year">سال گذشته</SelectItem>
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
