import { motion } from 'framer-motion';
import { FiGlobe, FiHeart, FiPieChart, FiBriefcase, FiShoppingBag, FiCloud } from 'react-icons/fi';

export default function IndustriesSection() {
  const industries = [
    { name: 'Startups', icon: FiGlobe, desc: 'Rapid prototyping and scalable MVPs for high-growth startups.' },
    { name: 'Healthcare', icon: FiHeart, desc: 'Secure, compliant, and accessible digital health solutions.' },
    { name: 'Finance', icon: FiPieChart, desc: 'Fintech platforms engineered for trust, speed, and security.' },
    { name: 'Corporate', icon: FiBriefcase, desc: 'Enterprise-grade transformation and internal tools.' },
    { name: 'Retail', icon: FiShoppingBag, desc: 'E-commerce experiences that drive conversions and loyalty.' },
    { name: 'SaaS', icon: FiCloud, desc: 'Intuitive interfaces and robust architectures for software products.' },
  ];

  return (
    <section className="py-32 bg-white border-t border-gray-200 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-heading font-medium text-gray-900 mb-6">Industries We Transform</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">We bring cross-industry expertise to deliver innovative solutions tailored to your unique market challenges.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-gray-50 border border-gray-200 p-8 rounded-2xl hover:bg-white hover:border-gray-300 transition-all duration-300 group cursor-hover"
            >
              <div className="w-14 h-14 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-6 group-hover:bg-accent-hover-hover group-hover:text-white transition-colors duration-300">
                <ind.icon className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-heading font-medium text-gray-900 mb-3">{ind.name}</h3>
              <p className="text-gray-600 leading-relaxed">{ind.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
