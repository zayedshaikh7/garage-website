export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center bg-black overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg" 
          className="w-full h-full object-cover opacity-50"
          alt="Garage"
          loading="eager" 
          // @ts-ignore - This tells TypeScript to ignore the warning
          fetchPriority="high" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <p className="text-[#FFC107] font-bold uppercase tracking-widest mb-3">Quality Service</p>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight uppercase italic mb-6">
            Expert Auto Repair <br /> 
            <span className="text-[#FFC107]">& Maintenance</span>
          </h1>
          <button 
            onClick={() => document.getElementById('get-in-touch')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#FFC107] hover:bg-yellow-500 text-black px-8 py-4 font-black uppercase skew-x-[-10deg] transition-all"
          >
            <span className="inline-block skew-x-[10deg]">Book Appointment</span>
          </button>
        </div>
      </div>
    </section>
  );
}