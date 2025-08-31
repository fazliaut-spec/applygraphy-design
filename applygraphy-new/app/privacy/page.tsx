import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Shield, UserCheck, Database } from "lucide-react"

export const metadata: Metadata = {
  title: "سیاست حفظ حریم خصوصی | ApplyGraphy",
  description: "سیاست حفظ حریم خصوصی ApplyGraphy - نحوه جمع‌آوری، استفاده و محافظت از اطلاعات شخصی شما",
  keywords: "حریم خصوصی، GDPR، امنیت اطلاعات، محافظت داده",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <Shield className="h-16 w-16 mx-auto mb-4 text-[#FF6A5C]" />
            <h1 className="text-4xl font-bold text-[#02153D] mb-4">سیاست حفظ حریم خصوصی</h1>
            <p className="text-lg text-gray-600">آخرین به‌روزرسانی: ۱ ژانویه ۲۰۲۴</p>
          </div>

          <div className="prose prose-lg max-w-none" dir="rtl">
            {/* Introduction */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <UserCheck className="h-6 w-6 text-[#FF6A5C]" />
                <h2 className="text-2xl font-bold text-[#02153D] m-0">مقدمه</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                ApplyGraphy ("ما"، "شرکت ما" یا "خدمات ما") متعهد به حفاظت از حریم خصوصی و اطلاعات شخصی شما است. این
                سیاست حریم خصوصی توضیح می‌دهد که چگونه اطلاعات شما را جمع‌آوری، استفاده، ذخیره و محافظت می‌کنیم هنگامی که
                از وب‌سایت applygraphy.com و خدمات مرتبط استفاده می‌کنید.
              </p>
              <p className="text-gray-700 leading-relaxed">
                ما مطابق با قانون عمومی حفاظت از داده‌های اتحادیه اروپا (GDPR) و سایر قوانین حفاظت از داده‌های قابل اجرا
                عمل می‌کنیم.
              </p>
            </section>

            {/* Data Collection */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Database className="h-6 w-6 text-[#FF6A5C]" />
                <h2 className="text-2xl font-bold text-[#02153D] m-0">اطلاعاتی که جمع‌آوری می‌کنیم</h2>
              </div>

              <h3 className="text-xl font-semibold text-[#02153D] mb-4">۱. اطلاعات شخصی</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>نام و نام خانوادگی</li>
                <li>آدرس ایمیل</li>
                <li>شماره تلفن</li>
                <li>آدرس محل سکونت</li>
                <li>اطلاعات تحصیلی (مدرک، معدل، دانشگاه)</li>
                <li>نمرات آزمون‌های زبان</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
