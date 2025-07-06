import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Users, Award, Globe, BookOpen } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* ─────────────────── Hero ─────────────────── */}
        <section className="py-20 bg-gradient-to-br from-[#02153D] to-[#FF6A5C] text-white text-center">
          <Users className="h-16 w-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">درباره اپلای‌گرافی</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            همراه شما در مسیر تحصیل در خارج از کشور با بیش از ۱۰ سال تجربه
          </p>
        </section>

        {/* ─────────────────── Our Story ─────────────────── */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#02153D] mb-6">داستان ما</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                اپلای‌گرافی در سال ۱۳۹۲ با هدف ارائه خدمات مشاوره تخصصی برای دانشجویان ایرانی علاقه‌مند به تحصیل در خارج
                از کشور تأسیس شد. بنیان‌گذاران ما، خود فارغ‌التحصیلان دانشگاه‌های معتبر بین‌المللی، با چالش‌های مسیر اپلای
                آشنا بودند و تصمیم گرفتند تجربیات خود را در اختیار سایر دانشجویان قرار دهند.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                در طول این سال‌ها، ما به بیش از ۵٬۰۰۰ دانشجو کمک کرده‌ایم تا به دانشگاه‌های مورد نظر خود در سراسر جهان راه
                یابند. امروز، اپلای‌گرافی به یک مرجع معتبر در زمینه مشاوره تحصیلی بین‌المللی تبدیل شده است.
              </p>
              <p className="text-gray-700 leading-relaxed">
                ما با ترکیبی از دانش تخصصی، تجربه عملی و فناوری پیشرفته، خدمات جامعی را برای تمام مراحل تحصیل در خارج از
                کشور ارائه می‌دهیم.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image src="/images/about-team.jpg" alt="تیم اپلای‌گرافی" fill className="object-cover" />
            </div>
          </div>
        </section>

        {/* ─────────────────── Mission ─────────────────── */}
        <section className="py-16 bg-gray-50 text-center">
          <h2 className="text-3xl font-bold text-[#02153D] mb-12">مأموریت ما</h2>
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { Icon: Globe, title: "دسترسی به آموزش جهانی", desc: "تسهیل دسترسی دانشجویان ایرانی به فرصت‌های آموزشی." },
              {
                Icon: Award,
                title: "تعالی آکادمیک",
                desc: "کمک به دانشجویان برای دستیابی به بالاترین توانایی‌های علمی.",
              },
              { Icon: BookOpen, title: "راهنمایی جامع", desc: "همراهی در تمام مراحل، از انتخاب دانشگاه تا اسکان." },
            ].map(({ Icon, title, desc }) => (
              <div key={title} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-[#FF6A5C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-[#FF6A5C]" />
                </div>
                <h3 className="text-xl font-bold text-[#02153D] mb-3">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─────────────────── CTA ─────────────────── */}
        <section className="py-16 bg-gradient-to-br from-[#02153D] to-[#FF6A5C] text-white text-center">
          <h2 className="text-3xl font-bold mb-6">آماده شروع سفر تحصیلی خود هستید؟</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            با اپلای‌گرافی، رویای تحصیل در خارج از کشور را به واقعیت تبدیل کنید.
          </p>
          <Button asChild size="lg" className="bg-white text-[#02153D] hover:bg-gray-100">
            <Link href="/contact">مشاوره رایگان</Link>
          </Button>
        </section>
      </main>
      <Footer />
    </div>
  )
}
