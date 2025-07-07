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
import { User, Settings, LogOut, LogIn, UserPlus } from "lucide-react"

export function UserMenu() {
  const [isLoggedIn, setIsLoggedIn] = useState(false) // This would come from your auth context

  if (!isLoggedIn) {
    return (
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/auth?mode=signin">
            <LogIn className="h-4 w-4 mr-2" />
            ورود
          </Link>
        </Button>
        <Button size="sm" asChild className="bg-[#02153D] hover:bg-[#02153D]/90">
          <Link href="/auth?mode=signup">
            <UserPlus className="h-4 w-4 mr-2" />
            ثبت نام
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <User className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuItem asChild>
          <Link href="/profile" className="cursor-pointer">
            <User className="h-4 w-4 mr-2" />
            پروفایل من
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/dashboard" className="cursor-pointer">
            <Settings className="h-4 w-4 mr-2" />
            داشبورد
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => setIsLoggedIn(false)} className="cursor-pointer text-red-600">
          <LogOut className="h-4 w-4 mr-2" />
          خروج
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
