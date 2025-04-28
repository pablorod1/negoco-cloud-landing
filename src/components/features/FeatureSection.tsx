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
      className="w-full flex flex-col items-center gap-24"
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
        "w-full max-w-[1600px] mx-auto px-12 lg:px-6 py-16 rounded-xl",
        "bg-gradient-to-br from-gray-50 to-white"
      )}
    >
      <div
        className={cn(
          "flex flex-col items-center lg:items-start lg:justify-between gap-4 lg:gap-32",
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        )}
      >
        <motion.div
          initial={{ opacity: 0, x: reverse ? -80 : 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: reverse ? -80 : 80 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false, amount: 0.8 }}
          className="flex flex-col gap-6 text-center lg:text-left"
        >
          {badge && (
            <span className="text-sm text-primary-700 font-medium tracking-widest uppercase">
              {badge}
            </span>
          )}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-primary-950 text-pretty">
              {title}
            </h3>
            <p className="text-gray-500">{description}</p>
          </div>
        </motion.div>
        {images.length > 1 ? (
          <div className="relative min-h-[400px] h-full w-full max-w-4xl flex justify-end">
            {images.map((image, index) => (
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{
                  duration: 0.6,
                  bounce: 0.6,
                  type: "spring",
                  delay: index * 0.2,
                }}
                viewport={{ once: true, amount: 0.7 }}
                key={index}
                className={cn(
                  "w-full h-full aspect-[901/542] max-w-lg p-0 rounded-lg",
                  "absolute",
                  index === 0
                    ? !reverse
                      ? "top-0 right-0"
                      : "top-0 left-0"
                    : "",
                  index === 1
                    ? !reverse
                      ? "top-[30%] right-[30%]"
                      : "top-[30%] left-[30%]"
                    : ""
                )}
              >
                <img
                  title={title}
                  src={image}
                  alt={title}
                  className="w-full h-auto object-cover shadow-lg rounded-lg"
                />
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{
              duration: 0.6,
              bounce: 0.6,
              type: "spring",
              delay: 0.2,
            }}
            viewport={{ once: true, amount: 0.8 }}
            key={0}
            className="w-full aspect-[1920/556]"
          >
            <img
              title={title}
              src={images[0]}
              alt={title}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        )}
      </div>
    </article>
  );
};
