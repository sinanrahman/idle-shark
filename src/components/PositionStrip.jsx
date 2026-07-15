import { motion } from 'framer-motion';
import { FiCheckCircle, FiZap, FiTrendingUp } from 'react-icons/fi';

export default function PositionStrip() {
  const metrics = [
    { id: 1, title: 'Clarity', icon: FiCheckCircle, desc: 'Strategy grounded in data, not guesswork.' },
    { id: 2, title: 'Performance', icon: FiZap, desc: 'Full-service delivery under one roof.' },
    { id: 3, title: 'Results', icon: FiTrendingUp, desc: 'Measurable ROI, not vanity metrics.' },
  ];

  return (
    <section className="py-20 bg-surface-container-low relative border-y border-outline-variant">
      <div className="max-w-[var(--spacing-container-max)] mx-auto px-margin-edge">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-outline-variant">
          
          {metrics.map((metric, i) => (
            <motion.div 
              key={metric.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="flex flex-col items-center text-center px-6 pt-12 md:pt-0 group cursor-hover"
            >
              <div className="w-16 h-16 rounded-full bg-accent-orange/10 flex items-center justify-center mb-6 text-accent-orange group-hover:bg-accent-orange group-hover:text-canvas-white group-hover:shadow-[0_8px_32px_rgba(250,100,0,0.3)] transition-all duration-500">
                <metric.icon className="w-8 h-8" />
              </div>
              <h3 className="text-headline-sm font-hanken font-bold text-surface-charcoal mb-3">{metric.title}</h3>
              <p className="text-neutral-muted text-body-md">{metric.desc}</p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
