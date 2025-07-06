import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const packages = [
  {
    name: "پکیج پایه",
    price: "۱,۵۰۰,۰۰۰",
    duration: "۴ هفته",
    features: ["۱۶ ساعت آموزش", "کتاب درسی", "تست آزمایشی", "پشتیبانی آنلاین"],
    popular: false,
  },
  {
    name: "پکیج استاندارد",
    price: "۲,۸۰۰,۰۰۰",
    duration: "۸ هفته",
    features: [
      "۳۲ ساعت آموزش",
      "کتاب‌ها و منابع کامل",
      "۳ تست آزمایشی",
      "جلسات تمرین اضافی",
      "مشاوره انتخاب دانشگاه",
      "پشتیبانی ۲۴/۷",
    ],
    popular: true,
  },
  {
    name: "پکیج VIP",
    price: "۴,۵۰۰,۰۰۰",
    duration: "۱۲ هفته",
    features: [
      "۴۸ ساعت آموزش",
      "منابع اختصاصی",
      "۵ تست آزمایشی",
      "کلاس‌های خصوصی",
      "مشاوره کامل تحصیلی",
      "ضمانت نمره",
      "پشتیبانی اختصاصی",
    ],
    popular: false,
  },
]

export function CoursePricing() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#02153D] mb-4">پکیج‌های آموزشی</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">بسته‌های مختلف متناسب با بودجه و نیاز شما</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <Card
              key={pkg.name}
              className={`relative hover:shadow-xl transition-all duration-300 ${
                pkg.popular ? "border-[#FF6A5C] border-2 scale-105" : ""
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#FF6A5C] text-white px-4 py-2 rounded-full text-sm font-semibold">
                    محبوب‌ترین
                  </span>
                </div>
              )}

              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-[#02153D] mb-2">{pkg.name}</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-[#FF6A5C]">{pkg.price}</span>
                  <span className="text-gray-600 mr-2">تومان</span>
                </div>
                <p className="text-gray-600">{pkg.duration}</p>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    pkg.popular
                      ? "bg-[#FF6A5C] hover:bg-[#FF6A5C]/90 text-white"
                      : "bg-white border-[#FF6A5C] border-2 text-[#FF6A5C] hover:bg-[#FF6A5C] hover:text-white"
                  }`}
                >
                  انتخاب پکیج
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
