import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Shield, Eye, Hammer, Paintbrush, Box, Wrench, Building2, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const philosophy = [
  {
    title: 'Build with Clarity',
    description: 'Clear scope, costs and milestones. We eliminate surprises through documented processes and transparent quotations.',
    icon: Eye
  },
  {
    title: 'Design with Purpose',
    description: 'Spaces should balance beauty, functionality and long-term value. We design for the way you actually live and work.',
    icon: Layers
  },
  {
    title: 'Deliver with Accountability',
    description: 'Consistent communication and responsible execution. We stand by our work long after the handover is complete.',
    icon: Shield
  }
];

const expertise = [
  { name: 'Construction', icon: Building2 },
  { name: 'Architecture', icon: Box },
  { name: 'Interior Design', icon: Paintbrush },
  { name: 'Renovation', icon: Hammer },
  { name: 'Materials', icon: Layers },
  { name: 'Maintenance', icon: Wrench }
];

const approach = [
  'Understand', 'Plan', 'Design', 'Build', 'Deliver', 'Support'
];

export function About() {
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
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 bg-navanirman-ivory overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="space-y-8"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants} className="flex items-center gap-3">
                <div className="h-px w-8 bg-navanirman-terracotta"></div>
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-navanirman-terracotta">
                  About Navanirman
                </span>
              </motion.div>
              
              <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-display leading-[1.1] text-navanirman-charcoal">
                We build with purpose, precision and accountability.
              </motion.h1>
              
              <motion.p variants={itemVariants} className="text-lg md:text-xl text-navanirman-slate leading-relaxed font-light max-w-lg">
                NavaNirman is a multidisciplinary construction and design company. We seamlessly integrate architecture, interior design, and construction execution to deliver exceptional spaces without the typical friction.
              </motion.p>
            </motion.div>

            <motion.div 
              className="relative aspect-[4/3] w-full rounded-sm overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80" 
                alt="Modern architectural structure" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-navanirman-charcoal/10 mix-blend-multiply"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div 
            className="text-center space-y-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-display text-navanirman-charcoal leading-relaxed max-w-4xl mx-auto">
              NavaNirman brings together construction, architecture, interiors, renovation and project coordination under one unified approach.
            </motion.h2>

            <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-5 gap-6 text-sm font-semibold tracking-wider uppercase text-navanirman-terracotta border-t border-b border-navanirman-warmgrey/30 py-8">
              <span>Craftsmanship</span>
              <span>Transparency</span>
              <span>Communication</span>
              <span>Quality</span>
              <span className="col-span-2 md:col-span-1">Accountability</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-navanirman-charcoal text-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div 
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-navanirman-terracotta"></div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-navanirman-terracotta">
                Our Philosophy
              </span>
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-display">
              Principles that guide every project.
            </motion.h2>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {philosophy.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} variants={itemVariants} className="space-y-6">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-navanirman-terracotta">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-display">{item.title}</h3>
                  <p className="text-white/60 font-light leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Expertise & Approach Section */}
      <section className="py-24 bg-navanirman-concrete overflow-hidden relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* Expertise */}
            <motion.div 
              className="space-y-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
            >
              <div className="space-y-4">
                <motion.h3 variants={itemVariants} className="text-3xl font-display text-navanirman-charcoal">Multidisciplinary Expertise</motion.h3>
                <motion.p variants={itemVariants} className="text-navanirman-slate font-light">We offer end-to-end capabilities, ensuring your vision isn't lost in translation between multiple disconnected contractors.</motion.p>
              </div>

              <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
                {expertise.map((exp, i) => {
                  const Icon = exp.icon;
                  return (
                    <div key={i} className="bg-white p-6 rounded-sm border border-navanirman-warmgrey/20 flex flex-col gap-4 group hover:border-navanirman-terracotta/50 transition-colors">
                      <Icon className="w-6 h-6 text-navanirman-terracotta/50 group-hover:text-navanirman-terracotta transition-colors" />
                      <span className="font-medium text-navanirman-charcoal">{exp.name}</span>
                    </div>
                  );
                })}
              </motion.div>
            </motion.div>

            {/* Approach */}
            <motion.div 
              className="space-y-12 lg:pl-12 lg:border-l border-navanirman-warmgrey/30"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
            >
              <div className="space-y-4">
                <motion.h3 variants={itemVariants} className="text-3xl font-display text-navanirman-charcoal">Our Approach</motion.h3>
                <motion.p variants={itemVariants} className="text-navanirman-slate font-light">A structured, predictable workflow that guarantees alignment from day one.</motion.p>
              </div>

              <motion.div variants={itemVariants} className="relative">
                {/* Vertical Line */}
                <div className="absolute left-[19px] top-4 bottom-4 w-px bg-navanirman-terracotta/30 z-0"></div>
                
                <div className="space-y-8 relative z-10">
                  {approach.map((step, i) => (
                    <div key={i} className="flex items-center gap-6 group">
                      <div className="w-10 h-10 rounded-full bg-white border border-navanirman-terracotta/30 flex items-center justify-center text-navanirman-terracotta font-mono text-sm font-bold group-hover:bg-navanirman-terracotta group-hover:text-white transition-colors">
                        0{i + 1}
                      </div>
                      <h4 className="text-xl font-display text-navanirman-charcoal group-hover:text-navanirman-terracotta transition-colors">
                        {step}
                      </h4>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-32 bg-navanirman-ivory text-center border-t border-navanirman-warmgrey/30">
        <motion.div 
          className="container mx-auto px-6 max-w-2xl space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-display text-navanirman-charcoal">
            Ready to discuss your project?
          </motion.h2>
          
          <motion.div variants={itemVariants} className="pt-4">
            <Link to="/contact" className="btn btn-primary group">
              Start a Conversation
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
