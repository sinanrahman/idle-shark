import { motion } from 'framer-motion';
import MagneticButton from '../components/MagneticButton';

export default function Contact() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Left: Info */}
          <div className="w-full lg:w-1/2">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-heading font-bold text-white tracking-tight mb-8"
            >
              Let's <span className="text-accent">Talk.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-xl max-w-md mb-16"
            >
              Have a project in mind? We'd love to hear about it. Drop us a message and we'll get back to you within 24 hours.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-gray-500 text-sm uppercase tracking-widest mb-2">Email</h3>
                <a href="mailto:hello@idleshark.com" className="text-2xl text-white hover:text-accent-hover transition-colors">hello@idleshark.com</a>
              </div>
              <div>
                <h3 className="text-gray-500 text-sm uppercase tracking-widest mb-2">Office</h3>
                <p className="text-xl text-white">123 Innovation Drive<br/>London, UK</p>
              </div>
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <form className="bg-secondary/50 p-8 md:p-12 rounded-3xl border border-white/5 space-y-8">
              
              <div className="relative group">
                <input type="text" id="name" required className="block w-full bg-transparent border-b border-gray-600 py-4 text-white focus:outline-none focus:border-accent transition-colors peer" placeholder=" " />
                <label htmlFor="name" className="absolute left-0 top-4 text-gray-500 text-lg transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-accent peer-valid:-top-3 peer-valid:text-xs">Your Name</label>
              </div>

              <div className="relative group">
                <input type="email" id="email" required className="block w-full bg-transparent border-b border-gray-600 py-4 text-white focus:outline-none focus:border-accent transition-colors peer" placeholder=" " />
                <label htmlFor="email" className="absolute left-0 top-4 text-gray-500 text-lg transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-accent peer-valid:-top-3 peer-valid:text-xs">Your Email</label>
              </div>

              <div className="relative group">
                <textarea id="message" rows="4" required className="block w-full bg-transparent border-b border-gray-600 py-4 text-white focus:outline-none focus:border-accent transition-colors peer resize-none" placeholder=" "></textarea>
                <label htmlFor="message" className="absolute left-0 top-4 text-gray-500 text-lg transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-accent peer-valid:-top-3 peer-valid:text-xs">Project Details</label>
              </div>

              <div className="pt-4">
                <MagneticButton className="w-full py-5 bg-white text-background rounded-full font-medium text-lg hover:bg-accent-hover hover:text-white transition-colors duration-300">
                  Send Message
                </MagneticButton>
              </div>

            </form>
          </motion.div>

        </div>
      </div>
    </main>
  );
}
