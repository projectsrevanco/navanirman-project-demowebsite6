import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navanirman-black text-white pt-20 pb-8 relative overflow-hidden">
      {/* Decorative architectural lines */}
      <div className="absolute top-0 left-6 w-px h-full bg-white/5 hidden md:block"></div>
      <div className="absolute top-0 right-6 w-px h-full bg-white/5 hidden md:block"></div>
      <div className="absolute top-0 left-1/4 w-px h-full bg-white/5 hidden lg:block"></div>
      <div className="absolute top-0 left-2/4 w-px h-full bg-white/5 hidden lg:block"></div>
      <div className="absolute top-0 left-3/4 w-px h-full bg-white/5 hidden lg:block"></div>
      
      <div className="absolute top-0 left-0 w-full h-px bg-white/10"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="inline-block">
              <h2 className="text-2xl font-display font-medium tracking-wide">
                NavaNirman Projects
              </h2>
            </Link>
            <p className="text-sm text-white/50 uppercase tracking-widest font-semibold">
              Construction &bull; Architecture &bull; Interiors &bull; Renovation
            </p>
            <p className="text-white/60 font-light leading-relaxed max-w-sm">
              We bring multiple project disciplines together to deliver spaces that are beautifully designed and impeccably built.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-xs uppercase tracking-widest text-white/40 font-semibold mb-6">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Projects', 'How It Works', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="text-white/70 hover:text-navanirman-terracotta transition-colors font-light text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-widest text-white/40 font-semibold mb-6">Services</h4>
            <ul className="space-y-4">
              {['Construction', 'Architecture', 'Interior Design', 'Renovation', 'Materials', 'Maintenance'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/services#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="text-white/70 hover:text-navanirman-terracotta transition-colors font-light text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-widest text-white/40 font-semibold mb-6">Contact</h4>
            <div className="space-y-4 text-sm font-light text-white/70">
              <p>
                Studio 4A, Design District<br />
                Hyderabad, TS 500001
              </p>
              <p>
                <a href="mailto:hello@navanirman.com" className="hover:text-navanirman-terracotta transition-colors">
                  hello@navanirman.com
                </a>
              </p>
              <p>
                <a href="tel:+919876543210" className="hover:text-navanirman-terracotta transition-colors">
                  +91 98765 43210
                </a>
              </p>
            </div>
            
            <div className="mt-8 flex gap-4">
              {['Instagram', 'LinkedIn', 'Twitter'].map((social) => (
                <a 
                  key={social}
                  href={`https://${social.toLowerCase()}.com`} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-wider text-white/50 hover:text-white transition-colors flex items-center gap-1 group"
                >
                  {social} <ArrowUpRight className="w-3 h-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-white/40">
          <p>&copy; {currentYear} NavaNirman Projects. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
