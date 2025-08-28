import nodemailer from "nodemailer"
import { renderTemplate, getTemplateById } from "./templates"

interface EmailConfig {
  host: string
  port: number
  secure: boolean
  auth: {
    user: string
    pass: string
  }
}

interface SendEmailOptions {
  to: string | string[]
  templateId: string
  variables: Record<string, string>
  from?: string
  replyTo?: string
}

interface SendCustomEmailOptions {
  to: string | string[]
  subject: string
  htmlContent: string
  textContent?: string
  from?: string
  replyTo?: string
}

class EmailSender {
  private transporter: nodemailer.Transporter
  private defaultFrom: string

  constructor(config: EmailConfig, defaultFrom = "noreply@applygraphy.com") {
    this.transporter = nodemailer.createTransport({
      host: config.host,
      port: config.port,
      secure: config.secure,
      auth: config.auth,
    })
    this.defaultFrom = defaultFrom
  }

  async sendTemplateEmail(options: SendEmailOptions): Promise<boolean> {
    try {
      const template = getTemplateById(options.templateId)
      if (!template) {
        throw new Error(`Template with ID ${options.templateId} not found`)
      }

      const { subject, htmlContent, textContent } = renderTemplate(template, options.variables)

      const mailOptions = {
        from: options.from || this.defaultFrom,
        to: Array.isArray(options.to) ? options.to.join(", ") : options.to,
        replyTo: options.replyTo,
        subject,
        html: htmlContent,
        text: textContent,
      }

      const result = await this.transporter.sendMail(mailOptions)
      console.log("Email sent successfully:", result.messageId)
      return true
    } catch (error) {
      console.error("Error sending email:", error)
      return false
    }
  }

  async sendCustomEmail(options: SendCustomEmailOptions): Promise<boolean> {
    try {
      const mailOptions = {
        from: options.from || this.defaultFrom,
        to: Array.isArray(options.to) ? options.to.join(", ") : options.to,
        replyTo: options.replyTo,
        subject: options.subject,
        html: options.htmlContent,
        text: options.textContent || options.subject,
      }

      const result = await this.transporter.sendMail(mailOptions)
      console.log("Custom email sent successfully:", result.messageId)
      return true
    } catch (error) {
      console.error("Error sending custom email:", error)
      return false
    }
  }

  async verifyConnection(): Promise<boolean> {
    try {
      await this.transporter.verify()
      console.log("SMTP connection verified successfully")
      return true
    } catch (error) {
      console.error("SMTP connection verification failed:", error)
      return false
    }
  }

  async sendBulkEmails(
    recipients: string[],
    templateId: string,
    variables: Record<string, string>,
  ): Promise<{ success: number; failed: number }> {
    let success = 0
    let failed = 0

    for (const recipient of recipients) {
      const sent = await this.sendTemplateEmail({
        to: recipient,
        templateId,
        variables,
      })

      if (sent) {
        success++
      } else {
        failed++
      }

      // Add delay between emails to avoid rate limiting
      await new Promise((resolve) => setTimeout(resolve, 100))
    }

    return {
      success,
      failed,
    }
  }
}

// Create email sender instance
const emailConfig: EmailConfig = {
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: Number.parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER || "",
    pass: process.env.SMTP_PASS || "",
  },
}

export const emailSender = new EmailSender(emailConfig, "تیم اپلای‌گرافی <noreply@applygraphy.com>")

// Email automation functions
export async function sendWelcomeEmail(userEmail: string, userName: string): Promise<boolean> {
  return await emailSender.sendTemplateEmail({
    to: userEmail,
    templateId: "welcome-new-user",
    variables: {
      userName,
      userEmail,
      dashboardUrl: "https://applygraphy.com/dashboard",
    },
  })
}

export async function sendConsultationConfirmation(
  userEmail: string,
  userName: string,
  consultationDate: string,
  consultationTime: string,
  consultantName: string,
  meetingLink: string,
): Promise<boolean> {
  return await emailSender.sendTemplateEmail({
    to: userEmail,
    templateId: "consultation-booking",
    variables: {
      userName,
      consultationDate,
      consultationTime,
      consultantName,
      meetingLink,
    },
  })
}

export async function sendPaymentConfirmation(
  userEmail: string,
  userName: string,
  orderNumber: string,
  amount: string,
  serviceName: string,
  paymentDate: string,
): Promise<boolean> {
  return await emailSender.sendTemplateEmail({
    to: userEmail,
    templateId: "payment-confirmation",
    variables: {
      userName,
      orderNumber,
      amount,
      serviceName,
      paymentDate,
    },
  })
}

export async function sendApplicationStatusUpdate(
  userEmail: string,
  userName: string,
  applicationNumber: string,
  universityName: string,
  status: string,
  nextStep: string,
): Promise<boolean> {
  return await emailSender.sendTemplateEmail({
    to: userEmail,
    templateId: "application-status",
    variables: {
      userName,
      applicationNumber,
      universityName,
      status,
      nextStep,
    },
  })
}

export async function sendVisaApprovalCongratulations(
  userEmail: string,
  userName: string,
  visaType: string,
  country: string,
  approvalDate: string,
  validityPeriod: string,
): Promise<boolean> {
  return await emailSender.sendTemplateEmail({
    to: userEmail,
    templateId: "visa-approval",
    variables: {
      userName,
      visaType,
      country,
      approvalDate,
      validityPeriod,
    },
  })
}

export async function sendFollowupReminder(
  userEmail: string,
  userName: string,
  reminderTitle: string,
  dueDate: string,
  actionRequired: string,
  contactInfo: string,
): Promise<boolean> {
  return await emailSender.sendTemplateEmail({
    to: userEmail,
    templateId: "followup-reminder",
    variables: {
      userName,
      reminderTitle,
      dueDate,
      actionRequired,
      contactInfo,
    },
  })
}

export { EmailSender, type EmailConfig, type SendEmailOptions, type SendCustomEmailOptions }
