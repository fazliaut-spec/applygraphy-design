"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Gift } from "lucide-react"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    setIsSubscribed(true)
    setEmail("")
  }

  if (isSubscribed) {
    return (
      <section className="bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl shadow-lg p-8 md:p-12 text-center text-white">
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Gift className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold mb-2">متشکریم!</h2>
        <p className="text-lg opacity-90">
          شما با موفقیت در خبرنامه ما عضو شدید. اولین هشدار بورسیه را به زودی دریافت خواهید کرد.
        </p>
      </section>
    )
  }

  return (
    <section className="bg-gradient-to-r from-blue-500 to-green-500 rounded-3xl shadow-lg p-8 md:p-12 text-center text-white">
      <div className="max-w-2xl mx-auto">
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Mail className="w-8 h-8" />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-4">عضو خبرنامه شوید</h2>
        <p className="text-lg opacity-90 mb-8">هشدارهای هفتگی بورسیه تحصیلی دریافت کنید و از آخرین فرصت‌ها مطلع شوید</p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="آدرس ایمیل شما"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:bg-white/20"
          />
          <Button
            type="submit"
            className="bg-white text-blue-600 hover:bg-white/90 px-8 py-2 rounded-full font-semibold"
          >
            عضویت
          </Button>
        </form>

        <p className="text-sm opacity-75 mt-4">بدون اسپم. لغو اشتراک در هر زمان امکان‌پذیر است.</p>
      </div>
    </section>
  )
}
