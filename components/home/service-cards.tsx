import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, FileText, Plane, Building, Package, MapPin, Search, Brain } from "lucide-react"
import Link from "next/link"

const services = [
  {
    title: "جستجوی دانشگاه‌های جهانی",
    description: "جستجو در بین ۱۰,۰۰۰+ برنامه از ۵۰+ کشور",
    icon: Search,
    link: "/universities",
    color: "from-[#02153D] to-[#02153D]/80",
  },
  {
    title: "تطبیق هوش مصنوعی",
    description: "پیشنهاد برنامه‌های متناسب با پروفایل شما",
    icon: Brain,
    link: "/ai-matching",
    color: "from-[#FF6A5C] to-[#FF6A5C]/80",
  },
  {
    title: "دوره‌های زبان",
    description: "آمادگی آزمون‌های IELTS، TOEFL و GRE",
    icon: BookOpen,
    link: "/language-courses",
    color: "from-[#02153D] to-[#FF6A5C]",
  },
  {
    title: "آزمون‌های بین‌المللی",
    description: "IMAT، SAT، TOLC و سایر آزمون‌ها",
    icon: FileText,
    link: "/international-exams",
    color: "from-[#FF6A5C] to-[#02153D]",
  },
  {
    title: "خدمات ویزا",
    description: "مشاوره و اخذ ویزای تحصیلی",
    icon: Plane,
    link: "/visa-services",
    color: "from-[#02153D] to-[#02153D]/60",
  },
  {
    title: "درخواست تحصیلی",
    description: "ثبت‌نام در دانشگاه‌های معتبر جهان",
    icon: Building,
    link: "/academic-applications",
    color: "from-[#FF6A5C] to-[#FF6A5C]/60",
  },
  {
    title: "پکیج کامل",
    description: "خدمات جامع از ابتدا تا انتها",
    icon: Package,
    link: "/full-package",
    color: "from-[#02153D] to-[#FF6A5C]",
  },
  {
    title: "مشاوره مقصد",
    description: "کمک در زندگی در کشور جدید",
    icon: MapPin,
    link: "/destination-consulting",
    color: "from-[#FF6A5C] to-[#02153D]",
  },
]

export function ServiceCards() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#02153D] mb-4">خدمات ما</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-sans font-bold">فقط یک قدم تا پذیرش دانشگاه شما مانده است.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${service.color}`} />
              <CardHeader className="text-center pb-4">
                <div
                  className={`mx-auto w-16 h-16 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-[#02153D] text-sm">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-6 leading-relaxed">{service.description}</CardDescription>
                <Button asChild className="bg-[#FF6A5C] hover:bg-[#FF6A5C]/90 text-white">
                  <Link href={service.link}>اطلاعات بیشتر</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
