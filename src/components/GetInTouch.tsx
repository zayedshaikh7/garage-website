import { MessageCircle, Instagram, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';

export default function GetInTouch() {
  // YOUR LOGIC (Fixed & Working)
  const whatsappNumber = '918779405347';
  const whatsappMessage = 'Hi! I would like to book an appointment for my car service.';
  const instagramHandle = 'unitedauto344'; // Adjusted to your correct handle

  const contactInfo = [
    {
      icon: <MessageCircle className="w-10 h-10 text-green-500 group-hover:text-white" />,
      title: 'WhatsApp',
      action: 'BOOK NOW',
      color: 'bg-green-500/10 border-green-500/20 hover:bg-green-600',
      textColor: 'text-green-500',
      href: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
    },
    {
      icon: <Instagram className="w-10 h-10 text-purple-500 group-hover:text-white" />,
      title: 'Instagram',
      action: 'MESSAGE US',
      color: 'bg-purple-500/10 border-purple-500/20 hover:bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600',
      textColor: 'text-purple-500',
      href: `https://instagram.com/${instagramHandle}`,
    },
    {
      icon: <Phone className="w-10 h-10 text-blue-500 group-hover:text-white" />,
      title: 'Call Us',
      action: '+91 9769273583',
      color: 'bg-blue-500/10 border-blue-500/20 hover:bg-blue-600',
      textColor: 'text-blue-500',
      href: 'tel:+919769273583',
    },
  ];

  return (
    <section id="get-in-touch" className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        
        {/* OUR BRAND STYLE HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4 italic tracking-tighter uppercase">
            GET IN <span className="text-blue-600">TOUCH</span>
          </h2>
          <div className="h-2 w-24 bg-blue-600 mx-auto rounded-full" />
        </div>

        {/* YOUR LOGIC LOOP + OUR BRAND STYLE CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((item, index) => (
            <a 
              key={index}
              href={item.href}
              target="_blank" 
              rel="noopener noreferrer"
              className={`group flex items-center justify-between p-8 border rounded-3xl transition-all duration-300 ${item.color}`}
            >
              <div className="flex items-center gap-6">
                <div className="transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-black">{item.title}</h3>
                  <p className={`${item.textColor} group-hover:text-white/80 font-bold text-sm tracking-widest uppercase`}>
                    {item.action}
                  </p>
                </div>
              </div>
              <ArrowRight className={`w-6 h-6 transform group-hover:translate-x-2 transition-transform ${item.textColor} group-hover:text-white`} />
            </a>
          ))}
        </div>

        {/* OUR BRAND STYLE INFO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Operating Hours */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[2.5rem] shadow-2xl transition-all hover:border-blue-500/30">
            <h4 className="flex items-center text-2xl font-bold mb-8 text-blue-400 italic uppercase">
              <Clock className="mr-3" /> Workshop Hours
            </h4>
            <div className="space-y-4 text-gray-300 font-medium">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span>Mon - Sat</span>
                <span className="text-white">9:00 AM - 7:00 PM</span>
              </div>
              <div className="flex justify-between text-red-500 font-bold pt-2">
                <span>Sunday</span>
                <span className="bg-red-500/10 px-3 py-0.5 rounded-full text-xs">CLOSED</span>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[2.5rem] shadow-2xl transition-all hover:border-blue-500/30">
            <h4 className="flex items-center text-2xl font-bold mb-8 text-blue-400 italic uppercase">
              <MapPin className="mr-3" /> Visit Our Garage
            </h4>
            <div className="text-gray-300 leading-relaxed mb-8">
              <p className="text-white font-bold text-lg mb-1">Byculla West, Mumbai</p>
              <p>Next to Kinjal Tower, Pais Street,</p>
              <p>Mumbai – 400011, India</p>
            </div>
            <a 
              href="https://maps.google.com/?q=United+Auto+Garage+Byculla+Mumbai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600/20 text-blue-400 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-xl font-bold transition-all group"
            >
              GET DIRECTIONS 
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}