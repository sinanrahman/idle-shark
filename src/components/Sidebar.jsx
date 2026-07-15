import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiLinkedin, FiFacebook, FiMinus } from 'react-icons/fi';
import { FaXTwitter, FaWhatsapp } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Services', path: '/services' },
    { title: 'Resources', path: '/resources' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <aside className="fixed top-0 left-0 h-screen w-20 md:w-24 bg-surface z-50 flex flex-col justify-between items-center py-8 shadow-xl">
        {/* Top: Hamburger Menu / X */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 rounded-full bg-surface-charcoal flex items-center justify-center text-canvas-white hover:bg-surface-charcoal/90 transition-colors shadow-[0_8px_32px_rgba(36,42,51,0.2)] cursor-hover z-50 relative"
        >
          {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
        </button>

        {/* Middle: Rotated Branding */}
        <div className="flex-1 flex items-center justify-center w-full">
          <Link to="/" className="cursor-hover">
            <img src="/image/logo-exact.png" alt="Idle Shark" className="w-140 md:w-164 h-auto transform -rotate-90 origin-center rounded-sm" />
          </Link>
        </div>

        {/* Bottom: Social Icons */}
        <div className="flex flex-col space-y-6 text-surface-charcoal cursor-hover relative z-50">
          <a href="#" className="hover:text-accent-orange transition-colors"><FaXTwitter className="w-5 h-5" /></a>
          <a href="#" className="hover:text-accent-orange transition-colors"><FiFacebook className="w-5 h-5" /></a>
          <a href="#" className="hover:text-accent-orange transition-colors"><FiLinkedin className="w-5 h-5" /></a>
          <a href="#" className="hover:text-accent-orange transition-colors"><FaWhatsapp className="w-5 h-5" /></a>
        </div>
      </aside>

      {/* Slide-out Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.5, ease: 'easeInOut' }}
            className="fixed top-0 left-20 md:left-24 h-screen w-80 md:w-96 bg-surface z-40 shadow-[0_32px_64px_rgba(36,42,51,0.05)] flex flex-col border-l border-outline-variant"
          >
            <div className="flex-1 overflow-y-auto py-12 px-8 flex flex-col mt-16 md:mt-0">
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
        )}
      </AnimatePresence>
    </>
  );
}
