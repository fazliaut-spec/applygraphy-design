"use client"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/hooks/use-cart"
import { ShoppingCart, Star, Clock, Users } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface Service {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  category: string
  duration: string
  rating: number
  studentsCount: number
  features: string[]
  popular?: boolean
}

interface ServicesListProps {
  filters: {
    category: string
    priceRange: string
  }
}

export function ServicesList({ filters }: ServicesListProps) {
  const { addItem } = useCart()
  const { toast } = useToast()

  const services: Service[] = [
    {
      id: "1",
      name: "مشاوره جامع تحصیلی",
      description: "مشاوره کامل برای انتخاب دانشگاه و رشته مناسب",
      price: 2500000,
      originalPrice: 3000000,
      category: "consulting",
      duration: "2 ساعت",
      rating: 4.8,
      studentsCount: 156,
      features: ["بررسی پروفایل", "انتخاب دانشگاه", "راهنمایی درخواست", "پشتیبانی 30 روزه"],
      popular: true,
    },
    {
      id: "2",
      name: "بررسی و ویرایش انگیزه‌نامه",
      description: "بررسی و ویرایش حرفه‌ای انگیزه‌نامه شما",
      price: 800000,
      category: "documents",
      duration: "3-5 روز",
      rating: 4.9,
      studentsCount: 89,
      features: ["بررسی محتوا", "ویرایش زبان", "بازخورد تخصصی", "تضمین کیفیت"],
    },
    {
      id: "3",
      name: "آمادگی مصاحبه",
      description: "تمرین مصاحبه با مشاوران مجرب",
      price: 1200000,
      category: "preparation",
      duration: "1.5 ساعت",
      rating: 4.7,
      studentsCount: 67,
      features: ["شبیه‌سازی مصاحبه", "بازخورد فوری", "نکات کلیدی", "تمرین چندباره"],
    },
    {
      id: "4",
      name: "ترجمه مدارک",
      description: "ترجمه رسمی مدارک تحصیلی و شخصی",
      price: 500000,
      category: "documents",
      duration: "2-3 روز",
      rating: 4.6,
      studentsCount: 234,
      features: ["ترجمه رسمی", "تایید دفتر خانه", "تحویل سریع", "ضمانت کیفیت"],
    },
    {
      id: "5",
      name: "مشاوره ویزا",
      description: "راهنمایی کامل برای اخذ ویزای تحصیلی",
      price: 1800000,
      category: "visa",
      duration: "1 ساعت",
      rating: 4.8,
      studentsCount: 123,
      features: ["بررسی مدارک", "راهنمایی مصاحبه", "پیگیری درخواست", "پشتیبانی کامل"],
    },
    {
      id: "6",
      name: "کورس آیلتس آنلاین",
      description: "دوره جامع آمادگی آزمون آیلتس",
      price: 3500000,
      originalPrice: 4000000,
      category: "courses",
      duration: "8 هفته",
      rating: 4.9,
      studentsCount: 445,
      features: ["کلاس‌های زنده", "تست‌های تمرینی", "بازخورد شخصی", "ضمانت نمره"],
      popular: true,
    },
  ]

  const filteredServices = services.filter((service) => {
    if (filters.category !== "all" && service.category !== filters.category) return false
    if (filters.priceRange !== "all") {
      const [min, max] = filters.priceRange.split("-").map(Number)
      if (service.price < min || service.price > max) return false
    }
    return true
  })

  const handleAddToCart = (service: Service) => {
    addItem({
      id: service.id,
      name: service.name,
      price: service.price,
      description: service.description,
    })
    toast({
      title: "به سبد خرید اضافه شد",
      description: `${service.name} به سبد خرید شما اضافه شد.`,
    })
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fa-IR").format(price) + " تومان"
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {filteredServices.map((service) => (
        <Card key={service.id} className="relative overflow-hidden">
          {service.popular && (
            <div className="absolute top-4 right-4 z-10">
              <Badge className="bg-orange-500 hover:bg-orange-600">محبوب</Badge>
            </div>
          )}

          <CardHeader>
            <CardTitle className="text-lg">{service.name}</CardTitle>
            <CardDescription>{service.description}</CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {service.duration}
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  {service.studentsCount}
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">{service.rating}</span>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-sm">ویژگی‌ها:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                {service.features.slice(0, 3).map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    {feature}
                  </li>
                ))}
                {service.features.length > 3 && (
                  <li className="text-blue-600 text-xs">+ {service.features.length - 3} ویژگی دیگر</li>
                )}
              </ul>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-blue-600">{formatPrice(service.price)}</span>
              {service.originalPrice && (
                <span className="text-sm text-gray-500 line-through">{formatPrice(service.originalPrice)}</span>
              )}
            </div>
          </CardContent>

          <CardFooter>
            <Button className="w-full" onClick={() => handleAddToCart(service)}>
              <ShoppingCart className="mr-2 h-4 w-4" />
              افزودن به سبد خرید
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
