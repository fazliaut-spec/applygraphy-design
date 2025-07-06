"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Search, Filter, MapPin, DollarSign, GraduationCap, Star, Users, Globe, Calendar } from "lucide-react"
import { universityService, type University, type UniversitySearchFilters } from "@/lib/universities/api"
import { aiMatchingService, type MatchResult } from "@/lib/ai/matching"
import { useAuth } from "@/lib/auth/auth-provider"

export function SmartUniversitySearch() {
  const { user } = useAuth()
  const [universities, setUniversities] = useState<University[]>([])
  const [matches, setMatches] = useState<MatchResult[]>([])
  const [loading, setLoading] = useState(false)
  const [showFilters, setShowFilters] = useState(false)
  const [countries, setCountries] = useState<string[]>([])

  const [filters, setFilters] = useState<UniversitySearchFilters>({
    name: "",
    country: "all", // Updated default value to be a non-empty string
    tuition_min: 0,
    tuition_max: 100000,
    type: undefined,
    language: "",
    field_of_study: "",
    ranking_max: 1000,
  })

  useEffect(() => {
    loadCountries()
  }, [])

  const loadCountries = async () => {
    const countryList = await universityService.getCountries()
    setCountries(countryList)
  }

  const handleSearch = async () => {
    setLoading(true)
    try {
      const results = await universityService.searchUniversities(filters)
      setUniversities(results)

      // If user is logged in, generate AI matches
      if (user?.profile) {
        const aiMatches = await aiMatchingService.generateMatches(user.profile, results, 10)
        setMatches(aiMatches)
      }
    } catch (error) {
      console.error("Search failed:", error)
    } finally {
      setLoading(false)
    }
  }

  const resetFilters = () => {
    setFilters({
      name: "",
      country: "all", // Updated default value to be a non-empty string
      tuition_min: 0,
      tuition_max: 100000,
      type: undefined,
      language: "",
      field_of_study: "",
      ranking_max: 1000,
    })
  }

  return (
    <div className="space-y-6">
      {/* Search Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-[#02153D]">جستجوی هوشمند دانشگاه</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          با استفاده از هوش مصنوعی، بهترین دانشگاه‌های متناسب با پروفایل شما را پیدا کنید
        </p>
      </div>

      {/* Search Bar */}
      <Card>
        <CardContent className="p-6">
          <div className="flex gap-4 items-end">
            <div className="flex-1">
              <Label htmlFor="search">نام دانشگاه یا رشته</Label>
              <div className="relative">
                <Input
                  id="search"
                  value={filters.name}
                  onChange={(e) => setFilters({ ...filters, name: e.target.value })}
                  placeholder="مثال: MIT، Harvard، Computer Science"
                  className="pl-10 text-right"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>
            <Button onClick={() => setShowFilters(!showFilters)} variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              فیلترها
            </Button>
            <Button onClick={handleSearch} disabled={loading} className="bg-[#FF6A5C] hover:bg-[#FF6A5C]/90">
              {loading ? "در حال جستجو..." : "جستجو"}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Advanced Filters */}
      {showFilters && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              فیلترهای پیشرفته
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label>کشور</Label>
                <Select value={filters.country} onValueChange={(value) => setFilters({ ...filters, country: value })}>
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
                <Label>نوع دانشگاه</Label>
                <Select
                  value={filters.type || ""}
                  onValueChange={(value: any) => setFilters({ ...filters, type: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="انتخاب نوع" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">همه</SelectItem>
                    <SelectItem value="public">دولتی</SelectItem>
                    <SelectItem value="private">خصوصی</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>زبان آموزش</Label>
                <Select value={filters.language} onValueChange={(value) => setFilters({ ...filters, language: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="انتخاب زبان" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">همه زبان‌ها</SelectItem>
                    <SelectItem value="English">انگلیسی</SelectItem>
                    <SelectItem value="German">آلمانی</SelectItem>
                    <SelectItem value="French">فرانسوی</SelectItem>
                    <SelectItem value="Italian">ایتالیایی</SelectItem>
                    <SelectItem value="Spanish">اسپانیایی</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <Label>بازه شهریه (دلار آمریکا)</Label>
                <div className="px-3 py-2">
                  <Slider
                    value={[filters.tuition_min || 0, filters.tuition_max || 100000]}
                    onValueChange={([min, max]) => setFilters({ ...filters, tuition_min: min, tuition_max: max })}
                    max={100000}
                    step={1000}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>${filters.tuition_min?.toLocaleString()}</span>
                    <span>${filters.tuition_max?.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div>
                <Label>حداکثر رتبه جهانی</Label>
                <div className="px-3 py-2">
                  <Slider
                    value={[filters.ranking_max || 1000]}
                    onValueChange={([max]) => setFilters({ ...filters, ranking_max: max })}
                    max={1000}
                    step={10}
                    className="w-full"
                  />
                  <div className="text-sm text-gray-500 mt-1">رتبه #{filters.ranking_max} یا بهتر</div>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <Button onClick={resetFilters} variant="outline">
                پاک کردن فیلترها
              </Button>
              <Button onClick={handleSearch} className="bg-[#FF6A5C] hover:bg-[#FF6A5C]/90">
                اعمال فیلترها
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* AI Matches Section */}
      {matches.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-[#02153D] flex items-center gap-2">
            <Star className="h-6 w-6 text-yellow-500" />
            پیشنهادات هوش مصنوعی برای شما
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {matches.slice(0, 6).map((match) => (
              <Card key={match.university.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{match.university.name}</CardTitle>
                      <CardDescription className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {match.university.country}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      {match.score}% تطبیق
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4 text-gray-500" />
                      <span>${match.university.tuition_fee_min?.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GraduationCap className="h-4 w-4 text-gray-500" />
                      <span>#{match.university.ranking}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4 text-gray-500" />
                      <span>{match.university.acceptance_rate}% پذیرش</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Globe className="h-4 w-4 text-gray-500" />
                      <span>{match.university.language_of_instruction[0]}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-sm mb-2">دلیل پیشنهاد:</h4>
                    <p className="text-sm text-gray-600">{match.reasoning}</p>
                  </div>

                  <div>
                    <h4 className="font-medium text-sm mb-2">نقاط قوت:</h4>
                    <div className="flex flex-wrap gap-1">
                      {match.strengths.slice(0, 2).map((strength, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {strength}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-transparent" variant="outline">
                    مشاهده جزئیات
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Regular Search Results */}
      {universities.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-[#02153D]">نتایج جستجو ({universities.length} دانشگاه)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {universities.map((university) => (
              <Card key={university.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{university.name}</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {university.country}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4 text-gray-500" />
                      <span>${university.tuition_fee_min?.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GraduationCap className="h-4 w-4 text-gray-500" />
                      <span>#{university.ranking}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4 text-gray-500" />
                      <span>{university.acceptance_rate}% پذیرش</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span>{university.application_deadline}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-sm mb-2">رشته‌های ارائه شده:</h4>
                    <div className="flex flex-wrap gap-1">
                      {university.programs.slice(0, 3).map((program, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
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

                  <Button className="w-full bg-transparent" variant="outline">
                    مشاهده جزئیات
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* No Results */}
      {!loading && universities.length === 0 && (
        <Card>
          <CardContent className="text-center py-12">
            <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">نتیجه‌ای یافت نشد</h3>
            <p className="text-gray-600 mb-4">لطفاً کلمات کلیدی یا فیلترهای خود را تغییر دهید</p>
            <Button onClick={resetFilters} variant="outline">
              پاک کردن فیلترها
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
