import { motion } from 'framer-motion';

export default function TechStackSection() {
  const technologies = [
    { name: 'React', x: '10%', y: '20%' },
    { name: 'Vue', x: '80%', y: '30%' },
    { name: 'APIs', x: '20%', y: '60%' },
    { name: 'Databases', x: '70%', y: '70%' },
    { name: 'WordPress', x: '40%', y: '10%' },
    { name: 'Shopify', x: '60%', y: '80%' },
    { name: 'Analytics', x: '85%', y: '50%' },
    { name: 'Custom Builds', x: '15%', y: '85%' },
  ];

  return (
    <section className="bg-canvas-white py-24 md:py-32 relative z-20 border-t border-outline-variant/30 overflow-hidden">
      {/* Animated Code Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden font-mono text-sm leading-relaxed whitespace-pre p-8 select-none">
        {`function initializeCore() {
  const system = new SystemArchitecture({
    scale: 'global',
    performance: 'maximum',
    security: 'enterprise'
  });
  
  system.mount(document.getElementById('root'));
  system.optimize();
  
  return system.ready.then(() => {
    Logger.info('Core initialized successfully.');
    startEventLoop();
  });
}

class QuantumEngine extends Engine {
  constructor(config) {
    super(config);
    this.state = 'idle';
  }
  
  accelerate() {
    this.state = 'active';
    this.emit('boost', { level: 9000 });
  }
}`}
      </div>

      <div className="relative z-10 text-center pointer-events-none px-4">
        <h2 className="text-headline-lg md:text-display-xl font-hanken font-bold text-surface-charcoal tracking-tight mb-6">Modern Stack.<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-orange to-primary-container">Future-Proof Thinking.</span></h2>
        <p className="text-neutral-muted text-body-lg max-w-lg mx-auto">We work with proven, scalable technologies built for long-term performance.</p>
      </div>

      {/* Floating Tech Icons */}
      {technologies.map((tech, i) => (
        <motion.div
          key={i}
          className="absolute hidden md:flex items-center justify-center px-6 py-3 rounded-full bg-canvas-white/80 backdrop-blur-md border border-outline-variant text-surface-charcoal font-bold shadow-[0_32px_64px_rgba(36,42,51,0.05)]"
          style={{ left: tech.x, top: tech.y }}
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 4 + (i % 3),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2
          }}
        >
          {tech.name}
        </motion.div>
      ))}
    </section>
  );
}
