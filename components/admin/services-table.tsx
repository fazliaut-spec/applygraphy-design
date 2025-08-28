"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, Edit, Trash2, Eye } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface Service {
  id: string
  name: string
  category: string
  price: number
  status: "active" | "inactive" | "draft"
  orders: number
  createdAt: string
}

const services: Service[] = [
  {
    id: "1",
    name: "مشاوره تحصیلی کامل",
    category: "مشاوره",
    price: 2000000,
    status: "active",
    orders: 145,
    createdAt: "1403/01/15",
  },
  {
    id: "2",
    name: "ویزای تحصیلی آلمان",
    category: "ویزا",
    price: 3000000,
    status: "active",
    orders: 120,
    createdAt: "1403/01/10",
  },
  {
    id: "3",
    name: "ثبت نام دانشگاه کانادا",
    category: "ثبت نام",
    price: 2500000,
    status: "active",
    orders: 98,
    createdAt: "1403/01/08",
  },
  {
    id: "4",
    name: "آمادگی آیلتس",
    category: "آموزش",
    price: 1500000,
    status: "draft",
    orders: 0,
    createdAt: "1403/02/01",
  },
]

export function ServicesTable() {
  const [selectedServices, setSelectedServices] = useState<string[]>([])

  const getStatusBadge = (status: Service["status"]) => {
    switch (status) {
      case "active":
        return (
          <Badge variant="default" className="bg-green-100 text-green-800">
            فعال
          </Badge>
        )
      case "inactive":
        return <Badge variant="secondary">غیرفعال</Badge>
      case "draft":
        return <Badge variant="outline">پیش‌نویس</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fa-IR").format(price) + " تومان"
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>مدیریت خدمات</CardTitle>
        <CardDescription>لیست تمام خدمات ارائه شده</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>نام خدمت</TableHead>
              <TableHead>دسته‌بندی</TableHead>
              <TableHead>قیمت</TableHead>
              <TableHead>وضعیت</TableHead>
              <TableHead>تعداد سفارش</TableHead>
              <TableHead>تاریخ ایجاد</TableHead>
              <TableHead>عملیات</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {services.map((service) => (
              <TableRow key={service.id}>
                <TableCell className="font-medium">{service.name}</TableCell>
                <TableCell>{service.category}</TableCell>
                <TableCell>{formatPrice(service.price)}</TableCell>
                <TableCell>{getStatusBadge(service.status)}</TableCell>
                <TableCell>{service.orders}</TableCell>
                <TableCell>{service.createdAt}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Eye className="mr-2 h-4 w-4" />
                        مشاهده
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" />
                        ویرایش
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        <Trash2 className="mr-2 h-4 w-4" />
                        حذف
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
