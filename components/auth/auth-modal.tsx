"use client"

import type React from "react"

import { useState } from "react"
import ReCAPTCHA from "react-google-recaptcha"
import { RECAPTCHA_SITE_KEY } from "@/lib/config"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useToast } from "@/hooks/use-toast"

interface AuthModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function AuthModal({ open, onOpenChange }: AuthModalProps) {
  const [email, setEmail] = useState("")
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const { toast } = useToast()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!captchaToken) {
      toast({ title: "reCAPTCHA", description: "Please complete the captcha." })
      return
    }

    // TODO: call your server action / API for sign-up or sign-in here
    toast({ title: "Success", description: "Form submitted successfully!" })
    setEmail("")
    setCaptchaToken(null)
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Sign in / Sign up</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div className="flex justify-center">
            <ReCAPTCHA sitekey={RECAPTCHA_SITE_KEY} onChange={(token) => setCaptchaToken(token)} />
          </div>

          <Button type="submit" className="w-full">
            Continue
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
