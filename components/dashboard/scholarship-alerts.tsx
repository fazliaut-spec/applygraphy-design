"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Bell, DollarSign, Calendar, MapPin, GraduationCap, Search, Filter, Star, Clock } from "lucide-react"

interface Scholarship {
  id: string
  title: string
  provider: string
  country: string
  amount: string
  deadline: Date
  level: string[]
  field: string[]
  description: string
  isBookmarked: boolean
  isNew: boolean
}

const mockScholarships: Scholarship[] = [
  {
    id: "1",
    title: "بورسیه تحصیلی کانادا برای دانشجویان بین‌المللی",
    provider: "دولت کانادا",
    country: "کانادا",
    amount: "$25,000 CAD",
    deadline: new Date("2024-03-15"),
    level: ["کارشناسی ارشد", "دکترا"],
    field: ["مهندسی", "علوم"],
    description: "بورسیه کامل برای دانشجویان بین‌المللی با عملکرد تحصیلی عالی",
    isBookmarked: false,
    isNew: true,
  },
  {
    id: "2",
    title: "بورسیه DAAD آلمان",
    provider: "DAAD",
    country: "آلمان",
    amount: "€1,200/ماه",
    deadline: new Date("2024-04-01"),
    level: ["کارشناسی ارشد"],
    field: ["همه رشته‌ها"],
    description: "بورسیه ماهانه برای تحصیل در دانشگاه‌های آلمان",
    isBookmarked: true,
    isNew: false,
  },
  {
    id: "3",
    title: "بورسیه چیولنگ انگلستان",
    provider: "دولت انگلستان",
    country: "انگلستان",
    amount: "£18,000",
    deadline: new Date("2024-02-28"),
    level: ["کارشناسی ارشد"],
    field: ["علوم اجتماعی", "هنر"],
    description: "بورسیه یک ساله برای تحصیل در دانشگاه‌های انگلستان",
    isBookmarked: false,
    isNew: true,
  },
]

export function ScholarshipAlerts() {
  const [scholarships, setScholarships] = useState(mockScholarships)
  const [searchTerm, setSearchTerm] = useState("")
  const [alertsEnabled, setAlertsEnabled] = useState(true)

  const handleBookmark = (scholarshipId: string) => {
    setScholarships(
      scholarships.map((scholarship) =>
        scholarship.id === scholarshipId ? { ...scholarship, isBookmarked: !scholarship.isBookmarked } : scholarship,
      ),
    )
  }

  const filteredScholarships = scholarships.filter(
    (scholarship) =>
      scholarship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scholarship.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scholarship.field.some((f) => f.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  const getDaysUntilDeadline = (deadline: Date) => {
    const today = new Date()
    const diffTime = deadline.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  return (
    <div className="space-y-6">
      {/* Alert Settings */}
      <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Bell className="w-6 h-6 text-yellow-600" />
              <div>
                <h3 className="font-semibold text-gray-800">هشدارهای بورسیه هفتگی</h3>
                <p className="text-sm text-gray-600">آخرین فرصت‌های بورسیه را در ایمیل خود دریافت کنید</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Switch checked={alertsEnabled} onCheckedChange={setAlertsEnabled} />
              <span className="text-sm text-gray-600">{alertsEnabled ? "فعال" : "غیرفعال"}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Search and Filter */}
      <Card className="bg-white shadow-lg border-0">
        <CardContent className="p-6">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="جستجوی بورسیه..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pr-10 text-right"
              />
            </div>
            <Button variant="outline">
              <Filter className="w-4 h-4 ml-2" />
              فیلتر
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Scholarships List */}
      <div className="space-y-4">
        {filteredScholarships.map((scholarship) => {
          const daysLeft = getDaysUntilDeadline(scholarship.deadline)
          const isUrgent = daysLeft <= 7

          return (
            <Card
              key={scholarship.id}
              className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-gray-800">{scholarship.title}</h3>
                      {scholarship.isNew && <Badge className="bg-green-600 text-white">جدید</Badge>}
                      {isUrgent && (
                        <Badge variant="destructive">
                          <Clock className="w-3 h-3 ml-1" />
                          فوری
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center gap-4 text-gray-600 mb-3">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{scholarship.country}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4" />
                        <span>{scholarship.amount}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span className={isUrgent ? "text-red-600 font-semibold" : ""}>
                          {daysLeft > 0 ? `${daysLeft} روز مانده` : "منقضی شده"}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4">{scholarship.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {scholarship.level.map((level, index) => (
                        <Badge key={index} variant="outline" className="text-blue-600 border-blue-600">
                          <GraduationCap className="w-3 h-3 ml-1" />
                          {level}
                        </Badge>
                      ))}
                      {scholarship.field.map((field, index) => (
                        <Badge key={index} variant="secondary">
                          {field}
                        </Badge>
                      ))}
                    </div>

                    <div className="text-sm text-gray-600 mb-4">
                      <strong>ارائه‌دهنده:</strong> {scholarship.provider}
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleBookmark(scholarship.id)}
                    className={scholarship.isBookmarked ? "text-yellow-500" : "text-gray-400"}
                  >
                    <Star className={`w-5 h-5 ${scholarship.isBookmarked ? "fill-current" : ""}`} />
                  </Button>
                </div>

                <div className="flex gap-3">
                  <Button className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600">
                    درخواست بورسیه
                  </Button>
                  <Button variant="outline">جزئیات بیشتر</Button>
                  <Button variant="outline">اشتراک‌گذاری</Button>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {filteredScholarships.length === 0 && (
        <Card className="bg-white shadow-lg border-0">
          <CardContent className="p-12 text-center">
            <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">بورسیه‌ای یافت نشد</h3>
            <p className="text-gray-600">لطفاً جستجوی خود را تغییر دهید یا فیلترهای جدیدی امتحان کنید</p>
          </CardContent>
        </Card>
      )}

      {/* Newsletter Signup */}
      <Card className="bg-gradient-to-r from-blue-600 to-green-600 text-white border-0">
        <CardContent className="p-8 text-center">
          <Bell className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">هیچ فرصتی را از دست ندهید!</h3>
          <p className="text-blue-100 mb-6">عضو خبرنامه ما شوید و هر هفته آخرین بورسیه‌ها را در ایمیل خود دریافت کنید</p>
          <div className="flex gap-3 max-w-md mx-auto">
            <Input placeholder="ایمیل خود را وارد کنید" className="bg-white text-gray-800 text-right" />
            <Button className="bg-white text-blue-600 hover:bg-gray-100">عضویت</Button>
          </div>
          <p className="text-xs text-blue-100 mt-3">بدون اسپم. لغو عضویت در هر زمان امکان‌پذیر است.</p>
        </CardContent>
      </Card>
    </div>
  )
}
