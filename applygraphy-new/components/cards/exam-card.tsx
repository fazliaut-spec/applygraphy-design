"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, BookOpen, ExternalLink } from "lucide-react"

interface ExamCardProps {
  exam: {
    id: string
    name: string
    type: "language" | "academic" | "professional"
    description: string
    duration: string
    fee: string
    nextDate: string
    location: string
    difficulty: "beginner" | "intermediate" | "advanced"
    requirements: string[]
    registrationUrl?: string
  }
}

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "beginner":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
    case "intermediate":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
    case "advanced":
      return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
  }
}

const getTypeColor = (type: string) => {
  switch (type) {
    case "language":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
    case "academic":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
    case "professional":
      return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
  }
}

export function ExamCard({ exam }: ExamCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{exam.name}</CardTitle>
          <div className="flex gap-2">
            <Badge className={getTypeColor(exam.type)}>{exam.type}</Badge>
            <Badge className={getDifficultyColor(exam.difficulty)}>{exam.difficulty}</Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-gray-600 dark:text-gray-300">{exam.description}</p>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-gray-400" />
            <span>{exam.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-600 font-medium">{exam.fee}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-gray-400" />
            <span>{exam.nextDate}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-gray-400" />
            <span>{exam.location}</span>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-medium flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            Requirements
          </h4>
          <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
            {exam.requirements.map((req, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                {req}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-2 pt-4">
          <Button className="flex-1">Register Now</Button>
          {exam.registrationUrl && (
            <Button variant="outline" size="icon" asChild>
              <a href={exam.registrationUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
