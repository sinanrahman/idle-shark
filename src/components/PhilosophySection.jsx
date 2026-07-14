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
    <section className="h-screen bg-secondary flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-background/50"></div>
      
      {/* Background noise/grain can be added via CSS if desired, skipped for now */}
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <h2 ref={textRef} className="text-6xl md:text-8xl lg:text-[100px] font-heading font-medium text-white leading-none tracking-tighter">
          "If It Doesn't Perform,<br/>
          <span className="text-gray-500 italic">It Doesn't Matter."</span>
        </h2>
      </div>
    </section>
  );
}
