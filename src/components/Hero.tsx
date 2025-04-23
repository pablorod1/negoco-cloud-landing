import { Anchor, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import WhatsApp from "./icons/WhatsappIcon";

export default function HeroSection() {
  return (
    <section className="w-full overflow-hidden py-44 md:pt-48">
      <div className="px-4 md:px-6 lg:px-12 max-w-[1200px] mx-auto flex flex-col items-center justify-center text-center">
        <div className="flex flex-col items-center space-y-8 text-center">
          {/* Notification banner with animation */}
          <motion.div
            className="inline-flex items-center rounded-full bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-800 shadow-xl ring-1 ring-primary-300"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3.4 }}
          >
            <span className="animate-pulse text-sm font-semibold tracking-wide drop-shadow-[0_0_6px_rgba(99,102,241,0.2)]">
              ¡Negoco Cloud ya está aquí! 🚀
            </span>
          </motion.div>

          {/* Main heading with animation */}
          <div className="space-y-6">
            <motion.h1
              className="text-primary-950 text-xl font-bold sm:text-2xl md:text-3xl lg:text-6xl tracking-tight font-eras leading-tight text-shadow-md text-pretty"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 3.6 }}
            >
              Digitaliza y optimiza la gestión de tu{" "}
              <span className="italic text-primary-700 font-clash-regular font-light">
                negocio
              </span>{" "}
              con el CRM de{" "}
              <span className="italic text-primary-700 font-clash-regular font-light">
                Negoco
              </span>
            </motion.h1>

            <motion.p
              className="text-lg text-primary-900/80 text-pretty max-w-4xl w-full mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 3.8 }}
            >
              Transforma la gestión de tus clientes y operaciones con el CRM más
              avanzado para consultorías energéticas y empresas, optimizando la
              productividad y reduciendo costes.
            </motion.p>
          </div>

          {/* CTA buttons with animation */}
          <motion.div
            className="flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.8 }}
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button className="inline-flex w-full h-12 items-center justify-center gap-2 rounded-md bg-primary-950 px-8 text-base font-medium text-white transition-colors hover:bg-[#1e293b]">
                <WhatsApp className="h-12 w-12" />
                Contáctanos por Whatsapp
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant="outline"
                className="inline-flex h-12 items-center justify-center gap-3 rounded-md border border-slate-200 bg-white px-6 text-base font-medium text-slate-900 transition-colors hover:bg-slate-50"
              >
                Solicita tu demo gratuita
                <Anchor size={16} />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
