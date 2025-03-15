
import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const AnimatedButton = ({
  children,
  onClick,
  className,
  type = "button",
}: AnimatedButtonProps) => {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={cn(
        "px-8 py-3 rounded-full font-medium text-white bg-black shadow-sm",
        "transition-all duration-300 ease-out",
        "active:scale-[0.97] focus:outline-none",
        "relative overflow-hidden",
        className
      )}
      whileTap={{ scale: 1.05 }}
      transition={{ 
        type: "spring", 
        stiffness: 500, 
        damping: 15 
      }}
    >
      {children}
    </motion.button>
  );
};

export default AnimatedButton;
