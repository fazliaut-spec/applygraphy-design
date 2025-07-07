"use client"

import { useState, type FormEvent } from "react"
import ReCAPTCHA from "react-google-recaptcha"
import { RECAPTCHA_SITE_KEY } from "@/lib/recaptcha"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Eye, EyeOff, Mail } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface AuthModalProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export default function AuthModal({ open = false, onOpenChange = () => {} }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { toast } = useToast()

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    if (!captchaToken) {
      toast({
        title: "تأیید ربات",
        description: "لطفاً reCAPTCHA را تکمیل کنید.",
        variant: "destructive",
      })
      return
    }

    setSubmitting(true)
    setError(null)

    try {
      const endpoint = isLogin ? "/api/auth/signin" : "/api/auth/signup"
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, captchaToken }),
      })

      const json = await res.json()
      if (!res.ok) throw new Error(json.error || "Authentication failed")

      toast({
        title: "موفقیت!",
        description: isLogin ? "با موفقیت وارد شدید." : "حساب کاربری شما ایجاد شد.",
      })

      setEmail("")
      setPassword("")
      setCaptchaToken(null)
      onOpenChange(false)
    } catch (err) {
      setError(err instanceof Error ? err.message : "مشکلی پیش آمد. لطفاً دوباره تلاش کنید.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md" dir="rtl">
        <DialogHeader>
          <DialogTitle className="text-center">{isLogin ? "ورود به حساب کاربری" : "ایجاد حساب کاربری"}</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="ایمیل شما"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="text-right"
          />

          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="رمز عبور"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="text-right pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>

          <div className="flex justify-center">
            <ReCAPTCHA sitekey={RECAPTCHA_SITE_KEY} onChange={(tok) => setCaptchaToken(tok)} hl="fa" />
          </div>

          <Button type="submit" disabled={submitting || !captchaToken} className="w-full">
            <Mail className="w-4 h-4 ml-2" />
            {submitting ? "در حال پردازش..." : isLogin ? "ورود" : "ثبت‌نام"}
          </Button>

          <div className="text-center">
            <button
              type="button"
              onClick={() => setIsLogin((v) => !v)}
              className="text-sm text-blue-600 hover:text-blue-800 underline"
            >
              {isLogin ? "حساب کاربری ندارید؟ ثبت‌نام کنید" : "حساب کاربری دارید؟ وارد شوید"}
            </button>
          </div>
        </form>

        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
      </DialogContent>
    </Dialog>
  )
}
