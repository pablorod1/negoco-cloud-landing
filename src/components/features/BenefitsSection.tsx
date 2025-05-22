"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { BarChart3, Zap, ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ContactModal from "../contact/ContactModal";

export default function BenefitsSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 15,
      },
    },
  };

  const benefitsData = [
    {
      icon: (
        <img
          src="/icons/automatizacion.webp"
          alt="Automatización"
          width={40}
          height={40}
        />
      ),
      title: "Automatización sin complicaciones",
      description:
        "Olvídate de tareas repetitivas. Gana tiempo y dedica tus recursos a lo que realmente importa: vender.",
      stat: "45%",
      statLabel: "Reducción del tiempo",
      color: "from-primary-500 to-primary-600",
      lightColor: "from-primary-100 to-primary-200",
      accent: "#0ea5e9", // Cyan 500
    },
    {
      icon: (
        <img src="/icons/360.webp" alt="Visión 360" width={40} height={40} />
      ),
      title: "Visión 360º de tu negocio",
      description:
        "Consulta en segundos el estado de tus operaciones, márgenes y cartera de clientes. Todo, en tiempo real.",
      stat: "87%",
      statLabel: "Precisión en previsiones",
      color: "from-violet-500 to-purple-600",
      lightColor: "from-violet-100 to-purple-200",
      accent: "#8b5cf6", // Violet 500
    },
    {
      icon: (
        <img
          src="/icons/escalable.webp"
          alt="Escalabilidad"
          width={40}
          height={40}
        />
      ),
      title: "Escalabilidad inmediata",
      description:
        "¿Crecimiento? No es un problema. Nuestro CRM se adapta al ritmo de tu consultoría, sin fricciones ni cuellos de botella.",
      stat: "3x",
      statLabel: "Capacidad de crecimiento",
      color: "from-emerald-500 to-teal-600",
      lightColor: "from-emerald-100 to-teal-200",
      accent: "#10b981", // Emerald 500
    },
  ];

  return (
    <section
      ref={ref}
      className="w-full relative py-24 bg-primary-950 h-full"
      aria-labelledby="crm-beneficios-heading"
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.h2
            id="crm-beneficios-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Principales beneficios de un{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent italic font-clash-regular">
              CRM energético
            </span>
          </motion.h2>

          <motion.p
            className="text-slate-100 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Automatiza, centraliza y escala. Todo lo que tu consultoría necesita
            para vender más con menos esfuerzo.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid lg:grid-cols-2 gap-12 relative items-center"
        >
          {benefitsData.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={cn(
                "group relative",
                index === 2 ? "lg:col-span-2" : "",
                "lg:max-w-xl lg:mx-auto"
              )}
              whileHover={{ translateY: -5, transition: { duration: 0.3 } }}
            >
              <div className="absolute inset-0 bg-white rounded-2xl rotate-1 opacity-50 group-hover:rotate-2 transition-transform duration-300"></div>
              <div className="absolute inset-0 bg-white rounded-2xl -rotate-1 opacity-50 group-hover:-rotate-2 transition-transform duration-300"></div>

              <div className="relative bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 h-full">
                {/* Barra de color superior */}
                <div
                  className={`h-1.5 w-full bg-gradient-to-r ${benefit.color}`}
                ></div>

                <div className="grid md:grid-cols-12 items-stretch">
                  {/* Columna izquierda con icono y número */}
                  <div className="md:col-span-3 p-6 flex flex-col items-center justify-center relative overflow-hidden">
                    {/* Fondo decorativo */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${benefit.lightColor} opacity-20`}
                    ></div>
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/80 to-transparent"></div>

                    {/* Líneas decorativas */}
                    <svg
                      className="absolute inset-0 w-full h-full"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                    >
                      <path
                        d={`M0 ${50 + index * 10} Q ${25 + index * 5} ${20 + index * 5}, 100 ${30 + index * 8}`}
                        stroke={benefit.accent}
                        strokeWidth="0.2"
                        fill="none"
                        className="opacity-30"
                      />
                      <path
                        d={`M0 ${60 + index * 5} Q ${50 - index * 8} ${70 - index * 5}, 100 ${40 + index * 10}`}
                        stroke={benefit.accent}
                        strokeWidth="0.2"
                        fill="none"
                        className="opacity-30"
                      />
                    </svg>

                    {/* Contenido */}
                    <div className="relative z-10 flex flex-col items-center">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${benefit.color} text-white rounded-xl flex items-center justify-center mb-4 shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110`}
                      >
                        {benefit.icon}
                      </div>
                      <div className="text-center">
                        <span
                          className={`block text-3xl font-bold bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent`}
                        >
                          {benefit.stat}
                        </span>
                        <span className="text-xs text-slate-500 font-medium">
                          {benefit.statLabel}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Contenido principal */}
                  <div className="md:col-span-9 p-6 md:pl-8 flex flex-col justify-between relative">
                    {/* Elemento decorativo */}
                    <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent opacity-70"></div>

                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-center">
                        <span>{benefit.title}</span>
                        <div
                          className={`ml-2 w-2 h-2 rounded-full bg-gradient-to-r ${benefit.color}`}
                        ></div>
                      </h3>
                      <p className="text-slate-600">{benefit.description}</p>
                    </div>

                    {/* <div className="mt-6 flex justify-end">
                      <Button
                        variant="ghost"
                        className={`rounded-full group-hover:bg-gradient-to-r ${benefit.color} group-hover:text-white transition-all duration-300 px-5 hover:text-white`}
                      >
                        <span>Explorar</span>
                        <ChevronRight className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Button>
                    </div> */}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <ContactModal
            plan="demo"
            icon={<ArrowRight className="w-4 h-4" />}
            buttonText="Solicita tu prueba gratuita"
            buttonVariant={"outline"}
          />
        </motion.div>
      </div>
    </section>
  );
}
