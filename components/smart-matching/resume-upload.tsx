"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Upload, FileText, CheckCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface ResumeData {
  name: string
  email: string
  education: string
  experience: string
  skills: string[]
  languages: string[]
}

export function ResumeUpload() {
  const [file, setFile] = useState<File | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [resumeData, setResumeData] = useState<ResumeData | null>(null)
  const [manualEntry, setManualEntry] = useState(false)
  const { toast } = useToast()

  // Handle file upload and parsing
  const handleFileUpload = useCallback(
    async (uploadedFile: File) => {
      setIsUploading(true)

      try {
        // Simulate file parsing (in real app, use PDF parser or OCR)
        await new Promise((resolve) => setTimeout(resolve, 2000))

        // Mock parsed resume data
        const mockData: ResumeData = {
          name: "نام کاربر",
          email: "user@example.com",
          education: "کارشناسی ارشد مهندسی کامپیوتر",
          experience: "3 سال تجربه در توسعه نرم‌افزار",
          skills: ["JavaScript", "React", "Node.js", "Python", "Machine Learning"],
          languages: ["فارسی", "انگلیسی", "عربی"],
        }

        setResumeData(mockData)
        toast({
          title: "رزومه با موفقیت پردازش شد",
          description: "اطلاعات شما استخراج و تحلیل شد",
        })
      } catch (error) {
        toast({
          title: "خطا در پردازش فایل",
          description: "لطفاً فایل دیگری انتخاب کنید یا اطلاعات را دستی وارد کنید",
          variant: "destructive",
        })
      } finally {
        setIsUploading(false)
      }
    },
    [toast],
  )

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      const droppedFile = e.dataTransfer.files[0]
      if (droppedFile && (droppedFile.type === "application/pdf" || droppedFile.type.startsWith("image/"))) {
        setFile(droppedFile)
        handleFileUpload(droppedFile)
      }
    },
    [handleFileUpload],
  )

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
      handleFileUpload(selectedFile)
    }
  }

  const handleManualSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const data: ResumeData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      education: formData.get("education") as string,
      experience: formData.get("experience") as string,
      skills: (formData.get("skills") as string).split(",").map((s) => s.trim()),
      languages: (formData.get("languages") as string).split(",").map((s) => s.trim()),
    }

    setResumeData(data)
    toast({
      title: "اطلاعات ذخیره شد",
      description: "پروفایل شما برای تطبیق هوشمند آماده است",
    })
  }

  if (resumeData) {
    return (
      <Card className="max-w-4xl mx-auto">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-6">
            <CheckCircle className="h-6 w-6 text-green-500" />
            <h3 className="text-xl font-bold text-[#02153D]">پروفایل شما</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-[#02153D] mb-2">اطلاعات شخصی</h4>
              <p>
                <strong>نام:</strong> {resumeData.name}
              </p>
              <p>
                <strong>ایمیل:</strong> {resumeData.email}
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-[#02153D] mb-2">تحصیلات</h4>
              <p>{resumeData.education}</p>
            </div>

            <div>
              <h4 className="font-semibold text-[#02153D] mb-2">تجربه کاری</h4>
              <p>{resumeData.experience}</p>
            </div>

            <div>
              <h4 className="font-semibold text-[#02153D] mb-2">زبان‌ها</h4>
              <div className="flex flex-wrap gap-2">
                {resumeData.languages.map((lang, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4">
            <h4 className="font-semibold text-[#02153D] mb-2">مهارت‌ها</h4>
            <div className="flex flex-wrap gap-2">
              {resumeData.skills.map((skill, index) => (
                <span key={index} className="bg-[#FF6A5C]/10 text-[#FF6A5C] px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 flex gap-4">
            <Button onClick={() => setResumeData(null)} variant="outline">
              ویرایش اطلاعات
            </Button>
            <Button className="bg-[#FF6A5C] hover:bg-[#FF6A5C]/90">شروع تطبیق هوشمند</Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {!manualEntry ? (
        <Card>
          <CardContent className="p-6">
            <div
              className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#FF6A5C] transition-colors"
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
            >
              {isUploading ? (
                <div className="space-y-4">
                  <div className="animate-spin h-12 w-12 border-4 border-[#FF6A5C] border-t-transparent rounded-full mx-auto"></div>
                  <p className="text-gray-600">در حال پردازش رزومه...</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <Upload className="h-12 w-12 text-gray-400 mx-auto" />
                  <div>
                    <p className="text-lg font-medium text-gray-900 mb-2">رزومه خود را اینجا بکشید یا کلیک کنید</p>
                    <p className="text-gray-600">فرمت‌های پشتیبانی شده: PDF, JPG, PNG</p>
                  </div>
                  <input
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={handleFileSelect}
                    className="hidden"
                    id="resume-upload"
                  />
                  <label htmlFor="resume-upload">
                    <Button asChild className="bg-[#FF6A5C] hover:bg-[#FF6A5C]/90">
                      <span className="cursor-pointer">انتخاب فایل</span>
                    </Button>
                  </label>
                </div>
              )}
            </div>

            <div className="mt-6 text-center">
              <Button
                variant="outline"
                onClick={() => setManualEntry(true)}
                className="border-[#02153D] text-[#02153D] hover:bg-[#02153D] hover:text-white"
              >
                <FileText className="h-4 w-4 mr-2" />
                وارد کردن دستی اطلاعات
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <FileText className="h-6 w-6 text-[#FF6A5C]" />
              <h3 className="text-xl font-bold text-[#02153D]">وارد کردن اطلاعات</h3>
            </div>

            <form onSubmit={handleManualSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">نام و نام خانوادگی</label>
                  <Input name="name" required className="text-right" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">ایمیل</label>
                  <Input name="email" type="email" required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">تحصیلات</label>
                <Input
                  name="education"
                  placeholder="مثال: کارشناسی ارشد مهندسی کامپیوتر"
                  required
                  className="text-right"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">تجربه کاری</label>
                <Textarea
                  name="experience"
                  placeholder="خلاصه‌ای از تجربیات کاری خود بنویسید..."
                  required
                  className="text-right"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">مهارت‌ها (با کاما جدا کنید)</label>
                  <Input name="skills" placeholder="JavaScript, React, Python, ..." required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">زبان‌ها (با کاما جدا کنید)</label>
                  <Input name="languages" placeholder="فارسی, انگلیسی, عربی, ..." required className="text-right" />
                </div>
              </div>

              <div className="flex gap-4">
                <Button type="button" variant="outline" onClick={() => setManualEntry(false)}>
                  بازگشت به آپلود فایل
                </Button>
                <Button type="submit" className="bg-[#FF6A5C] hover:bg-[#FF6A5C]/90">
                  ذخیره اطلاعات
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
