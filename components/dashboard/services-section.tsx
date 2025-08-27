"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Star } from "lucide-react"

const services = [
  {
    id: 1,
    title: "مشاوره تحصیلی کامل",
    description: "مشاوره جامع برای انتخاب رشته و دانشگاه",
    price: "2,500,000",
    rating: 4.8,
    reviews: 124,
    category: "مشاوره",
    popular: true,
  },
  {
    id: 2,
    title: "ویرایش انگیزه‌نامه",
    description: "ویرایش حرفه‌ای انگیزه‌نامه توسط متخصصان",
    price: "500,000",
    rating: 4.9,
    reviews: 89,
    category: "نوشتار",
    popular: false,
  },
  {
    id: 3,
    title: "مشاوره ویزا",
    description: "راهنمایی کامل برای اخذ ویزای تحصیلی",
    price: "1,200,000",
    rating: 4.7,
    reviews: 156,
    category: "ویزا",
    popular: true,
  },
  {
    id: 4,
    title: "ترجمه مدارک",
    description: "ترجمه رسمی مدارک تحصیلی",
    price: "300,000",
    rating: 4.6,
    reviews: 67,
    category: "ترجمه",
    popular: false,
  },
]

export function ServicesSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>خدمات محبوب</CardTitle>
        <CardDescription>خدمات پرطرفدار ApplyGraphy</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <div key={service.id} className="border rounded-lg p-4">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 space-x-reverse mb-1">
                    <h3 className="font-medium">{service.title}</h3>
                    {service.popular && (
                      <Badge variant="secondary" className="text-xs">
                        محبوب
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{service.description}</p>

                  <div className="flex items-center space-x-2 space-x-reverse mb-2">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium mr-1">{service.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">({service.reviews} نظر)</span>
                    <Badge variant="outline" className="text-xs">
                      {service.category}
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-lg font-bold text-primary">{service.price} تومان</div>
                <Button size="sm">
                  <ShoppingCart className="h-4 w-4 ml-1" />
                  افزودن به سبد
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
