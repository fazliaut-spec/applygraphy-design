"use client"

import type React from "react"

import { useState } from "react"
import ReCAPTCHA from "react-google-recaptcha"

import { RECAPTCHA_SITE_KEY } from "@/lib/recaptcha"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Mail } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface AuthModalProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export default function AuthModal({ open = false, onOpenChange = () => {} }: AuthModalProps) {
  const [email, setEmail] = useState("")
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { toast } = useToast()

  async function handleSubmit(e: React.FormEvent) {
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
      // 🔒  SEND { email, captchaToken } to a server-side action / route
      //      that validates the captcha with RECAPTCHA_SECRET_KEY
      await new Promise((r) => setTimeout(r, 800))

      toast({
        title: "موفقیت!",
        description: "درخواست شما با موفقیت ارسال شد.",
      })
      setEmail("")
      setCaptchaToken(null)
      onOpenChange(false)
    } catch {
      setError("مشکلی پیش آمد. لطفاً دوباره تلاش کنید.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md" dir="rtl">
        <DialogHeader>
          <DialogTitle className="text-center">ورود / ثبت‌نام</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="text-right"
          />

          <div className="flex justify-center">
            <ReCAPTCHA sitekey={RECAPTCHA_SITE_KEY} onChange={(token) => setCaptchaToken(token)} hl="fa" />
          </div>

          <Button type="submit" disabled={submitting || !captchaToken} className="w-full">
            <Mail className="w-4 h-4 mr-2" />
            {submitting ? "در حال ارسال..." : "ادامه"}
          </Button>
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
