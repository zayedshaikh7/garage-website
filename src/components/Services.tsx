import { Users, Package, Zap, CheckCircle, TrendingDown, Wrench, Shield, ChevronRight } from 'lucide-react';

export default function Services() {
  const coreBenefits = [
    {
      icon: <Users className="w-12 h-12 text-blue-500" />,
      title: 'Expert Technicians',
      description: 'Highly skilled professionals specializing in German cars and all vehicle brands with years of expertise.',
    },
    {
      icon: <Package className="w-12 h-12 text-blue-500" />,
      title: 'Genuine Parts',
      description: 'Only authentic and original parts used to ensure quality, durability, and optimal performance.',
    },
    {
      icon: <Zap className="w-12 h-12 text-blue-500" />,
      title: 'Advanced Tools',
      description: 'State-of-the-art diagnostic equipment and modern repair tools for accurate and efficient service.',
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-blue-500" />,
      title: 'Transparent & Honest',
      description: 'Clear, upfront pricing with no hidden charges. We explain everything before we start work.',
    },
    {
      icon: <TrendingDown className="w-12 h-12 text-blue-500" />,
      title: '50% Lower Bills',
      description: 'Top-quality service at half the price you\'d expect to pay. Expert work, affordable rates.',
    },
    {
      icon: <Wrench className="w-12 h-12 text-blue-500" />,
      title: 'One-Stop Solution',
      description: 'Complete automotive care for all your vehicle needs under one trusted roof.',
    },
  ];

  const technicalRepairs = [
    'General Auto Repair & Maintenance',
    'Fuel System Repair',
    'Transmission Repair & Replacement',
    'Exhaust System Repair',
    'Engine Cooling System Maintenance',
    'Electrical Diagnostics',
    'Computer Diagnostic Testing',
    'CV Axles & Suspension'
  ];

  // const brands = ['Audi', 'BMW', 'Mercedes', 'Volkswagen', 'Honda', 'Toyota', 'Ford', 'Hyundai'];

  const scrollToContact = () => {
    document.getElementById('get-in-touch')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-24 bg-gray-900">
      <div className="container mx-auto px-6">
        {/* SECTION 1: CORE BENEFITS */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose United Auto Garage
          </h2>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Quality service at affordable prices - the complete automotive solution
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">
          {coreBenefits.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 group transition-all"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* SECTION 2: SPECIALTY HIGHLIGHT (BRAKES) & CHECKLIST */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-24 items-center">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-[2.5rem] p-10 text-white relative overflow-hidden group">
            <div className="relative z-10">
              <span className="bg-white/20 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">Safety First</span>
              <h3 className="text-4xl font-black mt-4 mb-6 italic uppercase">Brake Repair & Service</h3>
              <p className="text-blue-100 mb-8 text-lg leading-relaxed">
                The best way to minimize breakdowns is routine maintenance. Our precision brake servicing ensures your family's safety on every journey.
              </p>
              <button 
                onClick={scrollToContact}
                className="bg-white text-blue-700 font-bold py-3 px-8 rounded-xl hover:bg-gray-100 transition-colors flex items-center gap-2"
              >
                Book Inspection <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <Shield className="absolute -right-10 -bottom-10 w-64 h-64 text-white/10 rotate-12 group-hover:rotate-0 transition-transform duration-700" />
          </div>

          <div className="bg-gray-800/30 p-10 rounded-[2.5rem] border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-8">Comprehensive Repair Services</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {technicalRepairs.map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION 3: BRAND LOGOS */}
        {/* <div className="max-w-6xl mx-auto border-t border-gray-800 pt-16">
          <p className="text-center text-gray-500 font-bold uppercase tracking-widest text-sm mb-10">
            Expert Service For All Major Makes
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-40 hover:opacity-100 transition-opacity duration-500">
            {brands.map((brand) => (
              <span key={brand} className="text-white text-xl md:text-2xl font-black tracking-tighter hover:text-blue-500 transition-colors cursor-default">
                {brand.toUpperCase()}
              </span>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
