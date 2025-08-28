"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Mail, MessageCircle, Info, CheckCircle, Clock, Users } from "lucide-react"

export function PaymentInfo() {
  const handleEmailContact = () => {
    const subject = encodeURIComponent("درخواست خرید خدمات - Applygraphy")
    const body = encodeURIComponent(`سلام،

من علاقه‌مند به خرید خدمات شما هستم. لطفاً اطلاعات بیشتر در مورد موارد زیر ارائه دهید:

1. نوع خدمت مورد نظر: [لطفاً مشخص کنید]
2. مقطع تحصیلی: [کارشناسی/کارشناسی ارشد/دکتری]
3. کشور مقصد: [لطفاً مشخص کنید]
4. رشته تحصیلی: [لطفاً مشخص کنید]
5. بودجه تقریبی: [لطفاً مشخص کنید]

منتظر پاسخ شما هستم.

با تشکر`)

    window.location.href = `mailto:support@applygraphy.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="space-y-6" dir="rtl">
      <Alert className="border-blue-200 bg-blue-50">
        <Info className="h-4 w-4 text-blue-600" />
        <AlertDescription className="text-blue-800">
          <strong>اطلاعات مهم:</strong> برای خرید خدمات ما، لطفاً از طریق تیم پشتیبانی با ما تماس بگیرید. این امر به ما
          کمک می‌کند تا بهترین مشاوره و گزینه‌ها را به شما ارائه دهیم.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5 text-[#FF6A5C]" />
            نحوه خرید خدمات
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-[#FF6A5C] text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <h4 className="font-semibold text-sm">ارسال ایمیل</h4>
                <p className="text-xs text-gray-600">درخواست خود را ارسال کنید</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-[#FF6A5C] text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <h4 className="font-semibold text-sm">بررسی درخواست</h4>
                <p className="text-xs text-gray-600">تیم ما درخواست شما را بررسی می‌کند</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-[#FF6A5C] text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <h4 className="font-semibold text-sm">ارائه پیشنهاد</h4>
                <p className="text-xs text-gray-600">بهترین گزینه‌ها را دریافت کنید</p>
              </div>
            </div>
          </div>

          <div className="border-t pt-4">
            <h4 className="font-semibold mb-3">اطلاعات مورد نیاز در ایمیل:</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                نوع خدمت مورد نظر (درخواست تحصیلی، ویزا، زبان و...)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                مقطع تحصیلی (کارشناسی، کارشناسی ارشد، دکتری)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                کشور و دانشگاه مقصد (در صورت داشتن ترجیح)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                رشته تحصیلی مورد نظر
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                بودجه تقریبی و زمان‌بندی مورد نظر
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-[#FF6A5C]" />
              تماس از طریق ایمیل
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm text-gray-600">برای دریافت مشاوره تخصصی و خرید خدمات، ایمیل خود را ارسال کنید:</p>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="font-mono text-sm">support@applygraphy.com</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Clock className="h-4 w-4" />
              <span>پاسخ در کمتر از 24 ساعت</span>
            </div>

            <Button onClick={handleEmailContact} className="w-full bg-[#FF6A5C] hover:bg-[#FF6A5C]/90">
              <Mail className="h-4 w-4 mr-2" />
              ارسال ایمیل درخواست
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-[#FF6A5C]" />
              مزایای تماس با تیم پشتیبانی
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="mt-0.5">
                  1
                </Badge>
                <div>
                  <h5 className="font-semibold text-sm">مشاوره شخصی‌سازی شده</h5>
                  <p className="text-xs text-gray-600">بر اساس پروفایل و اهداف شما</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="mt-0.5">
                  2
                </Badge>
                <div>
                  <h5 className="font-semibold text-sm">قیمت‌گذاری منصفانه</h5>
                  <p className="text-xs text-gray-600">متناسب با نیازها و بودجه شما</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="mt-0.5">
                  3
                </Badge>
                <div>
                  <h5 className="font-semibold text-sm">برنامه‌ریزی دقیق</h5>
                  <p className="text-xs text-gray-600">زمان‌بندی مناسب برای اهداف شما</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="mt-0.5">
                  4
                </Badge>
                <div>
                  <h5 className="font-semibold text-sm">پشتیبانی مداوم</h5>
                  <p className="text-xs text-gray-600">همراهی در تمام مراحل فرآیند</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gradient-to-r from-[#FF6A5C]/10 to-[#02153D]/10 border-[#FF6A5C]/20">
        <CardContent className="p-6">
          <div className="text-center space-y-4">
            <h3 className="text-xl font-bold text-[#02153D]">آماده شروع هستید؟</h3>
            <p className="text-gray-600">تیم متخصص ما آماده ارائه بهترین خدمات و مشاوره به شما است</p>
            <Button onClick={handleEmailContact} size="lg" className="bg-[#FF6A5C] hover:bg-[#FF6A5C]/90">
              <Mail className="h-5 w-5 mr-2" />
              شروع مشاوره رایگان
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
