"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const recentUsers = [
  {
    id: 1,
    name: "علی احمدی",
    email: "ali@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
    status: "active",
    joinedAt: "2 ساعت پیش",
  },
  {
    id: 2,
    name: "فاطمه محمدی",
    email: "fateme@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
    status: "pending",
    joinedAt: "5 ساعت پیش",
  },
  {
    id: 3,
    name: "حسن رضایی",
    email: "hassan@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
    status: "active",
    joinedAt: "1 روز پیش",
  },
  {
    id: 4,
    name: "مریم کریمی",
    email: "maryam@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
    status: "inactive",
    joinedAt: "2 روز پیش",
  },
  {
    id: 5,
    name: "محمد صادقی",
    email: "mohammad@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
    status: "active",
    joinedAt: "3 روز پیش",
  },
]

export function RecentUsers() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>کاربران جدید</CardTitle>
        <CardDescription>آخرین کاربران ثبت نام شده</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentUsers.map((user) => (
            <div key={user.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-4 space-x-reverse">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{user.name}</p>
                  <p className="text-xs text-muted-foreground">{user.email}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <Badge
                  variant={
                    user.status === "active" ? "default" : user.status === "pending" ? "secondary" : "destructive"
                  }
                >
                  {user.status === "active" ? "فعال" : user.status === "pending" ? "در انتظار" : "غیرفعال"}
                </Badge>
                <span className="text-xs text-muted-foreground">{user.joinedAt}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
