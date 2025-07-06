"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { useAuth } from "@/lib/auth/auth-provider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bell, Award } from "lucide-react"
import { SocialFeed } from "@/components/social/social-feed"
import { UniversityFollows } from "@/components/social/university-follows"
import { SuggestedUsers } from "@/components/social/suggested-users"
import { LanguagePartners } from "@/components/social/language-partners"
import { ChatSidebar } from "@/components/chat/chat-sidebar"
import { ProfileCompletion } from "@/components/profile/profile-completion"
import { ScholarshipAlerts } from "@/components/dashboard/scholarship-alerts"
import { PhDOpportunities } from "@/components/phd/phd-opportunities"

export default function DashboardPage() {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState("feed")

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
        <Header />
        <main className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">به جامعه متقاضیان بین‌المللی بپیوندید</h1>
            <p className="text-xl text-gray-600 mb-8">
              ارتباط برقرار کنید، تجربه به اشتراک بگذارید، و مسیر تحصیلی خود را بسازید
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-8 py-3 rounded-full"
            >
              شروع رایگان
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Header />

      <main className="container mx-auto px-4 py-6">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                  <AvatarFallback className="bg-gradient-to-r from-blue-500 to-green-500 text-white text-xl">
                    {user.name?.charAt(0) || "U"}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-2xl font-bold text-gray-800">خوش آمدید، {user.name}! 👋</h1>
                  <p className="text-gray-600">آماده برای ادامه سفر تحصیلی‌تان؟</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Award className="w-4 h-4" />
                  رتبه: مبتدی
                </Badge>
                <Button size="sm" variant="outline">
                  <Bell className="w-4 h-4 mr-2" />
                  اعلان‌ها
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Completion Banner */}
        <ProfileCompletion />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Quick Stats */}
            <Card className="bg-white shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-lg">آمار شما</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">دنبال‌کنندگان</span>
                  <span className="font-bold text-blue-600">127</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">دنبال‌شده</span>
                  <span className="font-bold text-green-600">89</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">دانشگاه‌های دنبال‌شده</span>
                  <span className="font-bold text-purple-600">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">امتیاز</span>
                  <span className="font-bold text-orange-600">450</span>
                </div>
              </CardContent>
            </Card>

            {/* Language Partners */}
            <LanguagePartners />

            {/* Suggested Users */}
            <SuggestedUsers />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
              <TabsList className="grid w-full grid-cols-4 bg-white shadow-lg rounded-xl">
                <TabsTrigger value="feed" className="rounded-lg">
                  خانه
                </TabsTrigger>
                <TabsTrigger value="universities" className="rounded-lg">
                  دانشگاه‌ها
                </TabsTrigger>
                <TabsTrigger value="phd" className="rounded-lg">
                  فرصت‌های PhD
                </TabsTrigger>
                <TabsTrigger value="scholarships" className="rounded-lg">
                  بورسیه‌ها
                </TabsTrigger>
              </TabsList>

              <TabsContent value="feed">
                <SocialFeed />
              </TabsContent>

              <TabsContent value="universities">
                <UniversityFollows />
              </TabsContent>

              <TabsContent value="phd">
                <PhDOpportunities />
              </TabsContent>

              <TabsContent value="scholarships">
                <ScholarshipAlerts />
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <ChatSidebar />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
