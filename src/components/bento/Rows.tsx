import {
  Filter,
  Folder,
  Mail,
  Play,
  Settings,
  TrendingUp,
  Users2,
} from "lucide-react";
import { motion } from "framer-motion";
import { PerformanceChart } from "./PerformanceChart";
import ContactModal from "../contact/ContactModal";

const items = [
  {
    title: "Analíticas en tiempo real",
    icon: TrendingUp,
  },
  {
    title: "Alertas multicanal",
    icon: Mail,
  },
  {
    title: "Gestión de colaboradores",
    icon: Users2,
  },
  {
    title: "Filtros avanzados",
    icon: Filter,
  },
  {
    title: "Automación de tareas",
    icon: Settings,
  },
  {
    title: "Documentación accesible",
    icon: Folder,
  },
];

const BigRow1 = () => {
  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true, amount: 0.2 }}
      className="min-h-[420px] md:col-span-2 md:col-start-2 flex flex-col gap-8 bg-white via-primary-500 to-primary-900 rounded-3xl  p-6 relative overflow-hidden h-full shadow-center"
    >
      <div className="flex flex-col gap-2 flex-1">
        <h3 className="text-xl font-bold text-primary-900">
          Todo tu negocio en un solo lugar
        </h3>
        <p className="text-gray-700 text-xs">
          Desde la generación de leads hasta la firma digital, automatiza sin
          fricción y escala operaciones.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-2 w-full h-full justify-center items-center">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-4 text-gray-700 text-xs text-center "
          >
            <div className="bg-primary-950 rounded-xl p-4 text-gray-100 shadow-badge border border-primary-900">
              <item.icon className="size-4 md:size-6 xl:size-8" />
            </div>
            <p className="text-gray-600">{item.title}</p>
          </div>
        ))}
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
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true, amount: 0.2 }}
      className="min-h-[420px] flex flex-col justify-between items-center relative h-full w-full bg-white shadow-center rounded-3xl p-6 overflow-hidden"
    >
      <h3 className="text-xl font-bold text-primary-900 mb-2">
        Potencia el rendimiento de tu consultoría
      </h3>
      <p className="text-gray-700 text-xs leading-relaxed text-pretty">
        Optimiza cada tarea con tecnología específica para el sector energético.
      </p>

      <div className="w-full h-full flex justify-center items-center gap-5 py-8">
        <PerformanceChart value={96} opacity="opacity-30" />
        <PerformanceChart value={97} opacity="opacity-30" />
        <PerformanceChart value={98} />
        <PerformanceChart value={99} opacity="opacity-30" />
        <PerformanceChart value={100} opacity="opacity-30" />
      </div>

      <div className="flex flex-col items-center gap-4">
        <ContactModal
          plan="demo"
          buttonText="Solicita tu demo gratuita"
          buttonVariant="primary"
          icon={<Play className="size-4" />}
        />
        <p className="text-gray-600 text-xs text-center ">
          * Sin tarjeta de crédito. 30 días de prueba.
        </p>
      </div>
    </motion.div>
  );
};

export { BigRow1, BigRow2 };
