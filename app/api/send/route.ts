import { EmailTemplate } from '@/components/EmailTemplate';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log(body);
    const data = await resend.emails.send({
      from: 'pmitja1@gmail.com',
      to: ['200codestatus@gmail.com'],
      subject: body.subject,
      react: EmailTemplate({ firstName: 'John' }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
