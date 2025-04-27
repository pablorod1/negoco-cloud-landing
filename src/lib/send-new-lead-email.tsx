import type { LeadData } from "@/components/email/NewLeadEmail";
import LeadNotificationEmail from "@/components/email/NewLeadEmail";
import { render } from "@react-email/components";
import nodemailer from "nodemailer";

export async function sendNewLeadEmail(leadData: LeadData) {
  const { EMAIL, EMAIL_PASS, SMTP_HOST } = import.meta.env;

  if (!EMAIL || !EMAIL_PASS || !SMTP_HOST) {
    throw new Error("Missing email configuration in environment variables.");
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: 465,
    secure: true,
    auth: {
      user: EMAIL,
      pass: EMAIL_PASS,
    },
  });

  const emailHtml = await render(<LeadNotificationEmail {...leadData} />);

  const mailOptions = {
    from: `Negoco Cloud <${EMAIL}>`,
    to: EMAIL,
    subject: `Nuevo lead recibido: ${leadData.name} ${leadData.lastName}`,
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
