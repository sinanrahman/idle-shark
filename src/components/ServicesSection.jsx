import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState(1); // Default to Web Design hovered
  const imageContainerRef = useRef(null);

  const services = [
    { 
      num: '01', 
      title: 'UX/UI Design', 
      category: 'Design', 
      image: '/image/branding.jpg',
      subTitle: '— User Experience —',
      description: 'We don\'t offer disconnected services. We build cohesive digital systems in which every element works together.'
    },
    { 
      num: '02', 
      title: 'Development', 
      category: 'Engineering', 
      image: '/image/web-design.jpg',
      subTitle: '— Web & App —',
      description: 'We build cohesive digital systems in which every element works together to deliver seamless, fast, and secure platforms.'
    },
    { 
      num: '03', 
      title: 'Branding & Identity', 
      category: 'Strategy', 
      image: '/image/marketing.jpg',
      subTitle: '— Positioning —',
      description: 'Your brand is more than visuals — it is perception, trust, and market clarity. We build brand systems that communicate value.'
    },
    { 
      num: '04', 
      title: 'Digital Marketing', 
      category: 'Growth', 
      image: '/image/development.jpg',
      subTitle: '— Visibility — ',
      description: 'Traffic alone means nothing if it doesn\'t convert. We build marketing systems that attract the right users and turn them into customers.'
    },
    { 
      num: '05', 
      title: 'Ongoing Support', 
      category: 'Optimisation', 
      image: '/image/support.jpg', 
      subTitle: '— Continuous Improvement —',
      description: 'We monitor, optimise, and improve your digital systems to ensure sustained performance long after launch.'
    },
  ];

  // 3D Parallax Effect
  const handleMouseMove = (e) => {
    if (!imageContainerRef.current) return;
    const { left, top, width, height } = imageContainerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 20; // Sensitivity 
    const y = (e.clientY - top - height / 2) / 20;
    
    // Add the base skew to the dynamic mouse position
    imageContainerRef.current.style.transform = `perspective(1000px) rotateY(${x - 15}deg) rotateX(${-y + 10}deg) rotateZ(-3deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    if (!imageContainerRef.current) return;
    // Reset to base skew with a smooth transition
    imageContainerRef.current.style.transform = `perspective(1000px) rotateY(-15deg) rotateX(10deg) rotateZ(-3deg) scale(1)`;
  };

  return (
    <section className="bg-canvas-white w-full min-h-screen py-12 md:py-16 relative z-30 flex flex-col justify-center">
      <div className="max-w-[var(--spacing-container-max)] mx-auto px-margin-edge w-full mb-16 lg:mb-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center space-x-2 text-accent-orange font-medium mb-4">
              <div className="w-3.5 h-3.5 rounded-full border-2 border-accent-orange"></div>
              <span className="text-label-md uppercase tracking-[0.05em]">What We Do</span>
            </div>
            <h3 className="text-headline-md font-hanken font-bold text-surface-charcoal">End-to-End Digital Systems — Built to Scale</h3>
          </div>
          <p className="text-neutral-muted text-body-md max-w-sm">We don't offer disconnected services. We build cohesive digital systems in which every element works together.</p>
        </div>
      </div>

      <div className="max-w-[var(--spacing-container-max)] mx-auto px-margin-edge w-full flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
        
        {/* Left Column */}
        <div className="w-full lg:w-[45%] flex flex-col justify-center">


          <div className="relative w-full max-w-[450px] aspect-[1.3] mb-16 ml-4" style={{ perspective: "1000px" }}>
            <div 
              ref={imageContainerRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="w-full h-full rounded-xl shadow-[0_32px_64px_rgba(36,42,51,0.05)] overflow-hidden relative transition-transform duration-300 ease-out cursor-hover"
              style={{ transform: "perspective(1000px) rotateY(-15deg) rotateX(10deg) rotateZ(-3deg) scale(1)" }}
            >
              <AnimatePresence>
                <motion.img 
                  key={hoveredIndex}
                  src={services[hoveredIndex].image}
                  alt={services[hoveredIndex].title}
                  initial={{ opacity: 0, scale: 1.2 }}
                  animate={{ opacity: 1, scale: 1.05 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>
          </div>

          <div className="pr-4 md:pr-12 max-w-[400px] min-h-[150px] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={hoveredIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-accent-orange font-hanken font-bold text-headline-sm mb-4">{services[hoveredIndex].subTitle}</h3>
                <p className="text-surface-charcoal text-body-lg leading-[1.6]">
                  {services[hoveredIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-[55%] flex flex-col justify-center space-y-6 lg:space-y-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group flex items-center justify-between cursor-hover"
              onMouseEnter={() => setHoveredIndex(index)}
            >
              <div className="flex items-baseline space-x-4 md:space-x-8">
                <span className="text-accent-orange font-hanken font-bold text-headline-sm w-6">{service.num}</span>
                <h2 className={`text-headline-lg md:text-[55px] lg:text-[65px] font-hanken font-bold transition-colors duration-300 leading-none tracking-tight ${hoveredIndex === index ? 'text-accent-orange' : 'text-surface-charcoal'}`}>
                  {service.title}
                </h2>
              </div>
              <span className="text-neutral-muted text-label-md uppercase hidden sm:block whitespace-nowrap pl-4">{service.category}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
