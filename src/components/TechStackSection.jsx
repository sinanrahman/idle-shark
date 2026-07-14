import { motion } from 'framer-motion';

export default function TechStackSection() {
  const technologies = [
    { name: 'React', x: '10%', y: '20%' },
    { name: 'Vue', x: '80%', y: '30%' },
    { name: 'Node.js', x: '20%', y: '60%' },
    { name: 'Python', x: '70%', y: '70%' },
    { name: 'AWS', x: '40%', y: '10%' },
    { name: 'Vercel', x: '60%', y: '80%' },
    { name: 'GraphQL', x: '85%', y: '50%' },
    { name: 'PostgreSQL', x: '15%', y: '85%' },
    { name: 'Three.js', x: '50%', y: '40%' },
  ];

  return (
    <section className="h-[80vh] bg-background relative overflow-hidden flex items-center justify-center border-y border-white/5">
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

      <div className="relative z-10 text-center pointer-events-none">
        <h2 className="text-5xl md:text-7xl font-heading font-bold text-white tracking-tight mb-6">Engineered for<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400">Scale.</span></h2>
        <p className="text-gray-400 text-xl max-w-lg mx-auto">We use modern, battle-tested technologies to build robust digital solutions.</p>
      </div>

      {/* Floating Tech Icons */}
      {technologies.map((tech, i) => (
        <motion.div
          key={i}
          className="absolute hidden md:flex items-center justify-center px-6 py-3 rounded-full bg-secondary/80 backdrop-blur-md border border-white/10 text-white font-medium shadow-xl"
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
