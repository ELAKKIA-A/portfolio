import { useEffect, useRef, useState } from "react";
import { User, Briefcase, MapPin, Calendar, Award, Heart, Coffee, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.png";

const About = () => {
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

  const stats = [
    { label: "Years Experience", value: "2+", icon: Calendar },
    { label: "Projects Completed", value: "15+", icon: Award },
    { label: "Technologies", value: "10+", icon: Zap },
    { label: "Happy Clients", value: "20+", icon: Heart },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className={`section-title transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            About <span className="text-primary glow-text">Me</span>
          </h2>
          <p className={`text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            Get to know more about my journey, skills, and what drives me as a developer.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <div className={`flex-1 flex justify-center transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}>
            <div className="relative group">
              <div className="w-64 h-72 md:w-72 md:h-80 hexagon-frame overflow-hidden border-glow group-hover:scale-105 transition-transform duration-500">
                <img
                  src={profileImage}
                  alt="Elakkia A"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -z-10 top-4 left-4 w-64 h-72 md:w-72 md:h-80 hexagon-frame bg-primary/20 group-hover:top-6 group-hover:left-6 transition-all duration-500" />
              
              {/* Coffee Badge */}
              <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-full p-3 shadow-lg animate-bounce-in" style={{ animationDelay: "0.5s" }}>
                <Coffee className="text-primary" size={24} />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`flex-1 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}>
            <h3 className="text-2xl font-bold mb-2">
              Front-end Developer at{" "}
              <span className="text-primary">Versa Forge</span>
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm a passionate Front-end Developer with a keen eye for design and a 
              love for creating seamless user experiences. With expertise in React.js, 
              Node.js, and WordPress, I build responsive and modern web applications 
              that not only look great but also perform exceptionally well.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              My journey in web development started with a curiosity for how things 
              work on the internet, and it has evolved into a fulfilling career where 
              I get to solve problems and create digital experiences that make a 
              difference.
            </p>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: User, label: "Elakkia A" },
                { icon: Briefcase, label: "Versa Forge" },
                { icon: MapPin, label: "Tirunelveli, India" },
                { icon: Calendar, label: "2+ Years Exp" },
              ].map((item, index) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-3 text-muted-foreground group hover:text-foreground transition-all duration-300 delay-${index * 100}`}
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <item.icon className="text-primary" size={18} />
                  </div>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>

            <a href="#contact">
              <Button className="btn-glow bg-primary text-primary-foreground font-semibold px-8 py-6 rounded-full group">
                Contact Me
                <Zap className="ml-2 group-hover:animate-pulse" size={18} />
              </Button>
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center p-6 rounded-xl bg-card border border-border hover-lift group transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <stat.icon className="text-primary" size={28} />
              </div>
              <h4 className="text-4xl font-bold text-primary mb-2">{stat.value}</h4>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
