import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Download, ChevronDown, Sparkles, Code2, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.png";

const roles = ["Front-end Developer", "Web Designer", "React Developer"];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentRole.length) {
            setDisplayText(currentRole.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:elakkia2019@gmail.com", label: "Email" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-10 px-4 relative overflow-hidden"
    >
      {/* Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${Math.random() * 10 + 15}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Icons */}
      <div className="absolute top-32 left-10 text-primary/20 icon-float" style={{ animationDelay: "0s" }}>
        <Code2 size={40} />
      </div>
      <div className="absolute top-52 right-20 text-primary/20 icon-float" style={{ animationDelay: "1s" }}>
        <Sparkles size={30} />
      </div>
      <div className="absolute bottom-40 left-20 text-primary/20 icon-float" style={{ animationDelay: "2s" }}>
        <Rocket size={35} />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-20 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="animate-slide-right" style={{ animationDelay: "0.1s", opacity: 0 }}>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-medium mb-6">
                <Sparkles size={16} className="animate-pulse" />
                Welcome to my Portfolio
              </span>
            </div>
            
            <p className="text-lg text-muted-foreground mb-2 animate-slide-right" style={{ animationDelay: "0.2s", opacity: 0 }}>
              Hello, It's Me
            </p>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-slide-right" style={{ animationDelay: "0.3s", opacity: 0 }}>
              <span className="text-foreground">Elakkia </span>
              <span className="text-primary glow-text animate-pulse">A</span>
            </h1>
            
            <div className="text-xl md:text-2xl mb-6 h-8 animate-slide-right" style={{ animationDelay: "0.4s", opacity: 0 }}>
              <span className="text-muted-foreground">And I'm a </span>
              <span className="text-primary font-semibold">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </div>
            
            <p className="text-muted-foreground max-w-lg mb-8 leading-relaxed animate-slide-right" style={{ animationDelay: "0.5s", opacity: 0 }}>
              Passionate Front-end Developer at Versa Forge with expertise in creating 
              beautiful, responsive, and user-friendly web applications using modern 
              technologies like React, Node.js, and WordPress.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start mb-8 animate-slide-right" style={{ animationDelay: "0.6s", opacity: 0 }}>
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 btn-glow hover:scale-110 animate-glow-ring"
                  aria-label={social.label}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>

            {/* Download CV Button */}
            <div className="animate-slide-right" style={{ animationDelay: "0.7s", opacity: 0 }}>
              <a href="/Elakkia_Resume.pdf" download>
                <Button className="btn-glow bg-primary text-primary-foreground font-semibold px-8 py-6 text-lg rounded-full group">
                  <Download className="mr-2 group-hover:animate-bounce" size={20} />
                  Download CV
                  <Sparkles className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
                </Button>
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end animate-slide-left" style={{ animationDelay: "0.3s", opacity: 0 }}>
            <div className="relative animate-float">
              {/* Rotating Ring */}
              <div className="absolute -inset-4 rounded-full border-2 border-dashed border-primary/30 animate-spin-slow" />
              
              {/* Hexagonal Frame */}
              <div className="w-72 h-80 md:w-80 md:h-96 hexagon-frame overflow-hidden border-glow animate-pulse-glow relative">
                <img
                  src={profileImage}
                  alt="Elakkia A - Front-end Developer"
                  className="w-full h-full object-cover"
                />
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-primary/30 hexagon-frame animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-primary/30 hexagon-frame animate-pulse" style={{ animationDelay: "0.5s" }} />
              
              {/* Floating Badges */}
              <div className="absolute -right-8 top-1/4 bg-card border border-border rounded-lg px-3 py-2 shadow-lg animate-bounce-in" style={{ animationDelay: "1s", opacity: 0 }}>
                <span className="text-primary text-sm font-bold">2+ Years</span>
              </div>
              <div className="absolute -left-8 bottom-1/4 bg-card border border-border rounded-lg px-3 py-2 shadow-lg animate-bounce-in" style={{ animationDelay: "1.2s", opacity: 0 }}>
                <span className="text-primary text-sm font-bold">15+ Projects</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <span className="text-sm">Scroll Down</span>
            <ChevronDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
