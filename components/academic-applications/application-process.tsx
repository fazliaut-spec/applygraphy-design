import { Card, CardContent } from "@/components/ui/card"
import { Search, FileText, Edit, Send, CheckCircle } from "lucide-react"

const processSteps = [
  {
    step: 1,
    title: "مشاوره و انتخاب",
    description: "بررسی پروفایل و انتخاب دانشگاه‌های مناسب",
    icon: Search,
    duration: "۱-۲ هفته",
    details: ["تحلیل پروفایل تحصیلی", "انتخاب ۵-۱۰ دانشگاه", "بررسی شرایط پذیرش", "تعیین استراتژی درخواست"],
  },
  {
    step: 2,
    title: "تهیه مدارک",
    description: "جمع‌آوری و آماده‌سازی تمام مدارک",
    icon: FileText,
    duration: "۲-۳ هفته",
    details: ["ترجمه و تصدیق مدارک", "تهیه ریز نمرات", "گواهی‌نامه‌های زبان", "مدارک مالی"],
  },
  {
    step: 3,
    title: "نگارش متون",
    description: "نوشتن انگیزه‌نامه و CV",
    icon: Edit,
    duration: "۱-۲ هفته",
    details: ["نگارش انگیزه‌نامه", "تهیه CV آکادمیک", "نامه‌های توضیحی", "ویرایش و بهینه‌سازی"],
  },
  {
    step: 4,
    title: "ارسال درخواست",
    description: "تکمیل فرم‌ها و ارسال درخواست‌ها",
    icon: Send,
    duration: "۱ هفته",
    details: ["تکمیل فرم‌های آنلاین", "آپلود مدارک", "پرداخت هزینه‌ها", "ارسال درخواست‌ها"],
  },
  {
    step: 5,
    title: "پیگیری و پذیرش",
    description: "پیگیری درخواست‌ها تا دریافت پذیرش",
    icon: CheckCircle,
    duration: "۲-۶ ماه",
    details: ["پیگیری وضعیت درخواست", "پاسخ به سوالات دانشگاه", "مذاکره بورسیه", "تصمیم‌گیری نهایی"],
  },
]

export function ApplicationProcess() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#02153D] mb-4">فرآیند درخواست تحصیلی</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">مراحل کامل درخواست تحصیلی از ابتدا تا دریافت پذیرش</p>
        </div>

        <div className="space-y-8">
          {processSteps.map((step, index) => (
            <div key={step.step} className="relative">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-[#FF6A5C] rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#02153D]">{step.title}</h3>
                        <p className="text-sm text-[#FF6A5C]">مدت زمان: {step.duration}</p>
                      </div>
                    </div>

                    <div className="lg:col-span-2">
                      <p className="text-gray-700 mb-4">{step.description}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {step.details.map((detail) => (
                          <div key={detail} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-gray-600">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <div className="w-20 h-20 bg-[#02153D]/10 rounded-full flex items-center justify-center">
                        <step.icon className="h-10 w-10 text-[#02153D]" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Arrow for next step */}
              {index < processSteps.length - 1 && (
                <div className="flex justify-center my-4">
                  <div className="w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-[#FF6A5C]"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
