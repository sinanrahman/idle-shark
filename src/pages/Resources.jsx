import { motion } from 'framer-motion';

export default function Resources() {
  const items = [
    { title: 'The Future of Web Design', category: 'Blog', height: 'h-80', img: '/image/logo.jpeg' },
    { title: 'Fintech App Redesign', category: 'Case Study', height: 'h-[400px]', img: '/image/logo.jpeg' },
    { title: 'Optimizing React Performance', category: 'Blog', height: 'h-96', img: '/image/logo.jpeg' },
    { title: 'Global E-commerce Launch', category: 'Case Study', height: 'h-[450px]', img: '/image/logo.jpeg' },
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
          {['All', 'Blog', 'Case Studies'].map((filter, i) => (
            <button key={i} className={`px-6 py-2 rounded-full border ${i === 0 ? 'bg-surface-charcoal text-canvas-white border-canvas-white' : 'bg-transparent text-neutral-muted border-outline hover:border-surface-charcoal hover:text-surface-charcoal'} transition-colors`}>
              {filter}
            </button>
          ))}
        </div>

        {/* Masonry-like Grid */}
        <div className="columns-1 md:columns-2 gap-8 space-y-8">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-xl overflow-hidden group cursor-hover ${item.height} break-inside-avoid shadow-[0_32px_64px_rgba(36,42,51,0.05)]`}
            >
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-surface-charcoal/90 via-surface-charcoal/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img src={item.img} alt={item.title} className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-700" />
              
              <div className="absolute bottom-0 left-0 p-8 z-20">
                <span className="text-accent-orange text-label-md uppercase tracking-wider mb-2 block">{item.category}</span>
                <h3 className="text-headline-sm font-hanken font-bold text-canvas-white">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
