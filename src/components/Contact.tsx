import { MapPin, Phone, Clock } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: <MapPin className="w-8 h-8 text-blue-600" />,
      title: 'Visit Us',
      content: 'Next to Kinjal Tower, Pais Street, Byculla West, Mumbai – 400011',
    },
    {
      icon: <Phone className="w-8 h-8 text-blue-600" />,
      title: 'Call Us',
      content: '+91 8779405347',
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: 'Operating Hours',
      content: 'Mon-Fri: 9AM-7PM | Sat: 10AM-6PM | Sun: Closed',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-gray-800 mb-4">
            Contact Information
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-poppins">
            Contact United Auto Garage for expert service or more information
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 text-center"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold font-poppins text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed font-poppins">{item.content}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto border-l-4 border-blue-600">
          <h3 className="text-2xl font-bold font-display text-gray-800 mb-4">Why Choose Us?</h3>
          <ul className="space-y-3 text-gray-600 font-poppins">
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-3">✓</span>
              <span>Expert technicians specializing in German cars and all brands</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-3">✓</span>
              <span>50% lower bills with genuine parts and advanced tools</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-3">✓</span>
              <span>Transparent pricing with no hidden charges</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-3">✓</span>
              <span>One-stop solution for all your automotive needs</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
