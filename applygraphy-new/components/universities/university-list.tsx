import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, GraduationCap, DollarSign, Calendar } from "lucide-react"
import Link from "next/link"

const universities = [
  {
    id: "oxford",
    name: "دانشگاه آکسفورد",
    country: "انگلستان",
    city: "آکسفورد",
    ranking: 5,
    tuition: 25000,
    currency: "پوند",
    programs: 200,
    deadline: "۱۵ دی ۱۴۰۳",
    image: "/placeholder.svg?height=160&width=320",
    logo: "/placeholder.svg?height=48&width=48",
    featured: true,
  },
  {
    id: "toronto",
    name: "دانشگاه تورنتو",
    country: "کانادا",
    city: "تورنتو",
    ranking: 32,
    tuition: 30000,
    currency: "دلار کانادا",
    programs: 180,
    deadline: "۱۰ بهمن ۱۴۰۳",
    image: "/placeholder.svg?height=160&width=320",
    logo: "/placeholder.svg?height=48&width=48",
    featured: false,
  },
  {
    id: "milan",
    name: "دانشگاه میلان",
    country: "ایتالیا",
    city: "میلان",
    ranking: 45,
    tuition: 3000,
    currency: "یورو",
    programs: 150,
    deadline: "۵ اسفند ۱۴۰۳",
    image: "/placeholder.svg?height=160&width=320",
    logo: "/placeholder.svg?height=48&width=48",
    featured: false,
  },
  {
    id: "harvard",
    name: "دانشگاه هاروارد",
    country: "ایالات متحده",
    city: "کمبریج",
    ranking: 1,
    tuition: 45000,
    currency: "دلار",
    programs: 250,
    deadline: "۲۰ آذر ۱۴۰۳",
    image: "/placeholder.svg?height=160&width=320",
    logo: "/placeholder.svg?height=48&width=48",
    featured: true,
  },
  {
    id: "eth",
    name: "دانشگاه ETH زوریخ",
    country: "سوئیس",
    city: "زوریخ",
    ranking: 15,
    tuition: 1500,
    currency: "فرانک سوئیس",
    programs: 120,
    deadline: "۳۰ دی ۱۴۰۳",
    image: "/placeholder.svg?height=160&width=320",
    logo: "/placeholder.svg?height=48&width=48",
    featured: false,
  },
  {
    id: "melbourne",
    name: "دانشگاه ملبورن",
    country: "استرالیا",
    city: "ملبورن",
    ranking: 38,
    tuition: 35000,
    currency: "دلار استرالیا",
    programs: 160,
    deadline: "۲۵ بهمن ۱۴۰۳",
    image: "/placeholder.svg?height=160&width=320",
    logo: "/placeholder.svg?height=48&width=48",
    featured: false,
  },
]

export function UniversityList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {universities.map((university) => (
        <Card key={university.id} className="hover:shadow-lg transition-all duration-300">
          <div className="h-40 bg-cover bg-center relative" style={{ backgroundImage: `url(${university.image})` }}>
            <div className="absolute bottom-0 left-0 bg-[#02153D] text-white px-3 py-1 text-sm">
              رتبه جهانی: {university.ranking}
            </div>
            {university.featured && (
              <Badge className="absolute top-3 right-3 bg-[#FF6A5C] hover:bg-[#FF6A5C]">ویژه</Badge>
            )}
          </div>
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-[#02153D] mb-1">{university.name}</h3>
                <div className="flex items-center text-gray-600 text-sm">
                  <MapPin className="h-4 w-4 ml-1" />
                  {university.country}، {university.city}
                </div>
              </div>
              <div className="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center">
                <img
                  src={university.logo || "/placeholder.svg"}
                  alt={`لوگوی ${university.name}`}
                  className="max-h-10"
                />
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center text-sm">
                <GraduationCap className="h-4 w-4 ml-2 text-[#FF6A5C]" />
                <span className="text-gray-700">{university.programs}+ برنامه تحصیلی</span>
              </div>
              <div className="flex items-center text-sm">
                <DollarSign className="h-4 w-4 ml-2 text-[#FF6A5C]" />
                <span className="text-gray-700">
                  شهریه سالانه: {university.tuition.toLocaleString()} {university.currency}
                </span>
              </div>
              <div className="flex items-center text-sm">
                <Calendar className="h-4 w-4 ml-2 text-[#FF6A5C]" />
                <span className="text-gray-700">مهلت درخواست: {university.deadline}</span>
              </div>
            </div>

            <Button asChild className="w-full bg-[#02153D] hover:bg-[#02153D]/90 text-white">
              <Link href={`/universities/${university.id}`}>مشاهده جزئیات</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
