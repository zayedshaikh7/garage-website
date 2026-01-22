import { useState, useEffect } from 'react';
import { Menu, X, Clock, Phone } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const whatsappNumber = '918779405347';
  const whatsappMessage = 'Hi! I would like to book an appointment for my car service.';
  
  // Construct the WhatsApp URL
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMenuOpen(false); 
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/95 shadow-xl' : 'bg-transparent'}`}>
      
      <div className="hidden lg:flex bg-[#FFC107] text-black py-2 px-6 justify-end gap-6 text-sm font-bold uppercase tracking-tighter">
        <div className="flex items-center gap-2">
          <Clock size={16}/> Mon-Sat: 10:00 AM - 7:00 PM
        </div>
        <div className="flex items-center gap-2">
          <Phone size={16}/> +91 97692 73583
        </div>
      </div>

      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div 
          className="flex items-center gap-4 cursor-pointer" 
          onClick={() => scrollToSection('home')}
        >
          <img 
            src="/logo.jpeg" 
            alt="United Garage" 
            className="h-12 w-12 md:h-16 md:w-16 rounded-full object-cover border-2 border-[#FFC107]" 
          />
          <span className="text-white hover:text-[#FFC107] font-bold uppercase text-sm tracking-widest transition-colors">
            United Auto
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
          {/* Desktop WhatsApp Link */}
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
          className="md:hidden text-white" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black/95 border-t border-white/10 flex flex-col p-6 gap-6 md:hidden">
          {['Home', 'Services', 'About', 'Gallery'].map((item) => (
            <button 
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-white text-left font-bold uppercase text-lg tracking-widest"
            >
              {item}
            </button>
          ))}
          {/* Mobile WhatsApp Link */}
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="bg-[#FFC107] text-black px-6 py-4 font-black uppercase text-center"
          >
            Book Appointment
          </a>
        </div>
      )}
    </header>
  );
}