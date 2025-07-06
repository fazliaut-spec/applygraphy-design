"use client"

import type React from "react"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Chrome, Linkedin, Mail, Eye, EyeOff, Shield } from "lucide-react"
import { authService } from "@/lib/auth/supabase-auth"
import ReCAPTCHA from "react-google-recaptcha"
import { RECAPTCHA_SITE_KEY } from "@/lib/config"

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess?: () => void
}

export function AuthModal({ isOpen, onClose, onSuccess }: AuthModalProps) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)

  const [signUpData, setSignUpData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  })

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!captchaToken) {
      setError("Please complete the reCAPTCHA verification")
      return
    }

    if (signUpData.password !== signUpData.confirmPassword) {
      setError("Passwords do not match")
      return
    }

    if (signUpData.password.length < 8) {
      setError("Password must be at least 8 characters long")
      return
    }

    setLoading(true)
    setError("")

    try {
      const { data, error } = await authService.signUp(signUpData.email, signUpData.password, signUpData.fullName)

      if (error) {
        setError(error.message)
      } else {
        setSuccess("Please check your email to verify your account before signing in.")
      }
    } catch (err) {
      setError("An unexpected error occurred")
    } finally {
      setLoading(false)
    }
  }

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!captchaToken) {
      setError("Please complete the reCAPTCHA verification")
      return
    }

    setLoading(true)
    setError("")

    try {
      const { data, error } = await authService.signIn(signInData.email, signInData.password)

      if (error) {
        setError(error.message)
      } else {
        onSuccess?.()
        onClose()
      }
    } catch (err) {
      setError("An unexpected error occurred")
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleSignIn = async () => {
    setLoading(true)
    setError("")

    try {
      const { error } = await authService.signInWithGoogle()
      if (error) {
        setError(error.message)
      }
    } catch (err) {
      setError("Failed to sign in with Google")
    } finally {
      setLoading(false)
    }
  }

  const handleLinkedInSignIn = async () => {
    setLoading(true)
    setError("")

    try {
      const { error } = await authService.signInWithLinkedIn()
      if (error) {
        setError(error.message)
      }
    } catch (err) {
      setError("Failed to sign in with LinkedIn")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md" dir="rtl">
        <DialogHeader>
          <DialogTitle className="text-center text-[#02153D] flex items-center justify-center gap-2">
            <Shield className="h-5 w-5" />
            ورود امن به حساب کاربری
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="signin" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signin">ورود</TabsTrigger>
            <TabsTrigger value="signup">ثبت نام</TabsTrigger>
          </TabsList>

          <TabsContent value="signin" className="space-y-4">
            {/* Social Login Buttons */}
            <div className="space-y-3">
              <Button
                onClick={handleGoogleSignIn}
                disabled={loading}
                variant="outline"
                className="w-full flex items-center gap-3 hover:bg-red-50 bg-transparent"
              >
                <Chrome className="h-5 w-5 text-red-500" />
                ورود با گوگل
              </Button>
              <Button
                onClick={handleLinkedInSignIn}
                disabled={loading}
                variant="outline"
                className="w-full flex items-center gap-3 hover:bg-blue-50 bg-transparent"
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

            <form onSubmit={handleSignIn} className="space-y-4">
              <div>
                <Label htmlFor="signin-email">ایمیل</Label>
                <Input
                  id="signin-email"
                  type="email"
                  value={signInData.email}
                  onChange={(e) => setSignInData({ ...signInData, email: e.target.value })}
                  className="text-right"
                  required
                />
              </div>
              <div>
                <Label htmlFor="signin-password">رمز عبور</Label>
                <div className="relative">
                  <Input
                    id="signin-password"
                    type={showPassword ? "text" : "password"}
                    value={signInData.password}
                    onChange={(e) => setSignInData({ ...signInData, password: e.target.value })}
                    className="text-right pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <ReCAPTCHA sitekey={RECAPTCHA_SITE_KEY} onChange={setCaptchaToken} hl="fa" />

              <Button
                type="submit"
                disabled={loading || !captchaToken}
                className="w-full bg-[#FF6A5C] hover:bg-[#FF6A5C]/90"
              >
                <Mail className="h-4 w-4 ml-2" />
                {loading ? "در حال ورود..." : "ورود"}
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="signup" className="space-y-4">
            <form onSubmit={handleSignUp} className="space-y-4">
              <div>
                <Label htmlFor="signup-name">نام و نام خانوادگی</Label>
                <Input
                  id="signup-name"
                  value={signUpData.fullName}
                  onChange={(e) => setSignUpData({ ...signUpData, fullName: e.target.value })}
                  className="text-right"
                  required
                />
              </div>
              <div>
                <Label htmlFor="signup-email">ایمیل</Label>
                <Input
                  id="signup-email"
                  type="email"
                  value={signUpData.email}
                  onChange={(e) => setSignUpData({ ...signUpData, email: e.target.value })}
                  className="text-right"
                  required
                />
              </div>
              <div>
                <Label htmlFor="signup-password">رمز عبور (حداقل ۸ کاراکتر)</Label>
                <div className="relative">
                  <Input
                    id="signup-password"
                    type={showPassword ? "text" : "password"}
                    value={signUpData.password}
                    onChange={(e) => setSignUpData({ ...signUpData, password: e.target.value })}
                    className="text-right pr-10"
                    minLength={8}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
              <div>
                <Label htmlFor="signup-confirm">تکرار رمز عبور</Label>
                <Input
                  id="signup-confirm"
                  type="password"
                  value={signUpData.confirmPassword}
                  onChange={(e) => setSignUpData({ ...signUpData, confirmPassword: e.target.value })}
                  className="text-right"
                  required
                />
              </div>

              <ReCAPTCHA sitekey={RECAPTCHA_SITE_KEY} onChange={setCaptchaToken} hl="fa" className="mx-auto" />

              <Button
                type="submit"
                disabled={loading || !captchaToken}
                className="w-full bg-[#FF6A5C] hover:bg-[#FF6A5C]/90"
              >
                {loading ? "در حال ثبت نام..." : "ثبت نام"}
              </Button>
            </form>
          </TabsContent>
        </Tabs>

        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {success && (
          <Alert>
            <AlertDescription className="text-green-600">{success}</AlertDescription>
          </Alert>
        )}

        <div className="text-center text-xs text-gray-500">
          با ثبت نام، شما با{" "}
          <a href="/terms" className="text-[#FF6A5C] hover:underline">
            قوانین و مقررات
          </a>{" "}
          و{" "}
          <a href="/privacy" className="text-[#FF6A5C] hover:underline">
            سیاست حفظ حریم خصوصی
          </a>{" "}
          ما موافقت می‌کنید.
        </div>
      </DialogContent>
    </Dialog>
  )
}
