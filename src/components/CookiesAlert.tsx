import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { XIcon } from "lucide-react"; // Importar ícono de cierre

export default function CookiesAlert() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const cookiesAccepted =
      typeof window !== "undefined" && localStorage.getItem("cookiesAccepted");
    setIsVisible(!cookiesAccepted);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.5 }}
      className={cn(
        "fixed bottom-4 left-4 right-4  max-w-xl mx-auto bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-lg shadow-lg p-4 text-sm z-50 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:space-x-4 border border-gray-300 dark:border-gray-600",
        isVisible ? "block" : "hidden"
      )}
    >
      <div className="flex-1">
        <p>
          Utilizamos cookies para mejorar tu experiencia y analizar el tráfico.
          Al continuar navegando aceptas nuestra{" "}
          <span className="underline text-blue-600 dark:text-blue-400">
            política de cookies
          </span>
          .
        </p>
      </div>
      <div className="flex space-x-2 justify-end mt-4">
        <Button
          variant="primary"
          onClick={() => {
            setIsVisible(false);
            if (typeof window !== "undefined") {
              localStorage.setItem("cookiesAccepted", "true");
            }
          }}
        >
          Aceptar
        </Button>
        <Button
          variant="secondary"
          onClick={() => {
            setIsVisible(false);
          }}
        >
          Rechazar
        </Button>
      </div>
      <button
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        onClick={() => setIsVisible(false)}
        aria-label="Cerrar"
      >
        <XIcon className="w-5 h-5" />
      </button>
    </motion.div>
  );
}
