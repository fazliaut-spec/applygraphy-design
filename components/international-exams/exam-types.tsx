import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Award, BookOpen, Target, Globe } from "lucide-react"

export function ExamTypes() {
  const exams = [
    {
      id: "ielts",
      name: "IELTS",
      fullName: "International English Language Testing System",
      description: "آزمون بین‌المللی زبان انگلیسی برای تحصیل و مهاجرت",
      duration: "۲ ساعت و ۴۵ دقیقه",
      sections: ["Listening", "Reading", "Writing", "Speaking"],
      scoring: "۰ تا ۹",
      validFor: "۲ سال",
      acceptedBy: "۱۰,۰۰۰+ موسسه",
      preparationTime: "۳-۶ ماه",
      icon: <Globe className="h-8 w-8" />,
      color: "bg-blue-500",
      features: ["پذیرفته شده در بیشتر کشورها", "دو نوع Academic و General", "مصاحبه حضوری", "نمره‌دهی دقیق"],
    },
    {
      id: "toefl",
      name: "TOEFL",
      fullName: "Test of English as a Foreign Language",
      description: "آزمون زبان انگلیسی برای متقاضیان غیرانگلیسی‌زبان",
      duration: "۳ ساعت",
      sections: ["Reading", "Listening", "Speaking", "Writing"],
      scoring: "۰ تا ۱۲۰",
      validFor: "۲ سال",
      acceptedBy: "۱۱,۰۰۰+ موسسه",
      preparationTime: "۳-۶ ماه",
      icon: <BookOpen className="h-8 w-8" />,
      color: "bg-green-500",
      features: ["آزمون کامپیوتری", "محبوب در آمریکا", "نمره‌دهی سریع", "امکان تکرار آزمون"],
    },
    {
      id: "gre",
      name: "GRE",
      fullName: "Graduate Record Examination",
      description: "آزمون ورودی برای تحصیلات تکمیلی",
      duration: "۳ ساعت و ۴۵ دقیقه",
      sections: ["Verbal Reasoning", "Quantitative Reasoning", "Analytical Writing"],
      scoring: "۲۶۰ تا ۳۴۰ (هر بخش)",
      validFor: "۵ سال",
      acceptedBy: "۱,۲۰۰+ دانشگاه",
      preparationTime: "۴-۸ ماه",
      icon: <Target className="h-8 w-8" />,
      color: "bg-purple-500",
      features: [
        "ضروری برای فوق‌لیسانس",
        "آزمون کامپیوتری تطبیقی",
        "بخش ریاضی قوی",
        "امکان ارسال نمره به چندین دانشگاه",
      ],
    },
    {
      id: "imat",
      name: "IMAT",
      fullName: "International Medical Admissions Test",
      description: "آزمون ورودی پزشکی ایتالیا",
      duration: "۱۰۰ دقیقه",
      sections: ["General Knowledge", "Logical Reasoning", "Biology", "Chemistry", "Physics & Mathematics"],
      scoring: "۰ تا ۹۰",
      validFor: "۱ سال",
      acceptedBy: "دانشگاه‌های پزشکی ایتالیا",
      preparationTime: "۶-۱۲ ماه",
      icon: <Award className="h-8 w-8" />,
      color: "bg-red-500",
      features: ["ورودی پزشکی ایتالیا", "آزمون چندگزینه‌ای", "رقابت بالا", "نیاز به آمادگی ویژه"],
    },
    {
      id: "sat",
      name: "SAT",
      fullName: "Scholastic Assessment Test",
      description: "آزمون ورودی دانشگاه‌های آمریکا",
      duration: "۳ ساعت",
      sections: ["Evidence-Based Reading", "Writing", "Mathematics"],
      scoring: "۴۰۰ تا ۱۶۰۰",
      validFor: "۵ سال",
      acceptedBy: "۴,۰۰۰+ کالج آمریکا",
      preparationTime: "۳-۶ ماه",
      icon: <Users className="h-8 w-8" />,
      color: "bg-orange-500",
      features: ["ورودی کارشناسی آمریکا", "آزمون کاغذی و کامپیوتری", "بخش ریاضی و انگلیسی", "امکان تکرار آزمون"],
    },
    {
      id: "tolc",
      name: "TOLC",
      fullName: "Test OnLine CISIA",
      description: "آزمون ورودی دانشگاه‌های ایتالیا",
      duration: "۵۰ دقیقه تا ۲ ساعت",
      sections: ["Mathematics", "Logic", "Sciences", "Reading Comprehension"],
      scoring: "متغیر بر اساس نوع",
      validFor: "۱ سال",
      acceptedBy: "دانشگاه‌های عضو CISIA",
      preparationTime: "۲-۴ ماه",
      icon: <Clock className="h-8 w-8" />,
      color: "bg-indigo-500",
      features: ["آزمون آنلاین", "انواع مختلف (I, E, S, F)", "ورودی رشته‌های مختلف", "امکان آزمون در خانه"],
    },
  ]

  return (
    <section id="exam-types" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#02153D] mb-4">انواع آزمون‌های بین‌المللی</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            آشنایی کامل با آزمون‌های مختلف و انتخاب بهترین گزینه برای اهداف تحصیلی شما
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exams.map((exam) => (
            <Card
              key={exam.id}
              className="hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-[#FF6A5C]"
            >
              <CardHeader className="text-center pb-4">
                <div
                  className={`w-16 h-16 ${exam.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white`}
                >
                  {exam.icon}
                </div>
                <CardTitle className="text-2xl font-bold text-[#02153D] mb-2">{exam.name}</CardTitle>
                <p className="text-sm text-gray-600 font-medium">{exam.fullName}</p>
                <p className="text-gray-700 mt-2">{exam.description}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Key Info */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="font-medium text-[#02153D]">مدت زمان</div>
                    <div className="text-gray-600">{exam.duration}</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="font-medium text-[#02153D]">نمره‌دهی</div>
                    <div className="text-gray-600">{exam.scoring}</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="font-medium text-[#02153D]">اعتبار</div>
                    <div className="text-gray-600">{exam.validFor}</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="font-medium text-[#02153D]">آمادگی</div>
                    <div className="text-gray-600">{exam.preparationTime}</div>
                  </div>
                </div>

                {/* Sections */}
                <div>
                  <h4 className="font-medium text-[#02153D] mb-2">بخش‌های آزمون:</h4>
                  <div className="flex flex-wrap gap-1">
                    {exam.sections.map((section, index) => (
                      <Badge key={index} variant="secondary" className="text-xs bg-[#FF6A5C]/10 text-[#FF6A5C]">
                        {section}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-medium text-[#02153D] mb-2">ویژگی‌ها:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {exam.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#FF6A5C] rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Acceptance */}
                <div className="bg-[#02153D]/5 p-3 rounded-lg">
                  <div className="text-sm">
                    <span className="font-medium text-[#02153D]">پذیرش: </span>
                    <span className="text-gray-600">{exam.acceptedBy}</span>
                  </div>
                </div>

                {/* Action Button */}
                <Button className="w-full bg-[#FF6A5C] hover:bg-[#FF6A5C]/90 text-white">
                  شروع آمادگی {exam.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-[#02153D] to-[#FF6A5C] rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">نمی‌دانید کدام آزمون مناسب شماست؟</h3>
            <p className="text-lg mb-6 opacity-90">
              با مشاوران ما صحبت کنید تا بهترین آزمون را برای اهداف تحصیلی‌تان انتخاب کنید
            </p>
            <Button size="lg" className="bg-white text-[#02153D] hover:bg-gray-100">
              مشاوره رایگان
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
