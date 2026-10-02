import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'How It Works', path: '/how-it-works' },
  { name: 'Contact', path: '/contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navbarBg = isScrolled 
    ? 'bg-navanirman-ivory shadow-sm border-b border-navanirman-warmgrey/50' 
    : isHomePage 
      ? 'bg-transparent text-white' 
      : 'bg-navanirman-ivory border-b border-navanirman-warmgrey/50';

  const textColor = isScrolled || !isHomePage ? 'text-navanirman-charcoal' : 'text-white';
  const logoColor = isScrolled || !isHomePage ? 'text-navanirman-charcoal' : 'text-white';

  return (
    <>
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
          navbarBg
        )}
      >
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex flex-col z-50 relative group">
            <span className={cn("font-display text-2xl font-semibold tracking-tight uppercase leading-none transition-colors", logoColor)}>
              NavaNirman
            </span>
            <span className={cn("font-sans text-[10px] tracking-[0.2em] uppercase transition-colors", isScrolled || !isHomePage ? "text-navanirman-slate" : "text-white/80")}>
              Projects
            </span>
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink 
                    to={link.path}
                    className={({ isActive }) => cn(
                      "text-sm font-medium transition-colors hover:text-navanirman-terracotta relative",
                      textColor,
                      isActive ? "text-navanirman-terracotta" : ""
                    )}
                  >
                    {({ isActive }) => (
                      <>
                        {link.name}
                        {isActive && (
                          <motion.div 
                            layoutId="activeIndicator"
                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-navanirman-terracotta"
                            initial={false}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
            <Link to="/quote" className={cn(
              "btn px-6 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors inline-block",
              isScrolled || !isHomePage 
                ? "bg-navanirman-terracotta text-white hover:bg-[#A34B36]" 
                : "bg-white text-navanirman-charcoal hover:bg-navanirman-ivory"
            )}>
              Get a Quote
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden z-50 relative p-2 -mr-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X className={cn("w-6 h-6", mobileMenuOpen ? "text-navanirman-charcoal" : textColor)} />
            ) : (
              <Menu className={cn("w-6 h-6", textColor)} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-navanirman-ivory pt-24 px-6 pb-6 flex flex-col lg:hidden"
          >
            <ul className="flex flex-col gap-6 text-xl font-display mt-8">
              {navLinks.map((link) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <NavLink 
                    to={link.path}
                    className={({ isActive }) => cn(
                      "block transition-colors",
                      isActive ? "text-navanirman-terracotta" : "text-navanirman-charcoal hover:text-navanirman-terracotta"
                    )}
                  >
                    {link.name}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
            <div className="mt-auto pt-8 border-t border-navanirman-warmgrey/50">
              <Link to="/quote" className="btn btn-primary w-full text-center block">
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
