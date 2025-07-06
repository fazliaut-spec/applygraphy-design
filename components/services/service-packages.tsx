"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Phone, Plane } from "lucide-react"
import { useAuth } from "@/lib/auth/auth-provider"
import { useState } from "react"
import { LoginModal } from "@/components/auth/login-modal"

export function ServicePackages() {
  const { user } = useAuth()
  const [showLoginModal, setShowLoginModal] = useState(false)

  const packages = [
    {
      id: "full-package",
      name: "پکیج کامل",
      price: 2000,
      currency: "EUR",
      description: "مشاوره جامع از شروع تا پایان",
      icon: Star,
      popular: true,
      features: [
        "مشاوره جامع از شروع تا پایان",
        "رزرو نامحدود مشاوره",
        "ایجاد برنامه زمانی پذیرش",
        "تمام خدمات مشاوره‌ای ضروری",
        "پشتیبانی ۲۴/۷",
        "ضمانت پذیرش",
        "مشاوره انتخاب رشته",
        "آماده‌سازی مدارک",
        "نگارش انگیزه‌نامه",
        "آمادگی مصاحبه",
      ],
    },
    {
      id: "visa-package",
      name: "پکیج مشاوره ویزا",
      price: 250,
      currency: "EUR",
      description: "راهنمایی کامل مهاجرت",
      icon: Plane,
      popular: false,
      features: [
        "مشاوره تخصصی ویزا",
        "بررسی مدارک ویزا",
        "آمادگی مصاحبه ویزا",
        "راهنمای مالی",
        "برنامه سفر",
        "مشاوره اسکان",
        "پیگیری درخواست",
        "ضمانت بازگشت وجه",
      ],
    },
  ]

  const handlePurchase = (packageId: string) => {
    if (!user) {
      setShowLoginModal(true)
      return
    }
    // Handle purchase logic
    alert("خرید با موفقیت انجام شد!")
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#02153D] mb-4">پکیج‌های خدماتی</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            بسته‌های جامع خدماتی ما را انتخاب کنید و از مشاوره تخصصی بهره‌مند شوید
          </p>
        </div>

        {/* Free Consultation */}
        <Card className="mb-8 border-2 border-[#FF6A5C] bg-gradient-to-r from-[#FF6A5C]/5 to-[#02153D]/5">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#FF6A5C] rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#02153D]">مشاوره رایگان تلفنی</h3>
                  <p className="text-gray-600">مشاوره اولیه ۳۰ دقیقه‌ای کاملاً رایگان</p>
                </div>
              </div>
              <Button asChild size="lg" className="bg-[#FF6A5C] hover:bg-[#FF6A5C]/90">
                <a href="tel:+989330578976" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  +98 933 057 8976
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Service Packages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg) => (
            <Card key={pkg.id} className={`relative ${pkg.popular ? "border-2 border-[#FF6A5C]" : ""}`}>
              {pkg.popular && (
                <div className="absolute -top-3 right-1/2 transform translate-x-1/2">
                  <Badge className="bg-[#FF6A5C] text-white px-4 py-1">محبوب‌ترین</Badge>
                </div>
              )}

              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#02153D]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <pkg.icon className="h-8 w-8 text-[#02153D]" />
                </div>
                <CardTitle className="text-2xl text-[#02153D]">{pkg.name}</CardTitle>
                <p className="text-gray-600">{pkg.description}</p>
                <div className="text-4xl font-bold text-[#FF6A5C] mt-4">€{pkg.price.toLocaleString()}</div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => handlePurchase(pkg.id)}
                  className={`w-full ${
                    pkg.popular ? "bg-[#FF6A5C] hover:bg-[#FF6A5C]/90" : "bg-[#02153D] hover:bg-[#02153D]/90"
                  } text-white`}
                >
                  خرید پکیج
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">سوال دارید؟ با ما تماس بگیرید</p>
          <Button
            variant="outline"
            asChild
            className="border-[#FF6A5C] text-[#FF6A5C] hover:bg-[#FF6A5C] hover:text-white"
          >
            <a href="tel:+989330578976">تماس رایگان</a>
          </Button>
        </div>
      </div>

      <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
    </section>
  )
}
