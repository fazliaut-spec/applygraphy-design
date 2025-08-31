"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/i18n/language-provider"

export function CTA() {
  const { t } = useLanguage()

  const benefits = [t("cta.benefit1"), t("cta.benefit2"), t("cta.benefit3"), t("cta.benefit4"), t("cta.benefit5")]

  return (
    <section className="py-20 bg-gradient-to-br from-[#02153D] via-[#02153D] to-[#FF6A5C]/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold sm:text-4xl mb-6">{t("cta.title")}</h2>
          <p className="text-xl mb-8 opacity-90">{t("cta.subtitle")}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-[#FF6A5C] flex-shrink-0" />
                  <span className="text-left">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="text-4xl font-bold">{t("cta.free")}</div>
              <div className="text-lg opacity-90">{t("cta.description")}</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#FF6A5C] hover:bg-[#FF6A5C]/90 text-white text-lg px-8 py-3" asChild>
              <Link href="/signup">
                {t("cta.getstarted")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-[#02153D] text-lg px-8 py-3"
              asChild
            >
              <Link href="/universities">{t("cta.explore")}</Link>
            </Button>
          </div>

          <p className="mt-6 text-sm opacity-75">{t("cta.guarantee")}</p>
        </div>
      </div>
    </section>
  )
}
