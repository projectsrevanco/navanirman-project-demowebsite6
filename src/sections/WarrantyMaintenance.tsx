import { motion, type Variants } from 'framer-motion';
import { ArrowRight, ShieldCheck, Zap, Droplets, Paintbrush, Calendar, Wrench, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const warrantyItems = [
  { name: 'Electrical Systems', icon: Zap, until: 'Dec 2027', status: 'Active' },
  { name: 'Plumbing & Pipes', icon: Droplets, until: 'Dec 2027', status: 'Active' },
  { name: 'Custom Woodwork', icon: Wrench, until: 'Jun 2027', status: 'Active' },
  { name: 'Painting & Finishes', icon: Paintbrush, until: 'Mar 2027', status: 'Active' },
];

export function WarrantyMaintenance() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section className="py-24 bg-navanirman-concrete overflow-hidden relative border-t border-white/50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* Left: UI Mockup */}
          <motion.div 
            className="lg:col-span-6 relative w-full max-w-md mx-auto lg:mx-0 order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Background Decorative Element */}
            <div className="absolute inset-0 bg-navanirman-terracotta/5 transform rotate-3 rounded-2xl"></div>
            
            <motion.div 
              variants={itemVariants}
              className="relative bg-white rounded-2xl shadow-xl border border-navanirman-warmgrey/20 p-6 md:p-8 z-10"
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-8 pb-6 border-b border-navanirman-concrete">
                <div>
                  <h3 className="font-display text-2xl text-navanirman-charcoal mb-1">Courtyard Residence</h3>
                  <p className="text-sm text-navanirman-slate flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" /> 
                    Warranty Tracking
                  </p>
                </div>
                <div className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-emerald-100 flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                  AMC Active
                </div>
              </div>

              {/* Warranty Items */}
              <div className="space-y-4 mb-8">
                {warrantyItems.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex justify-between items-center p-3 rounded-xl hover:bg-navanirman-concrete/50 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-navanirman-ivory flex items-center justify-center text-navanirman-terracotta">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-medium text-navanirman-charcoal text-sm mb-0.5">{item.name}</p>
                          <p className="text-xs text-navanirman-slate">Until: <span className="font-mono">{item.until}</span></p>
                        </div>
                      </div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-emerald-500">
                        {item.status}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Next Maintenance Callout */}
              <div className="bg-navanirman-charcoal text-white p-5 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-white/60 uppercase tracking-wider mb-1">Next Maintenance</p>
                    <p className="font-display text-lg">15 October</p>
                  </div>
                </div>
                <button className="w-10 h-10 rounded-full bg-white text-navanirman-charcoal flex items-center justify-center hover:bg-navanirman-terracotta hover:text-white transition-colors">
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>

            </motion.div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div 
            className="lg:col-span-6 space-y-8 order-1 lg:order-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="space-y-6">
              <motion.div variants={itemVariants} className="flex items-center gap-3">
                <div className="h-px w-8 bg-navanirman-terracotta"></div>
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-navanirman-terracotta">
                  After The Handover
                </span>
              </motion.div>
              
              <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-display leading-[1.15] text-navanirman-charcoal">
                Because completing the project is only part of the relationship.
              </motion.h2>
              
              <motion.p variants={itemVariants} className="text-lg text-navanirman-slate leading-relaxed font-light">
                We believe our responsibility doesn't end when the keys are handed over. We provide comprehensive post-project support to ensure your space continues to function beautifully.
              </motion.p>
              
              <motion.ul variants={itemVariants} className="space-y-4 pt-2">
                {[
                  'Transparent warranty tracking for all major installations',
                  'Frictionless maintenance request portal',
                  'Comprehensive Annual Maintenance Contracts (AMC)',
                  'Dedicated post-project support team'
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-navanirman-terracotta shrink-0 mt-0.5" />
                    <span className="text-navanirman-charcoal font-medium">{text}</span>
                  </li>
                ))}
              </motion.ul>
            </div>

            <motion.div variants={itemVariants} className="pt-4">
              <Link to="/services" className="btn btn-outline group">
                Explore Maintenance Plans 
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
