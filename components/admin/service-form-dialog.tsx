"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

interface ServiceFormDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  service?: any
  onSave?: (service: any) => void
}

export function ServiceFormDialog({ open, onOpenChange, service, onSave }: ServiceFormDialogProps) {
  const [formData, setFormData] = useState({
    name: service?.name || "",
    category: service?.category || "",
    price: service?.price || "",
    description: service?.description || "",
    features: service?.features || "",
    duration: service?.duration || "",
    isActive: service?.isActive || true,
  })

  const handleSave = () => {
    onSave?.(formData)
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{service ? "ویرایش خدمت" : "افزودن خدمت جدید"}</DialogTitle>
          <DialogDescription>اطلاعات خدمت را وارد کنید</DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">نام خدمت</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="نام خدمت را وارد کنید"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">دسته‌بندی</Label>
              <Select
                value={formData.category}
                onValueChange={(value) => setFormData({ ...formData, category: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="دسته‌بندی را انتخاب کنید" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="consultation">مشاوره</SelectItem>
                  <SelectItem value="visa">ویزا</SelectItem>
                  <SelectItem value="registration">ثبت نام</SelectItem>
                  <SelectItem value="education">آموزش</SelectItem>
                  <SelectItem value="package">پکیج</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="price">قیمت (تومان)</Label>
              <Input
                id="price"
                type="number"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                placeholder="قیمت را وارد کنید"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="duration">مدت زمان</Label>
              <Input
                id="duration"
                value={formData.duration}
                onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                placeholder="مثال: ۳۰ روز"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">توضیحات</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="توضیحات خدمت را وارد کنید"
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="features">ویژگی‌ها</Label>
            <Textarea
              id="features"
              value={formData.features}
              onChange={(e) => setFormData({ ...formData, features: e.target.value })}
              placeholder="ویژگی‌های خدمت را وارد کنید (هر خط یک ویژگی)"
              rows={4}
            />
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              id="isActive"
              checked={formData.isActive}
              onCheckedChange={(checked) => setFormData({ ...formData, isActive: checked })}
            />
            <Label htmlFor="isActive">خدمت فعال باشد</Label>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            انصراف
          </Button>
          <Button onClick={handleSave}>{service ? "ذخیره تغییرات" : "افزودن خدمت"}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
