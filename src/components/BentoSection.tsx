import BentoGrid from "./bento/BentoGrid";
import { motion } from "framer-motion";

export default function BentoSection() {
  return (
    <motion.section
      initial={{ y: 100 }}
      whileInView={{ y: 0 }}
      exit={{ y: -100 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col gap-y-44 w-full px-12 xl:px-6 py-12 xl:py-24 z-50 relative max-w-[1600px] mx-auto"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
        className="flex flex-col items-center xl:flex-row xl:items-start justify-center gap-4 xl:gap-12 w-full xl:max-w-[1600px] mx-auto py-16 relative"
      >
        <div className="flex flex-col w-full xl:max-w-lg gap-8 h-full">
          <motion.h2
            className="relative text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-primary-950 text-pretty text-center xl:text-left mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            ¿Qué es un CRM para energía y por qué tu consultoría lo necesita?
            <motion.span
              className="hidden xl:block absolute left-1/2 xl:left-0 -bottom-2 w-1/2 xl:w-1/3 h-1 bg-gradient-to-r from-primary-400 to-primary-700 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              style={{ transformOrigin: "left" }}
            />
          </motion.h2>
          <motion.p
            className="text-gray-700 text-sm md:text-base  text-center xl:text-left px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Un CRM para energía es una plataforma diseñada específicamente para
            automatizar y controlar el ciclo comercial de consultoras y
            comercializadoras energéticas. Desde la captación de leads hasta la
            firma de contratos, centraliza procesos críticos y maximiza el
            rendimiento de tu equipo.
          </motion.p>
          <motion.p
            className="text-gray-700 text-sm md:text-base  text-center xl:text-left px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Negoco Cloud va más allá: se adapta a las dinámicas del sector,
            reduce la carga operativa y te permite escalar con eficiencia.
          </motion.p>
          <motion.p
            className="sr-only"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Un CRM para energía permite a consultorías energéticas gestionar
            clientes, leads y operaciones comerciales de forma digital. Negoco
            Cloud centraliza todos los procesos del sector energético y los
            convierte en acciones automatizadas.
          </motion.p>
        </div>
        <BentoGrid />
      </motion.div>
    </motion.section>
  );
}
