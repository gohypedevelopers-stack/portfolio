import React, { useState } from 'react'
import Preloader from './components/preloader'
import Navbar from './components/Navbar'
import { Hero } from './components/Hero'
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { ContactForm } from '@/components/ContactForm';
import Footer from './components/Footer';
import { TextReveal } from "@/components/magicui/text-reveal";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import FeaturedProjects from './components/FeaturedProjects';
import SmoothScrollProvider from '@/components/SmoothScrollProvider';
// import ContactUs1 from './components/mvpblocks/contact-us-1';
// import NewForm from './components/NewForm';

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <Navbar />
      <SmoothCursor />
      <SmoothScrollProvider>
        <Hero />
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <VelocityScroll>MongoDB Bootstrap PHP JavaScript Express.js NodeJS TailwindCSS JWT HTML5 Java React Router Dom MySQL Python C++ React </VelocityScroll>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </div>
        <FeaturedProjects />
        <TextReveal>
          I am dedicated to transforming ideas into impactful realities, blending creativity, precision, and a deep passion for excellence to deliver work that truly makes a difference.
        </TextReveal>
        {/* <ContactUs1/> */}
        {/* <NewForm/> */}
        <ContactForm />
        <Footer />
      </SmoothScrollProvider>
    </>
  )
}

export default App