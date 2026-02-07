import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Layout,
  Database,
  Code2,
  Palette,
  Server,
  Terminal,
} from "lucide-react";

const skillsData = [
  {
    title: "Frontend",
    icon: Layout,
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  },
  {
    title: "Backend / CMS",
    icon: Database,
    skills: ["WordPress", "PHP (Basic)", "MySQL"],
  },
  {
    title: "Frontend Frameworks",
    icon: Code2,
    skills: ["React.js", "Next.js", "TypeScript"],
  },
  {
    title: "Design Tools",
    icon: Palette,
    skills: ["Adobe Photoshop", "Canva", "Figma"],
  },
  {
    title: "Dev Tools",
    icon: Server,
    skills: ["VPS Server", "GitHub"],
  },
  {
    title: "Programming Languages",
    icon: Terminal,
    skills: ["Python", "C / C++", "Basic Java"],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      className="relative py-16 sm:py-20 md:py-28 bg-black overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
  <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-gradient-radial from-primary/20 via-primary/5 to-transparent blur-3xl" />
  <div className="absolute bottom-[-200px] right-[-200px] w-[700px] h-[700px] bg-gradient-radial from-purple-500/10 via-transparent to-transparent blur-3xl" />
</div>


      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div ref={ref} className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-7"
          ><span className="skill-badge inline-block items-center gap-2 px-5 mb-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-primary/40 text-white border border-primary/80 shadow-lg shadow-primary/70">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse " />
           Skills & Expertise
        </span>
           
            <h2 className="section-title">
              My <span className="gradient-text">Technical Skills</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-white">
              Technologies and tools I use to design and develop modern web
              solutions
            </p>
          </motion.div>

          {/* Skill Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillsData.map((group, index) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative p-8 rounded-2xl bg-white backdrop-blur border border-white/40 shadow-sm hover:shadow-xl transition-all group"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-primary/30 via-transparent to-transparent" />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <group.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h4 className="text-xl font-heading font-bold">
                      {group.title}
                    </h4>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-3">
                    {group.skills.map((skill, i) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{
                          delay: 0.2 + i * 0.06,
                          duration: 0.4,
                        }}
                        className="px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
