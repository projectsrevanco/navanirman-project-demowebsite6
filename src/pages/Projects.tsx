import { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import { projects } from '../data/projects';

const filters = [
  'All',
  'Residential',
  'Commercial',
  'Interiors',
  'Renovation',
  'Architecture'
];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'All') return true;
    return project.category === activeFilter || (activeFilter === 'Interiors' && project.category === 'Interior');
  });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3 } }
  };

  return (
    <div className="w-full bg-navanirman-concrete min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 border-b border-navanirman-warmgrey/30 bg-white overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <motion.div 
            className="space-y-6"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <div className="h-px w-8 bg-navanirman-terracotta"></div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-navanirman-terracotta">
                Our Projects
              </span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-display leading-[1.1] text-navanirman-charcoal max-w-4xl">
              A portfolio of spaces, places and possibilities.
            </motion.h1>
            
            {/* Filters */}
            <motion.div variants={itemVariants} className="pt-12 flex flex-wrap gap-2 md:gap-4">
              {filters.map(filter => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={cn(
                    "px-5 py-2 rounded-full text-sm transition-all duration-300",
                    activeFilter === filter 
                      ? "bg-navanirman-charcoal text-white" 
                      : "bg-navanirman-ivory text-navanirman-slate hover:bg-navanirman-warmgrey/20 hover:text-navanirman-charcoal"
                  )}
                >
                  {filter}
                </button>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 lg:gap-12"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div 
                  layout
                  key={project.slug} 
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className={cn("group relative", project.gridClassName)}
                >
                  <Link to={`/projects/${project.slug}`} className="block w-full h-full">
                    <div className={cn("relative overflow-hidden w-full bg-navanirman-warmgrey mb-6", project.aspectClass)}>
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
                      <div className="flex flex-wrap items-center gap-3 text-xs tracking-wider uppercase text-navanirman-slate font-medium">
                        <span className="text-navanirman-terracotta">{project.category}</span>
                        <span>&bull;</span>
                        <span>{project.location}</span>
                        <span>&bull;</span>
                        <span>{project.year}</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-display text-navanirman-charcoal group-hover:text-navanirman-terracotta transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-navanirman-slate font-light line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-24 text-navanirman-slate">
              No projects found for this category.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
