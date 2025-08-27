"use client"

import { useState } from "react"
import { UsersTable } from "@/components/admin/users-table"
import { UserFilters } from "@/components/admin/user-filters"
import { Button } from "@/components/ui/button"
import { Download, UserPlus } from "lucide-react"
import { NewUserDialog } from "@/components/admin/new-user-dialog"

export default function UsersPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [filters, setFilters] = useState({
    role: "all",
    status: "all",
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">کاربران</h1>
          <p className="text-muted-foreground">مدیریت کاربران سیستم و تنظیم دسترسی‌ها.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            خروجی اکسل
          </Button>
          <Button onClick={() => setIsDialogOpen(true)}>
            <UserPlus className="mr-2 h-4 w-4" />
            کاربر جدید
          </Button>
        </div>
      </div>

      <UserFilters filters={filters} setFilters={setFilters} />
      <UsersTable filters={filters} />

      <NewUserDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </div>
  )
}
