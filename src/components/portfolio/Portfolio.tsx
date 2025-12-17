import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, Eye, Folder, Star } from "lucide-react";

const projects = [
  {
    title: "Salon Shop Website",
    description:
      "A modern and elegant website for a beauty salon featuring appointment booking, service showcase, and responsive design.",
    image: "https://antdisplay.com/pub/media/Blog/salon_shop_4.jpg",
    tags: ["React", "Tailwind CSS", "Node.js"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Healthcare Platform",
    description:
      "A comprehensive healthcare website with doctor listings, appointment scheduling, and patient portal features.",
    image: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/health/wp-content/uploads/2022/11/960x0.jpg",
    tags: ["WordPress", "PHP", "MySQL"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "E-Commerce Store",
    description:
      "A fully functional online store with product catalog, shopping cart, and secure checkout integration.",
    image: "https://tse1.mm.bing.net/th/id/OIP.o9mS0bwAze7ervtE3PpiCQHaEn?cb=ucfimg2&ucfimg=1&w=1240&h=772&rs=1&pid=ImgDetMain&o=7&rm=3",
    tags: ["React", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
];

const Portfolio = () => {
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
    <section id="portfolio" ref={sectionRef} className="py-20 px-4 bg-card/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className={`section-title transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            Latest <span className="text-primary glow-text">Projects</span>
          </h2>
          <p className={`text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            A showcase of my recent work and creative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group bg-background rounded-2xl overflow-hidden border border-border hover-lift relative transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-20 flex items-center gap-1 px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-bold rounded-full">
                  <Star size={12} fill="currentColor" />
                  Featured
                </div>
              )}

              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
                
                {/* Hover Overlay with Buttons */}
                <div className="absolute inset-0 bg-primary/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.liveUrl}
                    className="w-14 h-14 bg-background rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 shadow-lg"
                    aria-label="View Live"
                  >
                    <Eye size={22} />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="w-14 h-14 bg-background rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 shadow-lg"
                    aria-label="View Code"
                  >
                    <Github size={22} />
                  </a>
                  <a
                    href={project.liveUrl}
                    className="w-14 h-14 bg-background rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 shadow-lg"
                    aria-label="External Link"
                  >
                    <ExternalLink size={22} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                    <Folder className="text-primary" size={20} />
                    {project.title}
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/30 hover:bg-primary/20 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
