"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Search, MapPin, GraduationCap, Star, Filter } from "lucide-react"

const popularUniversities = [
  {
    name: "دانشگاه تورنتو",
    country: "کانادا",
    ranking: "#18 جهان",
    programs: "۷۰۰+ رشته",
    rating: 4.8,
    image: "/images/university-toronto.jpg",
  },
  {
    name: "دانشگاه آکسفورد",
    country: "انگلستان",
    ranking: "#2 جهان",
    programs: "۳۵۰+ رشته",
    rating: 4.9,
    image: "/images/university-oxford.jpg",
  },
  {
    name: "دانشگاه MIT",
    country: "آمریکا",
    ranking: "#1 جهان",
    programs: "۴۵۰+ رشته",
    rating: 4.9,
    image: "/images/university-mit.jpg",
  },
]

const countries = [
  { name: "کانادا", count: "۲۵۰+ دانشگاه", flag: "🇨🇦" },
  { name: "آمریکا", count: "۵۰۰+ دانشگاه", flag: "🇺🇸" },
  { name: "انگلستان", count: "۱۸۰+ دانشگاه", flag: "🇬🇧" },
  { name: "آلمان", count: "۳۰۰+ دانشگاه", flag: "🇩🇪" },
  { name: "استرالیا", count: "۱۲۰+ دانشگاه", flag: "🇦🇺" },
  { name: "هلند", count: "۸۰+ دانشگاه", flag: "🇳🇱" },
]

export function UniversitySearchSection() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#02153D] mb-4">جستجوی دانشگاه</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            در میان هزاران دانشگاه معتبر جهان، بهترین گزینه را برای خود پیدا کنید
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="نام دانشگاه، رشته یا کشور را جستجو کنید..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-12 h-14 text-lg border-2 border-gray-200 focus:border-[#FF6A5C]"
              />
              <Button className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#FF6A5C] hover:bg-[#FF6A5C]/90" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                فیلتر
              </Button>
            </div>
          </div>
        </div>

        {/* Countries */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#02153D] mb-8 text-center">کشورهای محبوب</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {countries.map((country, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{country.flag}</div>
                  <h4 className="font-bold text-[#02153D] mb-1">{country.name}</h4>
                  <p className="text-sm text-gray-600">{country.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Popular Universities */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-[#02153D] mb-8 text-center">دانشگاه‌های محبوب</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularUniversities.map((university, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-48">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-sm font-semibold text-[#02153D]">{university.ranking}</span>
                  </div>
                  <div className="absolute bottom-4 right-4 z-20 text-white">
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-semibold">{university.rating}</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-[#02153D] mb-2">{university.name}</h4>
                  <div className="flex items-center gap-2 text-gray-600 mb-3">
                    <MapPin className="h-4 w-4" />
                    <span>{university.country}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <GraduationCap className="h-4 w-4" />
                    <span>{university.programs}</span>
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-[#FF6A5C] text-[#FF6A5C] hover:bg-[#FF6A5C] hover:text-white bg-transparent"
                  >
                    <Link href={`/universities/${university.name.toLowerCase().replace(/\s+/g, "-")}`}>
                      مشاهده جزئیات
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild size="lg" className="bg-[#FF6A5C] hover:bg-[#FF6A5C]/90 text-white px-8">
            <Link href="/universities">
              مشاهده تمام دانشگاه‌ها
              <Search className="mr-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
