import { motion } from "framer-motion";
import PricingCard from "./PricingCard";
import { BadgeCheck, Crown, User } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function PricingSection() {
  const [plan, setPlan] = useState<"monthly" | "yearly">("monthly");
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center justify-center gap-4 xl:gap-12 w-full xl:max-w-[1600px] mx-auto px-12 py-24 xl:px-6 xl:py-16 pb-28"
    >
      <div className="flex flex-col gap-6 text-center">
        <span className="text-sm text-primary-700 font-medium tracking-widest uppercase">
          Comienza a crecer con Negoco Cloud
        </span>
        <div className="flex flex-col gap-4">
          <h2 className="text-lg md:text-2xl lg:text-4xl font-bold text-primary-950 text-pretty">
            Nuestros precios escalan con tu{" "}
            <span className="italic text-primary-700 font-clash-regular font-light tracking-wide leading-tight">
              negocio{" "}
            </span>
            y mejoran la experiencia de tus clientes, manteniendo siempre un
            contacto directo.
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            Prueba Negoco Cloud gratis durante 30 días. Sin tarjeta de crédito.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-12">
        {/* Enhanced Plan Switcher */}
        <div className="flex flex-row items-center relative p-0.5 bg-white rounded-[9px] shadow w-full max-w-3xs">
          <button
            onClick={() => setPlan("monthly")}
            className={cn(
              "w-1/2 h-[28px] relative z-10 bg-transparent border-0 outline-none flex justify-center items-center grow cursor-pointer font-medium text-sm",
              plan === "monthly" ? "text-white" : "text-primary-500",
              "transition-colors duration-200 ease-in-out"
            )}
          >
            Mensual
          </button>
          <button
            onClick={() => setPlan("yearly")}
            className={cn(
              "w-1/2 h-[28px] relative z-10 bg-transparent border-0 outline-none flex justify-center items-center grow cursor-pointer font-medium text-sm",
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
          <PricingCard
            icon={<User size={16} />}
            title="Starter"
            price={{ monthly: "95", yearly: "87,08" }}
            plan={plan}
            features={[
              "Acceso a trámites y liquidaciones",
              "Acceso a documentación",
              "Acceso a colaboradores",
              "Notificaciones por correo electrónico",
              "Soporte por Mail",
              "2 usuarios incluidos",
            ]}
            planDiscount="8,33"
            pricePerUser={"10"}
          />
          <PricingCard
            title="Pro"
            icon={<BadgeCheck size={16} />}
            price={{ monthly: "195", yearly: "170,62" }}
            plan={plan}
            features={[
              "Todo en Starter",
              "Acceso a comparativas",
              "Integración para jefes de equipo",
              "Soporte por Mail y Whatsapp",
              "10 usuarios incluidos",
            ]}
            main
            planDiscount="12,5"
            pricePerUser={"5"}
          />
          <PricingCard
            title="Elite"
            icon={<Crown size={16} />}
            price={{ monthly: "295", yearly: "245,83" }}
            plan={plan}
            features={[
              "Todo en Pro",
              "Logo de la empresa",
              "Colores coorporativos",
              "Notificaciones por Mail personalizadas",
              "Soporte prioritario por cualquier vía",
              "USUARIOS ILIMITADOS",
            ]}
            planDiscount="17,67"
          />
        </div>
      </div>
    </motion.section>
  );
}
