import { MessageCircle, Instagram, Phone, MapPin, Clock, ExternalLink } from 'lucide-react';

export default function GetInTouch() {
  const whatsappNumber = '918779405347';
  const whatsappMessage = 'Hi! I would like to book an appointment for my car service.';
  const instagramHandle = 'unitedauto344';
  const address = 'Byculla West, Next to Kinjal Tower, Pais Street, Mumbai – 400011';
  
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address + " United Auto Garage")}`;

  return (
    <section id="get-in-touch" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
          
          {/* Contact Details */}
          <div className="lg:w-1/2 space-y-6 md:space-y-8">
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter leading-tight">
              Get In <span className="text-[#FFC107]">Touch</span>
            </h2>
            
            <div className="grid gap-3 md:gap-4">
              {/* WhatsApp */}
              <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`} 
                 target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-4 md:gap-6 p-5 md:p-8 bg-white border-2 border-green-500/20 rounded-2xl transition-all duration-300 hover:bg-[#25D366] hover:border-[#25D366] group">
                <MessageCircle className="text-[#25D366] w-8 h-8 md:w-10 md:h-10 group-hover:text-white transition-colors" />
                <div>
                  <p className="text-[10px] md:text-xs font-black uppercase text-[#25D366] group-hover:text-white/80 transition-colors tracking-widest">WhatsApp Booking</p>
                  <p className="font-bold text-lg md:text-xl text-gray-900 group-hover:text-white transition-colors">Chat with Experts</p>
                </div>
              </a>

              {/* Instagram */}
              <a href={`https://instagram.com/${instagramHandle}`} 
                 target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-4 md:gap-6 p-5 md:p-8 bg-white border-2 border-purple-500/20 rounded-2xl transition-all duration-300 hover:bg-[#E1306C] hover:border-[#E1306C] group">
                <Instagram className="text-[#E1306C] w-8 h-8 md:w-10 md:h-10 group-hover:text-white transition-colors" />
                <div>
                  <p className="text-[10px] md:text-xs font-black uppercase text-[#E1306C] group-hover:text-white/80 transition-colors tracking-widest">Instagram</p>
                  <p className="font-bold text-lg md:text-xl text-gray-900 group-hover:text-white transition-colors">@{instagramHandle}</p>
                </div>
              </a>

              {/* Phone */}
              <a href="tel:+919769273583" 
                 className="flex items-center gap-4 md:gap-6 p-5 md:p-8 bg-white border-2 border-blue-500/20 rounded-2xl transition-all duration-300 hover:bg-[#007AFF] hover:border-[#007AFF] group">
                <Phone className="text-[#007AFF] w-8 h-8 md:w-10 md:h-10 group-hover:text-white transition-colors" />
                <div>
                  <p className="text-[10px] md:text-xs font-black uppercase text-[#007AFF] group-hover:text-white/80 transition-colors tracking-widest">Emergency Call</p>
                  <p className="font-bold text-lg md:text-xl text-gray-900 group-hover:text-white transition-colors">+91 97692 73583</p>
                </div>
              </a>
            </div>
          </div>

          {/* Location / Hours - Dark Theme */}
          <div className="lg:w-1/2 bg-gray-900 rounded-2xl md:rounded-[2.5rem] p-8 md:p-10 text-white flex flex-col justify-between shadow-2xl mt-4 lg:mt-0">
            <div className="mb-10">
              <h4 className="flex items-center gap-2 text-[#FFC107] font-black uppercase italic mb-6 tracking-widest text-base md:text-lg">
                <MapPin size={20} className="md:w-6 md:h-6"/> Location
              </h4>
              
              <a 
                href={googleMapsUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group block md:p-6 md:-m-6 rounded-3xl hover:bg-white/5 transition-all border border-transparent hover:border-white/10"
              >
                <p className="text-gray-300 text-lg md:text-xl leading-relaxed group-hover:text-white transition-colors">
                  {address}
                </p>
                <div className="flex items-center gap-2 mt-4 text-[#FFC107] text-xs md:text-sm font-black uppercase tracking-[0.2em] md:opacity-0 group-hover:opacity-100 transition-all md:translate-x-[-10px] group-hover:translate-x-0">
                  Open Google Maps <ExternalLink size={14} />
                </div>
              </a>
            </div>

            <div className="pt-8 md:pt-10 border-t border-white/10">
              <h4 className="flex items-center gap-2 text-[#FFC107] font-black uppercase italic mb-6 tracking-widest text-base md:text-lg">
                <Clock size={20} className="md:w-6 md:h-6"/> Opening Hours
              </h4>
              <div className="space-y-4 font-bold text-base md:text-lg">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 uppercase text-xs md:text-sm tracking-widest">Mon - Sat</span>
                  <span className="text-white">9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 uppercase text-xs md:text-sm tracking-widest">Sunday</span>
                  <span className="px-3 py-1 bg-red-500/20 text-red-500 rounded-full text-[10px] md:text-xs font-black tracking-widest uppercase border border-red-500/20">CLOSED</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}