import { motion } from "framer-motion";
import PricingCard from "./PricingCard";
import { Paintbrush2, User } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

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
      <div className="flex flex-col items-center gap-4">
        {/* Enhanced Plan Switcher */}
        <div className="flex flex-row items-center relative p-0.5 bg-white rounded-[9px] shadow w-full">
          <button
            onClick={() => setPlan("monthly")}
            className={cn(
              "w-1/2 h-[28px] relative z-[99] bg-transparent border-0 outline-none flex justify-center items-center grow cursor-pointer font-medium text-sm",
              plan === "monthly" ? "text-white" : "text-primary-500",
              "transition-colors duration-200 ease-in-out"
            )}
          >
            Mensual
          </button>
          <button
            onClick={() => setPlan("yearly")}
            className={cn(
              "w-1/2 h-[28px] relative z-[99] bg-transparent border-0 outline-none flex justify-center items-center grow cursor-pointer font-medium text-sm",
              plan === "yearly" ? "text-white" : "text-primary-500",
              "transition-colors duration-200 ease-in-out"
            )}
          >
            Anual
          </button>
          <div
            className={cn(
              "w-1/2 h-[28px] bg-primary-700 absolute top-[2px] left-[2px] z-[9] border border-[rgba(0,0,0,0.04)] shadow-[0px_3px_8px_rgba(0,0,0,0.12),_0px_3px_1px_rgba(0,0,0,0.04)] rounded-[7px] transition-all duration-200 ease-out",
              plan === "monthly" ? "left-[2px]" : "left-[calc(50%_-_2px)]",
              "transition-all duration-200 ease-in-out"
            )}
          ></div>
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
