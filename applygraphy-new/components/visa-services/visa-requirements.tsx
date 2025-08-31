import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, XCircle } from "lucide-react"

export function VisaRequirements() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#02153D] mb-4">مدارک مورد نیاز ویزای تحصیلی</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            آشنایی با مدارک و شرایط لازم برای اخذ ویزای تحصیلی کشورهای مختلف
          </p>
        </div>

        <Tabs defaultValue="usa" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="usa">آمریکا</TabsTrigger>
            <TabsTrigger value="canada">کانادا</TabsTrigger>
            <TabsTrigger value="uk">انگلستان</TabsTrigger>
            <TabsTrigger value="eu">اتحادیه اروپا</TabsTrigger>
          </TabsList>

          <TabsContent value="usa">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-[#02153D]">مدارک ویزای تحصیلی آمریکا (F-1)</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-[#02153D] mb-4">مدارک اصلی</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>فرم I-20 صادر شده توسط دانشگاه</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>پاسپورت معتبر (حداقل ۶ ماه اعتبار)</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>فرم DS-160 تکمیل شده</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>رسید پرداخت هزینه SEVIS</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>رسید پرداخت هزینه درخواست ویزا</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>عکس پرسنلی با پس‌زمینه سفید</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>مدارک مالی (گردش حساب، تمکن مالی)</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#02153D] mb-4">مدارک تکمیلی</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>رزومه تحصیلی و کاری</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>مدارک تحصیلی قبلی (دیپلم، لیسانس و...)</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>نمرات آزمون‌های زبان (TOEFL یا IELTS)</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>نامه‌های توصیه</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <XCircle className="h-5 w-5 text-red-500" />
                        <span>گواهی عدم سوء پیشینه (معمولاً نیاز نیست)</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>مدارک نشان‌دهنده قصد بازگشت به کشور</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>بیمه درمانی (پس از ورود به آمریکا)</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-[#02153D] mb-4">نکات مهم</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                      <span>
                        مصاحبه ویزای F-1 اجباری است و باید آمادگی کامل برای پاسخ به سوالات افسر کنسولی را داشته باشید.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                      <span>
                        اثبات قصد بازگشت به کشور پس از اتمام تحصیلات یکی از مهم‌ترین جنبه‌های درخواست ویزای F-1 است.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                      <span>دارندگان ویزای F-1 می‌توانند تا ۹۰ روز قبل از شروع برنامه تحصیلی وارد آمریکا شوند.</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="canada">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-[#02153D]">مدارک ویزای تحصیلی کانادا (Study Permit)</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-[#02153D] mb-4">مدارک اصلی</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>نامه پذیرش از مؤسسه آموزشی کانادایی</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>پاسپورت معتبر</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>فرم درخواست آنلاین تکمیل شده</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>مدارک مالی (حداقل هزینه یک سال تحصیل + هزینه‌های زندگی)</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>عکس پرسنلی دیجیتال</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>رسید پرداخت هزینه درخواست</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>طرح تحصیلی (Study Plan)</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#02153D] mb-4">مدارک تکمیلی</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>مدارک تحصیلی قبلی</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>نمرات آزمون‌های زبان (IELTS یا TOEFL)</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>رزومه</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>نامه انگیزه‌نامه (Letter of Explanation)</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>گواهی عدم سوء پیشینه</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>معاینات پزشکی (در صورت نیاز)</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>مدارک نشان‌دهنده قصد بازگشت به کشور</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-[#02153D] mb-4">نکات مهم</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                      <span>
                        برای تحصیل در کبک، علاوه بر Study Permit، به Certificate of Acceptance of Quebec (CAQ) نیز نیاز
                        دارید.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                      <span>دانشجویان می‌توانند در طول تحصیل تا ۲۰ ساعت در هفته به صورت قانونی کار کنند.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                      <span>
                        پس از فارغ‌التحصیلی، امکان درخواست Post-Graduation Work Permit (PGWP) وجود دارد که می‌تواند تا ۳
                        سال اعتبار داشته باشد.
                      </span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="uk">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-[#02153D]">مدارک ویزای تحصیلی انگلستان (Student Visa)</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-[#02153D] mb-4">مدارک اصلی</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>CAS (Confirmation of Acceptance for Studies) از دانشگاه</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>پاسپورت معتبر</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>مدارک مالی (هزینه تحصیل + هزینه‌های زندگی)</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>نمرات آزمون زبان انگلیسی (IELTS یا معادل آن)</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>عکس پرسنلی دیجیتال</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>رسید پرداخت هزینه درخواست ویزا</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>گواهی تدرن (TB Test) در صورت نیاز</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#02153D] mb-4">مدارک تکمیلی</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>مدارک تحصیلی قبلی</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>رزومه</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>نامه انگیزه‌نامه</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>گواهی عدم سوء پیشینه (در صورت نیاز)</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>مدارک نشان‌دهنده قصد بازگشت به کشور</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>مدارک اسکان (در صورت تهیه)</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>بیمه درمانی (Immigration Health Surcharge)</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-[#02153D] mb-4">نکات مهم</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                      <span>
                        دانشجویان می‌توانند در طول تحصیل تا ۲۰ ساعت در هفته کار کنند (در تعطیلات بدون محدودیت).
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                      <span>
                        پس از فارغ‌التحصیلی، امکان درخواست Graduate Route Visa برای ۲ سال (۳ سال برای دکترا) وجود دارد.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                      <span>پرداخت Immigration Health Surcharge برای دسترسی به خدمات NHS اجباری است.</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="eu">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-[#02153D]">مدارک ویزای تحصیلی اتحادیه اروپا</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-[#02153D] mb-4">مدارک اصلی</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>نامه پذیرش از دانشگاه یا مؤسسه آموزشی</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>پاسپورت معتبر (حداقل ۳ ماه پس از پایان تحصیل)</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>فرم درخواست ویزا تکمیل شده</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>مدارک مالی (حداقل ۵۰۰-۱۰۰۰ یورو در ماه)</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>عکس پرسنلی (مطابق استانداردهای شنگن)</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>بیمه درمانی (حداقل ۳۰,۰۰۰ یورو پوشش)</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>رسید پرداخت هزینه درخواست ویزا</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#02153D] mb-4">مدارک تکمیلی</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>مدارک تحصیلی قبلی (ترجمه شده و تصدیق شده)</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>نمرات آزمون زبان (بسته به کشور و دانشگاه)</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>رزومه</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>نامه انگیزه‌نامه</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>گواهی عدم سوء پیشینه</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>مدارک اسکان (رزرو خوابگاه یا اجاره)</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>برنامه تحصیلی و اهداف آینده</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-[#02153D] mb-4">نکات مهم</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                      <span>ویزای تحصیلی اتحادیه اروپا امکان سفر آزاد در کشورهای عضو شنگن را فراهم می‌کند.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                      <span>دانشجویان معمولاً می‌توانند تا ۲۰ ساعت در هفته کار کنند (قوانین هر کشور متفاوت است).</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                      <span>
                        برخی کشورها مانند آلمان و فرانسه امکان تمدید اقامت پس از فارغ‌التحصیلی برای جستجوی کار را فراهم
                        می‌کنند.
                      </span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
