import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Star } from "lucide-react"
import Link from "next/link"

export function PackagePricing() {
  const packages = [
    {
      name: "پکیج استاندارد",
      price: "۱۵,۰۰۰,۰۰۰",
      originalPrice: "۲۰,۰۰۰,۰۰۰",
      description: "مناسب برای دانشجویان مقطع کارشناسی و کارشناسی ارشد",
      features: [
        "مشاوره تخصصی و انتخاب دانشگاه",
        "آماده‌سازی مدارک کامل",
        "اپلای تا ۵ دانشگاه",
        "خدمات ویزا و سفر",
        "کمک به اسکان",
        "پشتیبانی ۳ ماهه",
      ],
      popular: false,
    },
    {
      name: "پکیج پریمیوم",
      price: "۲۵,۰۰۰,۰۰۰",
      originalPrice: "۳۵,۰۰۰,۰۰۰",
      description: "مناسب برای دانشجویان دکتری و رشته‌های تخصصی",
      features: [
        "تمام خدمات پکیج استاندارد",
        "اپلای تا ۱۰ دانشگاه",
        "مشاوره تخصصی بورسیه",
        "آماده‌سازی پروپوزال تحقیقاتی",
        "استقبال VIP در فرودگاه",
        "پشتیبانی ۶ ماهه",
      ],
      popular: true,
    },
    {
      name: "پکیج طلایی",
      price: "۴۰,۰۰۰,۰۰۰",
      originalPrice: "۵۵,۰۰۰,۰۰۰",
      description: "مناسب برای خانواده‌ها و افراد با نیازهای خاص",
      features: [
        "تمام خدمات پکیج پریمیوم",
        "اپلای نامحدود",
        "مشاوره برای همراهان",
        "خدمات اسکان VIP",
        "مشاور اختصاصی",
        "پشتیبانی ۱ ساله",
      ],
      popular: false,
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#02153D] mb-4 text-center">تعرفه پکیج‌های کامل</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          بسته‌های مختلف متناسب با نیازها و بودجه شما. تمام قیمت‌ها شامل مالیات و با تخفیف ویژه ارائه شده‌اند.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <Card key={index} className={`relative ${pkg.popular ? "border-[#FF6A5C] border-2" : ""}`}>
              {pkg.popular && (
                <div className="absolute -top-3 right-1/2 transform translate-x-1/2">
                  <div className="bg-[#FF6A5C] text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="h-4 w-4 ml-1" />
                    محبوب‌ترین
                  </div>
                </div>
              )}

              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-[#02153D] mb-2">{pkg.name}</h3>
                <p className="text-gray-600 mb-4">{pkg.description}</p>

                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-[#02153D]">{pkg.price}</span>
                    <span className="text-lg text-gray-600 mr-1">تومان</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-lg text-gray-400 line-through">{pkg.originalPrice}</span>
                    <span className="text-sm text-[#FF6A5C] mr-2 font-medium">
                      {Math.round(
                        (1 -
                          Number.parseInt(pkg.price.replace(/,/g, "")) /
                            Number.parseInt(pkg.originalPrice.replace(/,/g, ""))) *
                          100,
                      )}
                      % تخفیف
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#FF6A5C] ml-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={`w-full ${pkg.popular ? "bg-[#FF6A5C] hover:bg-[#FF6A5C]/90" : "bg-[#02153D] hover:bg-[#02153D]/90"} text-white`}
                >
                  <Link href="/contact">انتخاب این پکیج</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">نیاز به مشاوره برای انتخاب بهترین پکیج دارید؟</p>
          <Button
            variant="outline"
            asChild
            className="border-[#FF6A5C] text-[#FF6A5C] hover:bg-[#FF6A5C] hover:text-white"
          >
            <Link href="/contact">مشاوره رایگان</Link>
          </Button>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-bold text-[#02153D] mb-4">شرایط پرداخت</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-[#02153D] mb-2">امکانات پرداخت:</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• پرداخت نقدی با ۱۰٪ تخفیف اضافی</li>
                <li>• پرداخت اقساطی تا ۶ ماه</li>
                <li>• پرداخت با کارت‌های بانکی</li>
                <li>• امکان پرداخت ارزی</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-[#02153D] mb-2">ضمانت‌ها:</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• ضمانت بازگشت وجه در صورت عدم دریافت ویزا</li>
                <li>• ضمانت کیفیت خدمات</li>
                <li>• پشتیبانی رایگان در طول دوره</li>
                <li>• امکان تغییر پکیج تا مرحله اپلای</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
