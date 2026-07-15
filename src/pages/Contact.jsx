import { motion } from 'framer-motion';
import MagneticButton from '../components/MagneticButton';

export default function Contact() {
  return (
    <main className="min-h-screen bg-canvas-white pt-32 pb-20">
      <div className="max-w-[var(--spacing-container-max)] mx-auto px-margin-edge">
        
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Left: Info */}
          <div className="w-full lg:w-1/2">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-headline-lg-mobile md:text-display-xl font-hanken font-bold text-surface-charcoal tracking-tight mb-8"
            >
              Let's <span className="text-accent-orange">Talk.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-neutral-muted text-body-lg max-w-md mb-16"
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
                <h3 className="text-neutral-muted text-label-md uppercase mb-2">Email</h3>
                <a href="mailto:hello@idleshark.com" className="text-headline-sm text-surface-charcoal hover:text-accent-orange transition-colors">hello@idleshark.com</a>
              </div>
              <div>
                <h3 className="text-neutral-muted text-label-md uppercase mb-2">Office</h3>
                <p className="text-body-lg text-surface-charcoal">123 Innovation Drive<br/>London, UK</p>
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
            <form className="bg-surface-container-low p-8 md:p-12 rounded-xl border border-outline-variant shadow-[0_32px_64px_rgba(36,42,51,0.05)] space-y-8">
              
              <div className="relative group">
                <input type="text" id="name" required className="block w-full bg-transparent border-b border-outline py-4 text-surface-charcoal text-body-md focus:outline-none focus:border-accent-orange transition-colors peer" placeholder=" " />
                <label htmlFor="name" className="absolute left-0 top-4 text-neutral-muted text-body-md transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-accent-orange peer-valid:-top-3 peer-valid:text-xs">Your Name</label>
              </div>

              <div className="relative group">
                <input type="email" id="email" required className="block w-full bg-transparent border-b border-outline py-4 text-surface-charcoal text-body-md focus:outline-none focus:border-accent-orange transition-colors peer" placeholder=" " />
                <label htmlFor="email" className="absolute left-0 top-4 text-neutral-muted text-body-md transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-accent-orange peer-valid:-top-3 peer-valid:text-xs">Your Email</label>
              </div>

              <div className="relative group">
                <textarea id="message" rows="4" required className="block w-full bg-transparent border-b border-outline py-4 text-surface-charcoal text-body-md focus:outline-none focus:border-accent-orange transition-colors peer resize-none" placeholder=" "></textarea>
                <label htmlFor="message" className="absolute left-0 top-4 text-neutral-muted text-body-md transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-accent-orange peer-valid:-top-3 peer-valid:text-xs">Project Details</label>
              </div>

              <div className="pt-4">
                <MagneticButton className="w-full py-5 bg-surface-charcoal text-canvas-white rounded-md font-inter text-body-md font-bold hover:bg-accent-orange hover:text-canvas-white hover:shadow-[0_8px_32px_rgba(250,100,0,0.3)] hover:-translate-y-1 transition-all duration-300">
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
