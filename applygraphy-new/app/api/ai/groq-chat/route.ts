import { type NextRequest, NextResponse } from "next/server"
import { createGroq } from "@ai-sdk/groq"
import { generateText } from "ai"

const groq = createGroq({
  apiKey: process.env.GROQ_API_KEY,
})

export async function POST(request: NextRequest) {
  try {
    const { message, history } = await request.json()

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 })
    }

    const systemPrompt = `شما دستیار هوشمند اپلای‌گرافی هستید که در زمینه مشاوره تحصیل در خارج از کشور تخصص دارید. 

وظایف شما:
- راهنمایی در انتخاب دانشگاه و رشته تحصیلی
- اطلاع‌رسانی درباره فرآیند اپلیکیشن
- مشاوره در زمینه آزمون‌های زبان (IELTS, TOEFL)
- راهنمایی برای دریافت ویزای تحصیلی
- اطلاعات درباره هزینه‌های تحصیل و زندگی
- پاسخ به سوالات عمومی درباره تحصیل در خارج

لطفاً پاسخ‌های مفید، دقیق و به زبان فارسی ارائه دهید.`

    const { text } = await generateText({
      model: groq("llama-3.1-8b-instant"),
      system: systemPrompt,
      prompt: message,
      maxTokens: 500,
      temperature: 0.7,
    })

    return NextResponse.json({ message: text })
  } catch (error) {
    console.error("Groq API Error:", error)
    return NextResponse.json({ error: "خطا در پردازش درخواست. لطفاً دوباره تلاش کنید." }, { status: 500 })
  }
}
