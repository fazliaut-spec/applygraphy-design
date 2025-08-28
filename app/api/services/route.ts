import { type NextRequest, NextResponse } from "next/server"
import {
  getAllServices,
  getServicesByCategory,
  searchServices,
  getPopularServices,
  bookService,
} from "@/lib/services/api"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get("category")
    const search = searchParams.get("search")
    const popular = searchParams.get("popular")

    let services

    if (popular === "true") {
      services = await getPopularServices()
    } else if (search) {
      services = await searchServices(search)
    } else if (category) {
      services = await getServicesByCategory(category)
    } else {
      services = await getAllServices()
    }

    return NextResponse.json({
      success: true,
      data: services,
      total: services.length,
    })
  } catch (error) {
    console.error("Services API error:", error)
    return NextResponse.json(
      {
        success: false,
        error: "خطا در دریافت سرویس‌ها",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { serviceId, userId, scheduledDate, notes } = body

    if (!serviceId || !userId) {
      return NextResponse.json({ success: false, error: "شناسه سرویس و کاربر الزامی است" }, { status: 400 })
    }

    const booking = await bookService(serviceId, userId, scheduledDate, notes)

    return NextResponse.json({
      success: true,
      data: booking,
      message: "سرویس با موفقیت رزرو شد",
    })
  } catch (error) {
    console.error("Service booking API error:", error)
    return NextResponse.json(
      {
        success: false,
        error: "خطا در رزرو سرویس",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
