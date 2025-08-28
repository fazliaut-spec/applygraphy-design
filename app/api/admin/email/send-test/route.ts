import { type NextRequest, NextResponse } from "next/server"
import { createEmailSender } from "@/lib/email/sender"
import { getTemplateById } from "@/lib/email/templates"

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

    const emailSender = createEmailSender()

    // Verify SMTP connection first
    const isConnected = await emailSender.verifyConnection()
    if (!isConnected) {
      return NextResponse.json({ error: "SMTP connection failed. Please check email configuration." }, { status: 500 })
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
        message: "Test email sent successfully",
      })
    } else {
      return NextResponse.json({ error: result.error || "Failed to send email" }, { status: 500 })
    }
  } catch (error) {
    console.error("Test email error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
