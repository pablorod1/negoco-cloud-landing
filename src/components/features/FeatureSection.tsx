import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface Props {
  title: string;
  description: string;
  images: string[];
  badge?: string;
  reverse?: boolean;
}

const floatingAnimation = (index: number) => ({
  x: [`${index * 5}px`, `${index * 5 + 20}px`, `${index * 5}px`],
  transition: {
    duration: 3,
    ease: "easeInOut",
    repeat: Infinity,
    delay: index * 0.2,
  },
});

export default function FeatureSection({
  title,
  description,
  images,
  reverse,
  badge,
}: Props) {
  return (
    <motion.section
      initial={{ opacity: 0, x: reverse ? -80 : 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: reverse ? -80 : 80 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      className={cn(
        "w-full max-w-[1600px] mx-auto px-12 lg:px-6 py-16 rounded-xl",
        !reverse
          ? "bg-gradient-to-l from-primary-50 to-white"
          : "bg-gradient-to-r from-primary-50 to-white"
      )}
    >
      <div
        className={cn(
          "flex flex-col items-center lg:items-start lg:justify-between gap-4 lg:gap-32",
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        )}
      >
        <div className="flex flex-col gap-6 text-center lg:text-left">
          {badge && (
            <span className="text-sm text-primary-700 font-medium tracking-widest uppercase">
              {badge}
            </span>
          )}
          <div className="flex flex-col gap-4">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-primary-950 text-pretty">
              {title}
            </h2>
            <p className="text-gray-500">{description}</p>
          </div>
        </div>
        {images.length > 1 ? (
          <div className="relative min-h-[400px] h-full w-full max-w-4xl flex justify-end">
            {images.map((image, index) => (
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{
                  duration: 0.6,
                  bounce: 0.6,
                  type: "spring",
                  delay: index * 0.2,
                }}
                viewport={{ once: true, amount: 0.8 }}
                key={index}
                className={cn(
                  " w-full h-full aspect-[901/542] max-w-lg p-0 rounded-lg",
                  "absolute",
                  index === 0
                    ? !reverse
                      ? "top-0 right-0"
                      : "top-0 left-0"
                    : "",
                  index === 1
                    ? !reverse
                      ? "top-[30%] right-[30%]"
                      : "top-[30%] left-[30%]"
                    : ""
                )}
              >
                <img
                  src={image}
                  alt={title}
                  className="w-full h-auto object-cover shadow-lg rounded-lg"
                />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center w-full aspect-[1920/556]">
            <img
              src={images[0]}
              alt={title}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        )}
      </div>
    </motion.section>
  );
}
