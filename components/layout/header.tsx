"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { UserMenu } from "./user-menu"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "خانه", href: "/" },
    { name: "جستجوی دانشگاه", href: "/universities" },
    { name: "تطبیق هوشمند", href: "/smart-matching" },
    { name: "دوره‌های زبان", href: "/language-courses" },
    { name: "آزمون‌های بین‌المللی", href: "/international-exams" },
    { name: "خدمات ویزا", href: "/visa-services" },
    { name: "درخواست تحصیلی", href: "/academic-applications" },
    { name: "پکیج کامل", href: "/full-package" },
    { name: "مشاوره مقصد", href: "/destination-consulting" },
    { name: "درباره ما", href: "/about" },
    { name: "تماس", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="h-10 w-auto">
              <Image src="/images/logo.png" alt="اپلای‌گرافی" width={40} height={40} className="h-10 w-auto" priority />
            </div>
            <span className="font-bold text-[#02153D] text-xl">اپلای‌گرافی</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navigation.slice(0, 5).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-[#FF6A5C] transition-colors"
              >
                {item.name}
              </Link>
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-[#FF6A5C] transition-colors">
                خدمات بیشتر
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {navigation.slice(5, 9).map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link href={item.href} className="cursor-pointer">
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {navigation.slice(9).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-[#FF6A5C] transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* User Menu & CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button asChild size="sm" className="bg-[#FF6A5C] hover:bg-[#FF6A5C]/90 text-white">
              <Link href="/booking">رزرو مشاوره</Link>
            </Button>
            <UserMenu />
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#FF6A5C] hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-[#FF6A5C] text-[#FF6A5C] hover:bg-[#FF6A5C] hover:text-white bg-transparent"
                >
                  <Link href="tel:+989330578976">تماس رایگان: ۰۹۳۳۰۵۷۸۹۷۶</Link>
                </Button>
                <Button asChild className="w-full bg-[#FF6A5C] hover:bg-[#FF6A5C]/90 text-white">
                  <Link href="/booking">رزرو مشاوره</Link>
                </Button>
                <div className="pt-2">
                  <UserMenu />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
