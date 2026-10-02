import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion';
import { ArrowLeft, ArrowRight, Expand } from 'lucide-react';
import { projects } from '../data/projects';
import { cn } from '../lib/utils';

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  
  const currentIndex = projects.findIndex(p => p.slug === slug);
  const project = projects[currentIndex];

  // Scroll to top when project changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-navanirman-concrete">
        <h1 className="text-4xl font-display mb-4">Project Not Found</h1>
        <Link to="/projects" className="text-navanirman-terracotta hover:underline">
          Return to Projects
        </Link>
      </div>
    );
  }

  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

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
    <div className="w-full bg-white">
      {/* Back Button & Header */}
      <div className="pt-32 pb-8 bg-navanirman-ivory">
        <div className="container mx-auto px-6 max-w-7xl">
          <Link to="/projects" className="inline-flex items-center text-xs font-semibold tracking-widest uppercase text-navanirman-slate hover:text-navanirman-terracotta transition-colors mb-12 group">
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Projects
          </Link>

          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end"
          >
            <div className="lg:col-span-8 space-y-6">
              <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 text-xs tracking-wider uppercase text-navanirman-slate font-medium">
                <span className="text-navanirman-terracotta">{project.category}</span>
                <span>&bull;</span>
                <span>{project.location}</span>
                <span>&bull;</span>
                <span>{project.year}</span>
              </motion.div>
              <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-display leading-[1.1] text-navanirman-charcoal">
                {project.title}
              </motion.h1>
            </div>
            
            <motion.div variants={itemVariants} className="lg:col-span-4">
              <p className="text-lg text-navanirman-slate font-light leading-relaxed">
                {project.description}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Hero Image */}
      <motion.div 
        className="w-full h-[60vh] md:h-[80vh] relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Content */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Meta Data Sidebar */}
            <motion.div 
              className="lg:col-span-3 space-y-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
            >
              <div className="space-y-6 pb-8 border-b border-navanirman-warmgrey/30">
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-navanirman-slate mb-1 font-semibold">Category</h4>
                  <p className="text-navanirman-charcoal font-medium">{project.category}</p>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-navanirman-slate mb-1 font-semibold">Location</h4>
                  <p className="text-navanirman-charcoal font-medium">{project.location}</p>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-navanirman-slate mb-1 font-semibold">Scope</h4>
                  <p className="text-navanirman-charcoal font-medium">{project.scope}</p>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-navanirman-slate mb-1 font-semibold">Status</h4>
                  <div className="inline-flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                    <p className="text-navanirman-charcoal font-medium">{project.status}</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-[10px] uppercase tracking-widest text-navanirman-slate mb-4 font-semibold">Key Materials</h4>
                <ul className="space-y-2">
                  {project.materials.map((mat, i) => (
                    <li key={i} className="text-sm text-navanirman-charcoal flex items-center gap-2">
                      <span className="w-1 h-1 bg-navanirman-terracotta/50 rounded-full"></span>
                      {mat}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Main Content */}
            <motion.div 
              className="lg:col-span-8 lg:col-start-5 space-y-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
            >
              <motion.div variants={itemVariants} className="space-y-6">
                <h3 className="text-3xl font-display text-navanirman-charcoal">Project Overview</h3>
                <p className="text-lg text-navanirman-slate font-light leading-relaxed">
                  {project.overview}
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-6">
                <h3 className="text-3xl font-display text-navanirman-charcoal">Design Approach</h3>
                <p className="text-lg text-navanirman-slate font-light leading-relaxed">
                  {project.designApproach}
                </p>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-navanirman-concrete">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div 
            className="flex items-center gap-3 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <div className="h-px w-8 bg-navanirman-terracotta"></div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-navanirman-terracotta">
              Project Gallery
            </span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.gallery.map((img, i) => (
              <motion.div 
                key={i} 
                className={cn(
                  "relative group cursor-pointer overflow-hidden rounded-sm",
                  i === 0 ? "md:col-span-2 aspect-video" : "aspect-square"
                )}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
              >
                <img 
                  src={img} 
                  alt={`Gallery image ${i + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-navanirman-charcoal/0 group-hover:bg-navanirman-charcoal/20 transition-colors duration-500 flex items-center justify-center">
                  <Expand className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-50 group-hover:scale-100" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Navigation */}
      <section className="py-16 bg-white border-t border-navanirman-warmgrey/30">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {prevProject ? (
              <Link to={`/projects/${prevProject.slug}`} className="group flex items-center gap-4 text-left w-full md:w-auto hover:bg-navanirman-ivory p-4 rounded-lg transition-colors">
                <div className="w-12 h-12 rounded-full border border-navanirman-warmgrey/50 flex items-center justify-center group-hover:border-navanirman-terracotta transition-colors">
                  <ArrowLeft className="w-5 h-5 text-navanirman-charcoal group-hover:text-navanirman-terracotta transition-colors" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-navanirman-slate mb-1">Previous Project</p>
                  <p className="font-display text-lg text-navanirman-charcoal">{prevProject.title}</p>
                </div>
              </Link>
            ) : (
              <div className="w-full md:w-auto"></div> // Spacer
            )}
            
            <Link to="/contact" className="btn btn-primary whitespace-nowrap hidden md:inline-flex group">
              Start a similar project
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            {nextProject ? (
              <Link to={`/projects/${nextProject.slug}`} className="group flex items-center justify-end gap-4 text-right w-full md:w-auto hover:bg-navanirman-ivory p-4 rounded-lg transition-colors">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-navanirman-slate mb-1">Next Project</p>
                  <p className="font-display text-lg text-navanirman-charcoal">{nextProject.title}</p>
                </div>
                <div className="w-12 h-12 rounded-full border border-navanirman-warmgrey/50 flex items-center justify-center group-hover:border-navanirman-terracotta transition-colors">
                  <ArrowRight className="w-5 h-5 text-navanirman-charcoal group-hover:text-navanirman-terracotta transition-colors" />
                </div>
              </Link>
            ) : (
              <div className="w-full md:w-auto"></div> // Spacer
            )}

            <Link to="/contact" className="btn btn-primary w-full md:hidden mt-8 text-center justify-center group">
              Start a similar project
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
