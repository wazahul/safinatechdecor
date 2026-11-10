import { NextResponse } from 'next/server';
import { Resend } from 'resend'; // 1. Resend import karein
import { validateLeadForm } from '@/lib/validations';
import { formatWhatsAppMessage } from '@/lib/utils';
import { companyConfig } from '@/config/company';
import { LeadFormData } from '@/types';

// 2. Resend instance initialize karein (aapki .env file se key lega)
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body: LeadFormData = await request.json();

    // 1. Server-side validation
    const { isValid, errors } = validateLeadForm(body);
    if (!isValid) {
      return NextResponse.json(
        { success: false, message: 'Invalid form data.', errors },
        { status: 400 }
      );
    }

    // 2. Generate WhatsApp link (Existing logic)
    const waMsg = formatWhatsAppMessage(body.name, body.service, body.mobile, body.message);
    const whatsappLink = `https://wa.me/${companyConfig.whatsappNumber}?text=${waMsg}`;

    // 3. 🛠️ RESEND EMAIL INTEGRATION
    // Isse aapko Gmail par notification aayega
    try {
      await resend.emails.send({
        from: 'Safina Tech-Decor <onboarding@resend.dev>', // Domain verify hone tak yahi rahega
        to: [companyConfig.email], // Aapka email: wazahul@gmail.com
        subject: `New Lead: ${body.service} - ${body.name}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; border: 1px solid #f1f5f9; border-radius: 12px;">
            <h2 style="color: #f59e0b;">New Project Inquiry</h2>
            <p><strong>Customer Name:</strong> ${body.name}</p>
            <p><strong>Mobile Number:</strong> ${body.mobile}</p>
            <p><strong>Service Requested:</strong> ${body.service}</p>
            <p><strong>Detailed Message:</strong></p>
            <div style="background: #f8fafc; padding: 15px; border-radius: 8px;">${body.message}</div>
            <br />
            <p style="font-size: 11px; color: #94a3b8;">Sent from Safina Tech-Decor Website</p>
          </div>
        `,
      });
    } catch (emailError) {
      console.error("Email failed but WhatsApp link was generated:", emailError);
      // Hum return nahi karenge taaki kam se kam WhatsApp link toh mil jaye
    }

    return NextResponse.json({
      success: true,
      message: 'Lead validated and Email Sent.',
      whatsappLink,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Internal server error.' },
      { status: 500 }
    );
  }
}