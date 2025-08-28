"use client"

import { useState, useEffect, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Loader2, Search, MapPin, GraduationCap, DollarSign, Calendar, Filter } from "lucide-react"
import {
  searchUniversities,
  getAllCountries,
  getUniversityDetails,
  type UniversityDetails,
} from "@/lib/universities/api"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"

interface SearchFilters {
  query: string
  country: string
  degreeLevel: string
  tuitionRange: string
  ranking: string
}

export function EnhancedUniversitySearch() {
  const [filters, setFilters] = useState<SearchFilters>({
    query: "",
    country: "all", // Updated default value to "all"
    degreeLevel: "all", // Updated default value to "all"
    tuitionRange: "all", // Updated default value to "all"
    ranking: "all", // Updated default value to "all"
  })

  const [universities, setUniversities] = useState<UniversityDetails[]>([])
  const [countries, setCountries] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [searchPerformed, setSearchPerformed] = useState(false)
  const { toast } = useToast()

  // Load countries on component mount
  useEffect(() => {
    const loadCountries = async () => {
      try {
        const countryList = await getAllCountries()
        setCountries(countryList)
      } catch (error) {
        console.error("Error loading countries:", error)
      }
    }
    loadCountries()
  }, [])

  // Enhanced search function
  const handleSearch = async () => {
    if (!filters.query.trim() && filters.country === "all") {
      toast({
        title: "خطا",
        description: "لطفاً نام دانشگاه یا کشور را وارد کنید",
        variant: "destructive",
      })
      return
    }

    setLoading(true)
    setSearchPerformed(true)

    try {
      const rawUniversities = await searchUniversities(filters.query, filters.country)

      // Enhance university data with additional details
      const enhancedUniversities = await Promise.all(
        rawUniversities.slice(0, 20).map(async (uni) => {
          const details = await getUniversityDetails(uni.name)
          return (
            details || {
              id: uni.name.toLowerCase().replace(/\s+/g, "-"),
              name: uni.name,
              country: uni.country,
              city: uni.state_province || "Unknown",
              ranking: Math.floor(Math.random() * 500) + 50,
              tuition: 15000,
              currency: "USD",
              programs: 150,
              deadline: "۱۵ دی ۱۴۰۳",
              image: `/placeholder.svg?height=160&width=320&text=${encodeURIComponent(uni.name)}`,
              logo: `/placeholder.svg?height=48&width=48&text=${encodeURIComponent(uni.name.charAt(0))}`,
              featured: false,
              description: `${uni.name} یکی از دانشگاه‌های معتبر ${uni.country} است.`,
              requirements: ["مدرک تحصیلی معتبر", "گواهی زبان انگلیسی"],
              scholarships: Math.random() > 0.5,
            }
          )
        }),
      )

      setUniversities(enhancedUniversities)

      toast({
        title: "جستجو انجام شد",
        description: `${enhancedUniversities.length} دانشگاه یافت شد`,
      })
    } catch (error) {
      console.error("Search error:", error)
      toast({
        title: "خطا در جستجو",
        description: "لطفاً دوباره تلاش کنید",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  // Filter universities based on additional criteria
  const filteredUniversities = useMemo(() => {
    return universities.filter((uni) => {
      // Degree level filter (placeholder - would need real data)
      if (filters.degreeLevel && filters.degreeLevel !== "all") {
        // This would filter based on available degree levels
      }

      // Tuition range filter
      if (filters.tuitionRange && filters.tuitionRange !== "all") {
        const [min, max] = filters.tuitionRange.split("-").map(Number)
        if (uni.tuition && (uni.tuition < min || uni.tuition > max)) {
          return false
        }
      }

      // Ranking filter
      if (filters.ranking && filters.ranking !== "all") {
        const maxRanking = Number.parseInt(filters.ranking)
        if (uni.ranking && uni.ranking > maxRanking) {
          return false
        }
      }

      return true
    })
  }, [universities, filters])

  const countryOptions = [
    { value: "United States", label: "ایالات متحده" },
    { value: "United Kingdom", label: "انگلستان" },
    { value: "Canada", label: "کانادا" },
    { value: "Australia", label: "استرالیا" },
    { value: "Germany", label: "آلمان" },
    { value: "France", label: "فرانسه" },
    { value: "Netherlands", label: "هلند" },
    { value: "Sweden", label: "سوئد" },
    { value: "Norway", label: "نروژ" },
    { value: "Denmark", label: "دانمارک" },
    { value: "Finland", label: "فنلاند" },
    { value: "Switzerland", label: "سوئیس" },
    { value: "Austria", label: "اتریش" },
    { value: "Italy", label: "ایتالیا" },
    { value: "Spain", label: "اسپانیا" },
    { value: "Belgium", label: "بلژیک" },
    { value: "Ireland", label: "ایرلند" },
    { value: "New Zealand", label: "نیوزیلند" },
    { value: "Japan", label: "ژاپن" },
    { value: "South Korea", label: "کره جنوبی" },
  ]

  return (
    <div className="space-y-6">
      {/* Enhanced Search Form */}
      <Card className="p-6">
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="relative">
              <Input
                value={filters.query}
                onChange={(e) => setFilters((prev) => ({ ...prev, query: e.target.value }))}
                placeholder="نام دانشگاه یا رشته تحصیلی"
                className="pl-10 text-right"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>

            <Select
              value={filters.country}
              onValueChange={(value) => setFilters((prev) => ({ ...prev, country: value }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="انتخاب کشور" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">همه کشورها</SelectItem>
                {countryOptions.map((country) => (
                  <SelectItem key={country.value} value={country.value}>
                    {country.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={filters.degreeLevel}
              onValueChange={(value) => setFilters((prev) => ({ ...prev, degreeLevel: value }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="مقطع تحصیلی" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">همه مقاطع</SelectItem>
                <SelectItem value="bachelor">کارشناسی</SelectItem>
                <SelectItem value="master">کارشناسی ارشد</SelectItem>
                <SelectItem value="phd">دکترا</SelectItem>
                <SelectItem value="postdoc">پسادکترا</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Select
              value={filters.tuitionRange}
              onValueChange={(value) => setFilters((prev) => ({ ...prev, tuitionRange: value }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="محدوده شهریه (دلار)" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">همه محدوده‌ها</SelectItem>
                <SelectItem value="0-5000">رایگان تا ۵,۰۰۰</SelectItem>
                <SelectItem value="5000-15000">۵,۰۰۰ تا ۱۵,۰۰۰</SelectItem>
                <SelectItem value="15000-30000">۱۵,۰۰۰ تا ۳۰,۰۰۰</SelectItem>
                <SelectItem value="30000-50000">۳۰,۰۰۰ تا ۵۰,۰۰۰</SelectItem>
                <SelectItem value="50000-999999">بالای ۵۰,۰۰۰</SelectItem>
              </SelectContent>
            </Select>

            <Select
              value={filters.ranking}
              onValueChange={(value) => setFilters((prev) => ({ ...prev, ranking: value }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="رتبه‌بندی جهانی" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">همه رتبه‌ها</SelectItem>
                <SelectItem value="50">۵۰ برتر جهان</SelectItem>
                <SelectItem value="100">۱۰۰ برتر جهان</SelectItem>
                <SelectItem value="200">۲۰۰ برتر جهان</SelectItem>
                <SelectItem value="500">۵۰۰ برتر جهان</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            onClick={handleSearch}
            disabled={loading}
            className="w-full bg-[#FF6A5C] hover:bg-[#FF6A5C]/90 text-white"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                در حال جستجو...
              </>
            ) : (
              <>
                <Search className="mr-2 h-4 w-4" />
                جستجو
              </>
            )}
          </Button>
        </div>
      </Card>

      {/* Results */}
      {searchPerformed && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">نتایج جستجو ({filteredUniversities.length} دانشگاه)</h3>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Filter className="h-4 w-4" />
              فیلتر شده از {universities.length} دانشگاه
            </div>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="animate-pulse">
                  <div className="h-40 bg-gray-200" />
                  <CardContent className="p-6 space-y-3">
                    <div className="h-4 bg-gray-200 rounded w-3/4" />
                    <div className="h-3 bg-gray-200 rounded w-1/2" />
                    <div className="space-y-2">
                      <div className="h-3 bg-gray-200 rounded" />
                      <div className="h-3 bg-gray-200 rounded" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : filteredUniversities.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredUniversities.map((university) => (
                <Card key={university.id} className="hover:shadow-lg transition-all duration-300">
                  <div
                    className="h-40 bg-cover bg-center relative"
                    style={{ backgroundImage: `url(${university.image})` }}
                  >
                    <div className="absolute bottom-0 left-0 bg-[#02153D] text-white px-3 py-1 text-sm">
                      رتبه جهانی: {university.ranking}
                    </div>
                    {university.featured && (
                      <Badge className="absolute top-3 right-3 bg-[#FF6A5C] hover:bg-[#FF6A5C]">ویژه</Badge>
                    )}
                    {university.scholarships && (
                      <Badge className="absolute top-3 left-3 bg-green-600 hover:bg-green-600">بورسیه</Badge>
                    )}
                  </div>

                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-[#02153D] mb-1">{university.name}</h3>
                        <div className="flex items-center text-gray-600 text-sm">
                          <MapPin className="h-4 w-4 ml-1" />
                          {university.country}، {university.city}
                        </div>
                      </div>
                      <div className="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center">
                        <img
                          src={university.logo || "/placeholder.svg"}
                          alt={`لوگوی ${university.name}`}
                          className="max-h-10"
                        />
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-sm">
                        <GraduationCap className="h-4 w-4 ml-2 text-[#FF6A5C]" />
                        <span className="text-gray-700">{university.programs}+ برنامه تحصیلی</span>
                      </div>

                      {university.tuition && (
                        <div className="flex items-center text-sm">
                          <DollarSign className="h-4 w-4 ml-2 text-[#FF6A5C]" />
                          <span className="text-gray-700">
                            شهریه سالانه: {university.tuition.toLocaleString()} {university.currency}
                          </span>
                        </div>
                      )}

                      <div className="flex items-center text-sm">
                        <Calendar className="h-4 w-4 ml-2 text-[#FF6A5C]" />
                        <span className="text-gray-700">مهلت درخواست: {university.deadline}</span>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{university.description}</p>

                    <Button asChild className="w-full bg-[#02153D] hover:bg-[#02153D]/90 text-white">
                      <Link href={`/universities/${university.id}`}>مشاهده جزئیات</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="p-8 text-center">
              <div className="text-gray-500">
                <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <h3 className="text-lg font-medium mb-2">دانشگاهی یافت نشد</h3>
                <p className="text-sm">لطفاً فیلترهای جستجو را تغییر دهید یا کلمات کلیدی دیگری امتحان کنید</p>
              </div>
            </Card>
          )}
        </div>
      )}
    </div>
  )
}
