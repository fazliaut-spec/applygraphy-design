import { type NextRequest, NextResponse } from "next/server"
import { searchUniversities } from "@/lib/universities/api"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)

    const params = {
      name: searchParams.get("name") || undefined,
      country: searchParams.get("country") || undefined,
      limit: Number.parseInt(searchParams.get("limit") || "20"),
      offset: Number.parseInt(searchParams.get("offset") || "0"),
    }

    const result = await searchUniversities(params)

    return NextResponse.json(result)
  } catch (error) {
    console.error("University search API error:", error)
    return NextResponse.json({ error: "Failed to search universities" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, country, limit, offset } = body

    const params = {
      name: name || undefined,
      country: country || undefined,
      limit: limit || 20,
      offset: offset || 0,
    }

    const result = await searchUniversities(params)

    return NextResponse.json(result)
  } catch (error) {
    console.error("University search API error:", error)
    return NextResponse.json({ error: "Failed to search universities" }, { status: 500 })
  }
}
