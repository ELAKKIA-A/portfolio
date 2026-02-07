import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useCallback, useEffect } from 'react';
import { Award, X, ChevronLeft, ChevronRight, BadgeCheck, Sparkles, ZoomIn, ExternalLink } from 'lucide-react';
import novitechCert from '@/assets/certificates/novitech-cert.jpg';

const certificates = [
  {
    title: 'Full Stack Development MasterClass',
    issuer: 'NoviTech R&D Pvt. Ltd.',
    image: novitechCert,
    link: '#',
    date: '2023',
    verified: true,
  },
  {
    title: 'Meta Front-End Developer',
    issuer: 'Coursera / Meta',
    image: 'https://images.unsplash.com/photo-1496200186974-4293800e2c20?w=400&h=300&fit=crop',
    link: '#',
    date: '2023',
    verified: true,
  },
  {
    title: 'AWS Certified Developer',
    issuer: 'Amazon Web Services',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop',
    link: '#',
    date: '2023',
    verified: true,
  },
  {
    title: 'Google UX Design',
    issuer: 'Google / Coursera',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
    link: '#',
    date: '2022',
    verified: true,
  },
  {
    title: 'Microsoft AI Skills Challenge',
    issuer: 'Microsoft Learning',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop',
    link: '#',
    date: '2023',
    verified: true,
  },
];

const Certificates = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [popupImage, setPopupImage] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || popupImage) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % certificates.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [isPaused, popupImage]);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
  }, []);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  }, []);

  // Get offset from center for coverflow effect - FIXED for exactly 3 cards
  const getOffset = (index: number) => {
    let diff = index - currentIndex;
    if (diff > 1) diff -= certificates.length;  // Max right: +1
    if (diff < -1) diff += certificates.length;  // Max left: -1
    return diff;
  };

  return (
    <>
      <section id="certificates" className="py-20 sm:py-28 md:py-36 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />

        <div className="container mx-auto px-4 sm:px-6">
          <div ref={ref} className="max-w-6xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center "
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.1 }}
                className="skill-badge mb-3 inline-flex items-center gap-2"
              >
                <Sparkles size={14} />
                Achievements
              </motion.span>
              <h2 className="section-title">
                Certifications & <span className="gradient-text">Credentials</span>
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-sm sm:text-base">
                Professional certifications validating my technical expertise
              </p>
            </motion.div>

            {/* Coverflow Carousel */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Nav Buttons */}
              <button
                onClick={prev}
                className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-card border border-border flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-lg"
                aria-label="Previous certificate"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-card border border-border flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-lg"
                aria-label="Next certificate"
              >
                <ChevronRight size={20} />
              </button>

              {/* Coverflow Cards */}
              <div className="relative h-[340px] sm:h-[400px] md:h-[440px] flex items-center justify-center mx-10 sm:mx-16">
                {certificates.map((cert, index) => {
                  const offset = getOffset(index);
                  const absOffset = Math.abs(offset);
                  const isCenter = offset === 0;
                  const isVisible = absOffset <= 1;  // Only center (0), left(-1), right(+1) = exactly 3 cards

                  if (!isVisible) return null;

                  // Scale & positioning
                  const scale = isCenter ? 1 : 0.82;
                  const zIndex = isCenter ? 20 : 10;
                  const opacity = isCenter ? 1 : 0.85;
                  // Horizontal offset (responsive)
                  const xPercent = offset * 105;

                  return (
                    <motion.div
                      key={index}
                      className="absolute w-[260px] sm:w-[300px] md:w-[340px]"
                      animate={{
                        x: `${xPercent}%`,
                        scale,
                        opacity,
                        zIndex,
                      }}
                      transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                      style={{ zIndex }}
                    >
                      <CertificateCard
                        cert={cert}
                        isCenter={isCenter}
                        onImageClick={setPopupImage}
                      />
                    </motion.div>
                  );
                })}
              </div>

              {/* Pagination Dots */}
              <div className="flex justify-center items-center gap-2.5 mt-6">
                {certificates.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to certificate ${idx + 1}`}
                    className={`rounded-full transition-all duration-300 ${
                      idx === currentIndex
                        ? 'w-9 h-3 bg-primary shadow-[0_0_12px_hsl(var(--glow))]'
                        : 'w-3 h-3 bg-primary/20 hover:bg-primary/40'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fullscreen Image Popup */}
      <AnimatePresence>
        {popupImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/80 backdrop-blur-md p-4 sm:p-8"
            onClick={() => setPopupImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className="relative max-w-4xl w-full max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setPopupImage(null)}
                className="absolute -top-4 -right-4 sm:-top-5 sm:-right-5 z-10 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200 shadow-xl"
                aria-label="Close preview"
              >
                <X size={18} />
              </button>
              <img
                src={popupImage}
                alt="Certificate preview"
                className="w-full h-auto max-h-[85vh] object-contain rounded-2xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

interface CertificateCardProps {
  cert: (typeof certificates)[0];
  isCenter: boolean;
  onImageClick: (image: string) => void;
}

const CertificateCard = ({ cert, isCenter, onImageClick }: CertificateCardProps) => (
  <motion.article
    className={`glass-card overflow-hidden group transition-shadow duration-300 ${
      isCenter ? 'shadow-2xl shadow-primary/10 ring-1 ring-primary/10' : 'shadow-lg'
    }`}
    whileHover={isCenter ? { y: -4 } : {}}
    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
  >
    {/* Image */}
    <div
      className="relative h-40 sm:h-48 md:h-52 overflow-hidden cursor-zoom-in"
      onClick={() => onImageClick(cert.image)}
    >
      <img
        src={cert.image}
        alt={cert.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

      {/* Zoom overlay */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-foreground/20">
        <div className="w-10 h-10 rounded-full bg-card/90 flex items-center justify-center">
          <ZoomIn className="w-5 h-5 text-primary" />
        </div>
      </div>

      {/* Award badge */}
      <div className="absolute top-3 right-3">
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg">
          <Award className="w-4 h-4 text-primary-foreground" />
        </div>
      </div>

      {/* Year badge */}
      <div className="absolute top-3 left-3">
        <span className="px-3 py-1 text-xs font-bold bg-card/90 backdrop-blur-sm text-foreground rounded-full border border-border">
          {cert.date}
        </span>
      </div>
    </div>

    {/* Content */}
    <div className="p-4 sm:p-5">
      <div className="flex items-start gap-2 mb-1.5">
        <h3 className="font-heading font-bold text-sm sm:text-base leading-tight group-hover:text-primary transition-colors duration-300 line-clamp-2">
          {cert.title}
        </h3>
        {cert.verified && (
          <BadgeCheck className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
        )}
      </div>
      <p className="text-xs text-muted-foreground mb-3">{cert.issuer}</p>
      <a
        href={cert.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
        onClick={(e) => e.stopPropagation()}
      >
        View Certificate <ExternalLink className="w-3 h-3" />
      </a>
    </div>
  </motion.article>
);

export default Certificates;
