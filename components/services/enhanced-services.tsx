"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  getAllServices,
  getServiceCategories,
  searchServices,
  getPopularServices,
  formatPrice,
  calculateDiscountPercentage,
  type Service,
  type ServiceCategory,
} from "@/lib/services/api"
import { useCart } from "@/hooks/use-cart"
import { useToast } from "@/hooks/use-toast"
import { ShoppingCart, Star, Clock, Users, Search, Filter, Loader2, Tag } from "lucide-react"

export function EnhancedServices() {
  const [services, setServices] = useState<Service[]>([])
  const [categories, setCategories] = useState<ServiceCategory[]>([])
  const [popularServices, setPopularServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [priceRange, setPriceRange] = useState("all")
  const [sortBy, setSortBy] = useState("popular")

  const { addItem } = useCart()
  const { toast } = useToast()

  // Load initial data
  useEffect(() => {
    const loadData = async () => {
      setLoading(true)
      try {
        const [allServices, serviceCategories, popular] = await Promise.all([
          getAllServices(),
          getServiceCategories(),
          getPopularServices(),
        ])

        setServices(allServices)
        setCategories(serviceCategories)
        setPopularServices(popular)
      } catch (error) {
        console.error("Error loading services:", error)
        toast({
          title: "خطا در بارگذاری",
          description: "خطا در بارگذاری سرویس‌ها",
          variant: "destructive",
        })
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [toast])

  // Handle search
  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      const allServices = await getAllServices()
      setServices(allServices)
      return
    }

    setLoading(true)
    try {
      const results = await searchServices(searchQuery)
      setServices(results)
      toast({
        title: "جستجو انجام شد",
        description: `${results.length} سرویس یافت شد`,
      })
    } catch (error) {
      console.error("Search error:", error)
      toast({
        title: "خطا در جستجو",
        description: "لطفاً دوباره تلاش کنید",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  // Filter and sort services
  const filteredServices = services
    .filter((service) => {
      if (selectedCategory !== "all" && service.category !== selectedCategory) return false

      if (priceRange !== "all") {
        const [min, max] = priceRange.split("-").map(Number)
        if (service.price < min || service.price > max) return false
      }

      return true
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "rating":
          return b.rating - a.rating
        case "popular":
          return b.studentsCount - a.studentsCount
        default:
          return 0
      }
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

  const getCategoryName = (categoryId: string): string => {
    const category = categories.find((cat) => cat.id === categoryId)
    return category?.name || categoryId
  }

  if (loading && services.length === 0) {
    return (
      <div className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardHeader>
                <div className="h-4 bg-gray-200 rounded w-3/4" />
                <div className="h-3 bg-gray-200 rounded w-1/2" />
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="h-3 bg-gray-200 rounded" />
                <div className="h-3 bg-gray-200 rounded" />
                <div className="h-8 bg-gray-200 rounded w-1/3" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <Card className="p-6">
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="جستجو در سرویس‌ها..."
                className="pl-10 text-right"
                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
            <Button onClick={handleSearch} disabled={loading}>
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Search className="h-4 w-4" />}
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="دسته‌بندی" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">همه دسته‌ها</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger>
                <SelectValue placeholder="محدوده قیمت" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">همه قیمت‌ها</SelectItem>
                <SelectItem value="0-1000000">تا ۱ میلیون تومان</SelectItem>
                <SelectItem value="1000000-2000000">۱ تا ۲ میلیون تومان</SelectItem>
                <SelectItem value="2000000-5000000">۲ تا ۵ میلیون تومان</SelectItem>
                <SelectItem value="5000000-999999999">بالای ۵ میلیون تومان</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="مرتب‌سازی" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">محبوب‌ترین</SelectItem>
                <SelectItem value="rating">بالاترین امتیاز</SelectItem>
                <SelectItem value="price-low">ارزان‌ترین</SelectItem>
                <SelectItem value="price-high">گران‌ترین</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Filter className="h-4 w-4" />
              {filteredServices.length} سرویس
            </div>
          </div>
        </div>
      </Card>

      {/* Services Tabs */}
      <Tabs defaultValue="all" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="all">همه سرویس‌ها</TabsTrigger>
          <TabsTrigger value="popular">محبوب‌ترین</TabsTrigger>
          <TabsTrigger value="categories">دسته‌بندی‌ها</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onAddToCart={handleAddToCart}
                categoryName={getCategoryName(service.category)}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="popular" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {popularServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onAddToCart={handleAddToCart}
                categoryName={getCategoryName(service.category)}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="categories" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Card key={category.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Tag className="h-5 w-5" />
                    {category.name}
                  </CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-gray-600">{category.serviceCount} سرویس موجود</div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    className="w-full bg-transparent"
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    مشاهده سرویس‌ها
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {filteredServices.length === 0 && !loading && (
        <Card className="p-8 text-center">
          <div className="text-gray-500">
            <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <h3 className="text-lg font-medium mb-2">سرویسی یافت نشد</h3>
            <p className="text-sm">لطفاً فیلترهای جستجو را تغییر دهید یا کلمات کلیدی دیگری امتحان کنید</p>
          </div>
        </Card>
      )}
    </div>
  )
}

// Service Card Component
interface ServiceCardProps {
  service: Service
  onAddToCart: (service: Service) => void
  categoryName: string
}

function ServiceCard({ service, onAddToCart, categoryName }: ServiceCardProps) {
  const discountPercentage = service.originalPrice
    ? calculateDiscountPercentage(service.originalPrice, service.price)
    : 0

  return (
    <Card className="relative overflow-hidden hover:shadow-lg transition-all duration-300">
      {service.popular && (
        <div className="absolute top-4 right-4 z-10">
          <Badge className="bg-orange-500 hover:bg-orange-600">محبوب</Badge>
        </div>
      )}

      {discountPercentage > 0 && (
        <div className="absolute top-4 left-4 z-10">
          <Badge className="bg-red-500 hover:bg-red-600">{discountPercentage}% تخفیف</Badge>
        </div>
      )}

      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg">{service.name}</CardTitle>
            <CardDescription className="mt-1">{service.description}</CardDescription>
          </div>
        </div>

        <div className="flex items-center gap-2 mt-2">
          <Badge variant="secondary" className="text-xs">
            {categoryName}
          </Badge>
          {!service.available && (
            <Badge variant="destructive" className="text-xs">
              ناموجود
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center gap-4">
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
            <span className="font-medium">{service.rating}</span>
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
          <span className="text-2xl font-bold text-blue-600">{formatPrice(service.price, service.currency)}</span>
          {service.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              {formatPrice(service.originalPrice, service.currency)}
            </span>
          )}
        </div>
      </CardContent>

      <CardFooter>
        <Button className="w-full" onClick={() => onAddToCart(service)} disabled={!service.available}>
          <ShoppingCart className="mr-2 h-4 w-4" />
          {service.available ? "افزودن به سبد خرید" : "ناموجود"}
        </Button>
      </CardFooter>
    </Card>
  )
}
