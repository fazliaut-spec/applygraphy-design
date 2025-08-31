import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export function PackageOverview() {
  return (
    <section id="overview" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#02153D] mb-12 text-center">پکیج کامل چیست؟</h2>

        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            پکیج کامل اپلای‌گرافی یک راه‌حل جامع برای دانشجویانی است که می‌خواهند تمام مراحل تحصیل در خارج از کشور را با
            اطمینان و بدون دغدغه طی کنند. این پکیج شامل تمام خدمات مورد نیاز از مرحله انتخاب دانشگاه تا اسکان در کشور
            مقصد است.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#02153D] mb-4">مزایای پکیج کامل</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#FF6A5C] ml-2 mt-0.5" />
                    <span>صرفه‌جویی در زمان و هزینه</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#FF6A5C] ml-2 mt-0.5" />
                    <span>پشتیبانی ۲۴/۷ در تمام مراحل</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#FF6A5C] ml-2 mt-0.5" />
                    <span>افزایش شانس پذیرش در دانشگاه‌های برتر</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#FF6A5C] ml-2 mt-0.5" />
                    <span>کاهش استرس و نگرانی در طول فرآیند</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#FF6A5C] ml-2 mt-0.5" />
                    <span>مدیریت یکپارچه تمام امور مربوط به تحصیل در خارج</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#02153D] mb-4">مناسب برای چه کسانی؟</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#FF6A5C] ml-2 mt-0.5" />
                    <span>دانشجویانی که برای اولین بار قصد تحصیل در خارج دارند</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#FF6A5C] ml-2 mt-0.5" />
                    <span>افرادی که زمان کافی برای پیگیری تمام مراحل را ندارند</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#FF6A5C] ml-2 mt-0.5" />
                    <span>دانشجویانی که به دنبال بهترین نتیجه ممکن هستند</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#FF6A5C] ml-2 mt-0.5" />
                    <span>افرادی که می‌خواهند با خیال راحت سفر تحصیلی خود را آغاز کنند</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#FF6A5C] ml-2 mt-0.5" />
                    <span>خانواده‌هایی که نگران فرزندان خود در کشور مقصد هستند</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-bold text-[#02153D] mb-4">تعهد ما</h3>
            <p className="text-gray-700 leading-relaxed">
              ما متعهد می‌شویم که در تمام مراحل، از انتخاب دانشگاه تا اسکان در کشور مقصد، در کنار شما باشیم و بهترین
              خدمات را ارائه دهیم. هدف ما این است که شما بتوانید با آرامش خاطر و اطمینان، مسیر تحصیل در خارج از کشور را
              طی کنید و به موفقیت برسید.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
