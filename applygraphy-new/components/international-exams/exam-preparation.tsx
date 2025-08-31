import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Users, Clock, Award, Target, CheckCircle } from "lucide-react"

export function ExamPreparation() {
  const preparationMethods = [
    {
      title: "کلاس‌های حضوری",
      description: "آموزش در کلاس‌های کوچک با حداکثر ۸ نفر",
      icon: <Users className="h-8 w-8" />,
      features: ["تعامل مستقیم با استاد", "حل تمرین گروهی", "بازخورد فوری", "محیط انگیزشی"],
      duration: "۳ ماه",
      sessions: "۲۴ جلسه",
      price: "۱۲,۰۰۰,۰۰۰ تومان",
    },
    {
      title: "کلاس‌های آنلاین",
      description: "آموزش زنده از طریق پلتفرم آنلاین",
      icon: <BookOpen className="h-8 w-8" />,
      features: ["انعطاف‌پذیری زمانی", "ضبط جلسات", "دسترسی از هر مکان", "هزینه کمتر"],
      duration: "۳ ماه",
      sessions: "۲۴ جلسه",
      price: "۸,۰۰۰,۰۰۰ تومان",
    },
    {
      title: "آموزش خصوصی",
      description: "آموزش یک به یک متناسب با نیاز شما",
      icon: <Target className="h-8 w-8" />,
      features: ["برنامه شخصی‌سازی شده", "پیشرفت سریع‌تر", "انعطاف کامل زمانی", "تمرکز روی نقاط ضعف"],
      duration: "۲ ماه",
      sessions: "۲۰ جلسه",
      price: "۱۸,۰۰۰,۰۰۰ تومان",
    },
    {
      title: "دوره فشرده",
      description: "آمادگی سریع در کمترین زمان ممکن",
      icon: <Clock className="h-8 w-8" />,
      features: ["آموزش متمرکز", "تکنیک‌های سریع", "تست‌های مکرر", "نتیجه در کوتاه‌مدت"],
      duration: "۱ ماه",
      sessions: "۲۰ جلسه",
      price: "۱۵,۰۰۰,۰۰۰ تومان",
    },
  ]

  const studyPlan = [
    {
      phase: "ارزیابی اولیه",
      duration: "هفته ۱",
      description: "تعیین سطح فعلی و نقاط قوت و ضعف",
      tasks: ["آزمون تعیین سطح", "تحلیل نیازها", "تنظیم اهداف", "طراحی برنامه شخصی"],
    },
    {
      phase: "یادگیری مبانی",
      duration: "هفته ۲-۶",
      description: "آموزش مفاهیم پایه و استراتژی‌های کلی",
      tasks: ["آشنایی با ساختار آزمون", "یادگیری تکنیک‌های پاسخ‌دهی", "تقویت مهارت‌های پایه", "تمرین‌های هدفمند"],
    },
    {
      phase: "تمرین عملی",
      duration: "هفته ۷-۱۰",
      description: "حل تست‌های واقعی و تمرین‌های تخصصی",
      tasks: ["حل آزمون‌های نمونه", "تحلیل اشتباهات", "تمرین تایم منجمنت", "تقویت نقاط ضعف"],
    },
    {
      phase: "آمادگی نهایی",
      duration: "هفته ۱۱-۱۲",
      description: "شبیه‌سازی شرایط واقعی آزمون",
      tasks: ["آزمون‌های شبیه‌ساز", "مرور نکات کلیدی", "کنترل استرس", "آمادگی روز آزمون"],
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Preparation Methods */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#02153D] mb-4">روش‌های آمادگی</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              بر اساس شرایط و نیازهای خود، بهترین روش آمادگی را انتخاب کنید
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {preparationMethods.map((method, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-[#FF6A5C]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#FF6A5C]">
                    {method.icon}
                  </div>
                  <CardTitle className="text-xl text-[#02153D] mb-2">{method.title}</CardTitle>
                  <p className="text-gray-600 text-sm">{method.description}</p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {method.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-[#FF6A5C]" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4 space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">مدت دوره:</span>
                      <span className="font-medium">{method.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">تعداد جلسات:</span>
                      <span className="font-medium">{method.sessions}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">هزینه:</span>
                      <span className="font-bold text-[#FF6A5C]">{method.price}</span>
                    </div>
                  </div>

                  <Button className="w-full bg-[#FF6A5C] hover:bg-[#FF6A5C]/90 text-white">انتخاب این روش</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Study Plan */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#02153D] mb-4">برنامه مطالعاتی</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">برنامه گام به گام برای آمادگی موثر و هدفمند</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {studyPlan.map((phase, index) => (
              <Card key={index} className="relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#02153D] to-[#FF6A5C]"></div>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-[#FF6A5C] rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <CardTitle className="text-lg text-[#02153D]">{phase.phase}</CardTitle>
                      <p className="text-sm text-[#FF6A5C] font-medium">{phase.duration}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">{phase.description}</p>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-2">
                    {phase.tasks.map((task, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-[#FF6A5C] rounded-full"></div>
                        <span className="text-gray-600">{task}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Success Guarantee */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-[#02153D] to-[#FF6A5C] text-white">
            <CardContent className="p-8 text-center">
              <Award className="h-16 w-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">ضمانت موفقیت</h3>
              <p className="text-lg mb-6 opacity-90">
                اگر پس از تکمیل دوره، نمره مورد نظر خود را کسب نکنید، ۵۰٪ هزینه دوره را بازگردانی می‌کنیم
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2">۹۵٪</div>
                  <div className="text-sm opacity-80">نرخ موفقیت دانشجویان</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">۲۰۰۰+</div>
                  <div className="text-sm opacity-80">دانشجوی موفق</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">۱۰+</div>
                  <div className="text-sm opacity-80">سال تجربه</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
