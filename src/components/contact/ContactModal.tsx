import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button, buttonVariants } from "../ui/button";
import ContactForm from "./ContactForm";
import type { VariantProps } from "class-variance-authority";

export default function ContactModal({
  plan,
  buttonText = "Solicita tu demo gratuita",
  icon,
  buttonVariant = "outline",
}: {
  plan: "demo" | "starter" | "pro" | "elite";
  icon?: React.ReactNode;
  buttonText?: string;
  buttonVariant?: VariantProps<typeof buttonVariants>["variant"];
}) {
  const getTitle = () => {
    switch (plan) {
      case "demo":
        return "Solicita tu demo gratuita";
      case "starter":
        return "Solicita tu plan Starter";
      case "pro":
        return "Solicita tu plan Pro";
      case "elite":
        return "Solicita tu plan Elite";
      default:
        return "Solicita tu prueba gratuita";
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={buttonVariant} size="lg" className="w-full">
          {buttonText}
          {icon ? icon : null}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-primary-800">{getTitle()}</DialogTitle>
          <DialogDescription className="text-sm text-gray-600">
            Completa el siguiente formulario y nos pondremos en contacto contigo
            para ofrecerte una prueba gratuita de 30 días de Negoco Cloud. Sin
            tarjeta de crédito. Sin compromiso.
          </DialogDescription>
        </DialogHeader>
        <ContactForm plan={plan} />
      </DialogContent>
    </Dialog>
  );
}
