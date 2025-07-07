import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Search,
  Brain,
  FileText,
  DollarSign,
  MessageSquare,
  Globe,
  Users,
  Shield,
  BookOpen,
  Briefcase,
  Bell,
  Smartphone,
  Languages,
  UserPlus,
} from "lucide-react"

const features = [
  {
    title: "جستجوی دانشگاه‌های جهانی",
    description: "جستجو در بین ۱۰,۰۰۰+ برنامه از ۵۰+ کشور با فیلترهای پیشرفته",
    icon: Search,
  },
  {
    title: "تطبیق هوش مصنوعی",
    description: "پیشنهاد برنامه‌های متناسب با پروفایل، اهداف و ترجیحات شما",
    icon: Brain,
  },
  {
    title: "مدیریت درخواست",
    description: "پیگیری تمام درخواست‌ها در یک مکان با چک‌لیست‌های شخصی‌سازی شده",
    icon: FileText,
  },
  {
    title: "یابنده بورسیه",
    description: "کشف فرصت‌های تامین مالی با بررسی خودکار واجد شرایط بودن",
    icon: DollarSign,
  },
  {
    title: "پشتیبانی انجمن",
    description: "ارتباط با دانشجویان، مربیان و فارغ‌التحصیلان از طریق پلتفرم انجمن",
    icon: MessageSquare,
  },
  {
    title: "راهنمای ویزا و جابجایی",
    description: "راهنمایی گام به گام برای درخواست ویزا و آماده‌سازی قبل از سفر",
    icon: Globe,
  },
  {
    title: "خدمات متخصص",
    description: "دسترسی به بررسی حرفه‌ای اسناد، ترجمه و خدمات آماده‌سازی آزمون",
    icon: Users,
  },
  {
    title: "امنیت و حریم خصوصی",
    description: "محافظت از اسناد و اطلاعات شخصی شما با امنیت سطح سازمانی",
    icon: Shield,
  },
  {
    title: "دوره‌های آمادگی آزمون",
    description: "دوره‌های تخصصی برای آزمون‌های IELTS، TOEFL، GRE، IMAT و SAT",
    icon: BookOpen,
  },
  {
    title: "مرکز کارآموزی و شغل",
    description: "فهرست فرصت‌های شغلی و کارآموزی برای دانشجویان و فارغ‌التحصیلان",
    icon: Briefcase,
  },
  {
    title: "یادآوری خودکار",
    description: "یادآوری خودکار برای مهلت‌ها و وظایف مهم در فرآیند درخواست",
    icon: Bell,
  },
  {
    title: "سازگاری با موبایل",
    description: "طراحی واکنش‌گرا و اعلان‌های فشاری برای مهلت‌ها و به‌روزرسانی‌ها",
    icon: Smartphone,
  },
  {
    title: "پشتیبانی چند زبانه",
    description: "پشتیبانی از چندین زبان و دسترسی‌پذیری برای کاربران با ناتوانی‌ها",
    icon: Languages,
  },
  {
    title: "برندسازی شخصی",
    description: "پروفایل‌های عمومی دانشجویان (اختیاری) برای شبکه‌سازی و ارتباط با استادان",
    icon: UserPlus,
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-bold text-[#02153D] mb-4 text-2xl">ویژگی‌های اپلای‌گرافی</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">همه چیزهایی که برای سفر تحصیل در خارج نیاز دارید</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="text-center hover:shadow-lg transition-shadow border-r-4 border-r-[#FF6A5C]"
            >
              <CardHeader>
                <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#FF6A5C] to-[#02153D]">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-[#02153D] text-sm">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
