import { type NextRequest, NextResponse } from "next/server"
import { createGroq } from "@ai-sdk/groq"
import { generateText } from "ai"

const groq = createGroq({
  apiKey: process.env.GROQ_API_KEY,
})

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 })
    }

    const { text } = await generateText({
      model: groq("llama3-8b-8192"),
      messages: [
        {
          role: "system",
          content: `شما یک مشاور تخصصی تحصیل در خارج هستید که در شرکت اپلای‌گرافی کار می‌کنید. شما باید:

1. به زبان فارسی پاسخ دهید
2. اطلاعات دقیق و مفید درباره تحصیل در خارج ارائه دهید
3. در موضوعات زیر تخصص دارید:
   - بورسیه‌های تحصیلی
   - ویزای تحصیلی
   - آزمون‌های زبان (آیلتس، تافل)
   - انگیزه‌نامه و مدارک
   - انتخاب کشور و دانشگاه
   - فرآیند اپلیکیشن

4. پاسخ‌های شما باید:
   - مفصل و کاربردی باشد
   - شامل نکات عملی باشد
   - امیدوارکننده و مثبت باشد
   - شامل اطلاعات تماس شرکت باشد: ۰۹۳۳۰۵۷۸۹۷۶

5. اگر سوال خارج از حوزه تخصص شما بود، کاربر را به مشاوره تلفنی هدایت کنید.`,
        },
        {
          role: "user",
          content: message,
        },
      ],
      maxTokens: 500,
      temperature: 0.7,
    })

    return NextResponse.json({ response: text })
  } catch (error) {
    console.error("Groq API error:", error)
    return NextResponse.json(
      {
        response:
          "متأسفم، در حال حاضر مشکلی در سیستم وجود دارد. لطفاً با شماره ۰۹۳۳۰۵۷۸۹۷۶ تماس بگیرید تا مشاورین ما به شما کمک کنند.",
      },
      { status: 200 },
    )
  }
}
