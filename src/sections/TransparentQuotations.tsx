import { motion, type Variants } from 'framer-motion';
import { ArrowRight, FileSignature, IndianRupee, Layers } from 'lucide-react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

const quoteItems = [
  { name: 'Civil Work', value: '18,50,000' },
  { name: 'Electrical', value: '4,20,000' },
  { name: 'Plumbing', value: '3,80,000' },
  { name: 'Flooring', value: '5,40,000' },
  { name: 'Interior Finishing', value: '7,25,000' },
  { name: 'Other', value: '2,60,000' },
];

const materials = [
  { name: 'Cement', status: 'Delivered', cost: '1,80,000', statusColor: 'bg-emerald-100 text-emerald-700' },
  { name: 'Flooring', status: 'Ordered', cost: '4,60,000', statusColor: 'bg-blue-100 text-blue-700' },
  { name: 'Woodwork', status: 'In Progress', cost: '3,20,000', statusColor: 'bg-amber-100 text-amber-700' },
  { name: 'Lighting', status: 'Scheduled', cost: '1,15,000', statusColor: 'bg-navanirman-concrete text-navanirman-slate' },
];

export function TransparentQuotations() {
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
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Left: Text Content */}
          <motion.div 
            className="lg:col-span-5 space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="space-y-6">
              <motion.div variants={itemVariants} className="flex items-center gap-3">
                <div className="h-px w-8 bg-navanirman-terracotta"></div>
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-navanirman-terracotta">
                  Transparency Built In
                </span>
              </motion.div>
              
              <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-display leading-[1.15] text-navanirman-charcoal">
                Know what you're paying for before the work begins.
              </motion.h2>
              
              <motion.p variants={itemVariants} className="text-lg text-navanirman-slate leading-relaxed font-light">
                Present project scope, estimated costs, materials and milestones in a clear format so customers can understand where their budget is going. No hidden fees, no budget overruns without documented approvals.
              </motion.p>
            </div>

            <motion.div variants={itemVariants} className="pt-4">
              <Link to="/contact" className="btn btn-primary group">
                Request a Detailed Quote 
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: Documents UI Mockup */}
          <motion.div 
            className="lg:col-span-7 relative h-auto min-h-[500px]"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Main Quotation Document */}
            <motion.div 
              variants={itemVariants}
              className="absolute top-0 right-0 lg:right-8 w-full max-w-lg bg-navanirman-ivory rounded-xl shadow-2xl border border-navanirman-warmgrey/30 overflow-hidden z-10"
            >
              {/* Doc Header */}
              <div className="bg-white px-8 py-6 border-b border-navanirman-warmgrey/30 flex justify-between items-start">
                <div>
                  <h3 className="font-display text-xl text-navanirman-charcoal mb-1">Residential Construction</h3>
                  <p className="text-sm text-navanirman-slate font-medium">Courtyard Residence</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-navanirman-concrete flex items-center justify-center text-navanirman-terracotta">
                  <FileSignature className="w-5 h-5" />
                </div>
              </div>

              {/* Doc Body */}
              <div className="p-8 space-y-6">
                <div className="flex justify-between text-xs font-semibold uppercase tracking-wider text-navanirman-slate border-b border-navanirman-warmgrey/50 pb-2">
                  <span>Category</span>
                  <span>Estimate</span>
                </div>
                
                <div className="space-y-4">
                  {quoteItems.map((item, i) => (
                    <div key={i} className="flex justify-between items-center group">
                      <span className="text-sm font-medium text-navanirman-charcoal group-hover:text-navanirman-terracotta transition-colors">{item.name}</span>
                      <span className="text-sm font-mono text-navanirman-slate flex items-center">
                        <IndianRupee className="w-3 h-3 mr-0.5 opacity-50" />
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 mt-6 border-t-2 border-navanirman-charcoal flex justify-between items-center">
                  <span className="font-display text-lg text-navanirman-charcoal font-semibold">Estimated Total</span>
                  <span className="font-display text-xl text-navanirman-terracotta font-bold flex items-center">
                    <IndianRupee className="w-4 h-4 mr-0.5" />
                    41,75,000
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Floating Material Tracking Card */}
            <motion.div 
              variants={itemVariants}
              className="absolute -bottom-12 md:bottom-8 left-0 md:-left-8 w-[95%] max-w-sm bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-navanirman-warmgrey/20 overflow-hidden z-20"
            >
              <div className="px-6 py-4 border-b border-navanirman-warmgrey/20 bg-navanirman-concrete/30 flex items-center gap-3">
                <Layers className="w-4 h-4 text-navanirman-terracotta" />
                <h4 className="font-display text-sm font-semibold tracking-wide text-navanirman-charcoal">Material Cost Tracking</h4>
              </div>
              <div className="p-2">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr>
                      <th className="px-4 py-3 text-[10px] font-semibold uppercase tracking-wider text-navanirman-slate border-b border-navanirman-warmgrey/20">Material</th>
                      <th className="px-4 py-3 text-[10px] font-semibold uppercase tracking-wider text-navanirman-slate border-b border-navanirman-warmgrey/20">Status</th>
                      <th className="px-4 py-3 text-[10px] font-semibold uppercase tracking-wider text-navanirman-slate border-b border-navanirman-warmgrey/20 text-right">Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    {materials.map((mat, i) => (
                      <tr key={i} className="group hover:bg-navanirman-concrete/20 transition-colors">
                        <td className="px-4 py-3 text-xs font-medium text-navanirman-charcoal border-b border-navanirman-warmgrey/10">{mat.name}</td>
                        <td className="px-4 py-3 border-b border-navanirman-warmgrey/10">
                          <span className={cn("text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full inline-block", mat.statusColor)}>
                            {mat.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-xs font-mono text-navanirman-slate text-right border-b border-navanirman-warmgrey/10">
                          <span className="flex items-center justify-end">
                            <IndianRupee className="w-2.5 h-2.5 mr-0.5 opacity-50" />
                            {mat.cost}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
