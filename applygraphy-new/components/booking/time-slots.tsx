"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock } from "lucide-react"
import { cn } from "@/lib/utils"

interface TimeSlot {
  id: string
  time: string
  available: boolean
  type: "morning" | "afternoon" | "evening"
}

interface TimeSlotsProps {
  selectedDate: Date | null
  selectedTime: string | null
  onTimeSelect: (timeId: string) => void
}

export function TimeSlots({ selectedDate, selectedTime, onTimeSelect }: TimeSlotsProps) {
  // Generate time slots for the selected date
  const generateTimeSlots = (): TimeSlot[] => {
    const slots: TimeSlot[] = []

    // Morning slots (8 AM - 12 PM)
    for (let hour = 8; hour < 12; hour++) {
      slots.push({
        id: `morning-${hour}`,
        time: `${hour.toString().padStart(2, "0")}:00`,
        available: Math.random() > 0.3, // Random availability for demo
        type: "morning",
      })
    }

    // Afternoon slots (2 PM - 6 PM)
    for (let hour = 14; hour < 18; hour++) {
      slots.push({
        id: `afternoon-${hour}`,
        time: `${hour.toString().padStart(2, "0")}:00`,
        available: Math.random() > 0.3,
        type: "afternoon",
      })
    }

    // Evening slots (7 PM - 9 PM)
    for (let hour = 19; hour < 21; hour++) {
      slots.push({
        id: `evening-${hour}`,
        time: `${hour.toString().padStart(2, "0")}:00`,
        available: Math.random() > 0.4,
        type: "evening",
      })
    }

    return slots
  }

  const timeSlots = generateTimeSlots()
  const morningSlots = timeSlots.filter((slot) => slot.type === "morning")
  const afternoonSlots = timeSlots.filter((slot) => slot.type === "afternoon")
  const eveningSlots = timeSlots.filter((slot) => slot.type === "evening")

  if (!selectedDate) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <Clock className="h-12 w-12 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">لطفا ابتدا یک تاریخ انتخاب کنید</p>
        </CardContent>
      </Card>
    )
  }

  const formatPersianDate = (date: Date) => {
    return date.toLocaleDateString("fa-IR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const convertToPersianTime = (time: string) => {
    const [hour, minute] = time.split(":")
    const persianHour = hour.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number.parseInt(d)])
    const persianMinute = minute.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number.parseInt(d)])
    return `${persianHour}:${persianMinute}`
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg text-[#02153D] flex items-center gap-2">
          <Clock className="h-5 w-5" />
          انتخاب ساعت مشاوره
        </CardTitle>
        <p className="text-sm text-gray-600">{formatPersianDate(selectedDate)}</p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Morning slots */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3">صبح (۸ تا ۱۲)</h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {morningSlots.map((slot) => (
              <Button
                key={slot.id}
                variant={selectedTime === slot.id ? "default" : "outline"}
                size="sm"
                disabled={!slot.available}
                onClick={() => onTimeSelect(slot.id)}
                className={cn(
                  "text-xs h-10",
                  selectedTime === slot.id
                    ? "bg-[#FF6A5C] hover:bg-[#FF6A5C]/90 border-[#FF6A5C]"
                    : slot.available
                      ? "hover:border-[#FF6A5C] hover:text-[#FF6A5C]"
                      : "opacity-50 cursor-not-allowed",
                )}
              >
                {convertToPersianTime(slot.time)}
              </Button>
            ))}
          </div>
        </div>

        {/* Afternoon slots */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3">بعدازظهر (۱۴ تا ۱۸)</h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {afternoonSlots.map((slot) => (
              <Button
                key={slot.id}
                variant={selectedTime === slot.id ? "default" : "outline"}
                size="sm"
                disabled={!slot.available}
                onClick={() => onTimeSelect(slot.id)}
                className={cn(
                  "text-xs h-10",
                  selectedTime === slot.id
                    ? "bg-[#FF6A5C] hover:bg-[#FF6A5C]/90 border-[#FF6A5C]"
                    : slot.available
                      ? "hover:border-[#FF6A5C] hover:text-[#FF6A5C]"
                      : "opacity-50 cursor-not-allowed",
                )}
              >
                {convertToPersianTime(slot.time)}
              </Button>
            ))}
          </div>
        </div>

        {/* Evening slots */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3">عصر (۱۹ تا ۲۱)</h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {eveningSlots.map((slot) => (
              <Button
                key={slot.id}
                variant={selectedTime === slot.id ? "default" : "outline"}
                size="sm"
                disabled={!slot.available}
                onClick={() => onTimeSelect(slot.id)}
                className={cn(
                  "text-xs h-10",
                  selectedTime === slot.id
                    ? "bg-[#FF6A5C] hover:bg-[#FF6A5C]/90 border-[#FF6A5C]"
                    : slot.available
                      ? "hover:border-[#FF6A5C] hover:text-[#FF6A5C]"
                      : "opacity-50 cursor-not-allowed",
                )}
              >
                {convertToPersianTime(slot.time)}
              </Button>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-6 pt-4 border-t text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#FF6A5C] rounded"></div>
            <span>انتخاب شده</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 border border-gray-300 rounded"></div>
            <span>در دسترس</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gray-200 rounded"></div>
            <span>رزرو شده</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
