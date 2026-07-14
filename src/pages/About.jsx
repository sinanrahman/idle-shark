import { motion } from 'framer-motion';

export default function About() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-heading font-bold text-white tracking-tight mb-8"
        >
          We are <span className="text-accent">Idle Shark.</span>
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="rounded-3xl overflow-hidden h-[600px]"
          >
            <img src="/image/logo.jpeg" alt="Team" className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700" />
          </motion.div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-heading font-medium text-white mb-6">Driven by design. Powered by technology.</h2>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Founded on the belief that digital experiences should be both beautiful and functional, we've spent the last decade perfecting our craft.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Our team of award-winning designers and engineers work in unison to push the boundaries of what's possible on the web.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
