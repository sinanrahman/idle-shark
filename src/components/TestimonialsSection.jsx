import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left

  const testimonials = [
    {
      quote: "Idle Shark helps companies create exceptional experiences. Our team works to ensure every detail aligns with your goals.",
      subquote: "Create awesome digital solutions that not only look great but also get results, helping you build lasting connections.",
      name: "Annie Bassett",
      title: "UX researcher and partner",
      image: "/image/person-1.jpg"
    },
    {
      quote: "Idle Shark guides enterprises to develop striking experiences that truly connect with their audience. Our crew works hand in hand with strategy.",
      subquote: "Design interactive digital platforms that not only shine but also deliver results, supporting you in building lasting bonds.",
      name: "Emily Chen",
      title: "UX researcher and partner",
      image: "/image/person-2.jpg"
    },
    {
      quote: "Idle Shark collaborates with brands to craft outstanding interactions that engage their target markets.",
      subquote: "Develop remarkable digital strategies that not only captivate but also drive success, enabling you to forge enduring relationships.",
      name: "Michael Turner",
      title: "Creative director and co-founder",
      image: "/image/person-3.jpg"
    },
    {
      quote: "Idle Shark empowers organizations to design memorable engagements that connect deeply with their customers.",
      subquote: "Invent incredible digital products that not only impress but also yield outcomes, aiding you in establishing strong ties.",
      name: "Sarah Johnson",
      title: "Lead designer and strategist",
      image: "/image/person-4.jpg"
    },
    {
      quote: "Idle Shark assists firms in forming impactful interactions that resonate strongly with their clientele. Our team collaborates with you.",
      subquote: "Craft stunning digital experiences that not only dazzle but also convert, helping you foster meaningful relationships.",
      name: "David Lee",
      title: "Technical lead and innovator",
      image: "/image/person-5.jpg"
    }
  ];

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const slideVariants = {
    hiddenRight: { x: 50, opacity: 0 },
    hiddenLeft: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeInOut" } },
    exitRight: { x: 50, opacity: 0, transition: { duration: 0.4, ease: "easeInOut" } },
    exitLeft: { x: -50, opacity: 0, transition: { duration: 0.4, ease: "easeInOut" } },
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="w-full bg-accent-orange overflow-hidden">
      <div className="max-w-[var(--spacing-container-max)] mx-auto px-margin-edge py-24 md:py-32">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-12 lg:gap-24">
          
          {/* Left Column: Image */}
          <div className="w-full lg:w-[40%] flex-shrink-0">
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden bg-surface-charcoal/20">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1, transition: { duration: 0.6 } }}
                  exit={{ opacity: 0, transition: { duration: 0.4 } }}
                />
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="w-full lg:w-[60%] flex flex-col justify-center min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={direction === 1 ? "hiddenRight" : "hiddenLeft"}
                animate="visible"
                exit={direction === 1 ? "exitLeft" : "exitRight"}
                variants={slideVariants}
                className="flex flex-col h-full"
              >
                {/* Main Quote */}
                <h3 className="text-headline-md md:text-display-sm lg:text-[44px] xl:text-[52px] font-hanken font-bold text-canvas-white leading-[1.15] mb-8">
                  {currentTestimonial.quote}
                </h3>
                
                {/* Sub Quote */}
                <p className="text-headline-sm font-hanken text-canvas-white/90 mb-12 max-w-2xl">
                  {currentTestimonial.subquote}
                </p>
                
                {/* Divider Line */}
                <div className="w-full h-[1px] bg-canvas-white/40 mb-8" />
                
                {/* Bottom Row: Author & Controls */}
                <div className="flex items-center justify-between mt-auto">
                  <div>
                    <h4 className="text-headline-sm font-hanken font-bold text-canvas-white">
                      {currentTestimonial.name}
                    </h4>
                    <p className="text-body-md font-medium text-canvas-white/80 mt-1">
                      {currentTestimonial.title}
                    </p>
                  </div>
                  
                  {/* Navigation Arrows */}
                  <div className="flex items-center space-x-4">
                    <button 
                      onClick={handlePrev}
                      className="w-12 h-12 rounded-full border border-canvas-white flex items-center justify-center text-canvas-white hover:bg-canvas-white hover:text-accent-orange transition-colors"
                      aria-label="Previous testimonial"
                    >
                      <FiChevronLeft className="w-6 h-6" />
                    </button>
                    <button 
                      onClick={handleNext}
                      className="w-12 h-12 rounded-full border border-canvas-white flex items-center justify-center text-canvas-white hover:bg-canvas-white hover:text-accent-orange transition-colors"
                      aria-label="Next testimonial"
                    >
                      <FiChevronRight className="w-6 h-6" />
                    </button>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
