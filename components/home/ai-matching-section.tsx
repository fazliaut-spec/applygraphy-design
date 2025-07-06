import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, CheckCircle, ChevronLeft } from "lucide-react"
import Link from "next/link"

export function AiMatchingSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#02153D] to-[#02153D]/90">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="flex items-center gap-3 mb-6">
              <Brain className="h-10 w-10 text-[#FF6A5C]" />
              <h2 className="text-3xl font-bold">تطبیق هوشمند با هوش مصنوعی</h2>
            </div>

            <p className="text-xl mb-8 leading-relaxed">
              سیستم هوش مصنوعی پیشرفته ما بهترین دانشگاه‌ها و برنامه‌ها را بر اساس پروفایل، اهداف و ترجیحات شما پیشنهاد
              می‌دهد.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-[#FF6A5C] mt-1 flex-shrink-0" />
                <p>تجزیه و تحلیل بیش از ۱۰,۰۰۰ برنامه از دانشگاه‌های معتبر جهان</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-[#FF6A5C] mt-1 flex-shrink-0" />
                <p>در نظر گرفتن نمرات، سوابق تحصیلی، مهارت‌های زبانی و بودجه شما</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-[#FF6A5C] mt-1 flex-shrink-0" />
                <p>پیشنهاد برنامه‌هایی که بیشترین شانس پذیرش را دارید</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-[#FF6A5C] mt-1 flex-shrink-0" />
                <p>مقایسه دقیق برنامه‌ها و دانشگاه‌ها در کنار هم</p>
              </div>
            </div>

            <Button asChild size="lg" className="bg-[#FF6A5C] hover:bg-[#FF6A5C]/90 text-white text-lg px-8 py-3">
              <Link href="/ai-matching">
                امتحان کنید
                <ChevronLeft className="mr-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="bg-white/10 backdrop-blur-sm border-0 text-white">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#FF6A5C]/20 mb-4">
                    <span className="text-xl font-bold text-[#FF6A5C]">۹۵%</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">دقت تطبیق</h3>
                  <p className="text-sm text-white/80">الگوریتم ما با دقت بالا برنامه‌های مناسب را پیشنهاد می‌دهد</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-0 text-white">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#FF6A5C]/20 mb-4">
                    <span className="text-xl font-bold text-[#FF6A5C]">۵۰+</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">کشورهای تحت پوشش</h3>
                  <p className="text-sm text-white/80">دسترسی به دانشگاه‌های معتبر در بیش از ۵۰ کشور جهان</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-0 text-white">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#FF6A5C]/20 mb-4">
                    <span className="text-xl font-bold text-[#FF6A5C]">۱۰K+</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">برنامه‌های تحصیلی</h3>
                  <p className="text-sm text-white/80">بیش از ۱۰,۰۰۰ برنامه تحصیلی در مقاطع مختلف</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-0 text-white">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#FF6A5C]/20 mb-4">
                    <span className="text-xl font-bold text-[#FF6A5C]">۲۴/۷</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">پشتیبانی هوشمند</h3>
                  <p className="text-sm text-white/80">دسترسی به دستیار هوش مصنوعی در تمام ساعات شبانه‌روز</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
