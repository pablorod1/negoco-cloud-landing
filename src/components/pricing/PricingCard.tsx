import type { Plan } from "@/lib/types";
import ContactModal from "../contact/ContactModal";
import { ShineBorder } from "../magicui/shine-border";
import { ShinyButton } from "../magicui/shiny-button";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { motion } from "framer-motion";

const MotionCard = motion.create(Card);
interface Props {
  title: string;
  main?: boolean;
  icon: React.ReactNode;
  price: { monthly: string; yearly: string };
  plan: "monthly" | "yearly";
  features: string[];
  planDiscount: string;
  pricePerUser?: string;
}

export default function PricingCard({
  title,
  main,
  icon,
  price,
  plan,
  features,
  planDiscount,
  pricePerUser,
}: Props) {
  return (
    <MotionCard
      initial={{
        scale: 0.8,
        opacity: 0,
        x: main ? 0 : title === "Starter" ? 300 : -300,
      }}
      whileInView={{ scale: 1, opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{
        duration: 0.5,
        delay: main ? 0 : title === "Starter" ? 0.2 : 0.4,
      }}
      className={`relative overflow-hidden border-0 p-8 w-full bg-white ${
        main
          ? "shadow-[0px_0px_16px_0px_rgba(37,99,235,0.3)] z-10"
          : "shadow-md border border-gray-200 scale-95 z-0"
      } `}
    >
      {main && (
        <ShineBorder
          shineColor={[
            "var(--color-primary-300)",
            "var(--color-primary-500)",
            "var(--color-primary-800)",
          ]}
          borderWidth={2}
        />
      )}
      {plan === "yearly" && (
        <Badge className="absolute top-4 right-4" variant="success">
          - {planDiscount} %
        </Badge>
      )}
      <CardHeader className="gap-6">
        <CardDescription>
          <div className="flex items-center gap-2">
            {icon}
            <h3 className="italic">{title}</h3>
          </div>
        </CardDescription>
        <CardTitle className="py-6">
          <div className="flex items-baseline">
            <span className="text-[48px] font-semibold tracking-tight text-primary-950/90">
              {price[plan]}€
            </span>
            <span className="ml-1 text-[14px] text-gray-400">/mes</span>
          </div>
          {pricePerUser && (
            <p className="mt-2 text-xs text-gray-400 font-light">
              {pricePerUser}€ por usuario adicional
            </p>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="h-full flex flex-col">
        <ul className="flex flex-col gap-2 space-y-3 flex-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm">
              <span className="text-primary-500">•</span>
              {feature}
            </li>
          ))}
        </ul>
        <div className="flex flex-col items-center justify-center gap-2 mt-8">
          {main ? (
            <ContactModal
              buttonText="Seleccionar"
              buttonVariant="primary"
              plan={title.toLowerCase() as Plan}
            />
          ) : (
            <ContactModal
              buttonText="Seleccionar"
              plan={title.toLowerCase() as Plan}
            />
          )}
          {title === "Starter" && (
            <p className="text-xs text-gray-500 mt-2">
              1 mes de prueba gratis. Sin tarjeta de crédito.
            </p>
          )}
        </div>
      </CardContent>
    </MotionCard>
  );
}
