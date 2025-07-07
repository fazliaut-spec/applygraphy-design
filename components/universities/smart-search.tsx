"use client"

import { useState, useEffect, useMemo } from "react"
import { Search, MapPin, GraduationCap, ExternalLink } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { searchUniversities, getAllCountries, type University } from "@/lib/universities/api"

export function SmartUniversitySearch() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCountry, setSelectedCountry] = useState("all") // Updated default value to 'all'
  const [universities, setUniversities] = useState<University[]>([])
  const [countries, setCountries] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)

  // Load countries on component mount
  useEffect(() => {
    const loadCountries = async () => {
      const countryList = await getAllCountries()
      setCountries(countryList)
    }
    loadCountries()
  }, [])

  // Debounced search
  const debouncedSearch = useMemo(() => {
    const timeoutId = setTimeout(async () => {
      if (searchQuery.trim() || selectedCountry !== "all") {
        setLoading(true)
        try {
          const results = await searchUniversities(searchQuery, selectedCountry)
          setUniversities(results)
          setHasSearched(true)
        } catch (error) {
          console.error("Search failed:", error)
          setUniversities([])
        } finally {
          setLoading(false)
        }
      } else {
        setUniversities([])
        setHasSearched(false)
      }
    }, 500)

    return () => clearTimeout(timeoutId)
  }, [searchQuery, selectedCountry])

  useEffect(() => {
    return debouncedSearch
  }, [debouncedSearch])

  const handleSearch = async () => {
    if (!searchQuery.trim() && selectedCountry === "all") return

    setLoading(true)
    try {
      const results = await searchUniversities(searchQuery, selectedCountry)
      setUniversities(results)
      setHasSearched(true)
    } catch (error) {
      console.error("Search failed:", error)
      setUniversities([])
    } finally {
      setLoading(false)
    }
  }

  const clearSearch = () => {
    setSearchQuery("")
    setSelectedCountry("all") // Updated default value to 'all'
    setUniversities([])
    setHasSearched(false)
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-6 space-y-6">
      {/* Search Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">University Search</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Discover universities worldwide with our smart search
        </p>
      </div>

      {/* Search Controls */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search universities by name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
              />
            </div>

            <Select value={selectedCountry} onValueChange={setSelectedCountry}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Countries</SelectItem> {/* Updated value prop to 'all' */}
                {countries.map((country) => (
                  <SelectItem key={country} value={country}>
                    {country}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <div className="flex gap-2">
              <Button onClick={handleSearch} disabled={loading}>
                {loading ? "Searching..." : "Search"}
              </Button>
              <Button variant="outline" onClick={clearSearch}>
                Clear
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Search Results */}
      {loading && (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-2 text-gray-600">Searching universities...</p>
        </div>
      )}

      {hasSearched && !loading && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Search Results ({universities.length} found)</h2>
            {universities.length > 0 && <Badge variant="secondary">{universities.length} universities</Badge>}
          </div>

          {universities.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center">
                <GraduationCap className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No universities found</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Try adjusting your search criteria or browse by country
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {universities.map((university, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg leading-tight">{university.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <MapPin className="h-4 w-4 mr-2" />
                      {university.country}
                      {university.state_province && <span className="ml-1">• {university.state_province}</span>}
                    </div>

                    {university.web_pages && university.web_pages.length > 0 && (
                      <div className="space-y-2">
                        {university.web_pages.slice(0, 2).map((url, urlIndex) => (
                          <a
                            key={urlIndex}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                          >
                            <ExternalLink className="h-3 w-3 mr-2" />
                            Visit Website
                          </a>
                        ))}
                      </div>
                    )}

                    {university.domains && university.domains.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {university.domains.slice(0, 2).map((domain, domainIndex) => (
                          <Badge key={domainIndex} variant="outline" className="text-xs">
                            {domain}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      )}

      {!hasSearched && !loading && (
        <Card>
          <CardContent className="p-8 text-center">
            <GraduationCap className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">Start Your University Search</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Enter a university name or select a country to begin exploring educational opportunities worldwide
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {["United States", "United Kingdom", "Canada", "Australia", "Germany"].map((country) => (
                <Button key={country} variant="outline" size="sm" onClick={() => setSelectedCountry(country)}>
                  {country}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

export default SmartUniversitySearch
