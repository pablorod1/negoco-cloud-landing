import { motion } from "framer-motion";
import { BigCol1, BigCol2 } from "./Cols";
import { BigRow1, BigRow2 } from "./Rows";

export default function BentoGrid() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      viewport={{ once: true }}
      className="grid grid-cols-1 lg:grid-cols-3 grid-rows-2 gap-x-4 gap-y-4 "
    >
      <BigCol1 />
      <BigCol2 />
      <BigRow2 />
      <BigRow1 />
    </motion.div>
  );
}
