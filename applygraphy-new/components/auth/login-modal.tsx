"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAuth } from "@/lib/auth/auth-provider"
import { Chrome, Linkedin, Mail } from "lucide-react"

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess?: () => void
}

export function LoginModal({ isOpen, onClose, onSuccess }: LoginModalProps) {
  const [mode, setMode] = useState<"login" | "register">("login")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })
  const { login } = useAuth()

  const handleGoogleLogin = () => {
    // Simulate Google OAuth
    login("google", {
      id: "google_" + Date.now(),
      email: "user@gmail.com",
      name: "کاربر گوگل",
      avatar: "/placeholder.svg?height=40&width=40",
    })
    onSuccess?.()
    onClose()
  }

  const handleLinkedInLogin = () => {
    // Simulate LinkedIn OAuth
    login("linkedin", {
      id: "linkedin_" + Date.now(),
      email: "user@linkedin.com",
      name: "کاربر لینکدین",
      avatar: "/placeholder.svg?height=40&width=40",
    })
    onSuccess?.()
    onClose()
  }

  const handleManualSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    login("manual", {
      id: "manual_" + Date.now(),
      email: formData.email,
      name: formData.name,
    })
    onSuccess?.()
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md" dir="rtl">
        <DialogHeader>
          <DialogTitle className="text-center text-[#02153D]">
            {mode === "login" ? "ورود به حساب کاربری" : "ثبت نام"}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Social Login Buttons */}
          <div className="space-y-3">
            <Button
              onClick={handleGoogleLogin}
              variant="outline"
              className="w-full flex items-center gap-3 hover:bg-red-50"
            >
              <Chrome className="h-5 w-5 text-red-500" />
              ورود با گوگل
            </Button>
            <Button
              onClick={handleLinkedInLogin}
              variant="outline"
              className="w-full flex items-center gap-3 hover:bg-blue-50"
            >
              <Linkedin className="h-5 w-5 text-blue-600" />
              ورود با لینکدین
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-500">یا</span>
            </div>
          </div>

          {/* Manual Form */}
          <form onSubmit={handleManualSubmit} className="space-y-4">
            {mode === "register" && (
              <div>
                <Label htmlFor="name">نام و نام خانوادگی</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="text-right"
                  required
                />
              </div>
            )}
            <div>
              <Label htmlFor="email">ایمیل</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="text-right"
                required
              />
            </div>
            <div>
              <Label htmlFor="password">رمز عبور</Label>
              <Input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="text-right"
                required
              />
            </div>
            <Button type="submit" className="w-full bg-[#FF6A5C] hover:bg-[#FF6A5C]/90">
              <Mail className="h-4 w-4 ml-2" />
              {mode === "login" ? "ورود" : "ثبت نام"}
            </Button>
          </form>

          <div className="text-center">
            <button
              type="button"
              onClick={() => setMode(mode === "login" ? "register" : "login")}
              className="text-sm text-[#FF6A5C] hover:underline"
            >
              {mode === "login" ? "حساب کاربری ندارید؟ ثبت نام کنید" : "حساب کاربری دارید؟ وارد شوید"}
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
