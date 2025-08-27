"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Eye, EyeOff, Mail, Lock, User, Phone } from "lucide-react"
import ReCAPTCHA from "react-google-recaptcha"
import { RECAPTCHA_SITE_KEY } from "@/lib/recaptcha"
import { useToast } from "@/hooks/use-toast"

export interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
}

export function AuthModal({ isOpen, onClose, onSuccess }: AuthModalProps) {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null)
  const recaptchaRef = useRef<ReCAPTCHA>(null)
  const { toast } = useToast()

  const resetRecaptcha = () => {
    if (recaptchaRef.current) {
      recaptchaRef.current.reset()
    }
    setRecaptchaToken(null)
  }

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!recaptchaToken) {
      toast({
        title: "خطا",
        description: "لطفاً reCAPTCHA را تکمیل کنید",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)
    try {
      const formData = new FormData(e.currentTarget)
      const email = formData.get("email") as string
      const password = formData.get("password") as string

      console.log("Attempting login with:", { email, hasRecaptcha: !!recaptchaToken })

      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, captchaToken: recaptchaToken }),
      })

      const result = await response.json()
      console.log("Login response:", result)

      if (result.success) {
        toast({
          title: "ورود موفق",
          description: "خوش آمدید!",
        })
        onSuccess()
        onClose()
      } else {
        toast({
          title: "خطا در ورود",
          description: result.error || "لطفاً دوباره تلاش کنید",
          variant: "destructive",
        })
        resetRecaptcha()
      }
    } catch (error) {
      console.error("Login error:", error)
      toast({
        title: "خطا در ورود",
        description: "لطفاً دوباره تلاش کنید",
        variant: "destructive",
      })
      resetRecaptcha()
    } finally {
      setIsLoading(false)
    }
  }

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!recaptchaToken) {
      toast({
        title: "خطا",
        description: "لطفاً reCAPTCHA را تکمیل کنید",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)
    try {
      const formData = new FormData(e.currentTarget)
      const email = formData.get("registerEmail") as string
      const password = formData.get("registerPassword") as string
      const firstName = formData.get("firstName") as string
      const lastName = formData.get("lastName") as string
      const phone = formData.get("phone") as string

      console.log("Attempting registration with:", {
        email,
        firstName,
        lastName,
        phone,
        hasRecaptcha: !!recaptchaToken,
      })

      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
          firstName,
          lastName,
          phone,
          captchaToken: recaptchaToken,
        }),
      })

      const result = await response.json()
      console.log("Registration response:", result)

      if (result.success) {
        toast({
          title: "ثبت نام موفق",
          description: "حساب کاربری شما ایجاد شد",
        })
        onSuccess()
        onClose()
      } else {
        toast({
          title: "خطا در ثبت نام",
          description: result.error || "لطفاً دوباره تلاش کنید",
          variant: "destructive",
        })
        resetRecaptcha()
      }
    } catch (error) {
      console.error("Registration error:", error)
      toast({
        title: "خطا در ثبت نام",
        description: "لطفاً دوباره تلاش کنید",
        variant: "destructive",
      })
      resetRecaptcha()
    } finally {
      setIsLoading(false)
    }
  }

  const handleRecaptchaChange = (token: string | null) => {
    console.log("reCAPTCHA token received:", token ? "✓" : "✗")
    setRecaptchaToken(token)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md" dir="rtl">
        <DialogHeader>
          <DialogTitle className="text-center text-[#02153D]">ورود به اپلای‌گرافی</DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">ورود</TabsTrigger>
            <TabsTrigger value="register">ثبت نام</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">ایمیل</Label>
                <div className="relative">
                  <Mail className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="example@email.com"
                    className="pr-10"
                    defaultValue="test@example.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">رمز عبور</Label>
                <div className="relative">
                  <Lock className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="رمز عبور خود را وارد کنید"
                    className="pr-10 pl-10"
                    defaultValue="password123"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute left-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-400" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-400" />
                    )}
                  </Button>
                </div>
              </div>

              <div className="flex justify-center">
                <ReCAPTCHA ref={recaptchaRef} sitekey={RECAPTCHA_SITE_KEY} onChange={handleRecaptchaChange} hl="fa" />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#FF6A5C] hover:bg-[#FF6A5C]/90"
                disabled={isLoading || !recaptchaToken}
              >
                {isLoading ? "در حال ورود..." : "ورود"}
              </Button>

              <div className="text-xs text-gray-500 text-center">برای تست: ایمیل و رمز عبور از پیش پر شده است</div>
            </form>
          </TabsContent>

          <TabsContent value="register">
            <form onSubmit={handleRegister} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">نام</Label>
                  <div className="relative">
                    <User className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="نام"
                      className="pr-10 text-right"
                      defaultValue="علی"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName">نام خانوادگی</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="نام خانوادگی"
                    className="text-right"
                    defaultValue="احمدی"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="registerEmail">ایمیل</Label>
                <div className="relative">
                  <Mail className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="registerEmail"
                    name="registerEmail"
                    type="email"
                    placeholder="example@email.com"
                    className="pr-10"
                    defaultValue="newuser@example.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">شماره تماس</Label>
                <div className="relative">
                  <Phone className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="09123456789"
                    className="pr-10"
                    defaultValue="09123456789"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="registerPassword">رمز عبور</Label>
                <div className="relative">
                  <Lock className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="registerPassword"
                    name="registerPassword"
                    type={showPassword ? "text" : "password"}
                    placeholder="رمز عبور خود را وارد کنید"
                    className="pr-10 pl-10"
                    defaultValue="newpassword123"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute left-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-400" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-400" />
                    )}
                  </Button>
                </div>
              </div>

              <div className="flex justify-center">
                <ReCAPTCHA ref={recaptchaRef} sitekey={RECAPTCHA_SITE_KEY} onChange={handleRecaptchaChange} hl="fa" />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#FF6A5C] hover:bg-[#FF6A5C]/90"
                disabled={isLoading || !recaptchaToken}
              >
                {isLoading ? "در حال ثبت نام..." : "ثبت نام"}
              </Button>

              <div className="text-xs text-gray-500 text-center">برای تست: تمام فیلدها از پیش پر شده است</div>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
