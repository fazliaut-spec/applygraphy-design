"use client"

import { useState } from "react"
import { AdminMessagesList } from "@/components/admin/messages-list"
import { AdminMessageView } from "@/components/admin/message-view"
import { Card } from "@/components/ui/card"
import { MessageFilters } from "@/components/admin/message-filters"

export default function AdminMessagesPage() {
  const [selectedMessageId, setSelectedMessageId] = useState<string | null>(null)
  const [filters, setFilters] = useState({
    status: "all",
    priority: "all",
  })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">پیام‌ها</h1>
        <p className="text-muted-foreground">مدیریت پیام‌های کاربران و پاسخ به آن‌ها.</p>
      </div>

      <MessageFilters filters={filters} setFilters={setFilters} />

      <Card className="p-0">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          <div className="col-span-1 border-r">
            <AdminMessagesList onSelect={setSelectedMessageId} selectedId={selectedMessageId} filters={filters} />
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <AdminMessageView messageId={selectedMessageId} />
          </div>
        </div>
      </Card>
    </div>
  )
}
