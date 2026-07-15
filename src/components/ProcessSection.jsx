import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

export default function ProcessSection() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const timelineRef = useRef(null);

  const steps = [
    { num: '01', title: 'Discover & Plan', desc: 'We begin by gaining a deep understanding of your business, goals, and challenges. This enables us to build a tailored strategy focused on meaningful, sustainable growth.' },
    { num: '02', title: 'Create & Build', desc: 'We bring your strategy to life through powerful design, precise development, and targeted marketing execution — crafting every element to engage your audience and deliver results.' },
    { num: '03', title: 'Launch & Grow', desc: 'We launch with precision and monitor performance from day one, focusing on early traction, continuous optimisation, and measurable improvement.' },
    { num: '04', title: 'Report & Refine', desc: 'We deliver clear, concise reporting that shows exactly what is working. Using real data, we refine your strategy to ensure consistent, long-term growth.' }
  ];

  useEffect(() => {
    // Horizontal scroll effect using GSAP
    const totalScroll = cardsRef.current.length * 100;

    gsap.to(containerRef.current, {
      x: () => -(containerRef.current.scrollWidth - window.innerWidth + 100),
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        scrub: 1,
        start: "top top",
        end: () => `+=${totalScroll}%`,
        invalidateOnRefresh: true
      }
    });

    // Timeline fill effect
    gsap.to(timelineRef.current, {
      scaleX: 1,
      transformOrigin: "left center",
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${totalScroll}%`,
        scrub: 1
      }
    });
  }, []);

  return (
    <section ref={sectionRef} className="h-screen bg-canvas-white overflow-hidden relative flex flex-col justify-center">
      <div className="absolute top-32 left-6 md:left-12 z-10">
        <h2 className="text-headline-lg font-hanken font-bold text-surface-charcoal mb-2">Our Process</h2>
        <p className="text-neutral-muted text-body-lg">A System Designed for Predictable Growth</p>
      </div>

      <div className="absolute top-[50%] left-0 w-full h-[1px] bg-surface-charcoal/10 z-0 hidden md:block">
        <div ref={timelineRef} className="h-full bg-accent-orange w-full scale-x-0"></div>
      </div>

      <div
        ref={containerRef}
        className="flex w-max h-full items-center relative z-10 pl-[5vw] pr-[5vw] pt-20"
      >
        {steps.map((step, i) => (
          <div
            key={i}
            ref={el => cardsRef.current[i] = el}
            className="w-[100vw] md:w-[60vw] lg:w-[45vw] flex-shrink-0 px-6 md:px-12"
          >
            <div className="bg-canvas-white/80 backdrop-blur-xl border border-outline-variant rounded-xl p-10 md:p-16 h-[50vh] flex flex-col justify-between shadow-[0_32px_64px_rgba(36,42,51,0.05)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 text-display-xl font-hanken font-bold text-surface-container group-hover:text-surface-container-high transition-colors duration-500">
                {step.num}
              </div>

              <div>
                <span className="text-accent-orange font-inter text-headline-sm mb-4 block">{step.num}</span>
                <h3 className="text-headline-md font-hanken font-bold text-surface-charcoal mb-6">{step.title}</h3>
                <p className="text-neutral-muted text-body-lg max-w-md leading-relaxed">{step.desc}</p>
              </div>

              <div className="w-16 h-16 rounded-full border border-outline flex items-center justify-center text-neutral-muted group-hover:bg-surface-charcoal group-hover:text-canvas-white transition-all duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
