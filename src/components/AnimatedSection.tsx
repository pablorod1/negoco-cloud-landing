import BentoGrid from "./bento/BentoGrid";
import { motion } from "framer-motion";
import FeatureSection from "./features/FeatureSection";

export default function AnimatedSection() {
  return (
    <motion.section
      initial={{ y: 100 }}
      whileInView={{ y: 0 }}
      exit={{ y: -100 }}
      transition={{ duration: 1.3 }}
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col gap-y-44 w-full rounded-xl mask-t-from-95% mask-b-from-95% bg-white/90 px-12 xl:px-6 py-32 z-50"
    >
      <BentoGrid />

      <FeatureSection
        title="Analíticas comerciales en tiempo real con gráficos interactivos"
        description="Visualiza indicadores clave como ventas, comisiones y evolución mensual de trámites con gráficos dinámicos. Toma decisiones basadas en datos y potencia el rendimiento de tu equipo desde un dashboard intuitivo y actualizado al instante."
        badge="Control total y visión estratégica"
        images={["/images/yearlyChart.webp", "/images/personalChart.webp"]}
      />

      <FeatureSection
        title="Convierte comparativas en contratos con un solo clic"
        description="Digitaliza tu proceso comercial: transforma comparativas de tarifas en trámites finales de forma automática. Aumenta la conversión, reduce errores y acelera el cierre de ventas con la inteligencia operativa de Negoco."
        badge="Cierra ventas más rápido"
        images={[
          "/images/comparativa_details.webp",
          "/images/comparativaConversion.webp",
        ]}
        reverse
      />

      <FeatureSection
        title="Gestión masiva del estado de trámites"
        description="Optimiza tiempos actualizando el estado de múltiples trámites en simultáneo. Mejora el seguimiento comercial y mantén a tu equipo alineado con la evolución de cada operación desde un único panel de control."
        badge="Agilidad operativa asegurada"
        images={["/images/liquidez.webp", "/images/updateStatus.webp"]}
      />

      <FeatureSection
        title="Gestión documental centralizada para comerciales"
        description="Los gerentes pueden subir y organizar la documentación de las compañías para que cada comercial tenga acceso rápido y ordenado. Negoco convierte la gestión documental en una ventaja competitiva."
        badge="Documentación accesible y organizada"
        images={["/images/docs.webp"]}
        reverse
      />
    </motion.section>
  );
}
