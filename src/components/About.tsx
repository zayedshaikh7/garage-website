import { Users, Zap, DollarSign, Wrench, ShieldCheck, CheckCircle } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: 'Expert Technicians',
      description: 'Highly skilled professionals specializing in German cars and all major brands.',
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-500" />,
      title: 'Genuine German Parts',
      description: 'Only authentic parts used for maximum durability and peak performance.',
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'Advanced Tools',
      description: 'State-of-the-art diagnostic and repair equipment for precision work.',
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-500" />,
      title: 'Transparent & Honest',
      description: 'Clear pricing with no hidden charges, surprises, or unnecessary repairs.',
    },
    {
      icon: <DollarSign className="w-8 h-8 text-blue-500" />,
      title: '50% Lower Bills',
      description: 'Top-class dealership quality at half the price you\'d pay elsewhere.',
    },
    {
      icon: <Wrench className="w-8 h-8 text-blue-500" />,
      title: 'One-Stop Solution',
      description: 'Complete automotive care including mechanical, electrical, and bodywork.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
            ABOUT UNITED <span className="text-blue-500">AUTO GARAGE</span>
          </h2>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full mb-8" />
          <p className="text-xl text-gray-400 leading-relaxed">
            <span className="text-white font-bold">Why pay more for premium service?</span> At United Auto Garage, we bring dealership-level expertise to your doorstep. We specialize in German engineering but provide world-class care for all brands using advanced diagnostics and honest pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800/50 p-10 rounded-3xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group hover:bg-gray-800"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}