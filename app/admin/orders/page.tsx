"use client"

import { useState } from "react"
import { OrdersTable } from "@/components/admin/orders-table"
import { OrderFilters } from "@/components/admin/order-filters"
import { Button } from "@/components/ui/button"
import { Download, Filter } from "lucide-react"
import { OrderDetailsDialog } from "@/components/admin/order-details-dialog"

export default function AdminOrdersPage() {
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null)
  const [filters, setFilters] = useState({
    status: "all",
    paymentStatus: "all",
    dateRange: "all",
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">سفارشات</h1>
          <p className="text-muted-foreground">مدیریت سفارشات و پرداخت‌های کاربران.</p>
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

      <OrderFilters filters={filters} setFilters={setFilters} />
      <OrdersTable filters={filters} onViewDetails={setSelectedOrderId} />

      <OrderDetailsDialog
        orderId={selectedOrderId}
        open={!!selectedOrderId}
        onOpenChange={() => setSelectedOrderId(null)}
      />
    </div>
  )
}
