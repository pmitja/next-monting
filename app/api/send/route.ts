import { EmailTemplate } from '@/components/email-template';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    console.log('request', request);
    const data = await resend.emails.send({
      from: 'pmitja1@gmail.com',
      to: ['200codestatus@gmail.com'],
      subject: 'Hello world',
      react: EmailTemplate({ firstName: 'John' }),
    });

    return NextResponse.json(data);
  } catch (error) {
    console.log('error', error);
    return NextResponse.json({ error });
  }
}
