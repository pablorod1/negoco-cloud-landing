import BentoGrid from "./bento/BentoGrid";
import { motion } from "framer-motion";
import { FeaturesSection } from "./features/FeatureSection";

export default function AnimatedSection() {
  return (
    <motion.section
      initial={{ y: 100 }}
      whileInView={{ y: 0 }}
      exit={{ y: -100 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col gap-y-44 w-full rounded-xl xl:mask-t-from-95% xl:mask-b-from-95% bg-white/90 px-12 xl:px-6 py-12 xl:py-24 z-50 relative"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
        className="flex flex-col items-center xl:flex-row xl:items-start justify-center gap-4 xl:gap-12 w-full xl:max-w-[1600px] mx-auto py-16 relative"
      >
        <h2 className="xl:sticky xl:top-8 text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-primary-950 xl:max-w-lg w-full text-pretty text-center xl:text-left">
          Todo lo que tu consultoría necesita en un CRM de alto rendimiento
        </h2>
        <BentoGrid />
      </motion.div>

      <FeaturesSection />
    </motion.section>
  );
}
