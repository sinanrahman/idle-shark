import { motion } from 'framer-motion';
import { FiCheckCircle, FiZap, FiTrendingUp } from 'react-icons/fi';

export default function PositionStrip() {
  const metrics = [
    { id: 1, title: 'Clarity', icon: FiCheckCircle, desc: 'Crystal clear communication and transparent processes.' },
    { id: 2, title: 'Performance', icon: FiZap, desc: 'Blazing fast load times and optimized codebases.' },
    { id: 3, title: 'Results', icon: FiTrendingUp, desc: 'Data-driven strategies that guarantee ROI.' },
  ];

  return (
    <section className="py-20 bg-secondary relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-white/10">
          
          {metrics.map((metric, i) => (
            <motion.div 
              key={metric.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="flex flex-col items-center text-center px-6 pt-12 md:pt-0 group cursor-hover"
            >
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6 text-accent group-hover:bg-accent-hover-hover group-hover:text-white group-hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] transition-all duration-500">
                <metric.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-heading font-medium text-white mb-3">{metric.title}</h3>
              <p className="text-gray-400">{metric.desc}</p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
