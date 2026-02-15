import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const whatsappNumber = '918779405347';
  const whatsappMessage = 'Hi! I would like to book an appointment for my car service.';
  
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  useEffect(() => {
    const handleScroll = () => {
      if (!isMenuOpen) {
        setIsScrolled(window.scrollY > 50);
      }
    };
    window.addEventListener('scroll', handleScroll);
    
    // Background website scroll lock
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const scrollToSection = (id) => {
    setIsMenuOpen(false); 
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Navigation Header */}
      <header className={`fixed top-0 left-0 w-full z-[300] transition-all duration-300 ${
        isScrolled || isMenuOpen ? 'bg-black shadow-xl' : 'bg-transparent'
      }`}>
        <nav className="container mx-auto px-5 py-4 flex justify-between items-center">
          {/* Logo & Brand */}
          <div className="flex items-center gap-4 cursor-pointer z-[310]" onClick={() => scrollToSection('home')}>
            <img 
              src="/logo.jpeg" 
              alt="United Garage" 
              className="h-14 w-14 md:h-20 md:w-20 rounded-full object-cover border-2 border-[#FFC107]" 
            />
            <div className="flex flex-col">
              <span className="text-white font-black uppercase text-lg md:text-2xl leading-none">United Auto</span>
              <span className="text-[#FFC107] font-bold uppercase text-[10px] md:text-xs tracking-widest leading-none mt-1">Garage & Care</span>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {['Home', 'Services', 'About', 'Gallery'].map((item) => (
              <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="text-white hover:text-[#FFC107] font-bold uppercase text-sm tracking-widest">
                {item}
              </button>
            ))}
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-[#FFC107] text-black px-6 py-3 font-black uppercase skew-x-[-12deg]">
              <span className="inline-block skew-x-[12deg]">Appointment</span>
            </a>
          </div>

          {/* Bold Yellow X Button */}
          <button className="md:hidden text-white p-2 z-[310]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={44} strokeWidth={3} className="text-[#FFC107]" /> : <Menu size={40} />}
          </button>
        </nav>
      </header>

      {/* MOBILE MENU OVERLAY - Now Scrollable */}
      <div className={`fixed inset-0 bg-black z-[250] md:hidden transition-all duration-300 ease-in-out overflow-y-auto ${
        isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        {/* Content Container with enough padding for scrolling */}
        <div className="flex flex-col min-h-screen px-10 pt-32 pb-20 gap-8">
          {['Home', 'Services', 'About', 'Gallery'].map((item) => (
            <button 
              key={item} 
              onClick={() => scrollToSection(item.toLowerCase())} 
              className="text-white text-left font-black uppercase text-5xl italic tracking-tighter border-b border-white/10 pb-4 active:text-[#FFC107]"
            >
              {item}
            </button>
          ))}
          
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-[#FFC107] text-black px-6 py-6 font-black uppercase text-center text-2xl mt-4"
          >
            Book Appointment
          </a>

          {/* Contact Details */}
          <div className="mt-10 space-y-6">
            <div>
              <p className="text-[#FFC107] font-bold text-xs tracking-widest uppercase">Working Hours</p>
              <p className="text-white font-bold text-lg">MON-SAT: 10AM - 7PM</p>
            </div>
            
            <div>
              <p className="text-[#FFC107] font-bold text-xs tracking-widest uppercase">Emergency Call</p>
              <p className="text-white font-black text-3xl italic">+91 97692 73583</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}