"use client"

/**
 * SmartUniversitySearch – real-time university search using the free
 * https://universities.hipolabs.com/&nbsp;API.
 *
 * Named export is required by other modules 👉 we export BOTH the named and
 * default versions.
 */

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { MapPin, Search, Globe, ExternalLink } from "lucide-react"

type University = {
  name: string
  country: string
  state_province: string | null
  alpha_two_code: string
  domains: string[]
  web_pages: string[]
}

const POPULAR_COUNTRIES = ["United States", "United Kingdom", "Canada", "Germany", "Italy", "Australia", "Iran"]

async function fetchUniversities(name?: string, country?: string): Promise<University[]> {
  const params = new URLSearchParams()
  if (name) params.append("name", name)
  if (country) params.append("country", country)
  // Free public API → no key required.
  const res = await fetch(`https://universities.hipolabs.com/search?${params.toString()}`)
  if (!res.ok) throw new Error("Failed to fetch universities")
  return res.json()
}

export function SmartUniversitySearch() {
  const [name, setName] = useState("")
  const [country, setCountry] = useState("all")
  const [universities, setUniversities] = useState<University[]>([])
  const [loading, setLoading] = useState(false)
  const [searched, setSearched] = useState(false)

  const searchHandler = async () => {
    setLoading(true)
    setSearched(true)
    try {
      const result = await fetchUniversities(name || undefined, country === "all" ? undefined : country)
      setUniversities(result.slice(0, 30)) // limit to 30 for brevity
    } catch (e) {
      console.error(e)
      setUniversities([])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="w-5 h-5" />
            جستجوی هوشمند دانشگاه‌ها
          </CardTitle>
          <CardDescription>نام یا کشور دانشگاه را وارد کنید</CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input dir="rtl" placeholder="نام دانشگاه..." value={name} onChange={(e) => setName(e.target.value)} />

            <Select value={country} onValueChange={setCountry}>
              <SelectTrigger>
                <SelectValue placeholder="کشور را انتخاب کنید" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">همه کشورها</SelectItem>
                {POPULAR_COUNTRIES.map((c) => (
                  <SelectItem key={c} value={c}>
                    {c}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button disabled={loading} onClick={searchHandler} className="w-full">
            {loading ? "در حال جستجو..." : "جستجو"}
          </Button>
        </CardContent>
      </Card>

      {searched && (
        <>
          <h3 className="font-semibold">نتایج ({universities.length} دانشگاه)</h3>

          {universities.length === 0 ? (
            <p className="text-muted-foreground">هیچ دانشگاهی مطابق معیار شما یافت نشد.</p>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {universities.map((u) => (
                <Card key={`${u.name}-${u.country}`} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">{u.name}</CardTitle>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {u.country}
                      {u.state_province ? `, ${u.state_province}` : ""}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Badge variant="secondary" className="text-xs">
                      {u.alpha_two_code}
                    </Badge>

                    {u.web_pages?.[0] && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full bg-transparent"
                        onClick={() => window.open(u.web_pages[0], "_blank")}
                      >
                        <Globe className="w-4 h-4 mr-2" />
                        وب‌سایت
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  )
}

// default export keeps backward compatibility with existing imports
export default SmartUniversitySearch
