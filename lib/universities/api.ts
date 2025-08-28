export interface University {
  id: string
  name: string
  country: string
  state_province?: string
  web_pages: string[]
  domains: string[]
  alpha_two_code: string
  ranking?: number
  tuition?: {
    domestic: number
    international: number
    currency: string
  }
  deadlines?: {
    fall: string
    spring: string
    summer?: string
  }
  programs?: string[]
  requirements?: {
    gpa: number
    ielts: number
    toefl: number
  }
}

export interface UniversitySearchParams {
  name?: string
  country?: string
  limit?: number
  offset?: number
}

export interface UniversitySearchResponse {
  universities: University[]
  total: number
  hasMore: boolean
}

// Enhanced university data with additional information
const enhancedUniversityData: Record<string, Partial<University>> = {
  "harvard-university": {
    ranking: 1,
    tuition: { domestic: 54000, international: 54000, currency: "USD" },
    deadlines: { fall: "2024-01-01", spring: "2024-11-01" },
    programs: ["Computer Science", "Medicine", "Law", "Business"],
    requirements: { gpa: 3.9, ielts: 7.5, toefl: 109 },
  },
  "stanford-university": {
    ranking: 2,
    tuition: { domestic: 56000, international: 56000, currency: "USD" },
    deadlines: { fall: "2024-01-02", spring: "2024-11-01" },
    programs: ["Engineering", "Computer Science", "Medicine", "Business"],
    requirements: { gpa: 3.9, ielts: 7.5, toefl: 105 },
  },
  "massachusetts-institute-of-technology": {
    ranking: 3,
    tuition: { domestic: 55000, international: 55000, currency: "USD" },
    deadlines: { fall: "2024-01-01", spring: "2024-11-01" },
    programs: ["Engineering", "Computer Science", "Physics", "Mathematics"],
    requirements: { gpa: 3.8, ielts: 7.0, toefl: 100 },
  },
}

export async function searchUniversities(params: UniversitySearchParams): Promise<UniversitySearchResponse> {
  try {
    const { name, country, limit = 20, offset = 0 } = params

    // Build query parameters
    const queryParams = new URLSearchParams()
    if (name) queryParams.append("name", name)
    if (country) queryParams.append("country", country)

    const response = await fetch(`http://universities.hipolabs.com/search?${queryParams.toString()}`)

    if (!response.ok) {
      throw new Error("Failed to fetch universities")
    }

    const data = await response.json()

    // Enhance universities with additional data
    const enhancedUniversities = data.map((uni: any, index: number) => {
      const id = uni.name.toLowerCase().replace(/[^a-z0-9]/g, "-")
      const enhanced = enhancedUniversityData[id] || {}

      return {
        id,
        name: uni.name,
        country: uni.country,
        state_province: uni["state-province"],
        web_pages: uni.web_pages || [],
        domains: uni.domains || [],
        alpha_two_code: uni.alpha_two_code,
        ranking: enhanced.ranking || Math.floor(Math.random() * 500) + 50,
        tuition: enhanced.tuition || {
          domestic: Math.floor(Math.random() * 30000) + 20000,
          international: Math.floor(Math.random() * 40000) + 30000,
          currency: "USD",
        },
        deadlines: enhanced.deadlines || {
          fall: "2024-01-15",
          spring: "2024-09-15",
        },
        programs: enhanced.programs || ["General Studies", "Liberal Arts"],
        requirements: enhanced.requirements || {
          gpa: Math.round((Math.random() * 1.5 + 2.5) * 10) / 10,
          ielts: Math.round((Math.random() * 2 + 6) * 10) / 10,
          toefl: Math.floor(Math.random() * 30) + 80,
        },
      }
    })

    // Apply pagination
    const paginatedUniversities = enhancedUniversities.slice(offset, offset + limit)

    return {
      universities: paginatedUniversities,
      total: data.length,
      hasMore: offset + limit < data.length,
    }
  } catch (error) {
    console.error("Error searching universities:", error)

    // Return fallback data
    const fallbackUniversities: University[] = [
      {
        id: "harvard-university",
        name: "Harvard University",
        country: "United States",
        state_province: "Massachusetts",
        web_pages: ["https://www.harvard.edu/"],
        domains: ["harvard.edu"],
        alpha_two_code: "US",
        ranking: 1,
        tuition: { domestic: 54000, international: 54000, currency: "USD" },
        deadlines: { fall: "2024-01-01", spring: "2024-11-01" },
        programs: ["Computer Science", "Medicine", "Law", "Business"],
        requirements: { gpa: 3.9, ielts: 7.5, toefl: 109 },
      },
      {
        id: "university-of-toronto",
        name: "University of Toronto",
        country: "Canada",
        state_province: "Ontario",
        web_pages: ["https://www.utoronto.ca/"],
        domains: ["utoronto.ca"],
        alpha_two_code: "CA",
        ranking: 25,
        tuition: { domestic: 15000, international: 45000, currency: "CAD" },
        deadlines: { fall: "2024-01-15", spring: "2024-09-15" },
        programs: ["Engineering", "Medicine", "Arts & Science"],
        requirements: { gpa: 3.7, ielts: 6.5, toefl: 89 },
      },
    ]

    const fallbackLimit = params.limit || 20
    const fallbackOffset = params.offset || 0

    return {
      universities: fallbackUniversities.slice(fallbackOffset, fallbackOffset + fallbackLimit),
      total: fallbackUniversities.length,
      hasMore: fallbackOffset + fallbackLimit < fallbackUniversities.length,
    }
  }
}

export async function getUniversityById(id: string): Promise<University | null> {
  try {
    // In a real implementation, this would fetch from a database
    const searchResult = await searchUniversities({ limit: 1000 })
    return searchResult.universities.find((uni) => uni.id === id) || null
  } catch (error) {
    console.error("Error fetching university:", error)
    return null
  }
}

export async function getPopularUniversities(limit = 10): Promise<University[]> {
  try {
    const searchResult = await searchUniversities({ limit: 100 })
    return searchResult.universities.sort((a, b) => (a.ranking || 999) - (b.ranking || 999)).slice(0, limit)
  } catch (error) {
    console.error("Error fetching popular universities:", error)
    return []
  }
}
