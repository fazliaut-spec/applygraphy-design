import nodemailer from "nodemailer"
import { type EmailTemplate, renderTemplate } from "./templates"

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
    this.transporter = nodemailer.createTransport({
      host: config.host,
      port: config.port,
      secure: config.secure,
      auth: config.auth,
      tls: {
        rejectUnauthorized: false,
      },
    })
  }

  async sendEmail(options: SendEmailOptions): Promise<{ success: boolean; messageId?: string; error?: string }> {
    try {
      const { html, text, subject } = renderTemplate(options.template, options.variables)

      const mailOptions = {
        from: {
          name: "تیم اپلای‌گرافی",
          address: process.env.SMTP_USER || "noreply@applygraphy.com",
        },
        to: options.to,
        subject,
        html,
        text,
        attachments: options.attachments || [],
      }

      const result = await this.transporter.sendMail(mailOptions)

      return {
        success: true,
        messageId: result.messageId,
      }
    } catch (error) {
      console.error("Email sending failed:", error)
      return {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      }
    }
  }

  async verifyConnection(): Promise<boolean> {
    try {
      await this.transporter.verify()
      return true
    } catch (error) {
      console.error("SMTP connection failed:", error)
      return false
    }
  }

  async sendBulkEmails(
    emails: SendEmailOptions[],
  ): Promise<Array<{ success: boolean; messageId?: string; error?: string; email: string }>> {
    const results = []

    for (const emailOptions of emails) {
      const result = await this.sendEmail(emailOptions)
      results.push({
        ...result,
        email: emailOptions.to,
      })

      // Add delay between emails to avoid rate limiting
      await new Promise((resolve) => setTimeout(resolve, 100))
    }

    return results
  }
}

// Create default email sender instance
export const createEmailSender = (): EmailSender => {
  const config: EmailConfig = {
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: Number.parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER || "",
      pass: process.env.SMTP_PASS || "",
    },
  }

  return new EmailSender(config)
}

// Email automation triggers
export const emailTriggers = {
  // Send welcome email when user signs up
  onUserSignup: async (userEmail: string, firstName: string, lastName: string) => {
    const emailSender = createEmailSender()
    const welcomeTemplate = {
      id: "welcome-new-user",
      name: "خوشامدگویی کاربر جدید",
      nameEn: "Welcome New User",
      subject: "به اپلای‌گرافی خوش آمدید - شروع سفر تحصیلی شما",
      subjectEn: "Welcome to Applygraphy - Start Your Academic Journey",
      category: "welcome" as const,
      variables: ["firstName", "lastName", "email"],
      htmlContent: "", // Will be loaded from templates
      textContent: "",
      isActive: true,
    }

    return await emailSender.sendEmail({
      to: userEmail,
      template: welcomeTemplate,
      variables: {
        firstName,
        lastName,
        email: userEmail,
      },
    })
  },

  // Send consultation confirmation
  onConsultationRequest: async (userEmail: string, firstName: string, serviceType: string, consultantName: string) => {
    const emailSender = createEmailSender()
    const consultationTemplate = {
      id: "consultation-request",
      name: "تأیید درخواست مشاوره",
      nameEn: "Consultation Request Confirmation",
      subject: `درخواست مشاوره شما دریافت شد - ${serviceType}`,
      subjectEn: `Your Consultation Request Received - ${serviceType}`,
      category: "consultation" as const,
      variables: ["firstName", "lastName", "serviceType", "requestDate", "consultantName"],
      htmlContent: "",
      textContent: "",
      isActive: true,
    }

    return await emailSender.sendEmail({
      to: userEmail,
      template: consultationTemplate,
      variables: {
        firstName,
        lastName: "",
        serviceType,
        requestDate: new Date().toLocaleDateString("fa-IR"),
        consultantName,
      },
    })
  },

  // Send payment confirmation
  onPaymentSuccess: async (
    userEmail: string,
    firstName: string,
    amount: string,
    serviceName: string,
    transactionId: string,
  ) => {
    const emailSender = createEmailSender()
    const paymentTemplate = {
      id: "payment-confirmation",
      name: "تأیید پرداخت",
      nameEn: "Payment Confirmation",
      subject: `پرداخت شما تأیید شد - ${amount} تومان`,
      subjectEn: `Payment Confirmed - ${amount} Toman`,
      category: "payment" as const,
      variables: ["firstName", "lastName", "amount", "serviceName", "transactionId", "paymentDate"],
      htmlContent: "",
      textContent: "",
      isActive: true,
    }

    return await emailSender.sendEmail({
      to: userEmail,
      template: paymentTemplate,
      variables: {
        firstName,
        lastName: "",
        amount,
        serviceName,
        transactionId,
        paymentDate: new Date().toLocaleDateString("fa-IR"),
      },
    })
  },

  // Send visa approval congratulations
  onVisaApproval: async (
    userEmail: string,
    firstName: string,
    country: string,
    university: string,
    visaType: string,
  ) => {
    const emailSender = createEmailSender()
    const visaTemplate = {
      id: "visa-approval",
      name: "تبریک تأیید ویزا",
      nameEn: "Visa Approval Congratulations",
      subject: `🎉 تبریک! ویزای شما تأیید شد - ${country}`,
      subjectEn: `🎉 Congratulations! Your Visa Approved - ${country}`,
      category: "visa" as const,
      variables: ["firstName", "lastName", "country", "university", "visaType", "approvalDate"],
      htmlContent: "",
      textContent: "",
      isActive: true,
    }

    return await emailSender.sendEmail({
      to: userEmail,
      template: visaTemplate,
      variables: {
        firstName,
        lastName: "",
        country,
        university,
        visaType,
        approvalDate: new Date().toLocaleDateString("fa-IR"),
      },
    })
  },
}
