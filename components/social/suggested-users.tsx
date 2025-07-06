"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Users, MessageCircle, Award } from "lucide-react"

interface SuggestedUser {
  id: string
  name: string
  avatar: string
  university: string
  field: string
  rank: string
  followers: number
  isHelper: boolean
  isVerified: boolean
  commonInterests: string[]
}

const mockSuggestedUsers: SuggestedUser[] = [
  {
    id: "1",
    name: "احمد محمدی",
    avatar: "/placeholder.svg?height=40&width=40",
    university: "دانشگاه MIT",
    field: "مهندسی کامپیوتر",
    rank: "مشاور تأیید شده",
    followers: 234,
    isHelper: true,
    isVerified: true,
    commonInterests: ["مهندسی", "آمریکا"],
  },
  {
    id: "2",
    name: "فاطمه کریمی",
    avatar: "/placeholder.svg?height=40&width=40",
    university: "دانشگاه آکسفورد",
    field: "اقتصاد",
    rank: "دانشجوی دکترا",
    followers: 156,
    isHelper: false,
    isVerified: false,
    commonInterests: ["انگلستان", "اقتصاد"],
  },
  {
    id: "3",
    name: "علی رضایی",
    avatar: "/placeholder.svg?height=40&width=40",
    university: "دانشگاه تورنتو",
    field: "پزشکی",
    rank: "کمک‌کننده داوطلب",
    followers: 89,
    isHelper: true,
    isVerified: false,
    commonInterests: ["کانادا", "پزشکی"],
  },
]

export function SuggestedUsers() {
  const [users, setUsers] = useState(mockSuggestedUsers)

  const handleFollow = (userId: string) => {
    setUsers(users.map((user) => (user.id === userId ? { ...user, followers: user.followers + 1 } : user)))
  }

  return (
    <Card className="bg-white shadow-lg border-0">
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <Users className="w-5 h-5" />
          پیشنهاد دنبال کردن
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {users.map((user) => (
          <div key={user.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <Avatar className="w-12 h-12">
              <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
              <AvatarFallback className="bg-gradient-to-r from-blue-500 to-green-500 text-white">
                {user.name.charAt(0)}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h4 className="font-semibold text-gray-800 text-sm truncate">{user.name}</h4>
                {user.isVerified && (
                  <Badge variant="secondary" className="text-xs">
                    ✓
                  </Badge>
                )}
                {user.isHelper && <Award className="w-3 h-3 text-yellow-500" />}
              </div>

              <p className="text-xs text-gray-600 mb-1">{user.field}</p>
              <p className="text-xs text-blue-600 mb-2">{user.university}</p>

              <div className="flex flex-wrap gap-1 mb-2">
                {user.commonInterests.map((interest, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {interest}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">{user.followers} دنبال‌کننده</span>
                <div className="flex gap-1">
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-xs px-2 py-1 h-6"
                    onClick={() => handleFollow(user.id)}
                  >
                    دنبال کردن
                  </Button>
                  <Button size="sm" variant="ghost" className="text-xs px-2 py-1 h-6">
                    <MessageCircle className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}

        <Button variant="outline" className="w-full text-sm">
          مشاهده بیشتر
        </Button>
      </CardContent>
    </Card>
  )
}
