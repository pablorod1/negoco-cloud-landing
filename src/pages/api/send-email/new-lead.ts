import { sendConfirmationEmail } from "@/lib/send-confirmation";
import { sendNewLeadEmail } from "@/lib/send-new-lead-email";
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ params, request }) => {
  try {
    const data = await request.formData();

    const name = data.get("name") as string;
    const lastName = data.get("lastName") as string;
    const email = data.get("email") as string;
    const phone = data.get("phone") as string;
    const company = data.get("company") as string;
    const plan = data.get("plan") as "demo" | "starter" | "pro" | "elite";

    if (!name || !lastName || !email || !phone || !company || !plan) {
      return new Response(
        JSON.stringify({
          message: "Missing required fields",
        }),
        { status: 400 }
      );
    }

    const sendEmailResponse = await sendNewLeadEmail({
      name,
      lastName,
      email,
      phone,
      company,
      plan,
    });

    if (!sendEmailResponse.success) {
      return new Response(
        JSON.stringify({
          message: sendEmailResponse.error || "Error sending email",
        }),
        { status: 500 }
      );
    }

    const sendConfirmationResponse = await sendConfirmationEmail({
      name,
      lastName,
      email,
      phone,
      company,
      plan,
    });

    if (!sendConfirmationResponse.success) {
      return new Response(
        JSON.stringify({
          message:
            sendConfirmationResponse.error ||
            "Error sending confirmation email",
        }),
        { status: 500 }
      );
    }

    return new Response(
      JSON.stringify({
        message: "Success!",
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({
        message: "Error sending email",
      }),
      { status: 500 }
    );
  }
};
