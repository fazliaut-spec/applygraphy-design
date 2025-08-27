"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { User, FileText, CreditCard, MessageSquare } from "lucide-react"

export function DashboardWelcome() {
  const profileCompletion = 75

  return (
    <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
      <CardHeader>
        <CardTitle className="text-xl">خوش آمدید به ApplyGraphy!</CardTitle>
        <CardDescription>پنل کاربری شما آماده است. برای شروع، پروفایل خود را تکمیل کنید.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>تکمیل پروفایل</span>
            <span>{profileCompletion}%</span>
          </div>
          <Progress value={profileCompletion} className="h-2" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Button variant="outline" size="sm" className="flex flex-col h-auto py-3 bg-transparent">
            <User className="h-5 w-5 mb-1" />
            <span className="text-xs">تکمیل پروفایل</span>
          </Button>
          <Button variant="outline" size="sm" className="flex flex-col h-auto py-3 bg-transparent">
            <FileText className="h-5 w-5 mb-1" />
            <span className="text-xs">آپلود مدارک</span>
          </Button>
          <Button variant="outline" size="sm" className="flex flex-col h-auto py-3 bg-transparent">
            <CreditCard className="h-5 w-5 mb-1" />
            <span className="text-xs">خرید خدمات</span>
          </Button>
          <Button variant="outline" size="sm" className="flex flex-col h-auto py-3 bg-transparent">
            <MessageSquare className="h-5 w-5 mb-1" />
            <span className="text-xs">پشتیبانی</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
