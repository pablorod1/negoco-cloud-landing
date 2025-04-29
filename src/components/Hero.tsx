import { Anchor, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ContactModal from "./contact/ContactModal";

export default function HeroSection() {
  return (
    <section
      className="w-full overflow-hidden pb-24 py-44 md:pt-48"
      aria-labelledby="hero-heading"
    >
      <article className="px-4 md:px-6 lg:px-12 max-w-[1600px] mx-auto flex flex-col items-center justify-center text-center">
        {/* Header semántico */}
        <header className="flex flex-col items-center space-y-8 text-center">
          {/* Banner animado */}
          <motion.div
            className="inline-flex items-center rounded-full bg-primary-950 px-6 py-1.5 text-sm font-medium text-white ring-1 ring-primary-900 shadow-badge"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 2,
              type: "spring",
              bounce: 0.6,
            }}
          >
            <span className="animate-in text-sm tracking-wide">
              ¡Negoco Cloud ya está aquí! 🚀
            </span>
          </motion.div>

          {/* Título principal + subtítulo */}
          <div className="space-y-6">
            <motion.h1
              id="hero-heading"
              className="text-primary-950 text-xl font-bold sm:text-2xl md:text-3xl lg:text-5xl xl:text-7xl tracking-tight font-eras leading-tight text-shadow-md"
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
              className="text-sm md:text-base xl:text-lg text-primary-900/80 lg:max-w-4xl xl:max-w-5xl w-full mx-auto leading-relaxed text-pretty"
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
        </header>

        {/* Footer con CTAs */}
        <footer className="mt-10">
          <motion.div
            className="flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.2, ease: "easeOut" }}
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
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
        </footer>
      </article>

      {/* Texto alternativo para accesibilidad y SEO */}
      <p className="sr-only">
        Negoco Cloud es un CRM diseñado para el sector de la energía. Mejora la
        gestión de clientes, automatiza procesos y reduce costes desde el primer
        día.
      </p>
    </section>
  );
}
