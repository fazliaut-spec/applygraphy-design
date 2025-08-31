"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MessageCircle, Clock, CheckCircle } from "lucide-react"

export function VisaConsultation() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    country: "",
    visaType: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Consultation request:", formData)
  }

  return (
    <section id="visa-consultation" className="py-20 bg-[#02153D]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">مشاوره رایگان ویزای تحصیلی</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            همین الان درخواست مشاوره رایگان دهید و از تجربه متخصصان ما بهره‌مند شوید
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-[#02153D]">فرم درخواست مشاوره</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="نام و نام خانوادگی"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="text-right"
                    required
                  />
                  <Input
                    placeholder="شماره تماس"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="text-right"
                    required
                  />
                </div>

                <Input
                  type="email"
                  placeholder="ایمیل"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="text-right"
                  required
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Select onValueChange={(value) => setFormData({ ...formData, country: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="کشور مقصد" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">ایالات متحده</SelectItem>
                      <SelectItem value="uk">انگلستان</SelectItem>
                      <SelectItem value="ca">کانادا</SelectItem>
                      <SelectItem value="au">استرالیا</SelectItem>
                      <SelectItem value="de">آلمان</SelectItem>
                      <SelectItem value="it">ایتالیا</SelectItem>
                      <SelectItem value="fr">فرانسه</SelectItem>
                      <SelectItem value="nl">هلند</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select onValueChange={(value) => setFormData({ ...formData, visaType: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="نوع ویزا" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="student">ویزای دانشجویی</SelectItem>
                      <SelectItem value="language">ویزای زبان</SelectItem>
                      <SelectItem value="exchange">ویزای تبادل</SelectItem>
                      <SelectItem value="work">ویزای کار پس از تحصیل</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Textarea
                  placeholder="توضیحات اضافی"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="text-right min-h-[120px]"
                />

                <Button type="submit" className="w-full bg-[#FF6A5C] hover:bg-[#FF6A5C]/90 text-white text-lg py-3">
                  درخواست مشاوره رایگان
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Stats */}
          <div className="space-y-8">
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-6">راه‌های ارتباطی</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#FF6A5C] rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">تلفن مشاوره ویزا</p>
                    <p className="text-white/90">۰۲۱-۱۲۳۴۵۶۷۸</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#FF6A5C] rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">ایمیل</p>
                    <p className="text-white/90">visa@applygraphy.ir</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#FF6A5C] rounded-full flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">پشتیبانی آنلاین</p>
                    <p className="text-white/90">۲۴ ساعته در خدمت شما</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#FF6A5C] rounded-full flex items-center justify-center">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">ساعات کاری</p>
                    <p className="text-white/90">شنبه تا چهارشنبه: ۹ تا ۱۸</p>
                    <p className="text-white/90">پنج‌شنبه: ۹ تا ۱۴</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Success Stats */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h4 className="text-xl font-bold text-white mb-4">آمار موفقیت ما</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#FF6A5C] mb-2">۹۵%</div>
                  <div className="text-white/80 text-sm">نرخ موفقیت ویزا</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#FF6A5C] mb-2">۲۰۰۰+</div>
                  <div className="text-white/80 text-sm">ویزای موفق</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#FF6A5C] mb-2">۱۵</div>
                  <div className="text-white/80 text-sm">کشور مقصد</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#FF6A5C] mb-2">۵</div>
                  <div className="text-white/80 text-sm">سال تجربه</div>
                </div>
              </div>
            </div>

            {/* Services List */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h4 className="text-xl font-bold text-white mb-4">خدمات ویژه ما</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#FF6A5C]" />
                  <span className="text-white/90">مشاوره رایگان اولیه</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#FF6A5C]" />
                  <span className="text-white/90">تهیه و تکمیل مدارک</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#FF6A5C]" />
                  <span className="text-white/90">آمادگی مصاحبه ویزا</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#FF6A5C]" />
                  <span className="text-white/90">پیگیری تا دریافت ویزا</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#FF6A5C]" />
                  <span className="text-white/90">ضمانت بازگشت هزینه</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
