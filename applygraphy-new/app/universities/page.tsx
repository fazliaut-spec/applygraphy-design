import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { SmartUniversitySearch } from "@/components/universities/smart-search"

export const metadata: Metadata = {
  title: "جستجوی هوشمند دانشگاه | ApplyGraphy",
  description: "با استفاده از هوش مصنوعی بهترین دانشگاه‌های متناسب با پروفایل خود را پیدا کنید",
  keywords: "دانشگاه، جستجو، هوش مصنوعی، تحصیل خارج، مشاوره تحصیلی",
}

export default function UniversitiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-4">
          <SmartUniversitySearch />
        </div>
      </main>
      <Footer />
    </div>
  )
}
