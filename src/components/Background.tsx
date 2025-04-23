import { motion } from "framer-motion";

export default function Background() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2.5, delay: 1.5, ease: "linear" }}
      className="absolute inset-0 -z-10 animate-size bg-white bg-[size:6rem_4rem] bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)]  [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
    >
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,var(--color-primary-100),transparent)] z-0"></div>
    </motion.div>
  );
}
