import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { MapPin, DollarSign, Calendar, Info } from "lucide-react"
import Link from "next/link"

const matchResults = [
  {
    id: "toronto-cs",
    university: "دانشگاه تورنتو",
    program: "کارشناسی ارشد علوم کامپیوتر",
    country: "کانادا",
    city: "تورنتو",
    matchScore: 95,
    tuition: 30000,
    currency: "دلار کانادا",
    deadline: "۱۰ بهمن ۱۴۰۳",
    logo: "/placeholder.svg?height=48&width=48",
    reasoning:
      "تطابق عالی با رشته تحصیلی و معدل شما. برنامه‌های تحقیقاتی قوی در زمینه هوش مصنوعی که با اهداف شغلی شما همخوانی دارد.",
  },
  {
    id: "eth-cs",
    university: "دانشگاه ETH زوریخ",
    program: "کارشناسی ارشد مهندسی کامپیوتر",
    country: "سوئیس",
    city: "زوریخ",
    matchScore: 92,
    tuition: 1500,
    currency: "فرانک سوئیس",
    deadline: "۳۰ دی ۱۴۰۳",
    logo: "/placeholder.svg?height=48&width=48",
    reasoning:
      "هزینه تحصیل پایین و کیفیت بالای آموزشی. تناسب خوب با سوابق تحصیلی شما و فرصت‌های شغلی عالی پس از فارغ‌التحصیلی.",
  },
  {
    id: "melbourne-cs",
    university: "دانشگاه ملبورن",
    program: "کارشناسی ارشد فناوری اطلاعات",
    country: "استرالیا",
    city: "ملبورن",
    matchScore: 88,
    tuition: 35000,
    currency: "دلار استرالیا",
    deadline: "۲۵ بهمن ۱۴۰۳",
    logo: "/placeholder.svg?height=48&width=48",
    reasoning:
      "برنامه درسی منعطف و فرصت‌های کارآموزی متعدد. امکان اقامت پس از تحصیل و بازار کار مناسب در زمینه تخصصی شما.",
  },
]

export function MatchingResults() {
  return (
    <div className="space-y-6">
      {matchResults.map((result) => (
        <Card key={result.id} className="hover:shadow-lg transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-3/4">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center">
                    <img
                      src={result.logo || "/placeholder.svg"}
                      alt={`لوگوی ${result.university}`}
                      className="max-h-10"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#02153D]">{result.program}</h3>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin className="h-4 w-4 ml-1" />
                      {result.university} | {result.country}، {result.city}
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm">
                    <DollarSign className="h-4 w-4 ml-2 text-[#FF6A5C]" />
                    <span className="text-gray-700">
                      شهریه سالانه: {result.tuition.toLocaleString()} {result.currency}
                    </span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 ml-2 text-[#FF6A5C]" />
                    <span className="text-gray-700">مهلت درخواست: {result.deadline}</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <div className="flex items-start gap-2">
                    <Info className="h-5 w-5 text-[#02153D] mt-0.5" />
                    <p className="text-gray-700 text-sm">{result.reasoning}</p>
                  </div>
                </div>
              </div>

              <div className="md:w-1/4 flex flex-col items-center justify-center border-t md:border-t-0 md:border-r pt-4 md:pt-0 md:pr-6">
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-[#FF6A5C] mb-2">{result.matchScore}%</div>
                  <div className="text-sm text-gray-600">درصد تطبیق</div>
                </div>
                <Progress value={result.matchScore} className="h-2 mb-4" />
                <Button asChild className="w-full bg-[#02153D] hover:bg-[#02153D]/90 text-white">
                  <Link href={`/universities/${result.id}`}>مشاهده جزئیات</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
