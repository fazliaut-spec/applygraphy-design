"use client"

import type React from "react"
import { useState } from "react"
import { RECAPTCHA_SITE_KEY } from "@/lib/recaptcha"
import { Button, Input } from "@/components/ui"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Mail } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface AuthModalProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export default function AuthModal({ open = false, onOpenChange = () => {} }: AuthModalProps) {
  const [email, setEmail] = useState("")
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { toast } = useToast()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!recaptchaToken) {
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
      // TODO: send { email, recaptchaToken } to a server-action or /api route
      // that verifies the token using `process.env.RECAPTCHA_SECRET_KEY`
      console.log({ email, recaptchaToken })
      await new Promise((r) => setTimeout(r, 800))

      toast({
        title: "موفقیت!",
        description: "درخواست شما با موفقیت ارسال شد.",
      })
      setEmail("")
      setRecaptchaToken(null)
      onOpenChange(false)
    } catch (err) {
      setError("مشکلی پیش آمد. لطفاً دوباره تلاش کنید.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md" dir="rtl">
        <DialogHeader>
          <DialogTitle className="text-center">ورود / ثبت نام</DialogTitle>
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

          {/* ---- Google reCAPTCHA (v2, client-side) ---- */}
          {/* You can swap this out for `react-google-recaptcha`. */}
          <div
            className="g-recaptcha"
            data-sitekey={RECAPTCHA_SITE_KEY}
            data-callback={(tok: string) => setRecaptchaToken(tok)}
          />

          <Button type="submit" disabled={submitting || !recaptchaToken} className="w-full">
            <Mail className="w-4 h-4 mr-2" />
            {submitting ? "لطفاً صبر کنید..." : "ادامه"}
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
