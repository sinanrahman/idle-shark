import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiLinkedin, FiTwitter, FiFacebook, FiMinus } from 'react-icons/fi';
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
      <aside className="fixed top-0 left-0 h-screen w-20 md:w-24 bg-white z-50 flex flex-col justify-between items-center py-8 shadow-xl">
        {/* Top: Hamburger Menu / X */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white hover:bg-gray-800 transition-colors shadow-lg cursor-hover z-50 relative"
        >
          {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
        </button>

        {/* Middle: Rotated Branding */}
        <div className="flex-1 flex items-center justify-center w-full">
          <Link to="/" className="cursor-hover">
            <img src="/image/logo-exact.png" alt="Idle Shark" className="w-24 md:w-32 h-auto transform -rotate-90 origin-center rounded-sm" />
          </Link>
        </div>

        {/* Bottom: Social Icons */}
        <div className="flex flex-col space-y-6 text-black cursor-hover relative z-50">
          <a href="#" className="hover:text-accent-hover transition-colors"><FiTwitter className="w-5 h-5" /></a>
          <a href="#" className="hover:text-accent-hover transition-colors"><FiFacebook className="w-5 h-5" /></a>
          <a href="#" className="hover:text-accent-hover transition-colors"><FiLinkedin className="w-5 h-5" /></a>
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
            className="fixed top-0 left-20 md:left-24 h-screen w-80 md:w-96 bg-white z-40 shadow-2xl flex flex-col border-l border-gray-100"
          >
            <div className="flex-1 overflow-y-auto py-12 px-8 flex flex-col mt-16 md:mt-0">
              <nav className="flex flex-col">
                {navLinks.map((link, i) => (
                  <Link 
                    key={i} 
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between py-5 px-8 -mx-8 text-2xl font-heading font-medium text-accent border-b border-gray-100 hover:bg-accent-hover hover:text-white transition-all duration-300 cursor-hover group"
                  >
                    <span>{link.title}</span>
                    <FiMinus className="text-accent group-hover:text-white transition-colors" />
                  </Link>
                ))}
              </nav>
              
              <div className="mt-auto pt-12">
                <p className="text-gray-500 font-medium mb-1">(971) 895-6500</p>
                <a href="mailto:hello@idleshark.com" className="text-2xl md:text-3xl font-heading text-black hover:text-accent-hover transition-colors">
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
