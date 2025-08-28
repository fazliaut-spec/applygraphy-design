import { type NextRequest, NextResponse } from "next/server"
import { emailTemplates, type EmailTemplate } from "@/lib/email/templates"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get("category")
    const active = searchParams.get("active")

    let filteredTemplates = emailTemplates

    if (category && category !== "all") {
      filteredTemplates = filteredTemplates.filter((t) => t.category === category)
    }

    if (active !== null) {
      const isActive = active === "true"
      filteredTemplates = filteredTemplates.filter((t) => t.isActive === isActive)
    }

    return NextResponse.json({
      templates: filteredTemplates,
      total: filteredTemplates.length,
    })
  } catch (error) {
    console.error("Error fetching templates:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const templateData: Omit<EmailTemplate, "id"> = await request.json()

    // Validate required fields
    if (!templateData.name || !templateData.subject || !templateData.content) {
      return NextResponse.json({ error: "Name, subject, and content are required" }, { status: 400 })
    }

    const newTemplate: EmailTemplate = {
      ...templateData,
      id: `custom-${Date.now()}`,
    }

    // In a real application, you would save this to a database
    // For now, we'll just return the created template
    return NextResponse.json({
      template: newTemplate,
      message: "Template created successfully",
    })
  } catch (error) {
    console.error("Error creating template:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
