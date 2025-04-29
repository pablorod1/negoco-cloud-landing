import React from "react";
import { cn } from "@/lib/utils";
import { motion, type Variants } from "framer-motion";

interface SectionComponentProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  id?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  contentClassName?: string;
  layout?: "standard" | "reverse" | "centered";
  withAnimation?: boolean;
  stickyHeader?: boolean;
}

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      when: "beforeChildren",
    },
  },
};

const headerVariants = {
  title: {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },
  subtitle: {
    hidden: { opacity: 0, y: -15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.2, ease: "easeOut" },
    },
  },
};

export default function SectionComponent({
  children,
  title,
  subtitle,
  id,
  className,
  titleClassName,
  subtitleClassName,
  contentClassName,
  layout = "standard",
  withAnimation = true,
  stickyHeader = false,
}: SectionComponentProps) {
  // Define layout-specific classes
  const layoutClasses = {
    standard:
      "flex flex-col items-center justify-center gap-8 xl:gap-12 xl:flex-row xl:items-start xl:justify-between",
    reverse:
      "flex flex-col items-center justify-center xl:flex-row-reverse xl:items-start xl:justify-between gap-8 xl:gap-12",
    centered:
      "flex flex-col items-center justify-center gap-8 xl:gap-12 text-center",
  };

  // Component to render based on animation preference
  const Component = withAnimation ? motion.section : "section";
  const animationProps = withAnimation
    ? {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: false, amount: 0.2 },
        variants: sectionVariants,
      }
    : {};

  return (
    <Component
      id={id}
      className={cn(
        layoutClasses[layout],
        "w-full xl:max-w-[1600px] mx-auto px-12 py-24 xl:px-6 xl:py-32 pb-28 relative",
        !stickyHeader ? "overflow-hidden" : "",
        className
      )}
      {...animationProps}
    >
      {/* Section Header */}
      {(title || subtitle) && (
        <motion.div
          className={cn(
            "flex flex-col gap-4 items-center xl:items-start",
            layout === "standard" && "text-center xl:text-left",
            layout === "reverse" && "text-center xl:text-left xl:self-start",
            layout === "centered" && "text-center xl:items-center",
            "max-w-4xl",
            stickyHeader ? "xl:sticky xl:top-8" : ""
          )}
          initial={withAnimation ? "hidden" : undefined}
          whileInView={withAnimation ? "visible" : undefined}
          viewport={withAnimation ? { once: true, amount: 0.3 } : undefined}
        >
          {title && (
            <motion.h2
              className={cn(
                "text-lg md:text-2xl lg:text-4xl font-bold text-primary-950 text-pretty",
                titleClassName
              )}
              variants={withAnimation ? headerVariants.title : undefined}
            >
              {title}
            </motion.h2>
          )}
          {subtitle && (
            <motion.p
              className={cn(
                "text-gray-500 text-sm md:text-base",
                subtitleClassName
              )}
              variants={withAnimation ? headerVariants.subtitle : undefined}
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      )}

      {/* Section Content */}
      <div className={cn("w-full", contentClassName)}>{children}</div>
    </Component>
  );
}
