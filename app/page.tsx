import { HeroSlider } from "@/components/home/hero-slider"
import { ServiceCards } from "@/components/home/service-cards"
import { FeaturesSection } from "@/components/home/features-section"
import { AiMatchingSection } from "@/components/home/ai-matching-section"
import { UniversitySearchSection } from "@/components/home/university-search-section"
import { DocumentCenterSection } from "@/components/home/document-center-section"
import { Testimonials } from "@/components/home/testimonials"
import { VideoTestimonials } from "@/components/home/video-testimonials"
import { QuickContact } from "@/components/home/quick-contact"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="relative">
        <HeroSlider />
        <ServiceCards />
        <UniversitySearchSection />
        <AiMatchingSection />
        <DocumentCenterSection />
        <FeaturesSection />
        <Testimonials />
        <VideoTestimonials />
        <QuickContact />
      </main>
      <Footer />
    </div>
  )
}
