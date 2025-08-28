"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PaymentInfo } from "./payment-info"
import { type PaymentService, paymentServices } from "@/lib/payment/stripe"
import { Check, Star, Mail, Info } from "lucide-react"

interface ServiceCheckoutProps {
  isOpen: boolean
  onClose: () => void
}

export function ServiceCheckout({ isOpen, onClose }: ServiceCheckoutProps) {
  const [selectedService, setSelectedService] = useState<PaymentService | null>(null)
  const [showPaymentInfo, setShowPaymentInfo] = useState(false)

  const handleServiceSelect = (service: PaymentService) => {
    setSelectedService(service)
    setShowPaymentInfo(true)
  }

  const handleEmailContact = (service: PaymentService) => {
    const subject = encodeURIComponent(`درخواست خرید ${service.name} - Applygraphy`)
    const body = encodeURIComponent(`سلام،

من علاقه‌مند به خرید خدمت "${service.name}" هستم.

جزئیات خدمت:
- نام خدمت: ${service.name}
- قیمت: $${service.price}
- مدت زمان: ${service.duration}

لطفاً اطلاعات بیشتر در مورد موارد زیر ارائه دهید:
1. مقطع تحصیلی مورد نظر
2. کشور مقصد
3. رشته تحصیلی
4. زمان‌بندی مورد نظر

منتظر پاسخ شما هستم.

با تشکر`)

    window.location.href = `mailto:support@applygraphy.com?subject=${subject}&body=${body}`
  }

  if (showPaymentInfo) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto" dir="rtl">
          <DialogHeader>
            <DialogTitle className="text-2xl">اطلاعات خرید خدمات</DialogTitle>
          </DialogHeader>
          <PaymentInfo />
          <div className="flex gap-3 pt-4 border-t">
            <Button onClick={() => setShowPaymentInfo(false)} variant="outline">
              بازگشت به انتخاب خدمات
            </Button>
            <Button onClick={onClose} className="bg-[#FF6A5C] hover:bg-[#FF6A5C]/90">
              بستن
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto" dir="rtl">
        <DialogHeader>
          <DialogTitle className="text-2xl">انتخاب خدمات</DialogTitle>
          <div className="flex items-center gap-2 text-sm text-blue-600 bg-blue-50 p-3 rounded-lg">
            <Info className="h-4 w-4" />
            <span>برای خرید خدمات، لطفاً با تیم پشتیبانی ما تماس بگیرید</span>
          </div>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {paymentServices.map((service) => (
            <Card
              key={service.id}
              className={`relative transition-all hover:shadow-lg ${
                service.popular ? "ring-2 ring-[#FF6A5C] ring-opacity-50" : ""
              }`}
            >
              {service.popular && (
                <Badge className="absolute -top-2 right-4 bg-[#FF6A5C] text-white">
                  <Star className="h-3 w-3 mr-1" />
                  محبوب
                </Badge>
              )}

              <CardHeader>
                <CardTitle className="text-xl">{service.name}</CardTitle>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-[#FF6A5C]">${service.price}</span>
                  <span className="text-sm text-gray-500">{service.duration}</span>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-gray-600 mb-4">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-2">
                  <Button
                    onClick={() => handleEmailContact(service)}
                    className="w-full bg-[#FF6A5C] hover:bg-[#FF6A5C]/90"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    درخواست خرید
                  </Button>

                  <Button onClick={() => handleServiceSelect(service)} variant="outline" className="w-full">
                    اطلاعات بیشتر
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <div className="text-center">
            <h3 className="font-semibold mb-2">نیاز به مشاوره دارید؟</h3>
            <p className="text-sm text-gray-600 mb-4">
              تیم متخصص ما آماده ارائه مشاوره رایگان و انتخاب بهترین خدمات برای شما است
            </p>
            <Button onClick={() => setShowPaymentInfo(true)} className="bg-[#02153D] hover:bg-[#02153D]/90">
              مشاهده اطلاعات کامل خرید
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
