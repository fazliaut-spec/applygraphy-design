import { Card, CardContent } from "@/components/ui/card"
import { Plane, Home, Briefcase, Users, CheckCircle } from "lucide-react"

const processSteps = [
  {
    step: 1,
    title: "ورود و اسکان اولیه",
    description: "کمک در فرودگاه، انتقال به اسکان موقت و تنظیمات اولیه",
    icon: Plane,
    duration: "هفته اول",
    activities: ["استقبال در فرودگاه", "انتقال به اسکان", "راهنمایی اولیه شهر", "خرید ضروریات اولیه"],
  },
  {
    step: 2,
    title: "تنظیمات اداری",
    description: "انجام کارهای اداری ضروری و ثبت‌نام در سیستم‌های محلی",
    icon: CheckCircle,
    duration: "هفته دوم",
    activities: ["ثبت‌نام در شهرداری", "باز کردن حساب بانکی", "دریافت کارت SIM", "ثبت‌نام در بیمه درمانی"],
  },
  {
    step: 3,
    title: "یافتن اسکان دائمی",
    description: "جستجو و انتخاب مسکن مناسب برای اقامت طولانی‌مدت",
    icon: Home,
    duration: "هفته سوم و چهارم",
    activities: ["جستجوی خانه مناسب", "بازدید از املاک", "مذاکره قرارداد اجاره", "انتقال به خانه جدید"],
  },
  {
    step: 4,
    title: "جستجوی کار",
    description: "کمک در یافتن فرصت‌های شغلی و آمادگی برای بازار کار",
    icon: Briefcase,
    duration: "ماه دوم",
    activities: ["تهیه رزومه محلی", "جستجوی فرصت‌های شغلی", "آمادگی مصاحبه", "شبکه‌سازی حرفه‌ای"],
  },
  {
    step: 5,
    title: "ادغام اجتماعی",
    description: "کمک در سازگاری با فرهنگ محلی و ایجاد روابط اجتماعی",
    icon: Users,
    duration: "ماه سوم و بعد",
    activities: ["آشنایی با فرهنگ محلی", "شرکت در فعالیت‌های اجتماعی", "یادگیری زبان محلی", "ایجاد شبکه دوستان"],
  },
]

export function ConsultingProcess() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#02153D] mb-4">فرآیند مشاوره مقصد</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            مراحل کامل کمک به شما از ورود به کشور تا ادغام کامل در جامعه جدید
          </p>
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
                        <p className="text-sm text-[#FF6A5C]">{step.duration}</p>
                      </div>
                    </div>

                    <div className="lg:col-span-2">
                      <p className="text-gray-700 mb-4">{step.description}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {step.activities.map((activity) => (
                          <div key={activity} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-gray-600">{activity}</span>
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
