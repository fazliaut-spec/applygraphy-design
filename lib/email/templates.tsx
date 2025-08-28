export interface EmailTemplate {
  id: string
  name: string
  subject: string
  content: string
  variables: string[]
  category: "welcome" | "consultation" | "follow-up" | "payment" | "application" | "visa"
  isActive: boolean
}

export const emailTemplates: EmailTemplate[] = [
  {
    id: "welcome-new-customer",
    name: "خوشامدگویی به مشتری جدید",
    subject: "خوش آمدید به Applygraphy - آماده همراهی شما هستیم",
    category: "welcome",
    isActive: true,
    variables: ["customerName", "serviceType"],
    content: `
<!DOCTYPE html>
<html dir="rtl" lang="fa">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>خوش آمدید به Applygraphy</title>
    <style>
        body { font-family: 'Tahoma', Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f4f4; }
        .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
        .header { text-align: center; padding: 20px 0; border-bottom: 3px solid #FF6A5C; margin-bottom: 30px; }
        .logo { font-size: 28px; font-weight: bold; color: #02153D; margin-bottom: 10px; }
        .tagline { color: #666; font-size: 14px; }
        .content { padding: 20px 0; }
        .greeting { font-size: 18px; color: #02153D; margin-bottom: 20px; }
        .main-text { margin-bottom: 25px; line-height: 1.8; }
        .highlight-box { background: linear-gradient(135deg, #FF6A5C10, #02153D10); padding: 20px; border-radius: 8px; margin: 20px 0; border-right: 4px solid #FF6A5C; }
        .services-list { background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .service-item { display: flex; align-items: center; margin: 10px 0; }
        .service-icon { width: 20px; height: 20px; background-color: #FF6A5C; border-radius: 50%; margin-left: 10px; }
        .cta-button { display: inline-block; background-color: #FF6A5C; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; margin: 20px 0; }
        .contact-info { background-color: #02153D; color: white; padding: 20px; border-radius: 8px; margin: 30px 0; }
        .footer { text-align: center; padding: 20px 0; border-top: 1px solid #eee; margin-top: 30px; color: #666; font-size: 12px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">Applygraphy</div>
            <div class="tagline">همراه شما در مسیر تحصیل در خارج</div>
        </div>
        
        <div class="content">
            <div class="greeting">سلام {{customerName}} عزیز،</div>
            
            <div class="main-text">
                از اینکه Applygraphy را برای {{serviceType}} انتخاب کرده‌اید، بسیار خوشحالیم. ما متعهد هستیم که بهترین خدمات و مشاوره را به شما ارائه دهیم.
            </div>
            
            <div class="highlight-box">
                <strong>چرا Applygraphy؟</strong><br>
                ✅ بیش از 5 سال تجربه در زمینه مشاوره تحصیلی<br>
                ✅ همکاری با بیش از 200 دانشگاه معتبر جهان<br>
                ✅ نرخ موفقیت بالای 95% در پذیرش دانشجویان<br>
                ✅ پشتیبانی 24/7 در تمام مراحل
            </div>
            
            <div class="services-list">
                <h3>خدمات ما شامل:</h3>
                <div class="service-item">
                    <div class="service-icon"></div>
                    <span>مشاوره انتخاب رشته و دانشگاه</span>
                </div>
                <div class="service-item">
                    <div class="service-icon"></div>
                    <span>تهیه و تنظیم مدارک درخواستی</span>
                </div>
                <div class="service-item">
                    <div class="service-icon"></div>
                    <span>راهنمایی برای آزمون‌های بین‌المللی</span>
                </div>
                <div class="service-item">
                    <div class="service-icon"></div>
                    <span>مشاوره ویزا و اقامت</span>
                </div>
                <div class="service-item">
                    <div class="service-icon"></div>
                    <span>پشتیبانی پس از پذیرش</span>
                </div>
            </div>
            
            <div class="main-text">
                تیم متخصص ما آماده است تا در اسرع وقت با شما تماس بگیرد و فرآیند مشاوره را آغاز کند. لطفاً منتظر تماس ما باشید.
            </div>
            
            <div class="contact-info">
                <h3>اطلاعات تماس:</h3>
                📧 ایمیل: support@applygraphy.com<br>
                📱 تلگرام: @ApplygraphySupport<br>
                🌐 وب‌سایت: www.applygraphy.com
            </div>
        </div>
        
        <div class="footer">
            © 2024 Applygraphy. تمامی حقوق محفوظ است.<br>
            این ایمیل به صورت خودکار ارسال شده است. لطفاً به آن پاسخ ندهید.
        </div>
    </div>
</body>
</html>
    `,
  },
  {
    id: "consultation-request-received",
    name: "تأیید دریافت درخواست مشاوره",
    subject: "درخواست مشاوره شما دریافت شد - Applygraphy",
    category: "consultation",
    isActive: true,
    variables: ["customerName", "serviceType", "requestId", "responseTime"],
    content: `
<!DOCTYPE html>
<html dir="rtl" lang="fa">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>تأیید دریافت درخواست</title>
    <style>
        body { font-family: 'Tahoma', Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f4f4; }
        .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
        .header { text-align: center; padding: 20px 0; border-bottom: 3px solid #FF6A5C; margin-bottom: 30px; }
        .logo { font-size: 28px; font-weight: bold; color: #02153D; margin-bottom: 10px; }
        .status-badge { background-color: #4CAF50; color: white; padding: 8px 16px; border-radius: 20px; font-size: 14px; display: inline-block; margin: 10px 0; }
        .request-details { background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .detail-row { display: flex; justify-content: space-between; margin: 10px 0; padding: 8px 0; border-bottom: 1px solid #eee; }
        .detail-label { font-weight: bold; color: #02153D; }
        .timeline { background: linear-gradient(135deg, #FF6A5C10, #02153D10); padding: 20px; border-radius: 8px; margin: 20px 0; }
        .timeline-item { display: flex; align-items: center; margin: 15px 0; }
        .timeline-number { width: 30px; height: 30px; background-color: #FF6A5C; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-left: 15px; }
        .contact-info { background-color: #02153D; color: white; padding: 20px; border-radius: 8px; margin: 30px 0; }
        .footer { text-align: center; padding: 20px 0; border-top: 1px solid #eee; margin-top: 30px; color: #666; font-size: 12px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">Applygraphy</div>
            <div class="status-badge">✓ درخواست دریافت شد</div>
        </div>
        
        <div class="content">
            <h2>سلام {{customerName}} عزیز،</h2>
            
            <p>درخواست مشاوره شما با موفقیت دریافت شد و در حال بررسی توسط تیم متخصص ما است.</p>
            
            <div class="request-details">
                <h3>جزئیات درخواست:</h3>
                <div class="detail-row">
                    <span class="detail-label">شماره درخواست:</span>
                    <span>{{requestId}}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">نوع خدمت:</span>
                    <span>{{serviceType}}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">زمان دریافت:</span>
                    <span>{{requestTime}}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">زمان پاسخ تقریبی:</span>
                    <span>{{responseTime}}</span>
                </div>
            </div>
            
            <div class="timeline">
                <h3>مراحل بعدی:</h3>
                <div class="timeline-item">
                    <div class="timeline-number">1</div>
                    <div>
                        <strong>بررسی درخواست</strong><br>
                        <small>تیم ما درخواست شما را به دقت بررسی می‌کند</small>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-number">2</div>
                    <div>
                        <strong>تماس مشاور</strong><br>
                        <small>مشاور متخصص با شما تماس خواهد گرفت</small>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-number">3</div>
                    <div>
                        <strong>ارائه پیشنهاد</strong><br>
                        <small>بهترین گزینه‌ها و برنامه کاری ارائه می‌شود</small>
                    </div>
                </div>
            </div>
            
            <p><strong>نکته مهم:</strong> لطفاً تلفن خود را در دسترس نگه دارید تا مشاور ما بتواند در اسرع وقت با شما تماس بگیرد.</p>
            
            <div class="contact-info">
                <h3>در صورت نیاز به تماس فوری:</h3>
                📧 ایمیل: support@applygraphy.com<br>
                📱 تلگرام: @ApplygraphySupport<br>
                🌐 وب‌سایت: www.applygraphy.com
            </div>
        </div>
        
        <div class="footer">
            © 2024 Applygraphy. تمامی حقوق محفوظ است.<br>
            شماره درخواست: {{requestId}}
        </div>
    </div>
</body>
</html>
    `,
  },
  {
    id: "consultation-proposal",
    name: "ارائه پیشنهاد مشاوره",
    subject: "پیشنهاد ویژه برای {{customerName}} - Applygraphy",
    category: "consultation",
    isActive: true,
    variables: ["customerName", "serviceType", "proposalDetails", "price", "timeline", "consultantName"],
    content: `
<!DOCTYPE html>
<html dir="rtl" lang="fa">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>پیشنهاد مشاوره</title>
    <style>
        body { font-family: 'Tahoma', Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f4f4; }
        .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
        .header { text-align: center; padding: 20px 0; border-bottom: 3px solid #FF6A5C; margin-bottom: 30px; }
        .logo { font-size: 28px; font-weight: bold; color: #02153D; margin-bottom: 10px; }
        .proposal-badge { background: linear-gradient(135deg, #FF6A5C, #FF8A7C); color: white; padding: 10px 20px; border-radius: 25px; font-size: 16px; display: inline-block; margin: 10px 0; }
        .consultant-info { background-color: #f0f8ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-right: 4px solid #FF6A5C; }
        .proposal-details { background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .price-box { background: linear-gradient(135deg, #4CAF50, #45a049); color: white; padding: 20px; border-radius: 8px; text-align: center; margin: 20px 0; }
        .price-amount { font-size: 24px; font-weight: bold; margin: 10px 0; }
        .timeline-box { background-color: #fff3cd; border: 1px solid #ffeaa7; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .benefits-list { background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .benefit-item { display: flex; align-items: center; margin: 10px 0; }
        .benefit-icon { width: 20px; height: 20px; background-color: #4CAF50; border-radius: 50%; margin-left: 10px; display: flex; align-items: center; justify-content: center; color: white; font-size: 12px; }
        .cta-section { text-align: center; padding: 30px 0; }
        .cta-button { display: inline-block; background: linear-gradient(135deg, #FF6A5C, #FF8A7C); color: white; padding: 15px 30px; text-decoration: none; border-radius: 25px; font-weight: bold; margin: 10px; }
        .contact-info { background-color: #02153D; color: white; padding: 20px; border-radius: 8px; margin: 30px 0; }
        .footer { text-align: center; padding: 20px 0; border-top: 1px solid #eee; margin-top: 30px; color: #666; font-size: 12px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">Applygraphy</div>
            <div class="proposal-badge">🎯 پیشنهاد ویژه برای شما</div>
        </div>
        
        <div class="content">
            <h2>سلام {{customerName}} عزیز،</h2>
            
            <p>پس از بررسی دقیق درخواست شما، تیم متخصص ما بهترین برنامه را برای {{serviceType}} طراحی کرده است.</p>
            
            <div class="consultant-info">
                <h3>👨‍🎓 مشاور اختصاصی شما:</h3>
                <p><strong>{{consultantName}}</strong></p>
                <p>متخصص در زمینه {{serviceType}} با بیش از 5 سال تجربه</p>
            </div>
            
            <div class="proposal-details">
                <h3>📋 جزئیات پیشنهاد:</h3>
                {{proposalDetails}}
            </div>
            
            <div class="price-box">
                <h3>💰 هزینه خدمات</h3>
                <div class="price-amount">{{price}}</div>
                <p>شامل تمامی خدمات ذکر شده</p>
            </div>
            
            <div class="timeline-box">
                <h3>⏰ زمان‌بندی پیشنهادی:</h3>
                <p>{{timeline}}</p>
            </div>
            
            <div class="benefits-list">
                <h3>✨ مزایای همکاری با ما:</h3>
                <div class="benefit-item">
                    <div class="benefit-icon">✓</div>
                    <span>مشاوره رایگان در تمام مراحل</span>
                </div>
                <div class="benefit-item">
                    <div class="benefit-icon">✓</div>
                    <span>ضمانت بازگشت وجه در صورت عدم موفقیت</span>
                </div>
                <div class="benefit-item">
                    <div class="benefit-icon">✓</div>
                    <span>پشتیبانی 24/7 تا زمان اخذ ویزا</span>
                </div>
                <div class="benefit-item">
                    <div class="benefit-icon">✓</div>
                    <span>تخفیف ویژه برای خدمات بعدی</span>
                </div>
                <div class="benefit-item">
                    <div class="benefit-icon">✓</div>
                    <span>دسترسی به پنل اختصاصی</span>
                </div>
            </div>
            
            <div class="cta-section">
                <h3>آماده شروع هستید؟</h3>
                <p>برای تأیید پیشنهاد و شروع همکاری، روی دکمه زیر کلیک کنید:</p>
                <a href="mailto:support@applygraphy.com?subject=تأیید پیشنهاد - {{customerName}}" class="cta-button">
                    ✅ تأیید پیشنهاد
                </a>
                <a href="mailto:support@applygraphy.com?subject=درخواست تغییرات - {{customerName}}" class="cta-button" style="background: linear-gradient(135deg, #6c757d, #5a6268);">
                    📝 درخواست تغییرات
                </a>
            </div>
            
            <div class="contact-info">
                <h3>📞 تماس با مشاور:</h3>
                📧 ایمیل: support@applygraphy.com<br>
                📱 تلگرام: @ApplygraphySupport<br>
                🌐 وب‌سایت: www.applygraphy.com<br><br>
                <strong>مشاور شما: {{consultantName}}</strong>
            </div>
        </div>
        
        <div class="footer">
            © 2024 Applygraphy. تمامی حقوق محفوظ است.<br>
            این پیشنهاد تا 7 روز اعتبار دارد.
        </div>
    </div>
</body>
</html>
    `,
  },
  {
    id: "payment-confirmation",
    name: "تأیید پرداخت",
    subject: "پرداخت شما تأیید شد - شروع خدمات Applygraphy",
    category: "payment",
    isActive: true,
    variables: ["customerName", "serviceType", "amount", "paymentId", "nextSteps", "consultantName"],
    content: `
<!DOCTYPE html>
<html dir="rtl" lang="fa">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>تأیید پرداخت</title>
    <style>
        body { font-family: 'Tahoma', Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f4f4; }
        .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
        .header { text-align: center; padding: 20px 0; border-bottom: 3px solid #4CAF50; margin-bottom: 30px; }
        .logo { font-size: 28px; font-weight: bold; color: #02153D; margin-bottom: 10px; }
        .success-badge { background: linear-gradient(135deg, #4CAF50, #45a049); color: white; padding: 12px 24px; border-radius: 25px; font-size: 16px; display: inline-block; margin: 10px 0; }
        .payment-details { background-color: #f0f8ff; padding: 20px; border-radius: 8px; margin: 20px 0; border: 2px solid #4CAF50; }
        .detail-row { display: flex; justify-content: space-between; margin: 10px 0; padding: 8px 0; border-bottom: 1px solid #eee; }
        .detail-label { font-weight: bold; color: #02153D; }
        .amount-highlight { background: linear-gradient(135deg, #4CAF50, #45a049); color: white; padding: 15px; border-radius: 8px; text-align: center; margin: 20px 0; }
        .next-steps { background-color: #fff3cd; border: 1px solid #ffeaa7; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .step-item { display: flex; align-items: flex-start; margin: 15px 0; }
        .step-number { width: 30px; height: 30px; background-color: #FF6A5C; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-left: 15px; flex-shrink: 0; }
        .consultant-box { background: linear-gradient(135deg, #02153D, #1a2b5c); color: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .access-info { background-color: #e8f5e8; border: 1px solid #4CAF50; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .contact-info { background-color: #02153D; color: white; padding: 20px; border-radius: 8px; margin: 30px 0; }
        .footer { text-align: center; padding: 20px 0; border-top: 1px solid #eee; margin-top: 30px; color: #666; font-size: 12px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">Applygraphy</div>
            <div class="success-badge">✅ پرداخت موفق</div>
        </div>
        
        <div class="content">
            <h2>تبریک {{customerName}} عزیز! 🎉</h2>
            
            <p>پرداخت شما با موفقیت انجام شد و خدمات {{serviceType}} برای شما فعال گردید. ما آماده شروع همکاری هستیم!</p>
            
            <div class="payment-details">
                <h3>💳 جزئیات پرداخت:</h3>
                <div class="detail-row">
                    <span class="detail-label">شماره تراکنش:</span>
                    <span>{{paymentId}}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">نوع خدمت:</span>
                    <span>{{serviceType}}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">تاریخ پرداخت:</span>
                    <span>{{paymentDate}}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">وضعیت:</span>
                    <span style="color: #4CAF50; font-weight: bold;">✅ تأیید شده</span>
                </div>
            </div>
            
            <div class="amount-highlight">
                <h3>مبلغ پرداخت شده: {{amount}}</h3>
                <p>رسید این تراکنش برای شما ایمیل شده است</p>
            </div>
            
            <div class="consultant-box">
                <h3>👨‍🎓 مشاور اختصاصی شما:</h3>
                <p><strong>{{consultantName}}</strong></p>
                <p>مشاور شما ظرف 24 ساعت آینده با شما تماس خواهد گرفت تا فرآیند کار را آغاز کند.</p>
            </div>
            
            <div class="next-steps">
                <h3>🚀 مراحل بعدی:</h3>
                {{nextSteps}}
            </div>
            
            <div class="access-info">
                <h3>🔐 دسترسی به پنل کاربری:</h3>
                <p>شما اکنون به پنل اختصاصی خود دسترسی دارید که از طریق آن می‌توانید:</p>
                <ul>
                    <li>پیگیری وضعیت درخواست خود</li>
                    <li>مشاهده مدارک ارسالی</li>
                    <li>ارتباط مستقیم با مشاور</li>
                    <li>دریافت گزارش‌های پیشرفت</li>
                </ul>
                <p><strong>لینک ورود:</strong> <a href="https://applygraphy.com/dashboard">پنل کاربری</a></p>
            </div>
            
            <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3>📋 مدارک مورد نیاز:</h3>
                <p>لطفاً مدارک زیر را آماده کنید تا مشاور شما بتواند فرآیند را سریع‌تر پیش ببرد:</p>
                <ul>
                    <li>مدارک تحصیلی (مدرک و ریز نمرات)</li>
                    <li>مدرک زبان (در صورت داشتن)</li>
                    <li>رزومه به‌روز</li>
                    <li>نامه انگیزه (در صورت داشتن)</li>
                    <li>کپی پاسپورت</li>
                </ul>
            </div>
            
            <div class="contact-info">
                <h3>📞 تماس فوری:</h3>
                📧 ایمیل: support@applygraphy.com<br>
                📱 تلگرام: @ApplygraphySupport<br>
                🌐 پنل کاربری: www.applygraphy.com/dashboard<br><br>
                <strong>مشاور شما: {{consultantName}}</strong>
            </div>
        </div>
        
        <div class="footer">
            © 2024 Applygraphy. تمامی حقوق محفوظ است.<br>
            شماره تراکنش: {{paymentId}} | تاریخ: {{paymentDate}}
        </div>
    </div>
</body>
</html>
    `,
  },
  {
    id: "application-status-update",
    name: "به‌روزرسانی وضعیت درخواست",
    subject: "به‌روزرسانی درخواست {{customerName}} - {{statusUpdate}}",
    category: "application",
    isActive: true,
    variables: ["customerName", "applicationId", "statusUpdate", "details", "nextAction", "consultantName"],
    content: `
<!DOCTYPE html>
<html dir="rtl" lang="fa">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>به‌روزرسانی وضعیت</title>
    <style>
        body { font-family: 'Tahoma', Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f4f4; }
        .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
        .header { text-align: center; padding: 20px 0; border-bottom: 3px solid #FF6A5C; margin-bottom: 30px; }
        .logo { font-size: 28px; font-weight: bold; color: #02153D; margin-bottom: 10px; }
        .status-badge { padding: 10px 20px; border-radius: 25px; font-size: 16px; display: inline-block; margin: 10px 0; font-weight: bold; }
        .status-progress { background: linear-gradient(135deg, #4CAF50, #45a049); color: white; }
        .status-pending { background: linear-gradient(135deg, #FF9800, #F57C00); color: white; }
        .status-review { background: linear-gradient(135deg, #2196F3, #1976D2); color: white; }
        .application-info { background-color: #f0f8ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-right: 4px solid #FF6A5C; }
        .detail-row { display: flex; justify-content: space-between; margin: 10px 0; padding: 8px 0; border-bottom: 1px solid #eee; }
        .detail-label { font-weight: bold; color: #02153D; }
        .update-details { background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .next-action { background-color: #fff3cd; border: 1px solid #ffeaa7; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .progress-bar { background-color: #e0e0e0; height: 20px; border-radius: 10px; margin: 20px 0; overflow: hidden; }
        .progress-fill { background: linear-gradient(135deg, #4CAF50, #45a049); height: 100%; transition: width 0.3s ease; }
        .consultant-info { background: linear-gradient(135deg, #02153D, #1a2b5c); color: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .contact-info { background-color: #02153D; color: white; padding: 20px; border-radius: 8px; margin: 30px 0; }
        .footer { text-align: center; padding: 20px 0; border-top: 1px solid #eee; margin-top: 30px; color: #666; font-size: 12px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">Applygraphy</div>
            <div class="status-badge status-progress">📈 {{statusUpdate}}</div>
        </div>
        
        <div class="content">
            <h2>سلام {{customerName}} عزیز،</h2>
            
            <p>خبر خوش! وضعیت درخواست شما به‌روزرسانی شده است.</p>
            
            <div class="application-info">
                <h3>📋 اطلاعات درخواست:</h3>
                <div class="detail-row">
                    <span class="detail-label">شماره درخواست:</span>
                    <span>{{applicationId}}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">وضعیت جدید:</span>
                    <span style="color: #4CAF50; font-weight: bold;">{{statusUpdate}}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">تاریخ به‌روزرسانی:</span>
                    <span>{{updateDate}}</span>
                </div>
            </div>
            
            <div class="progress-bar">
                <div class="progress-fill" style="width: 60%;"></div>
            </div>
            <p style="text-align: center; color: #666; font-size: 14px;">پیشرفت کلی: 60%</p>
            
            <div class="update-details">
                <h3>📝 جزئیات به‌روزرسانی:</h3>
                <p>{{details}}</p>
            </div>
            
            <div class="next-action">
                <h3>⏭️ اقدام بعدی:</h3>
                <p>{{nextAction}}</p>
            </div>
            
            <div class="consultant-info">
                <h3>👨‍🎓 مشاور شما:</h3>
                <p><strong>{{consultantName}}</strong></p>
                <p>برای هرگونه سؤال یا نیاز به توضیح بیشتر، می‌توانید با مشاور خود تماس بگیرید.</p>
            </div>
            
            <div style="background-color: #e8f5e8; border: 1px solid #4CAF50; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3>🎯 نکات مهم:</h3>
                <ul>
                    <li>لطفاً پنل کاربری خود را به‌طور منظم چک کنید</li>
                    <li>در صورت نیاز به ارسال مدارک اضافی، سریعاً اقدام کنید</li>
                    <li>تمامی مکاتبات را از طریق پنل یا ایمیل رسمی انجام دهید</li>
                    <li>برای تماس فوری از شماره‌های اعلام شده استفاده کنید</li>
                </ul>
            </div>
            
            <div class="contact-info">
                <h3>📞 تماس با تیم پشتیبانی:</h3>
                📧 ایمیل: support@applygraphy.com<br>
                📱 تلگرام: @ApplygraphySupport<br>
                🌐 پنل کاربری: www.applygraphy.com/dashboard<br><br>
                <strong>مشاور شما: {{consultantName}}</strong>
            </div>
        </div>
        
        <div class="footer">
            © 2024 Applygraphy. تمامی حقوق محفوظ است.<br>
            شماره درخواست: {{applicationId}} | آخرین به‌روزرسانی: {{updateDate}}
        </div>
    </div>
</body>
</html>
    `,
  },
  {
    id: "visa-approval-congratulations",
    name: "تبریک تأیید ویزا",
    subject: "🎉 تبریک! ویزای شما تأیید شد - Applygraphy",
    category: "visa",
    isActive: true,
    variables: ["customerName", "visaType", "country", "approvalDate", "nextSteps", "consultantName"],
    content: `
<!DOCTYPE html>
<html dir="rtl" lang="fa">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>تبریک تأیید ویزا</title>
    <style>
        body { font-family: 'Tahoma', Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
        .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.2); }
        .header { text-align: center; padding: 30px 0; background: linear-gradient(135deg, #4CAF50, #45a049); color: white; border-radius: 15px 15px 0 0; margin: -20px -20px 30px -20px; }
        .logo { font-size: 32px; font-weight: bold; margin-bottom: 10px; }
        .celebration { font-size: 48px; margin: 20px 0; }
        .success-message { font-size: 24px; font-weight: bold; margin: 20px 0; }
        .visa-details { background: linear-gradient(135deg, #f8f9fa, #e9ecef); padding: 25px; border-radius: 12px; margin: 25px 0; border: 2px solid #4CAF50; }
        .detail-row { display: flex; justify-content: space-between; margin: 15px 0; padding: 10px 0; border-bottom: 1px solid #dee2e6; }
        .detail-label { font-weight: bold; color: #02153D; }
        .detail-value { color: #4CAF50; font-weight: bold; }
        .congratulations-box { background: linear-gradient(135deg, #FFD700, #FFA500); color: #333; padding: 25px; border-radius: 12px; text-align: center; margin: 25px 0; }
        .next-steps { background-color: #fff3cd; border: 2px solid #ffeaa7; padding: 25px; border-radius: 12px; margin: 25px 0; }
        .step-item { display: flex; align-items: flex-start; margin: 20px 0; }
        .step-number { width: 35px; height: 35px; background: linear-gradient(135deg, #FF6A5C, #FF8A7C); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-left: 15px; flex-shrink: 0; }
        .achievement-badge { background: linear-gradient(135deg, #9C27B0, #673AB7); color: white; padding: 15px 25px; border-radius: 25px; display: inline-block; margin: 15px 0; font-weight: bold; }
        .consultant-celebration { background: linear-gradient(135deg, #02153D, #1a2b5c); color: white; padding: 25px; border-radius: 12px; margin: 25px 0; text-align: center; }
        .contact-info { background-color: #02153D; color: white; padding: 25px; border-radius: 12px; margin: 30px 0; }
        .footer { text-align: center; padding: 25px 0; border-top: 2px solid #4CAF50; margin-top: 30px; color: #666; font-size: 12px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="celebration">🎉🎊✨</div>
            <div class="logo">Applygraphy</div>
            <div class="success-message">ویزای شما تأیید شد!</div>
        </div>
        
        <div class="content">
            <div class="congratulations-box">
                <h2>🏆 تبریک {{customerName}} عزیز! 🏆</h2>
                <p style="font-size: 18px; margin: 15px 0;">رؤیای شما به حقیقت پیوست!</p>
                <div class="achievement-badge">🌟 موفقیت تضمین شده</div>
            </div>
            
            <p style="font-size: 16px; text-align: center; margin: 25px 0;">
                با کمال افتخار اعلام می‌کنیم که ویزای {{visaType}} شما برای {{country}} با موفقیت تأیید شده است! 
                این دستاورد بزرگ نتیجه تلاش مشترک شما و تیم متخصص ما بوده است.
            </p>
            
            <div class="visa-details">
                <h3 style="color: #4CAF50; text-align: center; margin-bottom: 20px;">📋 جزئیات ویزای تأیید شده</h3>
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
                <div class="detail-row">
                    <span class="detail-label">وضعیت:</span>
                    <span class="detail-value">✅ تأیید شده</span>
                </div>
            </div>
            
            <div class="consultant-celebration">
                <h3>👨‍🎓 پیام از مشاور شما</h3>
                <p style="font-size: 16px; line-height: 1.8;">
                    "<strong>{{consultantName}}</strong> از طرف تمام تیم Applygraphy، صمیمانه به شما تبریک می‌گویم! 
                    موفقیت شما، موفقیت ماست. امیدواریم این آغاز مسیری پربرکت برای آینده‌تان باشد."
                </p>
            </div>
            
            <div class="next-steps">
                <h3 style="color: #FF6A5C;">🚀 مراحل بعدی - آماده سفر شوید!</h3>
                {{nextSteps}}
            </div>
            
            <div style="background: linear-gradient(135deg, #e8f5e8, #d4edda); border: 2px solid #4CAF50; padding: 25px; border-radius: 12px; margin: 25px 0;">
                <h3 style="color: #155724;">🎁 هدیه ویژه برای شما:</h3>
                <ul style="line-height: 2;">
                    <li><strong>مشاوره رایگان</strong> برای تنظیمات اولیه در کشور مقصد</li>
                    <li><strong>راهنمای کامل</strong> زندگی در {{country}}</li>
                    <li><strong>تخفیف 20%</strong> برای خدمات آینده</li>
                    <li><strong>عضویت در کلاب</strong> دانشجویان موفق Applygraphy</li>
                    <li><strong>پشتیبانی 6 ماهه</strong> پس از سفر</li>
                </ul>
            </div>
            
            <div style="background-color: #f8f9fa; padding: 25px; border-radius: 12px; margin: 25px 0; text-align: center;">
                <h3 style="color: #02153D;">📸 به اشتراک بگذارید!</h3>
                <p>این لحظه خوشحالی را با دوستان و خانواده‌تان به اشتراک بگذارید و الهام‌بخش دیگران باشید!</p>
                <p style="font-size: 14px; color: #666;">
                    #ApplygraphySuccess #VisaApproved #DreamsComeTrue
                </p>
            </div>
            
            <div class="contact-info">
                <h3>📞 همچنان در کنار شما هستیم:</h3>
                📧 ایمیل: support@applygraphy.com<br>
                📱 تلگرام: @ApplygraphySupport<br>
                🌐 پنل کاربری: www.applygraphy.com/dashboard<br>
                📞 خط ویژه موفقان: +98-21-XXXXXXX<br><br>
                <strong>مشاور شما: {{consultantName}}</strong>
            </div>
        </div>
        
        <div class="footer">
            <p style="font-size: 16px; color: #4CAF50; font-weight: bold;">
                🌟 شما جزو 5% موفق‌ترین متقاضیان ما هستید! 🌟
            </p>
            © 2024 Applygraphy. تمامی حقوق محفوظ است.<br>
            تاریخ تأیید ویزا: {{approvalDate}}
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

export function replaceTemplateVariables(content: string, variables: Record<string, string>): string {
  let processedContent = content

  Object.entries(variables).forEach(([key, value]) => {
    const regex = new RegExp(`{{${key}}}`, "g")
    processedContent = processedContent.replace(regex, value)
  })

  return processedContent
}

export function validateTemplateVariables(template: EmailTemplate, variables: Record<string, string>): string[] {
  const missingVariables: string[] = []

  template.variables.forEach((variable) => {
    if (!variables[variable] || variables[variable].trim() === "") {
      missingVariables.push(variable)
    }
  })

  return missingVariables
}
