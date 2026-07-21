import { motion } from 'framer-motion';

export default function WorkAccordion() {
  const projects = [
    { title: 'Pure Estates', subtitle: 'Premium Property Portal', category: 'Real Estate Platform', img: '/image/s-project-1.png' },
    { title: 'Vahora Logistics', subtitle: 'Global Supply Chain Dashboard', category: 'Logistics Software', img: '/image/s-project-2.png' },
    { title: 'Legacy Financial', subtitle: 'Secure Banking App Redesign', category: 'Fintech', img: '/image/project-4.jpg' },
    { title: 'Nexus Enterprise', subtitle: 'Corporate Intranet Solution', category: 'B2B Software', img: '/image/s-project-4.jpg' },
  ];

  return (
    <section className="w-full bg-canvas-white relative z-20">
      <div className="max-w-[var(--spacing-container-max)] mx-auto px-margin-edge py-24 md:py-32">
        <h2 className="text-label-md text-accent-orange uppercase tracking-wider font-bold mb-4">Selected Work</h2>
        <h3 className="text-headline-md md:text-display-xl font-hanken font-bold text-surface-charcoal">
          Digital Products that <span className="text-accent-orange">Convert.</span>
        </h3>
      </div>
      
      <div className="relative w-full">
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className="sticky top-0 h-[100svh] w-full overflow-hidden flex items-center justify-center group"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                style={{ backgroundImage: `url(${project.img})` }}
              />
              
              {/* Overlays for readability */}
              <div className="absolute inset-0 bg-surface-charcoal opacity-40 transition-opacity duration-700 group-hover:opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-charcoal/90 via-surface-charcoal/20 to-transparent" />

              {/* Full-height Content Overlay */}
              <div className="absolute inset-0 w-full px-8 md:px-16 py-16 md:py-32 z-10 max-w-[var(--spacing-container-max)] mx-auto flex flex-col left-1/2 -translate-x-1/2">
                
                {/* Category (Top) */}
                <div className="flex-none">
                  <p className="text-headline-sm md:text-headline-md font-hanken font-bold text-canvas-white/90">
                    {project.category}
                  </p>
                </div>
                
                {/* Stretching Connecting Line */}
                <div className="flex-grow w-[2px] bg-canvas-white/40 my-8 ml-1" />
                
                {/* Title, Subtitle, and Button (Bottom) */}
                <div className="flex-none flex flex-col md:flex-row md:items-end justify-between w-full">
                  <div className="flex flex-col items-start">
                    <h4 className="text-display-lg md:text-[80px] font-hanken font-bold text-canvas-white leading-none tracking-tight">
                      {project.title}
                    </h4>
                    <p className="text-headline-sm md:text-headline-md font-hanken font-bold text-canvas-white/90 mt-2 md:mt-4">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Explore button */}
                  <div className="mt-8 md:mt-0 md:pb-2">
                    <button className="flex items-center space-x-2 text-canvas-white font-bold text-label-md uppercase tracking-wider hover:text-accent-orange transition-colors">
                      <span>Explore</span>
                      <span className="text-xl leading-none">↳</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
