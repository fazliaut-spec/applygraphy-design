"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, ChevronLeft, ChevronRight, Star } from "lucide-react"
import { cn } from "@/lib/utils"

const videoTestimonials = [
  {
    id: 1,
    title: "راهنمای کامل مهاجرت تحصیلی به کانادا",
    description: "تجربه موفق علی رضایی در دریافت ویزای تحصیلی کانادا",
    youtubeId: "dQw4w9WgXcQ", // Placeholder YouTube ID
    thumbnail: "/placeholder.svg?height=200&width=300",
    student: "علی رضایی",
    university: "دانشگاه تورنتو",
    rating: 5,
    views: "۱۲,۳۴۵",
  },
  {
    id: 2,
    title: "موفقیت در آزمون IELTS با نمره ۸",
    description: "نکات طلایی سارا احمدی برای موفقیت در آزمون آیلتس",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "/placeholder.svg?height=200&width=300",
    student: "سارا احمدی",
    university: "دانشگاه آکسفورد",
    rating: 5,
    views: "۸,۹۲۱",
  },
  {
    id: 3,
    title: "تجربه تحصیل پزشکی در ایتالیا",
    description: "مریم کریمی و مسیر موفقیت در آزمون IMAT",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "/placeholder.svg?height=200&width=300",
    student: "مریم کریمی",
    university: "دانشگاه میلان",
    rating: 5,
    views: "۱۵,۶۷۸",
  },
  {
    id: 4,
    title: "راهنمای کامل بورسیه تحصیلی آلمان",
    description: "امیرحسین نوری و دریافت بورسیه کامل در آلمان",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "/placeholder.svg?height=200&width=300",
    student: "امیرحسین نوری",
    university: "دانشگاه برلین",
    rating: 5,
    views: "۲۰,۱۲۳",
  },
  {
    id: 5,
    title: "نکات مهم مصاحبه ویزای تحصیلی",
    description: "تجربه موفق فاطمه محمدی در مصاحبه ویزا",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "/placeholder.svg?height=200&width=300",
    student: "فاطمه محمدی",
    university: "دانشگاه سیدنی",
    rating: 5,
    views: "۹,۴۵۶",
  },
  {
    id: 6,
    title: "راهنمای انتخاب رشته در خارج",
    description: "حسین کریمی و انتخاب بهترین رشته مهندسی",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "/placeholder.svg?height=200&width=300",
    student: "حسین کریمی",
    university: "دانشگاه MIT",
    rating: 5,
    views: "۱۸,۷۸۹",
  },
]

export function VideoTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(videoTestimonials.length / 3))
  }

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + Math.ceil(videoTestimonials.length / 3)) % Math.ceil(videoTestimonials.length / 3),
    )
  }

  const getVisibleVideos = () => {
    const startIndex = currentIndex * 3
    return videoTestimonials.slice(startIndex, startIndex + 3)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#02153D] mb-4">راهنمای سریع</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            چگونه اپلای کنیم
          </p>
        </div>

        {/* Video Player Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
              <div className="p-4 border-b flex justify-between items-center">
                <h3 className="text-lg font-bold text-[#02153D]">
                  {videoTestimonials.find((v) => v.id === selectedVideo)?.title}
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedVideo(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </Button>
              </div>
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${videoTestimonials.find((v) => v.id === selectedVideo)?.youtubeId}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}

        {/* Video Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getVisibleVideos().map((video) => (
              <Card
                key={video.id}
                className="group cursor-pointer hover:shadow-xl transition-all duration-300 overflow-hidden"
                onClick={() => setSelectedVideo(video.id)}
              >
                <div className="relative">
                  <img
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-[#FF6A5C] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="h-8 w-8 text-white mr-1" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {video.views} بازدید
                  </div>
                </div>
                <CardContent className="p-6">
                  
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-[#02153D]">{video.student}</p>
                      <p className="text-sm text-gray-500">{video.university}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(video.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-[#FF6A5C] text-[#FF6A5C]" />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="h-6 w-6 text-[#02153D]" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="h-6 w-6 text-[#02153D]" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2 space-x-reverse">
          {Array.from({ length: Math.ceil(videoTestimonials.length / 3) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300",
                index === currentIndex ? "bg-[#FF6A5C] scale-125" : "bg-gray-300 hover:bg-gray-400",
              )}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-[#02153D] mb-4">شما هم می‌توانید موفق شوید!</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            با مشاوره تخصصی ما، مسیر تحصیل در خارج را آسان‌تر از همیشه طی کنید
          </p>
          <Button asChild size="lg" className="bg-[#FF6A5C] hover:bg-[#FF6A5C]/90">
            <a href="/booking">همین الان مشاوره بگیرید</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
