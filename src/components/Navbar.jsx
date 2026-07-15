import { useEffect, useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > 100 && latest > previous) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "py-4 bg-canvas-white/10 backdrop-blur-[20px] border-b border-outline-variant/20" : "py-8 bg-transparent"
      }`}
    >
      <div className="max-w-[var(--spacing-container-max)] mx-auto px-margin-edge flex justify-between items-center">
        <Link to="/" className="text-headline-sm font-hanken font-bold text-surface-charcoal tracking-tighter">
          Idle Shark<span className="text-accent-orange">.</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          {["Work", "Services", "About", "Resources"].map((item) => (
            <Link 
              key={item} 
              to={`/${item.toLowerCase()}`}
              className="text-label-md uppercase text-neutral-muted hover:text-surface-charcoal transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent-orange transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link to="/contact" className="text-label-md uppercase text-surface-charcoal hover:text-accent-orange transition-colors">
            Book Consultation
          </Link>
          <Link to="/contact" className="px-5 py-2.5 bg-accent-orange text-canvas-white rounded-md text-label-md uppercase font-bold hover:bg-accent-orange/90 hover:shadow-[0_4px_12px_rgba(250,100,0,0.3)] hover:-translate-y-0.5 transition-all duration-300">
            Start Your Project
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-surface-charcoal">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </motion.nav>
  );
}
