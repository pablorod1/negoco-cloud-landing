import WhatsApp from "./icons/WhatsappIcon";
import { motion } from "framer-motion";

export default function WhatsappButton() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2, delay: 4, bounce: 0.5 }}
      exit={{ opacity: 0, scale: 0.5 }}
      className="fixed bottom-8 right-8 z-50"
    >
      <a
        href="https://wa.me/573053000000"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full p-4 inline-flex justify-start items-center bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
      >
        <WhatsApp className="w-6 h-6" />
      </a>
    </motion.div>
  );
}
