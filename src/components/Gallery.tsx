export default function Gallery() {
  const images = [
    { url: '/photo2.jpg', alt: 'Garage 1' },
    { url: '/photo3.jpg', alt: 'Garage 2' },
    { url: '/photo4.jpg', alt: 'Garage 3' },
    { url: '/photo1.jpg', alt: 'Garage 4' },
    { url: '/photo.jpg', alt: 'Garage 5' },
  ];

  return (
    <section id="gallery" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic mb-4">
            Our <span className="text-[#FFC107]">Facility</span>
          </h2>
          <div className="h-1.5 w-20 bg-[#FFC107] mx-auto mb-6" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              // bg-neutral-900 acting as a placeholder to prevent "black screen"
              className="relative overflow-hidden rounded-xl border-2 border-gray-800 bg-neutral-900 transition-all duration-500 hover:border-[#FFC107] group"
            >
              <img
                src={image.url}
                alt={image.alt}
                loading="eager" 
                className="w-full h-full object-cover aspect-square transition duration-500 transform group-hover:scale-110 will-change-transform"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}