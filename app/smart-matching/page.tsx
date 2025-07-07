import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { SmartMatchingForm } from "@/components/smart-matching/smart-matching-form"
import { AcademicJobListings } from "@/components/smart-matching/academic-job-listings"
import { ResumeUpload } from "@/components/smart-matching/resume-upload"
import { Brain, Target, Users, Award } from "lucide-react"

export default function SmartMatchingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#02153D] to-[#02153D]/90 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-[#FF6A5C] rounded-full">
                  <Brain className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">تطبیق هوشمند</h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                با استفاده از هوش مصنوعی، بهترین موقعیت‌های تحصیلی و پژوهشی را پیدا کنید که با مهارت‌ها و علایق شما مطابقت
                دارد
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <Target className="h-8 w-8 text-[#FF6A5C] mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">تطبیق دقیق</h3>
                  <p className="text-white/80 text-sm">بر اساس رزومه و علایق شما</p>
                </div>
                <div className="text-center">
                  <Users className="h-8 w-8 text-[#FF6A5C] mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">شبکه گسترده</h3>
                  <p className="text-white/80 text-sm">دسترسی به هزاران موقعیت</p>
                </div>
                <div className="text-center">
                  <Award className="h-8 w-8 text-[#FF6A5C] mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">کیفیت بالا</h3>
                  <p className="text-white/80 text-sm">فقط موقعیت‌های معتبر</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resume Upload Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#02153D] mb-4">آپلود رزومه</h2>
                <p className="text-gray-600 text-lg">
                  رزومه خود را آپلود کنید تا بتوانیم بهترین موقعیت‌ها را برای شما پیدا کنیم
                </p>
              </div>
              <ResumeUpload />
            </div>
          </div>
        </section>

        {/* Matching Form Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#02153D] mb-4">تنظیمات جستجو</h2>
                <p className="text-gray-600 text-lg">معیارهای جستجوی خود را مشخص کنید</p>
              </div>
              <SmartMatchingForm />
            </div>
          </div>
        </section>

        {/* Job Listings Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#02153D] mb-4">موقعیت‌های پیشنهادی</h2>
                <p className="text-gray-600 text-lg">موقعیت‌های تحصیلی و پژوهشی مناسب برای شما</p>
              </div>
              <AcademicJobListings />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
