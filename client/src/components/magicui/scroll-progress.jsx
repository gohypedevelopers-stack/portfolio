"use client";
import { cn } from "@/lib/utils";
import { motion, useScroll } from "framer-motion";
import React from "react";

export const ScrollProgress = React.forwardRef(({ className, ...props }, ref) => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      ref={ref}
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 h-px origin-left bg-gradient-to-r from-[#be57ff] via-[#8500f5] to-[#f8dfff]",
        className
      )}
      style={{
        scaleX: scrollYProgress,
      }}
      {...props}
    />
  );
});

ScrollProgress.displayName = "ScrollProgress";