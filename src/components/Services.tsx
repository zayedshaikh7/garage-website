import { Users, Package, Zap, CheckCircle, TrendingDown, Wrench } from 'lucide-react';

export default function Services() {
  const services = [
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

  return (
    <section id="services" className="py-24 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose United Auto Garage
          </h2>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Quality service at affordable prices - the complete automotive solution
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800/50 p-8 rounded-2xl hover:shadow-2xl hover:shadow-blue-900/20 transition transform hover:-translate-y-2 border border-gray-700 hover:border-blue-500/50 group"
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
      </div>
    </section>
  );
}