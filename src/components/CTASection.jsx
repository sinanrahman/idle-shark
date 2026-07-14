import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';

export default function CTASection() {
  return (
    <section className="relative py-40 overflow-hidden">
      {/* Background with London Skyline Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/90 z-10"></div>
        <img 
          src="/image/logo.jpeg" 
          alt="London Skyline" 
          className="w-full h-full object-cover grayscale opacity-20 mix-blend-luminosity"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-8xl font-heading font-bold text-white mb-10 tracking-tight"
        >
          Ready to scale<br/>your impact?
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-12"
        >
          <MagneticButton className="px-10 py-5 bg-accent text-white rounded-full font-medium text-lg tracking-wide shadow-[0_0_40px_rgba(249,115,22,0.4)] hover:shadow-[0_0_60px_rgba(249,115,22,0.6)] hover:bg-orange-500 transition-all duration-300">
            Start Your Project
          </MagneticButton>
          <MagneticButton className="px-10 py-5 bg-white text-background rounded-full font-medium text-lg tracking-wide hover:bg-gray-200 transition-colors">
            Book Consultation
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
