"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import {
  Zap,
  Users,
  CreditCard,
  FileText,
  Plane,
  MessageCircle,
  Settings,
  BarChart3,
  Clock,
  Mail,
  CheckCircle,
  AlertCircle,
} from "lucide-react"
import { toast } from "sonner"

interface AutomationRule {
  id: string
  name: string
  trigger: string
  templateId: string
  templateName: string
  isActive: boolean
  delay: number // in minutes
  conditions: string[]
  stats: {
    sent: number
    delivered: number
    opened: number
    clicked: number
  }
}

const mockAutomations: AutomationRule[] = [
  {
    id: "welcome-signup",
    name: "خوشامدگویی کاربر جدید",
    trigger: "user_signup",
    templateId: "welcome-new-user",
    templateName: "خوشامدگویی کاربر جدید",
    isActive: true,
    delay: 0,
    conditions: ["user_verified"],
    stats: {
      sent: 1250,
      delivered: 1230,
      opened: 890,
      clicked: 340,
    },
  },
  {
    id: "consultation-confirm",
    name: "تأیید درخواست مشاوره",
    trigger: "consultation_request",
    templateId: "consultation-request",
    templateName: "تأیید درخواست مشاوره",
    isActive: true,
    delay: 5,
    conditions: ["payment_completed"],
    stats: {
      sent: 450,
      delivered: 445,
      opened: 380,
      clicked: 220,
    },
  },
  {
    id: "payment-success",
    name: "تأیید پرداخت",
    trigger: "payment_success",
    templateId: "payment-confirmation",
    templateName: "تأیید پرداخت",
    isActive: true,
    delay: 1,
    conditions: [],
    stats: {
      sent: 890,
      delivered: 885,
      opened: 750,
      clicked: 420,
    },
  },
  {
    id: "visa-approval",
    name: "تبریک تأیید ویزا",
    trigger: "visa_approved",
    templateId: "visa-approval",
    templateName: "تبریک تأیید ویزا",
    isActive: true,
    delay: 30,
    conditions: ["application_approved"],
    stats: {
      sent: 120,
      delivered: 118,
      opened: 115,
      clicked: 95,
    },
  },
  {
    id: "application-update",
    name: "به‌روزرسانی درخواست",
    trigger: "application_status_change",
    templateId: "application-update",
    templateName: "به‌روزرسانی وضعیت درخواست",
    isActive: false,
    delay: 10,
    conditions: ["status_changed"],
    stats: {
      sent: 680,
      delivered: 670,
      opened: 520,
      clicked: 180,
    },
  },
]

const triggerIcons = {
  user_signup: Users,
  consultation_request: MessageCircle,
  payment_success: CreditCard,
  visa_approved: Plane,
  application_status_change: FileText,
}

export default function EmailAutomation() {
  const [automations, setAutomations] = useState<AutomationRule[]>(mockAutomations)
  const [selectedAutomation, setSelectedAutomation] = useState<AutomationRule | null>(null)

  const toggleAutomation = (id: string) => {
    setAutomations((prev) =>
      prev.map((automation) => (automation.id === id ? { ...automation, isActive: !automation.isActive } : automation)),
    )
    toast.success("تنظیمات خودکارسازی به‌روزرسانی شد")
  }

  const calculateOpenRate = (stats: AutomationRule["stats"]) => {
    return stats.delivered > 0 ? Math.round((stats.opened / stats.delivered) * 100) : 0
  }

  const calculateClickRate = (stats: AutomationRule["stats"]) => {
    return stats.opened > 0 ? Math.round((stats.clicked / stats.opened) * 100) : 0
  }

  const getTotalStats = () => {
    return automations.reduce(
      (total, automation) => ({
        sent: total.sent + automation.stats.sent,
        delivered: total.delivered + automation.stats.delivered,
        opened: total.opened + automation.stats.opened,
        clicked: total.clicked + automation.stats.clicked,
      }),
      { sent: 0, delivered: 0, opened: 0, clicked: 0 },
    )
  }

  const totalStats = getTotalStats()

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">خودکارسازی ایمیل</h2>
          <p className="text-muted-foreground">مدیریت و تنظیم ارسال خودکار ایمیل‌ها</p>
        </div>
        <Button>
          <Zap className="w-4 h-4 ml-2" />
          قانون جدید
        </Button>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">کل ارسال</p>
                <p className="text-2xl font-bold">{totalStats.sent.toLocaleString()}</p>
              </div>
              <Mail className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">تحویل شده</p>
                <p className="text-2xl font-bold">{totalStats.delivered.toLocaleString()}</p>
                <p className="text-xs text-green-600">
                  {Math.round((totalStats.delivered / totalStats.sent) * 100)}% نرخ تحویل
                </p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">باز شده</p>
                <p className="text-2xl font-bold">{totalStats.opened.toLocaleString()}</p>
                <p className="text-xs text-blue-600">
                  {Math.round((totalStats.opened / totalStats.delivered) * 100)}% نرخ بازشدن
                </p>
              </div>
              <BarChart3 className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">کلیک شده</p>
                <p className="text-2xl font-bold">{totalStats.clicked.toLocaleString()}</p>
                <p className="text-xs text-purple-600">
                  {Math.round((totalStats.clicked / totalStats.opened) * 100)}% نرخ کلیک
                </p>
              </div>
              <AlertCircle className="w-8 h-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Automation Rules */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {automations.map((automation) => {
          const IconComponent = triggerIcons[automation.trigger as keyof typeof triggerIcons]
          const openRate = calculateOpenRate(automation.stats)
          const clickRate = calculateClickRate(automation.stats)

          return (
            <Card key={automation.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <IconComponent className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{automation.name}</CardTitle>
                      <CardDescription>{automation.templateName}</CardDescription>
                    </div>
                  </div>
                  <Switch checked={automation.isActive} onCheckedChange={() => toggleAutomation(automation.id)} />
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Trigger Info */}
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">تریگر:</span>
                  <Badge variant="outline">{automation.trigger}</Badge>
                </div>

                {automation.delay > 0 && (
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">تأخیر:</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{automation.delay} دقیقه</span>
                    </div>
                  </div>
                )}

                {/* Conditions */}
                {automation.conditions.length > 0 && (
                  <div className="space-y-2">
                    <span className="text-sm text-muted-foreground">شرایط:</span>
                    <div className="flex flex-wrap gap-1">
                      {automation.conditions.map((condition) => (
                        <Badge key={condition} variant="secondary" className="text-xs">
                          {condition}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                <Separator />

                {/* Stats */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">آمار عملکرد:</span>
                    <span className="font-medium">{automation.stats.sent} ارسال</span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span>نرخ بازشدن</span>
                      <span className="font-medium">{openRate}%</span>
                    </div>
                    <Progress value={openRate} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span>نرخ کلیک</span>
                      <span className="font-medium">{clickRate}%</span>
                    </div>
                    <Progress value={clickRate} className="h-2" />
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                    <Settings className="w-3 h-3 ml-1" />
                    تنظیمات
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                    <BarChart3 className="w-3 h-3 ml-1" />
                    گزارش
                  </Button>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
