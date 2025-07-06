"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Send, Bot, User, X, Minimize2, Maximize2, Phone } from "lucide-react"

interface Message {
  id: string
  content: string
  role: "user" | "assistant" | "system"
  timestamp: Date
  isQuickReply?: boolean
}

interface FAQ {
  id: string
  question: string
  answer: string
  keywords: string[]
}

const predefinedFAQs: FAQ[] = [
  {
    id: "1",
    question: "چگونه می‌توانم برای تحصیل در خارج اقدام کنم؟",
    answer:
      "برای تحصیل در خارج ابتدا باید رشته و کشور مورد نظر خود را انتخاب کنید. سپس مدارک لازم شامل مدرک تحصیلی، نمرات زبان (آیلتس یا تافل)، انگیزه‌نامه و توصیه‌نامه را آماده کنید. ما در اپلای‌گرافی می‌توانیم شما را در تمام این مراحل راهنمایی کنیم.",
    keywords: ["تحصیل", "خارج", "اقدام", "شروع", "راهنمایی"],
  },
  {
    id: "2",
    question: "هزینه تحصیل در کدام کشورها مقرون به صرفه‌تر است؟",
    answer:
      "آلمان، اتریش، نروژ و فنلاند از کشورهای مقرون به صرفه برای تحصیل هستند. آلمان دانشگاه‌های دولتی رایگان دارد و فقط باید هزینه زندگی را پرداخت کنید. کانادا و استرالیا نیز گزینه‌های خوبی با بورسیه‌های متنوع هستند.",
    keywords: ["هزینه", "مقرون به صرفه", "ارزان", "کشور", "بودجه"],
  },
  {
    id: "3",
    question: "چه مدارکی برای اخذ ویزای تحصیلی لازم است؟",
    answer:
      "مدارک لازم شامل: پذیرش دانشگاه، مدرک تحصیلی معتبر، نمره زبان، اسپانسرشیپ مالی، بیمه درمان، عدم سوء پیشینه، معاینات پزشکی و فرم‌های مربوطه است. هر کشور ممکن است مدارک اضافی نیز درخواست کند.",
    keywords: ["ویزا", "مدارک", "تحصیلی", "لازم", "پذیرش"],
  },
  {
    id: "4",
    question: "آیا می‌توانم در حین تحصیل کار کنم؟",
    answer:
      "بله، در اکثر کشورها دانشجویان بین‌المللی می‌توانند پاره‌وقت کار کنند. معمولاً 20 ساعت در هفته در طول ترم تحصیلی و تمام وقت در تعطیلات مجاز هستید. کانادا، استرالیا، آلمان و انگلستان این امکان را فراهم می‌کنند.",
    keywords: ["کار", "تحصیل", "پاره وقت", "درآمد", "مجوز"],
  },
]

export function SmartChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: "سلام! من دستیار هوشمند اپلای‌گرافی هستم. چطور می‌تونم کمکتون کنم؟",
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

  const findMatchingFAQ = (query: string): FAQ | null => {
    const lowerQuery = query.toLowerCase()
    return (
      predefinedFAQs.find((faq) => faq.keywords.some((keyword) => lowerQuery.includes(keyword.toLowerCase()))) || null
    )
  }

  const handleQuickReply = (faq: FAQ) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content: faq.question,
      role: "user",
      timestamp: new Date(),
      isQuickReply: true,
    }

    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      content: faq.answer,
      role: "assistant",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage, assistantMessage])
    setShowQuickReplies(false)
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

    // Check for FAQ match first
    const matchingFAQ = findMatchingFAQ(input)

    if (matchingFAQ) {
      setTimeout(() => {
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: matchingFAQ.answer,
          role: "assistant",
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, assistantMessage])
        setIsLoading(false)
      }, 1000)
    } else {
      // If no FAQ match, try AI processing or offer human consultation
      try {
        const response = await fetch("/api/ai/smart-chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: input, history: messages }),
        })

        const data = await response.json()

        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: data.response || "متأسفانه نتوانستم پاسخ مناسبی پیدا کنم. آیا مایل به صحبت با مشاور ما هستید؟",
          role: "assistant",
          timestamp: new Date(),
        }

        setMessages((prev) => [...prev, assistantMessage])

        // If AI couldn't help, offer human consultation
        if (!data.response || data.response.includes("نمی‌توانم")) {
          setTimeout(() => {
            const consultationMessage: Message = {
              id: (Date.now() + 2).toString(),
              content: "برای دریافت پاسخ دقیق‌تر، می‌توانید با مشاوران ما تماس بگیرید:",
              role: "system",
              timestamp: new Date(),
            }
            setMessages((prev) => [...prev, consultationMessage])
          }, 1500)
        }
      } catch (error) {
        console.error("Chat error:", error)
        const errorMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: "متأسفانه مشکلی پیش آمده. لطفاً با شماره ۰۹۳۳۰۵۷۸۹۷۶ تماس بگیرید.",
          role: "assistant",
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, errorMessage])
      } finally {
        setIsLoading(false)
      }
    }
  }

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 left-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full bg-[#FF6A5C] hover:bg-[#FF6A5C]/90 shadow-lg"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </Button>
      </div>
    )
  }

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <Card className={`w-96 shadow-xl transition-all duration-300 ${isMinimized ? "h-16" : "h-[600px]"}`}>
        <CardHeader className="flex flex-row items-center justify-between p-4 bg-[#FF6A5C] text-white rounded-t-lg">
          <CardTitle className="text-lg flex items-center gap-2">
            <Bot className="h-5 w-5" />
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
                      ) : message.role === "system" ? (
                        <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center">
                          <Phone className="h-4 w-4 text-white" />
                        </div>
                      ) : (
                        <div className="w-8 h-8 bg-[#FF6A5C] rounded-full flex items-center justify-center">
                          <Bot className="h-4 w-4 text-white" />
                        </div>
                      )}
                    </div>
                    <div
                      className={`rounded-lg px-3 py-2 ${
                        message.role === "user"
                          ? "bg-[#02153D] text-white"
                          : message.role === "system"
                            ? "bg-gray-100 text-gray-900 border"
                            : "bg-gray-100 text-gray-900"
                      }`}
                    >
                      {message.content}
                      {message.role === "system" && (
                        <div className="mt-2">
                          <Button size="sm" className="bg-[#FF6A5C] hover:bg-[#FF6A5C]/90 text-white" asChild>
                            <a href="tel:+989330578976">
                              <Phone className="h-4 w-4 mr-2" />
                              تماس: ۰۹۳۳۰۵۷۸۹۷۶
                            </a>
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* Quick Reply Buttons */}
              {showQuickReplies && (
                <div className="space-y-2">
                  <p className="text-sm text-gray-600 text-center">سوالات متداول:</p>
                  <div className="grid grid-cols-1 gap-2">
                    {predefinedFAQs.map((faq) => (
                      <Button
                        key={faq.id}
                        variant="outline"
                        size="sm"
                        onClick={() => handleQuickReply(faq)}
                        className="text-right justify-start h-auto py-2 px-3 text-xs"
                      >
                        {faq.question}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {isLoading && (
                <div className="flex gap-3 justify-start">
                  <div className="w-8 h-8 bg-[#FF6A5C] rounded-full flex items-center justify-center">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                  <div className="bg-gray-100 rounded-lg px-3 py-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
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
                <Button onClick={sendMessage} disabled={isLoading || !input.trim()} size="sm">
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
