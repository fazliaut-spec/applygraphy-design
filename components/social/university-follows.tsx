"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, MapPin, Star, Users, MessageCircle, ExternalLink, Filter } from "lucide-react"
import Image from "next/image"

interface University {
  id: string
  name: string
  country: string
  city: string
  logo: string
  coverImage: string
  ranking: number
  language: string
  followers: number
  programs: number
  isFollowing: boolean
  rating: number
  reviews: number
  applicationFee: number
}

const mockUniversities: University[] = [
  {
    id: "1",
    name: "دانشگاه تورنتو",
    country: "کانادا",
    city: "تورنتو",
    logo: "/placeholder.svg?height=80&width=80",
    coverImage: "/placeholder.svg?height=200&width=400",
    ranking: 25,
    language: "انگلیسی",
    followers: 1234,
    programs: 180,
    isFollowing: true,
    rating: 4.8,
    reviews: 156,
    applicationFee: 50,
  },
  {
    id: "2",
    name: "دانشگاه آکسفورد",
    country: "انگلستان",
    city: "آکسفورد",
    logo: "/placeholder.svg?height=80&width=80",
    coverImage: "/placeholder.svg?height=200&width=400",
    ranking: 4,
    language: "انگلیسی",
    followers: 2156,
    programs: 200,
    isFollowing: false,
    rating: 4.9,
    reviews: 234,
    applicationFee: 50,
  },
  {
    id: "3",
    name: "دانشگاه فنی میونیخ",
    country: "آلمان",
    city: "میونیخ",
    logo: "/placeholder.svg?height=80&width=80",
    coverImage: "/placeholder.svg?height=200&width=400",
    ranking: 50,
    language: "آلمانی/انگلیسی",
    followers: 987,
    programs: 150,
    isFollowing: true,
    rating: 4.7,
    reviews: 89,
    applicationFee: 50,
  },
]

export function UniversityFollows() {
  const [universities, setUniversities] = useState(mockUniversities)
  const [searchTerm, setSearchTerm] = useState("")

  const handleFollow = (universityId: string) => {
    setUniversities(
      universities.map((uni) =>
        uni.id === universityId
          ? {
              ...uni,
              isFollowing: !uni.isFollowing,
              followers: uni.isFollowing ? uni.followers - 1 : uni.followers + 1,
            }
          : uni,
      ),
    )
  }

  const filteredUniversities = universities.filter(
    (uni) =>
      uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      uni.country.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      {/* Search and Filter */}
      <Card className="bg-white shadow-lg border-0">
        <CardContent className="p-6">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="جستجوی دانشگاه یا کشور..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pr-10 text-right"
              />
            </div>
            <Button variant="outline">
              <Filter className="w-4 h-4 ml-2" />
              فیلتر
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Universities Grid */}
      <div className="grid gap-6">
        {filteredUniversities.map((university) => (
          <Card
            key={university.id}
            className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            {/* Cover Image */}
            <div className="relative h-48">
              <Image
                src={university.coverImage || "/placeholder.svg"}
                alt={university.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute top-4 right-4">
                <Badge className="bg-white/90 text-gray-800">رتبه جهانی: {university.ranking}</Badge>
              </div>
            </div>

            <CardContent className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <Avatar className="w-16 h-16 border-4 border-white shadow-lg">
                  <AvatarImage src={university.logo || "/placeholder.svg"} alt={university.name} />
                  <AvatarFallback>{university.name.charAt(0)}</AvatarFallback>
                </Avatar>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{university.name}</h3>
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>
                      {university.city}, {university.country}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span>
                        {university.rating} ({university.reviews} نظر)
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{university.followers.toLocaleString("fa-IR")} دنبال‌کننده</span>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={() => handleFollow(university.id)}
                  variant={university.isFollowing ? "outline" : "default"}
                  className={
                    university.isFollowing
                      ? ""
                      : "bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600"
                  }
                >
                  {university.isFollowing ? "دنبال‌شده" : "دنبال کردن"}
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div>
                  <span className="text-gray-600">زبان تدریس:</span>
                  <span className="font-medium mr-2">{university.language}</span>
                </div>
                <div>
                  <span className="text-gray-600">تعداد برنامه‌ها:</span>
                  <span className="font-medium mr-2">{university.programs}</span>
                </div>
              </div>

              <div className="flex gap-3">
                <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white" size="lg">
                  🟩 درخواست اینجا - فقط €{university.applicationFee}
                </Button>
                <Button variant="outline" size="lg">
                  <MessageCircle className="w-4 h-4 ml-2" />
                  نظرات
                </Button>
                <Button variant="outline" size="lg">
                  <ExternalLink className="w-4 h-4 ml-2" />
                  وب‌سایت
                </Button>
              </div>

              {/* Application Options */}
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">گزینه‌های درخواست:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span>درخواست مستقیم از طریق پلتفرم</span>
                    <Badge variant="outline">€{university.applicationFee}</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>انتخاب کمک‌کننده تأیید شده</span>
                    <Badge variant="outline">€25 کمک‌کننده + €25 پلتفرم</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>کمک‌کننده داوطلب</span>
                    <Badge variant="outline" className="text-green-600">
                      رایگان
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
