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
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-black shadow-xl' : 'bg-transparent'}`}>
      
      {/* Top Bar - Hidden on mobile for better spacing */}
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
          className="flex items-center gap-3 md:gap-4 cursor-pointer" 
          onClick={() => scrollToSection('home')}
        >
          <img 
            src="/logo.jpeg" 
            alt="United Garage" 
            className="h-10 w-10 md:h-16 md:w-16 rounded-full object-cover border-2 border-[#FFC107]" 
          />
          <span className="text-white hover:text-[#FFC107] font-bold uppercase text-xs md:text-sm tracking-widest transition-colors">
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
          className="md:hidden text-white p-2" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay - Full screen height fixed */}
      {isMenuOpen && (
        <div className="fixed top-[72px] left-0 w-full h-[calc(100vh-72px)] bg-black flex flex-col p-8 gap-6 md:hidden z-[100] border-t border-white/10 overflow-y-auto">
          {['Home', 'Services', 'About', 'Gallery'].map((item) => (
            <button 
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-white text-left font-black uppercase text-2xl italic tracking-widest border-b border-white/5 pb-4"
            >
              {item}
            </button>
          ))}
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="bg-[#FFC107] text-black px-6 py-5 font-black uppercase text-center text-lg mt-4 shadow-lg"
          >
            Book Appointment
          </a>
          <div className="mt-auto text-center space-y-4 pb-10">
            <p className="text-[#FFC107] font-bold text-sm tracking-widest">MON-SAT: 10AM - 7PM</p>
            <p className="text-white font-bold text-lg">+91 97692 73583</p>
          </div>
        </div>
      )}
    </header>
  );
}