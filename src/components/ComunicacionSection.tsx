import { cn } from "@/lib/utils";
import SectionComponent from "./SectionComponent";
import { BellRing, MailCheck, Users2 } from "lucide-react";
import { motion } from "framer-motion";

export default function ComunicacionSection() {
  return (
    <SectionComponent
      id="comunicacion"
      title="Comunicación Comercial en Tiempo Real"
      subtitle="Mejora la colaboración entre comerciales y gerentes con alertas inteligentes que mantienen a todos informados al instante. Gestiona tus servicios y trámites con mayor agilidad y control."
      layout="centered"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-16 max-w-7xl mx-auto items-stretch">
        <CommunicationCard
          index={0}
          icon={BellRing}
          title="Alertas multicanal instantáneas"
          description="Cada cambio relevante en trámites o comparativas genera notificaciones inmediatas dentro del CRM y vía correo electrónico. Mejora la experiencia de tus clientes con tiempos de respuesta más ágiles y eficientes."
        />
        <CommunicationCard
          index={1}
          icon={Users2}
          title="Mejor coordinación de colaboradores"
          description="Optimiza la comunicación interna en tu empresa. Los comerciales y gerentes gestionan tareas y datos con mayor claridad, reduciendo errores y mejorando la eficiencia operativa en cada servicio."
        />
        <CommunicationCard
          index={2}
          icon={MailCheck}
          title="Notificaciones personalizadas"
          description="En breve, los gerentes podrán enviar mensajes personalizados a uno o varios de sus colaboradores. Adáptate a las necesidades específicas de cada colaborador en función de su rol y sector."
        />
      </div>
    </SectionComponent>
  );
}

const CommunicationCard = ({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.2,
      }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="flex flex-col gap-6 xl:gap-10 p-4 h-full w-full justify-between text-left">
        <Icon
          strokeWidth={1}
          className={cn("size-6 lg:size-8 xl:size-16 text-primary-700")}
        />

        <div className="flex flex-col gap-2 flex-1">
          <h3 className="text-base md:text-lg lg:text-xl font-semibold text-primary-700 group-hover:text-primary transition">
            {title}
          </h3>
          <p className="text-sm lg:text-base text-slate-600">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};
