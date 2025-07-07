"use client"

import { useState, useEffect } from "react"
import { Search, MapPin, Users, Globe } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface University {
  name: string
  country: string
  alpha_two_code: string
  web_pages: string[]
  domains: string[]
  state_province?: string
}

export function SmartUniversitySearch() {
  const [universities, setUniversities] = useState<University[]>([])
  const [filteredUniversities, setFilteredUniversities] = useState<University[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCountry, setSelectedCountry] = useState<string>("all")
  const [loading, setLoading] = useState(false)
  const [countries, setCountries] = useState<string[]>([])

  // Fetch universities from free API
  useEffect(() => {
    const fetchUniversities = async () => {
      setLoading(true)
      try {
        // Using free Universities API
        const response = await fetch("http://universities.hipolabs.com/search?limit=500")
        const data = await response.json()
        setUniversities(data)
        setFilteredUniversities(data.slice(0, 20)) // Show first 20 initially

        // Extract unique countries
        const uniqueCountries = [...new Set(data.map((uni: University) => uni.country))].sort()
        setCountries(uniqueCountries)
      } catch (error) {
        console.error("Error fetching universities:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchUniversities()
  }, [])

  // Filter universities based on search and country
  useEffect(() => {
    let filtered = universities

    if (searchTerm) {
      filtered = filtered.filter(
        (uni) =>
          uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          uni.country.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    if (selectedCountry !== "all") {
      filtered = filtered.filter((uni) => uni.country === selectedCountry)
    }

    setFilteredUniversities(filtered.slice(0, 50)) // Limit to 50 results
  }, [searchTerm, selectedCountry, universities])

  return (
    <div className="space-y-6">
      {/* Search Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">جستجوی هوشمند دانشگاه‌ها</h1>
        <p className="text-muted-foreground">بیش از {universities.length} دانشگاه از سراسر جهان</p>
      </div>

      {/* Search Controls */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="نام دانشگاه یا کشور را جستجو کنید..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        <Select value={selectedCountry} onValueChange={setSelectedCountry}>
          <SelectTrigger className="w-full md:w-[200px]">
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

      {/* Loading State */}
      {loading && (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          <p className="mt-2 text-muted-foreground">در حال بارگذاری دانشگاه‌ها...</p>
        </div>
      )}

      {/* Results */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredUniversities.map((university, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg line-clamp-2">{university.name}</CardTitle>
              <CardDescription className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {university.country}
                {university.state_province && `, ${university.state_province}`}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-muted-foreground" />
                <Badge variant="secondary">{university.alpha_two_code}</Badge>
              </div>

              {university.web_pages.length > 0 && (
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-transparent"
                  onClick={() => window.open(university.web_pages[0], "_blank")}
                >
                  مشاهده وب‌سایت
                </Button>
              )}

              <div className="text-xs text-muted-foreground">دامنه: {university.domains[0]}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* No Results */}
      {!loading && filteredUniversities.length === 0 && (
        <div className="text-center py-8">
          <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">دانشگاهی یافت نشد</h3>
          <p className="text-muted-foreground">لطفاً کلمات کلیدی دیگری امتحان کنید</p>
        </div>
      )}

      {/* Results Count */}
      {!loading && filteredUniversities.length > 0 && (
        <div className="text-center text-sm text-muted-foreground">
          نمایش {filteredUniversities.length} دانشگاه از {universities.length} دانشگاه
        </div>
      )}
    </div>
  )
}

// Named export for the component

// Default export
export default SmartUniversitySearch
