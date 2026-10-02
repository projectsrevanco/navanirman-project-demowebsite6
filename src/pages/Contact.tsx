import { useState, type FormEvent } from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, MapPin, Mail, Phone, Clock, CheckCircle } from 'lucide-react';
import { cn } from '../lib/utils';

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    location: '',
    budget: '',
    startDate: '',
    description: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.projectType) newErrors.projectType = 'Please select a project type';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Simulate API call
      setTimeout(() => {
        setIsSubmitted(true);
      }, 600);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
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
    <div className="w-full bg-navanirman-concrete min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 border-b border-navanirman-warmgrey/30 bg-white overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <motion.div 
            className="space-y-6 max-w-2xl"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <div className="h-px w-8 bg-navanirman-terracotta"></div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-navanirman-terracotta">
                Start Your Project
              </span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-display leading-[1.1] text-navanirman-charcoal">
              Tell us what you're building.
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg text-navanirman-slate leading-relaxed font-light">
              Whether you have a fully developed blueprint or just an initial idea, share your requirements with us. Our team is ready to provide clarity, estimates, and a structured path forward.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left Column: Form */}
            <motion.div 
              className="lg:col-span-7 bg-white rounded-xl shadow-xl border border-navanirman-warmgrey/20 p-8 md:p-12"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {isSubmitted ? (
                <div className="h-full min-h-[500px] flex flex-col items-center justify-center text-center space-y-6">
                  <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-10 h-10 text-emerald-500" />
                  </div>
                  <h3 className="text-3xl font-display text-navanirman-charcoal">Request Received</h3>
                  <p className="text-navanirman-slate max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. Your project details have been successfully submitted. One of our project managers will contact you within 24 hours.
                  </p>
                  <button 
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({name: '', email: '', phone: '', projectType: '', location: '', budget: '', startDate: '', description: ''});
                    }}
                    className="btn btn-outline mt-8"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs uppercase tracking-wider font-semibold text-navanirman-slate">Full Name *</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        className={cn(
                          "w-full bg-navanirman-concrete/50 border rounded-md px-4 py-3 text-navanirman-charcoal focus:outline-none focus:ring-1 transition-all",
                          errors.name ? "border-red-400 focus:ring-red-400" : "border-navanirman-warmgrey/50 focus:border-navanirman-terracotta focus:ring-navanirman-terracotta/30"
                        )}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs uppercase tracking-wider font-semibold text-navanirman-slate">Email Address *</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        className={cn(
                          "w-full bg-navanirman-concrete/50 border rounded-md px-4 py-3 text-navanirman-charcoal focus:outline-none focus:ring-1 transition-all",
                          errors.email ? "border-red-400 focus:ring-red-400" : "border-navanirman-warmgrey/50 focus:border-navanirman-terracotta focus:ring-navanirman-terracotta/30"
                        )}
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-xs uppercase tracking-wider font-semibold text-navanirman-slate">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-navanirman-concrete/50 border border-navanirman-warmgrey/50 rounded-md px-4 py-3 text-navanirman-charcoal focus:outline-none focus:border-navanirman-terracotta focus:ring-1 focus:ring-navanirman-terracotta/30 transition-all"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    {/* Location */}
                    <div className="space-y-2">
                      <label htmlFor="location" className="text-xs uppercase tracking-wider font-semibold text-navanirman-slate">Project Location</label>
                      <input 
                        type="text" 
                        id="location" 
                        name="location" 
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full bg-navanirman-concrete/50 border border-navanirman-warmgrey/50 rounded-md px-4 py-3 text-navanirman-charcoal focus:outline-none focus:border-navanirman-terracotta focus:ring-1 focus:ring-navanirman-terracotta/30 transition-all"
                        placeholder="City, Neighborhood"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Project Type */}
                    <div className="space-y-2">
                      <label htmlFor="projectType" className="text-xs uppercase tracking-wider font-semibold text-navanirman-slate">Project Type *</label>
                      <select 
                        id="projectType" 
                        name="projectType" 
                        value={formData.projectType}
                        onChange={handleChange}
                        className={cn(
                          "w-full bg-navanirman-concrete/50 border rounded-md px-4 py-3 text-navanirman-charcoal focus:outline-none focus:ring-1 transition-all appearance-none",
                          errors.projectType ? "border-red-400 focus:ring-red-400" : "border-navanirman-warmgrey/50 focus:border-navanirman-terracotta focus:ring-navanirman-terracotta/30"
                        )}
                      >
                        <option value="" disabled>Select a type...</option>
                        <option value="New Construction">New Construction</option>
                        <option value="Renovation">Renovation</option>
                        <option value="Architecture">Architecture</option>
                        <option value="Interior Design">Interior Design</option>
                        <option value="Commercial">Commercial</option>
                        <option value="Maintenance">Maintenance</option>
                      </select>
                      {errors.projectType && <p className="text-red-500 text-xs mt-1">{errors.projectType}</p>}
                    </div>
                    {/* Budget */}
                    <div className="space-y-2">
                      <label htmlFor="budget" className="text-xs uppercase tracking-wider font-semibold text-navanirman-slate">Approximate Budget</label>
                      <select 
                        id="budget" 
                        name="budget" 
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full bg-navanirman-concrete/50 border border-navanirman-warmgrey/50 rounded-md px-4 py-3 text-navanirman-charcoal focus:outline-none focus:border-navanirman-terracotta focus:ring-1 focus:ring-navanirman-terracotta/30 transition-all appearance-none"
                      >
                        <option value="" disabled>Select budget...</option>
                        <option value="Under ₹10 Lakh">Under ₹10 Lakh</option>
                        <option value="₹10–25 Lakh">₹10–25 Lakh</option>
                        <option value="₹25–50 Lakh">₹25–50 Lakh</option>
                        <option value="₹50 Lakh–₹1 Crore">₹50 Lakh–₹1 Crore</option>
                        <option value="₹1 Crore+">₹1 Crore+</option>
                      </select>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-2">
                    <label htmlFor="description" className="text-xs uppercase tracking-wider font-semibold text-navanirman-slate">Project Description</label>
                    <textarea 
                      id="description" 
                      name="description" 
                      value={formData.description}
                      onChange={handleChange}
                      rows={5}
                      className="w-full bg-navanirman-concrete/50 border border-navanirman-warmgrey/50 rounded-md px-4 py-3 text-navanirman-charcoal focus:outline-none focus:border-navanirman-terracotta focus:ring-1 focus:ring-navanirman-terracotta/30 transition-all resize-none"
                      placeholder="Tell us about your goals, timeline, and any specific requirements..."
                    ></textarea>
                  </div>

                  <div className="pt-4 border-t border-navanirman-warmgrey/50">
                    <button type="submit" className="btn btn-primary w-full group py-4 text-sm tracking-wider">
                      Request a Consultation
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                    <p className="text-center text-xs text-navanirman-slate mt-4">
                      Your information is secure and will only be used to discuss your project.
                    </p>
                  </div>
                </form>
              )}
            </motion.div>

            {/* Right Column: Contact Info & Image */}
            <motion.div 
              className="lg:col-span-5 space-y-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <div className="space-y-8 bg-white p-8 rounded-xl shadow-sm border border-navanirman-warmgrey/20">
                <h3 className="text-2xl font-display text-navanirman-charcoal">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-navanirman-concrete flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-navanirman-terracotta" />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-wider font-semibold text-navanirman-slate mb-1">Office</h4>
                      <p className="text-navanirman-charcoal font-medium">Studio 4A, Design District<br/>Hyderabad, TS 500001</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-navanirman-concrete flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-navanirman-terracotta" />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-wider font-semibold text-navanirman-slate mb-1">Email</h4>
                      <a href="mailto:hello@navanirman.com" className="text-navanirman-charcoal font-medium hover:text-navanirman-terracotta transition-colors">hello@navanirman.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-navanirman-concrete flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-navanirman-terracotta" />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-wider font-semibold text-navanirman-slate mb-1">Phone</h4>
                      <a href="tel:+919876543210" className="text-navanirman-charcoal font-medium hover:text-navanirman-terracotta transition-colors">+91 98765 43210</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-navanirman-concrete flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-navanirman-terracotta" />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-wider font-semibold text-navanirman-slate mb-1">Working Hours</h4>
                      <p className="text-navanirman-charcoal font-medium">Monday — Friday<br/>9:00 AM — 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Image */}
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" 
                  alt="Architectural workspace detail" 
                  className="w-full h-full object-cover grayscale-[20%]"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
