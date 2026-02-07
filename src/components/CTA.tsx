import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, TrendingUp, Award, Sparkles, Rocket, Target, Zap, ArrowRight } from 'lucide-react';



const springTransition = {
  type: "spring" as const,
  stiffness: 100,
  damping: 15,
};

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-16 sm:py-20 md:py-28 relative overflow-hidden">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />
      
      {/* Animated floating elements */}
      <motion.div 
        className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/20 blur-2xl"
        animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-primary/15 blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-primary/10 blur-xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Main CTA Card - Trending Modal Design */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ ...springTransition }}
            className="relative"
          >
            {/* Glowing border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl blur-xl opacity-20" />
            
            <div className="relative glass-card p-8 sm:p-12 md:p-16 rounded-3xl border-2 border-primary/20 overflow-hidden">
              {/* Decorative corner elements */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-br-full" />
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-primary/20 to-transparent rounded-tl-full" />
              
              {/* Floating icons */}
              <motion.div 
                className="absolute top-8 right-8 text-primary/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Rocket size={48} />
              </motion.div>
              <motion.div 
                className="absolute bottom-8 left-8 text-primary/20"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Target size={40} />
              </motion.div>
              
              <div className="relative z-10 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ ...springTransition, delay: 0.2 }}
                  className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 mb-6 sm:mb-8 rounded-3xl bg-gradient-to-br from-primary to-accent shadow-2xl shadow-primary/30"
                >
                  <Zap className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                </motion.div>
                
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ ...springTransition, delay: 0.3 }}
                  className="section-title  mb-4 sm:mb-6"
                >
                  Committed to{' '}
                  <span className="gradient-text">Continuous Learning</span>
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ ...springTransition, delay: 0.4 }}
                  className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-10"
                >
                  I've completed numerous online courses relevant to my profession, earning certifications 
                  that validate my expertise. I continue to learn the latest technologies to grow my skills 
                  and deliver cutting-edge solutions.
                </motion.p>
                 {/* CTA Buttons - More Attractive */}
                 <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springTransition, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-5 mb-6 sm:mb-10 items-center justify-center"
          >
            <a
              href="#contact"
              className="gradient-button w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 flex items-center justify-center gap-3 font-bold text-base sm:text-lg group relative overflow-hidden"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="relative z-10">Call Now</span>
              <ArrowRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform" />
            </a>
            
                  <a
                    href="#contact"
                    className="outline-button w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Let's Connect
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
          
         
        </div>
      </div>
    </section>
  );
};

export default CTA;