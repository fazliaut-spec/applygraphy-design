"use client"

import { useState } from "react"
import { ServicesTable } from "@/components/admin/services-table"
import { ServiceFilters } from "@/components/admin/service-filters"
import { Button } from "@/components/ui/button"
import { Download, PlusCircle } from "lucide-react"
import { ServiceFormDialog } from "@/components/admin/service-form-dialog"

export default function AdminServicesPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingServiceId, setEditingServiceId] = useState<string | null>(null)
  const [filters, setFilters] = useState({
    category: "all",
    status: "all",
  })

  const handleEdit = (id: string) => {
    setEditingServiceId(id)
    setIsDialogOpen(true)
  }

  const handleAdd = () => {
    setEditingServiceId(null)
    setIsDialogOpen(true)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">خدمات</h1>
          <p className="text-muted-foreground">مدیریت خدمات قابل ارائه به کاربران.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            خروجی اکسل
          </Button>
          <Button onClick={handleAdd}>
            <PlusCircle className="mr-2 h-4 w-4" />
            خدمت جدید
          </Button>
        </div>
      </div>

      <ServiceFilters filters={filters} setFilters={setFilters} />
      <ServicesTable filters={filters} onEdit={handleEdit} />

      <ServiceFormDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} serviceId={editingServiceId} />
    </div>
  )
}
