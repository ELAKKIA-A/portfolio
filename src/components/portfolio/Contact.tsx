import { useState, useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent! ✨",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "elakkia2019@gmail.com",
      href: "mailto:elakkia2019@gmail.com",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 XXXXX XXXXX",
      href: "tel:+91XXXXXXXXXX",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Tirunelveli, Tamil Nadu, India",
      href: "#",
      color: "from-orange-500 to-red-500",
    },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub", color: "hover:bg-gray-800" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", color: "hover:bg-blue-600" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter", color: "hover:bg-sky-500" },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 px-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 text-primary/10 animate-pulse">
        <MessageCircle size={80} />
      </div>
      <div className="absolute bottom-20 right-10 text-primary/10 animate-pulse" style={{ animationDelay: "1s" }}>
        <Sparkles size={60} />
      </div>
      <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className={`section-title transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            Contact <span className="text-primary glow-text">Me</span>
          </h2>
          <p className={`text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}>
            <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
              <MessageCircle className="text-primary" size={28} />
              Let's work together
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or 
              opportunities to be part of your vision. Let's create something 
              amazing together!
            </p>

            <div className="space-y-6 mb-10">
              {contactInfo.map((info, index) => (
                <a
                  key={info.label}
                  href={info.href}
                  className={`flex items-center gap-4 group transition-all duration-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className={`relative w-14 h-14 rounded-xl flex items-center justify-center overflow-hidden group-hover:scale-110 transition-all duration-300`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-20 group-hover:opacity-40 transition-opacity`} />
                    <info.icon className="text-primary relative z-10" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="text-foreground font-medium group-hover:text-primary transition-colors duration-300">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-foreground flex items-center gap-2">
                <Sparkles className="text-primary" size={20} />
                Follow Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-full border-2 border-primary/50 flex items-center justify-center text-primary hover:text-primary-foreground transition-all duration-300 btn-glow hover:scale-110 ${social.color} ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
                    aria-label={social.label}
                    style={{ transitionDelay: `${600 + index * 100}ms` }}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`bg-card p-8 rounded-2xl border border-border relative overflow-hidden transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}>
            {/* Decorative corner */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-sm font-medium mb-2 text-foreground group-focus-within:text-primary transition-colors">
                    Your Name
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="bg-background border-border focus:border-primary transition-all duration-300"
                  />
                </div>
                <div className="group">
                  <label className="block text-sm font-medium mb-2 text-foreground group-focus-within:text-primary transition-colors">
                    Your Email
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="bg-background border-border focus:border-primary transition-all duration-300"
                  />
                </div>
              </div>
              <div className="group">
                <label className="block text-sm font-medium mb-2 text-foreground group-focus-within:text-primary transition-colors">
                  Subject
                </label>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  required
                  className="bg-background border-border focus:border-primary transition-all duration-300"
                />
              </div>
              <div className="group">
                <label className="block text-sm font-medium mb-2 text-foreground group-focus-within:text-primary transition-colors">
                  Message
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  rows={5}
                  className="bg-background border-border focus:border-primary resize-none transition-all duration-300"
                />
              </div>
              <Button
                type="submit"
                className="w-full btn-glow bg-primary text-primary-foreground font-semibold py-6 rounded-xl group"
              >
                <Send className="mr-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
                Send Message
                <Sparkles className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
