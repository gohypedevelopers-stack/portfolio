"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export const TextReveal = ({ children, className }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string");
  }

  const words = children.split(" ");

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[200vh] bg-black", className)}>
      <div className="sticky top-0 mx-auto flex h-[50%] max-w-6xl items-center justify-center bg-transparent px-[1rem] py-[5rem]">
        <span className="flex flex-wrap justify-center w-full p-5 text-2xl font-medium text-white/50 md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl 
  leading-6 md:leading-8 lg:leading-9 xl:leading-[2.5rem] gap-y-3">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </span>
      </div>
    </div>
  );
};

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mx-1 lg:mx-1.5">
      <span className="absolute text-white/30">{children}</span>
      <motion.span 
        style={{ opacity }} 
        className="text-white transition-opacity duration-300"
      >
        {children}
      </motion.span>
    </span>
  );
};