"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar, User, MessageSquare } from "lucide-react"

const consultationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  country: z.string().min(1, "Please select a country"),
  consultationType: z.string().min(1, "Please select consultation type"),
  preferredDate: z.string().min(1, "Please select a preferred date"),
  message: z.string().optional(),
  agreeToTerms: z.boolean().refine((val) => val === true, "You must agree to terms"),
})

type ConsultationForm = z.infer<typeof consultationSchema>

const countries = [
  "United States",
  "Canada",
  "United Kingdom",
  "Australia",
  "Germany",
  "France",
  "Netherlands",
  "Sweden",
  "Norway",
  "Denmark",
]

const consultationTypes = [
  "University Selection",
  "Application Process",
  "Visa Guidance",
  "Career Planning",
  "Scholarship Opportunities",
  "General Consultation",
]

export function ConsultationRequestForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ConsultationForm>({
    resolver: zodResolver(consultationSchema),
  })

  const watchedCountry = watch("country")
  const watchedConsultationType = watch("consultationType")
  const watchedAgreeToTerms = watch("agreeToTerms")

  const onSubmit = async (data: ConsultationForm) => {
    setIsSubmitting(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))
      console.log("Consultation request:", data)
      setIsSubmitted(true)
    } catch (error) {
      console.error("Failed to submit consultation request:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Calendar className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Request Submitted Successfully!</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Thank you for your consultation request. Our team will contact you within 24 hours to schedule your session.
          </p>
          <Button onClick={() => setIsSubmitted(false)}>Submit Another Request</Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Request a Consultation</CardTitle>
        <p className="text-center text-gray-600 dark:text-gray-300">
          Get personalized guidance for your study abroad journey
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <User className="w-5 h-5" />
              Personal Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input id="name" {...register("name")} placeholder="Enter your full name" />
                {errors.name && <p className="text-sm text-red-600">{errors.name.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" type="email" {...register("email")} placeholder="Enter your email" />
                {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input id="phone" {...register("phone")} placeholder="Enter your phone number" />
              {errors.phone && <p className="text-sm text-red-600">{errors.phone.message}</p>}
            </div>
          </div>

          {/* Consultation Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              Consultation Details
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Destination Country *</Label>
                <Select onValueChange={(value) => setValue("country", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select destination country" />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map((country) => (
                      <SelectItem key={country} value={country}>
                        {country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.country && <p className="text-sm text-red-600">{errors.country.message}</p>}
              </div>

              <div className="space-y-2">
                <Label>Consultation Type *</Label>
                <Select onValueChange={(value) => setValue("consultationType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select consultation type" />
                  </SelectTrigger>
                  <SelectContent>
                    {consultationTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.consultationType && <p className="text-sm text-red-600">{errors.consultationType.message}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="preferredDate">Preferred Date *</Label>
              <Input
                id="preferredDate"
                type="date"
                {...register("preferredDate")}
                min={new Date().toISOString().split("T")[0]}
              />
              {errors.preferredDate && <p className="text-sm text-red-600">{errors.preferredDate.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Additional Message</Label>
              <Textarea
                id="message"
                {...register("message")}
                placeholder="Tell us more about your goals and any specific questions you have..."
                rows={4}
              />
            </div>
          </div>

          {/* Terms and Submit */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="agreeToTerms"
                checked={watchedAgreeToTerms}
                onCheckedChange={(checked) => setValue("agreeToTerms", checked as boolean)}
              />
              <Label htmlFor="agreeToTerms" className="text-sm">
                I agree to the terms and conditions and privacy policy *
              </Label>
            </div>
            {errors.agreeToTerms && <p className="text-sm text-red-600">{errors.agreeToTerms.message}</p>}

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Submitting Request..." : "Submit Consultation Request"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
