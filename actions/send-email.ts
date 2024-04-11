"use server"
import { Resend } from "resend"
import EmailTemplate from "@/components/EmailTemplate"

export const sendEmail = async (formData: FormData) => {
  const name = formData.get("name") as string
  const subject = formData.get('subject') as string ?? 'Ponudba'
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['pmitja1@gmail.com'],
      subject: subject,
      react: EmailTemplate({ validationCode: name }),
    }); 

    return {
      error: null,
      success: true
    }
  } catch (error) {
    console.log(error)
    return {
      error: (error as Error).message,
      success: false
    }
  }
}