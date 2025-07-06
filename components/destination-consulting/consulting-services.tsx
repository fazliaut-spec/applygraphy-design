import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Home, Car, CreditCard, Users, Phone, Building, MapPin } from "lucide-react"

const services = [
  {
    title: "یافتن کار",
    description: "کمک در جستجوی شغل مناسب و آمادگی برای مصاحبه‌های کاری",
    icon: Briefcase,
    features: ["جستجوی فرصت‌های شغلی", "تهیه رزومه محلی", "آمادگی مصاحبه", "شبکه‌سازی حرفه‌ای"],
  },
  {
    title: "پیدا کردن مسکن",
    description: "راهنمایی برای یافتن اسکان مناسب و امن در کشور مقصد",
    icon: Home,
    features: ["جستجوی خانه و آپارتمان", "بررسی قراردادهای اجاره", "راهنمایی محله‌ها", "کمک در انتقال"],
  },
  {
    title: "خرید خودرو",
    description: "مشاوره خرید خودرو، بیمه و مسائل حقوقی مربوطه",
    icon: Car,
    features: ["انتخاب خودروی مناسب", "بررسی قیمت‌ها", "کمک در خرید", "ترتیب بیمه"],
  },
  {
    title: "گرفتن گواهینامه",
    description: "راهنمایی فرآیند دریافت گواهینامه رانندگی در کشور جدید",
    icon: CreditCard,
    features: ["آمادگی آزمون تئوری", "تمرین رانندگی", "ثبت‌نام آزمون", "ترجمه گواهینامه"],
  },
  {
    title: "باز کردن حساب بانکی",
    description: "کمک در انتخاب بانک و باز کردن حساب بانکی",
    icon: Building,
    features: ["انتخاب بانک مناسب", "تهیه مدارک لازم", "درخواست کارت اعتباری", "راهنمایی خدمات بانکی"],
  },
  {
    title: "آشنایی با فرهنگ محلی",
    description: "راهنمایی برای سازگاری با فرهنگ و آداب و رسوم کشور جدید",
    icon: Users,
    features: ["آموزش آداب اجتماعی", "راهنمایی خرید", "معرفی مراکز تفریحی", "کمک در شبکه‌سازی"],
  },
  {
    title: "خدمات اضطراری",
    description: "پشتیبانی ۲۴ ساعته برای مواقع اضطراری و مشکلات فوری",
    icon: Phone,
    features: ["پشتیبانی ۲۴/۷", "کمک در مواقع اضطراری", "ترجمه فوری", "راهنمایی قانونی"],
  },
  {
    title: "راهنمایی شهری",
    description: "آشنایی با شهر، حمل و نقل عمومی و مراکز مهم",
    icon: MapPin,
    features: ["تور شهری", "راهنمای حمل و نقل", "معرفی مراکز خرید", "نقشه و مسیریابی"],
  },
]

export function ConsultingServices() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#02153D] mb-4">خدمات مشاوره مقصد</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">خدمات جامع برای شروع زندگی جدید در کشور مقصد</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                      <div className="w-2 h-2 bg-[#FF6A5C] rounded-full flex-shrink-0" />
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
