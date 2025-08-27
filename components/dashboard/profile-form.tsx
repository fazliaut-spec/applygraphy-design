"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useToast } from "@/hooks/use-toast"
import { Loader2 } from "lucide-react"

const personalFormSchema = z.object({
  name: z.string().min(2, {
    message: "نام باید حداقل 2 کاراکتر باشد",
  }),
  email: z.string().email({
    message: "ایمیل نامعتبر است",
  }),
  phone: z.string().min(10, {
    message: "شماره تلفن نامعتبر است",
  }),
  address: z.string().min(10, {
    message: "آدرس باید حداقل 10 کاراکتر باشد",
  }),
  birthdate: z.string().min(1, {
    message: "تاریخ تولد الزامی است",
  }),
})

const educationFormSchema = z.object({
  university: z.string().min(2, {
    message: "نام دانشگاه باید حداقل 2 کاراکتر باشد",
  }),
  degree: z.string().min(1, {
    message: "مقطع تحصیلی الزامی است",
  }),
  field: z.string().min(2, {
    message: "رشته تحصیلی باید حداقل 2 کاراکتر باشد",
  }),
  gpa: z.string().min(1, {
    message: "معدل الزامی است",
  }),
  graduationYear: z.string().min(4, {
    message: "سال فارغ‌التحصیلی نامعتبر است",
  }),
})

type ProfileFormProps = {
  type?: "personal" | "education"
}

export function ProfileForm({ type = "personal" }: ProfileFormProps) {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

  const formSchema = type === "personal" ? personalFormSchema : educationFormSchema

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues:
      type === "personal"
        ? {
            name: "کاربر نمونه",
            email: "user@example.com",
            phone: "09123456789",
            address: "تهران، خیابان ولیعصر",
            birthdate: "1370/01/01",
          }
        : {
            university: "دانشگاه تهران",
            degree: "کارشناسی",
            field: "مهندسی کامپیوتر",
            gpa: "17.5",
            graduationYear: "1395",
          },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      console.log(values)
      setIsLoading(false)
      toast({
        title: "اطلاعات با موفقیت ذخیره شد",
        description: "اطلاعات شما با موفقیت به‌روزرسانی شد.",
      })
    }, 1000)
  }

  if (type === "personal") {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Avatar className="h-20 w-20">
            <AvatarImage src="/placeholder.svg" alt="تصویر کاربر" />
            <AvatarFallback>کا</AvatarFallback>
          </Avatar>
          <div>
            <Button size="sm">تغییر تصویر</Button>
            <p className="text-sm text-gray-500 mt-1">
              تصویر پروفایل خود را آپلود کنید. فرمت‌های JPG و PNG پشتیبانی می‌شوند.
            </p>
          </div>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>نام و نام خانوادگی</FormLabel>
                    <FormControl>
                      <Input placeholder="نام و نام خانوادگی خود را وارد کنید" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ایمیل</FormLabel>
                    <FormControl>
                      <Input placeholder="ایمیل خود را وارد کنید" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>شماره تلفن</FormLabel>
                    <FormControl>
                      <Input placeholder="شماره تلفن خود را وارد کنید" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="birthdate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>تاریخ تولد</FormLabel>
                    <FormControl>
                      <Input placeholder="تاریخ تولد خود را وارد کنید" {...field} />
                    </FormControl>
                    <FormDescription>فرمت: سال/ماه/روز</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>آدرس</FormLabel>
                  <FormControl>
                    <Textarea placeholder="آدرس خود را وارد کنید" className="min-h-[100px]" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" disabled={isLoading}>
              {isLoading && <Loader2 className="ml-2 h-4 w-4 animate-spin" />}
              ذخیره تغییرات
            </Button>
          </form>
        </Form>
      </div>
    )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="university"
            render={({ field }) => (
              <FormItem>
                <FormLabel>دانشگاه</FormLabel>
                <FormControl>
                  <Input placeholder="نام دانشگاه را وارد کنید" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="degree"
            render={({ field }) => (
              <FormItem>
                <FormLabel>مقطع تحصیلی</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="مقطع تحصیلی را انتخاب کنید" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="کاردانی">کاردانی</SelectItem>
                    <SelectItem value="کارشناسی">کارشناسی</SelectItem>
                    <SelectItem value="کارشناسی ارشد">کارشناسی ارشد</SelectItem>
                    <SelectItem value="دکتری">دکتری</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="field"
            render={({ field }) => (
              <FormItem>
                <FormLabel>رشته تحصیلی</FormLabel>
                <FormControl>
                  <Input placeholder="رشته تحصیلی خود را وارد کنید" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="gpa"
            render={({ field }) => (
              <FormItem>
                <FormLabel>معدل</FormLabel>
                <FormControl>
                  <Input placeholder="معدل خود را وارد کنید" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="graduationYear"
            render={({ field }) => (
              <FormItem>
                <FormLabel>سال فارغ‌التحصیلی</FormLabel>
                <FormControl>
                  <Input placeholder="سال فارغ‌التحصیلی را وارد کنید" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" disabled={isLoading}>
          {isLoading && <Loader2 className="ml-2 h-4 w-4 animate-spin" />}
          ذخیره تغییرات
        </Button>
      </form>
    </Form>
  )
}
