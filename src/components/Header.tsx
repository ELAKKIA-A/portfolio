import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "../assets/logo.webp";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");

  /* Sticky header background */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Active section detection */
  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHash(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  /* Smooth scroll */
  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);

    setTimeout(() => {
      const element = document.querySelector(href);
      if (!element) return;

      const headerOffset = 80;
      const top =
        element.getBoundingClientRect().top +
        window.pageYOffset -
        headerOffset;

      window.scrollTo({ top, behavior: "smooth" });
    }, 300);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-3 bg-primary shadow-md" : "py-4 bg-primary/90"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-14 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home");
          }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <img src={Logo} alt="Logo" className="h-10 w-auto" />
        </motion.a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`relative group text-sm font-bold transition-all duration-300 ease-out 
                ${
                  activeHash === item.href
                    ? "text-white"
                    : "text-gray-200 hover:text-white"
                }
                hover:-translate-y-[2px]
              `}
            >
              <span className="relative inline-block">
                {item.name}

                {/* Hover underline */}
                {/* <span
                  className={`absolute -bottom-2 left-0 h-[3px] w-full rounded-full bg-white
                    scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left
                    ${activeHash === item.href ? "hidden" : ""}
                  `}
                /> */}

                {/* Active underline */}
                {activeHash === item.href && (
                  <motion.span
                    layoutId="active-underline"
                    className="absolute -bottom-2 left-0 h-[3px] w-full rounded-full bg-white shadow-md"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
              </span>
            </motion.a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 rounded-lg bg-white text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t mt-5 shadow-lg"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`relative overflow-hidden text-base font-medium py-3 px-4 rounded-lg transition-all duration-300
                    ${
                      activeHash === item.href
                        ? "bg-primary text-white shadow-md"
                        : "text-foreground hover:text-primary"
                    }
                  `}
                >
                  <span className="absolute inset-0 bg-primary/10 translate-x-[-100%] hover:translate-x-0 transition-transform duration-300"></span>
                  <span className="relative z-10">{item.name}</span>
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
