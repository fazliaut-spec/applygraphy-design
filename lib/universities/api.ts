/**
 * Free Universities API integration
 * Using the public Universities API: http://universities.hipolabs.com/
 */

export interface University {
  name: string
  country: string
  alpha_two_code: string
  domains: string[]
  web_pages: string[]
  state_province?: string
}

export interface UniversitySearchParams {
  country?: string
  name?: string
  limit?: number
}

/**
 * Search universities using the free Universities API
 */
export async function searchUniversities(params: UniversitySearchParams = {}): Promise<University[]> {
  try {
    const searchParams = new URLSearchParams()

    if (params.country) {
      searchParams.append("country", params.country)
    }

    if (params.name) {
      searchParams.append("name", params.name)
    }

    const url = `http://universities.hipolabs.com/search?${searchParams.toString()}`

    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
      },
    })

    if (!response.ok) {
      throw new Error(`Universities API error: ${response.status}`)
    }

    const universities: University[] = await response.json()

    // Apply limit if specified
    if (params.limit && params.limit > 0) {
      return universities.slice(0, params.limit)
    }

    return universities
  } catch (error) {
    console.error("Error fetching universities:", error)
    return []
  }
}

/**
 * Get universities by country
 */
export async function getUniversitiesByCountry(country: string, limit = 50): Promise<University[]> {
  return searchUniversities({ country, limit })
}

/**
 * Search universities by name
 */
export async function searchUniversitiesByName(name: string, limit = 20): Promise<University[]> {
  return searchUniversities({ name, limit })
}

/**
 * Get popular countries with universities
 */
export function getPopularCountries(): string[] {
  return [
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",
    "Germany",
    "France",
    "Netherlands",
    "Sweden",
    "Norway",
    "Denmark",
    "Switzerland",
    "Austria",
    "Italy",
    "Spain",
    "Japan",
    "South Korea",
    "Singapore",
    "New Zealand",
  ]
}
