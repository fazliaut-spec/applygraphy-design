import { ProfileForm } from "@/components/dashboard/profile-form"
import { DocumentUpload } from "@/components/dashboard/document-upload"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">پروفایل کاربری</h1>
        <p className="text-muted-foreground">اطلاعات شخصی خود را مدیریت کنید و مدارک مورد نیاز را بارگذاری نمایید.</p>
      </div>

      <Tabs defaultValue="personal" className="space-y-4">
        <TabsList>
          <TabsTrigger value="personal">اطلاعات شخصی</TabsTrigger>
          <TabsTrigger value="education">سوابق تحصیلی</TabsTrigger>
          <TabsTrigger value="documents">مدارک</TabsTrigger>
        </TabsList>

        <TabsContent value="personal" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>اطلاعات شخصی</CardTitle>
              <CardDescription>
                اطلاعات شخصی خود را وارد کنید. این اطلاعات برای تکمیل درخواست‌های شما استفاده خواهد شد.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ProfileForm />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="education" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>سوابق تحصیلی</CardTitle>
              <CardDescription>
                اطلاعات تحصیلی خود را وارد کنید. این اطلاعات برای پیشنهاد دانشگاه‌های مناسب استفاده خواهد شد.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ProfileForm type="education" />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="documents" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>مدارک</CardTitle>
              <CardDescription>
                مدارک مورد نیاز خود را بارگذاری کنید. این مدارک برای درخواست‌های شما استفاده خواهد شد.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <DocumentUpload />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
