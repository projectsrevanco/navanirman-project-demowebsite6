import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import constructionImg from '../assets/service-construction.jpg';

const services = [
  {
    id: '01',
    key: 'construction',
    title: 'Construction',
    description: 'From groundwork to final finishing, we manage the entire construction lifecycle. Our coordinated execution ensures structural integrity, timely delivery, and precise adherence to architectural plans.',
    capabilities: [
      'Site coordination',
      'Structural execution',
      'Civil work',
      'Electrical installation',
      'Plumbing systems',
      'Finishing & detailing'
    ],
    image: constructionImg,
  },
  {
    id: '02',
    key: 'architecture',
    title: 'Architecture',
    description: 'We translate your vision into structured reality. Our architectural planning balances aesthetic ambition with structural feasibility, ensuring spaces are both beautiful and built to last.',
    capabilities: [
      'Concept planning',
      'Floor plans & layouts',
      'Design development',
      'Technical documentation',
      '3D visualization',
      'Permit coordination'
    ],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1000&q=80',
  },
  {
    id: '03',
    key: 'interior-design',
    title: 'Interior Design',
    description: 'Thoughtful interiors that reflect the way you live or work. We combine spatial planning with refined material selection to create cohesive, highly functional environments.',
    capabilities: [
      'Space planning',
      'Furniture selection',
      'Lighting design',
      'Material curation',
      'Custom cabinetry',
      'Styling & staging'
    ],
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1000&q=80',
  },
  {
    id: '04',
    key: 'renovation',
    title: 'Renovation',
    description: 'Breathe new life into existing structures. We handle complex remodeling and modernization projects with the same rigor as new builds, managing structural updates and space conversions seamlessly.',
    capabilities: [
      'Full-home remodeling',
      'Space conversion',
      'Structural updates',
      'Heritage restoration',
      'System upgrades',
      'Modernization'
    ],
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1000&q=80',
  },
  {
    id: '05',
    key: 'materials',
    title: 'Building Materials',
    description: 'Access premium materials with complete cost transparency. Our dedicated sourcing team manages supplier coordination, quality assurance, and timely site deliveries to prevent delays.',
    capabilities: [
      'Material sourcing',
      'Quality assurance',
      'Delivery coordination',
      'Cost visibility',
      'Supplier management',
      'Inventory tracking'
    ],
    image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=1000&q=80',
  },
  {
    id: '06',
    key: 'maintenance',
    title: 'Maintenance',
    description: 'Our responsibility doesn\'t end at handover. We provide comprehensive post-project support to protect your investment and ensure your space continues to perform flawlessly.',
    capabilities: [
      'Annual Maintenance (AMC)',
      'Warranty tracking',
      'Scheduled inspections',
      'On-call repairs',
      'System servicing',
      'Post-project support'
    ],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1000&q=80',
  }
];

export function ServicesPage() {
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
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 bg-white overflow-hidden border-b border-navanirman-warmgrey/30">
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <motion.div 
            className="space-y-8 flex flex-col items-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <div className="h-px w-8 bg-navanirman-terracotta"></div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-navanirman-terracotta">
                Our Services
              </span>
              <div className="h-px w-8 bg-navanirman-terracotta"></div>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-display leading-[1.1] text-navanirman-charcoal">
              One partner for every stage of your project.
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-navanirman-slate leading-relaxed font-light max-w-2xl">
              From the initial architectural sketch to the final coat of paint and beyond. Our integrated approach removes the friction of managing multiple contractors, providing you with a single point of accountability.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <div className="bg-navanirman-concrete">
        {services.map((service, index) => {
          const isEven = index % 2 === 1;
          
          return (
            <section 
              id={service.key}
              key={service.id} 
              className={cn(
                "py-24 overflow-hidden relative",
                isEven ? "bg-navanirman-ivory" : "bg-white"
              )}
            >
              <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                  
                  {/* Text Content */}
                  <motion.div 
                    className={cn("space-y-10", isEven ? "lg:order-2" : "lg:order-1")}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                  >
                    <div className="space-y-6">
                      <motion.div variants={itemVariants} className="text-navanirman-terracotta/40 font-display text-5xl md:text-6xl font-medium tracking-tighter">
                        {service.id}
                      </motion.div>
                      
                      <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-display text-navanirman-charcoal">
                        {service.title}
                      </motion.h2>
                      
                      <motion.p variants={itemVariants} className="text-lg text-navanirman-slate font-light leading-relaxed">
                        {service.description}
                      </motion.p>
                    </div>

                    <motion.div variants={itemVariants} className="space-y-6 pt-4 border-t border-navanirman-warmgrey/30">
                      <h4 className="text-sm font-semibold tracking-wider uppercase text-navanirman-charcoal">
                        Key Capabilities
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                        {service.capabilities.map((cap, i) => (
                          <li key={i} className="flex items-center gap-3">
                            <Check className="w-4 h-4 text-navanirman-terracotta shrink-0" />
                            <span className="text-navanirman-slate text-sm">{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>

                    <motion.div variants={itemVariants} className="pt-4">
                      <Link to="/contact" className="inline-flex items-center text-navanirman-terracotta font-semibold uppercase tracking-wider text-sm group hover:text-navanirman-charcoal transition-colors">
                        Discuss this service 
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </motion.div>
                  </motion.div>

                  {/* Image */}
                  <motion.div 
                    className={cn("relative", isEven ? "lg:order-1" : "lg:order-2")}
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <div className="aspect-[4/5] md:aspect-[4/3] lg:aspect-[4/5] w-full rounded-sm overflow-hidden relative group">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 ring-1 ring-inset ring-black/10"></div>
                      
                      {/* Decorative Frame Line */}
                      <div className={cn(
                        "absolute top-4 bottom-4 w-px bg-white/30 hidden md:block",
                        isEven ? "right-4" : "left-4"
                      )}></div>
                      <div className={cn(
                        "absolute left-4 right-4 h-px bg-white/30 hidden md:block",
                        isEven ? "bottom-4" : "top-4"
                      )}></div>
                    </div>
                  </motion.div>

                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Closing CTA */}
      <section className="py-32 bg-navanirman-charcoal text-center text-white relative overflow-hidden">
        {/* Subtle grid lines overlay */}
        <div className="absolute inset-0 opacity-[0.03]" 
          style={{ backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)', backgroundSize: '4rem 4rem' }}>
        </div>

        <motion.div 
          className="container mx-auto px-6 max-w-2xl space-y-8 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="flex justify-center items-center gap-3">
            <div className="h-px w-8 bg-navanirman-terracotta"></div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-navanirman-terracotta">
              Next Steps
            </span>
            <div className="h-px w-8 bg-navanirman-terracotta"></div>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-display">
            Tell us about your project
          </motion.h2>
          
          <motion.div variants={itemVariants} className="pt-8">
            <Link to="/quote" className="btn bg-navanirman-terracotta hover:bg-[#c74c35] text-white border-transparent group">
              Get a Quote
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
