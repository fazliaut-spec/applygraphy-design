import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

export function ExamTestimonials() {
  const testimonials = [
    {
      name: "علی رضایی",
      exam: "IELTS",
      score: "۸.۵",
      university: "دانشگاه تورنتو",
      image: "/images/student-1.jpg",
      text: "با کمک اساتید اپلای‌گرافی توانستم در آزمون آیلتس نمره ۸.۵ کسب کنم. روش تدریس آن‌ها بسیار عملی و مؤثر بود. به خصوص بخش اسپیکینگ که همیشه نگرانی من بود، با تمرین‌های مداوم به خوبی بهبود یافت.",
      rating: 5,
    },
    {
      name: "سارا محمدی",
      exam: "TOEFL",
      score: "۱۱۵",
      university: "دانشگاه استنفورد",
      image: "/images/student-2.jpg",
      text: "دوره تافل اپلای‌گرافی واقعاً فوق‌العاده بود. استراتژی‌هایی که یاد گرفتم، به خصوص برای بخش رایتینگ، کمک زیادی کرد. نمره ۱۱۵ که گرفتم، بیش از انتظارم بود و توانستم به دانشگاه رویایی‌ام راه پیدا کنم.",
      rating: 5,
    },
    {
      name: "امیر حسینی",
      exam: "GRE",
      score: "۳۲۵",
      university: "MIT",
      image: "/images/student-3.jpg",
      text: "آمادگی برای GRE واقعاً چالش‌برانگیز بود، اما با برنامه منظم و راهنمایی‌های دقیق اساتید، توانستم نمره ۳۲۵ کسب کنم. بخش کوانت که نقطه قوت من بود، با تکنیک‌های جدید حتی بهتر شد.",
      rating: 5,
    },
    {
      name: "نیلوفر کریمی",
      exam: "IMAT",
      score: "۶۵.۲",
      university: "دانشگاه بولونیا",
      image: "/images/student-4.jpg",
      text: "IMAT یکی از سخت‌ترین آزمون‌هاست، اما با کمک دوره تخصصی اپلای‌گرافی توانستم قبول شوم. تمرکز روی بخش‌های مختلف و حل تست‌های متنوع، کلید موفقیت من بود. الان دانشجوی پزشکی در ایتالیا هستم.",
      rating: 5,
    },
    {
      name: "محمد رضا احمدی",
      exam: "SAT",
      score: "۱۵۲۰",
      university: "دانشگاه هاروارد",
      image: "/images/student-5.jpg",
      text: "دوره SAT اپلای‌گرافی به من کمک کرد تا نمره ۱۵۲۰ کسب کنم. روش تدریس ریاضی و انگلیسی بسیار جامع بود. حالا در یکی از بهترین دانشگاه‌های جهان تحصیل می‌کنم و همه چیز مدیون همین شروع خوب است.",
      rating: 5,
    },
    {
      name: "فاطمه نوری",
      exam: "TOLC",
      score: "۲۸/۳۰",
      university: "پلی‌تکنیک میلان",
      image: "/images/student-6.jpg",
      text: "برای ورود به رشته مهندسی در ایتالیا، TOLC-I را گذراندم. دوره اپلای‌گرافی به خصوص در بخش ریاضی و منطق کمک زیادی کرد. نمره ۲۸ از ۳۰ که گرفتم، باعث پذیرش در دانشگاه مورد علاقه‌ام شد.",
      rating: 5,
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#02153D] mb-4">داستان‌های موفقیت</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">دانشجویانی که با کمک ما به اهداف خود رسیده‌اند</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Quote className="h-8 w-8 text-[#FF6A5C]/20" />
              </div>

              <CardContent className="p-6">
                {/* Student Info */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#02153D] text-lg">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.university}</p>
                  </div>
                </div>

                {/* Exam Score */}
                <div className="flex items-center justify-between mb-4 p-3 bg-gradient-to-r from-[#02153D]/5 to-[#FF6A5C]/5 rounded-lg">
                  <div>
                    <span className="text-sm text-gray-600">آزمون:</span>
                    <span className="font-bold text-[#02153D] mr-2">{testimonial.exam}</span>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">نمره:</span>
                    <span className="font-bold text-[#FF6A5C] mr-2 text-lg">{testimonial.score}</span>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 text-sm leading-relaxed">"{testimonial.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-[#02153D] to-[#FF6A5C] text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-center mb-8">آمار موفقیت ما</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold mb-2">۹۵٪</div>
                  <div className="text-sm opacity-90">نرخ موفقیت کلی</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">۲۰۰۰+</div>
                  <div className="text-sm opacity-90">دانشجوی موفق</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">۸.۲</div>
                  <div className="text-sm opacity-90">میانگین نمره IELTS</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">۱۰۸</div>
                  <div className="text-sm opacity-90">میانگین نمره TOEFL</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
