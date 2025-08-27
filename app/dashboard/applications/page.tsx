"use client"

import { useState } from "react"
import { ApplicationsList } from "@/components/dashboard/applications-list"
import { ApplicationFilters } from "@/components/dashboard/application-filters"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import { NewApplicationDialog } from "@/components/dashboard/new-application-dialog"

export default function ApplicationsPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [filters, setFilters] = useState({
    status: "all",
    country: "all",
    program: "all",
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">درخواست‌های من</h1>
          <p className="text-muted-foreground">درخواست‌های دانشگاهی خود را مدیریت کنید و وضعیت آن‌ها را پیگیری نمایید.</p>
        </div>
        <Button onClick={() => setIsDialogOpen(true)}>
          <PlusCircle className="mr-2 h-4 w-4" />
          درخواست جدید
        </Button>
      </div>

      <ApplicationFilters filters={filters} setFilters={setFilters} />
      <ApplicationsList filters={filters} />

      <NewApplicationDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </div>
  )
}
