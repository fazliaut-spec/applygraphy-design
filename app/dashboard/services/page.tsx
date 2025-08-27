"use client"

import { useState } from "react"
import { ServicesList } from "@/components/dashboard/services-list"
import { ServiceFilters } from "@/components/dashboard/service-filters"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/hooks/use-cart"
import { CartDrawer } from "@/components/dashboard/cart-drawer"

export default function ServicesPage() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { items } = useCart()
  const [filters, setFilters] = useState({
    category: "all",
    priceRange: "all",
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">خدمات</h1>
          <p className="text-muted-foreground">خدمات مورد نیاز خود را انتخاب کنید و سفارش دهید.</p>
        </div>
        <Button onClick={() => setIsCartOpen(true)} variant="outline">
          <ShoppingCart className="mr-2 h-4 w-4" />
          سبد خرید ({items.length})
        </Button>
      </div>

      <ServiceFilters filters={filters} setFilters={setFilters} />
      <ServicesList filters={filters} />

      <CartDrawer open={isCartOpen} onOpenChange={setIsCartOpen} />
    </div>
  )
}
