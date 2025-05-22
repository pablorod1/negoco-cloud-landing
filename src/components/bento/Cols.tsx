import { HelpCircle } from "lucide-react";

import { ShinyButton } from "../magicui/shiny-button";
import { motion } from "framer-motion";
import { PerformanceChart } from "./PerformanceChart";

const BigCol1 = () => {
  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true, amount: 0.2 }}
      className="min-h-[420px] md:col-span-2 bg-gradient-to-b from-white via-white to-primary-200 flex flex-col gap-4 rounded-3xl relative overflow-hidden h-full shadow-center p-6"
    >
      <div className="flex flex-col gap-2 items-center text-center xl:items-start xl:text-left">
        <h3 className="text-base md:text-lg xl:text-xl font-bold text-primary-900">
          Control total desde un único panel
        </h3>
        <p className="text-gray-700 text-xs">
          Accede en tiempo real a ventas, clientes y márgenes. Visualiza lo que
          importa, desde cualquier navegador web.
        </p>
      </div>
      <div className="absolute bottom-0 left-0 aspect-[1363/548] w-full h-auto max-h-[320px] max-w-xl lg:max-w-none lg:max-h-[350px]">
        <img
          title="Imagen del Dashboard de Negoco CRM"
          src="/images/banner2_edited.png"
          alt="Imagen del Dashboard de Negoco CRM"
          className="w-full h-auto object-center object-cover"
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
      transition={{ duration: 0.5, delay: 0.4 }}
      viewport={{ once: true, amount: 0.2 }}
      className="min-h-[420px] md:col-start-3 shadow-center rounded-3xl relative overflow-hidden h-full group"
    >
      {/* Capa de imagen con overlay mejorado */}
      <div className="absolute inset-0 z-0 overflow-hidden w-full h-full">
        <img
          title="Equipo de soporte de Negoco CRM"
          src="/images/support.webp"
          alt="Equipo de soporte de Negoco CRM"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-800/60 to-primary-800/20 opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
      </div>

      {/* Contenido principal */}
      <div className="relative flex flex-col justify-end gap-3 p-6 h-full z-10">
        <div>
          <h3 className="text-2xl font-bold text-white group-hover:translate-x-1 transition-all duration-300">
            Soporte humano, siempre disponible
          </h3>

          <p className="text-gray-100 text-sm max-w-prose leading-relaxed">
            Tu negocio no se detiene, y nosotros tampoco. Habla con expertos
            24/7 por cualquier canal.
          </p>
        </div>

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

export { BigCol1, BigCol2 };
