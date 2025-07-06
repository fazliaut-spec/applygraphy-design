"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { useAuth } from "@/lib/auth/auth-provider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  User,
  FileText,
  History,
  ShoppingBag,
  Upload,
  Download,
  CheckCircle,
  Clock,
  XCircle,
  GraduationCap,
} from "lucide-react"
import { LoginModal } from "@/components/auth/login-modal"

export default function ProfilePage() {
  const { user, updateProfile } = useAuth()
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [profileData, setProfileData] = useState({
    address: user?.profile?.address || "",
    phone: user?.profile?.phone || "",
    educationLevel: user?.profile?.educationLevel || "",
    universityName: user?.profile?.universityName || "",
    gpa: user?.profile?.gpa || "",
  })

  if (!user) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="py-16">
          <div className="container mx-auto px-4 text-center">
            <User className="h-16 w-16 mx-auto mb-4 text-gray-400" />
            <h1 className="text-3xl font-bold text-[#02153D] mb-4">پروفایل کاربری</h1>
            <p className="text-gray-600 mb-8">برای دسترسی به پروفایل خود وارد شوید</p>
            <Button onClick={() => setShowLoginModal(true)} className="bg-[#FF6A5C] hover:bg-[#FF6A5C]/90">
              ورود / ثبت نام
            </Button>
          </div>
        </main>
        <Footer />
        <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
      </div>
    )
  }

  const handleProfileUpdate = () => {
    updateProfile(profileData)
    alert("پروفایل با موفقیت به‌روزرسانی شد")
  }

  const mockConsultations = [
    {
      id: "1",
      date: new Date("2024-01-15"),
      time: "14:00",
      service: "مشاوره جامع تحصیلی",
      status: "completed" as const,
      notes: "بررسی مدارک و انتخاب دانشگاه‌های مناسب",
    },
    {
      id: "2",
      date: new Date("2024-02-01"),
      time: "10:00",
      service: "مشاوره ویزا",
      status: "upcoming" as const,
    },
  ]

  const mockServices = [
    {
      id: "1",
      name: "پکیج کامل",
      price: 2000,
      currency: "EUR",
      purchaseDate: new Date("2024-01-01"),
      status: "active" as const,
    },
    {
      id: "2",
      name: "مشاوره ویزا",
      price: 250,
      currency: "EUR",
      purchaseDate: new Date("2024-01-10"),
      status: "active" as const,
    },
  ]

  const suggestedUniversities = [
    { name: "دانشگاه تورنتو", country: "کانادا", match: "95%", program: "مهندسی کامپیوتر" },
    { name: "دانشگاه آکسفورد", country: "انگلستان", match: "88%", program: "علوم کامپیوتر" },
    { name: "دانشگاه میونیخ", country: "آلمان", match: "82%", program: "مهندسی نرم‌افزار" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Profile Header */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-[#FF6A5C] rounded-full flex items-center justify-center">
                    <User className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-[#02153D]">{user.name}</h1>
                    <p className="text-gray-600">{user.email}</p>
                    <Badge variant="secondary" className="mt-1">
                      {user.provider === "google" ? "گوگل" : user.provider === "linkedin" ? "لینکدین" : "دستی"}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Profile Tabs */}
            <Tabs defaultValue="profile" className="space-y-6">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="profile" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  پروفایل
                </TabsTrigger>
                <TabsTrigger value="documents" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  مدارک
                </TabsTrigger>
                <TabsTrigger value="history" className="flex items-center gap-2">
                  <History className="h-4 w-4" />
                  تاریخچه
                </TabsTrigger>
                <TabsTrigger value="services" className="flex items-center gap-2">
                  <ShoppingBag className="h-4 w-4" />
                  خدمات
                </TabsTrigger>
                <TabsTrigger value="universities" className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" />
                  دانشگاه‌ها
                </TabsTrigger>
              </TabsList>

              {/* Profile Tab */}
              <TabsContent value="profile">
                <Card>
                  <CardHeader>
                    <CardTitle>اطلاعات شخصی</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="address">آدرس</Label>
                        <Textarea
                          id="address"
                          value={profileData.address}
                          onChange={(e) => setProfileData({ ...profileData, address: e.target.value })}
                          className="text-right"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">شماره تماس</Label>
                        <Input
                          id="phone"
                          value={profileData.phone}
                          onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                          className="text-right"
                        />
                      </div>
                      <div>
                        <Label htmlFor="education">سطح تحصیلات</Label>
                        <Select
                          value={profileData.educationLevel}
                          onValueChange={(value) => setProfileData({ ...profileData, educationLevel: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="انتخاب کنید" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="diploma">دیپلم</SelectItem>
                            <SelectItem value="bachelor">کارشناسی</SelectItem>
                            <SelectItem value="master">کارشناسی ارشد</SelectItem>
                            <SelectItem value="phd">دکتری</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="university">نام دانشگاه</Label>
                        <Input
                          id="university"
                          value={profileData.universityName}
                          onChange={(e) => setProfileData({ ...profileData, universityName: e.target.value })}
                          className="text-right"
                        />
                      </div>
                      <div>
                        <Label htmlFor="gpa">معدل</Label>
                        <Input
                          id="gpa"
                          value={profileData.gpa}
                          onChange={(e) => setProfileData({ ...profileData, gpa: e.target.value })}
                          className="text-right"
                        />
                      </div>
                    </div>
                    <Button onClick={handleProfileUpdate} className="bg-[#FF6A5C] hover:bg-[#FF6A5C]/90">
                      ذخیره تغییرات
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Documents Tab */}
              <TabsContent value="documents">
                <Card>
                  <CardHeader>
                    <CardTitle>مرکز مدارک</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                      <Upload className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                      <h3 className="text-lg font-medium mb-2">آپلود رزومه و مدارک</h3>
                      <p className="text-gray-600 mb-4">فایل‌های PDF، DOC یا DOCX را اینجا بکشید یا کلیک کنید</p>
                      <Button variant="outline">انتخاب فایل</Button>
                    </div>
                    <div className="mt-6">
                      <h4 className="font-medium mb-3">مدارک آپلود شده</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <FileText className="h-5 w-5 text-gray-500" />
                            <span>رزومه.pdf</span>
                          </div>
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* History Tab */}
              <TabsContent value="history">
                <Card>
                  <CardHeader>
                    <CardTitle>تاریخچه مشاوره‌ها</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mockConsultations.map((consultation) => (
                        <div key={consultation.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center gap-4">
                            <div
                              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                consultation.status === "completed"
                                  ? "bg-green-100"
                                  : consultation.status === "upcoming"
                                    ? "bg-blue-100"
                                    : "bg-red-100"
                              }`}
                            >
                              {consultation.status === "completed" ? (
                                <CheckCircle className="h-5 w-5 text-green-600" />
                              ) : consultation.status === "upcoming" ? (
                                <Clock className="h-5 w-5 text-blue-600" />
                              ) : (
                                <XCircle className="h-5 w-5 text-red-600" />
                              )}
                            </div>
                            <div>
                              <h4 className="font-medium">{consultation.service}</h4>
                              <p className="text-sm text-gray-600">
                                {consultation.date.toLocaleDateString("fa-IR")} - {consultation.time}
                              </p>
                              {consultation.notes && <p className="text-sm text-gray-500">{consultation.notes}</p>}
                            </div>
                          </div>
                          <Badge
                            variant={
                              consultation.status === "completed"
                                ? "default"
                                : consultation.status === "upcoming"
                                  ? "secondary"
                                  : "destructive"
                            }
                          >
                            {consultation.status === "completed"
                              ? "تکمیل شده"
                              : consultation.status === "upcoming"
                                ? "آینده"
                                : "لغو شده"}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Services Tab */}
              <TabsContent value="services">
                <Card>
                  <CardHeader>
                    <CardTitle>خدمات خریداری شده</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mockServices.map((service) => (
                        <div key={service.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <h4 className="font-medium">{service.name}</h4>
                            <p className="text-sm text-gray-600">
                              خریداری شده در: {service.purchaseDate.toLocaleDateString("fa-IR")}
                            </p>
                            <p className="text-lg font-bold text-[#FF6A5C]">€{service.price.toLocaleString()}</p>
                          </div>
                          <Badge variant={service.status === "active" ? "default" : "secondary"}>
                            {service.status === "active" ? "فعال" : "منقضی"}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Universities Tab */}
              <TabsContent value="universities">
                <Card>
                  <CardHeader>
                    <CardTitle>دانشگاه‌های پیشنهادی</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {suggestedUniversities.map((university, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <h4 className="font-medium">{university.name}</h4>
                            <p className="text-sm text-gray-600">{university.country}</p>
                            <p className="text-sm text-gray-500">{university.program}</p>
                          </div>
                          <div className="text-left">
                            <div className="text-2xl font-bold text-[#FF6A5C]">{university.match}</div>
                            <div className="text-sm text-gray-500">تطبیق</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
