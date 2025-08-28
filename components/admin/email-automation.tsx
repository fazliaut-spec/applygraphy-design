"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"
import { Plus, Settings, Play, BarChart3, Clock, Users, Mail } from "lucide-react"

interface AutomationRule {
  id: string
  name: string
  trigger: "user_signup" | "payment_success" | "consultation_booked" | "application_submitted" | "visa_approved"
  templateId: string
  templateName: string
  delay: number
  delayUnit: "minutes" | "hours" | "days"
  conditions: Record<string, any>
  isActive: boolean
  stats: {
    sent: number
    opened: number
    clicked: number
  }
}

const mockAutomationRules: AutomationRule[] = [
  {
    id: "1",
    name: "خوش‌آمدگویی کاربران جدید",
    trigger: "user_signup",
    templateId: "welcome-new-user",
    templateName: "خوش‌آمدگویی کاربر جدید",
    delay: 5,
    delayUnit: "minutes",
    conditions: {},
    isActive: true,
    stats: { sent: 245, opened: 198, clicked: 87 },
  },
  {
    id: "2",
    name: "تأیید پرداخت",
    trigger: "payment_success",
    templateId: "payment-confirmation",
    templateName: "تأیید پرداخت",
    delay: 0,
    delayUnit: "minutes",
    conditions: {},
    isActive: true,
    stats: { sent: 156, opened: 142, clicked: 89 },
  },
  {
    id: "3",
    name: "تأیید رزرو مشاوره",
    trigger: "consultation_booked",
    templateId: "consultation-booking",
    templateName: "تأیید رزرو مشاوره",
    delay: 2,
    delayUnit: "minutes",
    conditions: {},
    isActive: true,
    stats: { sent: 89, opened: 76, clicked: 34 },
  },
  {
    id: "4",
    name: "تبریک تأیید ویزا",
    trigger: "visa_approved",
    templateId: "visa-approval",
    templateName: "تأیید ویزا",
    delay: 1,
    delayUnit: "hours",
    conditions: {},
    isActive: false,
    stats: { sent: 23, opened: 21, clicked: 18 },
  },
]

const triggerLabels = {
  user_signup: "ثبت‌نام کاربر",
  payment_success: "پرداخت موفق",
  consultation_booked: "رزرو مشاوره",
  application_submitted: "ارسال درخواست",
  visa_approved: "تأیید ویزا",
}

const triggerColors = {
  user_signup: "bg-green-100 text-green-800",
  payment_success: "bg-blue-100 text-blue-800",
  consultation_booked: "bg-purple-100 text-purple-800",
  application_submitted: "bg-orange-100 text-orange-800",
  visa_approved: "bg-yellow-100 text-yellow-800",
}

export function EmailAutomation() {
  const [automationRules, setAutomationRules] = useState<AutomationRule[]>(mockAutomationRules)
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [selectedRule, setSelectedRule] = useState<AutomationRule | null>(null)

  const handleToggleRule = (ruleId: string) => {
    setAutomationRules((prev) =>
      prev.map((rule) => (rule.id === ruleId ? { ...rule, isActive: !rule.isActive } : rule)),
    )
    toast({
      title: "تغییر وضعیت",
      description: "وضعیت قانون اتوماسیون تغییر کرد",
    })
  }

  const calculateOpenRate = (rule: AutomationRule) => {
    if (rule.stats.sent === 0) return 0
    return Math.round((rule.stats.opened / rule.stats.sent) * 100)
  }

  const calculateClickRate = (rule: AutomationRule) => {
    if (rule.stats.opened === 0) return 0
    return Math.round((rule.stats.clicked / rule.stats.opened) * 100)
  }

  return (
    <div className="space-y-6 font-iranSans">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">اتوماسیون ایمیل</h2>
          <p className="text-muted-foreground">مدیریت قوانین ارسال خودکار ایمیل</p>
        </div>
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 ml-2" />
              قانون جدید
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>ایجاد قانون اتوماسیون جدید</DialogTitle>
              <DialogDescription>قانون جدید برای ارسال خودکار ایمیل تنظیم کنید</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="ruleName">نام قانون</Label>
                  <Input id="ruleName" placeholder="نام قانون را وارد کنید" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="trigger">رویداد محرک</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="انتخاب رویداد" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="user_signup">ثبت‌نام کاربر</SelectItem>
                      <SelectItem value="payment_success">پرداخت موفق</SelectItem>
                      <SelectItem value="consultation_booked">رزرو مشاوره</SelectItem>
                      <SelectItem value="application_submitted">ارسال درخواست</SelectItem>
                      <SelectItem value="visa_approved">تأیید ویزا</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="delay">تأخیر</Label>
                  <Input id="delay" type="number" placeholder="0" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="delayUnit">واحد زمان</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="انتخاب واحد" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="minutes">دقیقه</SelectItem>
                      <SelectItem value="hours">ساعت</SelectItem>
                      <SelectItem value="days">روز</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="template">قالب ایمیل</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="انتخاب قالب" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="welcome-new-user">خوش‌آمدگویی کاربر جدید</SelectItem>
                      <SelectItem value="payment-confirmation">تأیید پرداخت</SelectItem>
                      <SelectItem value="consultation-booking">تأیید رزرو مشاوره</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="conditions">شرایط (اختیاری)</Label>
                <Textarea id="conditions" placeholder="شرایط اضافی برای اجرای قانون..." />
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                  لغو
                </Button>
                <Button onClick={() => setIsCreateDialogOpen(false)}>ایجاد قانون</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">قوانین فعال</CardTitle>
            <Play className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{automationRules.filter((rule) => rule.isActive).length}</div>
            <p className="text-xs text-muted-foreground">از {automationRules.length} قانون کل</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">ایمیل‌های ارسالی</CardTitle>
            <Mail className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {automationRules.reduce((sum, rule) => sum + rule.stats.sent, 0).toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">در ماه جاری</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">نرخ بازشدن</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.round(
                (automationRules.reduce((sum, rule) => sum + rule.stats.opened, 0) /
                  automationRules.reduce((sum, rule) => sum + rule.stats.sent, 0)) *
                  100,
              )}
              %
            </div>
            <p className="text-xs text-muted-foreground">میانگین کلی</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">نرخ کلیک</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.round(
                (automationRules.reduce((sum, rule) => sum + rule.stats.clicked, 0) /
                  automationRules.reduce((sum, rule) => sum + rule.stats.opened, 0)) *
                  100,
              )}
              %
            </div>
            <p className="text-xs text-muted-foreground">میانگین کلی</p>
          </CardContent>
        </Card>
      </div>

      {/* Automation Rules */}
      <div className="grid grid-cols-1 gap-4">
        {automationRules.map((rule) => (
          <Card key={rule.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <Switch checked={rule.isActive} onCheckedChange={() => handleToggleRule(rule.id)} />
                    <div>
                      <CardTitle className="text-lg">{rule.name}</CardTitle>
                      <CardDescription>قالب: {rule.templateName}</CardDescription>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className={triggerColors[rule.trigger]}>{triggerLabels[rule.trigger]}</Badge>
                  <Button variant="outline" size="sm">
                    <Settings className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">
                    تأخیر: {rule.delay}{" "}
                    {rule.delayUnit === "minutes" ? "دقیقه" : rule.delayUnit === "hours" ? "ساعت" : "روز"}
                  </span>
                </div>
                <div className="text-sm">
                  <span className="text-muted-foreground">ارسال شده:</span>
                  <span className="font-medium ml-1">{rule.stats.sent.toLocaleString()}</span>
                </div>
                <div className="text-sm">
                  <span className="text-muted-foreground">نرخ بازشدن:</span>
                  <span className="font-medium ml-1">{calculateOpenRate(rule)}%</span>
                </div>
                <div className="text-sm">
                  <span className="text-muted-foreground">نرخ کلیک:</span>
                  <span className="font-medium ml-1">{calculateClickRate(rule)}%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
