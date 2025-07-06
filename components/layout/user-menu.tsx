"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useAuth } from "@/lib/auth/auth-provider"
import { LoginModal } from "@/components/auth/login-modal"
import { User, Settings, History, LogOut, ShoppingBag, FileText } from "lucide-react"

export function UserMenu() {
  const { user, logout } = useAuth()
  const [showLoginModal, setShowLoginModal] = useState(false)

  if (!user) {
    return (
      <>
        <Button
          onClick={() => setShowLoginModal(true)}
          variant="outline"
          size="sm"
          className="border-[#FF6A5C] text-[#FF6A5C] hover:bg-[#FF6A5C] hover:text-white"
        >
          <User className="h-4 w-4 mr-2" />
          ورود / ثبت نام
        </Button>
        <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
      </>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          <Avatar className="h-10 w-10">
            <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
            <AvatarFallback className="bg-[#FF6A5C] text-white">{user.name.charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            <p className="font-medium">{user.name}</p>
            <p className="w-[200px] truncate text-sm text-muted-foreground">{user.email}</p>
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/profile" className="cursor-pointer">
            <User className="mr-2 h-4 w-4" />
            <span>پروفایل</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/profile?tab=history" className="cursor-pointer">
            <History className="mr-2 h-4 w-4" />
            <span>تاریخچه مشاوره‌ها</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/profile?tab=services" className="cursor-pointer">
            <ShoppingBag className="mr-2 h-4 w-4" />
            <span>خدمات خریداری شده</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/profile?tab=documents" className="cursor-pointer">
            <FileText className="mr-2 h-4 w-4" />
            <span>مرکز مدارک</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/profile?tab=settings" className="cursor-pointer">
            <Settings className="mr-2 h-4 w-4" />
            <span>تنظیمات</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={logout} className="cursor-pointer text-red-600">
          <LogOut className="mr-2 h-4 w-4" />
          <span>خروج</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
