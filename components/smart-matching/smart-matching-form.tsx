"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"

interface FilterOptions {
  degreeLevel: string[]
  fieldOfStudy: string
  location: string[]
  salaryRange: number[]
  jobType: string[]
  experienceLevel: string
}

export function SmartMatchingForm() {
  const [filters, setFilters] = useState<FilterOptions>({
    degreeLevel: [],
    fieldOfStudy: "",
    location: [],
    salaryRange: [30000, 100000],
    jobType: [],
    experienceLevel: "",
  })

  const degreeLevels = [
    { id: "phd", label: "دکترا (PhD)" },
    { id: "masters", label: "کارشناسی ارشد (Master's)" },
    { id: "bachelors", label: "کارشناسی (Bachelor's)" },
    { id: "postdoc", label: "پسادکترا (Postdoc)" },
  ]

  const locations = [
    { id: "us", label: "ایالات متحده" },
    { id: "uk", label: "انگلستان" },
    { id: "canada", label: "کانادا" },
    { id: "germany", label: "آلمان" },
    { id: "australia", label: "استرالیا" },
    { id: "netherlands", label: "هلند" },
    { id: "sweden", label: "سوئد" },
    { id: "switzerland", label: "سوئیس" },
  ]

  const jobTypes = [
    { id: "academic", label: "موقعیت‌های دانشگاهی" },
    { id: "research", label: "پژوهشی" },
    { id: "industry", label: "صنعتی" },
    { id: "government", label: "دولتی" },
    { id: "nonprofit", label: "غیرانتفاعی" },
  ]

  const toggleArrayFilter = (array: string[], value: string, setter: (newArray: string[]) => void) => {
    if (array.includes(value)) {
      setter(array.filter((item) => item !== value))
    } else {
      setter([...array, value])
    }
  }

  const handleSearch = () => {
    console.log("Search filters:", filters)
    // Trigger search with current filters
  }

  return (
    <Card className="max-w-4xl mx-auto">
      <CardContent className="p-6">
        <div className="space-y-6">
          {/* Degree Level Filter */}
          <div>
            <h3 className="text-lg font-semibold text-[#02153D] mb-4">مقطع تحصیلی</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {degreeLevels.map((degree) => (
                <div key={degree.id} className="flex items-center space-x-2 space-x-reverse">
                  <Checkbox
                    id={degree.id}
                    checked={filters.degreeLevel.includes(degree.id)}
                    onCheckedChange={() =>
                      toggleArrayFilter(filters.degreeLevel, degree.id, (newArray) =>
                        setFilters({ ...filters, degreeLevel: newArray }),
                      )
                    }
                  />
                  <label htmlFor={degree.id} className="text-sm font-medium">
                    {degree.label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Field of Study */}
          <div>
            <h3 className="text-lg font-semibold text-[#02153D] mb-4">رشته تحصیلی</h3>
            <Input
              placeholder="مثال: مهندسی کامپیوتر، پزشکی، اقتصاد..."
              value={filters.fieldOfStudy}
              onChange={(e) => setFilters({ ...filters, fieldOfStudy: e.target.value })}
              className="text-right"
            />
          </div>

          {/* Location Filter */}
          <div>
            <h3 className="text-lg font-semibold text-[#02153D] mb-4">کشور/منطقه</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {locations.map((location) => (
                <div key={location.id} className="flex items-center space-x-2 space-x-reverse">
                  <Checkbox
                    id={location.id}
                    checked={filters.location.includes(location.id)}
                    onCheckedChange={() =>
                      toggleArrayFilter(filters.location, location.id, (newArray) =>
                        setFilters({ ...filters, location: newArray }),
                      )
                    }
                  />
                  <label htmlFor={location.id} className="text-sm font-medium">
                    {location.label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Salary Range */}
          <div>
            <h3 className="text-lg font-semibold text-[#02153D] mb-4">محدوده حقوق (دلار)</h3>
            <div className="space-y-4">
              <Slider
                value={filters.salaryRange}
                min={20000}
                max={200000}
                step={5000}
                onValueChange={(value) => setFilters({ ...filters, salaryRange: value })}
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>${filters.salaryRange[0].toLocaleString()}</span>
                <span>${filters.salaryRange[1].toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Job Type */}
          <div>
            <h3 className="text-lg font-semibold text-[#02153D] mb-4">نوع موقعیت</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {jobTypes.map((type) => (
                <div key={type.id} className="flex items-center space-x-2 space-x-reverse">
                  <Checkbox
                    id={type.id}
                    checked={filters.jobType.includes(type.id)}
                    onCheckedChange={() =>
                      toggleArrayFilter(filters.jobType, type.id, (newArray) =>
                        setFilters({ ...filters, jobType: newArray }),
                      )
                    }
                  />
                  <label htmlFor={type.id} className="text-sm font-medium">
                    {type.label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Level */}
          <div>
            <h3 className="text-lg font-semibold text-[#02153D] mb-4">سطح تجربه</h3>
            <Select
              value={filters.experienceLevel}
              onValueChange={(value) => setFilters({ ...filters, experienceLevel: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="انتخاب سطح تجربه" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="entry">تازه‌کار (0-2 سال)</SelectItem>
                <SelectItem value="mid">متوسط (2-5 سال)</SelectItem>
                <SelectItem value="senior">ارشد (5-10 سال)</SelectItem>
                <SelectItem value="expert">متخصص (10+ سال)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Search Button */}
          <div className="pt-6 border-t">
            <Button
              onClick={handleSearch}
              className="w-full bg-[#FF6A5C] hover:bg-[#FF6A5C]/90 text-white text-lg py-3"
            >
              جستجوی هوشمند موقعیت‌ها
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
