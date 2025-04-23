import { HelpCircle, TrendingUp } from "lucide-react";

import { ShinyButton } from "../magicui/shiny-button";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const BigCol1 = () => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ duration: 1, type: "spring", bounce: 0.5 }}
      viewport={{ once: true, amount: 0.4 }}
      className="min-h-[420px] lg:col-span-2 bg-gradient-to-b from-white via-white to-primary-200 flex flex-col gap-4 rounded-3xl relative overflow-hidden h-full shadow-md p-6 border border-gray-100"
    >
      <div className="flex flex-col gap-2 flex-1">
        <h3 className="text-xl font-bold text-primary-900">
          Analíticas en tiempo real
        </h3>
        <p className="text-gray-700 text-xs">
          Con <strong>Negoco</strong>, obtén informes detallados y
          visualizaciones de datos que te ayudarán a tomar decisiones informadas
          y estratégicas.
        </p>
      </div>
      <div className="absolute -bottom-8 left-8  aspect-[1363/548] w-full h-full max-h-80 rounded-4xl overflow-hidden bg-white shadow">
        <img
          src="/images/analytics2.png"
          alt="Imagen de los filtros del CRM"
          className="w-full h-full object-top-left object-cover "
        />
      </div>
    </motion.div>
  );
};

const BigCol2 = () => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ duration: 1, type: "spring", bounce: 0.5 }}
      viewport={{ once: true, amount: 0.4 }}
      className="min-h-[420px] lg:col-start-3 shadow-md rounded-3xl relative overflow-hidden h-full group"
    >
      {/* Capa de imagen con overlay mejorado */}
      <div className="absolute inset-0 z-0 overflow-hidden w-full h-full">
        <img
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
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ duration: 1, type: "spring", bounce: 0.5 }}
      viewport={{ once: true, amount: 0.4 }}
      className="min-h-[420px] relative bg-white shadow-lg rounded-3xl  p-6 flex flex-col justify-between h-full overflow-hidden"
    >
      {/* Fondo decorativo dinámico */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white opacity-70 z-0 pointer-events-none" />
      <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary-100 rounded-full blur-2xl opacity-40 z-0" />

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-start justify-between gap-4 h-full">
        <div className="flex flex-col items-start gap-2">
          <h3 className="text-xl font-bold text-primary-900 text-balance">
            Prioridad a la conversión
          </h3>
          <p className="text-xs text-gray-700 leading-relaxed">
            En <strong>Negoco</strong>, optimizamos cada flujo de trabajo para
            cerrar más ventas rápidamente.
          </p>
        </div>

        <div className="aspect-[500/500] w-full h-full max-w-44 ms-auto">
          <img
            src="/images/conversion.webp"
            alt=""
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>

        <div className="w-full mt-auto">
          <Button className="w-full inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white text-sm py-2.5 rounded-md">
            <TrendingUp className="w-4 h-4" />
            Impulsa tus ratios de conversión
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export { BigCol1, BigCol2, BigCol3 };
