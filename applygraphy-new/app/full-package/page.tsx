import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { PackageOverview } from "@/components/full-package/package-overview"
import { PackageServices } from "@/components/full-package/package-services"
import { PackageTimeline } from "@/components/full-package/package-timeline"
import { PackagePricing } from "@/components/full-package/package-pricing"
import { Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FullPackagePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="relative">
        {/* Main content with margin for sidebar */}
        <div>
          {/* Hero Section */}
          <section
            className="py-20 bg-cover bg-center relative"
            style={{ backgroundImage: "url('/images/travel-package-bg.jpg')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#02153D]/80 to-[#FF6A5C]/80"></div>
            <div className="container mx-auto px-4 text-center text-white relative z-10">
              <div className="mb-8">
                <Package className="h-16 w-16 mx-auto mb-4" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">پکیج کامل از قبل تا بعد از سفر</h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                خدمات جامع شامل آمادگی، سفر و اسکان در کشور مقصد
              </p>
              <Button asChild size="lg" className="bg-white text-[#02153D] hover:bg-gray-100">
                <Link href="#overview">مشاهده جزئیات</Link>
              </Button>
            </div>
          </section>

          <PackageOverview />
          <PackageServices />
          <PackageTimeline />
          <PackagePricing />
        </div>
      </main>
      <Footer />
    </div>
  )
}
