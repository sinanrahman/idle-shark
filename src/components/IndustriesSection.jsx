import { motion } from 'framer-motion';
import { FiGlobe, FiHeart, FiPieChart, FiBriefcase, FiShoppingBag, FiCloud } from 'react-icons/fi';

export default function IndustriesSection() {
  const industries = [
    { name: 'Startups & SaaS', icon: FiCloud, desc: 'Rapid prototyping and scalable architectures for software products.' },
    { name: 'E-commerce & Retail', icon: FiShoppingBag, desc: 'Digital experiences that drive conversions and build customer loyalty.' },
    { name: 'Corporate & Enterprise', icon: FiBriefcase, desc: 'Enterprise-grade transformation and robust internal tools.' },
    { name: 'Healthcare & Education', icon: FiHeart, desc: 'Secure, compliant, and accessible digital solutions.' },
    { name: 'Finance & Professional Services', icon: FiPieChart, desc: 'Platforms engineered for trust, speed, and uncompromising security.' },
  ];

  return (
    <section className="py-section-gap bg-canvas-white border-t border-outline-variant relative z-20">
      <div className="max-w-[var(--spacing-container-max)] mx-auto px-margin-edge">
        <div className="text-center mb-20">
          <h2 className="text-headline-lg font-hanken font-bold text-surface-charcoal mb-6">Built for Ambitious Sectors</h2>
          <p className="text-neutral-muted text-body-lg max-w-2xl mx-auto">We partner with brands where performance is non-negotiable:</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-surface-container-low border border-outline-variant p-8 rounded-xl hover:bg-canvas-white hover:border-surface-charcoal shadow-[0_32px_64px_rgba(36,42,51,0.05)] hover:shadow-[0_48px_80px_rgba(36,42,51,0.1)] hover:-translate-y-2 transition-all duration-300 group cursor-hover"
            >
              <div className="w-14 h-14 rounded-full bg-accent-orange/10 text-accent-orange flex items-center justify-center mb-6 group-hover:bg-accent-orange group-hover:text-canvas-white transition-colors duration-300">
                <ind.icon className="w-6 h-6" />
              </div>
              <h3 className="text-headline-sm font-hanken font-bold text-surface-charcoal mb-3">{ind.name}</h3>
              <p className="text-neutral-muted text-body-md leading-relaxed">{ind.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
