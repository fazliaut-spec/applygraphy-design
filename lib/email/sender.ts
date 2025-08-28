import nodemailer from "nodemailer"
import { type EmailTemplate, replaceTemplateVariables, validateTemplateVariables } from "./templates"

export interface EmailConfig {
  host: string
  port: number
  secure: boolean
  auth: {
    user: string
    pass: string
  }
}

export interface SendEmailOptions {
  to: string
  template: EmailTemplate
  variables: Record<string, string>
  attachments?: Array<{
    filename: string
    content: Buffer | string
    contentType?: string
  }>
}

export class EmailSender {
  private transporter: nodemailer.Transporter

  constructor(config: EmailConfig) {
    this.transporter = nodemailer.createTransporter({
      host: config.host,
      port: config.port,
      secure: config.secure,
      auth: config.auth,
    })
  }

  async sendEmail(options: SendEmailOptions): Promise<{ success: boolean; messageId?: string; error?: string }> {
    try {
      // Validate template variables
      const missingVariables = validateTemplateVariables(options.template, options.variables)
      if (missingVariables.length > 0) {
        return {
          success: false,
          error: `Missing required variables: ${missingVariables.join(", ")}`,
        }
      }

      // Process template content
      const subject = replaceTemplateVariables(options.template.subject, options.variables)
      const htmlContent = replaceTemplateVariables(options.template.content, options.variables)

      // Send email
      const info = await this.transporter.sendMail({
        from: '"Applygraphy Support" <support@applygraphy.com>',
        to: options.to,
        subject: subject,
        html: htmlContent,
        attachments: options.attachments,
      })

      return {
        success: true,
        messageId: info.messageId,
      }
    } catch (error) {
      console.error("Email sending failed:", error)
      return {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error occurred",
      }
    }
  }

  async verifyConnection(): Promise<boolean> {
    try {
      await this.transporter.verify()
      return true
    } catch (error) {
      console.error("Email connection verification failed:", error)
      return false
    }
  }
}

// Default email sender instance
export const emailSender = new EmailSender({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: Number.parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER || "",
    pass: process.env.SMTP_PASS || "",
  },
})
