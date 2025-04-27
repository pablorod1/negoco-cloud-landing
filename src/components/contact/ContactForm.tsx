import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre es obligatorio y debe tener al menos 2 caracteres.",
  }),
  lastName: z.string().min(2, {
    message: "El apellido es obligatorio y debe tener al menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Introduce un correo electrónico válido.",
  }),
  phone: z.string().regex(/^\+?\d{10,15}$/, {
    message: "Introduce un número de teléfono válido.",
  }),
  company: z.string().min(2, {
    message: "El nombre de la compañía es obligatorio.",
  }),
  plan: z.enum(["demo", "starter", "pro", "elite"], {
    errorMap: () => ({ message: "Selecciona un plan." }),
  }),
});

export default function ContactForm({
  plan,
}: {
  plan: "demo" | "starter" | "pro" | "elite";
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      plan: plan,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("lastName", values.lastName);
      formData.append("email", values.email);
      formData.append("phone", values.phone);
      formData.append("company", values.company);
      formData.append("plan", values.plan);

      const response = await fetch("/api/send-email/new-lead", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Solicitud enviada", {
          description: `Hemos recibido tu solicitud de ${plan}. Nos pondremos en contacto contigo pronto.`,
        });
        form.reset();
      } else {
        toast.error("Error", {
          description:
            data.message || "Hubo un error al procesar tu solicitud.",
        });
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      toast.error("Error", {
        description:
          "Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.",
      });
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-6 text-center space-y-6 bg-gradient-to-b from-green-50 to-white rounded-lg border border-green-100 shadow-sm">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-green-700">
          ¡Gracias por tu interés!
        </h2>
        <p className="text-lg text-gray-600 max-w-md">
          Hemos recibido tu solicitud de {plan}. Un miembro de nuestro equipo se
          pondrá en contacto contigo en las próximas 24-48 horas.
        </p>
        <div className="pt-2">
          <Button variant="primary" onClick={() => setIsSubmitted(false)}>
            Enviar otra solicitud
          </Button>
        </div>
        <div className="text-sm text-gray-500 pt-2">
          Si tienes alguna pregunta urgente, contacta con nosotros en{" "}
          <a
            href="mailto:info@negoco.com"
            className="text-green-600 hover:underline"
          >
            info@negoco.com
          </a>
        </div>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="plan"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="plan">Plan</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecciona un plan..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="demo">Prueba gratuita</SelectItem>
                    <SelectItem value="starter">Starter</SelectItem>
                    <SelectItem value="pro">Pro</SelectItem>
                    <SelectItem value="elite">Elite</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="name">Nombre</FormLabel>
              <FormControl>
                <Input
                  id="name"
                  placeholder="Ejemplo: Juan"
                  {...field}
                  disabled={isSubmitting}
                  className="focus:border-primary"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="lastName">Apellido</FormLabel>
              <FormControl>
                <Input
                  id="lastName"
                  placeholder="Ejemplo: Pérez"
                  {...field}
                  disabled={isSubmitting}
                  className="focus:border-primary"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="email">Correo Electrónico</FormLabel>
              <FormControl>
                <Input
                  id="email"
                  placeholder="Ejemplo: juan.perez@empresa.com"
                  {...field}
                  disabled={isSubmitting}
                  className="focus:border-primary"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="phone">Teléfono</FormLabel>
              <FormControl>
                <Input
                  id="phone"
                  placeholder="Ejemplo: +34600123456"
                  {...field}
                  disabled={isSubmitting}
                  className="focus:border-primary"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="company">Compañía</FormLabel>
              <FormControl>
                <Input
                  id="company"
                  placeholder="Ejemplo: Negoco Cloud"
                  {...field}
                  disabled={isSubmitting}
                  className="focus:border-primary"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full" type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Enviando...
            </>
          ) : (
            "Solicitar Demo"
          )}
        </Button>
      </form>
    </Form>
  );
}
