import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, FileText, Plane, Building, MapPin, Phone } from "lucide-react"

export function PackageServices() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#02153D] mb-12 text-center">خدمات پکیج کامل</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-[#FF6A5C]/10 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-[#FF6A5C]" />
              </div>
              <h3 className="text-xl font-bold text-[#02153D] mb-3">مشاوره و انتخاب دانشگاه</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• بررسی پروفایل تحصیلی و شغلی</li>
                <li>• تعیین بهترین کشور و دانشگاه متناسب با شرایط</li>
                <li>• معرفی رشته‌های تحصیلی مناسب</li>
                <li>• تحلیل هزینه‌ها و بازگشت سرمایه</li>
                <li>• ارائه لیست دانشگاه‌های مناسب</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-[#FF6A5C]/10 rounded-full flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-[#FF6A5C]" />
              </div>
              <h3 className="text-xl font-bold text-[#02153D] mb-3">آماده‌سازی مدارک</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• نگارش و ویرایش رزومه تحصیلی</li>
                <li>• نگارش انگیزه‌نامه تخصصی</li>
                <li>• تهیه توصیه‌نامه‌های قوی</li>
                <li>• ترجمه و تأیید مدارک تحصیلی</li>
                <li>• آماده‌سازی پورتفولیو (در صورت نیاز)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-[#FF6A5C]/10 rounded-full flex items-center justify-center mb-4">
                <Building className="h-6 w-6 text-[#FF6A5C]" />
              </div>
              <h3 className="text-xl font-bold text-[#02153D] mb-3">اپلای و پذیرش</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• تکمیل فرم‌های درخواست دانشگاه</li>
                <li>• پیگیری روند بررسی درخواست</li>
                <li>• مذاکره با دانشگاه برای دریافت بورسیه</li>
                <li>• مشاوره انتخاب بهترین پذیرش</li>
                <li>• پرداخت شهریه و تأیید پذیرش</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-[#FF6A5C]/10 rounded-full flex items-center justify-center mb-4">
                <Plane className="h-6 w-6 text-[#FF6A5C]" />
              </div>
              <h3 className="text-xl font-bold text-[#02153D] mb-3">ویزا و سفر</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• تکمیل فرم‌های درخواست ویزا</li>
                <li>• آماده‌سازی مدارک مالی و تمکن مالی</li>
                <li>• آمادگی برای مصاحبه ویزا</li>
                <li>• رزرو بلیط هواپیما با بهترین قیمت</li>
                <li>• بیمه مسافرتی و تحصیلی</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-[#FF6A5C]/10 rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-[#FF6A5C]" />
              </div>
              <h3 className="text-xl font-bold text-[#02153D] mb-3">اسکان و استقرار</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• یافتن محل اقامت مناسب</li>
                <li>• هماهنگی برای استقبال در فرودگاه</li>
                <li>• افتتاح حساب بانکی</li>
                <li>• خرید سیم‌کارت و اینترنت</li>
                <li>• آشنایی با محیط دانشگاه و شهر</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-[#FF6A5C]/10 rounded-full flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-[#FF6A5C]" />
              </div>
              <h3 className="text-xl font-bold text-[#02153D] mb-3">پشتیبانی پس از ورود</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• پشتیبانی ۲۴/۷ در ماه‌های اول</li>
                <li>• کمک در حل مشکلات اولیه</li>
                <li>• راهنمایی برای ثبت‌نام در دروس</li>
                <li>• معرفی به جامعه دانشجویی ایرانی</li>
                <li>• مشاوره برای تمدید ویزا</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
