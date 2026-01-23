import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const whatsappNumber = '918779405347';
  const whatsappMessage = 'Hi! I would like to book an appointment for my car service.';

  const slides = [
    { title: "Expert Auto Repair", highlight: "& Maintenance", img: "hero.jpeg" },
    { title: "Preventative", highlight: "Maintenance", img: "/service1.jpeg" },
    { title: "Brake & Service", highlight: "Specialists", img: "/service2.jpeg" },
    { title: "Advanced Engine", highlight: "Diagnostics", img: "/service3.jpeg" }
  ];

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section 
      id="hero" 
      onClick={handleNextSlide}
      className="relative min-h-[90vh] flex items-center bg-black overflow-hidden cursor-pointer select-none"
    >
      {/* BACKGROUND LAYER */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.5, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <motion.img
            src={slides[currentSlide].img}
            className="w-full h-full object-cover"
            alt={slides[currentSlide].title}
            animate={{ scale: [1, 1.05] }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />

      {/* CONTENT LAYER - Fixed Overlap */}
      <div className="container mx-auto px-6 relative z-20 pointer-events-none pt-20">
        <div className="max-w-2xl">
          <p className="text-[#FFC107] font-bold uppercase tracking-[0.3em] mb-4 text-xs md:text-sm">
            Premium Automotive Care
          </p>
          
          {/* Changed from absolute/fixed height to relative/flex for mobile space */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-6xl font-black text-white leading-tight uppercase italic">
                  {slides[currentSlide].title} <br />
                  <span className="text-[#FFC107]">{slides[currentSlide].highlight}</span>
                </h1>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-10">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()} 
              className="inline-block bg-[#FFC107] hover:bg-yellow-500 text-black px-8 py-4 md:px-10 md:py-4 font-black uppercase skew-x-[-10deg] transition-all pointer-events-auto shadow-lg"
            >
              <span className="inline-block skew-x-[10deg]">Book Appointment</span>
            </a>
          </div>
        </div>
      </div>

      {/* SPECIALIZATION TEXT - Moved slightly for better mobile visibility */}
      <div className="absolute bottom-12 left-6 z-30 pointer-events-none">
        <p className="text-white text-xs md:text-base font-bold uppercase tracking-widest italic leading-tight">
          Specialize in <br />
          <span className="text-[#FFC107] text-sm md:text-lg">German Cars</span>
        </p>
      </div>

      {/* PROGRESS INDICATORS */}
      <div className="absolute bottom-12 right-6 flex items-center gap-2 z-30">
        {slides.map((_, i) => (
          <div 
            key={i} 
            className={`h-[3px] transition-all duration-700 ${
              i === currentSlide ? 'w-8 md:w-12 bg-[#FFC107]' : 'w-4 md:w-6 bg-white/20'
            }`}
          />
        ))}
      </div>
    </section>
  );
}