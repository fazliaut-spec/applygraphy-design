"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"

export function UniversitySearch() {
  const [searchQuery, setSearchQuery] = useState("")
  const [country, setCountry] = useState("")
  const [degreeLevel, setDegreeLevel] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Search:", { searchQuery, country, degreeLevel })
    // Implement search functionality
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
      <form onSubmit={handleSearch} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="نام دانشگاه یا رشته تحصیلی"
              className="pl-10 text-right"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>

          <Select value={country} onValueChange={setCountry}>
            <SelectTrigger>
              <SelectValue placeholder="انتخاب کشور" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="us">ایالات متحده</SelectItem>
              <SelectItem value="uk">انگلستان</SelectItem>
              <SelectItem value="ca">کانادا</SelectItem>
              <SelectItem value="au">استرالیا</SelectItem>
              <SelectItem value="de">آلمان</SelectItem>
              <SelectItem value="it">ایتالیا</SelectItem>
              <SelectItem value="fr">فرانسه</SelectItem>
              <SelectItem value="nl">هلند</SelectItem>
              <SelectItem value="se">سوئد</SelectItem>
              <SelectItem value="ch">سوئیس</SelectItem>
            </SelectContent>
          </Select>

          <Select value={degreeLevel} onValueChange={setDegreeLevel}>
            <SelectTrigger>
              <SelectValue placeholder="مقطع تحصیلی" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bachelor">کارشناسی</SelectItem>
              <SelectItem value="master">کارشناسی ارشد</SelectItem>
              <SelectItem value="phd">دکترا</SelectItem>
              <SelectItem value="postdoc">پسادکترا</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button type="submit" className="w-full bg-[#FF6A5C] hover:bg-[#FF6A5C]/90 text-white">
          جستجو
        </Button>
      </form>
    </div>
  )
}
