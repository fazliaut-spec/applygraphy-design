"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  BookOpen,
  FileText,
  Plane,
  Building,
  MapPin,
  Car,
} from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const slides = [
  {
    id: 1,
    title: "سفر تحصیلی جهانی شما با اپلای‌گرافی شروع می‌شود",
    subtitle: "مشاوره تخصصی، راهنمایی کامل و پشتیبانی در تمام مراحل تحصیل در خارج",
    icon: GraduationCap,
    link: "/about",
    gradient: "from-[#02153D]/80 to-[#FF6A5C]/80",
    backgroundImage: "/images/main-hero-bg.jpg",
  },
  {
    id: 2,
    title: "دوره‌های زبان انگلیسی",
    subtitle: "آمادگی آزمون‌های IELTS، TOEFL و GRE با اساتید مجرب",
    icon: BookOpen,
    link: "/language-courses",
    gradient: "from-[#FF6A5C]/80 to-[#02153D]/80",
    backgroundImage: "/images/language-courses-bg.jpg",
  },
  {
    id: 3,
    title: "آمادگی آزمون‌های بین‌المللی",
    subtitle: "دوره‌های تخصصی IMAT، SAT و TOLC برای ورود به دانشگاه‌های معتبر",
    icon: FileText,
    link: "/international-exams",
    gradient: "from-[#02153D]/80 via-[#FF6A5C]/80 to-[#02153D]/80",
    backgroundImage: "/images/international-exams-bg.jpg",
  },
  {
    id: 4,
    title: "خدمات ویزا از صفر تا صد",
    subtitle: "مشاوره کامل ویزا، تهیه مدارک و پیگیری تا دریافت ویزا",
    icon: Plane,
    link: "/visa-services",
    gradient: "from-[#FF6A5C]/80 via-[#02153D]/80 to-[#FF6A5C]/80",
    backgroundImage: "/images/visa-services-bg.jpg",
  },
  {
    id: 5,
    title: "درخواست تحصیلی از کارشناسی تا پست‌دکترا",
    subtitle: "ثبت‌نام در دانشگاه‌های برتر جهان در تمام مقاطع تحصیلی",
    icon: Building,
    link: "/academic-applications",
    gradient: "from-[#02153D]/80 to-[#FF6A5C]/80",
    backgroundImage: "/images/academic-applications-bg.jpg",
  },
  {
    id: 6,
    title: "پکیج کامل از قبل تا بعد از سفر",
    subtitle: "خدمات جامع شامل آمادگی، سفر و اسکان در کشور مقصد",
    icon: MapPin,
    link: "/full-package",
    gradient: "from-[#FF6A5C]/80 to-[#02153D]/80",
    backgroundImage: "/images/travel-package-bg.jpg",
  },
  {
    id: 7,
    title: "مشاوره مقصد",
    subtitle: "کمک در یافتن کار، مسکن، خرید خودرو و گرفتن گواهینامه",
    icon: Car,
    link: "/destination-consulting",
    gradient: "from-[#02153D]/80 via-[#FF6A5C]/80 to-[#02153D]/80",
    backgroundImage: "/images/destination-consulting-bg.jpg",
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-all duration-1000 ease-in-out",
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105",
          )}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${slide.backgroundImage})`,
            }}
          />
          {/* Gradient Overlay */}
          <div className={cn("absolute inset-0 bg-gradient-to-br", slide.gradient)} />
          {/* Content */}
          <div className="relative z-10 flex items-center justify-center h-full text-white">
            <div className="container mx-auto px-4 text-center">
              <div className="mb-8 flex justify-center">
                <div className="p-6 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                  <slide.icon className="h-16 w-16" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">{slide.title}</h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90 drop-shadow-md">
                {slide.subtitle}
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-[#02153D] hover:bg-gray-100 text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href={slide.link}>
                  بیشتر بدانید
                  <ChevronLeft className="mr-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2 space-x-reverse">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75",
            )}
          />
        ))}
      </div>
    </section>
  )
}
