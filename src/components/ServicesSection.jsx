import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState(1); // For desktop hover
  const [expandedIndex, setExpandedIndex] = useState(null); // For mobile accordion
  const imageContainerRef = useRef(null);

  const services = [
    {
      num: '01',
      title: 'UX/UI Design',
      category: 'Design',
      image: '/image/service-1.png',
      subTitle: '— User Experience —',
      description: 'We don\'t offer disconnected services. We build cohesive digital systems in which every element works together.'
    },
    {
      num: '02',
      title: 'Development',
      category: 'Engineering',
      image: '/image/service-2.png',
      subTitle: '— Web & App —',
      description: 'We build cohesive digital systems in which every element works together to deliver seamless, fast, and secure platforms.'
    },
    {
      num: '03',
      title: 'Branding & Identity',
      category: 'Strategy',
      image: '/image/service-3.png',
      subTitle: '— Positioning —',
      description: 'Your brand is more than visuals — it is perception, trust, and market clarity. We build brand systems that communicate value.'
    },
    {
      num: '04',
      title: 'Digital Marketing',
      category: 'Growth',
      image: '/image/service-4.png',
      subTitle: '— Visibility — ',
      description: 'Traffic alone means nothing if it doesn\'t convert. We build marketing systems that attract the right users and turn them into customers.'
    },
    {
      num: '05',
      title: 'Ongoing Support',
      category: 'Optimisation',
      image: '/image/service-5.png',
      subTitle: '— Continuous Improvement —',
      description: 'We monitor, optimise, and improve your digital systems to ensure sustained performance long after launch.'
    },
  ];

  // 3D Parallax Effect for Desktop
  const handleMouseMove = (e) => {
    if (!imageContainerRef.current) return;
    const { left, top, width, height } = imageContainerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 20;
    const y = (e.clientY - top - height / 2) / 20;

    imageContainerRef.current.style.transform = `perspective(1000px) rotateY(${x - 15}deg) rotateX(${-y + 10}deg) rotateZ(-3deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    if (!imageContainerRef.current) return;
    imageContainerRef.current.style.transform = `perspective(1000px) rotateY(-15deg) rotateX(10deg) rotateZ(-3deg) scale(1)`;
  };

  return (
    <section className="bg-canvas-white w-full min-h-screen py-12 md:py-16 relative z-30 flex flex-col justify-center">
      <div className="max-w-[var(--spacing-container-max)] mx-auto px-margin-edge w-full mb-12 lg:mb-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center space-x-2 text-accent-orange font-medium mb-4">
              <div className="w-3.5 h-3.5 rounded-full border-2 border-accent-orange"></div>
              <span className="text-label-md uppercase tracking-[0.05em]">What We Do</span>
            </div>
            <h3 className="text-headline-md font-hanken font-bold text-surface-charcoal">End-to-End Digital Systems — Built to Scale</h3>
          </div>
          <p className="text-neutral-muted text-body-md max-w-sm hidden md:block">We don't offer disconnected services. We build cohesive digital systems in which every element works together.</p>
        </div>
      </div>

      {/* ======================= */}
      {/* DESKTOP VIEW (lg:flex)  */}
      {/* ======================= */}
      <div className="max-w-[var(--spacing-container-max)] mx-auto px-margin-edge w-full hidden lg:flex flex-row gap-12 items-center">
        {/* Left Column */}
        <div className="w-[45%] flex flex-col justify-center">
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

          <div className="pr-12 max-w-[400px] min-h-[150px] relative">
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
        <div className="w-[55%] flex flex-col justify-center space-y-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group flex items-center justify-between cursor-hover"
              onMouseEnter={() => setHoveredIndex(index)}
            >
              <div className="flex items-baseline space-x-8">
                <span className="text-accent-orange font-hanken font-bold text-headline-sm w-6">{service.num}</span>
                <h2 className={`text-[65px] font-hanken font-bold transition-colors duration-300 leading-none tracking-tight ${hoveredIndex === index ? 'text-accent-orange' : 'text-surface-charcoal'}`}>
                  {service.title}
                </h2>
              </div>
              <span className="text-neutral-muted text-label-md uppercase whitespace-nowrap pl-4">{service.category}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ======================= */}
      {/* MOBILE/TABLET ACCORDION */}
      {/* ======================= */}
      <div className="max-w-[var(--spacing-container-max)] mx-auto px-margin-edge w-full flex lg:hidden flex-col">
        {services.map((service, index) => {
          const isExpanded = expandedIndex === index;

          return (
            <div
              key={index}
              className={`border-b border-outline-variant py-8 cursor-pointer transition-colors duration-300`}
              onClick={() => setExpandedIndex(isExpanded ? null : index)}
            >
              {/* Row Header */}
              <div className="flex items-center justify-between group">
                <div className="flex items-baseline space-x-4">
                  <span className="text-accent-orange font-hanken font-bold text-headline-sm w-8">{service.num}</span>
                  <div className="flex flex-col">
                    <h2 className={`text-headline-md md:text-display-md font-hanken font-bold transition-colors duration-300 leading-none tracking-tight ${isExpanded ? 'text-surface-charcoal' : 'text-surface-charcoal group-hover:text-accent-orange'}`}>
                      {service.title}
                    </h2>
                    <span className="text-neutral-muted text-body-md mt-1 font-medium">{service.category}</span>
                  </div>
                </div>

                {/* Toggle Icon */}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 flex-shrink-0 ${isExpanded ? 'bg-surface-charcoal text-canvas-white' : 'bg-surface-charcoal text-canvas-white'}`}>
                  {isExpanded ? <FiMinus className="w-5 h-5" /> : <FiPlus className="w-5 h-5" />}
                </div>
              </div>

              {/* Expandable Content */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pt-6 pb-2 flex flex-col gap-6">
                      <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg bg-surface-variant">
                        <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="w-full flex flex-col justify-center">
                        <h3 className="text-accent-orange font-hanken font-bold text-headline-sm mb-3">{service.subTitle}</h3>
                        <p className="text-surface-charcoal text-body-lg leading-[1.6]">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}

        {/* Mobile Footer Link */}
        <div className="w-full mt-10 mb-4 flex justify-start">
          <Link to="/contact" className="flex items-center space-x-4 text-surface-charcoal hover:text-accent-orange font-bold text-headline-sm transition-colors group">
            <span className="text-accent-orange font-bold text-[32px] font-sans group-hover:translate-x-2 transition-transform duration-300">↳</span>
            <span>See pricing</span>
          </Link>
        </div>
      </div>

    </section>
  );
}
