import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Certificates from '@/components/Certificates';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import TechnologiesLogo from '@/components/TechnologiesLogoSlider';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <TechnologiesLogo/>
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <CTA />
        <Certificates />
        
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;