import { motion } from "motion/react";

interface MascotProps {
  size?: "sm" | "md" | "lg";
  mood?: "happy" | "thinking" | "excited";
  imagePath: string;
}

export default function Mascot({ size = "md", imagePath }: MascotProps) {
  const sizes = {
    sm: "w-24 h-24",
    md: "w-48 h-48",
    lg: "w-64 h-64",
  };

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: [0, -10, 0], opacity: 1 }}
      transition={{ 
        y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
        opacity: { duration: 0.5 }
      }}
      className={`relative ${sizes[size]} flex items-center justify-center`}
    >
      <div className="absolute inset-0 bg-yellow-200/50 blur-3xl rounded-full scale-125" />
      <img
        src={imagePath}
        alt="JAIS Mascot"
        className="relative z-10 w-full h-full object-contain"
        referrerPolicy="no-referrer"
      />
    </motion.div>
  );
}
