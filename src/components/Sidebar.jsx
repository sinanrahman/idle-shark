import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiLinkedin, FiFacebook, FiMinus } from 'react-icons/fi';
import { FaXTwitter, FaWhatsapp } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { title: 'Home', path: '/#' },
    { title: 'Process', path: '/#process' },
    { title: 'Testimonials', path: '/#testimonials' },
    { title: 'Resources', path: '/resources' },
    { title: 'Services', path: '/services' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <aside className="fixed top-0 left-0 w-full h-16 md:w-24 md:h-screen bg-canvas-white z-50 flex flex-row md:flex-col justify-between items-center px-4 md:px-0 py-0 md:py-8 shadow-xl">
        {/* Top: Hamburger Menu / X */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-canvas-white md:bg-surface-charcoal flex items-center justify-center text-surface-charcoal md:text-canvas-white hover:bg-canvas-white/90 md:hover:bg-surface-charcoal/90 transition-colors shadow-md md:shadow-[0_8px_32px_rgba(36,42,51,0.2)] cursor-hover z-50 relative"
        >
          {isOpen ? <FiX className="w-5 h-5 md:w-6 md:h-6" /> : <FiMenu className="w-5 h-5 md:w-6 md:h-6" />}
        </button>

        {/* Middle: Rotated Branding / Mobile Logo */}
        <div className="flex-1 flex items-center justify-end md:justify-center w-full">
          <Link to="/" className="cursor-hover">
            <img src="/image/logo-exact.png" alt="Idle Shark" className="hidden md:block w-[180px] md:w-[240px] h-auto transform -rotate-90 origin-center rounded-sm" />
            <span className="md:hidden text-canvas-white font-hanken font-bold text-xl tracking-widest flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-canvas-white flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-accent-orange"><path d="M12 2L2 22h20L12 2zm0 3.8L18.4 19H5.6L12 5.8z"/></svg>
              </span>
              IDLE SHARK
            </span>
          </Link>
        </div>

        {/* Bottom: Social Icons */}
        <div className="hidden md:flex flex-col space-y-6 text-surface-charcoal cursor-hover relative z-50">
          <a href="#" className="hover:text-accent-orange transition-colors"><FaXTwitter className="w-5 h-5" /></a>
          <a href="#" className="hover:text-accent-orange transition-colors"><FiFacebook className="w-5 h-5" /></a>
          <a href="#" className="hover:text-accent-orange transition-colors"><FiLinkedin className="w-5 h-5" /></a>
          <a href="#" className="hover:text-accent-orange transition-colors"><FaWhatsapp className="w-5 h-5" /></a>
        </div>
      </aside>

      {/* Slide-out Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Desktop Menu (Slides from Left) */}
            <motion.div
              key="desktop-menu"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.5, ease: 'easeInOut' }}
              className="hidden md:flex fixed top-0 left-24 h-screen w-96 bg-surface z-40 shadow-[0_32px_64px_rgba(36,42,51,0.05)] flex-col border-l border-outline-variant"
            >
              <div className="flex-1 overflow-y-auto py-12 px-8 flex flex-col">
                <div className="mb-8">
                  <p className="text-accent-orange text-label-md uppercase tracking-wider font-bold">Think Sharp. Move Smart.</p>
                </div>
                <nav className="flex flex-col">
                  {navLinks.map((link, i) => (
                    <Link 
                      key={i} 
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between py-5 px-8 -mx-8 text-headline-sm font-hanken font-bold text-surface-charcoal border-b border-outline-variant hover:bg-surface-charcoal hover:text-canvas-white transition-all duration-300 cursor-hover group"
                    >
                      <span>{link.title}</span>
                      <FiMinus className="text-surface-charcoal group-hover:text-canvas-white transition-colors" />
                    </Link>
                  ))}
                </nav>
                
                <div className="mt-auto pt-12">
                  <p className="text-neutral-muted text-label-md uppercase mb-1">(971) 895-6500</p>
                  <a href="mailto:hello@idleshark.com" className="text-headline-sm md:text-headline-md font-hanken font-bold text-surface-charcoal hover:text-accent-orange transition-colors">
                    hello@idleshark.com
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Mobile Menu (Slides from Top) */}
            <motion.div
              key="mobile-menu"
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ type: 'tween', duration: 0.5, ease: 'easeInOut' }}
              className="md:hidden fixed top-16 left-0 w-full bg-surface z-30 shadow-[0_32px_64px_rgba(36,42,51,0.1)] flex flex-col border-b border-outline-variant max-h-[calc(100vh-4rem)] overflow-y-auto"
            >
              <div className="py-8 px-6 flex flex-col">
                <div className="mb-6">
                  <p className="text-accent-orange text-label-md uppercase tracking-wider font-bold">Think Sharp. Move Smart.</p>
                </div>
                <nav className="flex flex-col">
                  {navLinks.map((link, i) => (
                    <Link 
                      key={i} 
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between py-4 px-6 -mx-6 text-headline-sm font-hanken font-bold text-surface-charcoal border-b border-outline-variant hover:bg-surface-charcoal hover:text-canvas-white transition-all duration-300 cursor-hover group"
                    >
                      <span>{link.title}</span>
                      <FiMinus className="text-surface-charcoal group-hover:text-canvas-white transition-colors" />
                    </Link>
                  ))}
                </nav>
                
                <div className="mt-8 pt-6 pb-4">
                  <p className="text-neutral-muted text-label-md uppercase mb-1">(971) 895-6500</p>
                  <a href="mailto:hello@idleshark.com" className="text-headline-sm font-hanken font-bold text-surface-charcoal hover:text-accent-orange transition-colors">
                    hello@idleshark.com
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
