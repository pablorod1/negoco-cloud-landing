import { motion } from "framer-motion";
import PricingCard from "./PricingCard";
import { Paintbrush2, User } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";

export default function PricingSection() {
  const [plan, setPlan] = useState<"monthly" | "yearly">("monthly");
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center xl:flex-row xl:items-start justify-between gap-4 xl:gap-12 w-full xl:max-w-[1600px] mx-auto px-12 xl:px-6 py-16 pb-28"
    >
      <div className="flex flex-col gap-6 text-center xl:text-left">
        <span className="text-sm text-primary-700 font-medium tracking-widest uppercase">
          Comienza a crecer con Negoco Cloud
        </span>
        <div className="flex flex-col gap-4">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-primary-950 text-pretty">
            Nuestros precios escalan con tu{" "}
            <span className="italic text-primary-700 font-clash-regular font-light">
              negocio
            </span>
          </h2>
          <p className="text-gray-500">
            Prueba Negoco Cloud gratis durante 14 días. Sin tarjeta de crédito.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-center gap-4">
          <Button
            onClick={() => setPlan("monthly")}
            variant={plan === "monthly" ? "default" : "outline"}
          >
            Mensual
          </Button>
          <Button
            variant={plan === "yearly" ? "default" : "outline"}
            onClick={() => setPlan("yearly")}
          >
            Anual
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <PricingCard
            icon={<User size={16} />}
            main
            title="Estándar"
            price={{ monthly: "24,95", yearly: "19,99" }}
            plan={plan}
            features={[
              "Gestión de clientes",
              "Automatización de tareas",
              "Informes y análisis",
              "Integraciones básicas",
              "Soporte por correo electrónico",
            ]}
          />
          <PricingCard
            title="Pro"
            icon={<Paintbrush2 size={16} />}
            price={{ monthly: "40", yearly: "400" }}
            plan={plan}
            features={[
              "Todo en Estándar",
              "Personalización avanzada",
              "Integraciones premium",
              "Soporte prioritario",
            ]}
          />
        </div>
      </div>
    </motion.section>
  );
}
