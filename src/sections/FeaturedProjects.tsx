import { motion, type Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const projects = [
  {
    id: 'p1',
    title: 'The Courtyard Residence',
    category: 'Residential',
    location: 'Hyderabad',
    year: '2023',
    description: 'A seamless blend of indoor and outdoor living, featuring a central open-sky courtyard.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
    className: 'md:col-span-8',
    aspectClass: 'aspect-[4/3] md:aspect-[16/9]',
  },
  {
    id: 'p2',
    title: 'Amaravati Heights',
    category: 'Commercial',
    location: 'Amaravati',
    year: '2024',
    description: 'Modern workspace environments prioritizing natural light and sustainable materials.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    className: 'md:col-span-4',
    aspectClass: 'aspect-[4/3] md:aspect-[3/4]',
  },
  {
    id: 'p3',
    title: 'Terra House',
    category: 'Architecture',
    location: 'Bangalore',
    year: '2022',
    description: 'Minimalist structural design emphasizing raw concrete and earthy tones.',
    image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&q=80',
    className: 'md:col-span-4',
    aspectClass: 'aspect-[4/3] md:aspect-[3/4]',
  },
  {
    id: 'p4',
    title: 'The Atelier Office',
    category: 'Interior',
    location: 'Mumbai',
    year: '2023',
    description: 'Creative studio space designed to foster collaboration and focus.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
    className: 'md:col-span-8',
    aspectClass: 'aspect-[4/3] md:aspect-[16/9]',
  },
  {
    id: 'p5',
    title: 'Coastal Villa',
    category: 'Residential',
    location: 'Vizag',
    year: '2024',
    description: 'Expansive sea-facing property built to withstand coastal elements.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1000&q=80',
    className: 'md:col-span-6',
    aspectClass: 'aspect-[4/3] md:aspect-video',
  },
  {
    id: 'p6',
    title: 'Urban Renewal Residence',
    category: 'Renovation',
    location: 'Chennai',
    year: '2021',
    description: 'Complete structural modernization of a heritage urban property.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1000&q=80',
    className: 'md:col-span-6',
    aspectClass: 'aspect-[4/3] md:aspect-video',
  },
];

export function FeaturedProjects() {
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
    <section className="py-24 bg-navanirman-ivory overflow-hidden">
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
                Selected Work
              </span>
            </motion.div>
            
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-display leading-[1.15] text-navanirman-charcoal">
              Spaces designed to live well and built to last.
            </motion.h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden md:block"
          >
            <Link to="/projects" className="btn btn-outline whitespace-nowrap">
              View All Projects <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Portfolio Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id} 
              variants={itemVariants}
              className={cn("group relative", project.className)}
            >
              <Link to={`/projects/${project.id}`} className="block w-full h-full">
                <div className={cn("relative overflow-hidden w-full bg-navanirman-concrete mb-6", project.aspectClass)}>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-navanirman-charcoal/0 group-hover:bg-navanirman-charcoal/20 transition-colors duration-500 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-out">
                      <ArrowRight className="w-6 h-6 text-navanirman-charcoal" />
                    </div>
                  </div>
                </div>
                
                {/* Project Info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-xs tracking-wider uppercase text-navanirman-slate font-medium">
                    <span className="text-navanirman-terracotta">{project.category}</span>
                    <span>&bull;</span>
                    <span>{project.location}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="text-2xl font-display text-navanirman-charcoal group-hover:text-navanirman-terracotta transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-navanirman-slate font-light line-clamp-2 md:max-w-md">
                    {project.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile CTA */}
        <motion.div 
          className="mt-16 md:hidden flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/projects" className="btn btn-outline w-full">
            View All Projects <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
