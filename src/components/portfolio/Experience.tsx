import { useEffect, useRef, useState } from "react";
import { Briefcase, Calendar, MapPin, Building2, ArrowRight } from "lucide-react";

const experiences = [
  {
    title: "Front-end Developer",
    company: "Versa Forge",
    location: "Tirunelveli, Tamil Nadu",
    period: "2023 - Present",
    description: "Developing responsive web applications using React, TypeScript, and modern CSS frameworks. Collaborating with design teams to implement pixel-perfect UI components.",
    skills: ["React", "TypeScript", "Tailwind CSS", "Git"],
  },
  {
    title: "Web Developer Intern",
    company: "Tech Solutions",
    location: "Remote",
    period: "2022 - 2023",
    description: "Built and maintained WordPress websites for various clients. Implemented custom themes and plugins to meet specific business requirements.",
    skills: ["WordPress", "PHP", "JavaScript", "MySQL"],
  },
  {
    title: "Freelance Developer",
    company: "Self-Employed",
    location: "Tirunelveli, Tamil Nadu",
    period: "2021 - 2022",
    description: "Designed and developed custom websites for local businesses. Handled full project lifecycle from client consultation to deployment.",
    skills: ["HTML/CSS", "JavaScript", "Figma", "SEO"],
  },
];

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className={`section-title transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            Work <span className="text-primary glow-text">Experience</span>
          </h2>
          <p className={`text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            My professional journey and career milestones.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className={`relative mb-12 md:mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              <div className={`flex flex-col md:flex-row items-start gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg shadow-primary/50 md:-translate-x-1/2 z-10">
                  <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-30" />
                </div>

                {/* Content Card */}
                <div className={`ml-8 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <div className="group bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover-lift">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-primary mt-1">
                          <Building2 size={16} />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                      </div>
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <Briefcase className="text-primary" size={24} />
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} className="text-primary" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} className="text-primary" />
                        {exp.location}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
