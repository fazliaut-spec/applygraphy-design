import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users } from "lucide-react"

export function ExamSchedule() {
  const upcomingCourses = [
    {
      exam: "IELTS",
      type: "Academic",
      startDate: "۱۵ مهر ۱۴۰۲",
      endDate: "۱۵ دی ۱۴۰۲",
      schedule: "شنبه و دوشنبه ۱۶-۱۸",
      instructor: "دکتر سارا رضایی",
      capacity: 8,
      enrolled: 5,
      price: "۱۲,۰۰۰,۰۰۰",
      location: "کلاس ۱۰۱",
      status: "ثبت‌نام باز",
    },
    {
      exam: "TOEFL",
      type: "iBT",
      startDate: "۲۰ مهر ۱۴۰۲",
      endDate: "۲۰ دی ۱۴۰۲",
      schedule: "یکشنبه و سه‌شنبه ۱۴-۱۶",
      instructor: "دکتر علی محمدی",
      capacity: 8,
      enrolled: 3,
      price: "۱۰,۰۰۰,۰۰۰ تومان",
      location: "کلاس ۱۰۲",
      status: "ثبت‌نام باز",
    },
    {
      exam: "GRE",
      type: "General Test",
      startDate: "۱ آبان ۱۴۰۲",
      endDate: "۱ بهمن ۱۴۰۲",
      schedule: "چهارشنبه و پنج‌شنبه ۱۷-۱۹",
      instructor: "مهندس امیر حسینی",
      capacity: 6,
      enrolled: 4,
      price: "۱۵,۰۰۰,۰۰۰ تومان",
      location: "کلاس ۱۰۳",
      status: "ثبت‌نام باز",
    },
    {
      exam: "IMAT",
      type: "Medical",
      startDate: "۱۰ آبان ۱۴۰۲",
      endDate: "۱۰ اسفند ۱۴۰۲",
      schedule: "جمعه ۹-۱۲",
      instructor: "دکتر نیلوفر کریمی",
      capacity: 6,
      enrolled: 6,
      price: "۲۰,۰۰۰,۰۰۰ تومان",
      location: "کلاس ۱۰۴",
      status: "تکمیل ظرفیت",
    },
    {
      exam: "SAT",
      type: "Reasoning Test",
      startDate: "۱۵ آبان ۱۴۰۲",
      endDate: "۱۵ بهمن ۱۴۰۲",
      schedule: "شنبه ۱۰-۱۲",
      instructor: "دکتر سارا رضایی",
      capacity: 8,
      enrolled: 2,
      price: "۸,۰۰۰,۰۰۰ تومان",
      location: "کلاس ۱۰۵",
      status: "ثبت‌نام باز",
    },
    {
      exam: "TOLC",
      type: "Engineering",
      startDate: "۲۰ آبان ۱۴۰۲",
      endDate: "۲۰ دی ۱۴۰۲",
      schedule: "دوشنبه ۱۶-۱۸",
      instructor: "مهندس امیر حسینی",
      capacity: 8,
      enrolled: 1,
      price: "۶,۰۰۰,۰۰۰ تومان",
      location: "کلاس ۱۰۶",
      status: "ثبت‌نام باز",
    },
  ]

  const examDates = [
    {
      exam: "IELTS",
      dates: ["۲۵ آبان", "۹ آذر", "۲۳ آذر", "۶ دی"],
      registrationDeadline: "۲ هفته قبل از آزمون",
      fee: "۲۷۵ دلار",
    },
    {
      exam: "TOEFL",
      dates: ["۱۸ آبان", "۲ آذر", "۱۶ آذر", "۳۰ آذر"],
      registrationDeadline: "۳ روز قبل از آزمون",
      fee: "۲۴۵ دلار",
    },
    {
      exam: "GRE",
      dates: ["در تمام روزهای هفته", "رزرو آنلاین"],
      registrationDeadline: "حداقل ۱ روز قبل",
      fee: "۲۲۰ دلار",
    },
    {
      exam: "IMAT",
      dates: ["۱۴ شهریور ۱۴۰۳"],
      registrationDeadline: "تیر ۱۴۰۳",
      fee: "۱۰۰ یورو",
    },
    {
      exam: "SAT",
      dates: ["۱۲ آذر", "۱۴ اسفند", "۱۵ خرداد"],
      registrationDeadline: "۱ ماه قبل از آزمون",
      fee: "۱۰۴ دلار",
    },
    {
      exam: "TOLC",
      dates: ["آنلاین - در تمام سال"],
      registrationDeadline: "۵ روز قبل از آزمون",
      fee: "۳۰ یورو",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Upcoming Courses */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#02153D] mb-4">دوره‌های در حال برگزاری</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">در دوره‌های آمادگی آزمون‌های بین‌المللی ما شرکت کنید</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {upcomingCourses.map((course, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <Badge className="bg-[#FF6A5C] text-white">{course.exam}</Badge>
                      <span className="text-sm text-gray-600">{course.type}</span>
                    </div>
                    <Badge
                      variant={course.status === "ثبت‌نام باز" ? "default" : "secondary"}
                      className={course.status === "ثبت‌نام باز" ? "bg-green-500" : "bg-gray-500"}
                    >
                      {course.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-[#02153D]">
                    دوره آمادگی {course.exam} - {course.type}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-[#FF6A5C]" />
                      <span className="text-gray-600">شروع:</span>
                      <span className="font-medium">{course.startDate}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-[#FF6A5C]" />
                      <span className="text-gray-600">پایان:</span>
                      <span className="font-medium">{course.endDate}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-[#FF6A5C]" />
                      <span className="text-gray-600">زمان:</span>
                      <span className="font-medium">{course.schedule}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-[#FF6A5C]" />
                      <span className="text-gray-600">مکان:</span>
                      <span className="font-medium">{course.location}</span>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">مدرس:</span>
                      <span className="font-medium text-[#02153D]">{course.instructor}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">ظرفیت:</span>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-[#FF6A5C]" />
                        <span className="font-medium">
                          {course.enrolled}/{course.capacity}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <span className="text-2xl font-bold text-[#FF6A5C]">{course.price}</span>
                      <span className="text-gray-600 mr-1">تومان</span>
                    </div>
                    <Button
                      className="bg-[#FF6A5C] hover:bg-[#FF6A5C]/90 text-white"
                      disabled={course.status === "تکمیل ظرفیت"}
                    >
                      {course.status === "تکمیل ظرفیت" ? "تکمیل ظرفیت" : "ثبت‌نام"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Exam Dates */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#02153D] mb-4">تاریخ‌های آزمون</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              تاریخ‌های برگزاری آزمون‌های بین‌المللی و مهلت‌های ثبت‌نام
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {examDates.map((exam, index) => (
              <Card key={index} className="border-t-4 border-t-[#FF6A5C]">
                <CardHeader>
                  <CardTitle className="text-xl text-[#02153D] text-center">{exam.exam}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-[#02153D] mb-2">تاریخ‌های آزمون:</h4>
                    <div className="space-y-1">
                      {exam.dates.map((date, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <Calendar className="h-3 w-3 text-[#FF6A5C]" />
                          <span className="text-gray-600">{date}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="text-sm space-y-2">
                      <div>
                        <span className="font-medium text-[#02153D]">مهلت ثبت‌نام: </span>
                        <span className="text-gray-600">{exam.registrationDeadline}</span>
                      </div>
                      <div>
                        <span className="font-medium text-[#02153D]">هزینه آزمون: </span>
                        <span className="text-[#FF6A5C] font-bold">{exam.fee}</span>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-[#02153D] hover:bg-[#02153D]/90 text-white">ثبت‌نام آزمون</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Important Notes */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-[#02153D]/5 to-[#FF6A5C]/5 border-[#FF6A5C]">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-[#02153D] mb-4">نکات مهم:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#FF6A5C] rounded-full mt-2"></div>
                    <span>ثبت‌نام در دوره‌ها حداقل ۲ هفته قبل از شروع انجام شود</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#FF6A5C] rounded-full mt-2"></div>
                    <span>امکان بازپرداخت هزینه تا ۴۸ ساعت قبل از شروع دوره</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#FF6A5C] rounded-full mt-2"></div>
                    <span>تخفیف ۱۰٪ برای ثبت‌نام زودهنگام (۱ ماه قبل)</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#FF6A5C] rounded-full mt-2"></div>
                    <span>ارائه گواهی معتبر پس از اتمام دوره</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#FF6A5C] rounded-full mt-2"></div>
                    <span>پشتیبانی رایگان تا ۳ ماه پس از آزمون</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#FF6A5C] rounded-full mt-2"></div>
                    <span>امکان تکرار دوره با ۵۰٪ تخفیف در صورت عدم موفقیت</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
