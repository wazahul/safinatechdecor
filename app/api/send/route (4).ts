import { NextResponse } from 'next/server';
import { companyConfig } from '@/config/company';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, mobile, service, message } = body;

    // 1. Send Email Notification to you
    await resend.emails.send({
      from: 'Leads <onboarding@resend.dev>', // Jab domain verify ho jaye toh apna email use karein
      to: companyConfig.email,
      subject: `New Lead: ${service} - ${name}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Mobile:</strong> ${mobile}</p>
             <p><strong>Message:</strong> ${message}</p>`
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}