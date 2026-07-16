import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';

export default function AboutSection() {
  return (
    <section className="py-section-gap bg-canvas-white relative z-20">
      <div className="max-w-[var(--spacing-container-max)] mx-auto px-margin-edge">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-label-md text-accent-orange uppercase mb-6">About Idle Shark</h2>
              <h3 className="text-headline-lg font-hanken font-bold text-surface-charcoal mb-8 leading-tight">
                We Don't Build Digital Products. We Build Momentum.
              </h3>
              
              <div className="space-y-6 text-neutral-muted text-body-lg">
                <p>
                  Your business doesn't need more content, more tools, or more noise. It needs direction, precision, and execution that actually moves the numbers.
                </p>
                <p>
                  Idle Shark works with startups, scaling businesses, and established brands looking to strengthen their digital performance. We integrate design, development, branding, and marketing into a single, growth-focused system.
                </p>
              </div>

              <div className="mt-12">
                <MagneticButton className="px-8 py-4 bg-canvas-white text-surface-charcoal rounded-md font-inter font-bold hover:bg-surface-variant shadow-[0_4px_12px_rgba(36,42,51,0.1)] hover:-translate-y-1 transition-all duration-300">
                  Book a Call
                </MagneticButton>
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 relative h-[600px] rounded-xl overflow-hidden shadow-[0_32px_64px_rgba(36,42,51,0.05)] bg-canvas-white p-12">
            <motion.img 
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              src="/image/content.png" 
              alt="Idle Shark Workspace" 
              className="w-full h-full object-contain transition-all duration-700"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
