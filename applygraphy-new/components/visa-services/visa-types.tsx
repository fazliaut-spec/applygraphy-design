import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, GraduationCap, Users, Briefcase } from "lucide-react"
import Link from "next/link"

const visaTypes = [
  {
    id: "student",
    title: "ویزای دانشجویی",
    description: "برای تحصیل در دانشگاه‌ها و مؤسسات آموزشی خارج از کشور",
    icon: GraduationCap,
    countries: ["آمریکا (F-1)", "کانادا (Study Permit)", "انگلستان (Tier 4)", "استرالیا (Student Visa)"],
    link: "/visa-services/student",
  },
  {
    id: "language",
    title: "ویزای زبان",
    description: "برای شرکت در دوره‌های زبان در کشورهای خارجی",
    icon: BookOpen,
    countries: ["آلمان", "فرانسه", "ایتالیا", "اسپانیا"],
    link: "/visa-services/language",
  },
  {
    id: "exchange",
    title: "ویزای تبادل دانشجویی",
    description: "برای برنامه‌های تبادل دانشجویی و فرصت‌های مطالعاتی کوتاه‌مدت",
    icon: Users,
    countries: ["آمریکا (J-1)", "اتحادیه اروپا (Erasmus+)", "کانادا", "ژاپن"],
    link: "/visa-services/exchange",
  },
  {
    id: "work",
    title: "ویزای کار پس از تحصیل",
    description: "برای اقامت و کار در کشور محل تحصیل پس از فارغ‌التحصیلی",
    icon: Briefcase,
    countries: ["کانادا (PGWP)", "انگلستان (PSW)", "استرالیا (485)", "نیوزیلند"],
    link: "/visa-services/work",
  },
]

export function VisaTypes() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#02153D] mb-4">انواع ویزای تحصیلی</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            آشنایی با انواع ویزاهای تحصیلی و شرایط اخذ آن‌ها برای کشورهای مختلف
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visaTypes.map((visa) => (
            <Card key={visa.id} className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#FF6A5C]/10 rounded-full flex items-center justify-center">
                    <visa.icon className="h-6 w-6 text-[#FF6A5C]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#02153D]">{visa.title}</h3>
                </div>

                <p className="text-gray-600 mb-6">{visa.description}</p>

                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <h4 className="font-semibold text-[#02153D] mb-2">کشورهای اصلی:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {visa.countries.map((country, index) => (
                      <li key={index}>{country}</li>
                    ))}
                  </ul>
                </div>

                <Button asChild className="w-full bg-[#02153D] hover:bg-[#02153D]/90 text-white">
                  <Link href={visa.link}>اطلاعات بیشتر</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
