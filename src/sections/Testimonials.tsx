import { motion, type Variants } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "From laying the foundation to the final coat of paint, the process was completely transparent and the build quality exceeded our expectations.",
    name: "Arvind",
    category: "Residential Construction",
    location: "Hyderabad"
  },
  {
    id: 2,
    quote: "They didn't just furnish our space; they took the time to understand how our family lives and designed a home that works beautifully.",
    name: "Meera",
    category: "Interior Design",
    location: "Bangalore"
  },
  {
    id: 3,
    quote: "Renovating a heritage property is stressful, but their structured timeline and material cost visibility kept us at ease the entire way.",
    name: "Rohan",
    category: "Renovation",
    location: "Chennai"
  },
  {
    id: 4,
    quote: "We needed a workspace that reflects our brand's precision. They delivered on time, on budget, and with an impeccable finish.",
    name: "Sneha",
    category: "Commercial Project",
    location: "Mumbai"
  }
];

export function Testimonials() {
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
    <section className="py-24 bg-white overflow-hidden border-t border-navanirman-warmgrey/30">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Header & Trust Metric */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-16">
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
                Client Experiences
              </span>
            </motion.div>
            
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-display leading-[1.15] text-navanirman-charcoal">
              Built around relationships, not just structures.
            </motion.h2>
          </motion.div>

          <motion.div 
            className="flex flex-col items-start md:items-end space-y-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-navanirman-terracotta text-navanirman-terracotta" />
              ))}
            </div>
            <div className="text-right">
              <p className="text-3xl font-display text-navanirman-charcoal">4.9/5</p>
              <p className="text-[10px] uppercase tracking-widest text-navanirman-slate mt-1">Average Client Rating</p>
            </div>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((testimonial) => (
            <motion.div 
              key={testimonial.id}
              variants={itemVariants}
              className="bg-navanirman-concrete/30 p-8 md:p-10 rounded-sm border border-navanirman-warmgrey/20 relative group hover:bg-navanirman-concrete/50 transition-colors duration-500"
            >
              <Quote className="w-10 h-10 text-navanirman-terracotta/20 absolute top-8 left-8 -z-10 group-hover:text-navanirman-terracotta/30 transition-colors duration-500" />
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <blockquote className="text-xl md:text-2xl font-display text-navanirman-charcoal leading-snug mb-10">
                  "{testimonial.quote}"
                </blockquote>
                
                <div>
                  <div className="h-px w-12 bg-navanirman-terracotta/50 mb-4"></div>
                  <p className="font-medium text-navanirman-charcoal text-lg mb-1">{testimonial.name}</p>
                  <p className="text-xs uppercase tracking-wider text-navanirman-slate font-semibold mb-1">
                    {testimonial.category}
                  </p>
                  <p className="text-sm text-navanirman-slate font-light">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}
