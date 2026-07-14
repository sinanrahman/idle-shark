import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState(1); // Default to Web Design hovered
  const imageContainerRef = useRef(null);

  const services = [
    { 
      num: '01', 
      title: 'Branding', 
      category: 'Brain Storm', 
      image: '/image/branding.jpg',
      subTitle: '— Discover & Plan —',
      description: 'We begin by gaining a deep understanding of your business, goals, and challenges. This enables us to build a tailored strategy focused on meaningful, sustainable growth.'
    },
    { 
      num: '02', 
      title: 'Web Design', 
      category: 'UI / UX', 
      image: '/image/web-design.jpg',
      subTitle: '— Create & Build —',
      description: 'We bring your strategy to life through powerful design, precise development, and targeted marketing execution — crafting every element to engage your audience and deliver results.'
    },
    { 
      num: '03', 
      title: 'Development', 
      category: 'Coding', 
      image: '/image/development.jpg',
      subTitle: '— Launch & Grow —',
      description: 'We launch with precision and monitor performance from day one, focusing on early traction, continuous optimisation, and measurable improvement.'
    },
    { 
      num: '04', 
      title: 'Marketing', 
      category: 'Integrations', 
      image: '/image/marketing.jpg',
      subTitle: "— Report & Refine — ",
      description: "We deliver clear, concise reporting that shows exactly what is working. Using real data, we refine your strategy to ensure consistent, long-term growth."
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
    <section className="bg-white w-full py-24 md:py-32 relative z-30">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left Column */}
        <div className="w-full lg:w-[45%] flex flex-col justify-start">
          <div className="flex items-center space-x-2 text-accent font-medium mb-16">
            <div className="w-3.5 h-3.5 rounded-full border-2 border-accent"></div>
            <span className="text-[15px]">Services</span>
          </div>

          <div className="relative w-full max-w-[450px] aspect-[1.3] mb-16 ml-4" style={{ perspective: "1000px" }}>
            <div 
              ref={imageContainerRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="w-full h-full rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.15)] overflow-hidden relative transition-transform duration-300 ease-out cursor-hover"
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
                <h3 className="text-accent font-bold text-lg mb-4">{services[hoveredIndex].subTitle}</h3>
                <p className="text-gray-900 text-base md:text-lg leading-[1.6] font-medium">
                  {services[hoveredIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-[55%] flex flex-col justify-center space-y-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group flex items-center justify-between cursor-hover"
              onMouseEnter={() => setHoveredIndex(index)}
            >
              <div className="flex items-baseline space-x-6 md:space-x-10">
                <span className="text-accent font-bold text-lg md:text-xl w-6">{service.num}</span>
                <h2 className={`text-[10vw] md:text-[80px] lg:text-[90px] font-heading font-bold transition-colors duration-300 leading-none tracking-tight ${hoveredIndex === index ? 'text-accent' : 'text-[#2a2a32]'}`}>
                  {service.title}
                </h2>
              </div>
              <span className="text-gray-500 font-medium text-sm md:text-base hidden sm:block whitespace-nowrap pl-4">{service.category}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
