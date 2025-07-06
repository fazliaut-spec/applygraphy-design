"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    course: "",
    level: "",
    experience: "",
    goals: "",
    terms: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Registration submitted:", formData)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#02153D] mb-4">فرم ثبت‌نام</h2>
            <p className="text-xl text-gray-600">برای ثبت‌نام در دوره‌های زبان فرم زیر را تکمیل کنید</p>
          </div>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-[#02153D] text-center">اطلاعات شخصی</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="نام"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="text-right"
                    required
                  />
                  <Input
                    placeholder="نام خانوادگی"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="text-right"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="شماره تماس"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="text-right"
                    required
                  />
                  <Input
                    type="email"
                    placeholder="ایمیل"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="text-right"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Select onValueChange={(value) => setFormData({ ...formData, course: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="انتخاب دوره" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ielts-basic">IELTS مقدماتی</SelectItem>
                      <SelectItem value="ielts-advanced">IELTS پیشرفته</SelectItem>
                      <SelectItem value="toefl">TOEFL آمادگی</SelectItem>
                      <SelectItem value="gre">GRE کامل</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select onValueChange={(value) => setFormData({ ...formData, level: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="سطح زبان فعلی" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">مبتدی</SelectItem>
                      <SelectItem value="elementary">ابتدایی</SelectItem>
                      <SelectItem value="intermediate">متوسط</SelectItem>
                      <SelectItem value="advanced">پیشرفته</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Textarea
                  placeholder="تجربه قبلی در آزمون‌های زبان (اختیاری)"
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  className="text-right min-h-[100px]"
                />

                <Textarea
                  placeholder="اهداف شما از شرکت در دوره"
                  value={formData.goals}
                  onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                  className="text-right min-h-[100px]"
                  required
                />

                <div className="flex items-center space-x-2 space-x-reverse">
                  <Checkbox
                    id="terms"
                    checked={formData.terms}
                    onCheckedChange={(checked) => setFormData({ ...formData, terms: checked as boolean })}
                  />
                  <label htmlFor="terms" className="text-sm text-gray-700">
                    با قوانین و مقررات موافقم
                  </label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#FF6A5C] hover:bg-[#FF6A5C]/90 text-white text-lg py-3"
                  disabled={!formData.terms}
                >
                  ثبت‌نام در دوره
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
