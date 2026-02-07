import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import TechLogoSlider from './TechLogoSlider';
import profilePhoto from '@/assets/profile-photo.png';

const springTransition = {
  type: "spring" as const,
  stiffness: 100,
  damping: 15,
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-16 sm:py-20 md:py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6">
        <div ref={ref} className="max-w-7xl mx-auto">
         

          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
            {/* Left - Bio Content */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ ...springTransition, delay: 0.2 }}
              className="order-2 lg:order-2"
            >
              
              <span className="skill-badge mb-4 sm:text-sm font-semibold inline-block">About Me</span>
            <h2 className="section-title">
            I'm Elakkia A
             
            </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                A passionate Full Stack Developer with expertise in building modern web applications. 
                I specialize in creating beautiful, responsive, and user-friendly interfaces using 
                React, Next.js, and cutting-edge technologies.
              </p>
              
              <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                With a strong foundation in both frontend and backend development, including 
                SQL and Oracle 11g databases, I deliver comprehensive solutions that meet 
                business requirements while ensuring exceptional user experiences.
              </p>
              
              <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-10 leading-relaxed">
                My approach combines clean code principles with creative design thinking 
                to deliver solutions that not only look great but also perform exceptionally.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 ">
              <a
              href="#contact"
              className="gradient-button w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 flex items-center justify-center gap-3 font-bold text-base sm:text-lg group relative overflow-hidden"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="relative z-10">Hire Me</span>
              <ArrowRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform" />
            </a>
               
              </div>
            </motion.div>

            {/* Right - Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ ...springTransition, delay: 0.4 }}
              className="order-1 lg:order-1 flex justify-center"
            >
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-3xl blur-2xl" />
                <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-16 sm:w-24 h-16 sm:h-24 border-2 border-primary/30 rounded-2xl" />
                <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 w-20 sm:w-32 h-20 sm:h-32 border-2 border-primary/30 rounded-2xl" />
                
                {/* Main image */}
                <div className="image-frame w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 relative z-10">
                  <img
                    src={profilePhoto}
                    alt="Elakkia A - Web Developer"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                
                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ ...springTransition, delay: 0.8 }}
                  className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 glass-card px-4 sm:px-6 py-2 sm:py-3 z-20"
                >
                  <p className="text-sm font-semibold text-primary">💼 Open to Work</p>
                </motion.div>
              </div>
            </motion.div>
          </div>

         
        </div>
      </div>
    </section>
  );
};

export default About;
