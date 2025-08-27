"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, FileText, ShoppingCart, MessageSquare, GraduationCap, Calendar, Phone, Mail } from "lucide-react"
import { ApplicationsSection } from "@/components/dashboard/applications-section"
import { ServicesSection } from "@/components/dashboard/services-section"
import { MessagesSection } from "@/components/dashboard/messages-section"
import { DashboardOverview } from "@/components/dashboard/overview"
import { DashboardWelcome } from "@/components/dashboard/welcome"
import { RecentApplications } from "@/components/dashboard/recent-applications"
import { UpcomingDeadlines } from "@/components/dashboard/upcoming-deadlines"
import { RecentMessages } from "@/components/dashboard/recent-messages"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("profile")

  // Mock user data
  const user = {
    id: "1",
    name: "علی احمدی",
    email: "ali@example.com",
    phone: "09123456789",
    avatar: "/placeholder.svg?height=100&width=100",
    address: "تهران، ایران",
    education: "کارشناسی مهندسی کامپیوتر",
    gpa: "18.5",
    birthdate: "1378/05/15",
    joinDate: "1402/08/20",
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Avatar className="w-20 h-20">
                  <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                  <AvatarFallback className="bg-gradient-to-r from-blue-500 to-green-500 text-white text-2xl">
                    {user.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-3xl font-bold text-gray-800">خوش آمدید، {user.name}! 👋</h1>
                  <p className="text-gray-600">عضو از {user.joinDate}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <GraduationCap className="w-4 h-4" />
                      دانشجو
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      فعال
                    </Badge>
                  </div>
                </div>
              </div>
              <div className="text-left">
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <Mail className="w-4 h-4" />
                  <span>{user.email}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Phone className="w-4 h-4" />
                  <span>{user.phone}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-white shadow-lg rounded-xl p-1">
            <TabsTrigger value="profile" className="flex items-center gap-2 rounded-lg">
              <User className="w-4 h-4" />
              پروفایل
            </TabsTrigger>
            <TabsTrigger value="applications" className="flex items-center gap-2 rounded-lg">
              <FileText className="w-4 h-4" />
              درخواست‌ها
            </TabsTrigger>
            <TabsTrigger value="services" className="flex items-center gap-2 rounded-lg">
              <ShoppingCart className="w-4 h-4" />
              خدمات
            </TabsTrigger>
            <TabsTrigger value="messages" className="flex items-center gap-2 rounded-lg">
              <MessageSquare className="w-4 h-4" />
              پیام‌ها
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <DashboardWelcome />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <DashboardOverview />
              <UpcomingDeadlines />
              <RecentMessages />
            </div>
            <RecentApplications />
          </TabsContent>

          <TabsContent value="applications">
            <ApplicationsSection />
          </TabsContent>

          <TabsContent value="services">
            <ServicesSection />
          </TabsContent>

          <TabsContent value="messages">
            <MessagesSection />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
