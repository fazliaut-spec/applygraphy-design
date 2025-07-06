import { type NextRequest, NextResponse } from "next/server"
import { OpenAI } from "openai"

// Check if OpenAI API key is available
const apiKey = process.env.OPENAI_API_KEY

// Create OpenAI client only if API key is available
const openai = apiKey ? new OpenAI({ apiKey }) : null

export async function POST(request: NextRequest) {
  try {
    const { message, history, locale = "en" } = await request.json()

    // Determine response language based on user's locale
    const languageInstruction =
      locale === "fa"
        ? "Respond in Persian/Farsi language."
        : locale === "ar"
          ? "Respond in Arabic language."
          : "Respond in English language."

    // If OpenAI API key is not available, return a mock response
    if (!openai) {
      console.log("OpenAI API key not available, using mock response")
      return NextResponse.json({
        response:
          locale === "fa"
            ? "سلام! من یک پاسخ آزمایشی هستم. لطفاً کلید API OpenAI را تنظیم کنید تا پاسخ‌های واقعی دریافت کنید."
            : locale === "ar"
              ? "مرحبًا! أنا استجابة تجريبية. يرجى إعداد مفتاح API OpenAI لتلقي استجابات حقيقية."
              : "Hello! I'm a mock response. Please set up your OpenAI API key to receive real responses.",
      })
    }

    const systemPrompt = `You are an expert study abroad advisor and education counselor. You help international students with:
    - University and program recommendations
    - Application guidance and requirements
    - Scholarship and funding information
    - Visa and immigration advice
    - Study abroad preparation tips
    - Career guidance for international students
    
    Be helpful, accurate, and encouraging. If you don't know specific details about a university or program, suggest where they can find official information.
    
    ${languageInstruction}
    
    If the user is from Iran or asks about studying from Iran, be aware of any specific challenges they might face and provide relevant guidance about sanctions, visa processes, and alternative pathways.`

    const messages = [
      { role: "system", content: systemPrompt },
      ...history.slice(-10).map((msg) => ({
        role: msg.role,
        content: msg.content,
      })), // Keep last 10 messages for context
      { role: "user", content: message },
    ]

    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: messages as any,
      temperature: 0.7,
      max_tokens: 500,
    })

    return NextResponse.json({
      response: response.choices[0].message.content,
    })
  } catch (error) {
    console.error("AI Chat error:", error)
    // Ensure we return a proper JSON response even on error
    return NextResponse.json({
      response: "Sorry, I'm having trouble responding right now. Please try again later.",
      error: error instanceof Error ? error.message : "Unknown error",
    })
  }
}
