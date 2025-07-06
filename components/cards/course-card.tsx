import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Calendar, BookOpen } from "lucide-react"

interface CourseProps {
  id: string
  title: string
  description: string
  image: string
  level: string
  duration: string
  students: number
  startDate: string
  price: string
  instructor: string
  language: string
}

export function CourseCard({ course }: { course: CourseProps }) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="relative h-48 w-full">
        <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
        <Badge className="absolute top-2 right-2 bg-[#FF6A5C] hover:bg-[#FF6A5C]/90">{course.level}</Badge>
      </div>
      <CardHeader className="pb-2">
        <h3 className="text-xl font-bold text-[#02153D]">{course.title}</h3>
        <p className="text-sm text-gray-500">{course.instructor}</p>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="text-sm text-gray-600 mb-4">{course.description}</p>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4 text-[#FF6A5C]" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4 text-[#FF6A5C]" />
            <span>{course.students} دانشجو</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4 text-[#FF6A5C]" />
            <span>{course.startDate}</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="h-4 w-4 text-[#FF6A5C]" />
            <span>{course.language}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <span className="font-bold text-[#02153D]">{course.price}</span>
        <Button className="bg-[#02153D] hover:bg-[#02153D]/90">ثبت‌نام</Button>
      </CardFooter>
    </Card>
  )
}
