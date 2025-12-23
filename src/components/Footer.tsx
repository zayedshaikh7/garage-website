import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-black tracking-tighter uppercase italic">
              United Auto <span className="text-blue-500">Garage</span>
            </h3>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Premium automotive care specializing in German engineering. 
              Dealership quality service at exactly half the price.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://instagram.com/unitedauto344"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-2.5 rounded-xl hover:scale-110 transition-transform shadow-lg"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Timing Column */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-widest">Operating Hours</h3>
            <div className="space-y-3 text-gray-400 font-medium">
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span>Mon - Fri</span>
                <span className="text-white">9:00 AM - 7:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span>Saturday</span>
                <span className="text-white">10:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between text-red-400">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-widest">Contact Details</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600/20 p-2 rounded-lg mt-1">
                  <MapPin className="w-5 h-5 text-blue-500" />
                </div>
                <p className="text-gray-400 leading-snug">
                  Next to Kinjal Tower,<br />
                  Pais Street, Byculla West,<br />
                  Mumbai – 400011
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-600/20 p-2 rounded-lg">
                  <Phone className="w-5 h-5 text-blue-500" />
                </div>
                <a href="tel:+918779405347" className="text-gray-400 hover:text-white transition-colors">
                  +91 8779405347
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-600/20 p-2 rounded-lg">
                  <Mail className="w-5 h-5 text-blue-500" />
                </div>
                <a href="mailto:unitedauto377@gamil.com" className="text-gray-400 hover:text-white transition-colors">
                  unitedauto377@gamil.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Area
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {currentYear} United Auto Garage. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <span className="hover:text-gray-300 cursor-default">Privacy Policy</span>
            <span className="hover:text-gray-300 cursor-default">Terms of Service</span>
          </div>
        </div> */}
      </div>
    </footer>
  );
}