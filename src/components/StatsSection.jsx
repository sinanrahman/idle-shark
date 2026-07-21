import { motion } from 'framer-motion';

export default function StatsSection() {
  const marqueeText = "Idle Shark – UX/UI – Development – Branding and Identify – Digital Marketing – Ongoing Support – ";
  
  return (
    <section className="bg-canvas-white py-12 md:py-24 my-16 md:my-32 lg:my-40 relative z-20 overflow-hidden flex items-center">
      <div className="w-full flex relative z-10 pointer-events-none">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        >
          <h2 className="text-[40px] md:text-[70px] lg:text-[90px] font-hanken font-bold text-accent-orange leading-none tracking-tighter pr-4 uppercase">
            {marqueeText}
          </h2>
          <h2 className="text-[40px] md:text-[70px] lg:text-[90px] font-hanken font-bold text-accent-orange leading-none tracking-tighter pr-4 uppercase">
            {marqueeText}
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
