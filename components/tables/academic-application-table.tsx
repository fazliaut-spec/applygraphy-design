"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, Download, Calendar, MapPin } from "lucide-react"

interface Application {
  id: string
  universityName: string
  program: string
  country: string
  status: "pending" | "accepted" | "rejected" | "in-review"
  submittedDate: string
  deadline: string
  documents: string[]
}

const mockApplications: Application[] = [
  {
    id: "1",
    universityName: "Harvard University",
    program: "Computer Science MS",
    country: "United States",
    status: "in-review",
    submittedDate: "2024-01-15",
    deadline: "2024-03-01",
    documents: ["Transcript", "SOP", "LOR", "Resume"],
  },
  {
    id: "2",
    universityName: "University of Toronto",
    program: "Engineering PhD",
    country: "Canada",
    status: "accepted",
    submittedDate: "2024-01-10",
    deadline: "2024-02-15",
    documents: ["Transcript", "Research Proposal", "LOR"],
  },
  {
    id: "3",
    universityName: "Oxford University",
    program: "Business Administration MBA",
    country: "United Kingdom",
    status: "pending",
    submittedDate: "2024-01-20",
    deadline: "2024-04-01",
    documents: ["Transcript", "GMAT", "Essays", "LOR"],
  },
]

const getStatusColor = (status: Application["status"]) => {
  switch (status) {
    case "accepted":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
    case "rejected":
      return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
    case "in-review":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
    case "pending":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
  }
}

export function AcademicApplicationTable() {
  const [applications] = useState<Application[]>(mockApplications)

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          Academic Applications
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>University</TableHead>
                <TableHead>Program</TableHead>
                <TableHead>Country</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Submitted</TableHead>
                <TableHead>Deadline</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {applications.map((application) => (
                <TableRow key={application.id}>
                  <TableCell className="font-medium">{application.universityName}</TableCell>
                  <TableCell>{application.program}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {application.country}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(application.status)}>
                      {application.status.replace("-", " ").toUpperCase()}
                    </Badge>
                  </TableCell>
                  <TableCell>{application.submittedDate}</TableCell>
                  <TableCell>{application.deadline}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Eye className="h-3 w-3 mr-1" />
                        View
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="h-3 w-3 mr-1" />
                        Download
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {applications.length === 0 && (
          <div className="text-center py-8">
            <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No Applications Yet</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Start your academic journey by submitting your first application
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
