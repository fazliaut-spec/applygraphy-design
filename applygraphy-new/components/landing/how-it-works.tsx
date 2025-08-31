import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { UserPlus, Search, FileText, GraduationCap } from "lucide-react"

const steps = [
  {
    step: "01",
    title: "Create Your Profile",
    description:
      "Sign up and build your comprehensive student profile with academic history, test scores, and career goals.",
    icon: UserPlus,
  },
  {
    step: "02",
    title: "Discover Programs",
    description: "Use our AI-powered matching system to find the best-fit universities and programs worldwide.",
    icon: Search,
  },
  {
    step: "03",
    title: "Manage Applications",
    description: "Track deadlines, upload documents, and manage all your applications from one centralized dashboard.",
    icon: FileText,
  },
  {
    step: "04",
    title: "Get Accepted",
    description: "Receive offers, compare options, and make informed decisions about your future with our guidance.",
    icon: GraduationCap,
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">How APPLYGRAPHY Works</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Our streamlined process makes studying abroad accessible and manageable for every student.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.step} className="relative">
              <Card className="text-center h-full">
                <CardHeader>
                  <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white text-xl font-bold mb-4">
                    {step.step}
                  </div>
                  <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-lg bg-gray-100 mb-4">
                    <step.icon className="h-6 w-6 text-gray-600" />
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{step.description}</CardDescription>
                </CardContent>
              </Card>

              {/* Arrow connector for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-purple-600 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
