import { Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-10 px-4 bg-card border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#home" className="text-2xl font-bold">
            <span className="text-primary glow-text">Elakkia</span>
            <span className="text-foreground">.</span>
          </a>

          {/* Copyright */}
          <p className="text-muted-foreground text-center flex items-center gap-2">
            © {new Date().getFullYear()} Made with{" "}
            <Heart className="text-red-500 fill-red-500" size={16} /> by Elakkia A
          </p>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors duration-300 btn-glow"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
