import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Search, Edit, CheckCircle, Users, Calendar } from "lucide-react"

const services = [
  {
    title: "انتخاب دانشگاه و رشته",
    description: "مشاوره تخصصی برای انتخاب بهترین دانشگاه و رشته متناسب با پروفایل شما",
    icon: Search,
    features: ["بررسی پروفایل تحصیلی", "تطبیق با دانشگاه‌ها", "مشاوره رشته", "بررسی شانس پذیرش"],
  },
  {
    title: "تهیه مدارک",
    description: "کمک در تهیه و تکمیل تمام مدارک مورد نیاز برای درخواست",
    icon: FileText,
    features: ["ترجمه مدارک", "تصدیق اسناد", "تهیه ریز نمرات", "گواهی‌نامه‌ها"],
  },
  {
    title: "نگارش انگیزه‌نامه",
    description: "نوشتن انگیزه‌نامه حرفه‌ای و تاثیرگذار برای افزایش شانس پذیرش",
    icon: Edit,
    features: ["نگارش اختصاصی", "ویرایش متن", "بهینه‌سازی محتوا", "چندین نسخه"],
  },
  {
    title: "مدیریت توصیه‌نامه",
    description: "هماهنگی و پیگیری دریافت توصیه‌نامه از اساتید و مراجع",
    icon: Users,
    features: ["انتخاب مراجع", "هماهنگی با اساتید", "پیگیری ارسال", "کنترل کیفیت"],
  },
  {
    title: "تکمیل فرم‌ها",
    description: "تکمیل دقیق و حرفه‌ای فرم‌های درخواست آنلاین دانشگاه‌ها",
    icon: CheckCircle,
    features: ["تکمیل فرم‌ها", "بررسی اطلاعات", "ارسال درخواست", "پیگیری وضعیت"],
  },
  {
    title: "مدیریت مهلت‌ها",
    description: "پیگیری و یادآوری تمام مهلت‌های مهم در فرآیند درخواست",
    icon: Calendar,
    features: ["تقویم مهلت‌ها", "یادآوری خودکار", "برنامه‌ریزی", "پیگیری مراحل"],
  },
]

export function ApplicationServices() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#02153D] mb-4">خدمات درخواست تحصیلی</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">خدمات جامع برای موفقیت در درخواست‌های تحصیلی</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              className="hover:shadow-xl transition-all duration-300 border-r-4 border-r-[#FF6A5C]"
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#FF6A5C]/10 rounded-full flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-[#FF6A5C]" />
                  </div>
                  <CardTitle className="text-lg text-[#02153D]">{service.title}</CardTitle>
                </div>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
