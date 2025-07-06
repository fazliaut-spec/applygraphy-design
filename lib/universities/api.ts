export interface University {
  id: string
  name: string
  country: string
  state_province?: string
  domains: string[]
  web_pages: string[]
  alpha_two_code: string
  ranking?: number
  tuition_fee_min?: number
  tuition_fee_max?: number
  programs: string[]
  language_of_instruction: string[]
  type: "public" | "private"
  established_year?: number
  student_count?: number
  international_students_percentage?: number
  acceptance_rate?: number
  application_deadline?: string
  requirements?: {
    gpa_min?: number
    language_requirements?: Record<string, number>
    documents_required?: string[]
  }
}

export interface UniversitySearchFilters {
  country?: string
  name?: string
  tuition_min?: number
  tuition_max?: number
  type?: "public" | "private"
  language?: string
  field_of_study?: string
  ranking_max?: number
}

class UniversityService {
  private baseUrl = "http://universities.hipolabs.com"

  async searchUniversities(filters: UniversitySearchFilters = {}): Promise<University[]> {
    try {
      let url = `${this.baseUrl}/search?`

      if (filters.country) {
        url += `country=${encodeURIComponent(filters.country)}&`
      }
      if (filters.name) {
        url += `name=${encodeURIComponent(filters.name)}&`
      }

      const response = await fetch(url)
      if (!response.ok) {
        throw new Error("Failed to fetch universities")
      }

      const universities = await response.json()

      // Enhance with mock data for demo purposes
      return universities.map((uni: any, index: number) => ({
        id: `${uni.name}-${uni.country}`.replace(/\s+/g, "-").toLowerCase(),
        name: uni.name,
        country: uni.country,
        state_province: uni["state-province"],
        domains: uni.domains || [],
        web_pages: uni.web_pages || [],
        alpha_two_code: uni.alpha_two_code,
        ranking: Math.floor(Math.random() * 500) + 1,
        tuition_fee_min: Math.floor(Math.random() * 20000) + 5000,
        tuition_fee_max: Math.floor(Math.random() * 30000) + 25000,
        programs: this.generateMockPrograms(),
        language_of_instruction: this.getLanguagesByCountry(uni.country),
        type: Math.random() > 0.6 ? "private" : "public",
        established_year: Math.floor(Math.random() * 200) + 1800,
        student_count: Math.floor(Math.random() * 50000) + 1000,
        international_students_percentage: Math.floor(Math.random() * 40) + 5,
        acceptance_rate: Math.floor(Math.random() * 80) + 10,
        application_deadline: this.generateDeadline(),
        requirements: {
          gpa_min: Math.random() * 2 + 2.5,
          language_requirements: {
            IELTS: Math.random() * 2 + 6,
            TOEFL: Math.floor(Math.random() * 40) + 80,
          },
          documents_required: ["Transcript", "Letter of Recommendation", "Personal Statement", "CV/Resume"],
        },
      }))
    } catch (error) {
      console.error("Error fetching universities:", error)
      return []
    }
  }

  private generateMockPrograms(): string[] {
    const programs = [
      "Computer Science",
      "Business Administration",
      "Engineering",
      "Medicine",
      "Law",
      "Psychology",
      "Economics",
      "International Relations",
      "Environmental Science",
      "Data Science",
      "Artificial Intelligence",
      "Biotechnology",
    ]
    const count = Math.floor(Math.random() * 8) + 3
    return programs.sort(() => 0.5 - Math.random()).slice(0, count)
  }

  private getLanguagesByCountry(country: string): string[] {
    const languageMap: Record<string, string[]> = {
      "United States": ["English"],
      "United Kingdom": ["English"],
      Canada: ["English", "French"],
      Germany: ["German", "English"],
      France: ["French", "English"],
      Italy: ["Italian", "English"],
      Spain: ["Spanish", "English"],
      Netherlands: ["Dutch", "English"],
      Sweden: ["Swedish", "English"],
      Australia: ["English"],
    }
    return languageMap[country] || ["English"]
  }

  private generateDeadline(): string {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ]
    const month = months[Math.floor(Math.random() * 12)]
    const day = Math.floor(Math.random() * 28) + 1
    return `${month} ${day}, 2024`
  }

  async getUniversityById(id: string): Promise<University | null> {
    const universities = await this.searchUniversities()
    return universities.find((uni) => uni.id === id) || null
  }

  async getCountries(): Promise<string[]> {
    try {
      const response = await fetch(`${this.baseUrl}/search`)
      const universities = await response.json()
      const countries = [...new Set(universities.map((uni: any) => uni.country))]
      return countries.sort()
    } catch (error) {
      console.error("Error fetching countries:", error)
      return []
    }
  }
}

export const universityService = new UniversityService()
