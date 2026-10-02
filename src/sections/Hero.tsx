import { motion, type Variants } from 'framer-motion';
import heroBg from '../assets/hero-bg.jpg';

export function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
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
    <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with slow scale animation */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: 'easeOut' }}
      >
        <img 
          src={heroBg} 
          alt="Modern luxury home exterior" 
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-navanirman-black/40 bg-gradient-to-t from-navanirman-black/80 via-navanirman-black/40 to-transparent"></div>
      </motion.div>

      {/* Content */}
      <div className="container relative z-10 px-6 mx-auto mt-32 md:mt-20">
        <motion.div 
          className="max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow / Trust strip */}
          <motion.div variants={itemVariants} className="mb-6 flex items-center gap-3">
            <div className="h-px w-12 bg-navanirman-terracotta"></div>
            <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-white/90">
              Construction &bull; Architecture &bull; Interiors &bull; Renovation
            </p>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-display text-white leading-[1.1] mb-6 drop-shadow-sm"
          >
            Building Spaces.<br className="hidden md:block" /> Creating Legacies.
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-white/90 max-w-2xl mb-10 leading-relaxed font-light"
          >
            From concept and design to construction and handover, we bring every part of your project together with clarity, craftsmanship and confidence.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 sm:items-center"
          >
            <button className="btn bg-navanirman-terracotta text-white hover:bg-[#A34B36] border border-navanirman-terracotta hover:border-[#A34B36]">
              Start Your Project
            </button>
            <button className="btn bg-transparent text-white border border-white hover:bg-white hover:text-navanirman-charcoal">
              Explore Our Work
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
