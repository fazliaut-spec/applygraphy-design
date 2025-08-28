import { type NextRequest, NextResponse } from "next/server"
import { emailSender } from "@/lib/email/sender"

export async function POST(request: NextRequest) {
  try {
    const { templateId, email, variables } = await request.json()

    if (!templateId || !email) {
      return NextResponse.json({ error: "Template ID and email are required" }, { status: 400 })
    }

    const success = await emailSender.sendTemplateEmail({
      to: email,
      templateId,
      variables: variables || {},
    })

    if (success) {
      return NextResponse.json({ message: "Test email sent successfully" })
    } else {
      return NextResponse.json({ error: "Failed to send test email" }, { status: 500 })
    }
  } catch (error) {
    console.error("Error sending test email:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
