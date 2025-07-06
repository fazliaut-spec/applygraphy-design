"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Search, MapPin, Calendar, User, Mail, Copy, Download, Share2, Filter } from "lucide-react"

interface PhDPosition {
  id: string
  title: string
  university: string
  country: string
  city: string
  supervisor: string
  field: string
  funding: "Full" | "Partial" | "None"
  deadline: Date
  description: string
  requirements: string[]
}

const mockPositions: PhDPosition[] = [
  {
    id: "1",
    title: "PhD in Machine Learning and AI",
    university: "دانشگاه تورنتو",
    country: "کانادا",
    city: "تورنتو",
    supervisor: "Prof. Sarah Johnson",
    field: "علوم کامپیوتر",
    funding: "Full",
    deadline: new Date("2024-03-15"),
    description: "تحقیق در زمینه یادگیری ماشین و هوش مصنوعی با تمرکز بر پردازش زبان طبیعی",
    requirements: ["مدرک کارشناسی ارشد در علوم کامپیوتر", "تجربه برنامه‌نویسی Python", "نمره IELTS 7.0+"],
  },
  {
    id: "2",
    title: "PhD in Renewable Energy Systems",
    university: "دانشگاه فنی میونیخ",
    country: "آلمان",
    city: "میونیخ",
    supervisor: "Prof. Hans Mueller",
    field: "مهندسی",
    funding: "Partial",
    deadline: new Date("2024-04-01"),
    description: "پژوهش در سیستم‌های انرژی تجدیدپذیر و بهینه‌سازی شبکه‌های هوشمند",
    requirements: ["مدرک کارشناسی ارشد مهندسی", "آشنایی با MATLAB/Simulink", "زبان آلمانی یا انگلیسی"],
  },
  {
    id: "3",
    title: "PhD in Biomedical Engineering",
    university: "دانشگاه آکسفورد",
    country: "انگلستان",
    city: "آکسفورد",
    supervisor: "Prof. Emma Wilson",
    field: "مهندسی پزشکی",
    funding: "Full",
    deadline: new Date("2024-02-28"),
    description: "تحقیق در زمینه تصویربرداری پزشکی و پردازش سیگنال‌های زیستی",
    requirements: ["مدرک کارشناسی ارشد مهندسی پزشکی", "تجربه تحقیقاتی", "نمره IELTS 7.5+"],
  },
]

export function PhDOpportunities() {
  const [positions, setPositions] = useState(mockPositions)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCountry, setSelectedCountry] = useState("")
  const [selectedField, setSelectedField] = useState("")
  const [emailTemplate, setEmailTemplate] = useState("")
  const [selectedPosition, setSelectedPosition] = useState<PhDPosition | null>(null)

  const generateEmailTemplate = (position: PhDPosition) => {
    const template = `Subject: Application for PhD Position - ${position.title}

Dear Prof. ${position.supervisor.split(" ").pop()},

I hope this email finds you well. I am writing to express my strong interest in the PhD position "${position.title}" at ${position.university}.

I am a highly motivated researcher with a background in ${position.field}. My academic and research experience aligns well with the requirements of this position, particularly:

${position.requirements.map((req) => `• ${req}`).join("\n")}

I am particularly drawn to this opportunity because of your research in ${position.field} and the innovative work being conducted at ${position.university}. I believe my skills and passion for research would make me a valuable addition to your research team.

I have attached my CV and would be happy to provide any additional documents you may require. I would welcome the opportunity to discuss my application further at your convenience.

Thank you for considering my application. I look forward to hearing from you.

Best regards,
[Your Name]
[Your Email]
[Your Phone Number]`

    setEmailTemplate(template)
    setSelectedPosition(position)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(emailTemplate)
    alert("ایمیل کپی شد!")
  }

  const downloadTemplate = () => {
    const element = document.createElement("a")
    const file = new Blob([emailTemplate], { type: "text/plain" })
    element.href = URL.createObjectURL(file)
    element.download = `phd-application-${selectedPosition?.id}.txt`
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  const filteredPositions = positions.filter((position) => {
    const matchesSearch =
      position.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      position.field.toLowerCase().includes(searchTerm.toLowerCase()) ||
      position.university.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCountry = !selectedCountry || position.country === selectedCountry
    const matchesField = !selectedField || position.field === selectedField

    return matchesSearch && matchesCountry && matchesField
  })

  const countries = [...new Set(positions.map((p) => p.country))]
  const fields = [...new Set(positions.map((p) => p.field))]

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <Card className="bg-white shadow-lg border-0">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="جستجوی موقعیت یا دانشگاه..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pr-10 text-right"
              />
            </div>

            <Select value={selectedCountry} onValueChange={setSelectedCountry}>
              <SelectTrigger>
                <SelectValue placeholder="انتخاب کشور" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">همه کشورها</SelectItem>
                {countries.map((country) => (
                  <SelectItem key={country} value={country}>
                    {country}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedField} onValueChange={setSelectedField}>
              <SelectTrigger>
                <SelectValue placeholder="انتخاب رشته" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">همه رشته‌ها</SelectItem>
                {fields.map((field) => (
                  <SelectItem key={field} value={field}>
                    {field}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button variant="outline">
              <Filter className="w-4 h-4 ml-2" />
              فیلترهای بیشتر
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* PhD Positions */}
      <div className="space-y-4">
        {filteredPositions.map((position) => (
          <Card
            key={position.id}
            className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow duration-300"
          >
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{position.title}</h3>
                  <div className="flex items-center gap-4 text-gray-600 mb-2">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>
                        {position.university}, {position.city}, {position.country}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{position.supervisor}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>مهلت: {position.deadline.toLocaleDateString("fa-IR")}</span>
                    </div>
                    <Badge
                      variant={
                        position.funding === "Full"
                          ? "default"
                          : position.funding === "Partial"
                            ? "secondary"
                            : "outline"
                      }
                      className={position.funding === "Full" ? "bg-green-600" : ""}
                    >
                      {position.funding === "Full"
                        ? "بورسیه کامل"
                        : position.funding === "Partial"
                          ? "بورسیه جزئی"
                          : "بدون بورسیه"}
                    </Badge>
                    <Badge variant="outline">{position.field}</Badge>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-4">{position.description}</p>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">شرایط لازم:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                  {position.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-3">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600"
                      onClick={() => generateEmailTemplate(position)}
                    >
                      <Mail className="w-4 h-4 ml-2" />📧 ایجاد قالب ایمیل
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>قالب ایمیل برای {position.title}</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <Textarea
                        value={emailTemplate}
                        onChange={(e) => setEmailTemplate(e.target.value)}
                        className="min-h-[400px] text-left font-mono text-sm"
                        dir="ltr"
                      />
                      <div className="flex gap-2">
                        <Button onClick={copyToClipboard} variant="outline">
                          <Copy className="w-4 h-4 ml-2" />
                          کپی
                        </Button>
                        <Button onClick={downloadTemplate} variant="outline">
                          <Download className="w-4 h-4 ml-2" />
                          دانلود
                        </Button>
                        <Button variant="outline">
                          <Share2 className="w-4 h-4 ml-2" />
                          اشتراک‌گذاری
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

                <Button variant="outline">مشاهده جزئیات</Button>
                <Button variant="outline">ذخیره</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredPositions.length === 0 && (
        <Card className="bg-white shadow-lg border-0">
          <CardContent className="p-12 text-center">
            <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">موقعیت PhD یافت نشد</h3>
            <p className="text-gray-600">لطفاً فیلترهای خود را تغییر دهید یا جستجوی جدیدی انجام دهید</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
