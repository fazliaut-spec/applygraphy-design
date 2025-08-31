import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { MatchingForm } from "@/components/ai-matching/matching-form"
import { MatchingResults } from "@/components/ai-matching/matching-results"
import { MatchingFAQ } from "@/components/ai-matching/matching-faq"
import { Brain, CheckCircle } from "lucide-react"

export default function AiMatchingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-[#02153D] to-[#02153D]/90">
          <div className="container mx-auto px-4 text-center text-white">
            <div className="flex justify-center mb-6">
              <Brain className="h-16 w-16 text-[#FF6A5C]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">تطبیق هوشمند با هوش مصنوعی</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              بهترین دانشگاه‌ها و برنامه‌ها را بر اساس پروفایل، اهداف و ترجیحات خود پیدا کنید
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#02153D] mb-12">چگونه کار می‌کند؟</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#FF6A5C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#FF6A5C]">۱</span>
                </div>
                <h3 className="text-xl font-bold text-[#02153D] mb-2">پروفایل خود را تکمیل کنید</h3>
                <p className="text-gray-600">
                  اطلاعات تحصیلی، نمرات، مهارت‌های زبانی، بودجه و ترجیحات خود را وارد کنید.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#FF6A5C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#FF6A5C]">۲</span>
                </div>
                <h3 className="text-xl font-bold text-[#02153D] mb-2">الگوریتم هوش مصنوعی</h3>
                <p className="text-gray-600">
                  سیستم هوشمند ما اطلاعات شما را با بیش از ۱۰,۰۰۰ برنامه تحصیلی مطابقت می‌دهد.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#FF6A5C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#FF6A5C]">۳</span>
                </div>
                <h3 className="text-xl font-bold text-[#02153D] mb-2">نتایج شخصی‌سازی شده</h3>
                <p className="text-gray-600">لیستی از بهترین برنامه‌ها با درصد تطبیق و توضیحات دقیق دریافت کنید.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#02153D] mb-12">مزایای تطبیق هوشمند</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <CheckCircle className="h-6 w-6 text-[#FF6A5C]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#02153D] mb-2">صرفه‌جویی در زمان</h3>
                    <p className="text-gray-600">به جای ساعت‌ها جستجو، در چند دقیقه بهترین گزینه‌های خود را پیدا کنید.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <CheckCircle className="h-6 w-6 text-[#FF6A5C]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#02153D] mb-2">افزایش شانس پذیرش</h3>
                    <p className="text-gray-600">برنامه‌هایی را پیدا کنید که بیشترین تناسب را با پروفایل شما دارند.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <CheckCircle className="h-6 w-6 text-[#FF6A5C]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#02153D] mb-2">کشف گزینه‌های جدید</h3>
                    <p className="text-gray-600">
                      دانشگاه‌ها و برنامه‌هایی را کشف کنید که ممکن است خودتان به آن‌ها فکر نکرده باشید.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <CheckCircle className="h-6 w-6 text-[#FF6A5C]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#02153D] mb-2">تصمیم‌گیری آگاهانه</h3>
                    <p className="text-gray-600">
                      با دریافت اطلاعات دقیق و مقایسه گزینه‌ها، بهترین تصمیم را برای آینده خود بگیرید.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Matching Form */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#02153D] mb-12">پروفایل خود را تکمیل کنید</h2>
            <MatchingForm />
          </div>
        </section>

        {/* Sample Results */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#02153D] mb-12">نمونه نتایج تطبیق</h2>
            <MatchingResults />
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#02153D] mb-12">سوالات متداول</h2>
            <MatchingFAQ />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
