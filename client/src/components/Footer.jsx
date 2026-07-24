import React, { useEffect, useState } from "react";
import { Mail, Globe } from "lucide-react";

const defaultNavigationLinks = [
  { href: "#featured-projects-section", label: "Projects" },
  { href: "#contact-form-section", label: "Contact" },
  { href: "/Projects", label: "Resume" },
];

const Footer = ({
  brandName = "Saniva Sehgal",
  navigationLinks = defaultNavigationLinks,
}) => {
  // Dynamic India time state
  const [indiaTime, setIndiaTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Get time in Asia/Kolkata timezone
      const options = {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "Asia/Kolkata",
      };
      setIndiaTime(now.toLocaleTimeString("en-US", options));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-black text-gray-300 border-t border-white/20">
      <div className="max-w-10xl mx-auto px-4 pt-8 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-10 sm:gap-0 mb-4">
          {/* Left */}
          <div className="space-y-4 sm:max-w-md w-full">
            <h2 className="text-lg sm:text-base md:text-lg lg:text-2xl font-bold text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-sm sm:text-xs md:text-base lg:text-lg text-gray-300 leading-relaxed">
              I'm happy to connect, help out, or work together on something new. If you have an idea or just want to get in touch, feel free to email me.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4 pt-2 mb-2">
              <a href="mailto:saniyasehgal05@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <div className="text-start text-xs sm:text-xs md:text-base lg:text-xl font-medium text-white mb-0">
              <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
            </div>
          </div>

          {/* Right */}
          <nav className="flex flex-col items-start sm:items-end sm:pl-0 sm:max-w-md space-y-4 w-full">
            <h2 className="text-lg sm:text-base md:text-lg lg:text-2xl font-bold text-white mb-4">[NAVIGATION]</h2>
            <div className="flex flex-col justify-start items-start text-base sm:text-sm md:text-base lg:text-xl mb-4 sm:justify-end sm:items-end">
              {navigationLinks.map((link) => {
                // Custom smooth and slow scroll for internal anchors
                const handleClick = (e) => {
                  if (link.href === "#featured-projects-section" || link.href === "#contact-form-section") {
                    e.preventDefault();
                    const section = document.querySelector(link.href);
                    if (section) {
                      setTimeout(() => {
                        const targetY = section.getBoundingClientRect().top + window.scrollY;
                        const startY = window.scrollY;
                        const distance = targetY - startY;
                        const duration = 2000; // ms, match Hero
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
                      }, 100); // optional delay
                    }
                  }
                };
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={handleClick}
                    className="hover:text-gray-400 transition-colors"
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
            {/* Local Time */}
            <div className="pt-2 mb-2">
              <p className="text-base sm:text-sm md:text-base lg:text-xl font-medium text-white">
                Local time - {indiaTime} (IST)
              </p>
            </div>
            <div className="email flex items-center gap-2">
              <Globe className="w-5 h-5" />
              <p className="text-base sm:text-sm md:text-base lg:text-xl font-medium text-white">
                Open to Work | Global Opportunities
              </p>
            </div>
          </nav>
        </div>

        {/* Full-width stretched brand logo with reduced top spacing */}
        <div className="w-full pt-0 mt-0 pb-2 overflow-hidden">
          <svg 
            viewBox="0 0 1000 160" 
            className="w-full h-auto block select-none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <text 
              x="0" 
              y="135" 
              textLength="1000" 
              lengthAdjust="spacingAndGlyphs" 
              fontSize="160" 
              fontWeight="800" 
              fill="white" 
              fontFamily="'Syne', 'Outfit', 'Plus Jakarta Sans', sans-serif"
            >
              Saniya Sehgal<tspan fill="#be57ff">.</tspan>
            </text>
          </svg>
        </div>
      </div>
    </footer>
  );
};

export default Footer;