'use client';
import React, { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import Card from "@/components/Card";
import { projects } from "@/components/ProjectData";
import { AnimatedGradientText } from "./magicui/animated-gradient-text";


const FeaturedProjects = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Range for scroll-based scaling per card
  const range = [0, 1];
  const targetScale = 0.9;

  return (
    <div id="featured-projects-section" ref={containerRef} className="my-20">
      {/* Added heading container */}
      <div className="w-full flex justify-center text-center px-4 mb-7 md:mb-8 lg:mb-5">
  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium">
    <AnimatedGradientText>
    Featured Projects
    </AnimatedGradientText>
    
  </h1>
</div>

      {projects.map((project, i) => {
        const scale = useTransform(scrollYProgress, range, [1, targetScale]);

        return (
          <Card
            key={i}
            i={i}
            title={project.title}
            catagory={project.catagory}
            description={project.description}
            techStack={project.techStack}
            src={project.src}
            link={project.link}
            source={project.source}
            color={project.color}
            progress={scrollYProgress}
            range={range}
            targetScale={targetScale}
            scale={scale}
          />
        );
      })}
    </div>
  );
};

export default FeaturedProjects;