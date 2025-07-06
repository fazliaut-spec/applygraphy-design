"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export interface AcademicApplication {
  id: number
  university: string
  program: string
  status: "Submitted" | "In Review" | "Accepted" | "Rejected"
}

export interface AcademicApplicationTableProps {
  applications?: AcademicApplication[]
}

const sample: AcademicApplication[] = [
  { id: 1, university: "TU Berlin", program: "MSc Computer Science", status: "In Review" },
  { id: 2, university: "University of Toronto", program: "MBA", status: "Submitted" },
]

export function AcademicApplicationTable({ applications = sample }: AcademicApplicationTableProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>My Applications</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>University</TableHead>
              <TableHead>Program</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {applications.map((app) => (
              <TableRow key={app.id}>
                <TableCell>{app.university}</TableCell>
                <TableCell>{app.program}</TableCell>
                <TableCell>{app.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

/* default export for convenience */
export default AcademicApplicationTable
