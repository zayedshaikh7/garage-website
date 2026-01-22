import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "BMW 5 Series Owner",
    content: "The diagnostics for my BMW were spot on. Most garages just guess, but these guys have the actual dealer-level tools. Highly recommended for German car owners.",
    rating: 5
  },
  {
    id: 2,
    name: "Anita Desai",
    role: "Mercedes GLE Owner",
    content: "Premium servicing at a fraction of the showroom cost. My GLE feels brand new. Transparent pricing and very professional staff.",
    rating: 5
  },
  {
    id: 3,
    name: "Vikram Singh",
    role: "Audi A6 Owner",
    content: "Expert care! They handled my transmission repair with precision. The 'Before & After' photos they showed me gave me total peace of mind.",
    rating: 5
  },
  {
    id: 4,
    name: "Sanjay Mehra",
    role: "Volkswagen Tiguan Owner",
    content: "Finally a workshop that understands German engineering. Great attention to detail and genuine parts used throughout.",
    rating: 5
  }
];

export default function Reviews() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextStep();
    }, 5000);
    return () => clearInterval(timer);
  }, [index]);

  const nextStep = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevStep = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 200 : -200,
      opacity: 0,
      scale: 0.9
    })
  };

  return (
    <section id="reviews" className="py-24 bg-neutral-950 overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic">
            Client <span className="text-[#FFC107]">Feedback</span>
          </h2>
          <div className="h-2 w-24 bg-[#FFC107] mx-auto mt-4" />
        </div>

        <div className="max-w-4xl mx-auto relative px-12">
          <Quote className="absolute -top-10 -left-2 text-white/5 w-32 h-32 rotate-12" />
          
          <div className="relative h-[400px] md:h-[300px] flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 }
                }}
                className="absolute w-full"
              >
                <div className="bg-neutral-900 border-2 border-white/5 rounded-[2rem] p-8 md:p-12 shadow-2xl">
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(reviews[index].rating)].map((_, i) => (
                      <Star key={i} size={20} className="fill-[#FFC107] text-[#FFC107]" />
                    ))}
                  </div>

                  {/* Review Content */}
                  <p className="text-xl md:text-2xl text-gray-200 italic font-medium leading-relaxed mb-8">
                    "{reviews[index].content}"
                  </p>

                  {/* Reviewer Info */}
                  <div className="flex items-center justify-between border-t border-white/10 pt-6">
                    <div>
                      <h4 className="text-white font-black uppercase italic tracking-wider text-lg">
                        {reviews[index].name}
                      </h4>
                      <div className="flex items-center gap-2 text-[#FFC107] text-sm font-bold uppercase">
                        {reviews[index].role}
                        <CheckCircle size={14} className="text-blue-400" />
                        <span className="text-[10px] text-gray-500 tracking-tighter">Verified Owner</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Manual Controls */}
          <button 
            onClick={prevStep}
            className="absolute left-0 top-1/2 -translate-y-1/2 text-white/20 hover:text-[#FFC107] transition-colors"
          >
            <ChevronLeft size={48} />
          </button>
          <button 
            onClick={nextStep}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-white/20 hover:text-[#FFC107] transition-colors"
          >
            <ChevronRight size={48} />
          </button>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                i === index ? 'w-12 bg-[#FFC107]' : 'w-6 bg-white/10'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}