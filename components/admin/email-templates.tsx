"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { ScrollArea } from "@/components/ui/scroll-area"
import { toast } from "@/hooks/use-toast"
import { Search, Eye, Edit, Send, Plus, Copy, Mail, Filter } from "lucide-react"
import { emailTemplates, type EmailTemplate } from "@/lib/email/templates"

const categoryColors = {
  welcome: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  consultation: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  payment: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
  application: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
  visa: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
  followup: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
}

const categoryLabels = {
  welcome: "خوش‌آمدگویی",
  consultation: "مشاوره",
  payment: "پرداخت",
  application: "درخواست",
  visa: "ویزا",
  followup: "پیگیری",
}

export function EmailTemplates() {
  const [templates, setTemplates] = useState<EmailTemplate[]>(emailTemplates)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedTemplate, setSelectedTemplate] = useState<EmailTemplate | null>(null)
  const [previewVariables, setPreviewVariables] = useState<Record<string, string>>({})
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)
  const [isEditOpen, setIsEditOpen] = useState(false)
  const [testEmail, setTestEmail] = useState("")

  const filteredTemplates = templates.filter((template) => {
    const matchesSearch =
      template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.subject.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || template.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handlePreview = (template: EmailTemplate) => {
    setSelectedTemplate(template)
    // Set default values for variables
    const defaultVariables: Record<string, string> = {}
    template.variables.forEach((variable) => {
      switch (variable) {
        case "userName":
          defaultVariables[variable] = "احمد محمدی"
          break
        case "userEmail":
          defaultVariables[variable] = "ahmad@example.com"
          break
        case "consultationDate":
          defaultVariables[variable] = "1403/08/15"
          break
        case "consultationTime":
          defaultVariables[variable] = "14:30"
          break
        case "consultantName":
          defaultVariables[variable] = "دکتر علی احمدی"
          break
        case "orderNumber":
          defaultVariables[variable] = "ORD-2024-001"
          break
        case "amount":
          defaultVariables[variable] = "2,500,000"
          break
        case "serviceName":
          defaultVariables[variable] = "مشاوره تحصیلی کانادا"
          break
        case "universityName":
          defaultVariables[variable] = "دانشگاه تورنتو"
          break
        case "status":
          defaultVariables[variable] = "در حال بررسی"
          break
        case "nextStep":
          defaultVariables[variable] = "ارسال مدارک تکمیلی"
          break
        case "visaType":
          defaultVariables[variable] = "ویزای تحصیلی"
          break
        case "country":
          defaultVariables[variable] = "کانادا"
          break
        case "approvalDate":
          defaultVariables[variable] = "1403/08/20"
          break
        case "validityPeriod":
          defaultVariables[variable] = "4 سال"
          break
        case "reminderTitle":
          defaultVariables[variable] = "ارسال مدارک دانشگاه"
          break
        case "dueDate":
          defaultVariables[variable] = "1403/08/25"
          break
        case "actionRequired":
          defaultVariables[variable] = "ارسال رزومه و انگیزه‌نامه"
          break
        case "contactInfo":
          defaultVariables[variable] = "021-12345678"
          break
        case "dashboardUrl":
          defaultVariables[variable] = "https://applygraphy.com/dashboard"
          break
        case "meetingLink":
          defaultVariables[variable] = "https://meet.google.com/abc-defg-hij"
          break
        case "applicationNumber":
          defaultVariables[variable] = "APP-2024-001"
          break
        case "paymentDate":
          defaultVariables[variable] = "1403/08/10"
          break
        default:
          defaultVariables[variable] = `[${variable}]`
      }
    })
    setPreviewVariables(defaultVariables)
    setIsPreviewOpen(true)
  }

  const handleSendTest = async () => {
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
          email: testEmail,
          variables: previewVariables,
        }),
      })

      if (response.ok) {
        toast({
          title: "موفق",
          description: "ایمیل تست با موفقیت ارسال شد",
        })
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

  const handleCopyTemplate = (template: EmailTemplate) => {
    navigator.clipboard.writeText(template.htmlContent)
    toast({
      title: "کپی شد",
      description: "محتوای قالب در کلیپ‌بورد کپی شد",
    })
  }

  const renderPreview = () => {
    if (!selectedTemplate) return null

    let htmlContent = selectedTemplate.htmlContent
    Object.entries(previewVariables).forEach(([key, value]) => {
      const placeholder = `{{${key}}}`
      htmlContent = htmlContent.replace(new RegExp(placeholder, "g"), value)
    })

    return (
      <div className="email-preview border rounded-lg p-4 bg-white" dangerouslySetInnerHTML={{ __html: htmlContent }} />
    )
  }

  return (
    <div className="space-y-6 font-iranSans">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">قالب‌های ایمیل</h2>
          <p className="text-muted-foreground">مدیریت و ویرایش قالب‌های ایمیل سیستم</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 ml-2" />
          قالب جدید
        </Button>
      </div>

      {/* Search and Filter */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="جستجو در قالب‌ها..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pr-10"
                />
              </div>
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48">
                <Filter className="w-4 h-4 ml-2" />
                <SelectValue placeholder="دسته‌بندی" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">همه دسته‌ها</SelectItem>
                <SelectItem value="welcome">خوش‌آمدگویی</SelectItem>
                <SelectItem value="consultation">مشاوره</SelectItem>
                <SelectItem value="payment">پرداخت</SelectItem>
                <SelectItem value="application">درخواست</SelectItem>
                <SelectItem value="visa">ویزا</SelectItem>
                <SelectItem value="followup">پیگیری</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTemplates.map((template) => (
          <Card key={template.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg">{template.name}</CardTitle>
                  <CardDescription className="mt-1 line-clamp-2">{template.subject}</CardDescription>
                </div>
                <Badge className={categoryColors[template.category]}>{categoryLabels[template.category]}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>متغیرها: {template.variables.length}</span>
                  <div className="flex items-center gap-2">
                    <Switch checked={template.isActive} size="sm" />
                    <span>{template.isActive ? "فعال" : "غیرفعال"}</span>
                  </div>
                </div>

                {template.variables.length > 0 && (
                  <div className="flex flex-wrap gap-1">
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
                )}

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={() => handlePreview(template)} className="flex-1">
                    <Eye className="w-4 h-4 ml-1" />
                    پیش‌نمایش
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => handleCopyTemplate(template)}>
                    <Copy className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Edit className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Preview Dialog */}
      <Dialog open={isPreviewOpen} onOpenChange={setIsPreviewOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              پیش‌نمایش قالب: {selectedTemplate?.name}
            </DialogTitle>
            <DialogDescription>پیش‌نمایش و تست ارسال قالب ایمیل</DialogDescription>
          </DialogHeader>

          <Tabs defaultValue="preview" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="preview">پیش‌نمایش</TabsTrigger>
              <TabsTrigger value="variables">متغیرها</TabsTrigger>
              <TabsTrigger value="test">تست ارسال</TabsTrigger>
            </TabsList>

            <TabsContent value="preview" className="space-y-4">
              <div className="border rounded-lg">
                <div className="bg-muted p-4 border-b">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Label className="text-sm font-medium">موضوع:</Label>
                      <span className="text-sm">
                        {selectedTemplate?.subject.replace(
                          /{{(\w+)}}/g,
                          (match, key) => previewVariables[key] || match,
                        )}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Label className="text-sm font-medium">از:</Label>
                      <span className="text-sm">تیم اپلای‌گرافی &lt;noreply@applygraphy.com&gt;</span>
                    </div>
                  </div>
                </div>
                <ScrollArea className="h-96 w-full">{renderPreview()}</ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="variables" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedTemplate?.variables.map((variable) => (
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

            <TabsContent value="test" className="space-y-4">
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

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-medium mb-2">اطلاعات ارسال:</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>قالب: {selectedTemplate?.name}</p>
                    <p>موضوع: {selectedTemplate?.subject}</p>
                    <p>متغیرها: {selectedTemplate?.variables.length} مورد</p>
                  </div>
                </div>

                <Button onClick={handleSendTest} disabled={!testEmail} className="w-full">
                  <Send className="w-4 h-4 ml-2" />
                  ارسال ایمیل تست
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
    </div>
  )
}
