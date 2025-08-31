import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, Award, Globe } from "lucide-react"

const stats = [
  {
    icon: TrendingUp,
    value: "۹۲%",
    label: "نرخ موفقیت پذیرش",
    description: "از کل درخواست‌های ارسالی",
  },
  {
    icon: Users,
    value: "۱۵۰۰+",
    label: "دانشجوی موفق",
    description: "در ۵ سال گذشته",
  },
  {
    icon: Award,
    value: "۸۵%",
    label: "دریافت بورسیه",
    description: "از دانشجویان پذیرفته شده",
  },
  {
    icon: Globe,
    value: "۲۵+",
    label: "کشور مقصد",
    description: "در سراسر جهان",
  },
]

const successStories = [
  {
    name: "رضا احمدی",
    university: "دانشگاه MIT",
    program: "کارشناسی ارشد مهندسی کامپیوتر",
    scholarship: "بورسیه کامل",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "فاطمه کریمی",
    university: "دانشگاه آکسفورد",
    program: "دکترای پزشکی",
    scholarship: "بورسیه ۷۰%",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "علی نوری",
    university: "دانشگاه تورنتو",
    program: "کارشناسی ارشد MBA",
    scholarship: "بورسیه ۵۰%",
    image: "/placeholder.svg?height=80&width=80",
  },
]

export function ApplicationSuccess() {
  return (
    <section className="py-20 bg-[#02153D]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">آمار موفقیت ما</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">نتایج درخشان دانشجویانی که با ما به اهدافشان رسیدند</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat) => (
            <Card key={stat.label} className="bg-white/10 backdrop-blur-sm border-0 text-white text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#FF6A5C] rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-[#FF6A5C] mb-2">{stat.value}</div>
                <div className="text-lg font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-white/80">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Stories */}
        <div>
          <h3 className="text-2xl font-bold text-white text-center mb-8">داستان‌های موفقیت</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story) => (
              <Card key={story.name} className="bg-white/10 backdrop-blur-sm border-0 text-white">
                <CardContent className="p-6 text-center">
                  <img
                    src={story.image || "/placeholder.svg"}
                    alt={story.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h4 className="text-lg font-bold mb-2">{story.name}</h4>
                  <p className="text-[#FF6A5C] font-semibold mb-1">{story.university}</p>
                  <p className="text-sm text-white/80 mb-2">{story.program}</p>
                  <div className="inline-block bg-[#FF6A5C] text-white px-3 py-1 rounded-full text-xs">
                    {story.scholarship}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
