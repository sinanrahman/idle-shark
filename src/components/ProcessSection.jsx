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
    { num: '01', title: 'Discovery', desc: 'We dive deep into your brand, audience, and objectives to establish a solid strategic foundation.' },
    { num: '02', title: 'Design', desc: 'Our award-winning designers craft intuitive, stunning interfaces that elevate your brand.' },
    { num: '03', title: 'Development', desc: 'We build robust, scalable architectures using cutting-edge technologies.' },
    { num: '04', title: 'Deployment', desc: 'Rigorous testing and a seamless launch process ensure your product hits the ground running.' }
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
    <section ref={sectionRef} className="h-screen bg-secondary overflow-hidden relative flex flex-col justify-center">
      <div className="absolute top-32 left-6 md:left-12 z-10">
        <h2 className="text-4xl md:text-5xl font-heading font-medium text-white mb-2">Our Process</h2>
        <p className="text-gray-400">A systematic approach to digital excellence.</p>
      </div>

      <div className="absolute top-[50%] left-0 w-full h-[1px] bg-white/10 z-0 hidden md:block">
        <div ref={timelineRef} className="h-full bg-accent w-full scale-x-0"></div>
      </div>

      <div 
        ref={containerRef}
        className="flex w-[400vw] h-full items-center relative z-10 pl-[5vw] pt-20"
      >
        {steps.map((step, i) => (
          <div 
            key={i} 
            ref={el => cardsRef.current[i] = el}
            className="w-[100vw] md:w-[60vw] lg:w-[45vw] flex-shrink-0 px-6 md:px-12"
          >
            <div className="bg-background/80 backdrop-blur-xl border border-white/5 rounded-3xl p-10 md:p-16 h-[50vh] flex flex-col justify-between shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 text-8xl font-heading font-bold text-white/5 group-hover:text-white/10 transition-colors duration-500">
                {step.num}
              </div>
              
              <div>
                <span className="text-accent font-mono text-xl mb-4 block">{step.num}</span>
                <h3 className="text-3xl md:text-5xl font-heading font-medium text-white mb-6">{step.title}</h3>
                <p className="text-gray-400 text-lg md:text-xl max-w-md leading-relaxed">{step.desc}</p>
              </div>
              
              <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-background transition-all duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
