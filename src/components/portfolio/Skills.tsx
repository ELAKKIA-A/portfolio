import { useEffect, useState, useRef } from "react";
import { 
  Code2, Globe, Database, GitBranch, Terminal, 
  FileCode, Layers, Palette, Sparkles, Zap
} from "lucide-react";

const skills = [
  { name: "React JS", level: 90, icon: Code2, color: "from-cyan-400 to-blue-500" },
  { name: "Node.js", level: 75, icon: Terminal, color: "from-green-400 to-emerald-500" },
  { name: "WordPress", level: 85, icon: Globe, color: "from-blue-400 to-indigo-500" },
  { name: "HTML/CSS", level: 95, icon: FileCode, color: "from-orange-400 to-red-500" },
  { name: "JavaScript", level: 88, icon: Layers, color: "from-yellow-400 to-amber-500" },
  { name: "Tailwind CSS", level: 90, icon: Palette, color: "from-teal-400 to-cyan-500" },
  { name: "Git/GitHub", level: 80, icon: GitBranch, color: "from-purple-400 to-pink-500" },
  { name: "SQL", level: 70, icon: Database, color: "from-blue-400 to-cyan-500" },
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <Sparkles className="text-primary" size={16} />
            <span className="text-primary text-sm font-medium">What I Do Best</span>
          </div>
          <h2 className={`section-title transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            My <span className="text-primary glow-text">Skills</span>
          </h2>
          <p className={`text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            Technologies and tools I master to build amazing digital experiences.
          </p>
        </div>

        {/* Skills Grid - Hexagonal Style */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`relative group transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative bg-background/80 backdrop-blur-sm rounded-3xl p-6 border border-border hover:border-primary/50 transition-all duration-500 hover-lift overflow-hidden">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Icon Container */}
                <div className="relative mb-4">
                  <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${skill.color} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-full h-full bg-background rounded-2xl flex items-center justify-center">
                      <skill.icon className="text-primary" size={28} />
                    </div>
                  </div>
                  
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${skill.color} blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />
                </div>

                {/* Skill Name */}
                <h3 className="text-center font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {skill.name}
                </h3>

                {/* Circular Progress */}
                <div className="relative w-20 h-20 mx-auto">
                  <svg className="w-full h-full transform -rotate-90">
                    {/* Background Circle */}
                    <circle
                      cx="40"
                      cy="40"
                      r="32"
                      className="fill-none stroke-muted stroke-[6]"
                    />
                    {/* Progress Circle */}
                    <circle
                      cx="40"
                      cy="40"
                      r="32"
                      className={`fill-none stroke-[6] transition-all duration-1000 ease-out`}
                      style={{
                        stroke: `url(#gradient-${index})`,
                        strokeDasharray: `${2 * Math.PI * 32}`,
                        strokeDashoffset: isVisible 
                          ? `${2 * Math.PI * 32 * (1 - skill.level / 100)}` 
                          : `${2 * Math.PI * 32}`,
                        strokeLinecap: "round",
                        transitionDelay: `${300 + index * 100}ms`,
                      }}
                    />
                    {/* Gradient Definition */}
                    <defs>
                      <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="hsl(var(--primary))" />
                        <stop offset="100%" stopColor="hsl(var(--primary) / 0.6)" />
                      </linearGradient>
                    </defs>
                  </svg>
                  
                  {/* Percentage Text */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">
                      {isVisible ? skill.level : 0}%
                    </span>
                  </div>
                </div>

                {/* Floating Particles */}
                {hoveredIndex === index && (
                  <div className="absolute inset-0 pointer-events-none">
                    <Zap className="absolute top-4 right-4 text-primary/30 animate-bounce" size={16} />
                    <Sparkles className="absolute bottom-4 left-4 text-primary/30 animate-pulse" size={16} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
