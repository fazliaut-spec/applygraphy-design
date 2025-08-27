"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Eye, Edit, Ban, UserCheck } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface User {
  id: string
  name: string
  email: string
  phone: string
  role: "user" | "admin" | "consultant"
  status: "active" | "blocked" | "pending"
  joinDate: string
  lastLogin: string
  avatar?: string
}

interface UsersTableProps {
  filters: {
    role: string
    status: string
  }
}

export function UsersTable({ filters }: UsersTableProps) {
  const { toast } = useToast()
  const [users, setUsers] = useState<User[]>([
    {
      id: "1",
      name: "علی احمدی",
      email: "ali@example.com",
      phone: "09123456789",
      role: "user",
      status: "active",
      joinDate: "1402/01/15",
      lastLogin: "1402/08/20",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "2",
      name: "فاطمه کریمی",
      email: "fateme@example.com",
      phone: "09123456788",
      role: "user",
      status: "active",
      joinDate: "1402/02/10",
      lastLogin: "1402/08/19",
    },
    {
      id: "3",
      name: "محمد رضایی",
      email: "mohammad@example.com",
      phone: "09123456787",
      role: "consultant",
      status: "active",
      joinDate: "1401/12/05",
      lastLogin: "1402/08/20",
    },
    {
      id: "4",
      name: "سارا محمدی",
      email: "sara@example.com",
      phone: "09123456786",
      role: "user",
      status: "blocked",
      joinDate: "1402/03/20",
      lastLogin: "1402/07/15",
    },
    {
      id: "5",
      name: "حسین علوی",
      email: "hosein@example.com",
      phone: "09123456785",
      role: "admin",
      status: "active",
      joinDate: "1401/10/01",
      lastLogin: "1402/08/20",
    },
  ])

  const filteredUsers = users.filter((user) => {
    if (filters.role !== "all" && user.role !== filters.role) return false
    if (filters.status !== "all" && user.status !== filters.status) return false
    return true
  })

  const handleChangeRole = (userId: string, newRole: User["role"]) => {
    setUsers(users.map((user) => (user.id === userId ? { ...user, role: newRole } : user)))
    toast({
      title: "نقش کاربر تغییر یافت",
      description: "نقش کاربر با موفقیت تغییر یافت.",
    })
  }

  const handleChangeStatus = (userId: string, newStatus: User["status"]) => {
    setUsers(users.map((user) => (user.id === userId ? { ...user, status: newStatus } : user)))
    toast({
      title: "وضعیت کاربر تغییر یافت",
      description: "وضعیت کاربر با موفقیت تغییر یافت.",
    })
  }

  const getRoleBadge = (role: User["role"]) => {
    switch (role) {
      case "admin":
        return <Badge variant="destructive">مدیر</Badge>
      case "consultant":
        return <Badge variant="secondary">مشاور</Badge>
      case "user":
        return <Badge variant="outline">کاربر</Badge>
    }
  }

  const getStatusBadge = (status: User["status"]) => {
    switch (status) {
      case "active":
        return <Badge variant="default">فعال</Badge>
      case "blocked":
        return <Badge variant="destructive">مسدود</Badge>
      case "pending":
        return <Badge variant="secondary">در انتظار</Badge>
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>لیست کاربران ({filteredUsers.length})</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-right">کاربر</TableHead>
              <TableHead className="text-right">تماس</TableHead>
              <TableHead className="text-right">نقش</TableHead>
              <TableHead className="text-right">وضعیت</TableHead>
              <TableHead className="text-right">تاریخ عضویت</TableHead>
              <TableHead className="text-right">آخرین ورود</TableHead>
              <TableHead className="text-right">عملیات</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{user.name}</div>
                      <div className="text-sm text-muted-foreground">{user.email}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>{getRoleBadge(user.role)}</TableCell>
                <TableCell>{getStatusBadge(user.status)}</TableCell>
                <TableCell>{user.joinDate}</TableCell>
                <TableCell>{user.lastLogin}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">باز کردن منو</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>عملیات</DropdownMenuLabel>
                      <DropdownMenuItem>
                        <Eye className="mr-2 h-4 w-4" />
                        مشاهده جزئیات
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" />
                        ویرایش
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuLabel>تغییر نقش</DropdownMenuLabel>
                      <DropdownMenuItem onClick={() => handleChangeRole(user.id, "user")}>کاربر عادی</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleChangeRole(user.id, "consultant")}>مشاور</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleChangeRole(user.id, "admin")}>مدیر</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      {user.status === "active" ? (
                        <DropdownMenuItem onClick={() => handleChangeStatus(user.id, "blocked")}>
                          <Ban className="mr-2 h-4 w-4" />
                          مسدود کردن
                        </DropdownMenuItem>
                      ) : (
                        <DropdownMenuItem onClick={() => handleChangeStatus(user.id, "active")}>
                          <UserCheck className="mr-2 h-4 w-4" />
                          فعال کردن
                        </DropdownMenuItem>
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
