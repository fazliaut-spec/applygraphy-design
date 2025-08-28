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

interface NewApplicationDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSave?: (application: any) => void
}

export function NewApplicationDialog({ open, onOpenChange, onSave }: NewApplicationDialogProps) {
  const [formData, setFormData] = useState({
    university: "",
    program: "",
    degree: "",
    country: "",
    deadline: "",
    notes: "",
    priority: "medium",
  })

  const handleSave = () => {
    onSave?.(formData)
    onOpenChange(false)
    // Reset form
    setFormData({
      university: "",
      program: "",
      degree: "",
      country: "",
      deadline: "",
      notes: "",
      priority: "medium",
    })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>درخواست جدید</DialogTitle>
          <DialogDescription>اطلاعات درخواست تحصیلی جدید را وارد کنید</DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="university">نام دانشگاه</Label>
              <Input
                id="university"
                value={formData.university}
                onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                placeholder="نام دانشگاه"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="country">کشور</Label>
              <Select value={formData.country} onValueChange={(value) => setFormData({ ...formData, country: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="کشور را انتخاب کنید" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="germany">آلمان</SelectItem>
                  <SelectItem value="canada">کانادا</SelectItem>
                  <SelectItem value="australia">استرالیا</SelectItem>
                  <SelectItem value="uk">انگلستان</SelectItem>
                  <SelectItem value="france">فرانسه</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="program">رشته تحصیلی</Label>
              <Input
                id="program"
                value={formData.program}
                onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                placeholder="نام رشته"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="degree">مقطع تحصیلی</Label>
              <Select value={formData.degree} onValueChange={(value) => setFormData({ ...formData, degree: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="مقطع را انتخاب کنید" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bachelor">کارشناسی</SelectItem>
                  <SelectItem value="master">کارشناسی ارشد</SelectItem>
                  <SelectItem value="phd">دکتری</SelectItem>
                  <SelectItem value="diploma">دیپلم</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="deadline">مهلت درخواست</Label>
              <Input
                id="deadline"
                type="date"
                value={formData.deadline}
                onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="priority">اولویت</Label>
              <Select
                value={formData.priority}
                onValueChange={(value) => setFormData({ ...formData, priority: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="اولویت را انتخاب کنید" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">کم</SelectItem>
                  <SelectItem value="medium">متوسط</SelectItem>
                  <SelectItem value="high">بالا</SelectItem>
                  <SelectItem value="urgent">فوری</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">یادداشت‌ها</Label>
            <Textarea
              id="notes"
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="یادداشت‌های اضافی..."
              rows={3}
            />
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            انصراف
          </Button>
          <Button onClick={handleSave}>ایجاد درخواست</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
