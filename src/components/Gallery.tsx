export default function Gallery() {
  const images = [
    {
      url: '/photo2.jpg',
      alt: 'Expert mechanic team',
    },
    {
      url: '/photo3.jpg',
      alt: 'Service bay with multiple vehicles',
    },
     {
      url: '/photo4.jpg',
      alt: 'Expert mechanic team',
    },
    
    {
      url: '/photo1.jpg',
      alt: 'Expert mechanic team',
    },
    {
      url: '/photo.jpg',
      alt: 'Modern garage facility',
    },
  //  {
  //     url: '/photo3.jpg',
  //     alt: 'Expert mechanic team',
  //   },
    
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-4">
            Our Facility
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-poppins">
            Take a look at our state-of-the-art facility and expert team in action
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-2xl group aspect-square border border-gray-800"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition duration-500 transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-semibold text-sm tracking-wide uppercase">
                  
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}