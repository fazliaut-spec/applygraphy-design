import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Calendar, Users } from "lucide-react"

const courses = [
  {
    name: "IELTS مقدماتی",
    level: "مبتدی",
    duration: "۸ هفته",
    schedule: "شنبه و دوشنبه ۱۶-۱۸",
    capacity: "۸ نفر",
    startDate: "۱۵ آذر ۱۴۰۳",
    price: "۲,۵۰۰,۰۰۰ تومان",
    color: "bg-green-100 text-green-800",
  },
  {
    name: "IELTS پیشرفته",
    level: "متوسط به بالا",
    duration: "۶ هفته",
    schedule: "یکشنبه و سه‌شنبه ۱۸-۲۰",
    capacity: "۶ نفر",
    startDate: "۲۰ آذر ۱۴۰۳",
    price: "۳,۰۰۰,۰۰۰ تومان",
    color: "bg-blue-100 text-blue-800",
  },
  {
    name: "TOEFL آمادگی",
    level: "متوسط",
    duration: "۱۰ هفته",
    schedule: "چهارشنبه و پنج‌شنبه ۱۷-۱۹",
    capacity: "۸ نفر",
    startDate: "۱ دی ۱۴۰۳",
    price: "۳,۵۰۰,۰۰۰ تومان",
    color: "bg-purple-100 text-purple-800",
  },
  {
    name: "GRE کامل",
    level: "پیشرفته",
    duration: "۱۲ هفته",
    schedule: "جمعه ۱۴-۱۸",
    capacity: "۶ نفر",
    startDate: "۵ دی ۱۴۰۳",
    price: "۴,۰۰۰,۰۰۰ تومان",
    color: "bg-red-100 text-red-800",
  },
]

export function CourseSchedule() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#02153D] mb-4">برنامه دوره‌ها</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">دوره‌های مختلف متناسب با سطح و نیاز شما</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course) => (
            <Card key={course.name} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl text-[#02153D]">{course.name}</CardTitle>
                  <Badge className={course.color}>{course.level}</Badge>
                </div>
                <p className="text-2xl font-bold text-[#FF6A5C]">{course.price}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-700">مدت: {course.duration}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-700">زمان: {course.schedule}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-700">ظرفیت: {course.capacity}</span>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-sm text-gray-600 mb-2">شروع دوره:</p>
                  <p className="font-semibold text-[#02153D]">{course.startDate}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
