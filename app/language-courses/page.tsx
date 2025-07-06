import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CourseCard } from "@/components/cards/course-card"
import { SectionTitle } from "@/components/section-title"
import { courses } from "@/data/courses"
import { Button } from "@/components/ui/button"
import { BookOpen, Clock, Users, Award } from "lucide-react"

export default function LanguageCoursesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#02153D] to-[#FF6A5C]">
        <div className="container mx-auto px-4 text-center text-white">
          <div className="mb-8">
            <BookOpen className="h-16 w-16 mx-auto mb-4" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">دوره‌های زبان انگلیسی</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            آمادگی آزمون‌های IELTS، TOEFL و GRE با اساتید مجرب و روش‌های نوین تدریس
          </p>
          <Button size="lg" className="bg-white text-[#02153D] hover:bg-gray-100">
            ثبت‌نام در دوره
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF6A5C] rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#02153D] mb-2">کلاس‌های منعطف</h3>
              <p className="text-gray-600">برنامه‌ریزی متناسب با زمان شما</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF6A5C] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#02153D] mb-2">گروه‌های کوچک</h3>
              <p className="text-gray-600">حداکثر ۸ نفر در هر کلاس</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF6A5C] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#02153D] mb-2">اساتید مجرب</h3>
              <p className="text-gray-600">مدرک‌دار و با تجربه بین‌المللی</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF6A5C] rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#02153D] mb-2">منابع کامل</h3>
              <p className="text-gray-600">کتاب‌ها و تست‌های آزمایشی</p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Listings */}
      <section className="py-16 container mx-auto px-4">
        <SectionTitle title="دوره‌های زبان" subtitle="برنامه‌های آموزشی متنوع برای تقویت مهارت‌های زبانی شما" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
