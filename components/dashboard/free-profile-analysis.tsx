"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Target, TrendingUp } from "lucide-react"

const analysisFeatures = [
  "تحلیل نمرات و مدارک تحصیلی",
  "بررسی احتمال پذیرش در دانشگاه‌های مختلف",
  "پیشنهاد رشته‌های مناسب بر اساس علایق",
  "راهنمای بهبود پروفایل تحصیلی",
]

export function FreeProfileAnalysis() {
  return (
    <section className="bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl shadow-lg p-8 md:p-12">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            ارزیابی رایگان و شخصی‌سازی شده درخواست شما
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            بفهمید در کدام دانشگاه‌ها بیشترین شانس پذیرش را دارید — بر اساس نمرات، ترجیحات و اهدافتان.
          </p>

          <div className="space-y-3 mb-8">
            {analysisFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>

          <Button
            size="lg"
            className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Target className="w-5 h-5 ml-2" />
            شروع تست رایگان
          </Button>
        </div>

        <div className="relative">
          <Card className="bg-white shadow-xl border-0 transform rotate-3 hover:rotate-0 transition-transform duration-300">
            <CardContent className="p-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">تحلیل هوشمند</h3>
                <p className="text-sm text-gray-600 mb-4">الگوریتم پیشرفته ما بیش از ۱۰۰۰ دانشگاه را بررسی می‌کند</p>
                <div className="bg-gray-100 rounded-lg p-4">
                  <div className="text-2xl font-bold text-green-500 mb-1">۸۵%</div>
                  <div className="text-xs text-gray-600">احتمال پذیرش</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
