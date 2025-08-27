"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, ChevronDown, LogOut, Settings, User } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function AdminHeader() {
  const pathname = usePathname()
  const [notifications, setNotifications] = useState([
    {
      id: "1",
      title: "درخواست جدید",
      description: "یک درخواست جدید دریافت شده است.",
      read: false,
    },
    {
      id: "2",
      title: "پیام جدید",
      description: "یک پیام جدید از کاربر دریافت شده است.",
      read: false,
    },
    {
      id: "3",
      title: "سفارش جدید",
      description: "یک سفارش جدید ثبت شده است.",
      read: true,
    },
  ])

  const unreadCount = notifications.filter((n) => !n.read).length

  const markAsRead = (id: string) => {
    setNotifications(notifications.map((n) => (n.id === id ? { ...n, read: true } : n)))
  }

  const markAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })))
  }

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-white px-6">
      <div className="hidden md:block w-full">
        <h1 className="text-lg font-semibold">
          {pathname === "/admin"
            ? "داشبورد"
            : pathname === "/admin/users"
              ? "کاربران"
              : pathname === "/admin/applications"
                ? "درخواست‌ها"
                : pathname === "/admin/services"
                  ? "خدمات"
                  : pathname === "/admin/orders"
                    ? "سفارشات"
                    : pathname === "/admin/messages"
                      ? "پیام‌ها"
                      : pathname === "/admin/reports"
                        ? "گزارشات"
                        : pathname === "/admin/settings"
                          ? "تنظیمات"
                          : ""}
        </h1>
      </div>
      <div className="flex items-center gap-4 md:mr-auto">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="relative bg-transparent">
              <Bell className="h-5 w-5" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                  {unreadCount}
                </span>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel className="flex items-center justify-between">
              <span>اعلان‌ها</span>
              <Button variant="ghost" size="sm" onClick={markAllAsRead} className="h-auto text-xs">
                علامت همه به عنوان خوانده شده
              </Button>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {notifications.length === 0 ? (
              <div className="p-4 text-center text-sm text-gray-500">اعلان جدیدی ندارید</div>
            ) : (
              notifications.map((notification) => (
                <DropdownMenuItem
                  key={notification.id}
                  className={cn("flex flex-col items-start p-4 gap-1", !notification.read && "bg-gray-50")}
                  onClick={() => markAsRead(notification.id)}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="font-medium">{notification.title}</span>
                    {!notification.read && (
                      <Badge variant="secondary" className="ml-auto">
                        جدید
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-gray-500">{notification.description}</p>
                </DropdownMenuItem>
              ))
            )}
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/admin/notifications" className="flex justify-center text-sm font-medium">
                مشاهده همه اعلان‌ها
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2 px-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg" alt="تصویر مدیر" />
                <AvatarFallback>مد</AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start text-sm">
                <span className="font-medium">مدیر سیستم</span>
              </div>
              <ChevronDown className="h-4 w-4 opacity-50" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>حساب کاربری من</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/admin/profile" className="flex items-center">
                <User className="ml-2 h-4 w-4" />
                پروفایل
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/admin/settings" className="flex items-center">
                <Settings className="ml-2 h-4 w-4" />
                تنظیمات
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/api/auth/signout" className="flex items-center">
                <LogOut className="ml-2 h-4 w-4" />
                خروج
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
