import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Intro() {
  const containerRef = useRef(null);
  
  useEffect(() => {
    // Text reveal word by word using GSAP could be done, but we'll use framer-motion for simplicity here
  }, []);

  const sentence1 = "Built for Growth.";
  const sentence2 = "Designed for Impact.";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section ref={containerRef} className="py-32 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left: Text */}
        <div className="w-full lg:w-1/2">
          <motion.h2 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-5xl md:text-6xl font-heading font-bold text-gray-900 leading-tight"
          >
            <div className="block mb-2">
              {sentence1.split(' ').map((word, i) => (
                <motion.span key={i} variants={wordVariants} className="inline-block mr-3">
                  {word}
                </motion.span>
              ))}
            </div>
            <div className="block text-gray-500">
              {sentence2.split(' ').map((word, i) => (
                <motion.span key={i} variants={wordVariants} className="inline-block mr-3">
                  {word}
                </motion.span>
              ))}
            </div>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-8 text-gray-700 text-lg max-w-lg leading-relaxed"
          >
            We don't just build websites; we engineer digital ecosystems that convert visitors into loyal customers. Our approach blends cutting-edge technology with award-winning design to create experiences that are as beautiful as they are functional.
          </motion.p>
        </div>

        {/* Right: Image sliding from right */}
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full lg:w-1/2 h-[500px] rounded-2xl overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
        >
          <img 
            src="/image/about.png" 
            alt="Team Meeting" 
            className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
          />
        </motion.div>

      </div>
    </section>
  );
}
