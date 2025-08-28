import { type NextRequest, NextResponse } from "next/server"
import { getAllActiveTemplates, getTemplateById, getTemplatesByCategory } from "@/lib/email/templates"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get("category")
    const templateId = searchParams.get("id")

    if (templateId) {
      const template = getTemplateById(templateId)
      if (!template) {
        return NextResponse.json({ error: "Template not found" }, { status: 404 })
      }
      return NextResponse.json(template)
    }

    if (category && category !== "all") {
      const templates = getTemplatesByCategory(category as any)
      return NextResponse.json(templates)
    }

    const templates = getAllActiveTemplates()
    return NextResponse.json(templates)
  } catch (error) {
    console.error("Error fetching templates:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const templateData = await request.json()

    // Here you would typically save to database
    // For now, we'll just return success
    console.log("Creating new template:", templateData)

    return NextResponse.json({ message: "Template created successfully", id: Date.now().toString() })
  } catch (error) {
    console.error("Error creating template:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { id, ...templateData } = await request.json()

    if (!id) {
      return NextResponse.json({ error: "Template ID is required" }, { status: 400 })
    }

    // Here you would typically update in database
    console.log("Updating template:", id, templateData)

    return NextResponse.json({ message: "Template updated successfully" })
  } catch (error) {
    console.error("Error updating template:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")

    if (!id) {
      return NextResponse.json({ error: "Template ID is required" }, { status: 400 })
    }

    // Here you would typically delete from database
    console.log("Deleting template:", id)

    return NextResponse.json({ message: "Template deleted successfully" })
  } catch (error) {
    console.error("Error deleting template:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
