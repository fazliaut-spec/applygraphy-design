"use client"

import { useState } from "react"
import { ApplicationsTable } from "@/components/admin/applications-table"
import { ApplicationFilters } from "@/components/admin/application-filters"
import { Button } from "@/components/ui/button"
import { Download, Filter } from "lucide-react"
import { ApplicationDetailsDialog } from "@/components/admin/application-details-dialog"

export default function AdminApplicationsPage() {
  const [selectedApplicationId, setSelectedApplicationId] = useState<string | null>(null)
  const [filters, setFilters] = useState({
    status: "all",
    country: "all",
    program: "all",
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">درخواست‌های دانشگاهی</h1>
          <p className="text-muted-foreground">مدیریت و بررسی درخواست‌های دانشگاهی کاربران.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            خروجی اکسل
          </Button>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            فیلتر پیشرفته
          </Button>
        </div>
      </div>

      <ApplicationFilters filters={filters} setFilters={setFilters} />
      <ApplicationsTable filters={filters} onViewDetails={setSelectedApplicationId} />

      <ApplicationDetailsDialog
        applicationId={selectedApplicationId}
        open={!!selectedApplicationId}
        onOpenChange={() => setSelectedApplicationId(null)}
      />
    </div>
  )
}
