"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Calendar, DollarSign, GraduationCap, Search, ExternalLink, Heart } from "lucide-react"

interface JobListing {
  id: string
  title: string
  university: string
  location: string
  country: string
  degreeLevel: string
  field: string
  deadline: string
  funding: boolean
  matchScore: number
  description: string
  requirements: string[]
  benefits: string[]
}

// Mock data simulating real academic job listings
const mockJobListings: JobListing[] = [
  {
    id: "1",
    title: "PhD Position in Machine Learning",
    university: "Technical University of Munich",
    location: "Munich",
    country: "Germany",
    degreeLevel: "PhD",
    field: "Computer Science",
    deadline: "2024-03-15",
    funding: true,
    matchScore: 95,
    description: "We are seeking a highly motivated PhD student to work on cutting-edge machine learning research.",
    requirements: ["Master's degree in Computer Science", "Strong programming skills", "Research experience"],
    benefits: ["Full funding", "Health insurance", "Conference travel support"],
  },
  {
    id: "2",
    title: "Master's Scholarship in Renewable Energy",
    university: "University of Toronto",
    location: "Toronto",
    country: "Canada",
    degreeLevel: "Master",
    field: "Engineering",
    deadline: "2024-04-01",
    funding: true,
    matchScore: 88,
    description: "Join our research team working on sustainable energy solutions and smart grid technologies.",
    requirements: ["Bachelor's in Engineering", "IELTS 7.0+", "Research interest in renewable energy"],
    benefits: ["Full tuition coverage", "Monthly stipend", "Research facilities access"],
  },
  {
    id: "3",
    title: "Postdoc Fellowship in Biomedical Engineering",
    university: "Stanford University",
    location: "Stanford",
    country: "USA",
    degreeLevel: "Postdoc",
    field: "Engineering",
    deadline: "2024-05-20",
    funding: true,
    matchScore: 82,
    description: "Exciting opportunity to work on innovative medical device development and tissue engineering.",
    requirements: ["PhD in Biomedical Engineering", "Publication record", "Lab experience"],
    benefits: ["Competitive salary", "Health benefits", "Professional development"],
  },
  {
    id: "4",
    title: "Bachelor's Program in Business Administration",
    university: "University of Melbourne",
    location: "Melbourne",
    country: "Australia",
    degreeLevel: "Bachelor",
    field: "Business",
    deadline: "2024-06-30",
    funding: false,
    matchScore: 75,
    description: "Comprehensive business program with focus on international markets and entrepreneurship.",
    requirements: ["High school diploma", "English proficiency", "Academic excellence"],
    benefits: ["Industry partnerships", "Internship opportunities", "Career services"],
  },
  {
    id: "5",
    title: "PhD in Artificial Intelligence",
    university: "University of Oxford",
    location: "Oxford",
    country: "UK",
    degreeLevel: "PhD",
    field: "Computer Science",
    deadline: "2024-02-28",
    funding: true,
    matchScore: 92,
    description: "Research position focusing on AI ethics and responsible machine learning development.",
    requirements: ["Master's in CS/AI", "Strong mathematical background", "Research publications"],
    benefits: ["Full funding for 4 years", "Supervision by leading experts", "International collaborations"],
  },
  {
    id: "6",
    title: "Master's in Data Science",
    university: "ETH Zurich",
    location: "Zurich",
    country: "Switzerland",
    degreeLevel: "Master",
    field: "Computer Science",
    deadline: "2024-04-15",
    funding: false,
    matchScore: 85,
    description: "Intensive program combining statistics, machine learning, and big data technologies.",
    requirements: ["Bachelor's in related field", "Programming experience", "Mathematical skills"],
    benefits: ["Industry connections", "Research projects", "Career placement support"],
  },
]

export function AcademicJobListings() {
  const [listings, setListings] = useState<JobListing[]>(mockJobListings)
  const [filteredListings, setFilteredListings] = useState<JobListing[]>(mockJobListings)
  const [searchTerm, setSearchTerm] = useState("")
  const [degreeFilter, setDegreeFilter] = useState("all")
  const [countryFilter, setCountryFilter] = useState("all")
  const [fundingFilter, setFundingFilter] = useState("all")
  const [savedJobs, setSavedJobs] = useState<Set<string>>(new Set())

  useEffect(() => {
    let filtered = listings

    if (searchTerm) {
      filtered = filtered.filter(
        (job) =>
          job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.university.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.field.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    if (degreeFilter !== "all") {
      filtered = filtered.filter((job) => job.degreeLevel.toLowerCase() === degreeFilter)
    }

    if (countryFilter !== "all") {
      filtered = filtered.filter((job) => job.country.toLowerCase() === countryFilter)
    }

    if (fundingFilter === "funded") {
      filtered = filtered.filter((job) => job.funding)
    }

    // Sort by match score
    filtered.sort((a, b) => b.matchScore - a.matchScore)

    setFilteredListings(filtered)
  }, [listings, searchTerm, degreeFilter, countryFilter, fundingFilter])

  const toggleSaveJob = (jobId: string) => {
    const newSavedJobs = new Set(savedJobs)
    if (newSavedJobs.has(jobId)) {
      newSavedJobs.delete(jobId)
    } else {
      newSavedJobs.add(jobId)
    }
    setSavedJobs(newSavedJobs)
  }

  const getMatchScoreColor = (score: number) => {
    if (score >= 90) return "bg-green-500"
    if (score >= 80) return "bg-blue-500"
    if (score >= 70) return "bg-yellow-500"
    return "bg-gray-500"
  }

  return (
    <div className="space-y-6">
      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5 text-[#FF6A5C]" />
            جستجو و فیلتر
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <Input
                placeholder="جستجو در عنوان، دانشگاه یا رشته..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div>
              <Select value={degreeFilter} onValueChange={setDegreeFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="مقطع تحصیلی" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">همه مقاطع</SelectItem>
                  <SelectItem value="bachelor">کارشناسی</SelectItem>
                  <SelectItem value="master">کارشناسی ارشد</SelectItem>
                  <SelectItem value="phd">دکترا</SelectItem>
                  <SelectItem value="postdoc">پسادکترا</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select value={countryFilter} onValueChange={setCountryFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="کشور" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">همه کشورها</SelectItem>
                  <SelectItem value="germany">آلمان</SelectItem>
                  <SelectItem value="canada">کانادا</SelectItem>
                  <SelectItem value="usa">آمریکا</SelectItem>
                  <SelectItem value="uk">انگلستان</SelectItem>
                  <SelectItem value="australia">استرالیا</SelectItem>
                  <SelectItem value="switzerland">سوئیس</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select value={fundingFilter} onValueChange={setFundingFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="نوع بودجه" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">همه موقعیت‌ها</SelectItem>
                  <SelectItem value="funded">دارای بورسیه</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results Summary */}
      <div className="flex justify-between items-center">
        <p className="text-gray-600">{filteredListings.length} موقعیت پیدا شد</p>
        <div className="text-sm text-gray-500">مرتب‌سازی بر اساس درصد تطبیق</div>
      </div>

      {/* Job Listings */}
      <div className="space-y-4">
        {filteredListings.map((job) => (
          <Card key={job.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-[#02153D]">{job.title}</h3>
                    <Badge className={`${getMatchScoreColor(job.matchScore)} text-white`}>
                      {job.matchScore}% تطبیق
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <GraduationCap className="h-4 w-4" />
                      <span>{job.university}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>
                        {job.location}, {job.country}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>مهلت: {job.deadline}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline">{job.degreeLevel}</Badge>
                    <Badge variant="outline">{job.field}</Badge>
                    {job.funding && (
                      <Badge className="bg-green-100 text-green-800">
                        <DollarSign className="h-3 w-3 mr-1" />
                        دارای بورسیه
                      </Badge>
                    )}
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => toggleSaveJob(job.id)}
                  className={savedJobs.has(job.id) ? "text-red-500" : "text-gray-400"}
                >
                  <Heart className={`h-5 w-5 ${savedJobs.has(job.id) ? "fill-current" : ""}`} />
                </Button>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">{job.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">الزامات:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {job.requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-[#FF6A5C] mt-1">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">مزایا:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {job.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex gap-3">
                <Button className="bg-[#FF6A5C] hover:bg-[#FF6A5C]/90 text-white">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  مشاهده جزئیات
                </Button>
                <Button variant="outline">درخواست مشاوره</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredListings.length === 0 && (
        <Card>
          <CardContent className="text-center py-12">
            <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">موقعیتی یافت نشد</h3>
            <p className="text-gray-500 mb-4">لطفاً فیلترهای جستجو را تغییر دهید</p>
            <Button
              onClick={() => {
                setSearchTerm("")
                setDegreeFilter("all")
                setCountryFilter("all")
                setFundingFilter("all")
              }}
              variant="outline"
            >
              پاک کردن فیلترها
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
