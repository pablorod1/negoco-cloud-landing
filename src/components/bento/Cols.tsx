import { HelpCircle } from "lucide-react";

import { ShinyButton } from "../magicui/shiny-button";
import { motion } from "framer-motion";
import { PerformanceChart } from "./PerformanceChart";

const BigCol1 = () => {
  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
      className="min-h-[420px] lg:col-span-2 bg-gradient-to-b from-white via-white to-primary-200 flex flex-col gap-4 rounded-3xl relative overflow-hidden h-full shadow-center p-6"
    >
      <div className="flex flex-col gap-2 items-center text-center xl:items-start xl:text-left">
        <h3 className="text-base md:text-lg xl:text-xl font-bold text-primary-900">
          El CRM para consultorías energéticas
        </h3>
        <p className="text-gray-700 text-xs">
          Supervisa clientes, ventas y equipos desde un panel de control
          unificado. Mejora la productividad con Negoco Cloud.
        </p>
      </div>
      <div className="absolute -bottom-8 xl:-bottom-12 left-8 aspect-[1363/548] w-full h-full max-h-[260px] xl:max-h-[360px] rounded-4xl overflow-hidden bg-white shadow">
        <img
          title="Imagen del Dashboard de Negoco CRM"
          src="/images/analytics2.png"
          alt="Imagen del Dashboard de Negoco CRM"
          className="w-full h-full object-top-left object-cover "
        />
      </div>
    </motion.div>
  );
};

const BigCol2 = () => {
  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
      className="min-h-[420px] lg:col-start-3 shadow-center rounded-3xl relative overflow-hidden h-full group"
    >
      {/* Capa de imagen con overlay mejorado */}
      <div className="absolute inset-0 z-0 overflow-hidden w-full h-full">
        <img
          title="Equipo de soporte de Negoco CRM"
          src="/images/support.webp"
          alt="Equipo de soporte de Negoco CRM"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 max-w-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-800/60 to-primary-800/20 opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
      </div>

      {/* Contenido principal */}
      <div className="relative flex flex-col justify-end gap-3 p-6 h-full z-10">
        <div className="flex items-center justify-between w-full mb-1">
          <h3 className="text-2xl font-bold text-white group-hover:translate-x-1 transition-all duration-300">
            Equipo de Soporte
          </h3>
          <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300">
            <HelpCircle className="text-white size-5" />
          </div>
        </div>

        <p className="text-gray-100 text-sm max-w-prose leading-relaxed">
          Nuestro equipo está disponible las 24 horas del día para asistirle con
          cualquier consulta o problema que pueda surgir. ¡Siempre a su lado!
        </p>

        <div className="flex items-center w-full mt-4">
          <ShinyButton className="rounded-md !px-4 bg-white text-sm  font-semibold group-hover:bg-primary-50 transition-colors duration-300 overflow-hidden">
            <span className="text-primary-700">Contáctanos</span>
          </ShinyButton>
        </div>

        {/* Indicador sutil de interactividad */}
        <div className="absolute shadow-md top-4 right-4 bg-white backdrop-blur-sm px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300">
          <span className="text-primary-500 text-xs font-semibold tracking-wide">
            Disponibilidad 24/7
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const BigCol3 = () => {
  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      className="min-h-[420px] shadow-center rounded-3xl relative overflow-hidden h-full group p-6 bg-gradient-to-br from-primary-200 to-primary-300 brightness-120"
    >
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-start gap-6 h-full">
        <div className="flex flex-col items-start gap-2 text-left">
          <h3 className="text-xl font-bold text-primary-900">
            Alto rendimiento comercial
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed max-w-prose">
            Mejora tus conversiones y el ROI con un CRM optimizado para empresas
            energéticas.
          </p>
        </div>

        <div className="w-full h-full flex items-center justify-center gap-6">
          <PerformanceChart value={97} opacity="opacity-20" />
          <PerformanceChart value={98} />
          <PerformanceChart value={99} opacity="opacity-20" />
        </div>
      </div>
    </motion.div>
  );
};

export { BigCol1, BigCol2, BigCol3 };
