import { MessageCircle, Instagram, Phone, MapPin, Clock } from 'lucide-react';

export default function GetInTouch() {
  const whatsappNumber = '918779405347';
  const whatsappMessage = 'Hi! I would like to book an appointment for my car service.';
  const instagramHandle = 'unitedauto344';

  return (
    <section id="get-in-touch" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Details */}
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-5xl font-black uppercase italic tracking-tighter">Get In <span className="text-[#FFC107]">Touch</span></h2>
            
            <div className="grid gap-4">
              <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`} 
                 className="flex items-center gap-4 p-6 bg-green-50 border-2 border-green-100 rounded-2xl hover:bg-green-100 transition-all">
                <MessageCircle className="text-green-600 w-8 h-8" />
                <div>
                  <p className="text-xs font-black uppercase text-green-600">WhatsApp Booking</p>
                  <p className="font-bold text-lg">Click to Chat Now</p>
                </div>
              </a>

              <a href={`https://instagram.com/${instagramHandle}`} 
                 className="flex items-center gap-4 p-6 bg-purple-50 border-2 border-purple-100 rounded-2xl hover:bg-purple-100 transition-all">
                <Instagram className="text-purple-600 w-8 h-8" />
                <div>
                  <p className="text-xs font-black uppercase text-purple-600">Instagram</p>
                  <p className="font-bold text-lg">@unitedauto344</p>
                </div>
              </a>

              <a href="tel:+919769273583" 
                 className="flex items-center gap-4 p-6 bg-blue-50 border-2 border-blue-100 rounded-2xl hover:bg-blue-100 transition-all">
                <Phone className="text-blue-600 w-8 h-8" />
                <div>
                  <p className="text-xs font-black uppercase text-blue-600">Call Us</p>
                  <p className="font-bold text-lg">+91 97692 73583</p>
                </div>
              </a>
            </div>
          </div>

          {/* Location / Hours */}
          <div className="lg:w-1/2 bg-gray-900 rounded-3xl p-10 text-white">
            <div className="mb-8">
              <h4 className="flex items-center gap-2 text-[#FFC107] font-black uppercase italic mb-4"><MapPin size={20}/> Location</h4>
              <p className="text-gray-300">Byculla West, Next to Kinjal Tower, Pais Street, Mumbai – 400011.</p>
            </div>
            <div>
              <h4 className="flex items-center gap-2 text-[#FFC107] font-black uppercase italic mb-4"><Clock size={20}/> Opening Hours</h4>
              <div className="space-y-2 font-bold">
                <div className="flex justify-between"><span>Mon - Sat</span><span>9:00 AM - 7:00 PM</span></div>
                <div className="flex justify-between text-red-500"><span>Sunday</span><span>CLOSED</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}