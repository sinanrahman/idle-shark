import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function Resources() {
  const [activeFilter, setActiveFilter] = useState('All');

  const items = [
    { title: 'The Future of Web Design', category: 'Blog', height: 'h-80', img: '/image/project-1.jpg' },
    { title: 'Optimizing React Performance', category: 'Blog', height: 'h-[400px]', img: '/image/project-2.jpg' },
    { title: 'Global E-commerce Launch', category: 'Case Study', height: 'h-96', img: '/image/project-3.jpg' },
    { title: 'Fintech App Redesign', category: 'Case Study', height: 'h-[450px]', img: '/image/project-4.jpg' },
  ];

  return (
    <main className="min-h-screen bg-canvas-white pt-32 pb-20">
      <div className="max-w-[var(--spacing-container-max)] mx-auto px-margin-edge">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-headline-lg-mobile md:text-display-xl font-hanken font-bold text-surface-charcoal tracking-tight mb-8"
        >
          Insights & <span className="text-accent-orange">Work.</span>
        </motion.h1>
        
        {/* Simple Filters */}
        <div className="flex space-x-4 mb-12">
          {[
            { label: 'All', value: 'All' }, 
            { label: 'Blog', value: 'Blog' }, 
            { label: 'Case Studies', value: 'Case Study' }
          ].map((filter, i) => (
            <button 
              key={i} 
              onClick={() => setActiveFilter(filter.value)}
              className={`px-6 py-2 rounded-full border transition-colors ${
                activeFilter === filter.value 
                  ? 'bg-surface-charcoal text-canvas-white border-surface-charcoal' 
                  : 'bg-transparent text-neutral-muted border-outline hover:border-surface-charcoal hover:text-surface-charcoal'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Standard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {(activeFilter === 'All' ? items : items.filter(item => item.category === activeFilter)).map((item, i) => (
              <motion.div 
                key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative rounded-xl overflow-hidden group cursor-hover aspect-[4/3] shadow-[0_32px_64px_rgba(36,42,51,0.05)]"
            >
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-surface-charcoal/90 via-surface-charcoal/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img src={item.img} alt={item.title} className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-700" />
              
              <div className="absolute bottom-0 left-0 p-8 z-20">
                <span className="text-accent-orange text-label-md uppercase tracking-wider mb-2 block">{item.category}</span>
                <h3 className="text-headline-sm font-hanken font-bold text-canvas-white">{item.title}</h3>
              </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
