"use server"
import { Resend } from "resend"
import EmailTemplate from "@/components/EmailTemplate"

type FormValuesProps = {
  values: { name: string; subject: string };
};

export const sendEmail = async ({values } : FormValuesProps): Promise<{ error?: boolean, success?: boolean } | null> => {
  const { name, subject } = values
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from: 'Monting Plus <onboarding@resend.dev>',
      to: ['pmitja1@gmail.com'],
      subject: subject,
      react: EmailTemplate({ validationCode: name }),
    }); 

    return {
      success: true
    }
  } catch (error) {
    return {
      error: true,
    }
  }
}