import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { FiArrowDown } from 'react-icons/fi';

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
    <section ref={containerRef} className="relative w-full h-screen overflow-hidden bg-white flex flex-col md:flex-row">

      {/* Left/Middle Content Area */}
      <div className="hero-left-content w-full md:w-[55%] h-full flex flex-col justify-between pt-10 pb-12 px-6 md:px-12 relative z-10">

        {/* Top Nav (Inline) */}
        <div className="flex w-full items-start text-[15px] font-medium text-gray-800">
          <div className="w-1/3">
            <Link to="/about" className="hover:text-accent transition-colors cursor-hover">About</Link>
          </div>

          <div className="w-1/2 flex flex-col items-start pl-8">
            <Link to="/work" className="hover:text-accent transition-colors cursor-hover flex items-start space-x-2">
              <span className="pt-2">Project</span>
              <span className="text-accent text-5xl font-heading font-medium leading-none tracking-tight">(04)</span>
            </Link>

            {/* Services List */}
            <div className="mt-16 flex flex-col space-y-3 text-left">
              {["UX/UI Design", "Development", "Brand Identity Design", "Ongoing Support"].map((service, index) => (
                <span key={index} className="group relative overflow-hidden cursor-hover flex flex-col h-[1.5em] leading-[1.5em] text-black text-[16px]">
                  <span className="transition-transform duration-[400ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">{service}</span>
                  <span className="absolute top-full left-0 transition-transform duration-[400ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full text-accent">{service}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="w-1/6 text-right pr-4">
            <Link to="/contact" className="hover:text-accent transition-colors cursor-hover">Contact</Link>
          </div>
        </div>

        {/* Bottom Typography */}
        <div className="mt-auto relative w-full">
          <motion.div initial="hidden" animate="visible" variants={lineVariants} className="overflow-hidden">
            <h1 className="text-5xl md:text-[70px] lg:text-[90px] font-heading text-gray-900 leading-[0.9] tracking-tight">
              Studio
            </h1>
          </motion.div>

          <div className="relative inline-block w-full">
            <motion.div initial="hidden" animate="visible" variants={lineVariants} transition={{ delay: 0.1 }} className="overflow-hidden">
              <h1 className="text-[12vw] md:text-[130px] lg:text-[170px] font-heading font-bold text-accent leading-[0.8] tracking-tighter uppercase mt-2">
                IDLE<br />SHARK
              </h1>
            </motion.div>

            {/* R Circle positioned to the right of IDLE and directly above the right side of SHARK */}
            <div className="absolute top-12 md:top-20 lg:top-24 right-2 md:right-16 lg:right-30 w-10 h-10 md:w-12 md:h-12 rounded-full border border-accent text-accent flex items-center justify-center font-heading text-lg md:text-xl hidden md:flex cursor-default bg-white">
              R
            </div>
          </div>
        </div>

      </div>

      {/* Right Media Area */}
      <div ref={videoWrapperRef} className="absolute top-0 right-0 w-full md:w-[45%] h-full rounded-bl-3xl md:rounded-bl-[4rem] overflow-hidden hero-image-wrapper z-20">
        <div className="absolute inset-0 bg-secondary w-full h-full">
          <motion.video
            autoPlay
            loop
            muted={true}
            playsInline={true}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="/image/hero-video.mp4"
            className="w-full h-full object-cover object-center opacity-90 transition-all duration-700"
          />

          {/* Circular Scroll Down Badge */}
          <div className="scroll-badge absolute bottom-12 right-12 md:bottom-16 md:right-16 z-30 flex flex-col items-center">
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center bg-transparent cursor-hover">

              {/* Rotating Text SVG */}
              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full animate-[spin_10s_linear_infinite]">
                <path id="circlePath" d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" fill="transparent" />
                <text className="text-[11px] fill-white tracking-[0.15em] font-sans font-medium uppercase">
                  <textPath href="#circlePath" startOffset="0%" textLength="226">CREATE • IDEA • INSIGHT • SOLUTION • </textPath>
                </text>
              </svg>

              {/* Center Orange Arrow Button */}
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-accent text-white flex items-center justify-center z-10 shadow-lg cursor-hover">
                <FiArrowDown className="w-6 h-6 md:w-8 md:h-8 stroke-[2]" />
              </div>
            </div>
            {/* Scroll down text perfectly aligned below */}
            <span className="text-white text-sm font-medium mt-4 tracking-wide cursor-hover">Scroll down ~</span>
          </div>
        </div>
      </div>

    </section>
  );
}
