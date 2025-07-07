"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, User, LogIn } from "lucide-react"
import { UserMenu } from "./user-menu"
import { AuthModal } from "@/components/auth/auth-modal"

export function Header() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false) // This would come from auth context

  const navigationItems = [
    {
      title: "خدمات",
      items: [
        { title: "تطبیق هوشمند", href: "/smart-matching", description: "پیدا کردن بهترین موقعیت‌های تحصیلی" },
        { title: "مشاوره تحصیل", href: "/academic-applications", description: "راهنمایی کامل برای درخواست تحصیل" },
        { title: "خدمات ویزا", href: "/visa-services", description: "کمک در اخذ ویزای تحصیلی" },
        { title: "مشاوره مقصد", href: "/destination-consulting", description: "انتخاب بهترین کشور برای تحصیل" },
        {
          title: "آزمون‌های بین‌المللی",
          href: "/international-exams",
          description: "آمادگی برای آیلتس، تافل و سایر آزمون‌ها",
        },
        { title: "دوره‌های زبان", href: "/language-courses", description: "یادگیری زبان‌های خارجی" },
      ],
    },
    {
      title: "دانشگاه‌ها",
      items: [
        { title: "جستجوی دانشگاه", href: "/universities", description: "جستجو در بیش از 10000 دانشگاه" },
        { title: "رنکینگ دانشگاه‌ها", href: "/universities?tab=rankings", description: "رتبه‌بندی دانشگاه‌های برتر جهان" },
        {
          title: "مقایسه دانشگاه‌ها",
          href: "/universities?tab=compare",
          description: "مقایسه دانشگاه‌ها بر اساس معیارهای مختلف",
        },
      ],
    },
  ]

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 space-x-reverse">
              <Image src="/images/logo.png" alt="اپلای‌گرافی" width={40} height={40} className="h-10 w-10" />
              <span className="text-xl font-bold text-[#02153D]">اپلای‌گرافی</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 space-x-reverse">
              <NavigationMenu>
                <NavigationMenuList className="space-x-2 space-x-reverse">
                  <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                      <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-[#FF6A5C] focus:bg-gray-100 focus:text-[#FF6A5C] focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                        خانه
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  {navigationItems.map((item) => (
                    <NavigationMenuItem key={item.title}>
                      <NavigationMenuTrigger className="bg-white hover:bg-gray-100 hover:text-[#FF6A5C]">
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {item.items.map((subItem) => (
                            <li key={subItem.title}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={subItem.href}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 hover:text-[#FF6A5C] focus:bg-gray-100 focus:text-[#FF6A5C]"
                                >
                                  <div className="text-sm font-medium leading-none">{subItem.title}</div>
                                  <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                                    {subItem.description}
                                  </p>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ))}

                  <NavigationMenuItem>
                    <Link href="/booking" legacyBehavior passHref>
                      <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-[#FF6A5C] focus:bg-gray-100 focus:text-[#FF6A5C] focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                        رزرو مشاوره
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="/about" legacyBehavior passHref>
                      <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-[#FF6A5C] focus:bg-gray-100 focus:text-[#FF6A5C] focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                        درباره ما
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="/contact" legacyBehavior passHref>
                      <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-[#FF6A5C] focus:bg-gray-100 focus:text-[#FF6A5C] focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                        تماس با ما
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Auth Section */}
            <div className="hidden md:flex items-center space-x-4 space-x-reverse">
              {isLoggedIn ? (
                <UserMenu />
              ) : (
                <Button
                  onClick={() => setIsAuthModalOpen(true)}
                  className="bg-[#FF6A5C] hover:bg-[#FF6A5C]/90 text-white"
                >
                  <LogIn className="h-4 w-4 ml-2" />
                  ورود / ثبت نام
                </Button>
              )}
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80">
                  <div className="flex flex-col space-y-4 mt-8">
                    <Link href="/" className="text-lg font-medium hover:text-[#FF6A5C]">
                      خانه
                    </Link>

                    <div className="space-y-2">
                      <h3 className="text-lg font-medium text-[#02153D]">خدمات</h3>
                      {navigationItems[0].items.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="block py-2 text-gray-600 hover:text-[#FF6A5C] border-r-2 border-transparent hover:border-[#FF6A5C] pr-4"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg font-medium text-[#02153D]">دانشگاه‌ها</h3>
                      {navigationItems[1].items.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="block py-2 text-gray-600 hover:text-[#FF6A5C] border-r-2 border-transparent hover:border-[#FF6A5C] pr-4"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>

                    <Link href="/booking" className="text-lg font-medium hover:text-[#FF6A5C]">
                      رزرو مشاوره
                    </Link>
                    <Link href="/about" className="text-lg font-medium hover:text-[#FF6A5C]">
                      درباره ما
                    </Link>
                    <Link href="/contact" className="text-lg font-medium hover:text-[#FF6A5C]">
                      تماس با ما
                    </Link>

                    <div className="pt-4 border-t">
                      {isLoggedIn ? (
                        <div className="space-y-2">
                          <Button variant="ghost" className="w-full justify-start">
                            <User className="h-4 w-4 ml-2" />
                            پروفایل من
                          </Button>
                        </div>
                      ) : (
                        <Button
                          onClick={() => setIsAuthModalOpen(true)}
                          className="w-full bg-[#FF6A5C] hover:bg-[#FF6A5C]/90 text-white"
                        >
                          <LogIn className="h-4 w-4 ml-2" />
                          ورود / ثبت نام
                        </Button>
                      )}
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onSuccess={() => {
          setIsLoggedIn(true)
          setIsAuthModalOpen(false)
        }}
      />
    </>
  )
}
