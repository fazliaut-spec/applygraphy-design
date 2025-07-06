"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { addDays, isWeekend } from "date-fns"
import { fa } from "date-fns/locale"
import { Check, Clock } from "lucide-react"

// Persian month names
const persianMonths = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
]

// Persian day names
const persianDays = ["یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه"]

// Consultants data
const consultants = [
  {
    id: 1,
    name: "دکتر علی محمدی",
    specialty: "مشاور تحصیلی کانادا و آمریکا",
    availability: [1, 2, 3, 4], // Days of week (0 = Sunday)
  },
  {
    id: 2,
    name: "دکتر سارا رضایی",
    specialty: "مشاور تحصیلی اروپا",
    availability: [0, 2, 4, 6],
  },
  {
    id: 3,
    name: "مهندس حسین کریمی",
    specialty: "مشاور ویزا و مهاجرت",
    availability: [1, 3, 5],
  },
]

// Time slots
const timeSlots = {
  morning: [
    { id: "m1", time: "۰۸:۰۰", label: "۸ صبح" },
    { id: "m2", time: "۰۹:۰۰", label: "۹ صبح" },
    { id: "m3", time: "۱۰:۰۰", label: "۱۰ صبح" },
    { id: "m4", time: "۱۱:۰۰", label: "۱۱ صبح" },
  ],
  afternoon: [
    { id: "a1", time: "۱۲:۰۰", label: "۱۲ ظهر" },
    { id: "a2", time: "۱۳:۰۰", label: "۱ بعد از ظهر" },
    { id: "a3", time: "۱۴:۰۰", label: "۲ بعد از ظهر" },
    { id: "a4", time: "۱۵:۰۰", label: "۳ بعد از ظهر" },
  ],
  evening: [
    { id: "e1", time: "۱۶:۰۰", label: "۴ عصر" },
    { id: "e2", time: "۱۷:۰۰", label: "۵ عصر" },
    { id: "e3", time: "۱۸:۰۰", label: "۶ عصر" },
    { id: "e4", time: "۱۹:۰۰", label: "۷ شب" },
  ],
}

export function ConsultationCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [timeSlot, setTimeSlot] = useState<string>("")
  const [consultant, setConsultant] = useState<string>("")
  const [step, setStep] = useState(1)

  // Function to check if a date has available slots
  const hasAvailableSlots = (date: Date) => {
    const dayOfWeek = date.getDay()
    return consultants.some((consultant) => consultant.availability.includes(dayOfWeek))
  }

  // Function to get available consultants for selected date
  const getAvailableConsultants = () => {
    if (!date) return []
    const dayOfWeek = date.getDay()
    return consultants.filter((consultant) => consultant.availability.includes(dayOfWeek))
  }

  // Function to format date in Persian
  const formatPersianDate = (date: Date) => {
    const day = date.getDate()
    const month = persianMonths[date.getMonth()]
    const year = date.getFullYear()
    const dayName = persianDays[date.getDay()]
    return `${dayName}، ${day} ${month} ${year}`
  }

  // Handle next step
  const handleNext = () => {
    if (step === 1 && date) {
      setStep(2)
    } else if (step === 2 && timeSlot) {
      setStep(3)
    } else if (step === 3 && consultant) {
      setStep(4)
    }
  }

  // Handle back step
  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  // Get selected consultant details
  const getSelectedConsultant = () => {
    return consultants.find((c) => c.id.toString() === consultant)
  }

  // Get selected time slot details
  const getSelectedTimeSlot = () => {
    const allSlots = [...timeSlots.morning, ...timeSlots.afternoon, ...timeSlots.evening]
    return allSlots.find((slot) => slot.id === timeSlot)
  }

  return (
    <div className="container mx-auto py-12 px-4 md:px-6 lg:px-8 rtl">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#02153D]">رزرو مشاوره</h2>
        <p className="text-center text-gray-600 mb-12">
          زمان مناسب برای مشاوره تحصیلی خود را انتخاب کنید و با کارشناسان ما گفتگو کنید
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Steps sidebar */}
          <div className="md:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>مراحل رزرو</CardTitle>
                <CardDescription>لطفا مراحل زیر را تکمیل کنید</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium",
                        step >= 1 ? "bg-[#02153D] text-white" : "bg-gray-200 text-gray-500",
                      )}
                    >
                      1
                    </div>
                    <span className={cn("font-medium", step >= 1 ? "text-[#02153D]" : "text-gray-500")}>
                      انتخاب تاریخ
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium",
                        step >= 2 ? "bg-[#02153D] text-white" : "bg-gray-200 text-gray-500",
                      )}
                    >
                      2
                    </div>
                    <span className={cn("font-medium", step >= 2 ? "text-[#02153D]" : "text-gray-500")}>
                      انتخاب ساعت
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium",
                        step >= 3 ? "bg-[#02153D] text-white" : "bg-gray-200 text-gray-500",
                      )}
                    >
                      3
                    </div>
                    <span className={cn("font-medium", step >= 3 ? "text-[#02153D]" : "text-gray-500")}>
                      انتخاب مشاور
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium",
                        step >= 4 ? "bg-[#FF6A5C] text-white" : "bg-gray-200 text-gray-500",
                      )}
                    >
                      4
                    </div>
                    <span className={cn("font-medium", step >= 4 ? "text-[#FF6A5C]" : "text-gray-500")}>
                      تأیید نهایی
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main content */}
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>
                  {step === 1 && "انتخاب تاریخ مشاوره"}
                  {step === 2 && "انتخاب ساعت مشاوره"}
                  {step === 3 && "انتخاب مشاور"}
                  {step === 4 && "تأیید اطلاعات رزرو"}
                </CardTitle>
                <CardDescription>
                  {step === 1 && "لطفا یک روز را از تقویم انتخاب کنید"}
                  {step === 2 && "لطفا ساعت مناسب برای مشاوره را انتخاب کنید"}
                  {step === 3 && "لطفا یکی از مشاوران ما را انتخاب کنید"}
                  {step === 4 && "لطفا اطلاعات رزرو خود را بررسی و تأیید کنید"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Step 1: Date Selection */}
                {step === 1 && (
                  <div className="flex justify-center">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-md border"
                      locale={fa}
                      disabled={(date) => {
                        const today = new Date()
                        today.setHours(0, 0, 0, 0)
                        return date < today || date > addDays(today, 30) || isWeekend(date) || !hasAvailableSlots(date)
                      }}
                      modifiersClassNames={{
                        selected: "bg-[#02153D] text-white",
                        today: "bg-[#FF6A5C]/10 text-[#FF6A5C]",
                      }}
                    />
                  </div>
                )}

                {/* Step 2: Time Selection */}
                {step === 2 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-3 flex items-center">
                        <Clock className="w-5 h-5 ml-2 text-[#FF6A5C]" />
                        صبح (۸ تا ۱۲)
                      </h3>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {timeSlots.morning.map((slot) => (
                          <div key={slot.id}>
                            <RadioGroup value={timeSlot} onValueChange={setTimeSlot}>
                              <div className="flex items-center space-x-2 space-x-reverse">
                                <RadioGroupItem
                                  value={slot.id}
                                  id={slot.id}
                                  className="border-[#02153D] text-[#02153D]"
                                />
                                <Label
                                  htmlFor={slot.id}
                                  className="cursor-pointer text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                  {slot.label}
                                </Label>
                              </div>
                            </RadioGroup>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-3 flex items-center">
                        <Clock className="w-5 h-5 ml-2 text-[#FF6A5C]" />
                        بعد از ظهر (۱۲ تا ۴)
                      </h3>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {timeSlots.afternoon.map((slot) => (
                          <div key={slot.id}>
                            <RadioGroup value={timeSlot} onValueChange={setTimeSlot}>
                              <div className="flex items-center space-x-2 space-x-reverse">
                                <RadioGroupItem
                                  value={slot.id}
                                  id={slot.id}
                                  className="border-[#02153D] text-[#02153D]"
                                />
                                <Label
                                  htmlFor={slot.id}
                                  className="cursor-pointer text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                  {slot.label}
                                </Label>
                              </div>
                            </RadioGroup>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-3 flex items-center">
                        <Clock className="w-5 h-5 ml-2 text-[#FF6A5C]" />
                        عصر (۴ تا ۸)
                      </h3>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {timeSlots.evening.map((slot) => (
                          <div key={slot.id}>
                            <RadioGroup value={timeSlot} onValueChange={setTimeSlot}>
                              <div className="flex items-center space-x-2 space-x-reverse">
                                <RadioGroupItem
                                  value={slot.id}
                                  id={slot.id}
                                  className="border-[#02153D] text-[#02153D]"
                                />
                                <Label
                                  htmlFor={slot.id}
                                  className="cursor-pointer text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                  {slot.label}
                                </Label>
                              </div>
                            </RadioGroup>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Consultant Selection */}
                {step === 3 && (
                  <div className="space-y-4">
                    <p className="text-sm text-gray-500 mb-4">
                      مشاوران زیر در تاریخ و ساعت انتخابی شما در دسترس هستند:
                    </p>
                    <Select value={consultant} onValueChange={setConsultant}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="یک مشاور انتخاب کنید" />
                      </SelectTrigger>
                      <SelectContent>
                        {getAvailableConsultants().map((c) => (
                          <SelectItem key={c.id} value={c.id.toString()}>
                            {c.name} - {c.specialty}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    {consultant && (
                      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-medium text-[#02153D]">{getSelectedConsultant()?.name}</h4>
                        <p className="text-sm text-gray-600">{getSelectedConsultant()?.specialty}</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Step 4: Confirmation */}
                {step === 4 && (
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-medium text-[#02153D] mb-4">خلاصه رزرو</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-500">تاریخ:</span>
                          <span className="font-medium">{date ? formatPersianDate(date) : ""}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">ساعت:</span>
                          <span className="font-medium">{getSelectedTimeSlot()?.time}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">مشاور:</span>
                          <span className="font-medium">{getSelectedConsultant()?.name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">تخصص:</span>
                          <span className="font-medium">{getSelectedConsultant()?.specialty}</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg flex items-start">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 ml-3 flex-shrink-0" />
                      <div>
                        <p className="text-green-800 font-medium">رزرو شما آماده ثبت است</p>
                        <p className="text-green-600 text-sm mt-1">
                          با کلیک بر روی دکمه «ثبت نهایی»، رزرو شما ثبت خواهد شد و یک ایمیل تأییدیه برای شما ارسال
                          می‌شود.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex justify-between">
                {step > 1 ? (
                  <Button variant="outline" onClick={handleBack}>
                    بازگشت
                  </Button>
                ) : (
                  <div></div>
                )}
                {step < 4 ? (
                  <Button
                    onClick={handleNext}
                    disabled={(step === 1 && !date) || (step === 2 && !timeSlot) || (step === 3 && !consultant)}
                    className="bg-[#02153D] hover:bg-[#02153D]/90"
                  >
                    ادامه
                  </Button>
                ) : (
                  <Button className="bg-[#FF6A5C] hover:bg-[#FF6A5C]/90">ثبت نهایی</Button>
                )}
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
