"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React from "react";

const animationProps = {
  initial: { "--x": "100%", scale: 0.8 },
  animate: { "--x": "-100%", scale: 1 },
  whileTap: { scale: 0.95 },
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 1,
    type: "spring",
    stiffness: 20,
    damping: 15,
    mass: 2,
    scale: {
      type: "spring",
      stiffness: 200,
      damping: 5,
      mass: 0.5,
    },
  }
};

export const ShinyButton = React.forwardRef(({ children, className, ...props }, ref) => {
  return (
    <motion.button
      ref={ref}
      className={cn(
        "relative rounded-lg px-6 py-2 font-medium text-base transition-shadow duration-300 ease-in-out bg-gradient-to-br from-[#6e00b8] via-[#4d0099] to-[#a76dd4] text-white hover:shadow-lg w-full sm:w-auto",
        className
      )}
      {...animationProps}
      {...props}
    >
      <span
        className="relative flex items-center justify-center w-full h-full text-base font-medium tracking-wide"
        style={{
          maskImage:
            "linear-gradient(-75deg,var(--primary) calc(var(--x) + 20%),transparent calc(var(--x) + 30%),var(--primary) calc(var(--x) + 100%))",
          color: "white",
        }}
      >
        {children}
      </span>
      <span
        style={{
          mask: "linear-gradient(black, black) content-box exclude, linear-gradient(black, black)",
          WebkitMask: "linear-gradient(black, black) content-box exclude, linear-gradient(black, black)",
          backgroundImage:
            "linear-gradient(-75deg,var(--primary) calc(var(--x)+20%),var(--primary) calc(var(--x)+25%),var(--primary) calc(var(--x)+100%))",
        }}
        className="absolute inset-0 z-10 block rounded-[inherit] p-px"
      ></span>
    </motion.button>
  );
});

ShinyButton.displayName = "ShinyButton";
