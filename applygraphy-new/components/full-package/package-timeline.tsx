import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock } from "lucide-react"

export function PackageTimeline() {
  const timelineSteps = [
    {
      phase: "مرحله ۱",
      title: "مشاوره و برنامه‌ریزی",
      duration: "۱-۲ هفته",
      description: "بررسی پروفایل، تعیین اهداف و انتخاب دانشگاه‌های مناسب",
      tasks: [
        "جلسه مشاوره تخصصی",
        "تحلیل پروفایل تحصیلی و شغلی",
        "انتخاب کشور و دانشگاه‌های هدف",
        "تعیین برنامه زمانی کلی",
      ],
    },
    {
      phase: "مرحله ۲",
      title: "آماده‌سازی مدارک",
      duration: "۴-۶ هفته",
      description: "تهیه و آماده‌سازی تمام مدارک مورد نیاز برای اپلای",
      tasks: [
        "نگارش رزومه و انگیزه‌نامه",
        "دریافت توصیه‌نامه‌ها",
        "ترجمه و تأیید مدارک",
        "آماده‌سازی پورتفولیو (در صورت نیاز)",
      ],
    },
    {
      phase: "مرحله ۳",
      title: "اپلای و پیگیری",
      duration: "۲-۴ ماه",
      description: "ارسال درخواست‌ها و پیگیری روند بررسی دانشگاه‌ها",
      tasks: [
        "تکمیل و ارسال فرم‌های اپلای",
        "پیگیری مستمر روند بررسی",
        "مذاکره برای دریافت بورسیه",
        "دریافت نامه‌های پذیرش",
      ],
    },
    {
      phase: "مرحله ۴",
      title: "ویزا و آمادگی سفر",
      duration: "۶-۸ هفته",
      description: "اقدامات مربوط به ویزا و آماده‌سازی برای سفر",
      tasks: ["تکمیل فرم‌های درخواست ویزا", "آماده‌سازی مدارک مالی", "آمادگی برای مصاحبه ویزا", "رزرو بلیط و بیمه"],
    },
    {
      phase: "مرحله ۵",
      title: "سفر و استقرار",
      duration: "۲-۴ هفته",
      description: "سفر به کشور مقصد و کمک به استقرار اولیه",
      tasks: ["استقبال در فرودگاه", "کمک به یافتن اسکان", "افتتاح حساب بانکی", "آشنایی با محیط دانشگاه"],
    },
    {
      phase: "مرحله ۶",
      title: "پشتیبانی مستمر",
      duration: "۶ ماه اول",
      description: "پشتیبانی و راهنمایی در ماه‌های اول تحصیل",
      tasks: ["پشتیبانی ۲۴/۷", "حل مشکلات اولیه", "راهنمایی ثبت‌نام دروس", "مشاوره تمدید ویزا"],
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#02153D] mb-12 text-center">مراحل اجرای پکیج کامل</h2>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {timelineSteps.map((step, index) => (
              <div key={index} className="relative">
                {/* Timeline line */}
                {index < timelineSteps.length - 1 && (
                  <div className="absolute right-6 top-16 w-0.5 h-24 bg-gray-300"></div>
                )}

                <Card className="border-r-4 border-r-[#FF6A5C]">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-[#FF6A5C] rounded-full flex items-center justify-center text-white font-bold">
                          {index + 1}
                        </div>
                      </div>

                      <div className="flex-grow">
                        <div className="flex items-center gap-4 mb-2">
                          <span className="text-sm font-medium text-[#FF6A5C] bg-[#FF6A5C]/10 px-2 py-1 rounded">
                            {step.phase}
                          </span>
                          <div className="flex items-center text-gray-600">
                            <Clock className="h-4 w-4 ml-1" />
                            <span className="text-sm">{step.duration}</span>
                          </div>
                        </div>

                        <h3 className="text-xl font-bold text-[#02153D] mb-2">{step.title}</h3>
                        <p className="text-gray-700 mb-4">{step.description}</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {step.tasks.map((task, taskIndex) => (
                            <div key={taskIndex} className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-[#FF6A5C] ml-2" />
                              <span className="text-sm text-gray-700">{task}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
