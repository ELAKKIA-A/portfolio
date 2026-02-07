import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight, Building2 } from 'lucide-react';

const experiences = [
  {
    title: 'Web Developer',
    company: 'Tech Solutions',
    location: 'Tamil Nadu, India',
    duration: 'Jan 2023 - Present',
    type: 'Full-time',
    description:
      'Leading frontend development projects, building scalable React applications, implementing best practices, and collaborating with cross-functional teams to deliver high-quality solutions.',
    achievements: [
      'Developed responsive web applications using React and Tailwind CSS',
      'Improved application performance by 40% through code optimization',
      'Collaborated with design team to implement pixel-perfect UIs',
      'Mentored junior developers on best practices'
    ],
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Git']
  },
  {
    title: 'Junior Developer',
    company: 'Digital Agency',
    location: 'Tamil Nadu, India',
    duration: 'Jun 2022 - Dec 2022',
    type: 'Full-time',
    description:
      'Developed and maintained multiple client projects using modern web technologies. Worked on both frontend and backend components.',
    achievements: [
      'Built and deployed multiple client websites',
      'Implemented RESTful APIs and database integrations',
      'Worked with SQL and Oracle 11g databases',
      'Participated in agile development processes'
    ],
    technologies: ['JavaScript', 'HTML/CSS', 'SQL', 'Oracle 11g', 'Bootstrap']
  },
];

const springTransition = {
  type: "spring" as const,
  stiffness: 100,
  damping: 15,
};

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-16 sm:py-20 md:py-28 relative overflow-hidden bg-gray-100">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-primary/10 via-transparent to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-primary/10 via-transparent to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6">
        <div ref={ref} className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <span className="skill-badge mb-4 inline-block">Career Journey</span>
            <h2 className="section-title">
              Work{' '}
              <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Building impactful solutions and growing as a developer
            </p>
          </motion.div>

          {/* Premium Timeline */}
          <div className="relative">
            {/* Center Timeline Line - Gradient with glow */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2">
              <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/50 to-transparent rounded-full" />
             
            </div>
            
            {/* Mobile Timeline Line */}
            <div className="md:hidden absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ ...springTransition, delay: index * 0.3 }}
                className={`relative mb-12 sm:mb-16 last:mb-0 md:flex ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Node with Year */}
                <div className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 z-20 flex-col items-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ ...springTransition, delay: index * 0.3 + 0.2 }}
                    className="w-14 h-14 rounded-full bg-white border-4 border-primary shadow-xl shadow-primary/20 flex items-center justify-center"
                  >
                    <Building2 className="w-6 h-6 text-primary" />
                  </motion.div>
                  
                </div>

                {/* Mobile Timeline Node */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ ...springTransition, delay: index * 0.3 + 0.2 }}
                  className="md:hidden absolute left-6 sm:left-8 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-lg z-10"
                />

                {/* Card */}
                <div className={`md:w-[calc(50%-3rem)] ${index % 2 === 0 ? 'md:pr-0' : 'md:pl-0'}`}>
                  <div className="ml-12 sm:ml-16 md:ml-0">
                    <motion.div 
                      className="glass-card-hover p-6 sm:p-8 relative overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      {/* Decorative accent */}
                      <div className={`absolute top-0 ${index % 2 === 0 ? 'right-0' : 'left-0'} w-24 h-24 bg-primary/5 rounded-full -translate-y-1/2 ${index % 2 === 0 ? 'translate-x-1/2' : '-translate-x-1/2'}`} />
                      
                      <div className="relative z-10">
                        {/* Header */}
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <span className="px-3 py-1 text-xs rounded-full bg-primary text-white font-semibold">
                            {exp.type}
                          </span>
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Calendar size={12} />
                            {exp.duration}
                          </span>
                        </div>
                        
                        <h3 className="text-xl sm:text-2xl font-heading font-bold text-foreground mb-2">
                          {exp.title}
                        </h3>
                        
                        <div className="flex flex-wrap items-center gap-3 text-sm text-primary font-semibold mb-4">
                          <span className="flex items-center gap-1">
                            <Briefcase size={14} />
                            {exp.company}
                          </span>
                          <span className="flex items-center gap-1 text-muted-foreground">
                            <MapPin size={14} />
                            {exp.location}
                          </span>
                        </div>
                        
                        <p className="text-muted-foreground leading-relaxed mb-5 text-sm sm:text-base">
                          {exp.description}
                        </p>
                        
                        {/* Achievements */}
                        <div className="mb-5">
                          <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                           
                            Key Achievements
                          </h4>
                          <ul className="space-y-2 pl-8">
                            {exp.achievements.map((achievement, i) => (
                              <motion.li 
                                key={i} 
                                className="flex items-start gap-2 text-sm text-muted-foreground"
                                initial={{ opacity: 0, x: -10 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: index * 0.3 + 0.5 + i * 0.1 }}
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                <span>{achievement}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-foreground border border-border hover:border-primary hover:text-primary transition-colors cursor-default"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;