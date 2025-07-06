import type { Metadata } from "next"
import { Suspense } from "react"
import { ConsultationRequestForm } from "@/components/destination-consulting/consultation-request-form"

export const metadata: Metadata = {
  title: "Destination Consulting",
  description: "Let us help you plan your next adventure.",
}

export default function DestinationConsultingPage() {
  return (
    <section className="container grid items-center gap-6 pt-6 md:pt-10 pb-8">
      <div className="flex-1 space-y-4">
        <h1 className="text-3xl font-bold sm:text-5xl">Destination Consulting</h1>
        <p className="text-muted-foreground">Tell us where you want to go and we’ll handle the rest.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Suspense fallback={<p className="text-sm text-muted-foreground">Loading form…</p>}>
          <ConsultationRequestForm />
        </Suspense>
      </div>
    </section>
  )
}
