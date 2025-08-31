import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSlider } from "@/components/home/hero-slider"
import { ServiceCards } from "@/components/home/service-cards"
import { FeaturesSection } from "@/components/home/features-section"
import { AiMatchingSection } from "@/components/home/ai-matching-section"
import { UniversitySearchSection } from "@/components/home/university-search-section"
import { DocumentCenterSection } from "@/components/home/document-center-section"
import { VideoTestimonials } from "@/components/home/video-testimonials"
import { QuickContact } from "@/components/home/quick-contact"
import { FreeAIChatbot } from "@/components/ai/free-ai-chatbot"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSlider />
        <ServiceCards />
        <FeaturesSection />
        <AiMatchingSection />
        <UniversitySearchSection />
        <DocumentCenterSection />
        <VideoTestimonials />
        <QuickContact />
      </main>
      <Footer />
      <FreeAIChatbot />
    </div>
  )
}
