import { motion } from 'framer-motion';
import ServicesSection from '../components/ServicesSection';

export default function Services() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-heading font-bold text-white tracking-tight mb-8"
        >
          Our <span className="text-accent">Expertise.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-xl max-w-2xl"
        >
          End-to-end digital services designed to elevate your brand and drive measurable results.
        </motion.p>
      </div>
      
      {/* Reusing the ServicesSection from home page for simplicity, but in a real app this would be more detailed */}
      <ServicesSection />
    </main>
  );
}
