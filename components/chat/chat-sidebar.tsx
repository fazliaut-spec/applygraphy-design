"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Search, Users, Video } from "lucide-react"

interface ChatUser {
  id: string
  name: string
  avatar: string
  lastMessage: string
  timestamp: string
  isOnline: boolean
  unreadCount: number
}

const mockChats: ChatUser[] = [
  {
    id: "1",
    name: "سارا احمدی",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "ممنون از راهنمایی‌تون!",
    timestamp: "۱۰ دقیقه پیش",
    isOnline: true,
    unreadCount: 2,
  },
  {
    id: "2",
    name: "علی رضایی",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "کی می‌تونیم صحبت کنیم؟",
    timestamp: "۳۰ دقیقه پیش",
    isOnline: false,
    unreadCount: 0,
  },
  {
    id: "3",
    name: "مریم کریمی",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "فایل رو فرستادم",
    timestamp: "۱ ساعت پیش",
    isOnline: true,
    unreadCount: 1,
  },
]

export function ChatSidebar() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTab, setActiveTab] = useState("chats")

  const filteredChats = mockChats.filter((chat) => chat.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className="space-y-6">
      {/* Chat Card */}
      <Card className="bg-white shadow-lg border-0">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <MessageCircle className="w-5 h-5" />
            پیام‌ها
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="جستجوی مکالمات..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pr-10 text-right text-sm"
            />
          </div>

          {/* Tabs */}
          <div className="flex gap-2">
            <Button
              variant={activeTab === "chats" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveTab("chats")}
              className="flex-1 text-xs"
            >
              چت‌ها
            </Button>
            <Button
              variant={activeTab === "online" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveTab("online")}
              className="flex-1 text-xs"
            >
              آنلاین
            </Button>
          </div>

          {/* Chat List */}
          <div className="space-y-2 max-h-80 overflow-y-auto">
            {filteredChats.map((chat) => (
              <div
                key={chat.id}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
              >
                <div className="relative">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={chat.avatar || "/placeholder.svg"} alt={chat.name} />
                    <AvatarFallback className="bg-gradient-to-r from-blue-500 to-green-500 text-white text-sm">
                      {chat.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  {chat.isOnline && (
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-gray-800 text-sm truncate">{chat.name}</h4>
                    {chat.unreadCount > 0 && (
                      <Badge
                        variant="destructive"
                        className="text-xs px-1.5 py-0.5 min-w-[18px] h-[18px] flex items-center justify-center"
                      >
                        {chat.unreadCount}
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs text-gray-600 truncate">{chat.lastMessage}</p>
                  <p className="text-xs text-gray-500">{chat.timestamp}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="flex gap-2 pt-2 border-t">
            <Button variant="outline" size="sm" className="flex-1 text-xs">
              <Users className="w-3 h-3 ml-1" />
              گروه جدید
            </Button>
            <Button variant="outline" size="sm" className="flex-1 text-xs">
              <Video className="w-3 h-3 ml-1" />
              تماس ویدیویی
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Online Friends */}
      <Card className="bg-white shadow-lg border-0">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Users className="w-5 h-5" />
            دوستان آنلاین
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {mockChats
              .filter((chat) => chat.isOnline)
              .map((friend) => (
                <div key={friend.id} className="flex flex-col items-center gap-1">
                  <div className="relative">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={friend.avatar || "/placeholder.svg"} alt={friend.name} />
                      <AvatarFallback className="bg-gradient-to-r from-blue-500 to-green-500 text-white text-xs">
                        {friend.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full border border-white"></div>
                  </div>
                  <span className="text-xs text-gray-600 truncate max-w-[60px]">{friend.name.split(" ")[0]}</span>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
