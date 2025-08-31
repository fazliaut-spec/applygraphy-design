import { Card, CardContent } from "@/components/ui/card"
import { FileText, CheckSquare, Clock, Calendar, Mail, Plane } from "lucide-react"

export function VisaProcess() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#02153D] mb-4">مراحل اخذ ویزای تحصیلی</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">آشنایی با فرآیند اخذ ویزای تحصیلی از ابتدا تا انتها</p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-0 bottom-0 right-[21px] md:right-1/2 md:translate-x-[21px] w-1 bg-[#FF6A5C]/20"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {/* Step 1 */}
            <div className="relative">
              <div className="flex flex-col md:flex-row items-start">
                <div className="flex items-center md:w-1/2 md:justify-end md:pl-8 mb-4 md:mb-0">
                  <div className="order-1 md:order-2">
                    <div className="w-10 h-10 bg-[#FF6A5C] rounded-full flex items-center justify-center z-10 relative mr-4 md:mr-0 md:ml-4">
                      <FileText className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div className="order-2 md:order-1">
                    <Card className="md:text-left">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-[#02153D] mb-2">پذیرش از دانشگاه</h3>
                        <p className="text-gray-600">
                          اولین قدم برای اخذ ویزای تحصیلی، دریافت پذیرش از یک دانشگاه یا مؤسسه آموزشی معتبر در کشور مقصد
                          است.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="flex flex-col md:flex-row items-start">
                <div className="hidden md:block md:w-1/2"></div>
                <div className="flex items-center md:w-1/2 md:justify-start md:pr-8">
                  <div>
                    <div className="w-10 h-10 bg-[#FF6A5C] rounded-full flex items-center justify-center z-10 relative mr-4">
                      <CheckSquare className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-[#02153D] mb-2">تهیه مدارک لازم</h3>
                      <p className="text-gray-600">
                        جمع‌آوری و آماده‌سازی مدارک مورد نیاز برای درخواست ویزا، شامل پاسپورت، نامه پذیرش، مدارک مالی و
                        غیره.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="flex flex-col md:flex-row items-start">
                <div className="flex items-center md:w-1/2 md:justify-end md:pl-8 mb-4 md:mb-0">
                  <div className="order-1 md:order-2">
                    <div className="w-10 h-10 bg-[#FF6A5C] rounded-full flex items-center justify-center z-10 relative mr-4 md:mr-0 md:ml-4">
                      <Calendar className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div className="order-2 md:order-1">
                    <Card className="md:text-left">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-[#02153D] mb-2">تعیین وقت سفارت</h3>
                        <p className="text-gray-600">
                          رزرو وقت مصاحبه در سفارت یا کنسولگری کشور مقصد برای ارائه مدارک و انجام مصاحبه.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="flex flex-col md:flex-row items-start">
                <div className="hidden md:block md:w-1/2"></div>
                <div className="flex items-center md:w-1/2 md:justify-start md:pr-8">
                  <div>
                    <div className="w-10 h-10 bg-[#FF6A5C] rounded-full flex items-center justify-center z-10 relative mr-4">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-[#02153D] mb-2">ارسال درخواست و مصاحبه</h3>
                      <p className="text-gray-600">
                        تکمیل فرم‌های درخواست ویزا، پرداخت هزینه‌ها و شرکت در مصاحبه حضوری در سفارت.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="relative">
              <div className="flex flex-col md:flex-row items-start">
                <div className="flex items-center md:w-1/2 md:justify-end md:pl-8 mb-4 md:mb-0">
                  <div className="order-1 md:order-2">
                    <div className="w-10 h-10 bg-[#FF6A5C] rounded-full flex items-center justify-center z-10 relative mr-4 md:mr-0 md:ml-4">
                      <Clock className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div className="order-2 md:order-1">
                    <Card className="md:text-left">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-[#02153D] mb-2">بررسی درخواست</h3>
                        <p className="text-gray-600">
                          انتظار برای بررسی درخواست ویزا توسط مقامات کشور مقصد که ممکن است چند هفته تا چند ماه طول بکشد.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            </div>

            {/* Step 6 */}
            <div className="relative">
              <div className="flex flex-col md:flex-row items-start">
                <div className="hidden md:block md:w-1/2"></div>
                <div className="flex items-center md:w-1/2 md:justify-start md:pr-8">
                  <div>
                    <div className="w-10 h-10 bg-[#FF6A5C] rounded-full flex items-center justify-center z-10 relative mr-4">
                      <Plane className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-[#02153D] mb-2">دریافت ویزا و سفر</h3>
                      <p className="text-gray-600">
                        پس از تأیید درخواست، دریافت ویزا و برنامه‌ریزی برای سفر به کشور مقصد و شروع تحصیل.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
