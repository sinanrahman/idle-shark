import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-surface pt-24 pb-12 border-t border-outline-variant relative overflow-hidden">
      <div className="max-w-[var(--spacing-container-max)] mx-auto px-margin-edge">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <h3 className="text-headline-md font-hanken font-bold text-surface-charcoal tracking-tighter mb-6">
              Idle Shark<span className="text-accent-orange">.</span>
            </h3>
            <p className="text-neutral-muted text-body-md max-w-sm mb-8">
              A premium digital agency engineered for impact. We build digital experiences that drive growth and perform at the highest level.
            </p>
          </div>
          
          <div>
            <h4 className="text-surface-charcoal text-label-md uppercase mb-6">Navigation</h4>
            <ul className="space-y-4 text-neutral-muted text-body-md">
              <li><Link to="/" className="hover:text-accent-orange transition-colors">Home</Link></li>
              <li><Link to="/work" className="hover:text-accent-orange transition-colors">Work</Link></li>
              <li><Link to="/services" className="hover:text-accent-orange transition-colors">Services</Link></li>
              <li><Link to="/about" className="hover:text-accent-orange transition-colors">About</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-surface-charcoal text-label-md uppercase mb-6">Socials</h4>
            <ul className="space-y-4 text-neutral-muted text-body-md">
              <li><a href="#" className="hover:text-accent-orange transition-colors">Twitter / X</a></li>
              <li><a href="#" className="hover:text-accent-orange transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-accent-orange transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-accent-orange transition-colors">Dribbble</a></li>
            </ul>
          </div>
        </div>
        
        <div className="w-full h-px bg-gradient-to-r from-transparent via-outline-variant to-transparent mb-8"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-neutral-muted text-caption">
          <p>&copy; {new Date().getFullYear()} Idle Shark. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-surface-charcoal transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-surface-charcoal transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
