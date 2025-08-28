"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Download, Mail, ArrowRight } from "lucide-react"
import Link from "next/link"

interface PaymentSuccessProps {
  orderId?: string
  serviceName?: string
  amount?: number
}

export function PaymentSuccess({ orderId, serviceName, amount }: PaymentSuccessProps) {
  const handleDownloadReceipt = () => {
    // This would typically generate and download a PDF receipt
    console.log("Downloading receipt for order:", orderId)
  }

  const handleContactSupport = () => {
    const subject = encodeURIComponent(`پیگیری سفارش ${orderId} - Applygraphy`)
    const body = encodeURIComponent(`سلام،

سفارش من با موفقیت ثبت شد:
- شماره سفارش: ${orderId}
- نام خدمت: ${serviceName}
- مبلغ پرداختی: $${amount}

لطفاً مراحل بعدی را اطلاع دهید.

با تشکر`)

    window.location.href = `mailto:support@applygraphy.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="max-w-2xl mx-auto p-6" dir="rtl">
      <Card className="text-center">
        <CardHeader>
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <CardTitle className="text-2xl text-green-600">پرداخت موفق!</CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="space-y-2">
            <p className="text-gray-600">سفارش شما با موفقیت ثبت شد</p>
            {orderId && (
              <p className="text-sm text-gray-500">
                شماره سفارش: <span className="font-mono">{orderId}</span>
              </p>
            )}
          </div>

          {serviceName && amount && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">جزئیات سفارش</h3>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>خدمت:</span>
                  <span>{serviceName}</span>
                </div>
                <div className="flex justify-between">
                  <span>مبلغ:</span>
                  <span className="font-semibold">${amount}</span>
                </div>
              </div>
            </div>
          )}

          <div className="space-y-3">
            <h4 className="font-semibold">مراحل بعدی:</h4>
            <ul className="text-sm text-gray-600 space-y-2 text-right">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#FF6A5C] rounded-full" />
                تیم ما در کمتر از 24 ساعت با شما تماس خواهد گرفت
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#FF6A5C] rounded-full" />
                ایمیل تأیید و جزئیات خدمات برای شما ارسال می‌شود
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#FF6A5C] rounded-full" />
                فرآیند ارائه خدمات طبق برنامه‌ریزی شده آغاز خواهد شد
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button onClick={handleDownloadReceipt} variant="outline" className="flex-1 bg-transparent">
              <Download className="h-4 w-4 mr-2" />
              دانلود رسید
            </Button>

            <Button onClick={handleContactSupport} className="flex-1 bg-[#FF6A5C] hover:bg-[#FF6A5C]/90">
              <Mail className="h-4 w-4 mr-2" />
              تماس با پشتیبانی
            </Button>
          </div>

          <div className="pt-4 border-t">
            <Button asChild variant="ghost" className="w-full">
              <Link href="/dashboard">
                <ArrowRight className="h-4 w-4 mr-2" />
                بازگشت به داشبورد
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
