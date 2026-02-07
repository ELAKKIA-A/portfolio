import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const educationData = [
  {
    level: "Undergraduate",
    degree: "B.Sc Computer Science",
    institution: "Rani Anna Government College for Women",
    location: "Tirunelveli",
    year: "Graduated in 2022",
    score: "CGPA: 8.74",
    icon: GraduationCap,
  },
  {
    level: "HSC",
    degree: "Mathematics Computer Science",
    institution: "Sokkalal Higher Secondary School",
    location: "Mukkudal, Tirunelveli",
    year: "Graduated in 2019",
    score: "Percentage: 66.4%",
    icon: Award,
  },
  {
    level: "SSLC",
    degree: "",
    institution: "Sokkalal Higher Secondary School",
    location: "Mukkudal, Tirunelveli",
    year: "Graduated in 2017",
    score: "Percentage: 79%",
    icon: BookOpen,
  },
];

const springTransition = {
  type: "spring" as const,
  stiffness: 100,
  damping: 15,
};

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="py-16 sm:py-20 md:py-28 relative overflow-hidden bg-secondary/30">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6">
        <div ref={ref} className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <span className="skill-badge mb-4 inline-block">Academic Background</span>
            <h2 className="section-title">
              My{' '}
              <span className="gradient-text">Education</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Building a strong foundation through continuous learning and academic excellence
            </p>
          </motion.div>

          {/* 3 Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.level}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ ...springTransition, delay: index * 0.15 }}
                className="glass-card-hover p-6 sm:p-8 relative overflow-hidden group text-center"
              >
                {/* Top decorative line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />
                
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ ...springTransition, delay: index * 0.15 + 0.2 }}
                  className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300"
                >
                  <edu.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                </motion.div>

                {/* Level Badge */}
                <span className="inline-block px-4 py-1 text-sm font-bold text-primary bg-primary/10 rounded-full mb-4">
                  {edu.level}
                </span>
                
                {/* Degree */}
                {edu.degree && (
                  <h3 className="text-lg sm:text-xl font-heading font-bold mb-3 text-foreground">
                    {edu.degree}
                  </h3>
                )}
                
                {/* Institution */}
                <p className="text-sm sm:text-base text-muted-foreground font-medium mb-2">
                  {edu.institution}
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  {edu.location}
                </p>
                
                {/* Year & Score */}
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-1">{edu.year}</p>
                  <p className="text-base font-bold text-primary">{edu.score}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
