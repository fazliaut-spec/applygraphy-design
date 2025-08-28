"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { toast } from "@/hooks/use-toast"
import { Zap, Plus, Settings, Users, Mail, Clock, TrendingUp } from "lucide-react"

interface EmailAutomation {
  id: string
  name: string
  trigger: "user_signup" | "payment_received" | "application_submitted" | "visa_approved" | "consultation_requested"
  templateId: string
  delay: number // in hours
  isActive: boolean
  conditions?: Record<string, any>
  stats: {
    sent: number
    opened: number
    clicked: number
  }
}

const mockAutomations: EmailAutomation[] = [
  {
    id: "1",
    name: "خوشامدگویی به کاربران جدید",
    trigger: "user_signup",
    templateId: "welcome-new-customer",
    delay: 0,
    isActive: true,
    stats: { sent: 245, opened: 198, clicked: 87 },
  },
  {
    id: "2",
    name: "تأیید پرداخت",
    trigger: "payment_received",
    templateId: "payment-confirmation",
    delay: 0,
    isActive: true,
    stats: { sent: 89, opened: 84, clicked: 45 },
  },
  {
    id: "3",
    name: "تبریک تأیید ویزا",
    trigger: "visa_approved",
    templateId: "visa-approval-congratulations",
    delay: 1,
    isActive: true,
    stats: { sent: 23, opened: 23, clicked: 18 },
  },
  {
    id: "4",
    name: "پیگیری درخواست مشاوره",
    trigger: "consultation_requested",
    templateId: "consultation-request-received",
    delay: 0,
    isActive: true,
    stats: { sent: 156, opened: 134, clicked: 67 },
  },
]

const triggerLabels = {
  user_signup: "ثبت‌نام کاربر",
  payment_received: "دریافت پرداخت",
  application_submitted: "ارسال درخواست",
  visa_approved: "تأیید ویزا",
  consultation_requested: "درخواست مشاوره",
}

export function EmailAutomation() {
  const [automations, setAutomations] = useState<EmailAutomation[]>(mockAutomations)
  const [selectedAutomation, setSelectedAutomation] = useState<EmailAutomation | null>(null)
  const [isCreateOpen, setIsCreateOpen] = useState(false)

  const toggleAutomation = (id: string) => {
    setAutomations((prev) =>
      prev.map((automation) => (automation.id === id ? { ...automation, isActive: !automation.isActive } : automation)),
    )

    toast({
      title: "تغییرات ذخیره شد",
      description: "وضعیت اتوماسیون به‌روزرسانی شد",
    })
  }

  const calculateOpenRate = (stats: EmailAutomation["stats"]) => {
    return stats.sent > 0 ? Math.round((stats.opened / stats.sent) * 100) : 0
  }

  const calculateClickRate = (stats: EmailAutomation["stats"]) => {
    return stats.opened > 0 ? Math.round((stats.clicked / stats.opened) * 100) : 0
  }

  return (
    <div className="space-y-6" dir="rtl">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">اتوماسیون ایمیل</h2>
          <p className="text-gray-600">مدیریت ارسال خودکار ایمیل‌ها</p>
        </div>
        <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              اتوماسیون جدید
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl" dir="rtl">
            <DialogHeader>
              <DialogTitle>ایجاد اتوماسیون جدید</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="automation-name">نام اتوماسیون</Label>
                <Input id="automation-name" placeholder="نام اتوماسیون را وارد کنید" />
              </div>
              <div>
                <Label htmlFor="trigger">رویداد محرک</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="رویداد را انتخاب کنید" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="user_signup">ثبت‌نام کاربر</SelectItem>
                    <SelectItem value="payment_received">دریافت پرداخت</SelectItem>
                    <SelectItem value="application_submitted">ارسال درخواست</SelectItem>
                    <SelectItem value="visa_approved">تأیید ویزا</SelectItem>
                    <SelectItem value="consultation_requested">درخواست مشاوره</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="template">قالب ایمیل</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="قالب را انتخاب کنید" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="welcome-new-customer">خوشامدگویی به مشتری جدید</SelectItem>
                    <SelectItem value="payment-confirmation">تأیید پرداخت</SelectItem>
                    <SelectItem value="visa-approval-congratulations">تبریک تأیید ویزا</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="delay">تأخیر ارسال (ساعت)</Label>
                <Input id="delay" type="number" placeholder="0" min="0" />
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setIsCreateOpen(false)}>
                  انصراف
                </Button>
                <Button onClick={() => setIsCreateOpen(false)}>ایجاد اتوماسیون</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-[#FF6A5C]" />
              <div>
                <p className="text-sm text-gray-600">اتوماسیون‌های فعال</p>
                <p className="text-2xl font-bold">{automations.filter((a) => a.isActive).length}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-blue-500" />
              <div>
                <p className="text-sm text-gray-600">ایمیل‌های ارسالی</p>
                <p className="text-2xl font-bold">{automations.reduce((sum, a) => sum + a.stats.sent, 0)}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-500" />
              <div>
                <p className="text-sm text-gray-600">نرخ بازشدن</p>
                <p className="text-2xl font-bold">
                  {Math.round(
                    (automations.reduce((sum, a) => sum + a.stats.opened, 0) /
                      automations.reduce((sum, a) => sum + a.stats.sent, 0)) *
                      100,
                  )}
                  %
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-purple-500" />
              <div>
                <p className="text-sm text-gray-600">نرخ کلیک</p>
                <p className="text-2xl font-bold">
                  {Math.round(
                    (automations.reduce((sum, a) => sum + a.stats.clicked, 0) /
                      automations.reduce((sum, a) => sum + a.stats.opened, 0)) *
                      100,
                  )}
                  %
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Automations List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {automations.map((automation) => (
          <Card key={automation.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${automation.isActive ? "bg-green-500" : "bg-gray-400"}`} />
                  <CardTitle className="text-lg">{automation.name}</CardTitle>
                </div>
                <Switch checked={automation.isActive} onCheckedChange={() => toggleAutomation(automation.id)} />
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline">{triggerLabels[automation.trigger]}</Badge>
                {automation.delay > 0 && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {automation.delay}ساعت
                  </Badge>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-blue-600">{automation.stats.sent}</p>
                  <p className="text-xs text-gray-600">ارسال شده</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-green-600">{calculateOpenRate(automation.stats)}%</p>
                  <p className="text-xs text-gray-600">نرخ بازشدن</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-purple-600">{calculateClickRate(automation.stats)}%</p>
                  <p className="text-xs text-gray-600">نرخ کلیک</p>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                  <Settings className="h-4 w-4 mr-1" />
                  تنظیمات
                </Button>
                <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  آمار
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
