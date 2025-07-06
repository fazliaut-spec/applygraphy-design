import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Users, DollarSign, Clock } from "lucide-react"
import Link from "next/link"

const countries = [
  {
    id: "canada",
    name: "کانادا",
    flag: "🇨🇦",
    description: "کشوری با فرصت‌های شغلی عالی و سیستم مهاجرتی دوستانه",
    image: "/placeholder.svg?height=200&width=300",
    services: ["یافتن کار", "اسکان", "گواهینامه", "حساب بانکی"],
    avgSalary: "$50,000 - $80,000",
    population: "38 میلیون نفر",
    consultingTime: "3-6 ماه",
  },
  {
    id: "germany",
    name: "آلمان",
    flag: "🇩🇪",
    description: "قدرت اقتصادی اروپا با فرصت‌های شغلی در صنایع مختلف",
    image: "/placeholder.svg?height=200&width=300",
    services: ["یافتن کار", "اسکان", "گواهینامه", "آموزش زبان"],
    avgSalary: "€40,000 - €70,000",
    population: "83 میلیون نفر",
    consultingTime: "2-4 ماه",
  },
  {
    id: "australia",
    name: "استرالیا",
    flag: "🇦🇺",
    description: "کشوری با کیفیت زندگی بالا و فرصت‌های شغلی متنوع",
    image: "/placeholder.svg?height=200&width=300",
    services: ["یافتن کار", "اسکان", "گواهینامه", "حساب بانکی"],
    avgSalary: "AUD 60,000 - 90,000",
    population: "26 میلیون نفر",
    consultingTime: "3-5 ماه",
  },
  {
    id: "uk",
    name: "انگلستان",
    flag: "🇬🇧",
    description: "مرکز مالی جهان با فرصت‌های شغلی در بخش‌های مختلف",
    image: "/placeholder.svg?height=200&width=300",
    services: ["یافتن کار", "اسکان", "حساب بانکی", "شبکه‌سازی"],
    avgSalary: "£30,000 - £60,000",
    population: "67 میلیون نفر",
    consultingTime: "2-4 ماه",
  },
]

export function ConsultingCountries() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#02153D] mb-4">کشورهای تحت پوشش</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">خدمات مشاوره مقصد برای کشورهای مختلف با تیم‌های محلی</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {countries.map((country) => (
            <Card key={country.id} className="hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: `url(${country.image})` }}>
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute top-4 right-4 text-4xl">{country.flag}</div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold">{country.name}</h3>
                </div>
              </div>

              <CardContent className="p-6">
                <p className="text-gray-600 mb-6">{country.description}</p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <DollarSign className="h-5 w-5 text-[#FF6A5C]" />
                    <div>
                      <span className="font-medium">متوسط حقوق: </span>
                      <span className="text-gray-700">{country.avgSalary}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-[#FF6A5C]" />
                    <div>
                      <span className="font-medium">جمعیت: </span>
                      <span className="text-gray-700">{country.population}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-[#FF6A5C]" />
                    <div>
                      <span className="font-medium">مدت مشاوره: </span>
                      <span className="text-gray-700">{country.consultingTime}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-[#02153D] mb-2">خدمات ارائه شده:</h4>
                  <div className="flex flex-wrap gap-2">
                    {country.services.map((service) => (
                      <span key={service} className="px-3 py-1 bg-[#FF6A5C]/10 text-[#FF6A5C] rounded-full text-sm">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <Button asChild className="w-full bg-[#02153D] hover:bg-[#02153D]/90 text-white">
                  <Link href={`/destination-consulting/${country.id}`}>
                    <MapPin className="mr-2 h-4 w-4" />
                    مشاوره {country.name}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
