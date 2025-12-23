import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      text: 'Excellent service! They diagnosed and fixed my car\'s engine problem quickly. The staff was professional, honest, and the prices were fair. I\'ll definitely be coming back for all my car maintenance needs.',
      location: 'Los Angeles, CA',
    },
    {
      name: 'Michael Chen',
      rating: 5,
      text: 'Best auto shop in town! They completed my brake repair the same day and even did a complimentary multi-point inspection. The mechanics really know their stuff and took the time to explain everything.',
      location: 'San Diego, CA',
    },
    {
      name: 'Emily Rodriguez',
      rating: 5,
      text: 'I was nervous about getting my car serviced, but the team at AutoCare made me feel at ease. They were transparent about costs, finished ahead of schedule, and my car runs like new. Highly recommend!',
      location: 'San Francisco, CA',
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>
 
        

      </div>
    </section>
  );
}
