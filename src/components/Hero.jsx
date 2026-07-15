import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { FiArrowDown } from 'react-icons/fi';
import MagneticButton from './MagneticButton';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);
  const videoWrapperRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        // Desktop animation: pin hero and expand video wrapper
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: '+=100%', // Scroll distance to complete the animation
            scrub: true,
            pin: true,
          }
        });

        tl.to(videoWrapperRef.current, {
          width: '100vw',
          ease: 'none'
        }, 0);

        // Fade out the left content
        tl.to('.hero-left-content', {
          opacity: 0,
          x: -50,
          ease: 'none'
        }, 0);

        // Fade out the scroll badge
        tl.to('.scroll-badge', {
          opacity: 0,
          scale: 0.8,
          ease: 'none'
        }, 0);
      });

      mm.add("(max-width: 767px)", () => {
        // Mobile animation: pin hero, wipe details to left, expand video height
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: '+=100%',
            scrub: true,
            pin: true,
          }
        });

        tl.to(videoWrapperRef.current, {
          height: '100vh',
          ease: 'none'
        }, 0);

        tl.to('.hero-left-content', {
          opacity: 0,
          x: -50,
          ease: 'none'
        }, 0);

        tl.to('.scroll-badge', {
          opacity: 0,
          scale: 0.8,
          ease: 'none'
        }, 0);
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const lineVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: [0.33, 1, 0.68, 1] }
    }
  };

  return (
    <section ref={containerRef} className="relative w-full h-screen overflow-hidden bg-canvas-white flex flex-col md:flex-row">

      {/* Left/Middle Content Area */}
      <div className="hero-left-content w-full md:w-[55%] h-[65vh] md:h-full flex flex-col justify-between pt-6 md:pt-10 pb-6 md:pb-12 px-6 md:px-12 relative z-10">

        {/* Top Nav (Inline) */}
        <div className="flex w-full justify-between items-start text-body-md font-medium text-surface-charcoal">
          <div>
            <Link to="/about" className="hover:text-accent-orange transition-colors cursor-hover block">About</Link>
          </div>

          <div className="flex flex-col items-center md:items-start md:pl-8 md:w-1/2">
            <Link to="/work" className="hover:text-accent-orange transition-colors cursor-hover flex flex-col md:flex-row md:items-start md:space-x-2 items-center">
              <span className="md:pt-2">Project</span>
            </Link>

            {/* Services List - Desktop */}
            <div className="hidden md:flex mt-16 flex-col space-y-3 text-left pl-0 lg:pl-16">
              {["UX/UI Design", "Development", "Brand Identity Design", "Ongoing Support"].map((service, index) => (
                <span key={index} className="group relative overflow-hidden cursor-hover flex flex-col h-[1.5em] leading-[1.5em] text-surface-charcoal text-body-md">
                  <span className="transition-transform duration-[400ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">{service}</span>
                  <span className="absolute top-full left-0 transition-transform duration-[400ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full text-accent-orange">{service}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="text-right md:w-1/6 md:pr-4">
            <Link to="/contact" className="hover:text-accent-orange transition-colors cursor-hover block">Contact</Link>
          </div>
        </div>

        {/* Services List - Mobile (Aligned Right) */}
        <div className="md:hidden mt-6 flex flex-col space-y-1 text-right items-end w-full">
          {["UX/UI Design", "Development", "Brand Identity Design", "Ongoing Support"].map((service, index) => (
            <span key={index} className="text-surface-charcoal text-body-sm font-medium">
              {service}
            </span>
          ))}
        </div>

        {/* Bottom Typography */}
        <div className="mt-auto relative w-full mb-2 md:mb-0">
          <motion.div initial="hidden" animate="visible" variants={lineVariants} className="overflow-hidden mb-0 md:mb-2">
            <h2 className="text-[10vw] md:text-headline-sm font-hanken font-medium text-surface-charcoal leading-tight tracking-tight">
              Digital <br className="hidden md:block" /> Engineered for Impact.
            </h2>
          </motion.div>

          <div className="relative inline-block w-full">
            <motion.div initial="hidden" animate="visible" variants={lineVariants} transition={{ delay: 0.1 }} className="overflow-hidden">
              <h1 className="text-[17vw] md:text-[100px] lg:text-[130px] font-hanken font-bold text-accent-orange leading-[0.9] md:leading-[0.8] tracking-tighter uppercase mt-1 md:mt-2">
                IDLE<br className="hidden md:block" />SHARK
              </h1>
            </motion.div>
          </div>
        </div>

      </div>

      {/* Right Media Area */}
      <div ref={videoWrapperRef} className="absolute bottom-0 right-0 w-full md:w-[45%] h-[35vh] md:h-full md:rounded-bl-[4rem] overflow-visible md:overflow-hidden hero-image-wrapper z-20">
        <div className="absolute inset-0 bg-surface-charcoal w-full h-full md:rounded-bl-[4rem] overflow-hidden">
          <motion.video
            autoPlay
            loop
            muted={true}
            playsInline={true}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="image/hero-video.MP4"
            className="w-full h-full object-cover object-center opacity-90 transition-all duration-700"
          />
        </div>

        {/* Circular Scroll Down Badge */}
        <div className="scroll-badge absolute bottom-12 right-4 md:bottom-16 md:right-16 z-30 flex flex-col items-center">
          <div className="relative w-24 h-24 md:w-40 md:h-40 rounded-full flex items-center justify-center bg-transparent cursor-hover">

            {/* Rotating Text SVG */}
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full animate-[spin_10s_linear_infinite]">
              <path id="circlePath" d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" fill="transparent" />
              <text className="text-[11px] md:text-[11px] fill-surface-charcoal md:fill-canvas-white tracking-[0.15em] font-inter font-bold md:font-medium uppercase">
                <textPath href="#circlePath" startOffset="0%" textLength="226">CREATE • IDEA • INSIGHT • SOLUTION • </textPath>
              </text>
            </svg>

            {/* Center Orange Arrow Button */}
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-accent-orange text-canvas-white flex items-center justify-center z-10 shadow-[0_4px_12px_rgba(250,100,0,0.3)] cursor-hover transition-transform hover:scale-105 duration-300">
              <FiArrowDown className="w-5 h-5 md:w-8 md:h-8 stroke-[2]" />
            </div>
          </div>
          {/* Scroll down text perfectly aligned below */}
          <span className="hidden md:block text-canvas-white text-caption font-medium mt-4 tracking-wide cursor-hover">Scroll down ~</span>
        </div>
      </div>

    </section>
  );
}
