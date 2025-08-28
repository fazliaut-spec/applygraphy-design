export interface EmailTemplate {
  id: string
  name: string
  nameEn: string
  subject: string
  subjectEn: string
  category: "welcome" | "consultation" | "payment" | "application" | "visa" | "followup"
  variables: string[]
  htmlContent: string
  textContent: string
  isActive: boolean
}

export const emailTemplates: EmailTemplate[] = [
  {
    id: "welcome-new-user",
    name: "خوشامدگویی کاربر جدید",
    nameEn: "Welcome New User",
    subject: "به اپلای‌گرافی خوش آمدید - شروع سفر تحصیلی شما",
    subjectEn: "Welcome to Applygraphy - Start Your Academic Journey",
    category: "welcome",
    variables: ["firstName", "lastName", "email"],
    htmlContent: `
      <!DOCTYPE html>
      <html dir="rtl" lang="fa">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>خوش آمدید</title>
        <style>
          body { font-family: 'Tahoma', Arial, sans-serif; margin: 0; padding: 0; background-color: #f8fafc; }
          .container { max-width: 600px; margin: 0 auto; background: white; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 20px; text-align: center; }
          .header h1 { color: white; margin: 0; font-size: 28px; }
          .content { padding: 40px 30px; }
          .welcome-text { font-size: 18px; line-height: 1.8; color: #374151; margin-bottom: 30px; }
          .features { background: #f8fafc; padding: 30px; border-radius: 12px; margin: 30px 0; }
          .feature-item { display: flex; align-items: center; margin: 15px 0; }
          .feature-icon { width: 24px; height: 24px; margin-left: 15px; }
          .cta-button { display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 20px 0; }
          .footer { background: #1f2937; color: white; padding: 30px; text-align: center; }
          .social-links { margin: 20px 0; }
          .social-links a { color: #60a5fa; margin: 0 10px; text-decoration: none; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎓 به اپلای‌گرافی خوش آمدید</h1>
          </div>
          
          <div class="content">
            <div class="welcome-text">
              <p>سلام {{firstName}} عزیز،</p>
              
              <p>از اینکه به خانواده بزرگ اپلای‌گرافی پیوستید بسیار خوشحالیم! شما اکنون عضو یکی از معتبرترین پلتفرم‌های مشاوره تحصیلی در ایران هستید.</p>
              
              <p>ما اینجا هستیم تا شما را در هر مرحله از سفر تحصیلی‌تان همراهی کنیم - از انتخاب رشته و دانشگاه گرفته تا دریافت ویزا و شروع زندگی جدید.</p>
            </div>

            <div class="features">
              <h3>🌟 خدمات ویژه ما برای شما:</h3>
              
              <div class="feature-item">
                <span class="feature-icon">🤖</span>
                <span>مشاوره هوشمند AI برای انتخاب بهترین دانشگاه</span>
              </div>
              
              <div class="feature-item">
                <span class="feature-icon">📚</span>
                <span>جستجوی پیشرفته در بیش از 10,000 دانشگاه جهان</span>
              </div>
              
              <div class="feature-item">
                <span class="feature-icon">📝</span>
                <span>مشاوره تخصصی برای تهیه مدارک و درخواست</span>
              </div>
              
              <div class="feature-item">
                <span class="feature-icon">✈️</span>
                <span>راهنمایی کامل برای اخذ ویزا و سفر</span>
              </div>
              
              <div class="feature-item">
                <span class="feature-icon">💬</span>
                <span>پشتیبانی 24/7 از تیم متخصص ما</span>
              </div>
            </div>

            <div style="text-align: center;">
              <a href="https://applygraphy.com/dashboard" class="cta-button">
                🚀 شروع سفر تحصیلی
              </a>
            </div>

            <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 30px 0; border-right: 4px solid #f59e0b;">
              <h4 style="color: #92400e; margin: 0 0 10px 0;">💡 نکته مهم:</h4>
              <p style="color: #92400e; margin: 0;">برای بهره‌مندی کامل از خدمات ما، حتماً پروفایل خود را تکمیل کنید تا بتوانیم بهترین پیشنهادات را برای شما ارائه دهیم.</p>
            </div>
          </div>

          <div class="footer">
            <p><strong>تیم اپلای‌گرافی</strong></p>
            <p>همراه شما در مسیر موفقیت تحصیلی</p>
            
            <div class="social-links">
              <a href="https://t.me/applygraphy">تلگرام</a> |
              <a href="https://instagram.com/applygraphy">اینستاگرام</a> |
              <a href="https://applygraphy.com">وب‌سایت</a>
            </div>
            
            <p style="font-size: 12px; color: #9ca3af; margin-top: 20px;">
              این ایمیل به آدرس {{email}} ارسال شده است.<br>
              اگر نمی‌خواهید ایمیل‌های ما را دریافت کنید، <a href="#" style="color: #60a5fa;">اینجا کلیک کنید</a>.
            </p>
          </div>
        </div>
      </body>
      </html>
    `,
    textContent: `
سلام {{firstName}} عزیز،

از اینکه به خانواده بزرگ اپلای‌گرافی پیوستید بسیار خوشحالیم!

خدمات ویژه ما:
- مشاوره هوشمند AI
- جستجوی پیشرفته دانشگاه‌ها
- مشاوره تخصصی مدارک
- راهنمایی اخذ ویزا
- پشتیبانی 24/7

برای شروع به آدرس زیر مراجعه کنید:
https://applygraphy.com/dashboard

تیم اپلای‌گرافی
    `,
    isActive: true,
  },

  {
    id: "consultation-request",
    name: "تأیید درخواست مشاوره",
    nameEn: "Consultation Request Confirmation",
    subject: "درخواست مشاوره شما دریافت شد - {{serviceType}}",
    subjectEn: "Your Consultation Request Received - {{serviceType}}",
    category: "consultation",
    variables: ["firstName", "lastName", "serviceType", "requestDate", "consultantName"],
    htmlContent: `
      <!DOCTYPE html>
      <html dir="rtl" lang="fa">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>تأیید درخواست مشاوره</title>
        <style>
          body { font-family: 'Tahoma', Arial, sans-serif; margin: 0; padding: 0; background-color: #f8fafc; }
          .container { max-width: 600px; margin: 0 auto; background: white; }
          .header { background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 40px 20px; text-align: center; }
          .header h1 { color: white; margin: 0; font-size: 28px; }
          .content { padding: 40px 30px; }
          .status-badge { background: #d1fae5; color: #065f46; padding: 8px 16px; border-radius: 20px; font-weight: bold; display: inline-block; margin: 20px 0; }
          .info-box { background: #f0f9ff; border: 1px solid #0ea5e9; border-radius: 8px; padding: 20px; margin: 20px 0; }
          .next-steps { background: #fef3c7; border-right: 4px solid #f59e0b; padding: 20px; margin: 20px 0; }
          .contact-info { background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0; }
          .footer { background: #1f2937; color: white; padding: 30px; text-align: center; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>✅ درخواست شما ثبت شد</h1>
          </div>
          
          <div class="content">
            <p>سلام {{firstName}} عزیز،</p>
            
            <div class="status-badge">
              🎯 درخواست مشاوره تأیید شد
            </div>
            
            <p>درخواست مشاوره شما برای <strong>{{serviceType}}</strong> با موفقیت دریافت و ثبت شد. تیم متخصص ما در حال بررسی درخواست شما است.</p>

            <div class="info-box">
              <h3>📋 جزئیات درخواست:</h3>
              <ul>
                <li><strong>نوع خدمت:</strong> {{serviceType}}</li>
                <li><strong>تاریخ درخواست:</strong> {{requestDate}}</li>
                <li><strong>مشاور مسئول:</strong> {{consultantName}}</li>
                <li><strong>وضعیت:</strong> در حال بررسی</li>
              </ul>
            </div>

            <div class="next-steps">
              <h3>🔄 مراحل بعدی:</h3>
              <ol>
                <li>بررسی درخواست توسط تیم متخصص (1-2 روز کاری)</li>
                <li>تماس مشاور برای هماهنگی جلسه</li>
                <li>ارائه پیشنهاد تخصصی و برنامه کاری</li>
                <li>شروع فرآیند مشاوره</li>
              </ol>
            </div>

            <div class="contact-info">
              <h3>📞 اطلاعات تماس:</h3>
              <p><strong>مشاور مسئول:</strong> {{consultantName}}</p>
              <p><strong>تلفن پشتیبانی:</strong> 021-1234-5678</p>
              <p><strong>ایمیل:</strong> support@applygraphy.com</p>
              <p><strong>ساعات کاری:</strong> شنبه تا چهارشنبه، 9 صبح تا 6 عصر</p>
            </div>

            <div style="text-align: center; margin: 30px 0;">
              <a href="https://applygraphy.com/dashboard/applications" style="display: inline-block; background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold;">
                📊 مشاهده وضعیت درخواست
              </a>
            </div>
          </div>

          <div class="footer">
            <p><strong>تیم مشاوره اپلای‌گرافی</strong></p>
            <p>همراه شما در مسیر موفقیت</p>
          </div>
        </div>
      </body>
      </html>
    `,
    textContent: `
سلام {{firstName}} عزیز،

درخواست مشاوره شما برای {{serviceType}} با موفقیت ثبت شد.

جزئیات درخواست:
- نوع خدمت: {{serviceType}}
- تاریخ درخواست: {{requestDate}}
- مشاور مسئول: {{consultantName}}

مراحل بعدی:
1. بررسی درخواست (1-2 روز کاری)
2. تماس مشاور
3. ارائه پیشنهاد
4. شروع مشاوره

تماس: 021-1234-5678
ایمیل: support@applygraphy.com

تیم اپلای‌گرافی
    `,
    isActive: true,
  },

  {
    id: "payment-confirmation",
    name: "تأیید پرداخت",
    nameEn: "Payment Confirmation",
    subject: "پرداخت شما تأیید شد - {{amount}} تومان",
    subjectEn: "Payment Confirmed - {{amount}} Toman",
    category: "payment",
    variables: ["firstName", "lastName", "amount", "serviceName", "transactionId", "paymentDate"],
    htmlContent: `
      <!DOCTYPE html>
      <html dir="rtl" lang="fa">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>تأیید پرداخت</title>
        <style>
          body { font-family: 'Tahoma', Arial, sans-serif; margin: 0; padding: 0; background-color: #f8fafc; }
          .container { max-width: 600px; margin: 0 auto; background: white; }
          .header { background: linear-gradient(135deg, #059669 0%, #047857 100%); padding: 40px 20px; text-align: center; }
          .header h1 { color: white; margin: 0; font-size: 28px; }
          .content { padding: 40px 30px; }
          .success-badge { background: #d1fae5; color: #065f46; padding: 12px 20px; border-radius: 25px; font-weight: bold; display: inline-block; margin: 20px 0; font-size: 16px; }
          .payment-details { background: #f0f9ff; border: 2px solid #0ea5e9; border-radius: 12px; padding: 25px; margin: 25px 0; }
          .detail-row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #e5e7eb; }
          .detail-row:last-child { border-bottom: none; }
          .detail-label { font-weight: bold; color: #374151; }
          .detail-value { color: #059669; font-weight: bold; }
          .next-steps { background: #fef3c7; border-right: 4px solid #f59e0b; padding: 20px; margin: 20px 0; border-radius: 8px; }
          .footer { background: #1f2937; color: white; padding: 30px; text-align: center; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>💳 پرداخت موفق</h1>
          </div>
          
          <div class="content">
            <p>سلام {{firstName}} عزیز،</p>
            
            <div class="success-badge">
              ✅ پرداخت با موفقیت انجام شد
            </div>
            
            <p>پرداخت شما برای خدمات <strong>{{serviceName}}</strong> با موفقیت تأیید شد. از اعتماد شما به اپلای‌گرافی متشکریم.</p>

            <div class="payment-details">
              <h3 style="margin-top: 0; color: #1f2937;">📄 جزئیات پرداخت</h3>
              
              <div class="detail-row">
                <span class="detail-label">مبلغ پرداختی:</span>
                <span class="detail-value">{{amount}} تومان</span>
              </div>
              
              <div class="detail-row">
                <span class="detail-label">خدمت خریداری شده:</span>
                <span class="detail-value">{{serviceName}}</span>
              </div>
              
              <div class="detail-row">
                <span class="detail-label">شماره تراکنش:</span>
                <span class="detail-value">{{transactionId}}</span>
              </div>
              
              <div class="detail-row">
                <span class="detail-label">تاریخ پرداخت:</span>
                <span class="detail-value">{{paymentDate}}</span>
              </div>
              
              <div class="detail-row">
                <span class="detail-label">وضعیت:</span>
                <span class="detail-value">تأیید شده ✅</span>
              </div>
            </div>

            <div class="next-steps">
              <h3>🚀 مراحل بعدی:</h3>
              <ul>
                <li>تیم ما ظرف 24 ساعت با شما تماس خواهد گرفت</li>
                <li>جلسه مشاوره اولیه برنامه‌ریزی خواهد شد</li>
                <li>فایل‌های مورد نیاز از طریق پنل کاربری ارسال کنید</li>
                <li>پیگیری مراحل از طریق داشبورد شخصی</li>
              </ul>
            </div>

            <div style="text-align: center; margin: 30px 0;">
              <a href="https://applygraphy.com/dashboard" style="display: inline-block; background: linear-gradient(135deg, #059669 0%, #047857 100%); color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 10px;">
                📊 مشاهده داشبورد
              </a>
              
              <a href="https://applygraphy.com/invoice/{{transactionId}}" style="display: inline-block; background: #6b7280; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 10px;">
                🧾 دانلود فاکتور
              </a>
            </div>

            <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h4 style="color: #374151; margin: 0 0 10px 0;">📞 نیاز به کمک دارید؟</h4>
              <p style="margin: 0; color: #6b7280;">تیم پشتیبانی ما آماده کمک به شما است:</p>
              <p style="margin: 5px 0 0 0; color: #374151;"><strong>تلفن:</strong> 021-1234-5678 | <strong>ایمیل:</strong> support@applygraphy.com</p>
            </div>
          </div>

          <div class="footer">
            <p><strong>تیم اپلای‌گرافی</strong></p>
            <p>همراه شما در مسیر موفقیت تحصیلی</p>
          </div>
        </div>
      </body>
      </html>
    `,
    textContent: `
سلام {{firstName}} عزیز،

پرداخت شما با موفقیت تأیید شد.

جزئیات پرداخت:
- مبلغ: {{amount}} تومان
- خدمت: {{serviceName}}
- شماره تراکنش: {{transactionId}}
- تاریخ: {{paymentDate}}

مراحل بعدی:
- تماس تیم ما ظرف 24 ساعت
- برنامه‌ریزی جلسه مشاوره
- ارسال مدارک از پنل کاربری

داشبورد: https://applygraphy.com/dashboard
فاکتور: https://applygraphy.com/invoice/{{transactionId}}

تیم اپلای‌گرافی
    `,
    isActive: true,
  },

  {
    id: "visa-approval",
    name: "تبریک تأیید ویزا",
    nameEn: "Visa Approval Congratulations",
    subject: "🎉 تبریک! ویزای شما تأیید شد - {{country}}",
    subjectEn: "🎉 Congratulations! Your Visa Approved - {{country}}",
    category: "visa",
    variables: ["firstName", "lastName", "country", "university", "visaType", "approvalDate"],
    htmlContent: `
      <!DOCTYPE html>
      <html dir="rtl" lang="fa">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>تبریک تأیید ویزا</title>
        <style>
          body { font-family: 'Tahoma', Arial, sans-serif; margin: 0; padding: 0; background-color: #f8fafc; }
          .container { max-width: 600px; margin: 0 auto; background: white; }
          .header { background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); padding: 40px 20px; text-align: center; position: relative; overflow: hidden; }
          .header::before { content: '🎉'; position: absolute; top: 10px; left: 20px; font-size: 30px; animation: bounce 2s infinite; }
          .header::after { content: '🎊'; position: absolute; top: 10px; right: 20px; font-size: 30px; animation: bounce 2s infinite 0.5s; }
          .header h1 { color: white; margin: 0; font-size: 32px; }
          .content { padding: 40px 30px; }
          .celebration { text-align: center; background: linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%); padding: 30px; border-radius: 15px; margin: 20px 0; }
          .celebration h2 { color: #92400e; margin: 0 0 15px 0; font-size: 24px; }
          .visa-details { background: #f0f9ff; border: 2px solid #0ea5e9; border-radius: 12px; padding: 25px; margin: 25px 0; }
          .detail-item { display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid #e5e7eb; }
          .detail-item:last-child { border-bottom: none; }
          .next-steps { background: #d1fae5; border-right: 4px solid #10b981; padding: 25px; margin: 25px 0; border-radius: 8px; }
          .important-note { background: #fef2f2; border: 1px solid #fca5a5; padding: 20px; border-radius: 8px; margin: 20px 0; }
          .footer { background: #1f2937; color: white; padding: 30px; text-align: center; }
          @keyframes bounce { 0%, 20%, 50%, 80%, 100% { transform: translateY(0); } 40% { transform: translateY(-10px); } 60% { transform: translateY(-5px); } }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎉 تبریک باشد! 🎉</h1>
          </div>
          
          <div class="content">
            <div class="celebration">
              <h2>ویزای شما تأیید شد! 🎊</h2>
              <p style="font-size: 18px; color: #92400e; margin: 0;">{{firstName}} عزیز، رویای تحصیل در {{country}} به واقعیت پیوست!</p>
            </div>
            
            <p>با کمال افتخار اعلام می‌کنیم که درخواست ویزای شما برای تحصیل در <strong>{{university}}</strong> در کشور <strong>{{country}}</strong> با موفقیت تأیید شده است.</p>

            <div class="visa-details">
              <h3 style="margin-top: 0; color: #1f2937;">📋 جزئیات ویزا</h3>
              
              <div class="detail-item">
                <span style="font-weight: bold; color: #374151;">کشور مقصد:</span>
                <span style="color: #059669; font-weight: bold;">{{country}} 🌍</span>
              </div>
              
              <div class="detail-item">
                <span style="font-weight: bold; color: #374151;">دانشگاه:</span>
                <span style="color: #059669; font-weight: bold;">{{university}} 🏛️</span>
              </div>
              
              <div class="detail-item">
                <span style="font-weight: bold; color: #374151;">نوع ویزا:</span>
                <span style="color: #059669; font-weight: bold;">{{visaType}} 📄</span>
              </div>
              
              <div class="detail-item">
                <span style="font-weight: bold; color: #374151;">تاریخ تأیید:</span>
                <span style="color: #059669; font-weight: bold;">{{approvalDate}} 📅</span>
              </div>
              
              <div class="detail-item">
                <span style="font-weight: bold; color: #374151;">وضعیت:</span>
                <span style="color: #059669; font-weight: bold;">تأیید شده ✅</span>
              </div>
            </div>

            <div class="next-steps">
              <h3>🚀 مراحل بعدی مهم:</h3>
              <ol>
                <li><strong>دریافت ویزا:</strong> به سفارتخانه مراجعه کنید (ظرف 7 روز)</li>
                <li><strong>رزرو بلیط:</strong> پرواز خود را رزرو کنید</li>
                <li><strong>اسکان:</strong> محل اقامت را نهایی کنید</li>
                <li><strong>بیمه:</strong> بیمه سفر و تحصیل تهیه کنید</li>
                <li><strong>ارز:</strong> ارز مورد نیاز را تأمین کنید</li>
                <li><strong>مدارک:</strong> تمام مدارک را ترجمه و تأیید کنید</li>
              </ol>
            </div>

            <div class="important-note">
              <h4 style="color: #dc2626; margin: 0 0 10px 0;">⚠️ نکات مهم:</h4>
              <ul style="color: #dc2626; margin: 0;">
                <li>حتماً ظرف مهلت تعیین شده به سفارتخانه مراجعه کنید</li>
                <li>تمام مدارک اصلی را همراه داشته باشید</li>
                <li>برای هر گونه سؤال با تیم ما تماس بگیرید</li>
              </ul>
            </div>

            <div style="text-align: center; margin: 30px 0;">
              <a href="https://applygraphy.com/dashboard/visa" style="display: inline-block; background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 10px;">
                📋 راهنمای کامل سفر
              </a>
              
              <a href="https://applygraphy.com/support" style="display: inline-block; background: #059669; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 10px;">
                💬 تماس با پشتیبانی
              </a>
            </div>

            <div style="background: #f0f9ff; padding: 25px; border-radius: 12px; text-align: center; margin: 30px 0;">
              <h3 style="color: #1e40af; margin: 0 0 15px 0;">🎓 آماده برای شروع ماجراجویی جدید؟</h3>
              <p style="color: #1e40af; margin: 0; font-size: 16px;">تیم اپلای‌گرافی همچنان در کنار شما خواهد بود. موفق باشید!</p>
            </div>
          </div>

          <div class="footer">
            <p><strong>تیم اپلای‌گرافی</strong></p>
            <p>🌟 مفتخر به موفقیت شما هستیم 🌟</p>
            <p style="font-size: 14px; margin-top: 15px;">تلفن: 021-1234-5678 | ایمیل: support@applygraphy.com</p>
          </div>
        </div>
      </body>
      </html>
    `,
    textContent: `
🎉 تبریک {{firstName}} عزیز!

ویزای شما برای تحصیل در {{country}} تأیید شد!

جزئیات ویزا:
- کشور: {{country}}
- دانشگاه: {{university}}
- نوع ویزا: {{visaType}}
- تاریخ تأیید: {{approvalDate}}

مراحل بعدی:
1. دریافت ویزا از سفارتخانه (7 روز)
2. رزرو بلیط پرواز
3. نهایی کردن اسکان
4. تهیه بیمه
5. تأمین ارز
6. آماده‌سازی مدارک

تماس: 021-1234-5678
ایمیل: support@applygraphy.com

تیم اپلای‌گرافی - مفتخر به موفقیت شما
    `,
    isActive: true,
  },

  {
    id: "application-update",
    name: "به‌روزرسانی وضعیت درخواست",
    nameEn: "Application Status Update",
    subject: "به‌روزرسانی درخواست: {{applicationTitle}} - {{status}}",
    subjectEn: "Application Update: {{applicationTitle}} - {{status}}",
    category: "application",
    variables: ["firstName", "lastName", "applicationTitle", "status", "updateDate", "nextStep"],
    htmlContent: `
      <!DOCTYPE html>
      <html dir="rtl" lang="fa">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>به‌روزرسانی درخواست</title>
        <style>
          body { font-family: 'Tahoma', Arial, sans-serif; margin: 0; padding: 0; background-color: #f8fafc; }
          .container { max-width: 600px; margin: 0 auto; background: white; }
          .header { background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); padding: 40px 20px; text-align: center; }
          .header h1 { color: white; margin: 0; font-size: 28px; }
          .content { padding: 40px 30px; }
          .status-update { background: #f0f9ff; border: 2px solid #3b82f6; border-radius: 12px; padding: 25px; margin: 25px 0; text-align: center; }
          .status-badge { background: #dbeafe; color: #1e40af; padding: 12px 20px; border-radius: 25px; font-weight: bold; display: inline-block; margin: 15px 0; }
          .timeline { background: #f9fafb; padding: 25px; border-radius: 8px; margin: 20px 0; }
          .timeline-item { display: flex; align-items: center; margin: 15px 0; }
          .timeline-icon { width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-left: 15px; font-weight: bold; }
          .completed { background: #10b981; color: white; }
          .current { background: #3b82f6; color: white; }
          .pending { background: #e5e7eb; color: #6b7280; }
          .next-action { background: #fef3c7; border-right: 4px solid #f59e0b; padding: 20px; margin: 20px 0; border-radius: 8px; }
          .footer { background: #1f2937; color: white; padding: 30px; text-align: center; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>📋 به‌روزرسانی درخواست</h1>
          </div>
          
          <div class="content">
            <p>سلام {{firstName}} عزیز،</p>
            
            <div class="status-update">
              <h2 style="color: #1e40af; margin: 0 0 15px 0;">{{applicationTitle}}</h2>
              <div class="status-badge">
                📊 وضعیت جدید: {{status}}
              </div>
              <p style="color: #374151; margin: 15px 0 0 0;">تاریخ به‌روزرسانی: {{updateDate}}</p>
            </div>
            
            <p>وضعیت درخواست شما به‌روزرسانی شد. در ادامه جزئیات کامل و مراحل بعدی را مشاهده کنید.</p>

            <div class="timeline">
              <h3 style="margin-top: 0; color: #374151;">🔄 مراحل پردازش:</h3>
              
              <div class="timeline-item">
                <div class="timeline-icon completed">✓</div>
                <span>دریافت و بررسی اولیه درخواست</span>
              </div>
              
              <div class="timeline-item">
                <div class="timeline-icon completed">✓</div>
                <span>تأیید مدارک و اطلاعات</span>
              </div>
              
              <div class="timeline-item">
                <div class="timeline-icon current">●</div>
                <span><strong>{{status}}</strong> (مرحله فعلی)</span>
              </div>
              
              <div class="timeline-item">
                <div class="timeline-icon pending">○</div>
                <span>بررسی نهایی و تأیید</span>
              </div>
              
              <div class="timeline-item">
                <div class="timeline-icon pending">○</div>
                <span>ارسال نتیجه نهایی</span>
              </div>
            </div>

            <div class="next-action">
              <h3>🎯 اقدام بعدی:</h3>
              <p><strong>{{nextStep}}</strong></p>
              <p>لطفاً برای ادامه فرآیند، اقدامات لازم را انجام دهید. در صورت نیاز به راهنمایی، با تیم پشتیبانی تماس بگیرید.</p>
            </div>

            <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h4 style="color: #374151; margin: 0 0 10px 0;">📞 نیاز به کمک؟</h4>
              <p style="margin: 0; color: #6b7280;">تیم پشتیبانی ما آماده پاسخگویی است:</p>
              <p style="margin: 5px 0 0 0; color: #374151;"><strong>تلفن:</strong> 021-1234-5678 | <strong>ایمیل:</strong> support@applygraphy.com</p>
            </div>

            <div style="text-align: center; margin: 30px 0;">
              <a href="https://applygraphy.com/dashboard/applications" style="display: inline-block; background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold;">
                📊 مشاهده جزئیات کامل
              </a>
            </div>
          </div>

          <div class="footer">
            <p><strong>تیم اپلای‌گرافی</strong></p>
            <p>همراه شما در تمام مراحل</p>
          </div>
        </div>
      </body>
      </html>
    `,
    textContent: `
سلام {{firstName}} عزیز،

وضعیت درخواست شما به‌روزرسانی شد:

درخواست: {{applicationTitle}}
وضعیت جدید: {{status}}
تاریخ: {{updateDate}}

اقدام بعدی: {{nextStep}}

برای مشاهده جزئیات کامل:
https://applygraphy.com/dashboard/applications

تماس: 021-1234-5678
ایمیل: support@applygraphy.com

تیم اپلای‌گرافی
    `,
    isActive: true,
  },
]

export const getTemplateById = (id: string): EmailTemplate | undefined => {
  return emailTemplates.find((template) => template.id === id)
}

export const getTemplatesByCategory = (category: EmailTemplate["category"]): EmailTemplate[] => {
  return emailTemplates.filter((template) => template.category === category && template.isActive)
}

export const getAllActiveTemplates = (): EmailTemplate[] => {
  return emailTemplates.filter((template) => template.isActive)
}

export const renderTemplate = (
  template: EmailTemplate,
  variables: Record<string, string>,
): { html: string; text: string; subject: string } => {
  let html = template.htmlContent
  let text = template.textContent
  let subject = template.subject

  // Replace variables in all content
  Object.entries(variables).forEach(([key, value]) => {
    const placeholder = `{{${key}}}`
    html = html.replace(new RegExp(placeholder, "g"), value)
    text = text.replace(new RegExp(placeholder, "g"), value)
    subject = subject.replace(new RegExp(placeholder, "g"), value)
  })

  return { html, text, subject }
}
