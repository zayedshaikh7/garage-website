import { useState, useEffect } from 'react';
import { Menu, X, Clock, Phone } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const whatsappNumber = '918779405347';
  const whatsappMessage = 'Hi! I would like to book an appointment for my car service.';
  
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    // Body lock logic when mobile menu is open
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

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false); 
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        // Offset for the fixed header height
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <header className={`fixed w-full z-[100] transition-all duration-300 ${
      isScrolled || isMenuOpen ? 'bg-black/90 backdrop-blur-md shadow-xl' : 'bg-transparent'
    }`}>
      
      {/* Top Bar - Hidden on mobile for better spacing */}
      <div className="hidden lg:flex bg-[#FFC107] text-black py-2 px-6 justify-end gap-6 text-sm font-bold uppercase tracking-tighter">
        <div className="flex items-center gap-2">
          <Clock size={16}/> Mon-Sat: 10:00 AM - 7:00 PM
        </div>
        <div className="flex items-center gap-2">
          <Phone size={16}/> +91 97692 73583
        </div>
      </div>

      <nav className="container mx-auto px-5 py-3 md:py-4 flex justify-between items-center">
        <div 
          className="flex items-center gap-2 md:gap-4 cursor-pointer" 
          onClick={() => scrollToSection('home')}
        >
          <img 
            src="/logo.jpeg" 
            alt="United Garage" 
            className="h-10 w-10 md:h-16 md:w-16 rounded-full object-cover border-2 border-[#FFC107]" 
          />
          <span className="text-white hover:text-[#FFC107] font-black uppercase text-[10px] md:text-sm tracking-widest transition-colors leading-none">
            United <br className="md:hidden" /> Auto
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {['Home', 'Services', 'About', 'Gallery'].map((item) => (
            <button 
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-white hover:text-[#FFC107] font-bold uppercase text-sm tracking-widest transition-colors"
            >
              {item}
            </button>
          ))}
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FFC107] hover:bg-yellow-500 text-black px-6 py-3 font-black uppercase skew-x-[-12deg] transition-all"
          >
            <span className="inline-block skew-x-[12deg]">Appointment</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white p-2 focus:outline-none" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={28} className="text-[#FFC107]" /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed top-[64px] md:top-[72px] left-0 w-full h-[calc(100vh-64px)] bg-black/95 backdrop-blur-xl flex flex-col p-8 gap-6 md:hidden z-[100] border-t border-white/10 overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-300">
          {['Home', 'Services', 'About', 'Gallery'].map((item) => (
            <button 
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-white text-left font-black uppercase text-3xl italic tracking-widest border-b border-white/5 pb-4 active:text-[#FFC107] transition-colors"
            >
              {item}
            </button>
          ))}
          
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="bg-[#FFC107] text-black px-6 py-5 font-black uppercase text-center text-xl mt-4 shadow-[0_0_20px_rgba(255,193,7,0.3)]"
          >
            Book Appointment
          </a>

          <div className="mt-auto text-center space-y-4 pb-10">
            <div className="flex flex-col gap-1">
              <p className="text-[#FFC107] font-bold text-xs tracking-widest uppercase opacity-80">Working Hours</p>
              <p className="text-white font-bold text-sm">MON-SAT: 10AM - 7PM</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[#FFC107] font-bold text-xs tracking-widest uppercase opacity-80">Emergency Call</p>
              <p className="text-white font-black text-2xl">+91 97692 73583</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}