"use client"

import type React from "react"
import { useState } from "react"
import { loadStripe } from "@stripe/stripe-js"
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Loader2, CreditCard, Lock } from "lucide-react"
import { type PaymentService, createPaymentIntent } from "@/lib/payment/stripe"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

interface PaymentFormProps {
  service: PaymentService
  onSuccess: () => void
  onCancel: () => void
}

function CheckoutForm({ service, onSuccess, onCancel }: PaymentFormProps) {
  const stripe = useStripe()
  const elements = useElements()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: "",
  })

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    if (!stripe || !elements) {
      return
    }

    setIsLoading(true)

    try {
      // Create payment intent
      const { clientSecret } = await createPaymentIntent(service.id, service.price)

      const cardElement = elements.getElement(CardElement)
      if (!cardElement) {
        throw new Error("Card element not found")
      }

      // Confirm payment
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: customerInfo.name,
            email: customerInfo.email,
            phone: customerInfo.phone,
          },
        },
      })

      if (error) {
        toast({
          title: "خطا در پرداخت",
          description: error.message,
          variant: "destructive",
        })
      } else if (paymentIntent.status === "succeeded") {
        toast({
          title: "پرداخت موفق",
          description: "سفارش شما با موفقیت ثبت شد",
        })
        onSuccess()
      }
    } catch (error) {
      console.error("Payment error:", error)
      toast({
        title: "خطا در پرداخت",
        description: "لطفاً دوباره تلاش کنید",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const cardElementOptions = {
    style: {
      base: {
        fontSize: "16px",
        color: "#424770",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
    },
  }

  return (
    <div className="max-w-md mx-auto" dir="rtl">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            پرداخت آنلاین
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">{service.name}</h3>
            <p className="text-gray-600 text-sm mb-3">{service.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-[#FF6A5C]">${service.price}</span>
              <span className="text-sm text-gray-500">{service.duration}</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <Label htmlFor="name">نام و نام خانوادگی</Label>
                <Input
                  id="name"
                  value={customerInfo.name}
                  onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                  placeholder="نام کامل خود را وارد کنید"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email">ایمیل</Label>
                <Input
                  id="email"
                  type="email"
                  value={customerInfo.email}
                  onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                  placeholder="example@email.com"
                  required
                />
              </div>

              <div>
                <Label htmlFor="phone">شماره تماس</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={customerInfo.phone}
                  onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                  placeholder="09123456789"
                  required
                />
              </div>
            </div>

            <div>
              <Label>اطلاعات کارت</Label>
              <div className="mt-2 p-3 border rounded-md">
                <CardElement options={cardElementOptions} />
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Lock className="h-4 w-4" />
              <span>پرداخت شما با SSL محافظت می‌شود</span>
            </div>

            <div className="flex gap-3">
              <Button
                type="submit"
                disabled={!stripe || isLoading}
                className="flex-1 bg-[#FF6A5C] hover:bg-[#FF6A5C]/90"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    در حال پردازش...
                  </>
                ) : (
                  `پرداخت $${service.price}`
                )}
              </Button>

              <Button type="button" variant="outline" onClick={onCancel} disabled={isLoading}>
                انصراف
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export function PaymentForm({ service, onSuccess, onCancel }: PaymentFormProps) {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm service={service} onSuccess={onSuccess} onCancel={onCancel} />
    </Elements>
  )
}
