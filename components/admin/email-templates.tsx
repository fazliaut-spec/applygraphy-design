"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Mail,
  Eye,
  Edit,
  Send,
  Search,
  Filter,
  Plus,
  Copy,
  Users,
  CreditCard,
  FileText,
  Plane,
  MessageCircle,
} from "lucide-react"
import { type EmailTemplate, getAllActiveTemplates } from "@/lib/email/templates"
import { toast } from "sonner"

const categoryIcons = {
  welcome: Users,
  consultation: MessageCircle,
  payment: CreditCard,
  application: FileText,
  visa: Plane,
  followup: Mail,
}

const categoryColors = {
  welcome: "bg-green-100 text-green-800",
  consultation: "bg-blue-100 text-blue-800",
  payment: "bg-purple-100 text-purple-800",
  application: "bg-orange-100 text-orange-800",
  visa: "bg-yellow-100 text-yellow-800",
  followup: "bg-gray-100 text-gray-800",
}

export default function EmailTemplates() {
  const [templates, setTemplates] = useState<EmailTemplate[]>([])
  const [selectedTemplate, setSelectedTemplate] = useState<EmailTemplate | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)
  const [isEditOpen, setIsEditOpen] = useState(false)
  const [testEmail, setTestEmail] = useState("")
  const [testVariables, setTestVariables] = useState<Record<string, string>>({})

  useEffect(() => {
    loadTemplates()
  }, [])

  const loadTemplates = () => {
    const allTemplates = getAllActiveTemplates()
    setTemplates(allTemplates)
  }

  const filteredTemplates = templates.filter((template) => {
    const matchesSearch =
      template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.nameEn.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || template.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handlePreview = (template: EmailTemplate) => {
    setSelectedTemplate(template)
    // Initialize test variables with sample data
    const sampleVariables: Record<string, string> = {}
    template.variables.forEach((variable) => {
      switch (variable) {
        case "firstName":
          sampleVariables[variable] = "احمد"
          break
        case "lastName":
          sampleVariables[variable] = "محمدی"
          break
        case "email":
          sampleVariables[variable] = "ahmad@example.com"
          break
        case "amount":
          sampleVariables[variable] = "2,500,000"
          break
        case "country":
          sampleVariables[variable] = "کانادا"
          break
        case "university":
          sampleVariables[variable] = "دانشگاه تورنتو"
          break
        case "serviceType":
          sampleVariables[variable] = "مشاوره تحصیلی"
          break
        default:
          sampleVariables[variable] = `[${variable}]`
      }
    })
    setTestVariables(sampleVariables)
    setIsPreviewOpen(true)
  }

  const handleSendTest = async () => {
    if (!selectedTemplate || !testEmail) {
      toast.error("لطفاً ایمیل مقصد را وارد کنید")
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
          variables: testVariables,
        }),
      })

      if (response.ok) {
        toast.success("ایمیل تست با موفقیت ارسال شد")
      } else {
        toast.error("خطا در ارسال ایمیل تست")
      }
    } catch (error) {
      toast.error("خطا در ارسال ایمیل تست")
    }
  }

  const renderPreviewContent = () => {
    if (!selectedTemplate) return ""

    let content = selectedTemplate.htmlContent
    Object.entries(testVariables).forEach(([key, value]) => {
      content = content.replace(new RegExp(`{{${key}}}`, "g"), value)
    })

    return content
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">قالب‌های ایمیل</h2>
          <p className="text-muted-foreground">مدیریت و ویرایش قالب‌های ایمیل سیستم</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 ml-2" />
          قالب جدید
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="جستجو در قالب‌ها..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pr-10"
                />
              </div>
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[200px]">
                <Filter className="w-4 h-4 ml-2" />
                <SelectValue placeholder="دسته‌بندی" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">همه دسته‌ها</SelectItem>
                <SelectItem value="welcome">خوشامدگویی</SelectItem>
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
        {filteredTemplates.map((template) => {
          const IconComponent = categoryIcons[template.category]
          const colorClass = categoryColors[template.category]

          return (
            <Card key={template.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Badge className={colorClass}>
                    <IconComponent className="w-3 h-3 ml-1" />
                    {template.category}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="sm" onClick={() => handlePreview(template)}>
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <CardTitle className="text-lg">{template.name}</CardTitle>
                <CardDescription className="text-sm">{template.nameEn}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <Label className="text-xs text-muted-foreground">موضوع ایمیل</Label>
                    <p className="text-sm font-medium truncate">{template.subject}</p>
                  </div>

                  {template.variables.length > 0 && (
                    <div>
                      <Label className="text-xs text-muted-foreground">متغیرها</Label>
                      <div className="flex flex-wrap gap-1 mt-1">
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
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-2">
                      <Switch checked={template.isActive} size="sm" />
                      <Label className="text-xs">فعال</Label>
                    </div>
                    <Button size="sm" onClick={() => handlePreview(template)}>
                      <Eye className="w-4 h-4 ml-1" />
                      پیش‌نمایش
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
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
                        {selectedTemplate?.subject.replace(/{{(\w+)}}/g, (match, key) => testVariables[key] || match)}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Label className="text-sm font-medium">از:</Label>
                      <span className="text-sm">تیم اپلای‌گرافی &lt;noreply@applygraphy.com&gt;</span>
                    </div>
                  </div>
                </div>
                <ScrollArea className="h-[400px]">
                  <div className="p-4" dangerouslySetInnerHTML={{ __html: renderPreviewContent() }} />
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="variables" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedTemplate?.variables.map((variable) => (
                  <div key={variable} className="space-y-2">
                    <Label htmlFor={variable}>{variable}</Label>
                    <Input
                      id={variable}
                      value={testVariables[variable] || ""}
                      onChange={(e) =>
                        setTestVariables((prev) => ({
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
                <div className="space-y-2">
                  <Label htmlFor="testEmail">ایمیل مقصد</Label>
                  <Input
                    id="testEmail"
                    type="email"
                    value={testEmail}
                    onChange={(e) => setTestEmail(e.target.value)}
                    placeholder="test@example.com"
                  />
                </div>

                <Separator />

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
