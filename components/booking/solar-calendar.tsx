"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

// Persian months
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
const persianDays = ["ش", "ی", "د", "س", "چ", "پ", "ج"]

interface SolarCalendarProps {
  selectedDate: Date | null
  onDateSelect: (date: Date) => void
}

export function SolarCalendar({ selectedDate, onDateSelect }: SolarCalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date())

  // Convert Gregorian to Persian date (simplified)
  const toPersianDate = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate()

    // Simplified conversion - in real app, use proper Persian calendar library
    const persianYear = year - 621
    return { year: persianYear, month, day }
  }

  const generateCalendarDays = () => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const today = new Date()

    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const startDate = new Date(firstDay)
    startDate.setDate(startDate.getDate() - firstDay.getDay())

    const days = []
    const currentDateIter = new Date(startDate)

    for (let i = 0; i < 42; i++) {
      const isCurrentMonth = currentDateIter.getMonth() === month
      const isToday = currentDateIter.toDateString() === today.toDateString()
      const isSelected = selectedDate?.toDateString() === currentDateIter.toDateString()
      const isPast = currentDateIter < today && !isToday
      const isWeekend = currentDateIter.getDay() === 5 // Friday

      days.push({
        date: new Date(currentDateIter),
        day: currentDateIter.getDate(),
        isCurrentMonth,
        isToday,
        isSelected,
        isPast,
        isWeekend,
        isAvailable: isCurrentMonth && !isPast && !isWeekend,
      })

      currentDateIter.setDate(currentDateIter.getDate() + 1)
    }

    return days
  }

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))
  }

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))
  }

  const calendarDays = generateCalendarDays()
  const persianDate = toPersianDate(currentDate)

  return (
    <Card className="w-full">
      <CardHeader className="bg-gradient-to-r from-[#02153D] to-[#FF6A5C] text-white">
        <div className="flex items-center justify-between">
          <Button variant="ghost" size="sm" onClick={handlePrevMonth} className="text-white hover:bg-white/20">
            <ChevronRight className="h-4 w-4" />
          </Button>
          <CardTitle className="text-xl">
            {persianMonths[currentDate.getMonth()]} {persianDate.year}
          </CardTitle>
          <Button variant="ghost" size="sm" onClick={handleNextMonth} className="text-white hover:bg-white/20">
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        {/* Days of week header */}
        <div className="grid grid-cols-7 gap-2 mb-4">
          {persianDays.map((day) => (
            <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-2">
          {calendarDays.map((day, index) => (
            <button
              key={index}
              onClick={() => day.isAvailable && onDateSelect(day.date)}
              disabled={!day.isAvailable}
              className={cn(
                "h-12 rounded-lg text-sm font-medium transition-all duration-200",
                day.isCurrentMonth
                  ? day.isAvailable
                    ? day.isSelected
                      ? "bg-[#FF6A5C] text-white shadow-lg"
                      : day.isToday
                        ? "bg-[#02153D] text-white"
                        : "bg-gray-50 text-gray-900 hover:bg-[#FF6A5C]/10 hover:text-[#FF6A5C]"
                    : "text-gray-300 cursor-not-allowed"
                  : "text-gray-300 cursor-not-allowed",
              )}
            >
              {day.day}
              {day.isAvailable && <div className="w-1 h-1 bg-[#FF6A5C] rounded-full mx-auto mt-1"></div>}
            </button>
          ))}
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-6 mt-6 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#02153D] rounded"></div>
            <span>امروز</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#FF6A5C] rounded"></div>
            <span>انتخاب شده</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gray-50 border border-gray-200 rounded"></div>
            <span>در دسترس</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
