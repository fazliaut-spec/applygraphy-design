"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play, Quote, Star, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "سارا احمدی",
    university: "دانشگاه تورنتو",
    country: "کانادا",
    field: "مهندسی کامپیوتر",
    rating: 5,
    text: "با کمک تیم اپلای‌گرافی موفق شدم به دانشگاه رویایی‌ام برسم. مشاوره‌هایشان فوق‌العاده بود.",
    image: "/images/testimonial-sara.jpg",
    videoThumbnail: "/images/video-sara-thumb.jpg",
  },
  {
    id: 2,
    name: "علی رضایی",
    university: "دانشگاه آکسفورد",
    country: "انگلستان",
    field: "مدیریت بازرگانی",
    rating: 5,
    text: "سیستم تطبیق هوشمند اپلای‌گرافی کمک کرد بهترین دانشگاه را برای خودم پیدا کنم.",
    image: "/images/testimonial-ali.jpg",
    videoThumbnail: "/images/video-ali-thumb.jpg",
  },
  {
    id: 3,
    name: "مریم کریمی",
    university: "دانشگاه MIT",
    country: "آمریکا",
    field: "هوش مصنوعی",
    rating: 5,
    text: "از ابتدا تا انتها در کنار من بودند. بدون کمک آن‌ها هیچ‌وقت نمی‌توانستم به MIT برسم.",
    image: "/images/testimonial-maryam.jpg",
    videoThumbnail: "/images/video-maryam-thumb.jpg",
  },
]

export function VideoTestimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [playingVideo, setPlayingVideo] = useState<number | null>(null)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#02153D] mb-4">داستان موفقیت دانشجویان ما</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            از زبان خود دانشجویانی که با کمک اپلای‌گرافی به دانشگاه‌های مطلوب خود رسیده‌اند
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video Section */}
          <div className="relative">
            <Card className="overflow-hidden">
              <div className="relative h-80">
                <Image
                  src={testimonials[currentTestimonial].videoThumbnail || "/placeholder.svg"}
                  alt={`ویدیو ${testimonials[currentTestimonial].name}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <Button
                    size="lg"
                    className="bg-[#FF6A5C] hover:bg-[#FF6A5C]/90 rounded-full w-16 h-16"
                    onClick={() => setPlayingVideo(testimonials[currentTestimonial].id)}
                  >
                    <Play className="h-8 w-8 text-white" />
                  </Button>
                </div>

                {/* Student Info Overlay */}
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                  <div className="flex items-center gap-3">
                    <Image
                      src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                      alt={testimonials[currentTestimonial].name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <div className="font-semibold text-[#02153D] text-sm">
                        {testimonials[currentTestimonial].name}
                      </div>
                      <div className="text-xs text-gray-600">{testimonials[currentTestimonial].university}</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-6">
              <Button variant="outline" size="icon" onClick={prevTestimonial} className="rounded-full bg-transparent">
                <ChevronRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={nextTestimonial} className="rounded-full bg-transparent">
                <ChevronLeft className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Testimonial Content */}
          <div>
            <Card className="bg-white shadow-xl">
              <CardContent className="p-8">
                <Quote className="h-12 w-12 text-[#FF6A5C] mb-6" />

                <p className="text-lg text-gray-700 mb-6 leading-relaxed">{testimonials[currentTestimonial].text}</p>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Student Details */}
                <div className="border-t pt-6">
                  <div className="flex items-center gap-4">
                    <Image
                      src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                      alt={testimonials[currentTestimonial].name}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <h4 className="font-bold text-[#02153D] text-lg">{testimonials[currentTestimonial].name}</h4>
                      <p className="text-gray-600">{testimonials[currentTestimonial].field}</p>
                      <p className="text-sm text-[#FF6A5C] font-semibold">
                        {testimonials[currentTestimonial].university} - {testimonials[currentTestimonial].country}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentTestimonial ? "bg-[#FF6A5C] scale-125" : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
