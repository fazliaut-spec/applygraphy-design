import type { Metadata } from "next"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import EmailTemplates from "@/components/admin/email-templates"
import EmailAutomation from "@/components/admin/email-automation"
import { Mail, Zap, BarChart3 } from "lucide-react"

export const metadata: Metadata = {
  title: "مدیریت ایمیل | پنل مدیریت اپلای‌گرافی",
  description: "مدیریت قالب‌های ایمیل و خودکارسازی ارسال",
}

export default function EmailManagementPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Mail className="w-6 h-6" />
        <h1 className="text-3xl font-bold">مدیریت ایمیل</h1>
      </div>

      <Tabs defaultValue="templates" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="templates" className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            قالب‌های ایمیل
          </TabsTrigger>
          <TabsTrigger value="automation" className="flex items-center gap-2">
            <Zap className="w-4 h-4" />
            خودکارسازی
          </TabsTrigger>
          <TabsTrigger value="analytics" className="flex items-center gap-2">
            <BarChart3 className="w-4 h-4" />
            آمار و گزارش
          </TabsTrigger>
        </TabsList>

        <TabsContent value="templates">
          <EmailTemplates />
        </TabsContent>

        <TabsContent value="automation">
          <EmailAutomation />
        </TabsContent>

        <TabsContent value="analytics">
          <div className="text-center py-12">
            <BarChart3 className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">آمار و گزارش ایمیل</h3>
            <p className="text-muted-foreground">این بخش به زودی اضافه خواهد شد</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
