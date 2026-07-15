import { motion } from 'framer-motion';
import { FiTarget, FiEye, FiCheckCircle, FiLayers, FiTrendingUp, FiSearch, FiMessageSquare } from 'react-icons/fi';
import PhilosophySection from '../components/PhilosophySection';

export default function About() {
  const whyChooseUs = [
    { title: 'Strategy-Led Execution', icon: FiTarget, desc: 'Everything begins with data. We analyse, plan, and build with clear intent, ensuring every decision supports your business objectives.' },
    { title: 'End-to-End Expertise', icon: FiLayers, desc: 'From UX/UI design to development and digital marketing, everything is handled in-house — delivering consistency, speed, and full accountability.' },
    { title: 'Performance-Focused', icon: FiTrendingUp, desc: 'We prioritise outcomes over aesthetics alone. Faster platforms, stronger user experiences, and higher conversion rates are always the goal.' },
    { title: 'SEO & Growth Built In', icon: FiSearch, desc: 'Every project is built for long-term visibility. We optimise for search performance, user behaviour, and scalability from day one.' },
    { title: 'Transparent Throughout', icon: FiMessageSquare, desc: 'No confusion. No hidden processes. Just clear communication, structured updates, and complete visibility at every stage.' }
  ];

  const approachSteps = [
    { num: 'I', title: 'Insight-Driven', desc: 'We start with data — understanding your users, their behaviour, and market demand — before making a single decision.' },
    { num: 'D', title: 'Design-Led', desc: 'We create user experiences engineered to improve engagement and drive measurable conversion performance.' },
    { num: 'E', title: 'Execution-Focused', desc: 'We move quickly and precisely, translating strategy into live, fully functional digital systems.' },
    { num: 'L', title: 'Long-Term Partnership', desc: 'We continue optimising and improving performance post-launch to ensure ongoing, compounding growth.' }
  ];

  return (
    <main className="min-h-screen bg-canvas-white pt-32 pb-20">
      
      {/* Who We Are */}
      <section className="max-w-[var(--spacing-container-max)] mx-auto px-margin-edge py-section-gap">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h2 className="text-label-md text-accent-orange uppercase mb-4 tracking-wider font-bold">Who We Are</h2>
          <h1 className="text-headline-lg-mobile md:text-display-xl font-hanken font-bold text-surface-charcoal leading-tight tracking-tight">
            A Full-Service Digital<br/>Growth Partner.
          </h1>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="rounded-xl overflow-hidden h-[500px] shadow-[0_32px_64px_rgba(36,42,51,0.05)]"
          >
            <img src="/image/logo.jpeg" alt="Idle Shark Team" className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700" />
          </motion.div>
          <div className="flex flex-col justify-center space-y-6 text-neutral-muted text-body-lg leading-relaxed">
            <p>
              Idle Shark works with startups, scaling businesses, and established brands looking to strengthen their digital performance.
            </p>
            <p>
              We don't operate in separate departments or provide disconnected services. Instead, we integrate design, development, branding, and marketing into a single, growth-focused system — delivering a better user experience, stronger online visibility, and higher conversion rates.
            </p>
            <div className="pt-6 space-y-4">
              <div className="flex items-start space-x-4">
                <FiTarget className="w-6 h-6 text-accent-orange mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-surface-charcoal font-bold font-hanken text-headline-sm">Mission</h4>
                  <p className="text-neutral-muted text-body-md mt-1">To deliver high-impact digital solutions that drive sustainable, measurable business growth.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <FiEye className="w-6 h-6 text-accent-orange mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-surface-charcoal font-bold font-hanken text-headline-sm">Vision</h4>
                  <p className="text-neutral-muted text-body-md mt-1">To redefine how modern brands experience digital — through performance, intelligence, and design excellence.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-surface-container-low py-section-gap border-y border-outline-variant">
        <div className="max-w-[var(--spacing-container-max)] mx-auto px-margin-edge">
          <div className="text-center mb-16">
            <h2 className="text-label-md text-accent-orange uppercase mb-4 tracking-wider font-bold">Why Choose Us</h2>
            <h3 className="text-headline-lg font-hanken font-bold text-surface-charcoal mb-6">Built for Outcomes — Not Applause</h3>
            <p className="text-neutral-muted text-body-lg max-w-2xl mx-auto">
              There is a clear distinction between what looks impressive and what actually performs. We build the latter.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-canvas-white border border-outline-variant p-8 rounded-xl shadow-[0_32px_64px_rgba(36,42,51,0.02)] group cursor-hover"
              >
                <div className="w-12 h-12 rounded-full bg-accent-orange/10 text-accent-orange flex items-center justify-center mb-6 group-hover:bg-accent-orange group-hover:text-canvas-white transition-colors duration-300">
                  <item.icon className="w-6 h-6" />
                </div>
                <h4 className="text-headline-sm font-hanken font-bold text-surface-charcoal mb-3">{item.title}</h4>
                <p className="text-neutral-muted text-body-md leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-section-gap bg-canvas-white">
        <div className="max-w-[var(--spacing-container-max)] mx-auto px-margin-edge">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            <div className="w-full lg:w-1/3">
              <h2 className="text-label-md text-accent-orange uppercase mb-4 tracking-wider font-bold">Our Approach</h2>
              <h3 className="text-headline-lg font-hanken font-bold text-surface-charcoal mb-6 leading-tight">The I.D.E.L. Framework</h3>
              <p className="text-surface-charcoal font-medium text-body-lg mb-6">A Structured System for Growth</p>
              <p className="text-neutral-muted text-body-lg leading-relaxed">
                We apply a repeatable, four-stage framework to ensure consistency, clarity, and results across every engagement.
              </p>
            </div>
            
            <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {approachSteps.map((step, i) => (
                <div key={i} className="flex space-x-6 group">
                  <div className="w-16 h-16 flex-shrink-0 rounded-full border-2 border-outline-variant text-surface-charcoal flex items-center justify-center font-hanken font-bold text-display-sm group-hover:border-accent-orange group-hover:text-accent-orange transition-colors duration-300">
                    {step.num}
                  </div>
                  <div className="pt-2">
                    <h4 className="text-headline-sm font-hanken font-bold text-surface-charcoal mb-2">{step.title}</h4>
                    <p className="text-neutral-muted text-body-md leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <PhilosophySection />

    </main>
  );
}
