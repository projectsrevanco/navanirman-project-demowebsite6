import { motion, type Variants } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function FinalCTA() {
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
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600607686527-6fb886090705?w=1600&q=80" 
          alt="Modern architecture minimal detail" 
          className="w-full h-full object-cover object-center grayscale-[30%]"
        />
        <div className="absolute inset-0 bg-navanirman-black/80 backdrop-blur-[2px]"></div>
        {/* Subtle grid lines overlay */}
        <div className="absolute inset-0 opacity-10" 
          style={{ backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)', backgroundSize: '4rem 4rem' }}>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        <motion.div 
          className="max-w-3xl space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="flex justify-center items-center gap-3">
            <div className="h-px w-8 bg-navanirman-terracotta"></div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-navanirman-terracotta">
              Let's build something meaningful
            </span>
            <div className="h-px w-8 bg-navanirman-terracotta"></div>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-display leading-[1.15] text-white">
            Have a project in mind? Let's bring it to life.
          </motion.h2>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-white/70 font-light leading-relaxed max-w-2xl mx-auto">
            Whether you're planning a new home, renovating an existing space, designing an interior or developing a commercial property, start with a conversation.
          </motion.p>
          
          <motion.div variants={itemVariants} className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn bg-navanirman-terracotta hover:bg-[#c74c35] text-white border-transparent w-full sm:w-auto text-center group">
              Start Your Project 
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/quote" className="btn bg-transparent border-white/30 text-white hover:bg-white hover:text-navanirman-charcoal w-full sm:w-auto text-center group">
              Get a Quote 
              <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
