import { useEffect, useRef, useState } from "react";
import { Award, ExternalLink, Calendar, Building2, BadgeCheck } from "lucide-react";

const certificates = [
  {
    title: "React Developer Certification",
    issuer: "Meta",
    date: "2023",
    credentialId: "META-REACT-2023",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&q=80",
    link: "#",
  },
  {
    title: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    date: "2023",
    credentialId: "FCC-JS-2023",
    image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&q=80",
    link: "#",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "2022",
    credentialId: "FCC-RWD-2022",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    link: "#",
  },
  {
    title: "Front-End Development Libraries",
    issuer: "freeCodeCamp",
    date: "2023",
    credentialId: "FCC-FEL-2023",
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&q=80",
    link: "#",
  },
  {
    title: "WordPress Development",
    issuer: "Udemy",
    date: "2022",
    credentialId: "UDEMY-WP-2022",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80",
    link: "#",
  },
  {
    title: "UI/UX Design Fundamentals",
    issuer: "Google",
    date: "2023",
    credentialId: "GOOGLE-UX-2023",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=80",
    link: "#",
  },
];

const Certificate = () => {
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
    <section id="certificate" ref={sectionRef} className="py-20 px-4 bg-card/50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className={`section-title transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            My <span className="text-primary glow-text">Certificates</span>
          </h2>
          <p className={`text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            Professional certifications and achievements that validate my expertise.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={cert.title}
              className={`group bg-background rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 hover-lift ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {/* Certificate Image */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                
                {/* Badge */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-primary/90 rounded-full flex items-center justify-center shadow-lg">
                  <BadgeCheck className="text-primary-foreground" size={20} />
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                    <Award className="text-primary" size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {cert.title}
                    </h3>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Building2 size={14} className="text-primary flex-shrink-0" />
                    <span>{cert.issuer}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar size={14} className="text-primary flex-shrink-0" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <span className="text-xs text-muted-foreground font-mono">
                    ID: {cert.credentialId}
                  </span>
                  <a
                    href={cert.link}
                    className="flex items-center gap-1 text-primary text-sm font-medium hover:underline"
                  >
                    View
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificate;
