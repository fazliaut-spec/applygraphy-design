import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, MapPin, GraduationCap, DollarSign, Calendar } from "lucide-react"
import Link from "next/link"

export function UniversitySearchSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#02153D] mb-4">جستجوی دانشگاه‌های جهانی</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            بیش از ۱۰,۰۰۰ برنامه از دانشگاه‌های معتبر در بیش از ۵۰ کشور جهان
          </p>
        </div>

        <Card className="mb-12 shadow-lg border-0">
          <CardHeader className="bg-gradient-to-r from-[#02153D] to-[#FF6A5C] text-white rounded-t-lg">
            <CardTitle className="text-2xl flex items-center gap-3">
              <Search className="h-6 w-6" />
              جستجوی پیشرفته
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">رشته تحصیلی</label>
                <div className="relative">
                  <Input placeholder="مهندسی، پزشکی، هنر و..." className="pl-10" />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">کشور</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="انتخاب کشور" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">ایالات متحده</SelectItem>
                    <SelectItem value="uk">انگلستان</SelectItem>
                    <SelectItem value="ca">کانادا</SelectItem>
                    <SelectItem value="au">استرالیا</SelectItem>
                    <SelectItem value="de">آلمان</SelectItem>
                    <SelectItem value="it">ایتالیا</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">مقطع تحصیلی</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="انتخاب مقطع" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bachelor">کارشناسی</SelectItem>
                    <SelectItem value="master">کارشناسی ارشد</SelectItem>
                    <SelectItem value="phd">دکترا</SelectItem>
                    <SelectItem value="postdoc">پسادکترا</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex justify-between mt-6">
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                فیلترهای بیشتر
              </Button>

              <Button className="bg-[#FF6A5C] hover:bg-[#FF6A5C]/90 text-white">جستجو</Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-all duration-300">
            
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-[#02153D] mb-1">دانشگاه آکسفورد</h3>
                  <div className="flex items-center text-gray-600 text-sm">
                    <MapPin className="h-4 w-4 ml-1" />
                    انگلستان، آکسفورد
                  </div>
                </div>
                <div className="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center">
                  <img src="/placeholder.svg?height=48&width=48" alt="لوگوی دانشگاه" className="max-h-10" />
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm">
                  <GraduationCap className="h-4 w-4 ml-2 text-[#FF6A5C]" />
                  <span className="text-gray-700">۲۰۰+ برنامه تحصیلی</span>
                </div>
                <div className="flex items-center text-sm">
                  <DollarSign className="h-4 w-4 ml-2 text-[#FF6A5C]" />
                  <span className="text-gray-700">شهریه سالانه: ۲۵,۰۰۰ پوند</span>
                </div>
                <div className="flex items-center text-sm">
                  <Calendar className="h-4 w-4 ml-2 text-[#FF6A5C]" />
                  <span className="text-gray-700">مهلت درخواست: ۱۵ دی ۱۴۰۳</span>
                </div>
              </div>

              <Button asChild className="w-full bg-[#02153D] hover:bg-[#02153D]/90 text-white">
                <Link href="/universities/oxford">مشاهده جزئیات</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300">
            <div className="text-[#02153D] text-sm">
              <div className="absolute bottom-0 left-0 bg-[#02153D] text-white px-3 py-1 text-sm">رتبه جهانی: ۳۲</div>
            </div>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-[#02153D] mb-1">دانشگاه تورنتو</h3>
                  <div className="flex items-center text-gray-600 text-sm">
                    <MapPin className="h-4 w-4 ml-1" />
                    کانادا، تورنتو
                  </div>
                </div>
                <div className="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center">
                  <img src="/placeholder.svg?height=48&width=48" alt="لوگوی دانشگاه" className="max-h-10" />
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm">
                  <GraduationCap className="h-4 w-4 ml-2 text-[#FF6A5C]" />
                  <span className="text-gray-700">۱۸۰+ برنامه تحصیلی</span>
                </div>
                <div className="flex items-center text-sm">
                  <DollarSign className="h-4 w-4 ml-2 text-[#FF6A5C]" />
                  <span className="text-gray-700">شهریه سالانه: ۳۰,۰۰۰ دلار کانادا</span>
                </div>
                <div className="flex items-center text-sm">
                  <Calendar className="h-4 w-4 ml-2 text-[#FF6A5C]" />
                  <span className="text-gray-700">مهلت درخواست: ۱۰ بهمن ۱۴۰۳</span>
                </div>
              </div>

              <Button asChild className="w-full bg-[#02153D] hover:bg-[#02153D]/90 text-white">
                <Link href="/universities/toronto">مشاهده جزئیات</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300">
            
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-[#02153D] mb-1">دانشگاه میلان</h3>
                  <div className="flex items-center text-gray-600 text-sm">
                    <MapPin className="h-4 w-4 ml-1" />
                    ایتالیا، میلان
                  </div>
                </div>
                <div className="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center">
                  <img src="/placeholder.svg?height=48&width=48" alt="لوگوی دانشگاه" className="max-h-10" />
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm">
                  <GraduationCap className="h-4 w-4 ml-2 text-[#FF6A5C]" />
                  <span className="text-gray-700">۱۵۰+ برنامه تحصیلی</span>
                </div>
                <div className="flex items-center text-sm">
                  <DollarSign className="h-4 w-4 ml-2 text-[#FF6A5C]" />
                  <span className="text-gray-700">شهریه سالانه: ۳,۰۰۰ یورو</span>
                </div>
                <div className="flex items-center text-sm">
                  <Calendar className="h-4 w-4 ml-2 text-[#FF6A5C]" />
                  <span className="text-gray-700">مهلت درخواست: ۵ اسفند ۱۴۰۳</span>
                </div>
              </div>

              <Button asChild className="w-full bg-[#02153D] hover:bg-[#02153D]/90 text-white">
                <Link href="/universities/milan">مشاهده جزئیات</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-[#FF6A5C] hover:bg-[#FF6A5C]/90 text-white px-8 py-3">
            <Link href="/universities">مشاهده همه دانشگاه‌ها</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
