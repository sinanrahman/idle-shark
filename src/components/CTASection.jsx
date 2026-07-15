import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';

export default function CTASection() {
  return (
    <section className="relative py-section-gap overflow-hidden">
      {/* Background with London Skyline Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-canvas-white/90 z-10"></div>
        <img 
          src="/image/logo.jpeg" 
          alt="London Skyline" 
          className="w-full h-full object-cover grayscale opacity-20 mix-blend-luminosity"
        />
      </div>

      <div className="relative z-20 max-w-[var(--spacing-container-max)] mx-auto px-margin-edge text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <p className="text-accent-orange text-label-md uppercase tracking-wider font-bold mb-4">We Operate as an Extension of Your Business</p>
          <p className="text-surface-charcoal font-medium text-body-lg max-w-2xl mx-auto">
            We don't simply manage projects — we take ownership of outcomes. Every decision we make is aligned with your growth.
          </p>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-headline-lg md:text-display-xl font-hanken font-bold text-surface-charcoal mb-6 tracking-tight"
        >
          If Growth Is the Goal —<br/>You're in the Right Place
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-neutral-muted text-body-lg"
        >
          Let's build something that works as hard as you do.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-12"
        >
          <MagneticButton className="px-10 py-5 bg-accent-orange text-canvas-white rounded-md text-body-lg font-bold hover:shadow-[0_8px_32px_rgba(250,100,0,0.3)] hover:bg-accent-orange/90 hover:-translate-y-1 transition-all duration-300">
            Start Your Project
          </MagneticButton>
          <MagneticButton className="px-10 py-5 bg-surface-charcoal text-canvas-white rounded-md text-body-lg font-bold hover:bg-surface-charcoal/90 hover:shadow-[0_8px_32px_rgba(36,42,51,0.2)] hover:-translate-y-1 transition-all duration-300">
            Speak With Our Team
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
