
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
        "relative overflow-hidden flex items-center justify-center",
        "border border-transparent hover:border-gray-700",
        className
      )}
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 5px 15px rgba(0,0,0,0.1)"  
      }}
      whileTap={{ 
        scale: 0.98,
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)" 
      }}
      transition={{ 
        type: "spring", 
        stiffness: 500, 
        damping: 15 
      }}
    >
      <motion.span 
        className="relative z-10 flex items-center"
        initial={{ opacity: 0.9 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.span>
      
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black rounded-full opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
};

export default AnimatedButton;
