"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { User, Mail, Phone, Calendar, CreditCard, Package, Download, MessageSquare } from "lucide-react"

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

interface OrderDetailsDialogProps {
  order: Order | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function OrderDetailsDialog({ order, open, onOpenChange }: OrderDetailsDialogProps) {
  if (!order) return null

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

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl" dir="rtl">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>جزئیات سفارش {order.id}</span>
            {getStatusBadge(order.status)}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Customer Information */}
          <div>
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <User className="mr-2 h-5 w-5" />
              اطلاعات مشتری
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center">
                <User className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>{order.customerName}</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>{order.customerEmail}</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>+98 912 345 6789</span>
              </div>
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>{order.createdAt}</span>
              </div>
            </div>
          </div>

          <Separator />

          {/* Order Information */}
          <div>
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <Package className="mr-2 h-5 w-5" />
              اطلاعات سفارش
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">خدمت:</span>
                <span className="font-medium">{order.service}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">مبلغ:</span>
                <span className="font-medium text-lg">€{order.amount}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">روش پرداخت:</span>
                <div className="flex items-center">
                  <CreditCard className="mr-2 h-4 w-4" />
                  <span>{order.paymentMethod}</span>
                </div>
              </div>
            </div>
          </div>

          <Separator />

          {/* Order Timeline */}
          <div>
            <h3 className="text-lg font-semibold mb-3">تاریخچه سفارش</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div>
                  <div className="font-medium">سفارش ایجاد شد</div>
                  <div className="text-sm text-muted-foreground">{order.createdAt}</div>
                </div>
                <Badge variant="outline">تکمیل شده</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div>
                  <div className="font-medium">پرداخت تایید شد</div>
                  <div className="text-sm text-muted-foreground">{order.createdAt}</div>
                </div>
                <Badge variant="outline">تکمیل شده</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <div>
                  <div className="font-medium">در حال پردازش</div>
                  <div className="text-sm text-muted-foreground">در حال انجام</div>
                </div>
                <Badge>فعال</Badge>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end space-x-2 space-x-reverse pt-4">
            <Button variant="outline" size="sm">
              <MessageSquare className="mr-2 h-4 w-4" />
              ارسال پیام
            </Button>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              دانلود فاکتور
            </Button>
            <Button size="sm">به‌روزرسانی وضعیت</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
