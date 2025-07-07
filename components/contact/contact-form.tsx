"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Send, Phone, Mail } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    service: "",
    message: "",
    newsletter: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Form submitted:", formData)
    setIsSubmitting(false)

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      service: "",
      message: "",
      newsletter: false,
    })
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Contact Form */}
      <div className="lg:col-span-2">
        <Card className="shadow-lg">
          <CardHeader className="bg-gradient-to-r from-[#02153D] to-[#FF6A5C] text-white">
            <CardTitle className="text-xl flex items-center gap-2">
              <Send className="h-5 w-5" />
              فرم تماس
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">نام و نام خانوادگی *</label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="نام کامل خود را وارد کنید"
                    className="text-right"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">شماره تماس *</label>
                  <Input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                    className="text-right"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">ایمیل *</label>
                <Input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="example@email.com"
                  className="text-right"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">موضوع پیام</label>
                  <Select onValueChange={(value) => setFormData({ ...formData, subject: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="موضوع را انتخاب کنید" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="consultation">درخواست مشاوره</SelectItem>
                      <SelectItem value="application">سوال درباره اپلیکیشن</SelectItem>
                      <SelectItem value="visa">سوال درباره ویزا</SelectItem>
                      <SelectItem value="exam">سوال درباره آزمون‌ها</SelectItem>
                      <SelectItem value="other">سایر موارد</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">خدمات مورد نظر</label>
                  <Select onValueChange={(value) => setFormData({ ...formData, service: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="خدمت مورد نظر" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full-package">پکیج کامل</SelectItem>
                      <SelectItem value="application">درخواست تحصیلی</SelectItem>
                      <SelectItem value="visa">خدمات ویزا</SelectItem>
                      <SelectItem value="language">دوره‌های زبان</SelectItem>
                      <SelectItem value="exam">آزمون‌های بین‌المللی</SelectItem>
                      <SelectItem value="consulting">مشا��ره مقصد</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">پیام شما *</label>
                <Textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="پیام خود را اینجا بنویسید..."
                  className="text-right min-h-[120px]"
                />
              </div>

              <div className="flex items-center space-x-2 space-x-reverse">
                <Checkbox
                  id="newsletter"
                  checked={formData.newsletter}
                  onCheckedChange={(checked) => setFormData({ ...formData, newsletter: checked as boolean })}
                />
                <label htmlFor="newsletter" className="text-sm text-gray-600">
                  مایل به دریافت خبرنامه و اطلاعیه‌های آموزشی هستم
                </label>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#FF6A5C] hover:bg-[#FF6A5C]/90 text-white py-3 text-lg"
              >
                {isSubmitting ? "در حال ارسال..." : "ارسال پیام"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Quick Contact Info */}
      <div className="space-y-6">
        <Card className="shadow-lg">
          <CardHeader className="bg-gray-50">
            <CardTitle className="text-lg text-[#02153D] flex items-center gap-2">
              <Phone className="h-5 w-5" />
              تماس سریع
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 space-y-4">
            <div className="text-center">
              <p className="text-gray-600 mb-3">برای مشاوره فوری با ما تماس بگیرید</p>
              <Button className="w-full bg-[#02153D] hover:bg-[#02153D]/90 text-white">۰۲۱-۸۸۷۷۶۶۵۵</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader className="bg-gray-50">
            <CardTitle className="text-lg text-[#02153D] flex items-center gap-2">
              <Mail className="h-5 w-5" />
              ایمیل مستقیم
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <div className="space-y-3 text-sm">
              <div>
                <span className="font-medium">مشاوره عمومی:</span>
                <br />
                <span className="text-gray-600">info@applygraphy.com</span>
              </div>
              <div>
                <span className="font-medium">پشتیبانی فنی:</span>
                <br />
                <span className="text-gray-600">support@applygraphy.com</span>
              </div>
              <div>
                <span className="font-medium">امور ویزا:</span>
                <br />
                <span className="text-gray-600">visa@applygraphy.com</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-[#02153D] to-[#FF6A5C] text-white shadow-lg">
          <CardContent className="p-4 text-center">
            <h3 className="font-bold text-lg mb-2">مشاوره رایگان</h3>
            <p className="text-sm mb-4 opacity-90">۳۰ دقیقه مشاوره رایگان با کارشناسان ما</p>
            <Button className="w-full bg-white text-[#02153D] hover:bg-gray-100">رزرو جلسه</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
