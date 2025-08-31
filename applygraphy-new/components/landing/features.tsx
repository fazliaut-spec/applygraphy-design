"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Brain, FileText, DollarSign, MessageSquare, Globe, Users, Shield } from "lucide-react"
import { useLanguage } from "@/components/i18n/language-provider"

const features = [
  {
    titleKey: "features.ai.title",
    descriptionKey: "features.ai.description",
    icon: Brain,
  },
  {
    titleKey: "features.search.title",
    descriptionKey: "features.search.description",
    icon: Search,
  },
  {
    titleKey: "features.application.title",
    descriptionKey: "features.application.description",
    icon: FileText,
  },
  {
    titleKey: "features.scholarship.title",
    descriptionKey: "features.scholarship.description",
    icon: DollarSign,
  },
  {
    titleKey: "features.community.title",
    descriptionKey: "features.community.description",
    icon: MessageSquare,
  },
  {
    titleKey: "features.visa.title",
    descriptionKey: "features.visa.description",
    icon: Globe,
  },
  {
    titleKey: "features.expert.title",
    descriptionKey: "features.expert.description",
    icon: Users,
  },
  {
    titleKey: "features.secure.title",
    descriptionKey: "features.secure.description",
    icon: Shield,
  },
]

export function Features() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">{t("features.title")}</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">{t("features.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card
              key={feature.titleKey}
              className="text-center hover:shadow-lg transition-shadow border-l-4 border-l-[#FF6A5C]"
            >
              <CardHeader>
                <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#FF6A5C] to-[#02153D]">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg text-[#02153D]">{t(feature.titleKey as any)}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">{t(feature.descriptionKey as any)}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
