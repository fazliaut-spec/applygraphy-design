"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    title: "تماس تلفنی",
    value: "۰۹۳۳۰۵۷۸۹۷۶",
    description: "پاسخگویی ۲۴ ساعته",
  },
  {
    icon: Mail,
    title: "ایمیل",
    value: "applygraphy@gmail.com",
    description: "پاسخ در کمتر از ۲ ساعت",
  },
  {
    icon: MapPin,
    title: "آدرس",
    value: "via tourino, italy",
    description: "دفتر مرکزی",
  },
  {
    icon: Clock,
    title: "ساعات کاری",
    value: "۹ صبح تا ۹ شب",
    description: "شنبه تا پنج‌شنبه",
  },
]

export function QuickContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", phone: "", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section className="py-20 bg-[#02153D] text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">با ما در تماس باشید</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            برای دریافت مشاوره رایگان و پاسخ به سوالاتتان، همین حالا با ما تماس بگیرید
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white text-2xl">فرم تماس سریع</CardTitle>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">پیام شما ارسال شد!</h3>
                  <p className="text-gray-300">در اسرع وقت با شما تماس خواهیم گرفت.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      name="name"
                      placeholder="نام و نام خانوادگی"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                    />
                    <Input
                      name="email"
                      type="email"
                      placeholder="ایمیل"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                    />
                  </div>
                  <Input
                    name="phone"
                    placeholder="شماره تماس"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                  />
                  <Textarea
                    name="message"
                    placeholder="پیام شما..."
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                  />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#FF6A5C] hover:bg-[#FF6A5C]/90 text-white"
                    size="lg"
                  >
                    {isSubmitting ? (
                      "در حال ارسال..."
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        ارسال پیام
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-8">راه‌های ارتباط با ما</h3>

            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#FF6A5C] rounded-lg">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg mb-1">{info.title}</h4>
                      <p className="text-[#FF6A5C] font-semibold mb-1">{info.value}</p>
                      <p className="text-gray-300 text-sm">{info.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Quick Actions */}
            <div className="space-y-4 pt-6">
              <Button asChild size="lg" className="w-full bg-[#FF6A5C] hover:bg-[#FF6A5C]/90 text-white">
                <a href="tel:+989330578976">
                  <Phone className="mr-2 h-5 w-5" />
                  تماس فوری
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full border-white text-white hover:bg-white hover:text-[#02153D] bg-transparent"
              >
                <a href="https://wa.me/989330578976" target="_blank" rel="noopener noreferrer">
                  واتساپ
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
