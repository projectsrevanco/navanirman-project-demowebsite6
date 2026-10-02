import { motion, type Variants } from 'framer-motion';
import { MessageSquare, Compass, FileText, Handshake, Hammer, Key } from 'lucide-react';
import { cn } from '../lib/utils';

const steps = [
  {
    id: '01',
    title: 'Consultation',
    description: 'Understand requirements, budget, property and goals.',
    icon: MessageSquare,
  },
  {
    id: '02',
    title: 'Design',
    description: 'Develop concepts, layouts, materials and project direction.',
    icon: Compass,
  },
  {
    id: '03',
    title: 'Quotation',
    description: 'Provide a clear digital quotation with scope and estimated costs.',
    icon: FileText,
  },
  {
    id: '04',
    title: 'Agreement',
    description: 'Confirm scope, responsibilities, timelines and payment milestones.',
    icon: Handshake,
  },
  {
    id: '05',
    title: 'Build',
    description: 'Execute the project while monitoring progress, materials and milestones.',
    icon: Hammer,
  },
  {
    id: '06',
    title: 'Handover',
    description: 'Complete final inspection, handover documentation and warranty support.',
    icon: Key,
  },
];

export function HowItWorks() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
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

  const lineVariants: Variants = {
    hidden: { height: 0 },
    visible: {
      height: '100%',
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  };

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* Header */}
        <motion.div 
          className="text-center space-y-6 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-navanirman-terracotta"></div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-navanirman-terracotta">
              A Clearer Way To Build
            </span>
            <div className="h-px w-8 bg-navanirman-terracotta"></div>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-display leading-[1.15] text-navanirman-charcoal max-w-3xl mx-auto">
            From first conversation to final handover, every milestone has a purpose.
          </motion.h2>

          <motion.p variants={itemVariants} className="text-lg font-medium text-navanirman-slate uppercase tracking-wider">
            Clear scope. Clear milestones. Clear communication.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <motion.div 
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Central Line (Desktop) / Left Line (Mobile) */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-navanirman-warmgrey/50 md:-translate-x-1/2 overflow-hidden">
            <motion.div 
              className="w-full bg-navanirman-terracotta"
              variants={lineVariants}
            ></motion.div>
          </div>

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 !== 0; // 0-indexed, so index 1 is even step (Step 2)
              
              return (
                <motion.div 
                  key={step.id} 
                  variants={itemVariants}
                  className="relative flex items-start md:items-center md:h-40"
                >
                  {/* Mobile structure is a single column. Desktop structure is alternating columns. */}
                  
                  {/* Left Column (Desktop) */}
                  <div className={cn(
                    "hidden md:block w-1/2 pr-12 text-right",
                    isEven ? "invisible" : ""
                  )}>
                    <div className="space-y-2">
                      <div className="text-navanirman-warmgrey font-display text-5xl font-bold tracking-tighter opacity-30">
                        {step.id}
                      </div>
                      <h3 className="text-2xl font-display text-navanirman-charcoal">{step.title}</h3>
                      <p className="text-navanirman-slate font-light leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Node */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 bg-white ring-8 ring-white z-10 p-4 rounded-full border border-navanirman-terracotta/30 text-navanirman-terracotta flex-shrink-0">
                    <Icon className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
                  </div>

                  {/* Mobile Content & Right Column (Desktop) */}
                  <div className={cn(
                    "pl-20 md:pl-12 md:w-1/2 w-full",
                    !isEven ? "md:invisible" : ""
                  )}>
                    <div className="space-y-2">
                      <div className="text-navanirman-warmgrey font-display text-4xl md:text-5xl font-bold tracking-tighter opacity-30 block md:hidden mb-2">
                        {step.id}
                      </div>
                      <div className="text-navanirman-warmgrey font-display text-5xl font-bold tracking-tighter opacity-30 hidden md:block">
                        {step.id}
                      </div>
                      <h3 className="text-2xl font-display text-navanirman-charcoal">{step.title}</h3>
                      <p className="text-navanirman-slate font-light leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
