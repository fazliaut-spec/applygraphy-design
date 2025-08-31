"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { X, Target, CheckCircle } from "lucide-react"

export function ProfileCompletion() {
  const [isVisible, setIsVisible] = useState(true)

  const completionPercentage = 65
  const missingItems = ["آپلود عکس پروفایل", "افزودن نمره زبان", "تکمیل بخش تجربیات کاری"]

  if (!isVisible) return null

  return (
    <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-blue-200 mb-6">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-6 h-6 text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-800">
                پروفایل خود را تکمیل کنید تا پیشنهادات شخصی‌سازی شده دریافت کنید 🎯
              </h3>
            </div>

            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">پیشرفت تکمیل پروفایل</span>
                <span className="text-sm font-semibold text-blue-600">{completionPercentage}%</span>
              </div>
              <Progress value={completionPercentage} className="h-2" />
            </div>

            <div className="space-y-2 mb-4">
              <p className="text-sm text-gray-600 font-medium">موارد باقی‌مانده:</p>
              {missingItems.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-gray-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <Button className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white">
              تکمیل پروفایل
            </Button>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsVisible(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
