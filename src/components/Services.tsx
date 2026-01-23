import { Shield, ChevronRight, Users, Car, Award, CheckCircle } from 'lucide-react';

export default function Services() {
  const technicalRepairs = [
    "Advanced German Vehicle Diagnostics",
    "Engine & Transmission Repair",
    "Brake, Suspension & Steering Systems",
    "Electrical & ECU Programming",
    "Cooling & Fuel System Services",
    "Precision Preventive Maintenance"
  ];

  const coreServices = [
    { title: "Preventative Maintenance", img: "/service1.jpeg" },
    { title: "Brake & Service", img: "/service2.jpeg" },
    { title: "Engine Diagnostics", img: "/service3.jpeg" },
    { title: "German Car Diagnostics", img: "/img4.jpeg" },
    { title: "Precision Repairs", img: "/img5.jpeg" },
    { title: "Premium Servicing", img: "/img6.jpeg" }
  ];

  const stats = [
    { label: "Years of Experience", value: "30+", icon: <Award className="text-[#FFC107]" /> },
    { label: "German Vehicles Serviced", value: "5K+", icon: <Car className="text-[#FFC107]" /> },
    { label: "Trusted Customers", value: "2K+", icon: <Users className="text-[#FFC107]" /> },
    { label: "Satisfied Customers", value: "100%", icon: <CheckCircle className="text-[#FFC107]" /> }
  ];

  return (
    <section id="services" className="py-16 md:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase italic">What We Do</h2>
          <div className="h-1.5 w-20 bg-[#FFC107] mx-auto mt-2" />
        </div>

        {/* Top Service Cards - Stack on mobile, 2 columns on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {coreServices.map((s, i) => (
            <div key={i} className="group relative h-64 md:h-72 overflow-hidden rounded-2xl bg-gray-200">
              <img 
                src={s.img} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 will-change-transform" 
                alt={s.title}
                loading="lazy"
                onError={(e) => { e.currentTarget.src = "https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg"; }}
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
              <div className="absolute bottom-0 left-0 w-full p-6">
                <h3 className="bg-[#FFC107] inline-block px-4 py-2 text-sm font-black uppercase italic shadow-lg text-black transform -skew-x-12">
                  <span className="inline-block skew-x-12">{s.title}</span>
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Section - Stack vertically on mobile */}
        <div className="bg-gray-900 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 flex flex-col lg:flex-row gap-10 items-center mb-12">
          <div className="lg:w-1/2 w-full">
            <h3 className="text-2xl md:text-3xl font-black text-[#FFC107] uppercase italic mb-4">COMPLETE GERMAN CAR SOLUTIONS</h3>
            <p className="text-gray-400 mb-6 font-medium leading-relaxed italic">
                Expert servicing for BMW, Mercedes-Benz, Audi & Volkswagen using manufacturer-standard procedures.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {technicalRepairs.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-white text-sm font-bold uppercase tracking-tight">
                  <div className="w-2 h-2 bg-[#FFC107] shrink-0 rotate-45" /> {item}
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full bg-[#FFC107] p-8 rounded-3xl text-black">
            <Shield className="w-10 h-10 md:w-12 md:h-12 mb-4" />
            <h4 className="text-2xl font-black uppercase italic">SAFETY INSPECTION</h4>
            <p className="font-bold my-4 leading-snug uppercase text-sm">
              Comprehensive multi-point inspection for German vehicles, delivering dealer-level safety and reliability at significantly lower cost than authorized service centres.
            </p>
            <button 
              onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })} 
              className="flex items-center gap-2 font-black uppercase text-sm border-b-2 border-black hover:translate-x-2 transition-all"
            >
              BOOK INSPECTION <ChevronRight size={16}/>
            </button>
          </div>
        </div>

        {/* Statistics Section - Grid scales from 1 to 4 columns */}
        <div className="bg-gray-100 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 border-2 border-gray-900/5 mb-12">
          <div className="max-w-3xl mb-12">
            <h3 className="text-2xl md:text-3xl font-black text-gray-900 uppercase italic mb-4">OUR SERVICE RECORD</h3>
            <p className="text-gray-600 font-bold uppercase text-xs md:text-sm leading-relaxed">
              Key service insights that reflect our expertise. From routine inspections to complex German car repairs, we deliver precision, reliability, and complete customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="flex items-start gap-4 group">
                <div className="text-4xl md:text-5xl font-black text-gray-900 italic leading-none border-l-4 border-[#FFC107] pl-4 shrink-0">
                  {stat.value}
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-400 mb-1">{stat.icon}</span>
                  <span className="text-[10px] md:text-xs font-black uppercase tracking-wider text-gray-600 leading-tight">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- BRAND LINE --- */}
        <div className="text-center pt-8 border-t border-gray-100">
          <p className="text-gray-600 font-black uppercase tracking-[0.2em] md:tracking-[0.4em] text-[10px] md:text-xs italic leading-loose">
            BMW <span className="text-[#FFC107] mx-1 md:mx-2">•</span> Mercedes-Benz <span className="text-[#FFC107] mx-1 md:mx-2">•</span> Audi <span className="text-[#FFC107] mx-1 md:mx-2">•</span> Volkswagen
          </p>
        </div>
      </div>
    </section>
  );
}