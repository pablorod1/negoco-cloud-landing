import { motion, type Variants } from "framer-motion";
import SectionComponent from "./SectionComponent";
import { Lock, Users } from "lucide-react";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "./ui/hover-card";
import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { cn } from "@/lib/utils";

export default function SecuritySection() {
  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.3 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        bounce: 0.6,
        type: "spring",
      },
    },
  };

  return (
    <SectionComponent
      title="Control Total de la Información y Colaboración Segura"
      subtitle="Gestiona y protege tus datos y los de tus clientes con un sistema seguro y fácil de usar."
      className="xl:pt-52"
    >
      <div className="relative w-full h-full min-h-[500px] flex justify-center items-center md:mt-24 xl:mt-0">
        {/* Background image with shield */}
        <div className="absolute  z-0 aspect-[1024/1024] max-w-3xl w-full h-full flex justify-center items-center">
          <img
            src="/images/shield_hd.avif"
            alt="Security Shield"
            className="w-full h-auto object-contain opacity-80"
          />
        </div>

        {/* Top right bubble */}
        <motion.div
          className="absolute right-0 top-12 lg:top-8 lg:right-1/2 z-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={cardVariants}
          whileHover="hover"
        >
          <SecurityBubble
            title="Seguridad de Datos"
            description="Mantén la privacidad de los datos con nuestra gestión avanzada de seguridad."
            icon={<Lock className="h-6 w-6 text-primary-600" />}
            position="left"
          />
        </motion.div>

        {/* Bottom left bubble */}
        <motion.div
          className="absolute left-0 bottom-16 lg:bottom-16 lg:left-1/2 z-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={cardVariants}
          whileHover="hover"
          transition={{ delay: 0.2 }}
        >
          <SecurityBubble
            title="Colaboración Segura"
            description="Invita colaboradores y asigna roles con permisos para mantener el control sobre los accesos."
            icon={<Users className="h-6 w-6 text-primary-600" />}
            position="right"
          />
        </motion.div>
      </div>
    </SectionComponent>
  );
}

interface SecurityBubbleProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  position: "left" | "right";
}

function SecurityBubble({
  title,
  description,
  icon,
  position,
}: SecurityBubbleProps) {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize(); // Check on initial load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      {!isMobile ? (
        <HoverCard openDelay={0}>
          <HoverCardTrigger aria-label={`Descubrir más sobre ${title}`}>
            <div className="p-3 bg-white rounded-full cursor-pointer shadow-inner">
              {icon}
            </div>
          </HoverCardTrigger>
          <HoverCardContent side={position} className="w-full lg:max-w-[480px]">
            <div className="flex flex-col items-start gap-2 w-full">
              <h3 className="text-xl font-bold text-gray-800">{title}</h3>
              <p className="text-gray-600 text-base">{description}</p>
            </div>
          </HoverCardContent>
        </HoverCard>
      ) : (
        <Card className="gap-2">
          <CardHeader
            className={cn(
              "w-full",
              position === "left" ? "justify-start" : "justify-end"
            )}
          >
            {icon}
          </CardHeader>
          <CardContent>
            <div
              className={cn(
                "flex flex-col items-start gap-2 w-full",
                position === "left" ? "items-start" : "items-end text-right"
              )}
            >
              <h3 className="text-base md:text-lg font-bold text-gray-800">
                {title}
              </h3>
              <p className="text-gray-600 text-sm">{description}</p>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
}
