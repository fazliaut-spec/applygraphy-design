"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { SolarCalendar } from "@/components/booking/solar-calendar"
import { TimeSlots } from "@/components/booking/time-slots"
import { ConsultationServices } from "@/components/booking/consultation-services"
import { LoginModal } from "@/components/auth/login-modal"
import { useAuth } from "@/lib/auth/auth-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Phone, CheckCircle, User } from "lucide-react"

export default function BookingPage() {
  const { user } = useAuth()
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [showLoginModal, setShowLoginModal] = useState(false)

  const handleBooking = () => {
    if (!user) {
      setShowLoginModal(true)
      return
    }
    // Handle booking logic here
    alert("رزرو شما با موفقیت ثبت شد! به زودی با شما تماس خواهیم گرفت.")
  }

  const canProceed = () => {
    return selectedDate && selectedTime && selectedService && user
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-[#02153D] to-[#FF6A5C]">
          <div className="container mx-auto px-4 text-center text-white">
            <div className="mb-8">
              <Calendar className="h-16 w-16 mx-auto mb-4" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">رزرو مشاوره تحصیلی</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              با کارشناسان مجرب ما مشاوره کنید و مسیر تحصیل در خارج را هموار کنید
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" variant="secondary" className="bg-white text-[#02153D] hover:bg-gray-100">
                <a href="tel:+989330578976" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  مشاوره رایگان: +98 933 057 8976
                </a>
              </Button>
              {!user && (
                <Button
                  onClick={() => setShowLoginModal(true)}
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#02153D]"
                >
                  <User className="h-5 w-5 ml-2" />
                  ورود / ثبت نام
                </Button>
              )}
            </div>
          </div>
        </section>

        {/* Registration Notice */}
        {!user && (
          <section className="py-8 bg-yellow-50 border-b">
            <div className="container mx-auto px-4 text-center">
              <p className="text-lg text-yellow-800">برای رزرو مشاوره ابتدا باید در سایت ثبت نام کنید</p>
              <Button onClick={() => setShowLoginModal(true)} className="mt-4 bg-[#FF6A5C] hover:bg-[#FF6A5C]/90">
                ثبت نام / ورود
              </Button>
            </div>
          </section>
        )}

        {/* Booking Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              {/* Services Section */}
              <div className="mb-12">
                <ConsultationServices selectedService={selectedService} onServiceSelect={setSelectedService} />
              </div>

              {/* Calendar and Time Selection */}
              {selectedService && user && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                  <div>
                    <SolarCalendar selectedDate={selectedDate} onDateSelect={setSelectedDate} />
                  </div>
                  <div>
                    <TimeSlots selectedDate={selectedDate} selectedTime={selectedTime} onTimeSelect={setSelectedTime} />
                  </div>
                </div>
              )}

              {/* Booking Summary */}
              {canProceed() && (
                <Card className="max-w-2xl mx-auto border-[#FF6A5C]">
                  <CardHeader className="bg-gradient-to-r from-[#02153D] to-[#FF6A5C] text-white">
                    <CardTitle className="text-xl flex items-center gap-2">
                      <CheckCircle className="h-6 w-6" />
                      خلاصه رزرو شما
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <span className="text-gray-600">کاربر:</span>
                        <p className="font-medium">{user?.name}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">نوع مشاوره:</span>
                        <p className="font-medium">مشاوره جامع تحصیلی</p>
                      </div>
                      <div>
                        <span className="text-gray-600">تاریخ:</span>
                        <p className="font-medium">{selectedDate?.toLocaleDateString("fa-IR")}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">ساعت:</span>
                        <p className="font-medium">۱۴:۰۰</p>
                      </div>
                    </div>
                    <div className="pt-4 border-t">
                      <Button
                        onClick={handleBooking}
                        className="w-full bg-[#FF6A5C] hover:bg-[#FF6A5C]/90 text-white text-lg py-3"
                      >
                        تأیید و ثبت رزرو
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onSuccess={() => setShowLoginModal(false)}
      />
    </div>
  )
}
