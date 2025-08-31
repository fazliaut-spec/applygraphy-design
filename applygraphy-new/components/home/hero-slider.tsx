"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Play, Star, Users, Award } from "lucide-react"

const slides = [
  {
    id: 1,
    title: "تحصیل در بهترین دانشگاه‌های جهان",
    subtitle: "با راهنمایی متخصصان ما، راه خود را به آینده‌ای روشن هموار کنید",
    description: "مشاوره تخصصی، آمادگی آزمون‌ها و خدمات جامع مهاجرت تحصیلی",
    image: "/images/main-hero-bg.jpg",
    cta: { text: "شروع رایگان", href: "/smart-matching" },
    stats: [
      { icon: Users, value: "۵۰۰۰+", label: "دانشجوی موفق" },
      { icon: Award, value: "۹۸%", label: "نرخ موفقیت" },
      { icon: Star, value: "۴.۹", label: "رضایت کاربران" },
    ],
  },
  {
    id: 2,
    title: "هوش مصنوعی در خدمت تحصیل شما",
    subtitle: "سیستم تطبیق هوشمند ما بهترین فرصت‌های تحصیلی را برای شما پیدا می‌کند",
    description: "تحلیل پروفایل، پیشنهاد دانشگاه و برنامه‌ریزی مسیر تحصیلی",
    image: "/images/ai-matching-bg.jpg",
    cta: { text: "تطبیق هوشمند", href: "/ai-matching" },
    stats: [
      { icon: Users, value: "۱۰۰+", label: "دانشگاه معتبر" },
      { icon: Award, value: "۲۴/۷", label: "پشتیبانی" },
      { icon: Star, value: "رایگان", label: "مشاوره اولیه" },
    ],
  },
  {
    id: 3,
    title: "خدمات جامع مهاجرت تحصیلی",
    subtitle: "از انتخاب رشته تا دریافت ویزا، در تمام مراحل کنار شما هستیم",
    description: "دوره‌های زبان، آمادگی آزمون، خدمات ویزا و پشتیبانی کامل",
    image: "/images/services-bg.jpg",
    cta: { text: "مشاهده خدمات", href: "/services" },
    stats: [
      { icon: Users, value: "۱۵", label: "سال تجربه" },
      { icon: Award, value: "۳۰+", label: "کشور مقصد" },
      { icon: Star, value: "۲۴/۷", label: "پشتیبانی" },
    ],
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl">
                  <div className="animate-fade-in">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">{slide.title}</h1>
                    <p className="text-xl md:text-2xl text-white/90 mb-4 leading-relaxed">{slide.subtitle}</p>
                    <p className="text-lg text-white/80 mb-8 max-w-2xl">{slide.description}</p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-12">
                      <Button
                        asChild
                        size="lg"
                        className="bg-[#FF6A5C] hover:bg-[#FF6A5C]/90 text-white px-8 py-3 text-lg"
                      >
                        <Link href={slide.cta.href}>
                          {slide.cta.text}
                          <ChevronLeft className="mr-2 h-5 w-5" />
                        </Link>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="border-white text-white hover:bg-white hover:text-[#02153D] px-8 py-3 text-lg bg-transparent"
                      >
                        <Link href="/contact">
                          <Play className="ml-2 h-5 w-5" />
                          مشاهده ویدیو
                        </Link>
                      </Button>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-8 max-w-md">
                      {slide.stats.map((stat, statIndex) => (
                        <div key={statIndex} className="text-center">
                          <div className="flex justify-center mb-2">
                            <stat.icon className="h-8 w-8 text-[#FF6A5C]" />
                          </div>
                          <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                          <div className="text-sm text-white/80">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-[#FF6A5C] scale-125" : "bg-white/50 hover:bg-white/70"
            }`}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          />
        ))}
      </div>

      {/* Auto-play Control */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute top-4 right-4 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all"
      >
        {isAutoPlaying ? <div className="h-4 w-4 bg-white rounded-sm" /> : <Play className="h-4 w-4 text-white" />}
      </button>
    </section>
  )
}
