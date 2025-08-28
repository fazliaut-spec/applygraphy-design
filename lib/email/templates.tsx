export interface EmailTemplate {
  id: string
  name: string
  subject: string
  category: "welcome" | "consultation" | "payment" | "application" | "visa" | "followup"
  variables: string[]
  htmlContent: string
  textContent: string
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

export const emailTemplates: EmailTemplate[] = [
  {
    id: "welcome-new-user",
    name: "خوش‌آمدگویی کاربر جدید",
    subject: "به اپلای‌گرافی خوش آمدید - {{userName}}",
    category: "welcome",
    variables: ["userName", "userEmail", "dashboardUrl"],
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    textContent: `
سلام {{userName}} عزیز،

به خانواده بزرگ اپلای‌گرافی خوش آمدید!

ما خوشحالیم که شما را در مسیر تحقق رویای تحصیل در خارج همراهی کنیم.

برای شروع، می‌توانید:
- پروفایل خود را تکمیل کنید
- با مشاوران ما مشورت کنید
- خدمات مختلف ما را بررسی کنید

لینک داشبورد شما: {{dashboardUrl}}

با تشکر،
تیم اپلای‌گرافی
    `,
    htmlContent: `
<!DOCTYPE html>
<html dir="rtl" lang="fa">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>خوش آمدید به اپلای‌گرافی</title>
    <style>
        @font-face {
            font-family: 'IRANSans';
            src: url('data:font/woff2;base64,') format('woff2');
            font-weight: 400;
            font-style: normal;
            font-display: swap;
        }
        body {
            font-family: 'IRANSans', Tahoma, Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            direction: rtl;
            text-align: right;
            margin: 0;
            padding: 0;
            background-color: #f8fafc;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header {
            background: linear-gradient(135deg, #ff6a5c 0%, #02153d 100%);
            color: white;
            padding: 40px 30px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: bold;
            font-family: 'IRANSans', Tahoma, Arial, sans-serif;
        }
        .content {
            padding: 40px 30px;
        }
        .welcome-message {
            font-size: 18px;
            margin-bottom: 30px;
            color: #1f2937;
            font-family: 'IRANSans', Tahoma, Arial, sans-serif;
        }
        .features {
            background-color: #f8fafc;
            border-radius: 8px;
            padding: 25px;
            margin: 30px 0;
        }
        .feature-item {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
            font-size: 16px;
            font-family: 'IRANSans', Tahoma, Arial, sans-serif;
        }
        .feature-icon {
            width: 20px;
            height: 20px;
            background-color: #ff6a5c;
            border-radius: 50%;
            margin-left: 15px;
            flex-shrink: 0;
        }
        .cta-button {
            display: inline-block;
            background: linear-gradient(135deg, #ff6a5c 0%, #02153d 100%);
            color: white;
            padding: 15px 30px;
            text-decoration: none;
            border-radius: 8px;
            font-weight: bold;
            margin: 20px 0;
            text-align: center;
            font-family: 'IRANSans', Tahoma, Arial, sans-serif;
        }
        .footer {
            background-color: #1f2937;
            color: white;
            padding: 30px;
            text-align: center;
            font-size: 14px;
            font-family: 'IRANSans', Tahoma, Arial, sans-serif;
        }
        .social-links {
            margin-top: 20px;
        }
        .social-links a {
            color: #ff6a5c;
            text-decoration: none;
            margin: 0 10px;
            font-family: 'IRANSans', Tahoma, Arial, sans-serif;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🎓 به اپلای‌گرافی خوش آمدید</h1>
            <p>مسیر موفقیت تحصیلی شما از اینجا شروع می‌شود</p>
        </div>
        
        <div class="content">
            <div class="welcome-message">
                <p>سلام <strong>{{userName}}</strong> عزیز،</p>
                <p>به خانواده بزرگ اپلای‌گرافی خوش آمدید! ما خوشحالیم که شما را در مسیر تحقق رویای تحصیل در خارج همراهی کنیم.</p>
            </div>
            
            <div class="features">
                <h3>حالا می‌توانید:</h3>
                <div class="feature-item">
                    <div class="feature-icon"></div>
                    <span>پروفایل تحصیلی خود را تکمیل کنید</span>
                </div>
                <div class="feature-item">
                    <div class="feature-icon"></div>
                    <span>با مشاوران مجرب ما مشورت کنید</span>
                </div>
                <div class="feature-item">
                    <div class="feature-icon"></div>
                    <span>دانشگاه‌های مناسب را پیدا کنید</span>
                </div>
                <div class="feature-item">
                    <div class="feature-icon"></div>
                    <span>از خدمات تخصصی ما استفاده کنید</span>
                </div>
            </div>
            
            <div style="text-align: center;">
                <a href="{{dashboardUrl}}" class="cta-button">
                    شروع کنید 🚀
                </a>
            </div>
            
            <p style="color: #6b7280; font-size: 14px; margin-top: 30px;">
                اگر سوالی دارید، تیم پشتیبانی ما آماده کمک به شماست.
            </p>
        </div>
        
        <div class="footer">
            <p><strong>تیم اپلای‌گرافی</strong></p>
            <p>همراه شما در مسیر موفقیت تحصیلی</p>
            <div class="social-links">
                <a href="#">تلگرام</a> |
                <a href="#">اینستاگرام</a> |
                <a href="#">واتساپ</a>
            </div>
        </div>
    </div>
</body>
</html>
    `,
  },
  {
    id: "consultation-booking",
    name: "تأیید رزرو مشاوره",
    subject: "مشاوره شما رزرو شد - {{consultationDate}}",
    category: "consultation",
    variables: ["userName", "consultationDate", "consultationTime", "consultantName", "meetingLink"],
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    textContent: `
سلام {{userName}} عزیز،

مشاوره شما با موفقیت رزرو شد.

جزئیات مشاوره:
تاریخ: {{consultationDate}}
ساعت: {{consultationTime}}
مشاور: {{consultantName}}

لینک جلسه: {{meetingLink}}

لطفاً 15 دقیقه قبل از جلسه آماده باشید.

با تشکر،
تیم اپلای‌گرافی
    `,
    htmlContent: `
<!DOCTYPE html>
<html dir="rtl" lang="fa">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>تأیید رزرو مشاوره</title>
    <style>
        body {
            font-family: 'IRANSans', Tahoma, Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            direction: rtl;
            text-align: right;
            margin: 0;
            padding: 0;
            background-color: #f8fafc;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header {
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            color: white;
            padding: 40px 30px;
            text-align: center;
        }
        .content {
            padding: 40px 30px;
        }
        .booking-details {
            background-color: #f0fdf4;
            border: 2px solid #10b981;
            border-radius: 8px;
            padding: 25px;
            margin: 30px 0;
        }
        .detail-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 15px;
            padding-bottom: 10px;
            border-bottom: 1px solid #d1fae5;
        }
        .detail-label {
            font-weight: bold;
            color: #065f46;
            font-family: 'IRANSans', Tahoma, Arial, sans-serif;
        }
        .detail-value {
            color: #1f2937;
            font-family: 'IRANSans', Tahoma, Arial, sans-serif;
        }
        .meeting-link {
            background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
            color: white;
            padding: 15px 30px;
            text-decoration: none;
            border-radius: 8px;
            font-weight: bold;
            display: inline-block;
            margin: 20px 0;
            font-family: 'IRANSans', Tahoma, Arial, sans-serif;
        }
        .reminder {
            background-color: #fef3c7;
            border-right: 4px solid #f59e0b;
            padding: 20px;
            margin: 30px 0;
            border-radius: 0 8px 8px 0;
        }
        .footer {
            background-color: #1f2937;
            color: white;
            padding: 30px;
            text-align: center;
            font-family: 'IRANSans', Tahoma, Arial, sans-serif;
        }
        h1, h2, h3, h4 {
            font-family: 'IRANSans', Tahoma, Arial, sans-serif;
        }
        p, li {
            font-family: 'IRANSans', Tahoma, Arial, sans-serif;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>✅ مشاوره شما رزرو شد</h1>
            <p>آماده شوید برای یک جلسه مفید و کاربردی</p>
        </div>
        
        <div class="content">
            <p>سلام <strong>{{userName}}</strong> عزیز،</p>
            <p>مشاوره شما با موفقیت رزرو شد. در ادامه جزئیات کامل جلسه را مشاهده می‌کنید:</p>
            
            <div class="booking-details">
                <h3 style="margin-top: 0; color: #065f46;">📅 جزئیات مشاوره</h3>
                <div class="detail-row">
                    <span class="detail-label">تاریخ:</span>
                    <span class="detail-value">{{consultationDate}}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">ساعت:</span>
                    <span class="detail-value">{{consultationTime}}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">مشاور:</span>
                    <span class="detail-value">{{consultantName}}</span>
                </div>
                <div class="detail-row" style="border-bottom: none;">
                    <span class="detail-label">نوع جلسه:</span>
                    <span class="detail-value">آنلاین (ویدیو کال)</span>
                </div>
            </div>
            
            <div style="text-align: center;">
                <a href="{{meetingLink}}" class="meeting-link">
                    🎥 ورود به جلسه
                </a>
            </div>
            
            <div class="reminder">
                <h4 style="margin-top: 0;">⏰ یادآوری مهم</h4>
                <ul style="margin: 0; padding-right: 20px;">
                    <li>لطفاً 15 دقیقه قبل از جلسه آماده باشید</li>
                    <li>اتصال اینترنت پایدار داشته باشید</li>
                    <li>سوالات خود را از قبل آماده کنید</li>
                    <li>مدارک مورد نیاز را در دسترس داشته باشید</li>
                </ul>
            </div>
            
            <p style="color: #6b7280; font-size: 14px;">
                در صورت نیاز به تغییر زمان یا لغو جلسه، حداقل 24 ساعت قبل اطلاع دهید.
            </p>
        </div>
        
        <div class="footer">
            <p><strong>تیم اپلای‌گرافی</strong></p>
            <p>منتظر دیدار شما هستیم</p>
        </div>
    </div>
</body>
</html>
    `,
  },
  {
    id: "payment-confirmation",
    name: "تأیید پرداخت",
    subject: "پرداخت شما تأیید شد - {{orderNumber}}",
    category: "payment",
    variables: ["userName", "orderNumber", "amount", "serviceName", "paymentDate"],
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    textContent: `
سلام {{userName}} عزیز،

پرداخت شما با موفقیت انجام شد.

جزئیات پرداخت:
شماره سفارش: {{orderNumber}}
خدمت: {{serviceName}}
مبلغ: {{amount}} تومان
تاریخ پرداخت: {{paymentDate}}

تیم ما به زودی با شما تماس خواهد گرفت.

با تشکر،
تیم اپلای‌گرافی
    `,
    htmlContent: `
<!DOCTYPE html>
<html dir="rtl" lang="fa">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>تأیید پرداخت</title>
    <style>
        body {
            font-family: 'IRANSans', Tahoma, Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            direction: rtl;
            text-align: right;
            margin: 0;
            padding: 0;
            background-color: #f8fafc;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header {
            background: linear-gradient(135deg, #059669 0%, #047857 100%);
            color: white;
            padding: 40px 30px;
            text-align: center;
        }
        .content {
            padding: 40px 30px;
        }
        .payment-details {
            background-color: #f0fdf4;
            border: 2px solid #10b981;
            border-radius: 8px;
            padding: 25px;
            margin: 30px 0;
        }
        .detail-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 15px;
            padding-bottom: 10px;
            border-bottom: 1px solid #d1fae5;
        }
        .detail-label {
            font-weight: bold;
            color: #065f46;
            font-family: 'IRANSans', Tahoma, Arial, sans-serif;
        }
        .detail-value {
            color: #1f2937;
            font-family: 'IRANSans', Tahoma, Arial, sans-serif;
        }
        .amount {
            font-size: 24px;
            font-weight: bold;
            color: #059669;
            font-family: 'IRANSans', Tahoma, Arial, sans-serif;
        }
        .next-steps {
            background-color: #eff6ff;
            border-right: 4px solid #3b82f6;
            padding: 20px;
            margin: 30px 0;
            border-radius: 0 8px 8px 0;
        }
        .footer {
            background-color: #1f2937;
            color: white;
            padding: 30px;
            text-align: center;
            font-family: 'IRANSans', Tahoma, Arial, sans-serif;
        }
        .success-icon {
            font-size: 48px;
            margin-bottom: 20px;
        }
        h1, h2, h3, h4 {
            font-family: 'IRANSans', Tahoma, Arial, sans-serif;
        }
        p, li {
            font-family: 'IRANSans', Tahoma, Arial, sans-serif;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="success-icon">✅</div>
            <h1>پرداخت موفق</h1>
            <p>سفارش شما با موفقیت ثبت شد</p>
        </div>
        
        <div class="content">
            <p>سلام <strong>{{userName}}</strong> عزیز،</p>
            <p>پرداخت شما با موفقیت انجام شد و سفارش شما در سیستم ثبت گردید.</p>
            
            <div class="payment-details">
                <h3 style="margin-top: 0; color: #065f46;">💳 جزئیات پرداخت</h3>
                <div class="detail-row">
                    <span class="detail-label">شماره سفارش:</span>
                    <span class="detail-value">{{orderNumber}}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">خدمت:</span>
                    <span class="detail-value">{{serviceName}}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">تاریخ پرداخت:</span>
                    <span class="detail-value">{{paymentDate}}</span>
                </div>
                <div class="detail-row" style="border-bottom: none;">
                    <span class="detail-label">مبلغ پرداختی:</span>
                    <span class="detail-value amount">{{amount}} تومان</span>
                </div>
            </div>
            
            <div class="next-steps">
                <h4 style="margin-top: 0;">🚀 مراحل بعدی</h4>
                <ul style="margin: 0; padding-right: 20px;">
                    <li>تیم ما ظرف 24 ساعت با شما تماس خواهد گرفت</li>
                    <li>مشاور اختصاصی شما تعیین می‌شود</li>
                    <li>برنامه زمان‌بندی کار ارسال خواهد شد</li>
                    <li>می‌توانید پیشرفت کار را در داشبورد دنبال کنید</li>
                </ul>
            </div>
            
            <p style="color: #6b7280; font-size: 14px;">
                رسید پرداخت به ایمیل شما ارسال شده است. در صورت عدم دریافت، لطفاً پوشه اسپم را بررسی کنید.
            </p>
        </div>
        
        <div class="footer">
            <p><strong>تیم اپلای‌گرافی</strong></p>
            <p>از اعتماد شما متشکریم</p>
        </div>
    </div>
</body>
</html>
    `,
  },
  {
    id: "application-status",
    name: "وضعیت درخواست",
    subject: "به‌روزرسانی درخواست شما - {{applicationNumber}}",
    category: "application",
    variables: ["userName", "applicationNumber", "universityName", "status", "nextStep"],
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    textContent: `
سلام {{userName}} عزیز،

درخواست شما به‌روزرسانی شد.

جزئیات:
شماره درخواست: {{applicationNumber}}
دانشگاه: {{universityName}}
وضعیت فعلی: {{status}}
مرحله بعدی: {{nextStep}}

برای اطلاعات بیشتر به داشبورد خود مراجعه کنید.

با تشکر،
تیم اپلای‌گرافی
    `,
    htmlContent: `
<!DOCTYPE html>
<html dir="rtl" lang="fa">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>به‌روزرسانی درخواست</title>
    <style>
        body {
            font-family: 'IRANSans', Tahoma, Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            direction: rtl;
            text-align: right;
            margin: 0;
            padding: 0;
            background-color: #f8fafc;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header {
            background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
            color: white;
            padding: 40px 30px;
            text-align: center;
        }
        .content {
            padding: 40px 30px;
        }
        .status-card {
            background-color: #eff6ff;
            border: 2px solid #3b82f6;
            border-radius: 8px;
            padding: 25px;
            margin: 30px 0;
        }
        .status-badge {
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            color: white;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 14px;
            font-weight: bold;
            display: inline-block;
            margin-bottom: 15px;
            font-family: 'IRANSans', Tahoma, Arial, sans-serif;
        }
        .detail-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 15px;
            padding-bottom: 10px;
            border-bottom: 1px solid #dbeafe;
        }
        .detail-label {
            font-weight: bold;
            color: #1e40af;
            font-family: 'IRANSans', Tahoma, Arial, sans-serif;
        }
        .detail-value {
            color: #1f2937;
            font-family: 'IRANSans', Tahoma, Arial, sans-serif;
        }
        .progress-bar {
            background-color: #e5e7eb;
            height: 8px;
            border-radius: 4px;
            margin: 20px 0;
            overflow: hidden;
        }
        .progress-fill {
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            height: 100%;
            width: 60%;
            border-radius: 4px;
        }
        .next-step {
            background-color: #fef3c7;
            border-right: 4px solid #f59e0b;
            padding: 20px;
            margin: 30px 0;
            border-radius: 0 8px 8px 0;
        }
        .footer {
            background-color: #1f2937;
            color: white;
            padding: 30px;
            text-align: center;
            font-family: 'IRANSans', Tahoma, Arial, sans-serif;
        }
        h1, h2, h3, h4 {
            font-family: 'IRANSans', Tahoma, Arial, sans-serif;
        }
        p, li {
            font-family: 'IRANSans', Tahoma, Arial, sans-serif;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>📋 به‌روزرسانی درخواست</h1>
            <p>وضعیت جدید درخواست شما</p>
        </div>
        
        <div class="content">
            <p>سلام <strong>{{userName}}</strong> عزیز،</p>
            <p>درخواست شما به‌روزرسانی شده است. در ادامه جزئیات کامل را مشاهده کنید:</p>
            
            <div class="status-card">
                <div class="status-badge">{{status}}</div>
                <div class="detail-row">
                    <span class="detail-label">شماره درخواست:</span>
                    <span class="detail-value">{{applicationNumber}}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">دانشگاه:</span>
                    <span class="detail-value">{{universityName}}</span>
                </div>
                <div class="detail-row" style="border-bottom: none;">
                    <span class="detail-label">تاریخ به‌روزرسانی:</span>
                    <span class="detail-value">امروز</span>
                </div>
                
                <div class="progress-bar">
                    <div class="progress-fill"></div>
                </div>
                <p style="font-size: 14px; color: #6b7280; margin: 0;">پیشرفت کلی: 60%</p>
            </div>
            
            <div class="next-step">
                <h4 style="margin-top: 0;">⏭️ مرحله بعدی</h4>
                <p style="margin: 0;"><strong>{{nextStep}}</strong></p>
            </div>
            
            <p style="color: #6b7280; font-size: 14px;">
                برای مشاهده جزئیات کامل و پیگیری وضعیت، به داشبورد خود مراجعه کنید.
            </p>
        </div>
        
        <div class="footer">
            <p><strong>تیم اپلای‌گرافی</strong></p>
            <p>همیشه در کنار شما</p>
        </div>
    </div>
</body>
</html>
    `,
  },
  {
    id: "visa-approval",
    name: "تأیید ویزا",
    subject: "🎉 ویزای شما تأیید شد - {{visaType}}",
    category: "visa",
    variables: ["userName", "visaType", "country", "approvalDate", "validityPeriod"],
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    textContent: `
سلام {{userName}} عزیز،

خبر خوش! ویزای شما تأیید شد.

جزئیات ویزا:
نوع ویزا: {{visaType}}
کشور: {{country}}
تاریخ تأیید: {{approvalDate}}
مدت اعتبار: {{validityPeriod}}

تبریک می‌گوییم! مرحله مهمی از مسیر شما تکمیل شد.

با تشکر،
تیم اپلای‌گرافی
    `,
    htmlContent: `
<!DOCTYPE html>
<html dir="rtl" lang="fa">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>تأیید ویزا</title>
    <style>
        body {
            font-family: 'IRANSans', Tahoma, Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            direction: rtl;
            text-align: right;
            margin: 0;
            padding: 0;
            background-color: #f8fafc;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header {
            background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
            color: white;
            padding: 40px 30px;
            text-align: center;
        }
        .celebration {
            font-size: 60px;
            margin-bottom: 20px;
        }
        .content {
            padding: 40px 30px;
        }
        .visa-details {
            background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
            border: 2px solid #f59e0b;
            border-radius: 8px;
            padding: 25px;
            margin: 30px 0;
        }
        .detail-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 15px;
            padding-bottom: 10px;
            border-bottom: 1px solid #fed7aa;
        }
        .detail-label {
            font-weight: bold;
            color: #92400e;
            font-family: 'IRANSans', Tahoma, Arial, sans-serif;
        }
        .detail-value {
            color: #1f2937;
            font-family: 'IRANSans', Tahoma, Arial, sans-serif;
        }
        .congratulations {
            background-color: #f0fdf4;
            border: 2px solid #10b981;
            border-radius: 8px;
            padding: 25px;
            margin: 30px 0;
            text-align: center;
        }
        .next-journey {
            background-color: #eff6ff;
            border-right: 4px solid #3b82f6;
            padding: 20px;
            margin: 30px 0;
            border-radius: 0 8px 8px 0;
        }
        .footer {
            background-color: #1f2937;
            color: white;
            padding: 30px;
            text-align: center;
            font-family: 'IRANSans', Tahoma, Arial, sans-serif;
        }
        h1, h2, h3, h4 {
            font-family: 'IRANSans', Tahoma, Arial, sans-serif;
        }
        p, li {
            font-family: 'IRANSans', Tahoma, Arial, sans-serif;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="celebration">🎉</div>
            <h1>ویزای شما تأیید شد!</h1>
            <p>یک قدم بزرگ به سمت آینده‌ای روشن</p>
        </div>
        
        <div class="content">
            <p>سلام <strong>{{userName}}</strong> عزیز،</p>
            <p>خبر فوق‌العاده‌ای برای شما داریم! ویزای شما با موفقیت تأیید شده است.</p>
            
            <div class="visa-details">
                <h3 style="margin-top: 0; color: #92400e;">📄 جزئیات ویزا</h3>
                <div class="detail-row">
                    <span class="detail-label">نوع ویزا:</span>
                    <span class="detail-value">{{visaType}}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">کشور مقصد:</span>
                    <span class="detail-value">{{country}}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">تاریخ تأیید:</span>
                    <span class="detail-value">{{approvalDate}}</span>
                </div>
                <div class="detail-row" style="border-bottom: none;">
                    <span class="detail-label">مدت اعتبار:</span>
                    <span class="detail-value">{{validityPeriod}}</span>
                </div>
            </div>
            
            <div class="congratulations">
                <h3 style="color: #065f46; margin-top: 0;">🏆 تبریک می‌گوییم!</h3>
                <p style="margin: 0; font-size: 18px;">شما با موفقیت یکی از مهم‌ترین مراحل مسیر تحصیلی خود را پشت سر گذاشتید.</p>
            </div>
            
            <div class="next-journey">
                <h4 style="margin-top: 0;">✈️ آماده سفر؟</h4>
                <ul style="margin: 0; padding-right: 20px;">
                    <li>بلیط هواپیما خود را رزرو کنید</li>
                    <li>اقامت موقت را تنظیم کنید</li>
                    <li>مدارک سفر را آماده کنید</li>
                    <li>با دانشگاه برای ثبت‌نام نهایی تماس بگیرید</li>
                </ul>
            </div>
            
            <p style="color: #6b7280; font-size: 14px;">
                تیم ما همچنان برای کمک در مراحل بعدی در کنار شما خواهد بود.
            </p>
        </div>
        
        <div class="footer">
            <p><strong>تیم اپلای‌گرافی</strong></p>
            <p>مفتخر به موفقیت شما هستیم</p>
        </div>
    </div>
</body>
</html>
    `,
  },
  {
    id: "followup-reminder",
    name: "یادآوری پیگیری",
    subject: "یادآوری: {{reminderTitle}}",
    category: "followup",
    variables: ["userName", "reminderTitle", "dueDate", "actionRequired", "contactInfo"],
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    textContent: `
سلام {{userName}} عزیز،

یادآوری مهم برای شما:

موضوع: {{reminderTitle}}
مهلت: {{dueDate}}
اقدام مورد نیاز: {{actionRequired}}

لطفاً در اسرع وقت اقدام کنید.

تماس: {{contactInfo}}

با تشکر،
تیم اپلای‌گرافی
    `,
    htmlContent: `
<!DOCTYPE html>
<html dir="rtl" lang="fa">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>یادآوری مهم</title>
    <style>
        body {
            font-family: 'IRANSans', Tahoma, Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            direction: rtl;
            text-align: right;
            margin: 0;
            padding: 0;
            background-color: #f8fafc;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header {
            background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
            color: white;
            padding: 40px 30px;
            text-align: center;
        }
        .content {
            padding: 40px 30px;
        }
        .reminder-card {
            background-color: #fef2f2;
            border: 2px solid #ef4444;
            border-radius: 8px;
            padding: 25px;
            margin: 30px 0;
        }
        .urgent-badge {
            background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
            color: white;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 14px;
            font-weight: bold;
            display: inline-block;
            margin-bottom: 15px;
            font-family: 'IRANSans', Tahoma, Arial, sans-serif;
        }
        .detail-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 15px;
            padding-bottom: 10px;
            border-bottom: 1px solid #fecaca;
        }
        .detail-label {
            font-weight: bold;
            color: #991b1b;
            font-family: 'IRANSans', Tahoma, Arial, sans-serif;
        }
        .detail-value {
            color: #1f2937;
            font-family: 'IRANSans', Tahoma, Arial, sans-serif;
        }
        .action-required {
            background-color: #fef3c7;
            border: 2px solid #f59e0b;
            border-radius: 8px;
            padding: 20px;
            margin: 30px 0;
        }
        .contact-info {
            background-color: #eff6ff;
            border-right: 4px solid #3b82f6;
            padding: 20px;
            margin: 30px 0;
            border-radius: 0 8px 8px 0;
        }
        .footer {
            background-color: #1f2937;
            color: white;
            padding: 30px;
            text-align: center;
            font-family: 'IRANSans', Tahoma, Arial, sans-serif;
        }
        .clock-icon {
            font-size: 48px;
            margin-bottom: 20px;
        }
        h1, h2, h3, h4 {
            font-family: 'IRANSans', Tahoma, Arial, sans-serif;
        }
        p, li {
            font-family: 'IRANSans', Tahoma, Arial, sans-serif;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="clock-icon">⏰</div>
            <h1>یادآوری مهم</h1>
            <p>اقدام فوری مورد نیاز است</p>
        </div>
        
        <div class="content">
            <p>سلام <strong>{{userName}}</strong> عزیز،</p>
            <p>یادآوری مهمی برای شما داریم که نیاز به توجه فوری دارد:</p>
            
            <div class="reminder-card">
                <div class="urgent-badge">فوری</div>
                <div class="detail-row">
                    <span class="detail-label">موضوع:</span>
                    <span class="detail-value">{{reminderTitle}}</span>
                </div>
                <div class="detail-row" style="border-bottom: none;">
                    <span class="detail-label">مهلت:</span>
                    <span class="detail-value" style="color: #ef4444; font-weight: bold;">{{dueDate}}</span>
                </div>
            </div>
            
            <div class="action-required">
                <h4 style="margin-top: 0; color: #92400e;">📋 اقدام مورد نیاز</h4>
                <p style="margin: 0;"><strong>{{actionRequired}}</strong></p>
            </div>
            
            <div class="contact-info">
                <h4 style="margin-top: 0;">📞 تماس با ما</h4>
                <p style="margin: 0;">{{contactInfo}}</p>
                <p style="margin: 10px 0 0 0; font-size: 14px; color: #6b7280;">
                    تیم پشتیبانی ما آماده کمک به شما است
                </p>
            </div>
            
            <p style="color: #ef4444; font-weight: bold; text-align: center; font-size: 16px;">
                ⚠️ لطفاً در اسرع وقت اقدام کنید
            </p>
        </div>
        
        <div class="footer">
            <p><strong>تیم اپلای‌گرافی</strong></p>
            <p>همیشه در خدمت شما</p>
        </div>
    </div>
</body>
</html>
    `,
  },
]

export function getTemplateById(id: string): EmailTemplate | undefined {
  return emailTemplates.find((template) => template.id === id)
}

export function getTemplatesByCategory(category: EmailTemplate["category"]): EmailTemplate[] {
  return emailTemplates.filter((template) => template.category === category && template.isActive)
}

export function getAllActiveTemplates(): EmailTemplate[] {
  return emailTemplates.filter((template) => template.isActive)
}

export function renderTemplate(
  template: EmailTemplate,
  variables: Record<string, string>,
): {
  subject: string
  htmlContent: string
  textContent: string
} {
  let subject = template.subject
  let htmlContent = template.htmlContent
  let textContent = template.textContent

  // Replace variables in all content
  Object.entries(variables).forEach(([key, value]) => {
    const placeholder = `{{${key}}}`
    subject = subject.replace(new RegExp(placeholder, "g"), value)
    htmlContent = htmlContent.replace(new RegExp(placeholder, "g"), value)
    textContent = textContent.replace(new RegExp(placeholder, "g"), value)
  })

  return {
    subject,
    htmlContent,
    textContent,
  }
}
