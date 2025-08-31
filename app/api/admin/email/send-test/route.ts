// app/api/admin/email/send-test/route.ts
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,                 // مثلا smtp.gmail.com
      port: Number(process.env.SMTP_PORT || 587),  // 587
      secure: false,                                // برای TLS روی 587
      auth: {
        user: process.env.SMTP_USER,               // applygraphy@gmail.com
        pass: process.env.SMTP_PASS,               // پسورد/اپ‌پسورد
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_FROM || process.env.SMTP_USER,
      to: process.env.SMTP_USER,                   // تست: به ایمیل خودت
      subject: "Applygraphy SMTP test",
      text: "SMTP configuration is working ✅",
    });

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    console.error("Email send error:", e?.message);
    return NextResponse.json({ ok: false, error: e?.message }, { status: 500 });
  }
}
