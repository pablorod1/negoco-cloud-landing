import { motion } from "framer-motion";
import { BigCol1, BigCol2, BigCol3 } from "./Cols";
import { BigRow1 } from "./Rows";

export default function BentoGrid() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col items-center xl:flex-row xl:items-start justify-center gap-4 xl:gap-12 w-full xl:max-w-[1600px] mx-auto py-16"
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-col gap-4 text-center xl:text-left"
      >
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-primary-950 text-pretty">
          Todo lo que necesitas para tu{" "}
          <span className="italic text-primary-700 font-clash-regular font-light">
            negocio
          </span>
        </h2>
        <p className="text-gray-500 max-w-2xl w-full">
          Con Negoco, tendrás acceso a una amplia gama de herramientas y
          funcionalidades diseñadas para optimizar la gestión de tu negocio y
          mejorar la experiencia de tus clientes.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-3 grid-rows-2 gap-x-4 gap-y-4"
      >
        <BigCol1 />
        <BigCol2 />
        <BigCol3 />
        <BigRow1 />
      </motion.div>
    </motion.div>
  );
}
