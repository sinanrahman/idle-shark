import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PhilosophySection() {
  const textRef = useRef(null);

  useEffect(() => {
    // Parallax and scale effect on scroll
    gsap.fromTo(textRef.current, 
      { scale: 0.8, opacity: 0 },
      {
        scale: 1, 
        opacity: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
          end: 'bottom center',
          scrub: true
        }
      }
    );
  }, []);

  return (
    <section className="h-screen bg-surface-container-low flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-canvas-white/50"></div>
      
      {/* Background noise/grain can be added via CSS if desired, skipped for now */}
      
      <div className="relative z-10 max-w-[var(--spacing-container-max)] mx-auto px-margin-edge text-center">
        <h2 ref={textRef} className="text-headline-lg-mobile md:text-display-xl lg:text-[100px] font-hanken font-bold text-surface-charcoal leading-none tracking-tighter mb-8">
          "If It Doesn't Perform,<br/>
          <span className="text-neutral-muted italic">It Doesn't Matter."</span>
        </h2>
        
        <p className="text-neutral-muted text-body-lg max-w-3xl mx-auto leading-relaxed mb-12">
          Digital success is not about accumulating more content or more features. It is about clarity, focus, and execution aligned to genuine business goals. That is how we build systems that deliver consistent results — not one-off wins.
        </p>
        
        <div className="flex flex-col items-center">
          <p className="text-surface-charcoal font-bold text-headline-sm mb-6">Ready to Improve Your Digital Performance?</p>
          <button className="px-8 py-4 bg-accent-orange text-canvas-white rounded-md font-inter font-bold hover:bg-accent-orange/90 shadow-[0_4px_12px_rgba(250,100,0,0.3)] hover:-translate-y-1 transition-all duration-300">
            Book a Call
          </button>
        </div>
      </div>
    </section>
  );
}
