"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Home,
  Users,
  FileText,
  ShoppingBag,
  MessageSquare,
  Menu,
  LogOut,
  BarChart2,
  Settings,
  CreditCard,
} from "lucide-react"

interface NavItem {
  title: string
  href: string
  icon: React.ReactNode
}

const navItems: NavItem[] = [
  {
    title: "داشبورد",
    href: "/admin",
    icon: <Home className="h-5 w-5" />,
  },
  {
    title: "کاربران",
    href: "/admin/users",
    icon: <Users className="h-5 w-5" />,
  },
  {
    title: "درخواست‌ها",
    href: "/admin/applications",
    icon: <FileText className="h-5 w-5" />,
  },
  {
    title: "خدمات",
    href: "/admin/services",
    icon: <ShoppingBag className="h-5 w-5" />,
  },
  {
    title: "سفارشات",
    href: "/admin/orders",
    icon: <CreditCard className="h-5 w-5" />,
  },
  {
    title: "پیام‌ها",
    href: "/admin/messages",
    icon: <MessageSquare className="h-5 w-5" />,
  },
  {
    title: "گزارشات",
    href: "/admin/reports",
    icon: <BarChart2 className="h-5 w-5" />,
  },
  {
    title: "تنظیمات",
    href: "/admin/settings",
    icon: <Settings className="h-5 w-5" />,
  },
]

export function AdminSidebar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden fixed left-4 top-4 z-40 bg-transparent">
            <Menu className="h-5 w-5" />
            <span className="sr-only">منو</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="p-0">
          <MobileSidebar pathname={pathname} setOpen={setOpen} />
        </SheetContent>
      </Sheet>
      <div className="hidden md:flex border-l bg-white h-screen w-64 flex-col fixed right-0 top-0">
        <DesktopSidebar pathname={pathname} />
      </div>
      <div className="hidden md:block w-64"></div>
    </>
  )
}

function MobileSidebar({
  pathname,
  setOpen,
}: {
  pathname: string
  setOpen: (open: boolean) => void
}) {
  return (
    <div className="flex h-full flex-col bg-white">
      <div className="p-6 border-b">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-bold text-xl">اپلای‌گرافی</span>
          <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">ادمین</span>
        </Link>
      </div>
      <ScrollArea className="flex-1 p-4">
        <nav className="grid gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-gray-100",
                pathname === item.href ? "bg-gray-100 text-gray-900" : "text-gray-500",
              )}
            >
              {item.icon}
              {item.title}
            </Link>
          ))}
        </nav>
      </ScrollArea>
      <div className="p-4 border-t">
        <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
          <Link href="/api/auth/signout">
            <LogOut className="ml-2 h-4 w-4" />
            خروج
          </Link>
        </Button>
      </div>
    </div>
  )
}

function DesktopSidebar({ pathname }: { pathname: string }) {
  return (
    <>
      <div className="p-6 border-b">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-bold text-xl">اپلای‌گرافی</span>
          <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">ادمین</span>
        </Link>
      </div>
      <ScrollArea className="flex-1 p-4">
        <nav className="grid gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-gray-100",
                pathname === item.href ? "bg-gray-100 text-gray-900" : "text-gray-500",
              )}
            >
              {item.icon}
              {item.title}
            </Link>
          ))}
        </nav>
      </ScrollArea>
      <div className="p-4 border-t">
        <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
          <Link href="/api/auth/signout">
            <LogOut className="ml-2 h-4 w-4" />
            خروج
          </Link>
        </Button>
      </div>
    </>
  )
}
