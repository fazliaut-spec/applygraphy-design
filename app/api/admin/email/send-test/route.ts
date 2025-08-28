import { type NextRequest, NextResponse } from "next/server"
import { getTemplateById } from "@/lib/email/templates"
import { emailSender } from "@/lib/email/sender"

export async function POST(request: NextRequest) {
  try {
    const { templateId, to, variables } = await request.json()

    if (!templateId || !to) {
      return NextResponse.json({ error: "Template ID and recipient email are required" }, { status: 400 })
    }

    const template = getTemplateById(templateId)
    if (!template) {
      return NextResponse.json({ error: "Template not found" }, { status: 404 })
    }

    const result = await emailSender.sendEmail({
      to,
      template,
      variables: variables || {},
    })

    if (result.success) {
      return NextResponse.json({
        success: true,
        messageId: result.messageId,
      })
    } else {
      return NextResponse.json({ error: result.error }, { status: 500 })
    }
  } catch (error) {
    console.error("Error sending test email:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
