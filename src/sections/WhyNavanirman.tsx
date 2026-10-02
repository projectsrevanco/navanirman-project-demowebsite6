import { motion, type Variants } from 'framer-motion';
import { Check } from 'lucide-react';

const differentiators = [
  {
    id: '01',
    title: 'Verified Professionals',
    description: 'Work with experienced and verified project professionals.',
  },
  {
    id: '02',
    title: 'Written Agreements',
    description: 'Clear scope, responsibilities and expectations before work begins.',
  },
  {
    id: '03',
    title: 'Milestone Payments',
    description: 'Payments structured around agreed project milestones.',
  },
  {
    id: '04',
    title: 'Progress Visibility',
    description: 'Customers can understand the current stage of their project.',
  },
  {
    id: '05',
    title: 'Material Cost Tracking',
    description: 'Greater visibility into materials and associated costs.',
  },
  {
    id: '06',
    title: 'Warranty Support',
    description: 'Post-project support and warranty tracking.',
  },
];

export function WhyNavanirman() {
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
    <section className="py-24 bg-navanirman-ivory overflow-hidden relative border-t border-navanirman-warmgrey/50">
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'linear-gradient(to right, #2A2A2A 1px, transparent 1px), linear-gradient(to bottom, #2A2A2A 1px, transparent 1px)', backgroundSize: '4rem 4rem' }}>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Statement & Image */}
          <motion.div 
            className="space-y-12 lg:sticky lg:top-32 self-start"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="space-y-6 max-w-xl">
              <motion.div variants={itemVariants} className="flex items-center gap-3">
                <div className="h-px w-8 bg-navanirman-terracotta"></div>
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-navanirman-terracotta">
                  Why Navanirman
                </span>
              </motion.div>
              
              <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-display leading-[1.1] text-navanirman-charcoal">
                A more accountable way to build.
              </motion.h2>

              <motion.div variants={itemVariants} className="pt-4 pb-2">
                <p className="text-xl md:text-2xl font-display italic text-navanirman-slate border-l-4 border-navanirman-terracotta pl-6 leading-relaxed">
                  "Clear communication. Defined milestones. Better project visibility."
                </p>
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="relative aspect-[4/3] w-full max-w-md overflow-hidden rounded-sm shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" 
                alt="Architectural craftsmanship detail" 
                className="w-full h-full object-cover object-center grayscale-[20%]"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10"></div>
            </motion.div>
          </motion.div>

          {/* Right Column: Structured Benefit List */}
          <motion.div 
            className="pt-4 lg:pt-0"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="border-t border-navanirman-warmgrey/50">
              {differentiators.map((item) => (
                <motion.div 
                  key={item.id} 
                  variants={itemVariants}
                  className="group flex gap-6 md:gap-8 py-8 border-b border-navanirman-warmgrey/50 hover:bg-white/50 transition-colors duration-300 relative"
                >
                  {/* Hover Accent Line */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-navanirman-terracotta scale-y-0 origin-center transition-transform duration-300 ease-out group-hover:scale-y-100"></div>
                  
                  <div className="pl-4 md:pl-6 pt-1 text-navanirman-terracotta/40 font-display text-2xl md:text-3xl font-medium tracking-tighter group-hover:text-navanirman-terracotta transition-colors duration-300">
                    {item.id}
                  </div>
                  
                  <div className="flex-1 pr-4">
                    <h3 className="text-xl md:text-2xl font-display text-navanirman-charcoal mb-2 flex items-center gap-3">
                      {item.title}
                      <Check className="w-4 h-4 text-navanirman-terracotta opacity-0 group-hover:opacity-100 transition-opacity duration-300 -ml-1" />
                    </h3>
                    <p className="text-navanirman-slate font-light text-base md:text-lg">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
