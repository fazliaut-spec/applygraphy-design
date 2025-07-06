import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Master's Student at Oxford",
    country: "🇬🇧 UK",
    content:
      "APPLYGRAPHY made my dream of studying at Oxford a reality. The AI matching was spot-on, and the application guidance was invaluable.",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
  },
  {
    name: "Ahmed Hassan",
    role: "PhD Candidate at MIT",
    country: "🇺🇸 USA",
    content:
      "The scholarship finder helped me secure full funding for my PhD. I couldn't have navigated the complex application process without this platform.",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
  },
  {
    name: "Maria Rodriguez",
    role: "Bachelor's Student in Germany",
    country: "🇩🇪 Germany",
    content:
      "From visa guidance to finding accommodation, APPLYGRAPHY supported me throughout my entire journey to studying in Berlin.",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
  },
  {
    name: "Raj Patel",
    role: "MBA Student in Canada",
    country: "🇨🇦 Canada",
    content:
      "The community forum connected me with alumni who gave me insider tips. The personalized dashboard kept me organized throughout the process.",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Success Stories from Our Students</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of students who have achieved their study abroad dreams with APPLYGRAPHY.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-gray-500">{testimonial.country}</p>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">"{testimonial.content}"</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
