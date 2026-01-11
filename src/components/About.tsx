import { Users, Zap, DollarSign, Wrench, ShieldCheck, CheckCircle } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-black" />,
      title: 'Expert Technicians',
      description: 'Highly skilled professionals specializing in German cars and all major brands.',
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-black" />,
      title: 'Genuine Parts',
      description: 'Only authentic parts used for maximum durability and peak performance.',
    },
    {
      icon: <Zap className="w-8 h-8 text-black" />,
      title: 'Advanced Tools',
      description: 'State-of-the-art diagnostic and repair equipment for precision work.',
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-black" />,
      title: 'Transparent & Honest',
      description: 'Clear pricing with no hidden charges, surprises, or unnecessary repairs.',
    },
    {
      icon: <DollarSign className="w-8 h-8 text-black" />,
      title: '50% Lower Bills',
      description: 'Top-class dealership quality at half the price you\'d pay elsewhere.',
    },
    {
      icon: <Wrench className="w-8 h-8 text-black" />,
      title: 'One-Stop Solution',
      description: 'Complete automotive care including mechanical, electrical, and bodywork.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight uppercase italic">
            ABOUT UNITED <span className="text-[#FFC107]">AUTO GARAGE</span>
          </h2>
          <div className="h-1.5 w-20 bg-[#FFC107] mx-auto mb-6" />
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            <span className="text-black font-bold uppercase italic">Why pay more for premium service?</span> We bring dealership-level expertise to your doorstep with honest pricing and advanced diagnostics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 border-2 border-gray-100 hover:border-[#FFC107] transition-all duration-300 group"
            >
              <div className="mb-6 inline-block bg-[#FFC107] p-3 transform group-hover:rotate-12 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3 uppercase italic">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}