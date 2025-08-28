"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, Download, MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { OrderDetailsDialog } from "./order-details-dialog"

interface Order {
  id: string
  customerName: string
  customerEmail: string
  service: string
  amount: number
  status: "pending" | "completed" | "cancelled" | "processing"
  createdAt: string
  paymentMethod: string
}

const mockOrders: Order[] = [
  {
    id: "ORD-001",
    customerName: "علی احمدی",
    customerEmail: "ali@example.com",
    service: "مشاوره تحصیل در آلمان",
    amount: 500,
    status: "completed",
    createdAt: "2024-01-15",
    paymentMethod: "کارت اعتباری",
  },
  {
    id: "ORD-002",
    customerName: "سارا محمدی",
    customerEmail: "sara@example.com",
    service: "پکیج کامل کانادا",
    amount: 1200,
    status: "processing",
    createdAt: "2024-01-14",
    paymentMethod: "انتقال بانکی",
  },
  {
    id: "ORD-003",
    customerName: "محمد رضایی",
    customerEmail: "mohammad@example.com",
    service: "خدمات ویزا",
    amount: 300,
    status: "pending",
    createdAt: "2024-01-13",
    paymentMethod: "کارت اعتباری",
  },
]

const getStatusBadge = (status: Order["status"]) => {
  const variants = {
    pending: "secondary",
    processing: "default",
    completed: "default",
    cancelled: "destructive",
  } as const

  const labels = {
    pending: "در انتظار",
    processing: "در حال پردازش",
    completed: "تکمیل شده",
    cancelled: "لغو شده",
  }

  return (
    <Badge variant={variants[status]} className="text-xs">
      {labels[status]}
    </Badge>
  )
}

export function OrdersTable() {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)

  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>شماره سفارش</TableHead>
              <TableHead>مشتری</TableHead>
              <TableHead>خدمت</TableHead>
              <TableHead>مبلغ</TableHead>
              <TableHead>وضعیت</TableHead>
              <TableHead>تاریخ</TableHead>
              <TableHead>عملیات</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>
                  <div>
                    <div className="font-medium">{order.customerName}</div>
                    <div className="text-sm text-muted-foreground">{order.customerEmail}</div>
                  </div>
                </TableCell>
                <TableCell>{order.service}</TableCell>
                <TableCell>€{order.amount}</TableCell>
                <TableCell>{getStatusBadge(order.status)}</TableCell>
                <TableCell>{order.createdAt}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => setSelectedOrder(order)}>
                        <Eye className="mr-2 h-4 w-4" />
                        مشاهده جزئیات
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Download className="mr-2 h-4 w-4" />
                        دانلود فاکتور
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <OrderDetailsDialog
        order={selectedOrder}
        open={!!selectedOrder}
        onOpenChange={(open) => !open && setSelectedOrder(null)}
      />
    </>
  )
}
