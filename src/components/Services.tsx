import { motion, type Variants } from "framer-motion";
import { DatabaseZap, Lightbulb, MonitorCog } from "lucide-react";
import SectionComponent from "./SectionComponent";

export default function ServicesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "backIn" },
    },
    hover: {
      y: -10,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
  };

  return (
    <SectionComponent
      title="Servicios que Potencian tu Empresa Energética"
      subtitle="Transforma la forma en que gestionas tu empresa energética con un software diseñado específicamente para el sector energético."
      layout="reverse"
      stickyHeader={true}
    >
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-1 gap-12 w-full max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <ServiceCard
          title="Gestión Integral de Clientes y Datos"
          description="Gestiona tus clientes y datos de manera centralizada, asegurando un control total de la información."
          variants={cardVariants}
          icon="database"
        />

        <ServiceCard
          title="Automatización de Procesos Comerciales"
          description="Optimiza las tareas repetitivas y mejora la eficiencia de tu equipo con nuestra plataforma automatizada."
          variants={cardVariants}
          icon="automation"
        />

        <ServiceCard
          title="Software de Gestión de Suministro Energético"
          description="Gestiona todo el proceso de suministro energético desde la cotización hasta la implementación."
          variants={cardVariants}
          icon="energy"
        />
      </motion.div>
    </SectionComponent>
  );
}

interface ServiceCardProps {
  title: string;
  description: string;
  variants: Variants;
  icon: "database" | "automation" | "energy";
}

const ServiceCard = ({
  title,
  description,
  variants,
  icon,
}: ServiceCardProps) => (
  <motion.div
    className="relative bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl 
    shadow-md hover:shadow-lg border border-gray-100 transition-all duration-300 flex flex-col h-full 
    group cursor-default backdrop-blur-sm"
    initial="hidden"
    variants={variants}
    whileHover="hover"
    whileInView="visible"
    viewport={{ once: true, amount: 0.4 }}
  >
    {/* Icon container with subtle background */}
    <div className="absolute z-10 -top-6">
      <div className="relative flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border border-gray-100 shadow-sm">
        {icon === "database" && (
          <DatabaseZap
            className="w-5 h-5 md:h-7 md:w-7"
            strokeWidth={1.5}
            color="#3B82F6"
          />
        )}
        {icon === "automation" && (
          <MonitorCog
            className="w-5 h-5 md:h-7 md:w-7"
            strokeWidth={1.5}
            color="#3B82F6"
          />
        )}
        {icon === "energy" && (
          <Lightbulb className="h-7 w-7" strokeWidth={1.5} color="#3B82F6" />
        )}
      </div>
    </div>

    <div className="relative z-10 mt-2 md:mt-4 flex-1 flex flex-col items-start h-full justify-between">
      <h3 className="text-base md:text-lg lg:text-xl font-bold text-primary-950 mb-3 group-hover:text-primary-700 transition-colors duration-300">
        {title}
      </h3>
      <div className="w-10 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mb-4 rounded-full transform origin-left group-hover:w-16 transition-all duration-300"></div>
      <p className="text-sm md:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
        {description}
      </p>
    </div>
  </motion.div>
);
