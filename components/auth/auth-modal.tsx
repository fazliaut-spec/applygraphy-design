"use client"

import { useState } from "react"
import Script from "next/script"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { RECAPTCHA_SITE_KEY } from "@/lib/recaptcha"

export function AuthModal() {
  const [open, setOpen] = useState(false)
  const [token, setToken] = useState<string | null>(null)

  // Load Google reCAPTCHA script when modal opens
  const handleOpenChange = (val: boolean) => {
    setOpen(val)
    if (!val) setToken(null)
  }

  return (
    <>
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogTrigger asChild>
          <Button variant="outline">ورود / ثبت‌نام</Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-md">
          <h2 className="text-lg font-semibold text-center mb-4">ورود یا ثبت‌نام</h2>

          {/* recaptcha placeholder */}
          <div id="recaptcha-container" className="mb-4"></div>

          <Button disabled={!token} className="w-full" onClick={() => alert(`Token: ${token}`)}>
            ادامه
          </Button>
        </DialogContent>
      </Dialog>

      {/* Google reCAPTCHA v2 (invisible) */}
      {open && (
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`}
          strategy="afterInteractive"
          onLoad={() => {
            if ("grecaptcha" in window) {
              // @ts-ignore
              window.grecaptcha.ready(() => {
                // @ts-ignore
                window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: "submit" }).then((tok: string) => setToken(tok))
              })
            }
          }}
        />
      )}
    </>
  )
}
