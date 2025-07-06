import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, FileCheck, FilePlus, Shield, ChevronLeft } from "lucide-react"
import Link from "next/link"

export function DocumentCenterSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <FileText className="h-10 w-10 text-[#FF6A5C]" />
              <h2 className="text-3xl font-bold text-[#02153D]">مرکز مدیریت اسناد</h2>
            </div>

            <p className="text-xl mb-8 leading-relaxed text-gray-700">
              تمام اسناد مورد نیاز برای درخواست‌های تحصیلی خود را در یک مکان امن مدیریت کنید. از ساخت رزومه تا ویرایش
              انگیزه‌نامه و مدیریت توصیه‌نامه‌ها.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="border-r-4 border-r-[#FF6A5C]">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#FF6A5C]/10 flex items-center justify-center">
                      <FilePlus className="h-5 w-5 text-[#FF6A5C]" />
                    </div>
                    <h3 className="font-bold text-[#02153D]">ساخت رزومه</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    قالب‌های حرفه‌ای و ابزارهای ساخت رزومه متناسب با استانداردهای بین‌المللی
                  </p>
                </CardContent>
              </Card>

              <Card className="border-r-4 border-r-[#FF6A5C]">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#FF6A5C]/10 flex items-center justify-center">
                      <FileText className="h-5 w-5 text-[#FF6A5C]" />
                    </div>
                    <h3 className="font-bold text-[#02153D]">ویرایش انگیزه‌نامه</h3>
                  </div>
                  <p className="text-gray-600 text-sm">ابزارهای هوشمند برای نوشتن و ویرایش انگیزه‌نامه‌های تاثیرگذار</p>
                </CardContent>
              </Card>

              <Card className="border-r-4 border-r-[#FF6A5C]">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#FF6A5C]/10 flex items-center justify-center">
                      <FileCheck className="h-5 w-5 text-[#FF6A5C]" />
                    </div>
                    <h3 className="font-bold text-[#02153D]">مدیریت توصیه‌نامه</h3>
                  </div>
                  <p className="text-gray-600 text-sm">سیستم درخواست، پیگیری و مدیریت توصیه‌نامه‌های تحصیلی</p>
                </CardContent>
              </Card>

              <Card className="border-r-4 border-r-[#FF6A5C]">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#FF6A5C]/10 flex items-center justify-center">
                      <Shield className="h-5 w-5 text-[#FF6A5C]" />
                    </div>
                    <h3 className="font-bold text-[#02153D]">ذخیره‌سازی امن</h3>
                  </div>
                  <p className="text-gray-600 text-sm">آپلود و ذخیره‌سازی امن تمام مدارک تحصیلی با دسترسی آسان</p>
                </CardContent>
              </Card>
            </div>

            <Button asChild size="lg" className="bg-[#02153D] hover:bg-[#02153D]/90 text-white text-lg px-8 py-3">
              <Link href="/document-center">
                ورود به مرکز اسناد
                <ChevronLeft className="mr-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div className="relative">
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#FF6A5C]/10 rounded-full blur-3xl"></div>
            <img
              src="/placeholder.svg?height=500&width=500"
              alt="مرکز اسناد"
              className="rounded-lg shadow-xl mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
