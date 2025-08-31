"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Upload, FileText, CheckCircle, AlertCircle } from "lucide-react"

export function ResumeUpload() {
  const [uploadStatus, setUploadStatus] = useState<"idle" | "uploading" | "success" | "error">("idle")
  const [resumeText, setResumeText] = useState("")
  const [fileName, setFileName] = useState("")

  const handleFileUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    setFileName(file.name)
    setUploadStatus("uploading")

    // Simulate file processing
    setTimeout(() => {
      setUploadStatus("success")
      // In a real app, you would process the file here
      setResumeText(
        "رزومه شما با موفقیت پردازش شد. اطلاعات استخراج شده شامل تحصیلات، تجربه کاری و مهارت‌های شما می‌باشد.",
      )
    }, 2000)
  }, [])

  const handleDrop = useCallback((event: React.DragEvent) => {
    event.preventDefault()
    const file = event.dataTransfer.files[0]
    if (file && (file.type === "application/pdf" || file.type.startsWith("image/"))) {
      setFileName(file.name)
      setUploadStatus("uploading")

      setTimeout(() => {
        setUploadStatus("success")
        setResumeText(
          "رزومه شما با موفقیت پردازش شد. اطلاعات استخراج شده شامل تحصیلات، تجربه کاری و مهارت‌های شما می‌باشد.",
        )
      }, 2000)
    }
  }, [])

  const handleDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault()
  }, [])

  return (
    <div className="space-y-6">
      {/* File Upload */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Upload className="h-5 w-5 text-[#FF6A5C]" />
            آپلود فایل رزومه
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div
            className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#FF6A5C] transition-colors"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            {uploadStatus === "idle" && (
              <>
                <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-lg font-medium text-gray-700 mb-2">فایل رزومه خود را اینجا بکشید</p>
                <p className="text-gray-500 mb-4">یا کلیک کنید تا فایل انتخاب کنید</p>
                <Input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="resume-upload"
                />
                <Label htmlFor="resume-upload">
                  <Button variant="outline" className="cursor-pointer bg-transparent">
                    انتخاب فایل
                  </Button>
                </Label>
                <p className="text-sm text-gray-400 mt-2">فرمت‌های مجاز: PDF, JPG, PNG</p>
              </>
            )}

            {uploadStatus === "uploading" && (
              <div className="space-y-4">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FF6A5C] mx-auto"></div>
                <p className="text-lg font-medium text-gray-700">در حال پردازش رزومه...</p>
                <p className="text-gray-500">{fileName}</p>
              </div>
            )}

            {uploadStatus === "success" && (
              <div className="space-y-4">
                <CheckCircle className="h-12 w-12 text-green-500 mx-auto" />
                <p className="text-lg font-medium text-green-700">رزومه با موفقیت آپلود شد!</p>
                <p className="text-gray-500">{fileName}</p>
              </div>
            )}

            {uploadStatus === "error" && (
              <div className="space-y-4">
                <AlertCircle className="h-12 w-12 text-red-500 mx-auto" />
                <p className="text-lg font-medium text-red-700">خطا در آپلود فایل</p>
                <Button onClick={() => setUploadStatus("idle")} variant="outline">
                  تلاش مجدد
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Manual Entry */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-[#FF6A5C]" />
            یا اطلاعات خود را وارد کنید
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="education">تحصیلات</Label>
              <Input placeholder="مثال: کارشناسی مهندسی کامپیوتر" />
            </div>
            <div>
              <Label htmlFor="experience">سابقه کاری</Label>
              <Input placeholder="مثال: 3 سال توسعه نرم‌افزار" />
            </div>
          </div>
          <div>
            <Label htmlFor="skills">مهارت‌ها</Label>
            <Input placeholder="مثال: Python, Machine Learning, Research" />
          </div>
          <div>
            <Label htmlFor="interests">علایق پژوهشی</Label>
            <Textarea placeholder="علایق و زمینه‌های پژوهشی خود را شرح دهید..." className="min-h-[100px]" />
          </div>
          <Button className="w-full bg-[#FF6A5C] hover:bg-[#FF6A5C]/90 text-white">ذخیره اطلاعات</Button>
        </CardContent>
      </Card>

      {/* Extracted Information */}
      {resumeText && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              اطلاعات استخراج شده
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">{resumeText}</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
