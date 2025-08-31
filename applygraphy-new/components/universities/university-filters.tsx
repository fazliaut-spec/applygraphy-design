"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Filter, X } from "lucide-react"

export function UniversityFilters() {
  const [tuitionRange, setTuitionRange] = useState([0, 50000])
  const [rankingRange, setRankingRange] = useState([1, 500])
  const [selectedCountries, setSelectedCountries] = useState<string[]>([])
  const [selectedFields, setSelectedFields] = useState<string[]>([])
  const [selectedDegrees, setSelectedDegrees] = useState<string[]>([])

  const countries = [
    { id: "us", name: "ایالات متحده" },
    { id: "uk", name: "انگلستان" },
    { id: "ca", name: "کانادا" },
    { id: "au", name: "استرالیا" },
    { id: "de", name: "آلمان" },
    { id: "it", name: "ایتالیا" },
    { id: "fr", name: "فرانسه" },
    { id: "nl", name: "هلند" },
  ]

  const fields = [
    { id: "engineering", name: "مهندسی" },
    { id: "medicine", name: "پزشکی" },
    { id: "business", name: "تجارت و مدیریت" },
    { id: "arts", name: "هنر" },
    { id: "science", name: "علوم پایه" },
    { id: "humanities", name: "علوم انسانی" },
    { id: "law", name: "حقوق" },
    { id: "cs", name: "علوم کامپیوتر" },
  ]

  const degrees = [
    { id: "bachelor", name: "کارشناسی" },
    { id: "master", name: "کارشناسی ارشد" },
    { id: "phd", name: "دکترا" },
    { id: "postdoc", name: "پسادکترا" },
  ]

  const toggleCountry = (id: string) => {
    setSelectedCountries((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const toggleField = (id: string) => {
    setSelectedFields((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const toggleDegree = (id: string) => {
    setSelectedDegrees((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const resetFilters = () => {
    setTuitionRange([0, 50000])
    setRankingRange([1, 500])
    setSelectedCountries([])
    setSelectedFields([])
    setSelectedDegrees([])
  }

  return (
    <Card className="sticky top-20">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg flex items-center gap-2">
          <Filter className="h-5 w-5" />
          فیلترها
        </CardTitle>
        <Button variant="ghost" size="sm" onClick={resetFilters} className="h-8 text-xs">
          <X className="h-4 w-4 ml-1" />
          پاک کردن
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Tuition Range */}
        <div>
          <h3 className="font-medium mb-3">شهریه سالانه (دلار)</h3>
          <Slider
            value={tuitionRange}
            min={0}
            max={50000}
            step={1000}
            onValueChange={setTuitionRange}
            className="mb-2"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>${tuitionRange[0].toLocaleString()}</span>
            <span>${tuitionRange[1].toLocaleString()}</span>
          </div>
        </div>

        {/* Ranking Range */}
        <div>
          <h3 className="font-medium mb-3">رتبه جهانی</h3>
          <Slider value={rankingRange} min={1} max={500} step={10} onValueChange={setRankingRange} className="mb-2" />
          <div className="flex justify-between text-sm text-gray-600">
            <span>{rankingRange[0]}</span>
            <span>{rankingRange[1]}</span>
          </div>
        </div>

        {/* Countries */}
        <div>
          <h3 className="font-medium mb-3">کشور</h3>
          <div className="space-y-2 max-h-40 overflow-y-auto">
            {countries.map((country) => (
              <div key={country.id} className="flex items-center space-x-2 space-x-reverse">
                <Checkbox
                  id={`country-${country.id}`}
                  checked={selectedCountries.includes(country.id)}
                  onCheckedChange={() => toggleCountry(country.id)}
                />
                <label
                  htmlFor={`country-${country.id}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {country.name}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Fields of Study */}
        <div>
          <h3 className="font-medium mb-3">رشته تحصیلی</h3>
          <div className="space-y-2 max-h-40 overflow-y-auto">
            {fields.map((field) => (
              <div key={field.id} className="flex items-center space-x-2 space-x-reverse">
                <Checkbox
                  id={`field-${field.id}`}
                  checked={selectedFields.includes(field.id)}
                  onCheckedChange={() => toggleField(field.id)}
                />
                <label
                  htmlFor={`field-${field.id}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {field.name}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Degree Levels */}
        <div>
          <h3 className="font-medium mb-3">مقطع تحصیلی</h3>
          <div className="space-y-2">
            {degrees.map((degree) => (
              <div key={degree.id} className="flex items-center space-x-2 space-x-reverse">
                <Checkbox
                  id={`degree-${degree.id}`}
                  checked={selectedDegrees.includes(degree.id)}
                  onCheckedChange={() => toggleDegree(degree.id)}
                />
                <label
                  htmlFor={`degree-${degree.id}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {degree.name}
                </label>
              </div>
            ))}
          </div>
        </div>

        <Button className="w-full bg-[#02153D] hover:bg-[#02153D]/90">اعمال فیلترها</Button>
      </CardContent>
    </Card>
  )
}
