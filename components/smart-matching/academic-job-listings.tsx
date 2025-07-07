"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, DollarSign, Building, ExternalLink, Loader2 } from "lucide-react"
import Link from "next/link"

interface JobListing {
  id: string
  title: string
  institution: string
  location: string
  country: string
  salary: string
  deadline: string
  type: string
  level: string
  description: string
  requirements: string[]
  matchScore: number
  source: string
  url: string
}

export function AcademicJobListings() {
  const [jobs, setJobs] = useState<JobListing[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchAcademicJobs()
  }, [])

  const fetchAcademicJobs = async () => {
    try {
      setLoading(true)

      // Simulate API call to academic job sources
      // In real implementation, this would call multiple APIs:
      // - Academic Jobs Online API
      // - University job boards
      // - Research institution APIs
      // - Google Custom Search API for academic positions

      await new Promise((resolve) => setTimeout(resolve, 2000))

      const mockJobs: JobListing[] = [
        {
          id: "1",
          title: "Assistant Professor in Computer Science",
          institution: "Stanford University",
          location: "Stanford, CA",
          country: "United States",
          salary: "$85,000 - $120,000",
          deadline: "2024-03-15",
          type: "Academic",
          level: "PhD",
          description:
            "We are seeking a tenure-track Assistant Professor in Computer Science with expertise in Machine Learning and AI.",
          requirements: [
            "PhD in Computer Science or related field",
            "2+ years postdoc experience",
            "Strong publication record",
            "Teaching experience",
          ],
          matchScore: 95,
          source: "Academic Jobs Online",
          url: "https://example.com/job1",
        },
        {
          id: "2",
          title: "Postdoctoral Research Fellow - Biomedical Engineering",
          institution: "MIT",
          location: "Cambridge, MA",
          country: "United States",
          salary: "$65,000 - $75,000",
          deadline: "2024-02-28",
          type: "Research",
          level: "Postdoc",
          description:
            "Postdoctoral position in biomedical engineering focusing on neural interfaces and brain-computer systems.",
          requirements: [
            "PhD in Biomedical Engineering, Neuroscience, or related",
            "Experience with neural signal processing",
            "Programming skills in Python/MATLAB",
          ],
          matchScore: 88,
          source: "University Website",
          url: "https://example.com/job2",
        },
        {
          id: "3",
          title: "Research Scientist - Quantum Computing",
          institution: "Google Research",
          location: "Mountain View, CA",
          country: "United States",
          salary: "$150,000 - $200,000",
          deadline: "2024-04-01",
          type: "Industry",
          level: "PhD",
          description: "Join our quantum computing team to develop next-generation quantum algorithms and hardware.",
          requirements: [
            "PhD in Physics, Computer Science, or related",
            "Quantum computing research experience",
            "Strong mathematical background",
          ],
          matchScore: 82,
          source: "Company Website",
          url: "https://example.com/job3",
        },
        {
          id: "4",
          title: "Lecturer in Data Science",
          institution: "University of Oxford",
          location: "Oxford",
          country: "United Kingdom",
          salary: "£45,000 - £55,000",
          deadline: "2024-03-20",
          type: "Academic",
          level: "Masters",
          description: "Teaching-focused position in Data Science with opportunities for research collaboration.",
          requirements: [
            "Masters/PhD in Data Science, Statistics, or related",
            "Industry or academic teaching experience",
            "Proficiency in R/Python",
          ],
          matchScore: 78,
          source: "Academic Jobs Online",
          url: "https://example.com/job4",
        },
        {
          id: "5",
          title: "PhD Position - Renewable Energy Systems",
          institution: "Technical University of Denmark",
          location: "Copenhagen",
          country: "Denmark",
          salary: "€45,000 - €50,000",
          deadline: "2024-02-15",
          type: "Academic",
          level: "PhD",
          description: "PhD scholarship in renewable energy systems with focus on wind power optimization.",
          requirements: [
            "Masters in Engineering, Physics, or related",
            "Strong analytical skills",
            "Interest in sustainable energy",
          ],
          matchScore: 75,
          source: "University Website",
          url: "https://example.com/job5",
        },
      ]

      setJobs(mockJobs)
    } catch (err) {
      setError("خطا در بارگذاری موقعیت‌های شغلی")
      console.error("Error fetching jobs:", err)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin text-[#FF6A5C] mx-auto mb-4" />
          <p className="text-gray-600">در حال جستجوی موقعیت‌های مناسب...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600 mb-4">{error}</p>
        <Button onClick={fetchAcademicJobs} variant="outline">
          تلاش مجدد
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <p className="text-gray-600">{jobs.length} موقعیت پیدا شد، مرتب شده بر اساس تطبیق با پروفایل شما</p>
        <Button onClick={fetchAcademicJobs} variant="outline" size="sm">
          به‌روزرسانی نتایج
        </Button>
      </div>

      {jobs.map((job) => (
        <Card key={job.id} className="hover:shadow-lg transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#02153D] mb-2">{job.title}</h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <Building className="h-4 w-4 mr-2" />
                      <span>{job.institution}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>
                        {job.location}, {job.country}
                      </span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#FF6A5C] mb-1">{job.matchScore}%</div>
                    <div className="text-xs text-gray-500">تطبیق</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">{job.type}</Badge>
                  <Badge variant="outline">{job.level}</Badge>
                  <Badge variant="outline">{job.source}</Badge>
                </div>

                <p className="text-gray-700 mb-4 line-clamp-3">{job.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <DollarSign className="h-4 w-4 mr-2 text-[#FF6A5C]" />
                    <span>حقوق: {job.salary}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-2 text-[#FF6A5C]" />
                    <span>مهلت درخواست: {new Date(job.deadline).toLocaleDateString("fa-IR")}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-[#02153D] mb-2">الزامات:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    {job.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3">
                  <Button asChild className="bg-[#FF6A5C] hover:bg-[#FF6A5C]/90">
                    <Link href={job.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      مشاهده آگهی اصلی
                    </Link>
                  </Button>
                  <Button variant="outline">ذخیره موقعیت</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      <div className="text-center py-6">
        <Button variant="outline" size="lg">
          نمایش موقعیت‌های بیشتر
        </Button>
      </div>
    </div>
  )
}
