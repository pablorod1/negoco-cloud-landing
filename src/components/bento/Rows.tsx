import { Play } from "lucide-react";
import { RainbowButton } from "../magicui/rainbow-button";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { PerformanceChart } from "./PerformanceChart";

const BigRow1 = () => {
  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.2 }}
      viewport={{ once: true, amount: 0.2 }}
      className="min-h-[420px] lg:col-span-2 lg:col-start-2 flex flex-col gap-4 bg-gradient-to-br from-white via-white to-gray-200 rounded-3xl  p-6 relative overflow-hidden h-full shadow-center"
    >
      <div className="flex flex-col gap-2 flex-1">
        <h3 className="text-xl font-bold text-primary-900">
          Filtros Personalizados
        </h3>
        <p className="text-gray-700 text-xs">
          Personaliza los filtros de búsqueda para encontrar la información que
          necesitas en segundos. Con <strong>Negoco CRM</strong>, la gestión de
          datos es rápida y sencilla.
        </p>
      </div>
      <div className="relative bottom-0 right-8 flex justify-end aspect-[1809/288] w-full h-32 border border-gray-100 rounded-md overflow-hidden pe-1 ps-2 bg-white shadow">
        <img
          title="Imagen de los filtros del CRM"
          src="/images/filters2.webp"
          alt="Imagen de los filtros del CRM"
          className="w-full h-auto object-top object-cover"
        />
      </div>
      <div className="relative bottom-0 left-8 flex justify-end aspect-[1809/288] w-full h-32 border border-gray-100 rounded-md overflow-hidden pt-1 ps-1 pe-2 bg-white shadow">
        <img
          title="Imagen de los filtros del CRM"
          src="/images/filters1.webp"
          alt="Imagen de los filtros del CRM"
          className="w-full h-auto object-top object-cover"
        />
      </div>
    </motion.div>
  );
};

export default BigRow1;

const BigRow2 = () => {
  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.2 }}
      viewport={{ once: true, amount: 0.2 }}
      className="min-h-[420px] flex flex-col justify-between items-center relative h-full w-full bg-white shadow-center rounded-3xl p-6 overflow-hidden"
    >
      <h3 className="text-xl font-bold text-primary-900 mb-2">
        Descubre cómo tu consultoría puede rendir al máximo
      </h3>

      <div className="w-full h-full flex justify-center items-center gap-5">
        <PerformanceChart value={96} opacity="opacity-30" />
        <PerformanceChart value={97} opacity="opacity-30" />
        <PerformanceChart value={98} />
        <PerformanceChart value={99} opacity="opacity-30" />
        <PerformanceChart value={100} opacity="opacity-30" />
      </div>

      <div className="flex flex-col items-center gap-4">
        <Button variant="outline" className="text-primary-950 ">
          <Play className="size-4" strokeWidth={3} />
          <span>Solicita tu demo gratuita</span>
        </Button>
        <p className="text-gray-600 text-xs text-center ">
          * Sin tarjeta de crédito. 30 días de prueba.
        </p>
      </div>
    </motion.div>
  );
};

export { BigRow1, BigRow2 };
