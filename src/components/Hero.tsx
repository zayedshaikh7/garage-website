export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-gray-900">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg" 
          className="w-full h-full object-cover opacity-40"
          alt="Garage"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/60 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          {/* <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-blue-400 uppercase bg-blue-400/10 rounded-full border border-blue-400/20">
            UNITEDAUTO garage
          </span> */}
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight">
            Premium Care, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Fair Prices.
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-xl leading-relaxed">
            Experience dealership-level quality at 50% of the cost. From routine oil changes to complex engine diagnostics, we keep you moving.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => document.getElementById('get-in-touch')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all transform hover:scale-105 hover:shadow-[0_20px_50px_rgba(37,117,252,0.3)]"
            >
              Book Service Now
            </button>
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl font-bold text-lg transition-all"
            >
              Our Services
            </button>
          </div>
        </div>
      </div>
      
      {/* Floating Stats */}
      {/* <div className="absolute bottom-12 left-0 right-0 hidden lg:block">
        <div className="container mx-auto px-6">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex justify-between max-w-4xl">
            {[
              { label: 'Cost Savings', val: '50%' },
              { label: 'Certified Techs', val: '15+' },
              { label: 'Happy Clients', val: '2k+' }
            ].map((stat, i) => (
              <div key={i} className="text-center px-8 border-r border-white/10 last:border-0">
                <div className="text-3xl font-black text-white">{stat.val}</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </section>
  );
}