"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Globe, MessageCircle } from "lucide-react"

interface LanguagePartner {
  id: string
  name: string
  avatar: string
  nativeLanguage: string
  learningLanguage: string
  level: string
  country: string
  isOnline: boolean
}

const mockPartners: LanguagePartner[] = [
  {
    id: "1",
    name: "Emma Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    nativeLanguage: "انگلیسی",
    learningLanguage: "فارسی",
    level: "مبتدی",
    country: "کانادا",
    isOnline: true,
  },
  {
    id: "2",
    name: "Hans Mueller",
    avatar: "/placeholder.svg?height=40&width=40",
    nativeLanguage: "آلمانی",
    learningLanguage: "انگلیسی",
    level: "متوسط",
    country: "آلمان",
    isOnline: false,
  },
  {
    id: "3",
    name: "Marie Dubois",
    avatar: "/placeholder.svg?height=40&width=40",
    nativeLanguage: "فرانسوی",
    learningLanguage: "انگلیسی",
    level: "پیشرفته",
    country: "فرانسه",
    isOnline: true,
  },
]

export function LanguagePartners() {
  return (
    <Card className="bg-white shadow-lg border-0">
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <Globe className="w-5 h-5" />
          شریک زبان
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {mockPartners.map((partner) => (
          <div key={partner.id} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="relative">
              <Avatar className="w-10 h-10">
                <AvatarImage src={partner.avatar || "/placeholder.svg"} alt={partner.name} />
                <AvatarFallback className="bg-gradient-to-r from-blue-500 to-green-500 text-white text-sm">
                  {partner.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              {partner.isOnline && (
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              )}
            </div>

            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-gray-800 text-sm">{partner.name}</h4>
              <p className="text-xs text-gray-600">{partner.country}</p>
              <div className="flex items-center gap-2 mt-1">
                <Badge variant="outline" className="text-xs">
                  {partner.nativeLanguage} → {partner.learningLanguage}
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  {partner.level}
                </Badge>
              </div>
            </div>

            <Button size="sm" variant="outline" className="text-xs px-2 py-1">
              <MessageCircle className="w-3 h-3 ml-1" />
              چت
            </Button>
          </div>
        ))}

        <Button variant="outline" className="w-full text-sm">
          یافتن شریک جدید
        </Button>
      </CardContent>
    </Card>
  )
}
