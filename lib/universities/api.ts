// Free Universities API integration
const UNIVERSITIES_API_BASE = "http://universities.hipolabs.com"

export interface University {
  name: string
  country: string
  alpha_two_code: string
  web_pages: string[]
  domains: string[]
  state_province?: string
}

export interface UniversitySearchParams {
  name?: string
  country?: string
  limit?: number
}

// Search universities using the free API
export async function searchUniversities(params: UniversitySearchParams = {}): Promise<University[]> {
  try {
    const searchParams = new URLSearchParams()

    if (params.name) searchParams.append("name", params.name)
    if (params.country) searchParams.append("country", params.country)
    if (params.limit) searchParams.append("limit", params.limit.toString())

    const url = `${UNIVERSITIES_API_BASE}/search?${searchParams.toString()}`
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const universities: University[] = await response.json()
    return universities
  } catch (error) {
    console.error("Error searching universities:", error)
    return []
  }
}

// Get universities by country
export async function getUniversitiesByCountry(country: string): Promise<University[]> {
  return searchUniversities({ country, limit: 100 })
}

// Get all available countries
export async function getAvailableCountries(): Promise<string[]> {
  try {
    const universities = await searchUniversities({ limit: 1000 })
    const countries = [...new Set(universities.map((uni) => uni.country))].sort()
    return countries
  } catch (error) {
    console.error("Error fetching countries:", error)
    return []
  }
}

// Search universities by name
export async function searchUniversitiesByName(name: string): Promise<University[]> {
  return searchUniversities({ name, limit: 50 })
}

// Get university details by domain
export async function getUniversityByDomain(domain: string): Promise<University | null> {
  try {
    const response = await fetch(`${UNIVERSITIES_API_BASE}/search?domain=${domain}`)
    if (!response.ok) return null

    const universities: University[] = await response.json()
    return universities[0] || null
  } catch (error) {
    console.error("Error fetching university by domain:", error)
    return null
  }
}

// Helper function to format university data
export function formatUniversityData(university: University) {
  return {
    ...university,
    displayName: university.name,
    location: university.state_province ? `${university.state_province}, ${university.country}` : university.country,
    website: university.web_pages[0] || "",
    domain: university.domains[0] || "",
    countryCode: university.alpha_two_code.toLowerCase(),
  }
}
