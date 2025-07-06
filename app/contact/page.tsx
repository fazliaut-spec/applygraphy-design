import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"
import { ContactForm } from "@/components/contact/contact-form"

export const metadata: Metadata = {
  title: "تماس با ما | ApplyGraphy",
  description: "با تیم مشاوران مجرب ApplyGraphy در تماس باشید. مشاوره رایگان و پشتیبانی ۲۴ ساعته",
  keywords: "تماس، مشاوره، پشتیبانی، ApplyGraphy",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="relative">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-[#02153D] to-[#FF6A5C]">
          <div className="container mx-auto px-4 text-center text-white">
            <div className="mb-8">
              <MessageCircle className="h-16 w-16 mx-auto mb-4" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">تماس با ما</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              ما آماده پاسخگویی به سوالات شما و ارائه مشاوره تخصصی هستیم
            </p>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-[#FF6A5C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-[#FF6A5C]" />
                </div>
                <h3 className="text-xl font-bold text-[#02153D] mb-2">تلفن</h3>
                <p className="text-gray-600" dir="ltr">
                  +98 933 057 8976
                </p>
                <p className="text-gray-600">پشتیبانی ۲۴ ساعته</p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-[#FF6A5C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-[#FF6A5C]" />
                </div>
                <h3 className="text-xl font-bold text-[#02153D] mb-2">ایمیل</h3>
                <p className="text-gray-600" dir="ltr">
                  applygraphy@gmail.com
                </p>
                <p className="text-gray-600">پاسخ در کمتر از ۲۴ ساعت</p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-[#FF6A5C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-[#FF6A5C]" />
                </div>
                <h3 className="text-xl font-bold text-[#02153D] mb-2">آدرس</h3>
                <p className="text-gray-600" dir="ltr">
                  Via Tourino 9, Italy
                </p>
                <p className="text-gray-600">دفتر مرکزی اروپا</p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-[#FF6A5C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-[#FF6A5C]" />
                </div>
                <h3 className="text-xl font-bold text-[#02153D] mb-2">ساعات کاری</h3>
                <p className="text-gray-600">شنبه تا چهارشنبه: ۹ صبح تا ۶ عصر</p>
                <p className="text-gray-600">پنجشنبه: ۹ صبح تا ۱ بعدازظهر</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-[#02153D] mb-8 text-center">ارسال پیام</h2>
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#02153D] mb-8 text-center">موقعیت ما</h2>
            <div className="h-96 rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.0!2d7.6869!3d45.0703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47886d126418be25%3A0x8903f5b87c6f8b0!2sVia%20Tourino%2C%2010124%20Torino%20TO%2C%20Italy!5e0!3m2!1sen!2s!4v1654321234567!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#02153D] mb-8 text-center">سوالات متداول</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-[#02153D] mb-2">چگونه می‌توانم مشاوره رایگان دریافت کنم؟</h3>
                <p className="text-gray-600">
                  شما می‌توانید از طریق فرم تماس در همین صفحه، تماس تلفنی یا ارسال ایمیل درخواست مشاوره رایگان خود را ثبت
                  کنید. کارشناسان ما در اسرع وقت با شما تماس خواهند گرفت.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-[#02153D] mb-2">آیا امکان مشاوره آنلاین وجود دارد؟</h3>
                <p className="text-gray-600">
                  بله، ما خدمات مشاوره آنلاین از طریق اسکایپ، زوم یا واتساپ ارائه می‌دهیم. این گزینه برای دانشجویانی که
                  در شهرستان‌ها یا خارج از کشور هستند بسیار مناسب است.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-[#02153D] mb-2">هزینه خدمات شما چقدر است؟</h3>
                <p className="text-gray-600">
                  هزینه خدمات ما بسته به نوع خدمات درخواستی متفاوت است. مشاوره اولیه رایگان است و در جلسه مشاوره،
                  هزینه‌های دقیق خدمات مورد نیاز شما اعلام خواهد شد.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-[#02153D] mb-2">چه مدارکی برای جلسه مشاوره نیاز است؟</h3>
                <p className="text-gray-600">
                  برای جلسه مشاوره اولیه، داشتن رزومه تحصیلی، نمرات زبان (در صورت وجود) و اطلاعات کلی در مورد اهداف
                  تحصیلی شما کافی است. برای مراحل بعدی، مدارک تکمیلی از شما درخواست خواهد شد.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-[#02153D] mb-2">آیا اطلاعات من محفوظ است؟</h3>
                <p className="text-gray-600">
                  بله، ما از بالاترین استانداردهای امنیتی برای حفاظت از اطلاعات شخصی شما استفاده می‌کنیم. تمام داده‌ها
                  مطابق با قوانین GDPR اروپا محافظت می‌شوند و هرگز بدون اجازه شما به اشتراک گذاشته نمی‌شوند.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
