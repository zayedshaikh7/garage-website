import { MessageCircle, Instagram, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';

export default function GetInTouch() {
  return (
    <section id="get-in-touch" className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4">GET IN TOUCH</h2>
          <div className="h-2 w-24 bg-blue-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <a href="https://wa.me/8779405347" className="group flex items-center justify-between p-8 bg-green-500/10 border border-green-500/20 rounded-3xl hover:bg-green-500 transition-all">
            <div className="flex items-center gap-6">
              <MessageCircle className="w-10 h-10 text-green-500 group-hover:text-white" />
              <div>
                <h3 className="text-xl font-black">WhatsApp</h3>
                <p className="text-green-500 group-hover:text-white/80">Instant Booking</p>
              </div>
            </div>
            <ArrowRight className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" />
          </a>

          <a href="https://instagram.com/unitedauto344" className="group flex items-center justify-between p-8 bg-purple-500/10 border border-purple-500/20 rounded-3xl hover:bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 transition-all">
            <div className="flex items-center gap-6">
              <Instagram className="w-10 h-10 text-purple-500 group-hover:text-white" />
              <div>
                <h3 className="text-xl font-black">Instagram</h3>
                <p className="text-purple-500 group-hover:text-white/80">Our Latest Work</p>
              </div>
            </div>
            <ArrowRight className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" />
          </a>

          <a href="tel:+918779405347" className="group flex items-center justify-between p-8 bg-blue-500/10 border border-blue-500/20 rounded-3xl hover:bg-blue-600 transition-all">
            <div className="flex items-center gap-6">
              <Phone className="w-10 h-10 text-blue-500 group-hover:text-white" />
              <div>
                <h3 className="text-xl font-black">Call Us</h3>
                <p className="text-blue-500 group-hover:text-white/80">+91 8779405347</p>
              </div>
            </div>
            <ArrowRight className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[2.5rem]">
            <h4 className="flex items-center text-2xl font-bold mb-8 text-blue-400">
              <Clock className="mr-3" /> Operating Hours
            </h4>
            <div className="space-y-4 text-gray-400 font-medium">
              <div className="flex justify-between border-b border-white/10 pb-2"><span>Monday - Friday</span><span className="text-white">9:00 AM - 7:00 PM</span></div>
              <div className="flex justify-between border-b border-white/10 pb-2"><span>Saturday</span><span className="text-white">10:00 AM - 6:00 PM</span></div>
              <div className="flex justify-between text-red-400"><span>Sunday</span><span>Closed</span></div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[2.5rem]">
            <h4 className="flex items-center text-2xl font-bold mb-8 text-blue-400">
              <MapPin className="mr-3" /> Visit Our Garage
            </h4>
            <p className="text-lg leading-relaxed text-gray-300">
              Next to Kinjal Tower, Pais Street,<br />
              Byculla West, Mumbai – 400011
            </p>
            <button className="mt-8 text-blue-400 font-bold hover:text-white flex items-center gap-2">
              Open in Google Maps <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}