export interface University {
  name: string
  country: string
  alpha_two_code: string
  web_pages: string[]
  domains: string[]
  state_province?: string
}

export async function searchUniversities(query = "", country = ""): Promise<University[]> {
  try {
    let url = "http://universities.hipolabs.com/search"
    const params = new URLSearchParams()

    if (query.trim()) {
      params.append("name", query.trim())
    }

    if (country.trim()) {
      params.append("country", country.trim())
    }

    if (params.toString()) {
      url += `?${params.toString()}`
    }

    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const universities: University[] = await response.json()

    // Limit results to prevent overwhelming the UI
    return universities.slice(0, 50)
  } catch (error) {
    console.error("Error fetching universities:", error)
    return []
  }
}

export async function getUniversitiesByCountry(country: string): Promise<University[]> {
  return searchUniversities("", country)
}

export async function getAllCountries(): Promise<string[]> {
  try {
    const response = await fetch("http://universities.hipolabs.com/search")
    const universities: University[] = await response.json()

    const countries = Array.from(new Set(universities.map((u) => u.country)))
    return countries.sort()
  } catch (error) {
    console.error("Error fetching countries:", error)
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
    ]
  }
}
