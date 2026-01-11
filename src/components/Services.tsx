import { Shield, ChevronRight, Users, Car, Award, CheckCircle } from 'lucide-react';

export default function Services() {
  const technicalRepairs = [
    'General Auto Repair', 'Fuel System Repair', 'Transmission Replacement',
    'Exhaust System', 'Cooling System', 'Electrical Diagnostics',
    'Computer Testing', 'CV Axles & Suspension'
  ];

  const coreServices = [
    { title: "Preventative Maintenance", img: "/service1.jpeg" },
    { title: "Brake & Service", img: "/service2.jpeg" },
    { title: "Engine Diagnostics", img: "/service3.jpeg" }
  ];

  const stats = [
    { label: "Years of Experience", value: "30+", icon: <Award className="text-[#FFC107]" /> },
    { label: "Vehicles Repaired", value: "5K+", icon: <Car className="text-[#FFC107]" /> },
    { label: "Professionals & Businesses", value: "2K+", icon: <Users className="text-[#FFC107]" /> },
    { label: "Satisfied Customers", value: "100%", icon: <CheckCircle className="text-[#FFC107]" /> }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-gray-900 uppercase italic">What We Do</h2>
          <div className="h-1.5 w-20 bg-[#FFC107] mx-auto mt-2" />
        </div>

        {/* Top Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {coreServices.map((s, i) => (
            <div key={i} className="group relative h-72 overflow-hidden rounded-2xl bg-gray-200">
              <img 
                src={s.img} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 will-change-transform" 
                alt={s.title}
                loading="eager"
                onError={(e) => { e.currentTarget.className = "hidden"; }}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition-all duration-300" />
              <div className="absolute bottom-0 left-0 w-full p-6">
                <h3 className="bg-[#FFC107] inline-block px-4 py-2 text-sm font-black uppercase italic shadow-lg text-black">
                  {s.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Section */}
        <div className="bg-gray-900 rounded-[2.5rem] p-8 md:p-12 flex flex-col lg:flex-row gap-10 items-center mb-12">
          <div className="lg:w-1/2">
            <h3 className="text-3xl font-black text-[#FFC107] uppercase italic mb-4">Complete Repair Solutions</h3>
            <p className="text-gray-400 mb-6 font-medium leading-relaxed italic">
                Expert care for all major makes and models using genuine parts.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {technicalRepairs.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-white text-sm font-bold uppercase tracking-tight">
                  <div className="w-2 h-2 bg-[#FFC107] rotate-45" /> {item}
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 bg-[#FFC107] p-8 rounded-3xl text-black">
            <Shield className="w-12 h-12 mb-4" />
            <h4 className="text-2xl font-black uppercase italic">Safety Inspection</h4>
            <p className="font-bold my-4 leading-snug uppercase text-sm">Our precision brake servicing ensures your family's safety on every journey.</p>
            <button 
              onClick={() => document.getElementById('get-in-touch')?.scrollIntoView({ behavior: 'smooth' })} 
              className="flex items-center gap-2 font-black uppercase text-sm border-b-2 border-black hover:translate-x-2 transition-all"
            >
              Book Now <ChevronRight size={16}/>
            </button>
          </div>
        </div>

        {/* --- NEW STATISTICS SECTION --- */}
        <div className="bg-gray-100 rounded-[2.5rem] p-8 md:p-12 border-2 border-gray-900/5">
          <div className="max-w-3xl mb-12">
            <h3 className="text-3xl font-black text-gray-900 uppercase italic mb-4">The Repair Statistics</h3>
            <p className="text-gray-600 font-bold uppercase text-sm leading-relaxed">
              Auto repair technical statistics you must know. Whether it's a routine inspection or major repair, we guarantee total satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="flex items-start gap-4 group">
                <div className="text-5xl font-black text-gray-900 italic leading-none border-l-4 border-[#FFC107] pl-4">
                  {stat.value}
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-400 mb-1">{stat.icon}</span>
                  <span className="text-xs font-black uppercase tracking-wider text-gray-600 leading-tight">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}