'use client';
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Button } from "@/components/ui/button"
import { Globe } from 'lucide-react';

const MobileCard = ({ title, catagory, description, src, techStack, link, source}) => (
  
  <div className="m-4">
    <div className="w-full bg-black text-white rounded-lg p-4 mb-4 shadow-md outline-2"
      onClick={() => window.open(link, "_blank")}>
      <img
        src={src}
        alt={title}
        className="w-full h-auto object-contain rounded-md mb-3"/>
      <p className="bg-gradient-to-r from-[#be57ff] via-[#8500f5] to-[#f8dfff] bg-clip-text text-transparent text-sm font-semibold uppercase tracking-wide">
        {title}
      </p>
      <h2 className="text-2xl font-medium mb-2">{catagory}</h2>
      <p className="text-xs text-gray-300">{description}</p>
      {techStack?.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs outline-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
      <div className="w-full flex flex-row items-center justify-start gap-2 mt-4">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <Button className="font-medium px-2 py-1 text-xs h-7 min-w-0">
            <Globe className="w-4 h-4" />
            View Project
          </Button>
        </a>
      </div>
    </div>
  </div>
);

const DesktopCard = ({ i, title, catagory, description, src, techStack, link, source}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

  return (
    <motion.div
      ref={container}
      className="min-h-[45vh] md:h-[60vh] lg:h-[70vh] flex items-center justify-center sticky px-4 md:px-0"
      style={{
        top: `calc(15vh + ${i * 20}px)`
      }}
    >
      <motion.div
        className="hidden sm:flex flex-col md:flex-row w-full md:w-[95%] h-[85%] md:h-[90%] rounded-xl md:rounded-2xl p-4 md:p-5 gap-6 md:gap-8 text-white bg-black outline-1">
        <div className="w-full md:w-[80%] h-[35vh] md:h-full rounded-lg overflow-hidden shadow-xl">
          <motion.div
            className="w-full h-full cursor-pointer"
            style={{ scale: imageScale }}
            onClick={() => window.open(link, "_blank")}
          >
            <img
              src={src}
              alt={title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center py-10 text-left min-w-[30%]">
          <p className="text-sm md:text-lg font-semibold uppercase tracking-widest bg-gradient-to-r from-[#be57ff] via-[#8500f5] to-[#f8dfff] bg-clip-text text-transparent">
            {title}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text4xl lg:text-5xl xl:text-6xl font-medium mb-3 ">
            {catagory}
          </h2>
          <div className="text-gray-300">
            <p className="text-lg md:text-xl text-white font-semibold mt-5 mb-1">
              About
            </p>
            <p className="text-base md:text-[0.9rem] lg:text-lg leading-relaxed">
              {description}
            </p>
            {techStack?.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full text-xs outline-1 text-white font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          
            
            <div className="w-full flex flex-row items-center justify-start gap-2 mt-4">

              <a href={link} target="_blank" rel="noopener noreferrer" className="inline-block">

              <Button className="font-medium">
              <Globe className="w-4 h-4" />
              View Project
              </Button>

              </a>

            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Card = (props) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.matchMedia('(max-width: 640px)').matches);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile ? <MobileCard {...props} /> : <DesktopCard {...props} />;
};

export default Card;