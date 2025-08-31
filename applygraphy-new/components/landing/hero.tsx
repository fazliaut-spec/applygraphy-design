"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, GraduationCap, Users } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/i18n/language-provider"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-blue-50 py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            {t("hero.title")}{" "}
            <span className="bg-gradient-to-r from-[#FF6A5C] to-[#02153D] bg-clip-text text-transparent">
              APPLYGRAPHY
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl">{t("hero.subtitle")}</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg" className="text-lg px-8 py-3 bg-[#FF6A5C] hover:bg-[#FF6A5C]/90 text-white">
              <Link href="/signup">
                {t("hero.startjourney")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-3 border-[#02153D] text-[#02153D] hover:bg-[#02153D] hover:text-white"
              asChild
            >
              <Link href="/universities">{t("hero.explore")}</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF6A5C]/10">
                <Globe className="h-6 w-6 text-[#FF6A5C]" />
              </div>
              <div className="mt-4 text-2xl font-bold text-gray-900">50+</div>
              <div className="text-sm text-gray-600">{t("hero.countries")}</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#02153D]/10">
                <GraduationCap className="h-6 w-6 text-[#02153D]" />
              </div>
              <div className="mt-4 text-2xl font-bold text-gray-900">10,000+</div>
              <div className="text-sm text-gray-600">{t("hero.programs")}</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#FF6A5C]/20 to-[#02153D]/20">
                <Users className="h-6 w-6 text-[#02153D]" />
              </div>
              <div className="mt-4 text-2xl font-bold text-gray-900">25,000+</div>
              <div className="text-sm text-gray-600">{t("hero.students")}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
