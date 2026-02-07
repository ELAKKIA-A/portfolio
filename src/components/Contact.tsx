import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Github, Linkedin, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';
import { toast } from 'sonner';

const contactInfo = {
  email: 'elakkia@example.com',
  phone: '+91 98765 43210',
  location: 'Tamil Nadu, India',
  github: 'https://github.com/elakkia',
  linkedin: 'https://www.linkedin.com/in/elakkia',
};

const springTransition = {
  type: "spring" as const,
  stiffness: 100,
  damping: 15,
};

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
    
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    toast.success('Opening your email client!');
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-28  bg-gray-100 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6">
        <div ref={ref} className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <span className="skill-badge mb-4 inline-block">Get In Touch</span>
            <h2 className="section-title">
              Let's{' '}
              <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Have a project in mind or want to discuss opportunities? I'd love to hear from you!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ ...springTransition, delay: 0.2 }}
              className="space-y-6 sm:space-y-8"
            >
              <div className="glass-card p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-heading font-bold mb-6 sm:mb-8 text-foreground">Contact Information</h3>
                
                <div className="space-y-4 sm:space-y-6">
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-center gap-4 p-3 sm:p-4 rounded-xl bg-gray-100 hover:bg-primary/10 transition-colors group cursor-pointer"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs sm:text-sm text-muted-foreground">Email</p>
                      <p className="font-semibold text-sm sm:text-base text-foreground group-hover:text-primary transition-colors">
                        {contactInfo.email}
                      </p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>

                  <a 
                    href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-4 p-3 sm:p-4 rounded-xl bg-gray-100 hover:bg-primary/10 transition-colors group cursor-pointer"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                      <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs sm:text-sm text-muted-foreground">Phone</p>
                      <p className="font-semibold text-sm sm:text-base text-foreground group-hover:text-primary transition-colors">
                        {contactInfo.phone}
                      </p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>

                  <div className="flex items-center gap-4 p-3 sm:p-4 rounded-xl bg-gray-100">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-muted-foreground">Location</p>
                      <p className="font-semibold text-sm sm:text-base text-foreground">{contactInfo.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="glass-card p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-heading font-bold mb-4 sm:mb-6 text-foreground">Connect with me</h3>
                <div className="flex items-center gap-4">
                  <a
                    href={contactInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon group"
                    aria-label="GitHub"
                  >
                    <Github size={22} className="group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon group"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={22} className="group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="social-icon group"
                    aria-label="Email"
                  >
                    <Mail size={22} className="group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                    className="social-icon group"
                    aria-label="Phone"
                  >
                    <Phone size={22} className="group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ ...springTransition, delay: 0.4 }}
              onSubmit={handleSubmit}
              className="glass-card p-6 sm:p-8 md:p-10"
            >
              <h3 className="text-xl sm:text-2xl font-heading font-bold mb-6 sm:mb-8 text-foreground">Send me a message</h3>
              
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2 sm:mb-3 text-foreground">
                    Your Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl bg-gray-100 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-muted-foreground text-foreground"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2 sm:mb-3 text-foreground">
                    Your Email <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl bg-gray-100 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-muted-foreground text-foreground"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2 sm:mb-3 text-foreground">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl bg-gray-100 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-muted-foreground text-foreground"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2 sm:mb-3 text-foreground">
                    Message <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl bg-gray-100 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none placeholder:text-muted-foreground text-foreground"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full gradient-button px-6 sm:px-8 py-4 sm:py-5 flex items-center justify-center gap-3 font-bold text-base sm:text-lg disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? (
                    'Opening Email...'
                  ) : (
                    <>
                      Send Message
                      <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
