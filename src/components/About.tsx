import { Users, Zap, DollarSign, Wrench, ShieldCheck, CheckCircle } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-[#FFC107]" />,
      title: 'Master Technicians',
      description: 'Factory-trained specialists dedicated to precision repairs for German and premium vehicles, ensuring reliability and performance.',
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#FFC107]" />,
      title: 'Premium OEM Parts',
      description: 'We use only high-grade, genuine components to ensure your vehicle’s longevity, safety, and optimal performance.',
    },
    {
      icon: <Zap className="w-8 h-8 text-[#FFC107]" />,
      title: 'Smart Diagnostics',
      description: 'Utilizing the latest dealership-level diagnostic technology to identify issues quickly and accurately in German vehicles.',
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-[#FFC107]" />,
      title: 'Integrity First',
      description: 'Total transparency with detailed service reports and upfront pricing—no hidden costs, ever.',
    },
    {
      icon: <DollarSign className="w-8 h-8 text-[#FFC107]" />,
      title: 'Unbeatable Value',
      description: 'Experience dealership-quality service without dealership-level costs, delivering exceptional value without compromise.',
    },
    {
      icon: <Wrench className="w-8 h-8 text-[#FFC107]" />,
      title: 'Full-Service Hub',
      description: 'Your all-in-one destination for mechanical repairs, electrical diagnostics, preventive maintenance, and bodywork.',
    },
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
          <div className="space-y-4">
            <p className="text-2xl text-black font-black uppercase italic tracking-tight">
              REDEFINING AUTOMOTIVE EXCELLENCE.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed font-medium italic">
              We combine decades of expertise with advanced diagnostics to deliver 
              <span className="text-black font-bold"> precision care for German and premium vehicles.</span>
            </p>
          </div>
        </div>

        {/* Styled Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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

        {/* Brand Authority Footer
        <div className="mt-20 text-center">
            <p className="text-gray-600 font-black uppercase tracking-[0.4em] text-[10px] md:text-xs italic">
                BMW <span className="text-[#FFC107] mx-2">•</span> Mercedes-Benz <span className="text-[#FFC107] mx-2">•</span> Audi <span className="text-[#FFC107] mx-2">•</span> Volkswagen
            </p>
        </div> */}
      </div>
    </section>
  );
}