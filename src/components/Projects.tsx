import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import type { Transition } from "framer-motion";

const spring: Transition = {
  type: "spring",
  stiffness: 90,
  damping: 14,
};

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'A scalable e-commerce solution with secure payments, cart system, and admin dashboard.',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&h=600&fit=crop',
    techStack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Task Management App',
    description:
      'Collaborative task manager with real-time updates, drag & drop, and team workflows.',
    image:
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=900&h=600&fit=crop',
    techStack: ['Next.js', 'TypeScript', 'Prisma'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Analytics Dashboard',
    description:
      'Modern analytics dashboard to track user engagement and performance metrics.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=600&fit=crop',
    techStack: ['React', 'D3.js', 'REST API'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Portfolio Builder',
    description:
      'Custom portfolio generator with animations, themes, and responsive layouts.',
    image:
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=900&h=600&fit=crop',
    techStack: ['React', 'Firebase', 'Framer Motion'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="projects"
      className="relative py-16 sm:py-20 md:py-28 overflow-hidden"
    >
      {/* Background Blur */}
      <div className="absolute top-24 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-24 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6">
        <div ref={ref} className="max-w-7xl mx-auto">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-7 sm:mb-7"
          >
            <span className="skill-badge mb-4 inline-block">Portfolio</span>
            <h2 className="section-title">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-sm sm:text-base">
              Hand-picked projects showcasing design, performance, and clean architecture
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ ...spring, delay: index * 0.12 }}
                whileHover={{ y: -8 }}
                className="group glass-card-hover flex flex-col h-full overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-48 sm:h-52 md:h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />

                  {/* Hover Actions */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition duration-300 bg-primary/30 backdrop-blur-sm">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-primary flex items-center justify-center shadow-lg"
                    >
                      <ExternalLink size={18} />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-primary flex items-center justify-center shadow-lg"
                    >
                      <Github size={18} />
                    </motion.a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-3">
                  <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                     
                     
                    ><h3 className="font-heading font-bold text-base sm:text-lg group-hover:text-primary transition-colors">
                      {project.title}
                    </h3></motion.a>
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                     
                     
                    > <ArrowUpRight
                    size={18}
                    className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                  >
                    </ArrowUpRight></motion.a>
                   
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
