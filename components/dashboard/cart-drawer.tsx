"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/hooks/use-cart"
import { Minus, Plus, Trash2, CreditCard } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface CartDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CartDrawer({ open, onOpenChange }: CartDrawerProps) {
  const { items, updateQuantity, removeItem, clearCart, getTotalPrice } = useCart()
  const { toast } = useToast()
  const [isCheckingOut, setIsCheckingOut] = useState(false)

  const handleCheckout = async () => {
    setIsCheckingOut(true)

    // Simulate checkout process
    setTimeout(() => {
      toast({
        title: "سفارش با موفقیت ثبت شد",
        description: "سفارش شما با موفقیت ثبت شد و به زودی پردازش خواهد شد.",
      })
      clearCart()
      onOpenChange(false)
      setIsCheckingOut(false)
    }, 2000)
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fa-IR").format(price) + " تومان"
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>سبد خرید</SheetTitle>
          <SheetDescription>
            {items.length === 0 ? "سبد خرید شما خالی است" : `${items.length} آیتم در سبد خرید`}
          </SheetDescription>
        </SheetHeader>

        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="text-gray-400 mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5-6M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6"
                    />
                  </svg>
                </div>
                <p className="text-gray-500">سبد خرید شما خالی است</p>
                <p className="text-sm text-gray-400 mt-1">خدمات مورد نظر خود را اضافه کنید</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 p-4 border rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      {item.description && <p className="text-sm text-gray-500 mt-1">{item.description}</p>}
                      <div className="flex items-center justify-between mt-2">
                        <span className="font-medium text-blue-600">{formatPrice(item.price)}</span>
                        <div className="flex items-center gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <Badge variant="secondary">{item.quantity}</Badge>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                          <Button size="sm" variant="outline" onClick={() => removeItem(item.id)}>
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {items.length > 0 && (
            <div className="border-t pt-4 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-lg font-medium">مجموع:</span>
                <span className="text-lg font-bold text-blue-600">{formatPrice(getTotalPrice())}</span>
              </div>
              <Separator />
              <div className="space-y-2">
                <Button className="w-full" onClick={handleCheckout} disabled={isCheckingOut}>
                  <CreditCard className="mr-2 h-4 w-4" />
                  {isCheckingOut ? "در حال پردازش..." : "تسویه حساب"}
                </Button>
                <Button variant="outline" className="w-full bg-transparent" onClick={clearCart}>
                  پاک کردن سبد خرید
                </Button>
              </div>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}
