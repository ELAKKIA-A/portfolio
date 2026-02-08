import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ArrowRight, Phone,  Code2,  Globe,  Laptop } from 'lucide-react';
import TypewriterText from './TypewriterText';

const roles = [
  'Full Stack Developer',
  'React Developer',
  'UI/UX Designer',
  'Web Developer',
];

// Floating tech-related icons (not logos)
const floatingIcons = [
  { 
    name: 'Globe',
    icon: Globe,
    position: 'top-24 left-[5%]',
    size: 'w-10 h-10 sm:w-14 sm:h-14',
    delay: 0,
  },
  
  { 
    name: 'Laptop',
    icon: Laptop,
    position: 'bottom-3 left-[8%]',
    size: 'w-8 h-8 sm:w-10 sm:h-10',
    delay: 0.6,
  },
  
  { 
    name: 'Code',
    icon: Code2,
    position: 'top-[48%] left-[40%]',
    size: 'w-8 h-8 sm:w-10 sm:h-10',
    delay: 1.2,
  },
  
];

const springTransition = {
  type: "spring" as const,
  stiffness: 100,
  damping: 15,
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden "
    >
       {/* Background Image */}
  <div
    className="absolute inset-0 bg-center bg-no-repeat bg-cover"
    style={{
      backgroundImage: "url('/images/hero-bg-2.webp')",
    }}
  />
      {/* Premium Background with gradient mesh */}

      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-primary/20 via-primary/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-primary/15 via-primary/5 to-transparent rounded-full blur-3xl" />
      
     

      {/* Floating Tech Icons */}
      {floatingIcons.map((item) => (
        <motion.div
          key={item.name}
          className={`absolute ${item.position} ${item.size} text-white/70 hidden lg:flex items-center justify-center`}
          initial={{ opacity: 0, scale: 0, rotate: -20 }}
          animate={{ 
            opacity: [0.4, 0.8, 0.4],
            scale: 1,
            rotate: 0,
            y: [0, -20, 0],
            x: [0, 10, -10, 0],
          }}
          transition={{
            opacity: { duration: 4, repeat: Infinity, delay: item.delay },
            scale: { ...springTransition, delay: item.delay },
            rotate: { ...springTransition, delay: item.delay },
            y: { duration: 5, repeat: Infinity, delay: item.delay, ease: "easeInOut" },
            x: { duration: 7, repeat: Infinity, delay: item.delay, ease: "easeInOut" },
          }}
          whileHover={{ 
            scale: 1.3, 
            opacity: 1,
            transition: { duration: 0.3 }
          }}
        >
          <item.icon className="w-full h-full" strokeWidth={1.5} />
        </motion.div>
      ))}

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-20 md:mt-0 md:mb-0 mt-6 mb-9 text-center md:text-start">
        <div className="max-w-4xl mx-auto md:mx-7">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springTransition, delay: 0.1 }}
            className="mb-6 sm:mb-8"
          >
            <span className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-primary/40 text-white border border-primary/80 shadow-lg shadow-primary/70">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse " />
              Available for hire
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springTransition, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 sm:mb-8 leading-tight text-foreground text-white"
          >
            Hi, I'm{' '}
            <span className="gradient-text relative">
              Elakkia A
              
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springTransition, delay: 0.3 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium mb-2 sm:mb-3 h-12 sm:h-14  text-primary"
          >
            <TypewriterText texts={roles} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springTransition, delay: 0.4 }}
            className="text-base sm:text-md md:text-lg text-white mb-6 sm:mb-8 max-w-2xl leading-relaxed "
          >
            Crafting beautiful, performant web experiences with modern technologies.
            Passionate about creating elegant solutions that make a difference.
          </motion.p>

          {/* CTA Buttons - More Attractive */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springTransition, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-5 mb-6 sm:mb-10 justify-center md:justify-start"
          >
            <a
              href="#contact"
              className="gradient-button w-full sm:w-auto px-4 sm:px-4 py-3 sm:py-3 flex items-center justify-center gap-3 font-bold text-base sm:text-sm group relative overflow-hidden"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="relative z-10">Hire Me</span>
              <ArrowRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform" />
            </a>
            <a
              href="/certificates/resume.pdf"
              className="outline-button w-full sm:w-auto px-4 sm:px-4 py-3 sm:py-3 flex items-center justify-center gap-3 text-base sm:text-sm group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download size={20} className="group-hover:animate-bounce text-white" />
              <span className='text-white'>Download CV</span>
            </a>
          </motion.div>

          {/* Social Links - More Attractive */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springTransition, delay: 0.6 }}
            className="flex gap-4 text-center md:text-start justify-center md:justify-start"
          >
            {[
              { href: "https://github.com/elakkia", icon: Github, label: "GitHub" },
              { href: "https://www.linkedin.com/in/elakkia", icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:elakkia@example.com", icon: Mail, label: "Email" },
              { href: "tel:+919876543210", icon: Phone, label: "Phone" },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="social-icon group"
                aria-label={social.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ ...springTransition, delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <social.icon size={22} className="group-hover:scale-110 transition-transform" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
 {/* Scroll Indicator */}
 <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1, delay: 1.5 }}
  className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 z-30 cursor-pointer hidden md:flex"
  onClick={() => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  }}
>
  <motion.div 
    className="w-6 h-10 sm:w-7 sm:h-12 border-2 border-primary/70 rounded-full flex justify-center p-2"
    animate={{ y: [0, 6, 0] }}
    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
  >
    <motion.div
      animate={{ y: [0, 14, 0] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      className="w-1.5 h-2 sm:h-3 bg-primary rounded-full"
    />
  </motion.div>
</motion.div>

      
    </section>
  );
};

export default Hero;