import { motion, type Variants } from 'framer-motion';
import { FileText, Handshake, CheckCircle2, Ruler, CircleDollarSign, ShieldCheck } from 'lucide-react';
import trustImg from '../assets/trust-intro.jpg';

const trustPoints = [
  {
    title: 'Transparent quotations',
    icon: CircleDollarSign,
  },
  {
    title: 'Written project agreements',
    icon: FileText,
  },
  {
    title: 'Milestone-based payments',
    icon: Handshake,
  },
  {
    title: 'Verified professionals',
    icon: CheckCircle2,
  },
  {
    title: 'Material cost visibility',
    icon: Ruler,
  },
  {
    title: 'Warranty support',
    icon: ShieldCheck,
  },
];

const stats = [
  { label: 'Projects Delivered', value: '120+' },
  { label: 'Years of Expertise', value: '15' },
  { label: 'Design & Build', value: '100%' },
  { label: 'Client Satisfaction', value: '4.9/5' },
];

export function TrustIntro() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-24 bg-navanirman-ivory overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Text & Points Content (Left/Top) */}
          <motion.div 
            className="lg:col-span-7 space-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="space-y-6 max-w-2xl">
              <motion.div variants={itemVariants} className="flex items-center gap-3">
                <div className="h-px w-8 bg-navanirman-terracotta"></div>
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-navanirman-terracotta">
                  Built on Trust
                </span>
              </motion.div>
              
              <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-display leading-[1.15] text-navanirman-charcoal">
                Every project deserves clarity from the first conversation to the final handover.
              </motion.h2>
              
              <motion.p variants={itemVariants} className="text-lg text-navanirman-slate leading-relaxed font-light">
                We combine construction, architecture, interiors, and project coordination under one professional approach. No hidden fees, no fragmented communication—just a dedicated team working seamlessly to realize your vision.
              </motion.p>
            </div>

            {/* Trust Points - Editorial Grid */}
            <motion.div variants={itemVariants} className="pt-8 border-t border-navanirman-warmgrey/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {trustPoints.map((point, index) => {
                  const Icon = point.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <span className="text-navanirman-warmgrey font-display text-sm mt-1">
                        0{index + 1}
                      </span>
                      <div>
                        <h4 className="text-sm font-medium text-navanirman-charcoal flex items-center gap-2">
                          <Icon className="w-4 h-4 text-navanirman-terracotta" />
                          {point.title}
                        </h4>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Image & Stats (Right/Bottom) */}
          <motion.div 
            className="lg:col-span-5 relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Image */}
            <motion.div variants={itemVariants} className="relative aspect-[3/4] overflow-hidden rounded-sm shadow-xl">
              <img 
                src={trustImg} 
                alt="Modern interior construction detail" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-navanirman-black/10"></div>
            </motion.div>

            {/* Stats Overlay/Adjacent block */}
            <motion.div 
              variants={itemVariants} 
              className="static lg:absolute lg:-left-12 lg:-bottom-12 mt-8 lg:mt-0 bg-white p-8 shadow-lg border border-navanirman-warmgrey/20 max-w-sm"
            >
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, i) => (
                  <div key={i} className="space-y-1">
                    <div className="text-2xl font-display text-navanirman-charcoal">
                      {stat.value}
                    </div>
                    <div className="text-[10px] uppercase tracking-wider text-navanirman-slate">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-navanirman-warmgrey/30 text-[10px] text-navanirman-warmgrey italic">
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
