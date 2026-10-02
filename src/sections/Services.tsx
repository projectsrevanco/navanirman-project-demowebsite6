import { motion, type Variants } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import constructionImg from '../assets/service-construction.jpg';

const services = [
  {
    id: '01',
    title: 'Construction',
    description: 'Residential and commercial construction with coordinated execution from groundwork to completion.',
    image: constructionImg,
    className: 'lg:col-span-8',
    aspectClass: 'aspect-[4/3] lg:aspect-[21/9]',
  },
  {
    id: '02',
    title: 'Architecture',
    description: 'Planning, architectural concepts, layouts and design development.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
    className: 'lg:col-span-4',
    aspectClass: 'aspect-[4/3] lg:aspect-[4/5]',
  },
  {
    id: '03',
    title: 'Interior Design',
    description: 'Thoughtful interior spaces combining functionality, material selection and visual character.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80',
    className: 'lg:col-span-4',
    aspectClass: 'aspect-[4/3] lg:aspect-[4/5]',
  },
  {
    id: '04',
    title: 'Renovation',
    description: 'Modernization, remodeling and transformation of existing spaces.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80',
    className: 'lg:col-span-8',
    aspectClass: 'aspect-[4/3] lg:aspect-[21/9]',
  },
  {
    id: '05',
    title: 'Building Materials',
    description: 'Material sourcing and supplier coordination with cost visibility.',
    image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80',
    className: 'lg:col-span-6',
    aspectClass: 'aspect-[4/3] lg:aspect-video',
  },
  {
    id: '06',
    title: 'Maintenance',
    description: 'Post-project maintenance, warranty support and annual maintenance services.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80',
    className: 'lg:col-span-6',
    aspectClass: 'aspect-[4/3] lg:aspect-video',
  }
];

export function Services() {
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
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        
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
                What We Do
              </span>
            </motion.div>
            
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-display leading-[1.15] text-navanirman-charcoal">
              From foundation to finishing, every detail is handled with purpose.
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-lg text-navanirman-slate leading-relaxed font-light">
              We bring multiple project disciplines together, offering a seamless, end-to-end experience that eliminates the friction of managing separate contractors.
            </motion.p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden md:block"
          >
            <Link to="/services" className="btn btn-outline whitespace-nowrap">
              Explore All Services <ArrowUpRight className="ml-2 w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => (
            <motion.div 
              key={service.id} 
              variants={itemVariants}
              className={cn("group relative overflow-hidden bg-navanirman-concrete cursor-pointer", service.className)}
            >
              <div className={cn("w-full overflow-hidden", service.aspectClass)}>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-navanirman-black/90 via-navanirman-black/20 to-transparent flex flex-col justify-end p-6 md:p-8 transition-colors duration-500">
                <div className="absolute top-0 left-0 w-full h-1 bg-navanirman-terracotta scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100"></div>
                
                <div className="flex justify-between items-end gap-4 w-full">
                  <div className="space-y-2 max-w-lg">
                    <div className="text-navanirman-terracotta font-display text-sm tracking-wider">
                      {service.id} —
                    </div>
                    <h3 className="text-2xl md:text-3xl font-display text-white group-hover:text-navanirman-ivory transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-white/80 text-sm md:text-base font-light line-clamp-2 md:line-clamp-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm transition-transform duration-500 group-hover:rotate-45 group-hover:bg-navanirman-terracotta flex-shrink-0">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-12 md:hidden flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/services" className="btn btn-outline w-full">
            Explore All Services <ArrowUpRight className="ml-2 w-4 h-4" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
