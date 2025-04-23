import { Play } from "lucide-react";
import { RainbowButton } from "../magicui/rainbow-button";
import { motion } from "framer-motion";

const BigRow1 = () => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
      viewport={{ once: true, amount: 0.4 }}
      className="min-h-[420px] lg:col-span-2 lg:col-start-2 flex flex-col gap-4 bg-gradient-to-br from-white via-white to-gray-200 rounded-3xl  p-6 relative overflow-hidden h-full shadow-md border border-gray-100"
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
          src="/images/filters2.png"
          alt="Imagen de los filtros del CRM"
          className="w-full h-auto object-top object-cover"
        />
      </div>
      <div className="relative bottom-0 left-8 flex justify-end aspect-[1809/288] w-full h-32 border border-gray-100 rounded-md overflow-hidden pt-1 ps-1 pe-2 bg-white shadow">
        <img
          src="/images/filters1.png"
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
    <div className="flex flex-col justify-between items-center relative h-full w-full bg-gradient-to-b from-primary-500 via-primary-50 to-white shadow-lg md:rounded-tr-3xl rounded-sm p-6  overflow-hidden">
      <div className="flex flex-col items-center text-center  mb-6 ">
        <h3 className="text-lg font-semibold text-white text-pretty">
          Un CRM diseñado para consultorías que buscan eficiencia
        </h3>
      </div>
      <div
        className="aspect-[1911/966] max-w-[600px] mx-auto w-full h-auto overflow-hidden rounded-lg shadow-lg "
        style={{
          maskImage: "linear-gradient(to bottom, black 60%, transparent)",
        }}
      >
        <img
          src="/images/dashboard.webp"
          alt="Dashboard Screenshot"
          className="w-auto h-auto object-cover"
        />
      </div>

      <RainbowButton className="text-white gap-2 text-sm mt-6 rounded-md">
        <Play className="size-4" strokeWidth={3} />
        <span>Solicita tu demo gratuita</span>
      </RainbowButton>
    </div>
  );
};

export { BigRow1, BigRow2 };
