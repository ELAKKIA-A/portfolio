import { useEffect, useState, useRef } from "react";
import { 
  Code2, Globe, Database, Paintbrush, GitBranch, Terminal, 
  Figma, Chrome, FileCode, Layers, Cpu, Palette
} from "lucide-react";

const skills = [
  { name: "React JS", level: 90, icon: Code2 },
  { name: "Node.js", level: 75, icon: Terminal },
  { name: "WordPress", level: 85, icon: Globe },
  { name: "HTML/CSS", level: 95, icon: FileCode },
  { name: "JavaScript", level: 88, icon: Layers },
  { name: "Tailwind CSS", level: 90, icon: Palette },
  { name: "Git/GitHub", level: 80, icon: GitBranch },
  { name: "SQL", level: 70, icon: Database },
];

const tools = [
  { name: "VS Code", icon: Code2 },
  { name: "Figma", icon: Figma },
  { name: "Photoshop", icon: Paintbrush },
  { name: "Chrome DevTools", icon: Chrome },
  { name: "Postman", icon: Cpu },
  { name: "GitHub", icon: GitBranch },
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-4 bg-card/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 text-primary">
          <Code2 size={100} />
        </div>
        <div className="absolute bottom-20 right-20 text-primary">
          <Terminal size={80} />
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className={`section-title transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            My <span className="text-primary glow-text">Skills</span>
          </h2>
          <p className={`text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            Technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skill Bars */}
          <div className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}>
            <h3 className="text-xl font-semibold mb-6 text-foreground flex items-center gap-2">
              <Cpu className="text-primary" size={24} />
              Technical Skills
            </h3>
            {skills.map((skill, index) => (
              <div key={skill.name} className="group">
                <div className="flex justify-between mb-2 items-center">
                  <div className="flex items-center gap-2">
                    <skill.icon className="text-primary" size={18} />
                    <span className="font-medium text-foreground">{skill.name}</span>
                  </div>
                  <span className="text-primary font-bold">{skill.level}%</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden relative">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-cyan-400 rounded-full transition-all duration-1000 ease-out relative"
                    style={{
                      width: isVisible ? `${skill.level}%` : "0%",
                      transitionDelay: `${index * 100}ms`,
                    }}
                  >
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tools & Other Skills */}
          <div className={`transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}>
            <h3 className="text-xl font-semibold mb-6 text-foreground flex items-center gap-2">
              <Layers className="text-primary" size={24} />
              Tools & Software
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {tools.map((tool, index) => (
                <div
                  key={tool.name}
                  className={`p-4 bg-background rounded-xl border border-border text-center hover-lift group transition-all duration-500 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <tool.icon className="text-primary" size={24} />
                  </div>
                  <span className="text-foreground font-medium">{tool.name}</span>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-semibold mt-10 mb-6 text-foreground flex items-center gap-2">
              <Paintbrush className="text-primary" size={24} />
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                "Problem Solving",
                "Team Collaboration",
                "Communication",
                "Time Management",
                "Adaptability",
                "Creativity",
              ].map((skill, index) => (
                <span
                  key={skill}
                  className={`px-4 py-2 bg-primary/10 text-primary border border-primary/30 rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default hover:scale-105 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                  style={{ transitionDelay: `${500 + index * 50}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
