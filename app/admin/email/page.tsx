import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { EmailTemplates } from "@/components/admin/email-templates"
import { EmailAutomation } from "@/components/admin/email-automation"

export default function EmailManagementPage() {
  return (
    <div className="space-y-6" dir="rtl">
      <div>
        <h1 className="text-3xl font-bold">مدیریت ایمیل</h1>
        <p className="text-gray-600">مدیریت قالب‌ها و اتوماسیون ایمیل</p>
      </div>

      <Tabs defaultValue="templates" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="templates">قالب‌های ایمیل</TabsTrigger>
          <TabsTrigger value="automation">اتوماسیون</TabsTrigger>
        </TabsList>

        <TabsContent value="templates" className="mt-6">
          <EmailTemplates />
        </TabsContent>

        <TabsContent value="automation" className="mt-6">
          <EmailAutomation />
        </TabsContent>
      </Tabs>
    </div>
  )
}
