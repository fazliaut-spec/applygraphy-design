import Link from "next/link"
import {
  GraduationCap,
  Phone,
  Mail,
  MapPin,
  Instagram,
  TextIcon as Telegram,
  PhoneIcon as WhatsApp,
} from "lucide-react"

const footerLinks = {
  services: [
    { name: "دوره‌های زبان", href: "/language-courses" },
    { name: "آزمون‌های بین‌المللی", href: "/international-exams" },
    { name: "خدمات ویزا", href: "/visa-services" },
    { name: "درخواست تحصیلی", href: "/academic-applications" },
    { name: "پکیج کامل", href: "/full-package" },
  ],
  support: [
    { name: "مشاوره رایگان", href: "/contact" },
    { name: "سوالات متداول", href: "/faq" },
    { name: "راهنمای خدمات", href: "/guide" },
    { name: "وبلاگ", href: "/blog" },
    { name: "تماس با ما", href: "/contact" },
  ],
  company: [
    { name: "درباره ما", href: "/about" },
    { name: "تیم ما", href: "/team" },
    { name: "فرصت‌های شغلی", href: "/careers" },
    { name: "اخبار", href: "/news" },
    { name: "همکاری", href: "/partnership" },
  ],
}

const socialLinks = [
  { name: "اینستاگرام", icon: Instagram, href: "https://instagram.com/applygraphy" },
  { name: "تلگرام", icon: Telegram, href: "https://t.me/applygraphy" },
  { name: "واتساپ", icon: WhatsApp, href: "https://wa.me/989123456789" },
]

export function Footer() {
  return (
    <footer className="bg-[#02153D] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#FF6A5C] to-[#FF6A5C]/80">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">اپلای‌گرافی</span>
            </Link>
            <p className="text-white/80 mb-6 leading-relaxed">
              همراه شما در سفر تحصیل به خارج از کشور. مشاوره تخصصی، آمادگی آزمون‌ها و خدمات جامع مهاجرت تحصیلی.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-[#FF6A5C] rounded-full flex items-center justify-center hover:bg-[#FF6A5C]/80 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-5 w-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6">خدمات</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/80 hover:text-[#FF6A5C] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-lg mb-6">پشتیبانی</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/80 hover:text-[#FF6A5C] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6">تماس با ما</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#FF6A5C]" />
                <span className="text-white/80">09330578976</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#FF6A5C]" />
                <span className="font-bold text-[#02153D] font-sans text-base text-white">applygraphy@gmail.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#FF6A5C] mt-1" />
                <span className="text-white/80">via tourino, italy</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">© ۱۴۰۳ اپلای‌گرافی. تمامی حقوق محفوظ است.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-white/60 hover:text-[#FF6A5C] text-sm transition-colors">
                حریم خصوصی
              </Link>
              <Link href="/terms" className="text-white/60 hover:text-[#FF6A5C] text-sm transition-colors">
                شرایط استفاده
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
