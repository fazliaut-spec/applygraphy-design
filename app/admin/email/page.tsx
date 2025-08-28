import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { EmailTemplates } from "@/components/admin/email-templates"
import { EmailAutomation } from "@/components/admin/email-automation"

export default function EmailManagementPage() {
  return (
    <div className="container mx-auto py-6 font-iranSans">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">مدیریت ایمیل</h1>
          <p className="text-muted-foreground">مدیریت قالب‌ها و اتوماسیون ایمیل‌های سیستم</p>
        </div>

        <Tabs defaultValue="templates" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="templates">قالب‌های ایمیل</TabsTrigger>
            <TabsTrigger value="automation">اتوماسیون</TabsTrigger>
          </TabsList>

          <TabsContent value="templates" className="space-y-6">
            <EmailTemplates />
          </TabsContent>

          <TabsContent value="automation" className="space-y-6">
            <EmailAutomation />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
