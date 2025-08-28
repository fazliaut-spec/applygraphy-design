"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { ScrollArea } from "@/components/ui/scroll-area"
import { toast } from "@/hooks/use-toast"
import {
  Edit,
  Eye,
  Copy,
  Send,
  Plus,
  Search,
  MessageSquare,
  Users,
  CreditCard,
  FileText,
  Plane,
  Heart,
} from "lucide-react"
import { emailTemplates, type EmailTemplate } from "@/lib/email/templates"

const categoryIcons = {
  welcome: Heart,
  consultation: MessageSquare,
  "follow-up": Users,
  payment: CreditCard,
  application: FileText,
  visa: Plane,
}

const categoryColors = {
  welcome: "bg-pink-100 text-pink-800",
  consultation: "bg-blue-100 text-blue-800",
  "follow-up": "bg-green-100 text-green-800",
  payment: "bg-yellow-100 text-yellow-800",
  application: "bg-purple-100 text-purple-800",
  visa: "bg-indigo-100 text-indigo-800",
}

export function EmailTemplates() {
  const [selectedTemplate, setSelectedTemplate] = useState<EmailTemplate | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [previewVariables, setPreviewVariables] = useState<Record<string, string>>({})
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)
  const [isSendTestOpen, setIsSendTestOpen] = useState(false)
  const [testEmail, setTestEmail] = useState("")

  const filteredTemplates = emailTemplates.filter((template) => {
    const matchesSearch =
      template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.subject.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || template.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handlePreviewTemplate = (template: EmailTemplate) => {
    setSelectedTemplate(template)
    // Set default values for preview
    const defaultVariables: Record<string, string> = {}
    template.variables.forEach((variable) => {
      switch (variable) {
        case "customerName":
          defaultVariables[variable] = "احمد محمدی"
          break
        case "serviceType":
          defaultVariables[variable] = "درخواست تحصیلی کارشناسی ارشد"
          break
        case "consultantName":
          defaultVariables[variable] = "دکتر علی احمدی"
          break
        case "amount":
          defaultVariables[variable] = "$599"
          break
        case "country":
          defaultVariables[variable] = "کانادا"
          break
        case "requestId":
          defaultVariables[variable] = "APG-2024-001"
          break
        case "responseTime":
          defaultVariables[variable] = "ظرف 24 ساعت"
          break
        default:
          defaultVariables[variable] = `[${variable}]`
      }
    })
    setPreviewVariables(defaultVariables)
    setIsPreviewOpen(true)
  }

  const handleSendTestEmail = async () => {
    if (!selectedTemplate || !testEmail) {
      toast({
        title: "خطا",
        description: "لطفاً ایمیل مقصد را وارد کنید",
        variant: "destructive",
      })
      return
    }

    try {
      const response = await fetch("/api/admin/email/send-test", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          templateId: selectedTemplate.id,
          to: testEmail,
          variables: previewVariables,
        }),
      })

      if (response.ok) {
        toast({
          title: "موفق",
          description: "ایمیل تست با موفقیت ارسال شد",
        })
        setIsSendTestOpen(false)
        setTestEmail("")
      } else {
        throw new Error("Failed to send test email")
      }
    } catch (error) {
      toast({
        title: "خطا",
        description: "خطا در ارسال ایمیل تست",
        variant: "destructive",
      })
    }
  }

  const copyTemplateContent = (template: EmailTemplate) => {
    navigator.clipboard.writeText(template.content)
    toast({
      title: "کپی شد",
      description: "محتوای قالب در کلیپ‌بورد کپی شد",
    })
  }

  return (
    <div className="space-y-6" dir="rtl">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">قالب‌های ایمیل</h2>
          <p className="text-gray-600">مدیریت قالب‌های ایمیل سیستم</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          قالب جدید
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="جستجو در قالب‌ها..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pr-10"
                />
              </div>
            </div>
            <div className="w-full md:w-48">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="دسته‌بندی" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">همه دسته‌ها</SelectItem>
                  <SelectItem value="welcome">خوشامدگویی</SelectItem>
                  <SelectItem value="consultation">مشاوره</SelectItem>
                  <SelectItem value="follow-up">پیگیری</SelectItem>
                  <SelectItem value="payment">پرداخت</SelectItem>
                  <SelectItem value="application">درخواست</SelectItem>
                  <SelectItem value="visa">ویزا</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTemplates.map((template) => {
          const IconComponent = categoryIcons[template.category]
          return (
            <Card key={template.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <IconComponent className="h-5 w-5 text-[#FF6A5C]" />
                    <Badge className={categoryColors[template.category]}>{template.category}</Badge>
                  </div>
                  <div className="flex items-center gap-1">
                    <Switch checked={template.isActive} size="sm" />
                  </div>
                </div>
                <CardTitle className="text-lg">{template.name}</CardTitle>
                <p className="text-sm text-gray-600 line-clamp-2">{template.subject}</p>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-1 mb-4">
                  {template.variables.slice(0, 3).map((variable) => (
                    <Badge key={variable} variant="outline" className="text-xs">
                      {variable}
                    </Badge>
                  ))}
                  {template.variables.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{template.variables.length - 3}
                    </Badge>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePreviewTemplate(template)}
                    className="flex-1"
                  >
                    <Eye className="h-4 w-4 mr-1" />
                    پیش‌نمایش
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => copyTemplateContent(template)}>
                    <Copy className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Preview Dialog */}
      <Dialog open={isPreviewOpen} onOpenChange={setIsPreviewOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh]" dir="rtl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5" />
              پیش‌نمایش قالب: {selectedTemplate?.name}
            </DialogTitle>
          </DialogHeader>

          {selectedTemplate && (
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="preview">پیش‌نمایش</TabsTrigger>
                <TabsTrigger value="variables">متغیرها</TabsTrigger>
                <TabsTrigger value="test">تست ارسال</TabsTrigger>
              </TabsList>

              <TabsContent value="preview" className="mt-4">
                <ScrollArea className="h-[500px] w-full border rounded-lg">
                  <div
                    className="p-4"
                    dangerouslySetInnerHTML={{
                      __html: selectedTemplate.content.replace(
                        /{{(\w+)}}/g,
                        (match, variable) => previewVariables[variable] || match,
                      ),
                    }}
                  />
                </ScrollArea>
              </TabsContent>

              <TabsContent value="variables" className="mt-4">
                <div className="space-y-4 max-h-[500px] overflow-y-auto">
                  <p className="text-sm text-gray-600">مقادیر متغیرها را برای پیش‌نمایش تنظیم کنید:</p>
                  {selectedTemplate.variables.map((variable) => (
                    <div key={variable} className="space-y-2">
                      <Label htmlFor={variable}>{variable}</Label>
                      <Input
                        id={variable}
                        value={previewVariables[variable] || ""}
                        onChange={(e) =>
                          setPreviewVariables((prev) => ({
                            ...prev,
                            [variable]: e.target.value,
                          }))
                        }
                        placeholder={`مقدار ${variable}`}
                      />
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="test" className="mt-4">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="testEmail">ایمیل مقصد</Label>
                    <Input
                      id="testEmail"
                      type="email"
                      value={testEmail}
                      onChange={(e) => setTestEmail(e.target.value)}
                      placeholder="test@example.com"
                    />
                  </div>
                  <Button onClick={handleSendTestEmail} className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    ارسال ایمیل تست
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
