"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AuthModal } from "@/components/auth/auth-modal"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle, AlertCircle } from "lucide-react"

export default function TestAuthPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [testResults, setTestResults] = useState<{
    recaptchaLoaded: boolean
    modalOpened: boolean
    loginTested: boolean
    registerTested: boolean
    lastResult: string | null
  }>({
    recaptchaLoaded: false,
    modalOpened: false,
    loginTested: false,
    registerTested: false,
    lastResult: null,
  })

  const handleOpenModal = () => {
    setIsModalOpen(true)
    setTestResults((prev) => ({ ...prev, modalOpened: true }))
  }

  const handleAuthSuccess = () => {
    setIsModalOpen(false)
    setTestResults((prev) => ({
      ...prev,
      loginTested: true,
      lastResult: "Authentication successful!",
    }))
  }

  const testRecaptchaLoad = () => {
    // Check if reCAPTCHA script is loaded
    const recaptchaLoaded = typeof window !== "undefined" && window.grecaptcha !== undefined
    setTestResults((prev) => ({ ...prev, recaptchaLoaded }))
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8" dir="rtl">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#02153D] mb-4">تست سیستم احراز هویت</h1>
          <p className="text-gray-600">
            این صفحه برای تست عملکرد فرم‌های ورود و ثبت نام با reCAPTCHA جدید طراحی شده است
          </p>
        </div>

        {/* Test Controls */}
        <Card>
          <CardHeader>
            <CardTitle>کنترل‌های تست</CardTitle>
            <CardDescription>از دکمه‌های زیر برای تست قابلیت‌های مختلف استفاده کنید</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <Button onClick={testRecaptchaLoad} variant="outline">
                بررسی بارگذاری reCAPTCHA
              </Button>
              <Button onClick={handleOpenModal} className="bg-[#FF6A5C] hover:bg-[#FF6A5C]/90">
                باز کردن فرم احراز هویت
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Test Results */}
        <Card>
          <CardHeader>
            <CardTitle>نتایج تست</CardTitle>
            <CardDescription>وضعیت تست‌های انجام شده</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <span>بارگذاری reCAPTCHA</span>
                <div className="flex items-center gap-2">
                  {testResults.recaptchaLoaded ? (
                    <>
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        موفق
                      </Badge>
                    </>
                  ) : (
                    <>
                      <XCircle className="h-5 w-5 text-red-500" />
                      <Badge variant="secondary" className="bg-red-100 text-red-800">
                        ناموفق
                      </Badge>
                    </>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <span>باز شدن مودال احراز هویت</span>
                <div className="flex items-center gap-2">
                  {testResults.modalOpened ? (
                    <>
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        موفق
                      </Badge>
                    </>
                  ) : (
                    <>
                      <AlertCircle className="h-5 w-5 text-yellow-500" />
                      <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                        در انتظار تست
                      </Badge>
                    </>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <span>تست ورود/ثبت نام</span>
                <div className="flex items-center gap-2">
                  {testResults.loginTested ? (
                    <>
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        موفق
                      </Badge>
                    </>
                  ) : (
                    <>
                      <AlertCircle className="h-5 w-5 text-yellow-500" />
                      <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                        در انتظار تست
                      </Badge>
                    </>
                  )}
                </div>
              </div>

              {testResults.lastResult && (
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-blue-800 font-medium">آخرین نتیجه:</p>
                  <p className="text-blue-600">{testResults.lastResult}</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* reCAPTCHA Information */}
        <Card>
          <CardHeader>
            <CardTitle>اطلاعات reCAPTCHA</CardTitle>
            <CardDescription>جزئیات پیکربندی reCAPTCHA فعلی</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span className="font-medium">Site Key:</span>
                <code className="text-sm bg-white px-2 py-1 rounded border">
                  6LdjSrQrAAAAAJ6bU0m4d4N4X7vOlVR9rkyVVXKr
                </code>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span className="font-medium">نوع reCAPTCHA:</span>
                <Badge variant="outline">v2 Checkbox</Badge>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span className="font-medium">زبان:</span>
                <Badge variant="outline">فارسی (fa)</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Test Instructions */}
        <Card>
          <CardHeader>
            <CardTitle>دستورالعمل تست</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-2 text-sm">
              <li>ابتدا دکمه "بررسی بارگذاری reCAPTCHA" را کلیک کنید</li>
              <li>سپس دکمه "باز کردن فرم احراز هویت" را کلیک کنید</li>
              <li>در مودال باز شده، فرم ورود یا ثبت نام را تکمیل کنید</li>
              <li>reCAPTCHA را تکمیل کنید (تیک "من ربات نیستم" را بزنید)</li>
              <li>فرم را ارسال کنید و نتیجه را مشاهده کنید</li>
              <li>نتایج تست در بالا نمایش داده خواهد شد</li>
            </ol>
          </CardContent>
        </Card>
      </div>

      {/* Auth Modal */}
      <AuthModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSuccess={handleAuthSuccess} />
    </div>
  )
}
