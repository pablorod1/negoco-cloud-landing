import { motion } from "framer-motion";

export default function AnimatedNav() {
  return (
    <nav className="w-full flex justify-center items-center md:justify-end">
      <ul className="m-0 flex items-center justify-between w-full md:justify-end md:text-right md:w-auto md:grid md:grid-cols-2 gap-x-4 md:gap-x-16 md:gap-y-4 text-primary-700 font-clash-regular text-lg">
        <motion.li
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.8, duration: 0.4 }}
        >
          <a href="/contacto">Contacto</a>
        </motion.li>

        <motion.li
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4.2, duration: 0.4 }}
        >
          <a href="/nosotros">Nosotros</a>
        </motion.li>
      </ul>
    </nav>
  );
}
