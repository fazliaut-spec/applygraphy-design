"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Send, Bot, User, X, Minimize2, Maximize2, Sparkles } from "lucide-react"

interface Message {
  id: string
  content: string
  role: "user" | "assistant"
  timestamp: Date
}

interface QuickReply {
  id: string
  text: string
  response: string
}

const quickReplies: QuickReply[] = [
  {
    id: "1",
    text: "چگونه برای تحصیل در خارج اقدام کنم؟",
    response:
      "برای تحصیل در خارج این مراحل را دنبال کنید:\n\n1️⃣ انتخاب رشته و کشور مقصد\n2️⃣ بررسی شرایط پذیرش دانشگاه‌ها\n3️⃣ آماده‌سازی مدارک (مدرک تحصیلی، نمرات زبان، انگیزه‌نامه)\n4️⃣ ارسال درخواست به دانشگاه‌ها\n5️⃣ اقدام برای اخذ ویزای تحصیلی\n\nآیا در مورد هر کدام از این مراحل سوال خاصی دارید?",
  },
  {
    id: "2",
    text: "بهترین کشورها برای تحصیل کدامند؟",
    response:
      "بهترین کشورها بر اساس رشته و بودجه متفاوت است:\n\n🇺🇸 **آمریکا**: کیفیت بالا، هزینه زیاد\n🇨🇦 **کانادا**: کیفیت خوب، هزینه متوسط، امکان مهاجرت\n🇩🇪 **آلمان**: تحصیل رایگان، زبان آلمانی مفید\n🇦🇺 **استرالیا**: کیفیت عالی، آب و هوای مناسب\n🇬🇧 **انگلستان**: دانشگاه‌های معتبر، مدت تحصیل کوتاه\n🇳🇱 **هلند**: برنامه‌های انگلیسی، محیط بین‌المللی\n\nکدام رشته و بودجه مدنظرتان است؟",
  },
  {
    id: "3",
    text: "چه نمره‌ای در آیلتس لازم دارم؟",
    response:
      "نمره آیلتس مورد نیاز بستگی به کشور و مقطع دارد:\n\n📚 **کارشناسی**: معمولاً 6.0-6.5\n🎓 **کارشناسی ارشد**: معمولاً 6.5-7.0\n👨‍🎓 **دکترا**: معمولاً 7.0-7.5\n\n**بر اساس کشور:**\n🇨🇦 کانادا: 6.5 (هر بخش حداقل 6.0)\n🇦🇺 استرالیا: 6.5-7.0\n🇬🇧 انگلستان: 6.0-7.0\n🇺🇸 آمریکا: اکثراً تافل ترجیح می‌دهند\n\nبرای کدام کشور و مقطع برنامه‌ریزی می‌کنید؟",
  },
  {
    id: "4",
    text: "هزینه تحصیل چقدر است؟",
    response:
      "هزینه‌های تحصیل بر اساس کشور متفاوت است:\n\n💰 **شهریه سالانه:**\n🇺🇸 آمریکا: $20,000-$60,000\n🇨🇦 کانادا: $15,000-$35,000\n🇦🇺 استرالیا: $20,000-$45,000\n🇬🇧 انگلستان: £15,000-£35,000\n🇩🇪 آلمان: رایگان (دانشگاه‌های دولتی)\n🇳🇱 هلند: €8,000-€20,000\n\n🏠 **هزینه زندگی ماهانه:**\n• آمریکا/انگلستان: $1,200-$2,000\n• کانادا/استرالیا: $1,000-$1,500\n• آلمان/هلند: €800-€1,200\n\nآیا در مورد بورسیه‌ها اطلاعاتی می‌خواهید؟",
  },
]

// Free AI response generator using pattern matching and predefined responses
const generateAIResponse = async (message: string): Promise<string> => {
  const lowerMessage = message.toLowerCase()

  // Pattern matching for common queries
  if (lowerMessage.includes("بورسیه") || lowerMessage.includes("scholarship")) {
    return `برای دریافت بورسیه این راه‌ها را امتحان کنید:

🎯 **بورسیه‌های دولتی:**
• Chevening (انگلستان)
• Fulbright (آمریکا)
• DAAD (آلمان)
• Australia Awards

🏛️ **بورسیه‌های دانشگاهی:**
• Merit-based scholarships
• Research assistantships
• Teaching assistantships

📋 **نکات مهم:**
• درخواست زودهنگام ارسال کنید
• انگیزه‌نامه قوی بنویسید
• نمرات بالا داشته باشید
• تجربه پژوهشی مفید است

آیا برای رشته خاصی بورسیه می‌خواهید؟`
  }

  if (lowerMessage.includes("ویزا") || lowerMessage.includes("visa")) {
    return `مراحل اخذ ویزای تحصیلی:

📄 **مدارک لازم:**
• نامه پذیرش دانشگاه
• مدرک تحصیلی معتبر
• نمره زبان (آیلتس/تافل)
• اسپانسرشیپ مالی
• بیمه درمان
• عدم سوء پیشینه

⏰ **زمان‌بندی:**
• درخواست: 2-4 ماه قبل از شروع ترم
• مصاحبه: معمولاً 1-2 هفته بعد از درخواست
• پاسخ: 2-8 هفته

💡 **نکات مهم:**
• همه مدارک را کامل آماده کنید
• در مصاحبه صادق باشید
• اهداف تحصیلی‌تان را واضح بیان کنید

برای کدام کشور ویزا می‌خواهید؟`
  }

  if (lowerMessage.includes("انگیزه نامه") || lowerMessage.includes("motivation letter")) {
    return `راهنمای نوشتن انگیزه‌نامه موثر:

✍️ **ساختار انگیزه‌نامه:**
1. مقدمه: معرفی خود و هدف
2. پیشینه تحصیلی و کاری
3. دلایل انتخاب رشته/دانشگاه
4. اهداف آینده
5. نتیجه‌گیری

🎯 **نکات کلیدی:**
• شخصی و منحصر به فرد باشد
• با رشته و دانشگاه مرتبط باشد
• نقاط قوت‌تان را برجسته کنید
• اهداف واقع‌بینانه بیان کنید
• زبان رسمی اما دوستانه

📏 **طول مناسب:**
• کارشناسی: 500-750 کلمه
• کارشناسی ارشد: 750-1000 کلمه
• دکترا: 1000-1500 کلمه

آیا برای رشته خاصی راهنمایی می‌خواهید؟`
  }

  if (lowerMessage.includes("آیلتس") || lowerMessage.includes("ielts")) {
    return `راهنمای آمادگی آزمون آیلتس:

📚 **بخش‌های آزمون:**
• Listening (30 دقیقه)
• Reading (60 دقیقه)
• Writing (60 دقیقه)
• Speaking (11-14 دقیقه)

⏱️ **برنامه آمادگی:**
• حداقل 3-6 ماه تمرین منظم
• روزانه 2-3 ساعت مطالعه
• تمرین با نمونه سوالات
• شرکت در کلاس‌های آمادگی

💡 **نکات مهم:**
• تمرین listening با لهجه‌های مختلف
• خواندن متون آکادمیک
• نوشتن essay های مختلف
• تمرین speaking با native speaker

🎯 **منابع مفید:**
• Cambridge IELTS books
• IELTS Liz website
• British Council resources

چه نمره‌ای هدف‌تان است؟`
  }

  // Default response for unmatched queries
  return `متشکرم از سوال‌تان! 

من یک دستیار هوشمند هستم که در زمینه مشاوره تحصیل در خارج کمک می‌کنم. 

🤖 **من می‌توانم در این موارد کمک کنم:**
• راهنمایی برای انتخاب کشور و دانشگاه
• اطلاعات درباره شرایط پذیرش
• راهنمایی آمادگی آزمون‌های زبان
• نکات نوشتن انگیزه‌نامه
• اطلاعات درباره بورسیه‌ها
• راهنمایی اخذ ویزا

📞 **برای مشاوره تخصصی‌تر:**
تماس: ۰۹۳۳۰۵۷۸۹۷۶

لطفاً سوال‌تان را واضح‌تر بپرسید تا بتوانم بهتر کمک کنم!`
}

export function FreeAIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content:
        "سلام! من دستیار هوشمند اپلای‌گرافی هستم 🤖\n\nمن می‌تونم در مورد تحصیل در خارج، بورسیه‌ها، آزمون‌های زبان و ویزا کمکتون کنم!\n\nسوال‌تون رو بپرسید یا از گزینه‌های زیر انتخاب کنید:",
      role: "assistant",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showQuickReplies, setShowQuickReplies] = useState(true)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleQuickReply = async (quickReply: QuickReply) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content: quickReply.text,
      role: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setShowQuickReplies(false)
    setIsLoading(true)

    // Simulate AI processing delay
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: quickReply.response,
        role: "assistant",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, assistantMessage])
      setIsLoading(false)
    }, 1500)
  }

  const sendMessage = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)
    setShowQuickReplies(false)

    try {
      // Use free AI response generator
      const response = await generateAIResponse(input)

      setTimeout(() => {
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: response,
          role: "assistant",
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, assistantMessage])
        setIsLoading(false)
      }, 1500)
    } catch (error) {
      console.error("Chat error:", error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "متأسفانه مشکلی پیش آمده. لطفاً دوباره تلاش کنید یا با شماره ۰۹۳۳۰۵۷۸۹۷۶ تماس بگیرید.",
        role: "assistant",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
      setIsLoading(false)
    }
  }

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full bg-[#FF6A5C] hover:bg-[#FF6A5C]/90 shadow-lg animate-pulse"
        >
          <div className="relative">
            <MessageCircle className="h-6 w-6 text-white" />
            <Sparkles className="h-3 w-3 text-white absolute -top-1 -right-1" />
          </div>
        </Button>
      </div>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className={`w-96 shadow-xl transition-all duration-300 ${isMinimized ? "h-16" : "h-[600px]"}`}>
        <CardHeader className="flex flex-row items-center justify-between p-4 bg-gradient-to-r from-[#FF6A5C] to-[#FF6A5C]/90 text-white rounded-t-lg">
          <CardTitle className="text-lg flex items-center gap-2">
            <div className="relative">
              <Bot className="h-5 w-5" />
              <Sparkles className="h-3 w-3 absolute -top-1 -right-1" />
            </div>
            دستیار هوشمند
          </CardTitle>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMinimized(!isMinimized)}
              className="text-white hover:bg-white/20 h-8 w-8 p-0"
            >
              {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>

        {!isMinimized && (
          <CardContent className="flex flex-col h-[536px] p-0">
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`flex gap-2 max-w-[80%] ${message.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                  >
                    <div className="flex-shrink-0">
                      {message.role === "user" ? (
                        <div className="w-8 h-8 bg-[#02153D] rounded-full flex items-center justify-center">
                          <User className="h-4 w-4 text-white" />
                        </div>
                      ) : (
                        <div className="w-8 h-8 bg-gradient-to-r from-[#FF6A5C] to-[#FF6A5C]/90 rounded-full flex items-center justify-center">
                          <Bot className="h-4 w-4 text-white" />
                        </div>
                      )}
                    </div>
                    <div
                      className={`rounded-lg px-3 py-2 whitespace-pre-line ${
                        message.role === "user" ? "bg-[#02153D] text-white" : "bg-gray-100 text-gray-900"
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                </div>
              ))}

              {/* Quick Reply Buttons */}
              {showQuickReplies && (
                <div className="space-y-2">
                  <p className="text-sm text-gray-600 text-center">سوالات پرتکرار:</p>
                  <div className="grid grid-cols-1 gap-2">
                    {quickReplies.map((reply) => (
                      <Button
                        key={reply.id}
                        variant="outline"
                        size="sm"
                        onClick={() => handleQuickReply(reply)}
                        className="text-right justify-start h-auto py-2 px-3 text-xs hover:bg-[#FF6A5C]/10 hover:border-[#FF6A5C]"
                      >
                        {reply.text}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {isLoading && (
                <div className="flex gap-3 justify-start">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#FF6A5C] to-[#FF6A5C]/90 rounded-full flex items-center justify-center">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                  <div className="bg-gray-100 rounded-lg px-3 py-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-[#FF6A5C] rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-[#FF6A5C] rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-[#FF6A5C] rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t p-4">
              <div className="flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="سوال خود را بپرسید..."
                  onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                  disabled={isLoading}
                  className="text-right"
                />
                <Button
                  onClick={sendMessage}
                  disabled={isLoading || !input.trim()}
                  size="sm"
                  className="bg-[#FF6A5C] hover:bg-[#FF6A5C]/90"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  )
}
