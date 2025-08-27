"use client"

import { useState } from "react"
import { MessagesList } from "@/components/dashboard/messages-list"
import { MessageView } from "@/components/dashboard/message-view"
import { Card } from "@/components/ui/card"

export default function MessagesPage() {
  const [selectedMessageId, setSelectedMessageId] = useState<string | null>(null)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">پیام‌ها</h1>
        <p className="text-muted-foreground">با مشاوران و پشتیبانان ما در ارتباط باشید.</p>
      </div>

      <Card className="p-0">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          <div className="col-span-1 border-r">
            <MessagesList onSelect={setSelectedMessageId} selectedId={selectedMessageId} />
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <MessageView messageId={selectedMessageId} />
          </div>
        </div>
      </Card>
    </div>
  )
}
