import { motion, type Variants } from 'framer-motion';
import { 
  CheckCircle2, 
  CircleDashed, 
  Circle,
  PackageCheck,
  ShoppingCart,
  Truck,
  Calendar,
  IndianRupee
} from 'lucide-react';
import { cn } from '../lib/utils';

const milestones = [
  { name: 'Foundation', status: 'completed' },
  { name: 'Structure', status: 'completed' },
  { name: 'Electrical & Plumbing', status: 'completed' },
  { name: 'Interior Finishing', status: 'in-progress' },
  { name: 'Final Inspection', status: 'upcoming' },
];

const materials = [
  { name: 'Flooring', status: 'Delivered', icon: PackageCheck, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
  { name: 'Kitchen fittings', status: 'Ordered', icon: ShoppingCart, color: 'text-blue-500', bg: 'bg-blue-500/10' },
  { name: 'Lighting', status: 'In Progress', icon: Truck, color: 'text-amber-500', bg: 'bg-amber-500/10' },
  { name: 'Paint', status: 'Scheduled', icon: Calendar, color: 'text-navanirman-slate', bg: 'bg-navanirman-slate/10' },
];

export function ProjectVisibility() {
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
    <section className="py-24 bg-navanirman-concrete overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div 
            className="max-w-2xl space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <div className="h-px w-8 bg-navanirman-terracotta"></div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-navanirman-terracotta">
                Project Visibility
              </span>
            </motion.div>
            
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-display leading-[1.15] text-navanirman-charcoal">
              Know where your project stands, at every stage.
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-lg text-navanirman-slate leading-relaxed font-light">
              Customers shouldn't have to repeatedly ask for updates. A structured progress view can show milestones, completion, materials and upcoming activities in one place.
            </motion.p>
          </motion.div>
        </div>

        {/* Dashboard Mockup */}
        <motion.div 
          className="rounded-xl bg-navanirman-charcoal shadow-2xl overflow-hidden border border-navanirman-black/10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Browser / App Header */}
          <div className="h-12 bg-navanirman-black flex items-center px-4 gap-2 border-b border-white/5">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
            </div>
            <div className="mx-auto bg-white/5 rounded-md px-4 py-1 text-xs text-white/40 font-mono tracking-wider flex items-center gap-2">
              navanirman-portal.com <span className="text-white/20">/</span> projects <span className="text-white/20">/</span> courtyard
            </div>
          </div>

          {/* Dashboard Body */}
          <div className="p-6 md:p-10 text-white">
            
            {/* Dashboard Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10 pb-6 border-b border-white/10">
              <div>
                <h3 className="text-3xl font-display mb-2">Courtyard Residence</h3>
                <p className="text-white/50 text-sm flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> Timeline: March 2026 — September 2026
                </p>
              </div>
              <div className="bg-navanirman-terracotta/20 text-navanirman-terracotta px-4 py-2 rounded-full text-sm font-medium border border-navanirman-terracotta/20">
                Active Project
              </div>
            </div>

            {/* Dashboard Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              
              {/* Left Column: Progress & Budget */}
              <div className="md:col-span-4 space-y-8">
                
                {/* Progress Ring */}
                <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                  <h4 className="text-white/60 text-xs font-semibold tracking-wider uppercase mb-6">Overall Progress</h4>
                  <div className="flex items-center gap-6">
                    <div className="relative w-24 h-24 flex items-center justify-center">
                      <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="45" className="stroke-white/10" strokeWidth="8" fill="none" />
                        <circle 
                          cx="50" cy="50" r="45" 
                          className="stroke-navanirman-terracotta transition-all duration-1000 ease-out" 
                          strokeWidth="8" 
                          fill="none" 
                          strokeDasharray="283" 
                          strokeDashoffset="79" 
                          strokeLinecap="round" 
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center flex-col">
                        <span className="text-2xl font-display font-medium">72<span className="text-sm">%</span></span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-white/50">Current Stage</p>
                      <p className="font-medium text-white">Interior Finishing</p>
                    </div>
                  </div>
                </div>

                {/* Budget Tracker */}
                <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                  <h4 className="text-white/60 text-xs font-semibold tracking-wider uppercase mb-6 flex justify-between">
                    <span>Budget Tracking</span>
                    <IndianRupee className="w-4 h-4 text-white/40" />
                  </h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-xs text-white/50 mb-1">Current Tracked</p>
                        <p className="text-xl font-medium">₹42,80,000</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-white/50 mb-1">Estimated</p>
                        <p className="text-sm">₹48,50,000</p>
                      </div>
                    </div>
                    {/* Budget Bar */}
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full w-[88%]"></div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Middle Column: Milestones */}
              <div className="md:col-span-4 bg-white/5 rounded-xl p-6 border border-white/5">
                <h4 className="text-white/60 text-xs font-semibold tracking-wider uppercase mb-6">Milestones</h4>
                <div className="space-y-6 relative">
                  {/* Connecting Line */}
                  <div className="absolute left-3 top-4 bottom-4 w-px bg-white/10 z-0"></div>
                  
                  {milestones.map((milestone, i) => (
                    <div key={i} className="flex items-center gap-4 relative z-10">
                      <div className={cn(
                        "w-6 h-6 rounded-full flex items-center justify-center border",
                        milestone.status === 'completed' 
                          ? 'bg-emerald-500/20 border-emerald-500 text-emerald-500' 
                          : milestone.status === 'in-progress'
                            ? 'bg-navanirman-terracotta/20 border-navanirman-terracotta text-navanirman-terracotta'
                            : 'bg-navanirman-black border-white/20 text-white/20'
                      )}>
                        {milestone.status === 'completed' && <CheckCircle2 className="w-4 h-4" />}
                        {milestone.status === 'in-progress' && <CircleDashed className="w-4 h-4 animate-[spin_3s_linear_infinite]" />}
                        {milestone.status === 'upcoming' && <Circle className="w-3 h-3" />}
                      </div>
                      <div className="flex-1">
                        <p className={cn(
                          "text-sm font-medium",
                          milestone.status === 'upcoming' ? 'text-white/40' : 'text-white'
                        )}>
                          {milestone.name}
                        </p>
                        <p className="text-xs text-white/40 capitalize">{milestone.status.replace('-', ' ')}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Materials */}
              <div className="md:col-span-4 bg-white/5 rounded-xl p-6 border border-white/5">
                <h4 className="text-white/60 text-xs font-semibold tracking-wider uppercase mb-6">Material Status</h4>
                <div className="space-y-4">
                  {materials.map((material, i) => {
                    const Icon = material.icon;
                    return (
                      <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5">
                        <div className="flex items-center gap-3">
                          <div className={cn("w-8 h-8 rounded-md flex items-center justify-center", material.bg, material.color)}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="text-sm">{material.name}</span>
                        </div>
                        <span className={cn(
                          "text-[10px] font-medium uppercase tracking-wider px-2 py-1 rounded-full",
                          material.bg, material.color
                        )}>
                          {material.status}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>
        </motion.div>

        <div className="mt-8 text-center">
        </div>

      </div>
    </section>
  );
}
