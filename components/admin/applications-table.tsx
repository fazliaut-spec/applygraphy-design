"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Eye, Edit, Trash2, Download } from "lucide-react"

const applications = [
  {
    id: 1,
    studentName: "علی احمدی",
    studentEmail: "ali@example.com",
    studentAvatar: "/placeholder.svg?height=32&width=32",
    university: "دانشگاه تورنتو",
    program: "مهندسی کامپیوتر",
    status: "pending",
    submittedAt: "1403/01/15",
    deadline: "1403/02/15",
    documents: 8,
    totalDocuments: 12,
  },
  {
    id: 2,
    studentName: "فاطمه محمدی",
    studentEmail: "fateme@example.com",
    studentAvatar: "/placeholder.svg?height=32&width=32",
    university: "دانشگاه آکسفورد",
    program: "پزشکی",
    status: "approved",
    submittedAt: "1403/01/10",
    deadline: "1403/02/10",
    documents: 15,
    totalDocuments: 15,
  },
  {
    id: 3,
    studentName: "حسن رضایی",
    studentEmail: "hassan@example.com",
    studentAvatar: "/placeholder.svg?height=32&width=32",
    university: "دانشگاه MIT",
    program: "فیزیک",
    status: "rejected",
    submittedAt: "1403/01/05",
    deadline: "1403/02/05",
    documents: 10,
    totalDocuments: 12,
  },
]

export function ApplicationsTable() {
  const [selectedApplications, setSelectedApplications] = useState<number[]>([])

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>دانشجو</TableHead>
            <TableHead>دانشگاه</TableHead>
            <TableHead>رشته</TableHead>
            <TableHead>وضعیت</TableHead>
            <TableHead>تاریخ ثبت</TableHead>
            <TableHead>مهلت</TableHead>
            <TableHead>مدارک</TableHead>
            <TableHead>عملیات</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {applications.map((application) => (
            <TableRow key={application.id}>
              <TableCell>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={application.studentAvatar || "/placeholder.svg"} alt={application.studentName} />
                    <AvatarFallback>{application.studentName.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{application.studentName}</p>
                    <p className="text-sm text-muted-foreground">{application.studentEmail}</p>
                  </div>
                </div>
              </TableCell>
              <TableCell>{application.university}</TableCell>
              <TableCell>{application.program}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    application.status === "approved"
                      ? "default"
                      : application.status === "pending"
                        ? "secondary"
                        : "destructive"
                  }
                >
                  {application.status === "approved"
                    ? "تایید شده"
                    : application.status === "pending"
                      ? "در انتظار"
                      : "رد شده"}
                </Badge>
              </TableCell>
              <TableCell>{application.submittedAt}</TableCell>
              <TableCell>{application.deadline}</TableCell>
              <TableCell>
                <span className="text-sm">
                  {application.documents}/{application.totalDocuments}
                </span>
              </TableCell>
              <TableCell>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <Button size="sm" variant="ghost">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost">
                    <Download className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost" className="text-red-600">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
