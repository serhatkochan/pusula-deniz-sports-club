// Next.js API route - /api/contact
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// E-posta ayarları
const emailHost = process.env.EMAIL_HOST || 'smtp.gmail.com';
const emailPort = parseInt(process.env.EMAIL_PORT || '587');
const emailUser = process.env.EMAIL_USER;
const emailPass = process.env.EMAIL_PASS;
const emailTo = process.env.EMAIL_TO || 'info@pusuladenizspor.com';

// CORS kontrolü
const allowedOrigins = ['https://pusuladenizspor.com', 'http://localhost:3000'];

export async function POST(request: Request) {
  try {
    // CORS kontrolü
    const origin = request.headers.get('origin');
    if (origin && !allowedOrigins.includes(origin)) {
      return new NextResponse(JSON.stringify({ error: 'CORS hatası: İzin verilmeyen kaynak' }), {
        status: 403,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Form verilerini al
    const data = await request.json();
    const { name, email, phone, service, message } = data;

    // Gerekli alanların kontrolü
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Lütfen tüm gerekli alanları doldurun' },
        { status: 400 }
      );
    }

    // E-posta konu başlığını güvenli hale getir
    const safeSubject = `Pusula Deniz Spor İletişim Formu - ${name.replace(/[^\w\s]/gi, '')}`;

    // HTML e-posta içeriği oluştur
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
        <h2 style="color: #0056b3; border-bottom: 2px solid #0056b3; padding-bottom: 10px;">Yeni İletişim Formu Mesajı</h2>
        <p><strong>İsim:</strong> ${name}</p>
        <p><strong>E-posta:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Telefon:</strong> <a href="tel:${phone}">${phone}</a></p>
        <p><strong>İlgilenilen Hizmet:</strong> ${service || 'Belirtilmemiş'}</p>
        <p><strong>Mesaj:</strong></p>
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 10px;">
          ${message.replace(/\n/g, '<br>')}
        </div>
        <p style="font-size: 12px; color: #666; margin-top: 30px; border-top: 1px solid #e0e0e0; padding-top: 10px;">
          Bu e-posta Pusula Deniz Spor web sitesindeki iletişim formundan gönderilmiştir.
          IP: ${request.headers.get('x-forwarded-for') || 'bilinmiyor'}
          Tarih: ${new Date().toLocaleString('tr-TR')}
        </p>
      </div>
    `;

    // Düz metin içeriği oluştur
    const textContent = `
      Yeni İletişim Formu Mesajı
      
      İsim: ${name}
      E-posta: ${email}
      Telefon: ${phone}
      İlgilenilen Hizmet: ${service || 'Belirtilmemiş'}
      
      Mesaj:
      ${message}
      
      Bu e-posta Pusula Deniz Spor web sitesindeki iletişim formundan gönderilmiştir.
      IP: ${request.headers.get('x-forwarded-for') || 'bilinmiyor'}
      Tarih: ${new Date().toLocaleString('tr-TR')}
    `;

    // Nodemailer yapılandırması
    const transporter = nodemailer.createTransport({
      host: emailHost,
      port: emailPort,
      secure: emailPort === 465, // true for 465, false for other ports
      auth: {
        user: emailUser,
        pass: emailPass
      }
    });

    // Geliştirme ortamında e-posta bilgilerini konsola yazdır
    console.log('E-posta gönderiliyor...');
    console.log('Kime:', emailTo);
    console.log('Konu:', safeSubject);
    console.log('İçerik:', textContent);

    // Eğer e-posta bilgileri eksikse uyarı ver
    if (!emailUser || !emailPass) {
      console.warn('E-posta yapılandırması eksik! E-posta gönderilemiyor.');
      return NextResponse.json(
        { 
          success: true, 
          message: 'Form başarıyla alındı, ancak e-posta yapılandırması eksik olduğu için e-posta gönderilmedi.' 
        }
      );
    }

    // E-postayı gönder
    await transporter.sendMail({
      from: `"Pusula Deniz Spor Web Sitesi" <${emailUser}>`,
      to: emailTo,
      subject: safeSubject,
      text: textContent,
      html: htmlContent,
      replyTo: email
    });

    return NextResponse.json(
      { success: true, message: 'Form başarıyla gönderildi' }
    );
  } catch (error) {
    console.error('İletişim formu hatası:', error);
    return NextResponse.json(
      { error: 'Form gönderilirken bir hata oluştu' },
      { status: 500 }
    );
  }
} 