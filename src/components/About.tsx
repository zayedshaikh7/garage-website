import { Users, Zap, DollarSign, Wrench, ShieldCheck, CheckCircle } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-[#FFC107]" />,
      title: 'Master Technicians',
      description: 'Factory-trained specialists dedicated to precision repairs for luxury and domestic vehicles.',
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#FFC107]" />,
      title: 'Premium OEM Parts',
      description: 'We use only high-grade, genuine components to ensure your vehicle’s longevity and safety.',
    },
    {
      icon: <Zap className="w-8 h-8 text-[#FFC107]" />,
      title: 'Smart Diagnostics',
      description: 'Utilizing the latest dealership-level technology to identify issues quickly and accurately.',
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-[#FFC107]" />,
      title: 'Integrity First',
      description: 'Total transparency with detailed reports and upfront pricing—no hidden costs, ever.',
    },
    {
      icon: <DollarSign className="w-8 h-8 text-[#FFC107]" />,
      title: 'Unbeatable Value',
      description: 'Experience elite dealership-quality service at a fraction of the traditional cost.',
    },
    {
      icon: <Wrench className="w-8 h-8 text-[#FFC107]" />,
      title: 'Full-Service Hub',
      description: 'Your all-in-one destination for mechanical repairs, electrical tuning, and bodywork.',
    },
  ];

  const partners = [
    { name: "Bosch", url: "https://upload.wikimedia.org/wikipedia/commons/1/16/Bosch-logo.svg" },
    { name: "Mobil1", url: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Mobil_1_logo.svg" },
    { name: "Castrol", url: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Castrol_logo.svg" },
    { name: "Snap-on", url: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Snap-on_logo.svg" }
  ];

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header Area */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-5xl font-black text-gray-900 mb-4 tracking-tighter uppercase italic">
            ABOUT UNITED <span className="text-[#FFC107]">AUTO GARAGE</span>
          </h2>
          <div className="h-2 w-24 bg-gray-900 mx-auto mb-8" />
          <p className="text-xl text-gray-600 leading-relaxed font-medium italic">
            <span className="text-black font-black">REDEFINING AUTOMOTIVE EXCELLENCE.</span> We combine decade-long expertise with advanced technology to deliver superior care for your vehicle.
          </p>
        </div>

        {/* Styled Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group bg-gray-900 p-10 rounded-br-[3rem] border-l-4 border-[#FFC107] hover:bg-black transition-all duration-500 shadow-2xl overflow-hidden"
            >
              {/* Subtle Background Number */}
              <div className="absolute -right-4 -top-4 text-9xl font-black text-white/5 group-hover:text-[#FFC107]/10 transition-colors italic pointer-events-none">
                {index + 1}
              </div>

              <div className="mb-6 relative z-10">
                {feature.icon}
              </div>
              
              <h3 className="text-2xl font-black text-white mb-4 uppercase italic tracking-tight group-hover:text-[#FFC107] transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed font-bold uppercase tracking-wide group-hover:text-gray-200 transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Realistic Brand Logo Section */}
        {/* <div className="border-t border-gray-200 pt-16">
          <p className="text-center text-xs font-black uppercase tracking-[0.3em] text-gray-400 mb-10">
            Trusted by the world's leading brands & partners
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
            {partners.map((partner, i) => (
              <img 
                key={i} 
                src={partner.url} 
                alt={partner.name} 
                className="h-8 md:h-12 w-auto object-contain" 
              />
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}