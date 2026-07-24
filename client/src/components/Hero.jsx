import { Badge } from "@/components/ui/badge";
import { ShinyButton } from "@/components/magicui/shiny-button";
import resumeFile from "../assets/Resume.pdf";
import { Spotlight } from "@/components/ui/spotlight-new";
import bg from "../assets/bg.jpg";
import { BookText } from "lucide-react";
import { RainbowButton } from "./magicui/rainbow-button";
import { ShineBorder } from "./magicui/shine-border";

const Hero = () => {

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeFile;
    link.download = "Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Add scroll handler for "Visit Projects"
  const handleScrollToProjects = () => {
    const section = document.getElementById("featured-projects-section");
    if (section) {
      setTimeout(() => {
        // Custom smooth and slow scroll
        const targetY = section.getBoundingClientRect().top + window.scrollY;
        const startY = window.scrollY;
        const distance = targetY - startY;
        const duration = 2000; // duration in ms (increase for slower scroll)
        let startTime = null;

        function animateScroll(currentTime) {
          if (!startTime) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const progress = Math.min(timeElapsed / duration, 1);
          window.scrollTo(0, startY + distance * easeInOutQuad(progress));
          if (progress < 1) {
            requestAnimationFrame(animateScroll);
          }
        }

        function easeInOutQuad(t) {
          return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        }

        requestAnimationFrame(animateScroll);
      }, 350); // delay before scrolling
    }
  };

  return (
    <section
        className="relative overflow-hidden flex items-center justify-center min-h-screen bg-black py-20 background-size-110%"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            backgroundRepeat: "no-repeat",
          }}>

      <Spotlight />
      <div className="relative z-10 w-full ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 my-auto flex align-center justify-center flex-col items-center">
          <div className="relative inline-flex items-center mb-2 sm:mb-5">
            <Badge
              variant="secondary"
              className="rounded-full bg-transparent text-white flex items-center transition-all duration-200
               h-7 px-4 py-1.5 text-sm gap-1.5
               sm:h-11 sm:px-8 sm:py-2 sm:text-base sm:gap-2">

          <div className="w-1.5 h-1.5 bg-white rounded-full mr-1 sm:w-2 sm:h-2 sm:mr-2" />
              <span className="whitespace-nowrap text-[0.7rem] sm:text-lg">Available for new opportunities</span>
                </Badge>
                  <ShineBorder
                    borderWidth={1.5}
                    duration={10}
                    shineColor={["#be57ff", "#8500f5", "#f8dfff"]}
                    className="rounded-full"
                  />
          </div>

          {/* Heading */}
          <div className="w-full flex flex-col items-center">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight  text-center  mx-auto">
              Hi, I'm Saniya Sehgal
            </h1>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-center mx-auto 
              bg-gradient-to-b from-[#be57ff] via-[#8500f5] to-[#f8dfff] bg-clip-text text-transparent pb-1 md:pb-2 lg:pb-5">
              Full Stack Developer
            </h1>

            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-center max-w-sm md:max-w-xl lg:max-w-3xl mx-auto">
              Based in Delhi with over 3.5+ years of experience. Skilled in React.js, Node.js, Express, and MongoDB. Focused on building reliable and maintainable web applications.
            </p>
          </div>

          {/* Buttons */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 mb-5">
            <RainbowButton
              onClick={handleScrollToProjects}
              className="transition-transform duration-300 ease-[cubic-bezier(.4,0,.2,1)] hover:scale-105 hover:-translate-y-1 focus:scale-105 focus:-translate-y-1"
            >
              Visit Projects
            </RainbowButton>
            <ShinyButton
              onClick={handleDownload}
              className="transition-transform duration-300 ease-[cubic-bezier(.4,0,.2,1)] hover:scale-105 hover:-translate-y-1 focus:scale-105 focus:-translate-y-1"
            >
              <BookText className="w-5 h-5 mr-2" />
              Resume
            </ShinyButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero };
