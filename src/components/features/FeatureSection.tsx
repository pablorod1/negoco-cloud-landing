import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface FeatureProps {
  title: string;
  description: string;
  images: string[];
  badge?: string;
  reverse?: boolean;
}

const features: FeatureProps[] = [
  {
    title: "Analítica comercial en tiempo real con dashboards interactivos",
    description:
      "Supervisa KPIs como ventas, comisiones y evolución de trámites mensuales desde un dashboard visual e intuitivo. Toma decisiones estratégicas basadas en datos actualizados al instante con gráficos interactivos que impulsan el rendimiento comercial.",
    badge: "Control total y visión estratégica",
    images: ["/images/yearlyChart.webp", "/images/personalChart.webp"],
  },
  {
    title: "Convierte comparativas en contratos con un clic",
    description:
      "Automatiza la gestión comercial transformando comparativas de tarifas en contratos finales de forma instantánea. Optimiza tus tasas de conversión, reduce errores operativos y acelera el cierre de ventas con tecnología inteligente.",
    badge: "Cierra ventas más rápido",
    images: [
      "/images/comparativa_details.webp",
      "/images/comparativaConversion.webp",
    ],
    reverse: true,
  },
  {
    title: "Actualización masiva del estado de trámites",
    description:
      "Gestiona múltiples trámites de forma simultánea desde un único panel. Mejora la eficiencia operativa y el seguimiento comercial manteniendo al equipo alineado con el estado de cada operación en tiempo real.",
    badge: "Agilidad operativa asegurada",
    images: ["/images/liquidez.webp", "/images/updateStatus.webp"],
  },
  {
    title: "Gestión documental centralizada para equipos comerciales",
    description:
      "Organiza, comparte y controla la documentación de forma eficiente. Los gerentes pueden subir archivos clave por compañía para facilitar el acceso rápido y seguro del equipo comercial desde cualquier lugar.",
    badge: "Documentación accesible y organizada",
    images: ["/images/docs.webp"],
    reverse: true,
  },
  {
    title: "Control de usuarios y gestión de colaboradores",
    description:
      "Invita a colaboradores externos o internos, asigna roles y controla los permisos de acceso. Protege tu información y mejora la colaboración con una plataforma segura y escalable adaptada a equipos dinámicos.",
    badge: "Colaboración segura y controlada",
    images: ["/images/colaboradores.avif"],
  },
];

export const FeaturesSection = () => {
  return (
    <section
      aria-labelledby="features-heading"
      className="w-full flex flex-col items-center gap-12 md:gap-16 lg:gap-24"
    >
      <h2 id="features-heading" className="sr-only">
        Funcionalidades destacadas de Negoco Cloud
      </h2>
      {features.map((feature, index) => (
        <Feature {...feature} key={index} />
      ))}
    </section>
  );
};

const Feature = ({
  title,
  description,
  images,
  reverse,
  badge,
}: FeatureProps) => {
  return (
    <article
      className={cn(
        "w-full max-w-[1600px] mx-auto px-4 lg:px-6 py-8 md:py-12 lg:py-16 rounded-xl",
        "bg-gradient-to-br from-gray-50 to-white"
      )}
    >
      <div
        className={cn(
          "flex flex-col items-center xl:items-start xl:justify-between gap-8 md:gap-12 xl:gap-32",
          reverse ? "xl:flex-row-reverse" : "xl:flex-row"
        )}
      >
        <motion.div
          initial={{ opacity: 0, x: reverse ? -40 : 40, y: 20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: reverse ? -40 : 40, y: 20 }}
          transition={{
            duration: 0.5,
            delay: 0.1,
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
          viewport={{ once: true, amount: 0.4 }}
          className="flex flex-col gap-4 md:gap-6 text-center lg:text-left w-full  xl:w-[45%] px-0"
        >
          {badge && (
            <span className="text-xs md:text-sm text-primary-700 font-medium tracking-widest uppercase">
              {badge}
            </span>
          )}
          <div className="flex flex-col gap-3 md:gap-4">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-primary-950">
              {title}
            </h3>
            <p className="text-sm md:text-base text-gray-500">{description}</p>
          </div>
        </motion.div>
        {images.length > 1 ? (
          <div className="relative min-h-[250px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[400px] h-full w-full max-w-4xl  xl:w-[55%] flex justify-center lg:justify-end mt-8 lg:mt-0">
            {images.map((image, index) => (
              <motion.div
                initial={{ scale: 0.7, opacity: 0, y: 30 }}
                whileInView={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 30 }}
                transition={{
                  duration: 0.5,
                  bounce: 0.4,
                  type: "spring",
                  delay: index * 0.15,
                }}
                viewport={{ once: true, amount: 0.4 }}
                key={index}
                className={cn(
                  "w-full h-full aspect-[901/542] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg p-0 rounded-lg",
                  "absolute hover:z-[60] hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer",
                  index === 0
                    ? !reverse
                      ? "top-0 right-0 md:right-8 lg:right-0"
                      : "top-0 left-0 md:left-8 lg:left-0"
                    : "",
                  index === 1
                    ? !reverse
                      ? "top-[20%] sm:top-[25%] md:top-[30%] right-[20%] sm:right-[25%] md:right-[30%]"
                      : "top-[20%] sm:top-[25%] md:top-[30%] left-[20%] sm:left-[25%] md:left-[30%]"
                    : ""
                )}
              >
                <img
                  title={title}
                  src={image}
                  alt={title}
                  className="w-full h-auto object-cover shadow-lg rounded-lg"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ scale: 0.7, opacity: 0, y: 30 }}
            whileInView={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 30 }}
            transition={{
              duration: 0.5,
              bounce: 0.4,
              type: "spring",
              delay: 0.1,
            }}
            viewport={{ once: true, amount: 0.4 }}
            className="w-full lg:w-3/5 xl:w-[55%] aspect-auto mt-8 lg:mt-0"
          >
            <img
              title={title}
              src={images[0]}
              alt={title}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
              loading="lazy"
            />
          </motion.div>
        )}
      </div>
    </article>
  );
};
