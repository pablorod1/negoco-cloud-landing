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
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={buttonVariant} size="lg" className="w-full max-w-2xs">
          {icon ? icon : null}
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="md:max-w-[650px] w-full max-h-[85vh] overflow-y-auto">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-primary-800">
            Solicita tu plan para nuestro CRM
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-600">
            Completa el siguiente formulario y nos pondremos en contacto contigo
            lo antes posible.
          </DialogDescription>
        </DialogHeader>
        <ContactForm plan={plan} />
      </DialogContent>
    </Dialog>
  );
}
