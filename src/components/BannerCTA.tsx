import { PlayCircle } from "lucide-react";
import ContactModal from "./contact/ContactModal";

export default function BannerCTA() {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat overflow-hidden min-h-[300px] flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/banner_bg.webp')", // Asegúrate de tener esta imagen en tu public folder o cámbiala por una que encaje.
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 text-center px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Lleva la gestión de tu consultoría energética al siguiente nivel
        </h2>
        <p className="text-white text-sm md:text-base mb-6">
          Unifica procesos, automatiza tareas y mejora la productividad desde
          una única plataforma web.
        </p>
        <ContactModal
          plan="demo"
          buttonText="Solicita tu prueba gratuita"
          icon={<PlayCircle />}
          buttonVariant="outline"
        />
      </div>
    </div>
  );
}
