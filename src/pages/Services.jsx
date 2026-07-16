import { motion } from 'framer-motion';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import MagneticButton from '../components/MagneticButton';
import CTASection from '../components/CTASection';

export default function Services() {
  const detailedServices = [
    {
      id: '01',
      title: 'UX/UI Design',
      img: '/image/service-1.png',
      subtitle: 'Design That Improves Conversion, Not Just Appearance',
      desc: 'Effective design doesn\'t just look clean — it guides users towards action. We create user experiences that reduce friction, increase engagement, and improve conversion rates across every touchpoint.',
      includes: [
        'User research and persona development',
        'Wireframing and low-fidelity structure',
        'High-fidelity UI design',
        'Interactive prototypes',
        'Mobile and web app interface design',
        'Design systems and style guides',
        'User journey mapping',
        'Usability testing and optimisation'
      ],
      outcome: 'Stronger engagement, improved retention, and higher conversion rates.',
      cta: 'Improve My UX Design'
    },
    {
      id: '02',
      title: 'Web & App Development',
      img: '/image/service-2.png',
      subtitle: 'High-Performance Digital Products Built to Scale',
      desc: 'We build fast, secure, and scalable platforms engineered for real-world use and long-term growth. No bloated code. No performance compromises. No shortcuts.',
      includes: [
        'Custom website development',
        'WordPress, Shopify, and Wix development',
        'Web application development',
        'Mobile apps (iOS, Android, cross-platform)',
        'E-commerce platforms',
        'Backend systems — APIs and databases',
        'Frontend development — React, Vue, HTML/CSS/JS',
        'CRM, ERP, and custom software',
        'API integration and automation'
      ],
      outcome: 'Reliable digital infrastructure that supports business growth without limitations.',
      cta: 'Discuss My Project'
    },
    {
      id: '03',
      title: 'Branding & Identity',
      img: '/image/service-3.png',
      subtitle: 'Positioning That Makes Your Business Stand Out',
      desc: 'Your brand is more than visuals — it is perception, trust, and market clarity. We build brand systems that communicate value instantly and consistently.',
      includes: [
        'Logo design',
        'Brand strategy and market positioning',
        'Visual identity systems',
        'Brand guidelines — colour, typography, and usage',
        'Messaging and tone of voice',
        '2D illustration',
        '3D design and product visualisation'
      ],
      outcome: 'A strong, consistent brand that builds lasting recognition and trust.',
      cta: 'Build My Brand Identity'
    },
    {
      id: '04',
      title: 'Digital Marketing & SEO',
      img: '/image/service-4.png',
      subtitle: 'Visibility That Drives Real Business Results',
      desc: 'Traffic alone means nothing if it doesn\'t convert. We build marketing systems that attract the right users and turn them into customers.',
      includes: [
        'SEO (Search Engine Optimisation)',
        'Google Ads and PPC campaign management',
        'Social media marketing and management',
        'Email marketing',
        'Marketing strategy and planning',
        'Analytics and performance tracking',
        'Video production — ads, explainers, and promotional content'
      ],
      outcome: 'More qualified traffic, better-quality leads, and increased revenue.',
      cta: 'Get a Free SEO Audit'
    },
    {
      id: '05',
      title: 'Optimisation & Ongoing Support',
      img: '/image/service-5.png',
      subtitle: 'Continuous Improvement After Launch',
      desc: 'We don\'t disappear after delivery. We monitor, optimise, and improve your digital systems to ensure sustained performance long after launch.',
      includes: [
        'Website maintenance and updates',
        'App maintenance and bug resolution',
        'Performance optimisation',
        'Security monitoring',
        'Content updates',
        'Technical support',
        'Hosting and domain management',
        'Monthly analytics reporting'
      ],
      outcome: 'Sustained growth and compounding performance improvements over time.',
      cta: 'Scale My Business'
    }
  ];

  return (
    <main className="min-h-screen bg-canvas-white pt-32 pb-0">
      {/* Page Header */}
      <section className="max-w-[var(--spacing-container-max)] mx-auto px-margin-edge pt-12 pb-24 border-b border-outline-variant">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="w-full lg:w-1/2">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-headline-lg-mobile md:text-display-xl font-hanken font-bold text-surface-charcoal leading-tight tracking-tight mb-8"
            >
              Digital Systems Built for Growth,<br/><span className="text-accent-orange">Not Guesswork.</span>
            </motion.h1>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6 text-neutral-muted text-body-lg leading-relaxed"
            >
              <p className="font-bold text-surface-charcoal">Most agencies sell isolated services. We don't.</p>
              <p>
                Idle Shark builds connected digital systems where design, development, and marketing work together to produce one result: measurable business growth. Whether you're scaling a startup or elevating an established brand, we focus on outcomes that matter — traffic, conversions, and revenue.
              </p>
              <div className="pt-4 flex items-center gap-4">
                <span className="font-medium text-surface-charcoal">Let's build something that performs.</span>
                <MagneticButton className="px-6 py-3 bg-surface-charcoal text-canvas-white rounded-md font-inter font-bold hover:bg-surface-charcoal/90 transition-all duration-300">
                  Start Your Project
                </MagneticButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Listing */}
      <section className="py-section-gap bg-surface-container-low">
        <div className="max-w-[var(--spacing-container-max)] mx-auto px-margin-edge">
          <div className="text-center mb-24">
            <h2 className="text-label-md text-accent-orange uppercase mb-4 tracking-wider font-bold">What We Deliver</h2>
            <h3 className="text-headline-lg font-hanken font-bold text-surface-charcoal mb-6">End-to-End Digital Growth Solutions</h3>
            <p className="text-neutral-muted text-body-lg max-w-2xl mx-auto">
              Everything we do is designed to improve performance across your entire digital ecosystem — not just one part of it.
            </p>
          </div>

          <div className="space-y-32">
            {detailedServices.map((service, i) => (
              <div key={i} className={`flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 lg:gap-24 items-center`}>
                
                <motion.div 
                  initial={{ opacity: 0, x: i % 2 !== 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="w-full lg:w-1/2"
                >
                  <div className="flex items-baseline space-x-4 mb-6">
                    <span className="text-accent-orange font-hanken font-bold text-headline-md">{service.id}.</span>
                    <h2 className="text-display-sm font-hanken font-bold text-surface-charcoal leading-tight">{service.title}</h2>
                  </div>
                  <h3 className="text-headline-sm font-hanken font-bold text-surface-charcoal mb-4">{service.subtitle}</h3>
                  <p className="text-neutral-muted text-body-lg leading-relaxed mb-8">
                    {service.desc}
                  </p>
                  
                  <div className="mb-8 p-6 bg-canvas-white rounded-xl border border-outline-variant shadow-[0_16px_32px_rgba(36,42,51,0.02)]">
                    <h4 className="text-label-md uppercase tracking-wider font-bold text-surface-charcoal mb-4">What this includes:</h4>
                    <ul className="space-y-3">
                      {service.includes.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <FiCheck className="w-5 h-5 text-accent-orange mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-neutral-muted text-body-md">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <span className="font-bold text-surface-charcoal mr-2">Outcome:</span>
                    <span className="text-neutral-muted text-body-lg">{service.outcome}</span>
                  </div>

                  <MagneticButton className="px-8 py-4 bg-transparent border-2 border-surface-charcoal text-surface-charcoal rounded-md font-inter font-bold hover:bg-surface-charcoal hover:text-canvas-white transition-all duration-300 flex items-center space-x-2">
                    <span>{service.cta}</span>
                    <FiArrowRight className="w-5 h-5" />
                  </MagneticButton>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="w-full lg:w-1/2 h-[500px] rounded-2xl overflow-hidden shadow-[0_32px_64px_rgba(36,42,51,0.05)] bg-canvas-white p-2"
                >
                  <div className="w-full h-full rounded-xl overflow-hidden bg-surface-variant relative">
                    <img src={service.img} alt={service.title} className="w-full h-full object-cover" />
                  </div>
                </motion.div>
                
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
