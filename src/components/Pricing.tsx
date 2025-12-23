import { Check } from 'lucide-react';

export default function Pricing() {
  const plans = [
    { name: 'Basic Service', price: '99', features: ['Oil Change (Conventional)', 'Fluid Level Check', 'Tire Pressure Check', 'Visual Inspection', 'Wiper Blade Check'] },
    { name: 'Standard Service', price: '199', features: ['Everything in Basic', 'Oil Change (Synthetic)', 'Tire Rotation', 'Brake Inspection', 'Battery Test', 'Air Filter Replacement'], popular: true },
    { name: 'Premium Full Service', price: '299', features: ['Everything in Standard', 'Wheel Alignment', 'AC System Check', 'Engine Diagnostics', 'Transmission Fluid', 'Detailing'] },
  ];

  const scrollToBook = () => {
    document.getElementById('get-in-touch')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 text-center mb-16">
        <h2 className="text-5xl font-black text-gray-900 mb-4 italic">SERVICE PLANS</h2>
        <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
        {plans.map((plan, index) => (
          <div key={index} className={`relative p-10 rounded-[2.5rem] transition-all duration-500 hover:-translate-y-4 ${
            plan.popular ? 'bg-gray-900 text-white shadow-2xl scale-105 z-10' : 'bg-white text-gray-900 shadow-xl border border-gray-100'
          }`}>
            {plan.popular && (
              <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
                Recommended
              </span>
            )}
            <h3 className={`text-xl font-black mb-6 ${plan.popular ? 'text-blue-400' : 'text-blue-600'}`}>{plan.name}</h3>
            <div className="flex items-baseline mb-8">
              <span className="text-6xl font-black tracking-tighter">${plan.price}</span>
              <span className="ml-2 text-sm opacity-60">/visit</span>
            </div>
            <ul className="space-y-4 mb-10 text-left">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-center text-sm font-medium">
                  <Check className={`w-5 h-5 mr-3 ${plan.popular ? 'text-blue-400' : 'text-blue-600'}`} />
                  {f}
                </li>
              ))}
            </ul>
            <button 
              onClick={scrollToBook}
              className={`w-full py-4 rounded-2xl font-black transition-all ${
                plan.popular ? 'bg-blue-600 hover:bg-blue-500 text-white' : 'bg-gray-900 text-white hover:bg-gray-800'
              }`}
            >
              BOOK SERVICE
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}