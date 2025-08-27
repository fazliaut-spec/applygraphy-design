"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useToast } from "@/hooks/use-toast"
import { FileText, Upload, X, CheckCircle, AlertCircle, Download } from "lucide-react"

type DocumentStatus = "pending" | "uploaded" | "verified" | "rejected"

interface Document {
  id: string
  name: string
  description: string
  status: DocumentStatus
  file?: File
  uploadProgress?: number
  uploadDate?: string
  required: boolean
}

export function DocumentUpload() {
  const { toast } = useToast()
  const [documents, setDocuments] = useState<Document[]>([
    {
      id: "1",
      name: "کارت ملی",
      description: "تصویر کارت ملی خود را آپلود کنید",
      status: "verified",
      uploadDate: "1402/02/15",
      required: true,
    },
    {
      id: "2",
      name: "پاسپورت",
      description: "تصویر صفحه اول پاسپورت خود را آپلود کنید",
      status: "pending",
      required: true,
    },
    {
      id: "3",
      name: "مدرک تحصیلی",
      description: "تصویر آخرین مدرک تحصیلی خود را آپلود کنید",
      status: "uploaded",
      uploadDate: "1402/03/20",
      required: true,
    },
    {
      id: "4",
      name: "ریز نمرات",
      description: "تصویر ریز نمرات خود را آپلود کنید",
      status: "rejected",
      uploadDate: "1402/03/10",
      required: true,
    },
    {
      id: "5",
      name: "مدرک زبان",
      description: "تصویر مدرک زبان خود را آپلود کنید",
      status: "pending",
      required: false,
    },
    {
      id: "6",
      name: "رزومه",
      description: "فایل رزومه خود را آپلود کنید",
      status: "pending",
      required: false,
    },
  ])

  const handleFileChange = (id: string, file: File) => {
    setDocuments(
      documents.map((doc) => {
        if (doc.id === id) {
          return {
            ...doc,
            file,
            status: "pending",
            uploadProgress: 0,
          }
        }
        return doc
      }),
    )

    // Simulate upload
    const interval = setInterval(() => {
      setDocuments((prevDocs) => {
        const updatedDocs = prevDocs.map((doc) => {
          if (doc.id === id && doc.uploadProgress !== undefined) {
            const newProgress = doc.uploadProgress + 10

            if (newProgress >= 100) {
              clearInterval(interval)

              toast({
                title: "آپلود با موفقیت انجام شد",
                description: `فایل ${file.name} با موفقیت آپلود شد.`,
              })

              return {
                ...doc,
                status: "uploaded",
                uploadProgress: 100,
                uploadDate: new Date().toLocaleDateString("fa-IR"),
              }
            }

            return {
              ...doc,
              uploadProgress: newProgress,
            }
          }
          return doc
        })

        return updatedDocs
      })
    }, 300)
  }

  const getStatusBadge = (status: DocumentStatus) => {
    switch (status) {
      case "pending":
        return (
          <span className="text-gray-500 flex items-center gap-1">
            <AlertCircle className="h-4 w-4" /> در انتظار آپلود
          </span>
        )
      case "uploaded":
        return (
          <span className="text-blue-500 flex items-center gap-1">
            <CheckCircle className="h-4 w-4" /> آپلود شده
          </span>
        )
      case "verified":
        return (
          <span className="text-green-500 flex items-center gap-1">
            <CheckCircle className="h-4 w-4" /> تایید شده
          </span>
        )
      case "rejected":
        return (
          <span className="text-red-500 flex items-center gap-1">
            <X className="h-4 w-4" /> رد شده
          </span>
        )
    }
  }

  return (
    <div className="space-y-4">
      {documents.map((document) => (
        <Card key={document.id} className="overflow-hidden">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between p-4 gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-gray-100 p-2 rounded-lg">
                  <FileText className="h-6 w-6 text-gray-600" />
                </div>
                <div>
                  <h3 className="font-medium">
                    {document.name}
                    {document.required && <span className="text-red-500 mr-1">*</span>}
                  </h3>
                  <p className="text-sm text-gray-500">{document.description}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-sm">
                  {getStatusBadge(document.status)}
                  {document.uploadDate && (
                    <p className="text-xs text-gray-500 mt-1">آپلود شده در {document.uploadDate}</p>
                  )}
                </div>

                {document.status === "pending" ? (
                  <div className="relative">
                    <input
                      type="file"
                      id={`file-${document.id}`}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      onChange={(e) => {
                        if (e.target.files?.[0]) {
                          handleFileChange(document.id, e.target.files[0])
                        }
                      }}
                    />
                    <Button variant="outline" size="sm">
                      <Upload className="ml-2 h-4 w-4" />
                      آپلود
                    </Button>
                  </div>
                ) : document.status === "uploaded" || document.status === "verified" ? (
                  <Button variant="outline" size="sm">
                    <Download className="ml-2 h-4 w-4" />
                    دانلود
                  </Button>
                ) : document.status === "rejected" ? (
                  <div className="relative">
                    <input
                      type="file"
                      id={`file-${document.id}`}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      onChange={(e) => {
                        if (e.target.files?.[0]) {
                          handleFileChange(document.id, e.target.files[0])
                        }
                      }}
                    />
                    <Button variant="outline" size="sm">
                      <Upload className="ml-2 h-4 w-4" />
                      آپلود مجدد
                    </Button>
                  </div>
                ) : null}
              </div>
            </div>

            {document.uploadProgress !== undefined && document.uploadProgress < 100 && (
              <div className="px-4 pb-4">
                <div className="flex items-center justify-between text-sm mb-1">
                  <span>در حال آپلود...</span>
                  <span>{document.uploadProgress}%</span>
                </div>
                <Progress value={document.uploadProgress} />
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
