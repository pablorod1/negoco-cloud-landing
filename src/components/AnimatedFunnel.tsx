import { cn } from "@/lib/utils";
import Acrobat from "./icons/AcrobatIcon";
import Dropbox from "./icons/DropboxIcon";
import ExcelIcon from "./icons/ExcelIcon";
import Gmail from "./icons/GmailIcon";
import GoogleDataStudio from "./icons/GoogleDataStudio";
import GoogleDrive from "./icons/GoogleDriveIcon";
import GoogleMeet from "./icons/GoogleMeetIcon";
import ICloud from "./icons/ICloudIcon";
import MicrosoftTeams from "./icons/MicrosoftTeamsIcon";
import WhatsApp from "./icons/WhatsappIcon";
import { Marquee } from "./magicui/marquee";
import { motion, useInView } from "framer-motion";
import DynamicBarChart from "./DynamicBarChart";
import { TrendingUp } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const iconSize = "w-6 h-6 xl:w-8 xl:h-8 drop-shadow-lg";

const firstRow = [
  <WhatsApp className={iconSize} />,
  <Gmail className={iconSize} />,
  <GoogleMeet className={iconSize} />,
  <MicrosoftTeams className={iconSize} />,
];

const secondRow = [
  <Dropbox className={iconSize} />,
  <GoogleDrive className={iconSize} />,
  <ICloud className={iconSize} />,
];

const thirdRow = [
  <GoogleDataStudio className={iconSize} />,
  <ExcelIcon className={iconSize} />,
  <Acrobat className={iconSize} />,
];

const rows = [
  { id: 1, items: firstRow },
  { id: 2, items: secondRow },
  { id: 3, items: thirdRow },
];

export default function AnimatedFunnel() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 1.3 }}
      viewport={{ once: true, amount: 0.3 }}
      className="hidden lg:flex w-full px-8 md:px-0 max-w-5xl mx-auto xl:max-w-none justify-center items-center py-24 relative overflow-hidden"
    >
      <div className="flex justify-center items-center relative max-w-[1380px] w-full mx-auto">
        <div className="absolute top-0 -left-4 w-24 h-full bg-white blur-md z-30"></div>
        <div className="grid gap-10 xl:gap-16 w-[400px] xl:w-[600px] relative">
          {rows.map(({ items, id }) => (
            <div key={id} className="relative">
              <div className="bg-gradient-to-r from-primary-400 via-primary-500 to-primary-400 rounded-full w-[450px] xl:w-[700px] h-1 relative flex items-center">
                <Marquee
                  reverse
                  className={cn(" relative z-10", {
                    "[--gap:6rem] [--duration:9s]": id === 1,
                    "[--gap:8rem] [--duration:8s]": id === 2,
                    "[--gap:8rem] [--duration:7s]": id === 3,
                  })}
                >
                  {items.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center gap-4 h-10 w-10 xl:h-15 xl:w-15 bg-white shadow-[0px_0px_8px_0px_rgba(0,0,0,0.15)] p-1 rounded-full"
                    >
                      {item}
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
          ))}
        </div>
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="aspect-[512/512] w-34 h-34 xl:w-52 xl:h-52 relative z-20 rounded-full"
          style={{
            background: "linear-gradient(145deg, #ffffff, #f0f0f0)",
            boxShadow: `
              0px 0px 16px rgba(0, 0, 0, 0.1),
              0px 0px 16px rgba(255, 255, 255, 0.8),
              inset 2px 2px 4px rgba(255, 255, 255, 0.9),
              inset -2px -2px 4px rgba(0, 0, 0, 0.05)
            `,
          }}
        >
          <div className="absolute inset-0 rounded-full bg-primary-50/30 backdrop-blur-[2px]"></div>
          <img
            title="Negoco Logo"
            loading="lazy"
            src="/logo/logo_hd_opt.webp"
            alt="Negoco Logo"
            className="w-full h-full object-cover p-2 relative z-10 drop-shadow-sm"
          />
        </motion.div>
        <div className="bg-primary-500 rounded-full w-24 h-1 relative flex items-center">
          <Marquee
            reverse
            repeat={1}
            className="[--duration:2s] w-full justify-end"
          >
            <motion.div
              animate={{ scale: [1, 1.5, 1] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="bg-primary-500 rounded-full w-4 h-4 border border-primary-400 shadow"
            ></motion.div>
          </Marquee>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative flex items-center justify-center right-6 w-full max-w-xs xl:max-w-sm"
        >
          {/* Background layers for depth effect */}

          <motion.div
            variants={itemVariants}
            className="w-[96%] h-full absolute top-2 mx-auto rounded-lg bg-white shadow-lg border border-gray-100"
          />

          {/* Main container */}
          <motion.div
            variants={itemVariants}
            className="w-full h-full bg-white relative z-30 rounded-lg flex flex-col gap-4 p-6 border border-gray-100 shadow"
          >
            <motion.div
              variants={itemVariants}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-between"
            >
              <h3 className="text-base xl:text-lg font-semibold text-gray-800">
                Todo en un solo lugar
              </h3>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                Integrado
              </span>
            </motion.div>

            <motion.div variants={itemVariants} className="relative">
              <div className="absolute -inset-4 bg-gradient-to-b from-white via-transparent to-transparent z-10" />
              <DynamicBarChart />
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="lg:grid grid-cols-2 gap-4 hidden"
            >
              <div className="text-center">
                <p className="text-sm font-medium text-gray-500">
                  Apps reemplazadas
                </p>
                <p className="text-lg font-bold text-primary-600">+6</p>
              </div>
              <div className="text-center">
                <p className="text-sm font-medium text-gray-500">
                  Automatización
                </p>
                <p className="inline-flex items-center gap-2 text-lg font-bold text-green-600">
                  <TrendingUp size={16} /> 85%
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
