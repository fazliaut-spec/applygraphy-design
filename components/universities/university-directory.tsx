"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Search, MapPin, Calendar, GraduationCap, DollarSign, Globe } from "lucide-react"

interface University {
  id: string
  name: string
  country: string
  city: string
  ranking: number
  tuitionFee: string
  deadline: Date
  programs: string[]
  requirements: {
    gpa: string
    ielts: string
    toefl: string
  }
  scholarships: boolean
  website: string
}

export function UniversityDirectory() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCountry, setSelectedCountry] = useState("")
  const [selectedProgram, setSelectedProgram] = useState("")

  // Mock university data (excluding African universities)
  const universities: University[] = [
    {
      id: "1",
      name: "دانشگاه تورنتو",
      country: "کانادا",
      city: "تورنتو",
      ranking: 25,
      tuitionFee: "$58,160 CAD",
      deadline: new Date("2024-12-01"),
      programs: ["مهندسی کامپیوتر", "پزشکی", "کسب و کار", "علوم"],
      requirements: { gpa: "3.7", ielts: "7.0", toefl: "100" },
      scholarships: true,
      website: "https://www.utoronto.ca",
    },
    {
      id: "2",
      name: "دانشگاه آکسفورد",
      country: "انگلستان",
      city: "آکسفورد",
      ranking: 4,
      tuitionFee: "£37,510 GBP",
      deadline: new Date("2024-10-15"),
      programs: ["حقوق", "پزشکی", "مهندسی", "علوم انسانی"],
      requirements: { gpa: "3.9", ielts: "7.5", toefl: "110" },
      scholarships: true,
      website: "https://www.ox.ac.uk",
    },
    {
      id: "3",
      name: "دانشگاه فنی میونیخ",
      country: "آلمان",
      city: "میونیخ",
      ranking: 50,
      tuitionFee: "€3,000 EUR",
      deadline: new Date("2024-07-15"),
      programs: ["مهندسی", "علوم کامپیوتر", "فیزیک", "ریاضی"],
      requirements: { gpa: "3.5", ielts: "6.5", toefl: "88" },
      scholarships: true,
      website: "https://www.tum.de",
    },
    {
      id: "4",
      name: "دانشگاه ملبورن",
      country: "استرالیا",
      city: "ملبورن",
      ranking: 33,
      tuitionFee: "$45,824 AUD",
      deadline: new Date("2024-11-30"),
      programs: ["پزشکی", "مهندسی", "کسب و کار", "هنر"],
      requirements: { gpa: "3.6", ielts: "6.5", toefl: "79" },
      scholarships: true,
      website: "https://www.unimelb.edu.au",
    },
    {
      id: "5",
      name: "دانشگاه سوربن",
      country: "فرانسه",
      city: "پاریس",
      ranking: 72,
      tuitionFee: "€2,770 EUR",
      deadline: new Date("2024-06-30"),
      programs: ["علوم انسانی", "حقوق", "پزشکی", "علوم"],
      requirements: { gpa: "3.4", ielts: "6.0", toefl: "80" },
      scholarships: true,
      website: "https://www.sorbonne-universite.fr",
    },
    {
      id: "6",
      name: "دانشگاه آمستردام",
      country: "هلند",
      city: "آمستردام",
      ranking: 58,
      tuitionFee: "€2,168 EUR",
      deadline: new Date("2024-05-01"),
      programs: ["کسب و کار", "علوم اجتماعی", "مهندسی", "هنر"],
      requirements: { gpa: "3.3", ielts: "6.5", toefl: "92" },
      scholarships: true,
      website: "https://www.uva.nl",
    },
  ]

  // Filter universities with open deadlines
  const openUniversities = universities.filter((uni) => uni.deadline > new Date())

  const countries = [...new Set(openUniversities.map((uni) => uni.country))]
  const programs = [...new Set(openUniversities.flatMap((uni) => uni.programs))]

  const filteredUniversities = useMemo(() => {
    return openUniversities.filter((uni) => {
      const matchesSearch =
        uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        uni.city.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCountry = !selectedCountry || uni.country === selectedCountry
      const matchesProgram = !selectedProgram || uni.programs.includes(selectedProgram)

      return matchesSearch && matchesCountry && matchesProgram
    })
  }, [searchTerm, selectedCountry, selectedProgram, openUniversities])

  const isDeadlineSoon = (deadline: Date) => {
    const today = new Date()
    const diffTime = deadline.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays <= 30
  }

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            جستجو و فیلتر دانشگاه‌ها
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Input
                placeholder="جستجو دانشگاه یا شهر..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="text-right"
              />
            </div>
            <div>
              <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                <SelectTrigger>
                  <SelectValue placeholder="انتخاب کشور" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">همه کشورها</SelectItem>
                  {countries.map((country) => (
                    <SelectItem key={country} value={country}>
                      {country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select value={selectedProgram} onValueChange={setSelectedProgram}>
                <SelectTrigger>
                  <SelectValue placeholder="انتخاب رشته" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">همه رشته‌ها</SelectItem>
                  {programs.map((program) => (
                    <SelectItem key={program} value={program}>
                      {program}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results Summary */}
      <div className="flex items-center justify-between">
        <p className="text-gray-600">{filteredUniversities.length} دانشگاه با ددلاین باز یافت شد</p>
        <Badge variant="secondary">فقط دانشگاه‌های با ددلاین باز</Badge>
      </div>

      {/* University Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredUniversities.map((university) => (
          <Card key={university.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg text-[#02153D]">{university.name}</CardTitle>
                  <div className="flex items-center gap-2 text-gray-600 mt-1">
                    <MapPin className="h-4 w-4" />
                    <span>
                      {university.city}, {university.country}
                    </span>
                  </div>
                </div>
                <div className="text-left">
                  <Badge variant="outline" className="mb-2">
                    رتبه جهانی: {university.ranking}
                  </Badge>
                  {isDeadlineSoon(university.deadline) && (
                    <Badge variant="destructive" className="block">
                      ددلاین نزدیک!
                    </Badge>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Deadline */}
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-[#FF6A5C]" />
                <span className="font-medium">ددلاین:</span>
                <span>{university.deadline.toLocaleDateString("fa-IR")}</span>
              </div>

              {/* Tuition Fee */}
              <div className="flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-[#FF6A5C]" />
                <span className="font-medium">شهریه:</span>
                <span>{university.tuitionFee}</span>
                {university.scholarships && (
                  <Badge variant="secondary" className="mr-2">
                    بورسیه موجود
                  </Badge>
                )}
              </div>

              {/* Programs */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap className="h-4 w-4 text-[#FF6A5C]" />
                  <span className="font-medium">رشته‌های موجود:</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {university.programs.slice(0, 3).map((program) => (
                    <Badge key={program} variant="outline" className="text-xs">
                      {program}
                    </Badge>
                  ))}
                  {university.programs.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{university.programs.length - 3} بیشتر
                    </Badge>
                  )}
                </div>
              </div>

              {/* Requirements */}
              <div className="bg-gray-50 p-3 rounded-lg">
                <h4 className="font-medium mb-2">شرایط پذیرش:</h4>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div>GPA: {university.requirements.gpa}</div>
                  <div>IELTS: {university.requirements.ielts}</div>
                  <div>TOEFL: {university.requirements.toefl}</div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <Button asChild variant="outline" size="sm" className="flex-1">
                  <a href={university.website} target="_blank" rel="noopener noreferrer">
                    <Globe className="h-4 w-4 ml-1" />
                    وب‌سایت
                  </a>
                </Button>
                <Button size="sm" className="flex-1 bg-[#FF6A5C] hover:bg-[#FF6A5C]/90">
                  درخواست مشاوره
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredUniversities.length === 0 && (
        <Card>
          <CardContent className="p-8 text-center">
            <Search className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">دانشگاهی یافت نشد</h3>
            <p className="text-gray-600">لطفاً فیلترهای خود را تغییر دهید</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
