import { Anchor, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ContactModal from "./contact/ContactModal";

export default function HeroSection() {
  return (
    <section className="w-full overflow-hidden pb-24 py-44 md:pt-48">
      <div className="px-4 md:px-6 lg:px-12 max-w-[1600px] mx-auto flex flex-col items-center justify-center text-center">
        <div className="flex flex-col items-center space-y-8 text-center">
          {/* Notification banner with animation */}
          <motion.div
            className="inline-flex items-center rounded-full bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-800 shadow-xl ring-1 ring-primary-300"
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 1.6,
              type: "spring",
              bounce: 0.4,
            }}
          >
            <span className="animate-pulse text-sm font-semibold tracking-wide drop-shadow-[0_0_6px_rgba(99,102,241,0.2)]">
              ¡Negoco Cloud ya está aquí! 🚀
            </span>
          </motion.div>

          {/* Main heading with animation */}
          <div className="space-y-6">
            <motion.h1
              className="text-primary-950 text-xl font-bold sm:text-2xl md:text-3xl lg:text-7xl tracking-tight font-eras leading-tight text-shadow-md "
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.8, ease: "easeOut" }}
            >
              El CRM para empresas energéticas y{" "}
              <span className="italic text-primary-700 font-clash-regular font-light">
                consultorías
              </span>{" "}
              modernas
            </motion.h1>

            <motion.p
              className="text-sm md:text-base xl:text-lg text-primary-900/80 xl:max-w-5xl w-full mx-auto leading-relaxed text-pretty"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2, ease: "easeOut" }}
            >
              Digitaliza la gestión de clientes, automatiza procesos y mejora la
              productividad con un CRM diseñado para el sector energético.
              Negoco Cloud potencia tu operativa diaria y reduce costes desde el
              primer día.
            </motion.p>
          </div>

          {/* CTA buttons with animation */}
          <motion.div
            className="flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.2, ease: "easeOut" }}
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              {/* <Button className="inline-flex w-full h-12 items-center justify-center gap-2 rounded-md bg-primary-950 px-8 text-base font-medium text-white transition-colors hover:bg-[#1e293b]">
                <WhatsApp className="h-12 w-12" />
                Contáctanos por Whatsapp
              </Button> */}
              <Button asChild variant="primary" size="lg">
                <a
                  title="Correo electrónico Negoco Cloud"
                  href="mailto:info@negococloud.es"
                >
                  <Mail />
                  Contáctanos por correo
                </a>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <ContactModal plan="demo" icon={<Anchor size={16} />} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
