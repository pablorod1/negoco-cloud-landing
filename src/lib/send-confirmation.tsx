import ConfirmationEmail from "@/components/email/ConfirmationEmail";
import type { LeadData } from "@/components/email/NewLeadEmail";
import { render } from "@react-email/components";
import nodemailer from "nodemailer";

export async function sendConfirmationEmail(leadData: LeadData) {
  const { EMAIL_NOREPLY, EMAIL_PASS, SMTP_HOST } = import.meta.env;

  if (!EMAIL_NOREPLY || !EMAIL_PASS || !SMTP_HOST) {
    throw new Error("Missing email configuration in environment variables.");
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: 465,
    secure: true,
    auth: {
      user: EMAIL_NOREPLY,
      pass: EMAIL_PASS,
    },
  });

  const emailHtml = await render(<ConfirmationEmail {...leadData} />);

  const mailOptions = {
    from: `Negoco Cloud <${EMAIL_NOREPLY}>`,
    to: leadData.email,
    subject: `Confirmación de solicitud para Negoco Cloud CRM`,
    html: emailHtml,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Error al enviar el email:", error);
    return { success: false, error: "Error al enviar el email" };
  }
}
