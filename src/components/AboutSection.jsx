import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';

export default function AboutSection() {
  return (
    <section className="py-32 bg-background relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm font-medium text-accent tracking-widest uppercase mb-6">About Idle Shark</h2>
              <h3 className="text-4xl md:text-5xl font-heading font-medium text-white mb-8 leading-tight">
                A digital agency built on a foundation of excellence and innovation.
              </h3>
              
              <div className="space-y-6 text-gray-400 text-lg">
                <p>
                  Our mission is to empower brands with digital solutions that are not only visually stunning but technically superior. We believe in the perfect synergy of design and engineering.
                </p>
                <p>
                  With a visionary approach to every project, we challenge the status quo to deliver award-winning experiences that leave a lasting impact on your audience.
                </p>
              </div>

              <div className="mt-12">
                <MagneticButton className="px-8 py-4 bg-white text-background rounded-full font-medium tracking-wide hover:bg-gray-200 transition-colors">
                  Learn More About Us
                </MagneticButton>
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 relative h-[600px] rounded-3xl overflow-hidden group">
            <div className="absolute inset-0 bg-accent/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <motion.img 
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              src="/image/logo.jpeg" 
              alt="Idle Shark Workspace" 
              className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
