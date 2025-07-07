"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Search, Filter } from "lucide-react"

export function SmartMatchingForm() {
  const [formData, setFormData] = useState({
    degreeLevel: "",
    field: "",
    country: "",
    language: "",
    funding: false,
    remote: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Search criteria:", formData)
    // Here you would typically send the data to your matching algorithm
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-[#FF6A5C]" />
          فیلترهای جستجو
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Degree Level */}
            <div className="space-y-2">
              <Label htmlFor="degree">مقطع تحصیلی</Label>
              <Select
                value={formData.degreeLevel}
                onValueChange={(value) => setFormData({ ...formData, degreeLevel: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="انتخاب مقطع" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bachelor">کارشناسی</SelectItem>
                  <SelectItem value="master">کارشناسی ارشد</SelectItem>
                  <SelectItem value="phd">دکترا</SelectItem>
                  <SelectItem value="postdoc">پسادکترا</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Field of Study */}
            <div className="space-y-2">
              <Label htmlFor="field">رشته تحصیلی</Label>
              <Select value={formData.field} onValueChange={(value) => setFormData({ ...formData, field: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="انتخاب رشته" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="engineering">مهندسی</SelectItem>
                  <SelectItem value="computer-science">علوم کامپیوتر</SelectItem>
                  <SelectItem value="medicine">پزشکی</SelectItem>
                  <SelectItem value="business">بازرگانی</SelectItem>
                  <SelectItem value="arts">هنر</SelectItem>
                  <SelectItem value="sciences">علوم پایه</SelectItem>
                  <SelectItem value="social-sciences">علوم اجتماعی</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Country */}
            <div className="space-y-2">
              <Label htmlFor="country">کشور مقصد</Label>
              <Select value={formData.country} onValueChange={(value) => setFormData({ ...formData, country: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="انتخاب کشور" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="usa">آمریکا</SelectItem>
                  <SelectItem value="canada">کانادا</SelectItem>
                  <SelectItem value="germany">آلمان</SelectItem>
                  <SelectItem value="uk">انگلستان</SelectItem>
                  <SelectItem value="australia">استرالیا</SelectItem>
                  <SelectItem value="netherlands">هلند</SelectItem>
                  <SelectItem value="any">هر کشوری</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Language */}
            <div className="space-y-2">
              <Label htmlFor="language">زبان آموزش</Label>
              <Select
                value={formData.language}
                onValueChange={(value) => setFormData({ ...formData, language: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="انتخاب زبان" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="english">انگلیسی</SelectItem>
                  <SelectItem value="german">آلمانی</SelectItem>
                  <SelectItem value="french">فرانسوی</SelectItem>
                  <SelectItem value="any">هر زبانی</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Checkboxes */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 space-x-reverse">
              <Checkbox
                id="funding"
                checked={formData.funding}
                onCheckedChange={(checked) => setFormData({ ...formData, funding: checked as boolean })}
              />
              <Label htmlFor="funding">فقط موقعیت‌های دارای بورسیه</Label>
            </div>

            <div className="flex items-center space-x-2 space-x-reverse">
              <Checkbox
                id="remote"
                checked={formData.remote}
                onCheckedChange={(checked) => setFormData({ ...formData, remote: checked as boolean })}
              />
              <Label htmlFor="remote">امکان تحصیل آنلاین</Label>
            </div>
          </div>

          <Button type="submit" className="w-full bg-[#FF6A5C] hover:bg-[#FF6A5C]/90 text-white">
            <Search className="h-4 w-4 mr-2" />
            جستجوی هوشمند
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
