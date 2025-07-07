import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { SmartMatchingForm } from "@/components/smart-matching/smart-matching-form"
import { AcademicJobListings } from "@/components/smart-matching/academic-job-listings"
import { ResumeUpload } from "@/components/smart-matching/resume-upload"
import { Brain, Target, FileText, Search } from "lucide-react"

export const metadata: Metadata = {
  title: "تطبیق هوشمند - اپلای‌گرافی",
  description: "سیستم هوشمند تطبیق موقعیت‌های تحصیلی و شغلی با رزومه شما",
}

export default function SmartMatchingPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">تطبیق هوشمند</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              بهترین موقعیت‌های تحصیلی و شغلی را بر اساس رزومه و تخصص خود پیدا کنید
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#02153D] mb-12">چگونه کار می‌کند؟</h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#FF6A5C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-[#FF6A5C]" />
                </div>
                <h3 className="text-xl font-bold text-[#02153D] mb-2">آپلود رزومه</h3>
                <p className="text-gray-600">رزومه خود را آپلود کنید یا اطلاعات را دستی وارد کنید</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#FF6A5C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-[#FF6A5C]" />
                </div>
                <h3 className="text-xl font-bold text-[#02153D] mb-2">تحلیل هوشمند</h3>
                <p className="text-gray-600">سیستم هوش مصنوعی مهارت‌ها و تجربیات شما را تحلیل می‌کند</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#FF6A5C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-[#FF6A5C]" />
                </div>
                <h3 className="text-xl font-bold text-[#02153D] mb-2">جستجوی گسترده</h3>
                <p className="text-gray-600">جستجو در هزاران موقعیت شغلی و تحصیلی از منابع معتبر</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#FF6A5C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-[#FF6A5C]" />
                </div>
                <h3 className="text-xl font-bold text-[#02153D] mb-2">نتایج دقیق</h3>
                <p className="text-gray-600">دریافت لیست موقعیت‌های مرتب شده بر اساس تطبیق</p>
              </div>
            </div>
          </div>
        </section>

        {/* Resume Upload Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#02153D] mb-12">آپلود رزومه</h2>
            <ResumeUpload />
          </div>
        </section>

        {/* Smart Matching Form */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#02153D] mb-12">فیلترهای هوشمند</h2>
            <SmartMatchingForm />
          </div>
        </section>

        {/* Academic Job Listings */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#02153D] mb-12">موقعیت‌های تحصیلی</h2>
            <AcademicJobListings />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
