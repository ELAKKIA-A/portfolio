import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import TechLogoSlider from './TechLogoSlider';


const TechnologiesLogo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-10 sm:py-12 md:py-16  relative overflow-hidden bg-gray-100">
     
      
      <div className="container mx-auto px-4 sm:px-6">
        <div ref={ref} className="max-w-7xl mx-auto">
        

          

          {/* Tech Logo Slider */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className=""
          >
            <p className="text-center text-sm text-muted-foreground mb-6 uppercase tracking-widest font-medium">
              Technologies I Work With
            </p>
            <TechLogoSlider />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesLogo;
