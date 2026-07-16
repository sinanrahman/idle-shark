import { motion, useInView, animate } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

function AnimatedCounter({ endValue, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (inView) {
      const controls = animate(0, endValue, {
        duration: 2,
        ease: "easeOut",
        onUpdate(v) {
          if (Number.isInteger(endValue)) {
            setDisplayValue(Math.round(v).toString());
          } else {
            setDisplayValue(v.toFixed(1));
          }
        }
      });
      return () => controls.stop();
    }
  }, [inView, endValue]);

  return <span ref={ref}>{displayValue}{suffix}</span>;
}

export default function StatsSection() {
  const stats = [
    {
      id: 1,
      icon: (
        <img src="/image/stats-1.svg" alt="Website launched" className="w-24 h-24 object-contain" />
      ),
      endValue: 17,
      suffix: "+",
      label: "Website launched"
    },
    {
      id: 2,
      icon: (
        <img src="/image/stats-2.svg" alt="Users reached" className="w-24 h-24 object-contain" />
      ),
      endValue: 1.5,
      suffix: "M+",
      label: "Users reached"
    },
    {
      id: 3,
      icon: (
        <img src="/image/stats-3.svg" alt="Client satisfaction rate" className="w-24 h-24 object-contain" />
      ),
      endValue: 97,
      suffix: "%",
      label: "Client satisfaction rate"
    }
  ];

  return (
    <section className="bg-canvas-white py-24 md:py-32 border-t border-outline-variant/30 relative z-20">
      <div className="max-w-[var(--spacing-container-max)] mx-auto px-margin-edge">
        
        {/* Top Header */}
        <div className="flex flex-col md:flex-row mb-44 relative">
          <div className="absolute top-0 left-0 flex items-center text-accent-orange font-bold text-label-md tracking-wider">
            <span className="w-3 h-3 rounded-full border-2 border-accent-orange mr-2"></span>
            STATS
          </div>
          
          <div className="w-full text-center mt-12 md:mt-0">
            <h2 className="flex flex-col gap-4 md:gap-4 text-headline-lg md:text-display-lg font-hanken font-bold text-surface-charcoal">
              <span>Our work speaks through numbers.</span>
              <span>Here's what we've achieved so far.</span>
            </h2>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-10">
          {stats.map((stat, i) => (
            <motion.div 
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-8">
                {stat.icon}
              </div>
              <h3 className="text-display-lg md:text-[80px] font-hanken font-bold text-accent-orange leading-none mb-4">
                <AnimatedCounter endValue={stat.endValue} suffix={stat.suffix} />
              </h3>
              <p className="text-headline-sm font-medium text-surface-charcoal">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Infinite Logo Ticker */}
      <div className="w-full mt-24 md:mt-32 overflow-hidden flex bg-canvas-white border-y border-outline-variant/30 py-8 md:py-12 relative z-10">
        <motion.div
          className="flex w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 35, repeat: Infinity }}
        >
          {/* Duplicate images multiple times to ensure seamless looping on ultra-wide screens */}
          <img src="/image/logoipsum.png" alt="Partner Logos" className="h-16 md:h-24 w-auto object-contain shrink-0" />
          <img src="/image/logoipsum.png" alt="Partner Logos" className="h-16 md:h-24 w-auto object-contain shrink-0" />
          <img src="/image/logoipsum.png" alt="Partner Logos" className="h-16 md:h-24 w-auto object-contain shrink-0" />
          <img src="/image/logoipsum.png" alt="Partner Logos" className="h-16 md:h-24 w-auto object-contain shrink-0" />
          <img src="/image/logoipsum.png" alt="Partner Logos" className="h-16 md:h-24 w-auto object-contain shrink-0" />
          <img src="/image/logoipsum.png" alt="Partner Logos" className="h-16 md:h-24 w-auto object-contain shrink-0" />
        </motion.div>
      </div>

      {/* Infinite Design Process Marquee */}
      <div className="w-full mt-20 md:mt-32 mb-12 md:mb-20 overflow-hidden flex relative z-10 pointer-events-none">
        <motion.div
          className="flex w-max"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ ease: "linear", duration: 40, repeat: Infinity }}
        >
          {/* Duplicate images multiple times to ensure seamless looping on ultra-wide screens */}
          <img src="/image/design.png" alt="Design Process" className="h-28 md:h-44 lg:h-60 w-auto object-contain shrink-0" />
          <img src="/image/design.png" alt="Design Process" className="h-28 md:h-44 lg:h-60 w-auto object-contain shrink-0" />
          <img src="/image/design.png" alt="Design Process" className="h-28 md:h-44 lg:h-60 w-auto object-contain shrink-0" />
          <img src="/image/design.png" alt="Design Process" className="h-28 md:h-44 lg:h-60 w-auto object-contain shrink-0" />
          <img src="/image/design.png" alt="Design Process" className="h-28 md:h-44 lg:h-60 w-auto object-contain shrink-0" />
          <img src="/image/design.png" alt="Design Process" className="h-28 md:h-44 lg:h-60 w-auto object-contain shrink-0" />
        </motion.div>
      </div>
    </section>
  );
}
