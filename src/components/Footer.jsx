import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-gray-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <h3 className="text-4xl font-heading font-bold text-gray-900 tracking-tighter mb-6">
              Idle Shark<span className="text-accent">.</span>
            </h3>
            <p className="text-gray-600 max-w-sm mb-8">
              A premium digital agency engineered for impact. We build digital experiences that drive growth and perform at the highest level.
            </p>
          </div>
          
          <div>
            <h4 className="text-gray-900 font-medium mb-6">Navigation</h4>
            <ul className="space-y-4 text-gray-600">
              <li><Link to="/" className="hover:text-accent-hover transition-colors">Home</Link></li>
              <li><Link to="/work" className="hover:text-accent-hover transition-colors">Work</Link></li>
              <li><Link to="/services" className="hover:text-accent-hover transition-colors">Services</Link></li>
              <li><Link to="/about" className="hover:text-accent-hover transition-colors">About</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-gray-900 font-medium mb-6">Socials</h4>
            <ul className="space-y-4 text-gray-600">
              <li><a href="#" className="hover:text-accent-hover transition-colors">Twitter / X</a></li>
              <li><a href="#" className="hover:text-accent-hover transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-accent-hover transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-accent-hover transition-colors">Dribbble</a></li>
            </ul>
          </div>
        </div>
        
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-8"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Idle Shark. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-gray-900 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gray-900 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
