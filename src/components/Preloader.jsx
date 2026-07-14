import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time, or wait for window load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none">

          {/* Left Background Panel */}
          <motion.div
            initial={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
            className="absolute top-0 left-0 w-1/2 h-full bg-black"
          />

          {/* Right Background Panel */}
          <motion.div
            initial={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
            className="absolute top-0 right-0 w-1/2 h-full bg-white"
          />

          {/* Center Content Container */}
          <div className="relative z-10 w-full h-full pointer-events-none">
            {/* Left Image sliding left */}
            <motion.div
              className="absolute top-1/2 right-1/2 -translate-y-1/2"
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            >
              <img
                src="/image/left.png"
                alt="Left Split"
                className="h-16 md:h-32 w-auto object-contain"
              />
            </motion.div>

            {/* Right Image sliding right */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-y-1/2"
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 200, opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            >
              <img
                src="/image/right.png"
                alt="Right Split"
                className="h-16 md:h-32 w-auto object-contain"
              />
            </motion.div>
          </div>

        </div>
      )}
    </AnimatePresence>
  );
}
