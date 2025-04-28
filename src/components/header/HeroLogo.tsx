import { motion } from "framer-motion";
import { SpinningText } from "../magicui/spinning-text";
import React from "react";

export default function HeroLogo() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Check on initial load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <motion.div
      initial={{ y: "70%", scale: isMobile ? 0.8 : 1.5 }}
      animate={{
        y: isMobile ? -10 : -70,
        scale: 0.5, // Se reduce de tamaño
      }}
      transition={{ delay: 0.4, duration: 1.5, ease: "backInOut" }}
      className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-72 md:max-w-96 flex justify-center aspect-[2048/1950]"
    >
      <motion.div
        className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <SpinningText
          duration={20}
          radius={isMobile ? 8 : 12}
          className="text-primary-600 text-xl font-clash-medium"
        >
          más ágil • más eficiente • más rentable •
        </SpinningText>
      </motion.div>
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        title="Negoco Cloud Logo"
        src="/logo/logo_hd_opt.webp"
        alt="Negoco Cloud Logo"
        className="w-auto h-auto object-cover drop-shadow-lg"
      />
    </motion.div>
  );
}
