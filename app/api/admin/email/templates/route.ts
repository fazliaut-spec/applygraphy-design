import { type NextRequest, NextResponse } from "next/server"
import { getAllActiveTemplates, getTemplatesByCategory, getTemplateById } from "@/lib/email/templates"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get("category")
    const id = searchParams.get("id")

    if (id) {
      const template = getTemplateById(id)
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
    console.error("Templates API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const templateData = await request.json()

    // Here you would typically save to database
    // For now, we'll just return success

    return NextResponse.json({
      success: true,
      message: "Template created successfully",
      template: templateData,
    })
  } catch (error) {
    console.error("Create template error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const templateData = await request.json()

    // Here you would typically update in database
    // For now, we'll just return success

    return NextResponse.json({
      success: true,
      message: "Template updated successfully",
      template: templateData,
    })
  } catch (error) {
    console.error("Update template error:", error)
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
    // For now, we'll just return success

    return NextResponse.json({
      success: true,
      message: "Template deleted successfully",
    })
  } catch (error) {
    console.error("Delete template error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
