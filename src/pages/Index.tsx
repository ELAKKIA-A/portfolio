import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import TechSlider from "@/components/portfolio/TechSlider";
import Experience from "@/components/portfolio/Experience";
import Portfolio from "@/components/portfolio/Portfolio";
import Certificate from "@/components/portfolio/Certificate";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <TechSlider />
      <Experience />
      <Portfolio />
      <Certificate />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
