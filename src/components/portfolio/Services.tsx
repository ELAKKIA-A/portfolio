import { useEffect, useRef, useState } from "react";
import { Code, Layout, Globe, Palette, Database, Smartphone, ArrowRight, Sparkles } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Front-end Development",
    description:
      "Building responsive and interactive user interfaces using React, TypeScript, and modern JavaScript frameworks.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Layout,
    title: "Web Design",
    description:
      "Creating visually appealing and user-friendly designs that enhance user experience and engagement.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Globe,
    title: "WordPress Development",
    description:
      "Developing custom WordPress themes and plugins, creating scalable and easy-to-manage websites.",
    color: "from-green-500 to-teal-500",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Designing intuitive interfaces and seamless user experiences that keep users engaged and satisfied.",
    color: "from-orange-500 to-yellow-500",
  },
  {
    icon: Database,
    title: "Backend Integration",
    description:
      "Integrating frontend with backend APIs and databases for full-stack functionality.",
    color: "from-red-500 to-rose-500",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Ensuring websites look and work perfectly across all devices and screen sizes.",
    color: "from-indigo-500 to-violet-500",
  },
];

const Services = () => {
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
    <section id="services" ref={sectionRef} className="py-20 px-4 relative overflow-hidden">
      {/* Background Sparkles */}
      <div className="absolute top-10 right-10 text-primary/10 animate-pulse">
        <Sparkles size={60} />
      </div>
      <div className="absolute bottom-10 left-10 text-primary/10 animate-pulse" style={{ animationDelay: "1s" }}>
        <Sparkles size={40} />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className={`section-title transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            My <span className="text-primary glow-text">Services</span>
          </h2>
          <p className={`text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            Professional services I offer to help bring your digital vision to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group p-8 bg-card rounded-2xl border border-border hover-lift relative overflow-hidden transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

              <div className="relative z-10">
                {/* Icon with animated background */}
                <div className="relative w-16 h-16 mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-xl opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-300`} />
                  <div className="relative w-full h-full flex items-center justify-center">
                    <service.icon className="text-primary group-hover:scale-110 transition-transform duration-300" size={32} />
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                  {service.title}
                  <ArrowRight className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" size={18} />
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Corner Decorations */}
              <div className="absolute -bottom-2 -right-2 w-20 h-20 border-2 border-primary/10 rounded-full group-hover:border-primary/30 group-hover:scale-110 transition-all duration-300" />
              <div className="absolute -top-2 -left-2 w-10 h-10 border-2 border-primary/10 rounded-full group-hover:border-primary/30 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
