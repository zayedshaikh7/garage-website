import { LayoutGrid } from 'lucide-react';

export default function Gallery() {
  const sections = [
    {
      category: "German Cars We Service",
      subtitle: "BMW • Mercedes-Benz • Audi • Volkswagen",
      images: [
        { url: "/g1.jpeg", alt: "German Engineering" },
        { url: "/g2.jpeg", alt: "Mercedes Performance" },
        { url: "/g3.jpeg", alt: "Audi Tech" }
      ]
    },
    {
      category: "Workshop & Service Bays",
      subtitle: "State-of-the-art facility",
      images: [
        { url: "/s1.jpeg", alt: "Premium Service Bay" },
        { url: "/s2.jpeg", alt: "Professional Garage" }
      ]
    },
    {
      category: "Diagnostics & Repair Work",
      subtitle: "Advanced Computerized Testing",
      images: [
        { url: "/r1.jpeg", alt: "ECU Programming" },
        { url: "/r2.jpeg", alt: "Engine Diagnostics" }
      ]
    },
    {
      category: "Before & After Results",
      subtitle: "Precision Excellence",
      images: [
        { url: "/a1.jpeg", alt: "Engine Overhaul" },
        { url: "/a2.jpeg", alt: "Detailing Result" }
      ]
    }
  ];

  return (
    <section id="gallery" className="py-16 md:py-24 bg-black overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header Section with BIG Fonts - Scaled for mobile */}
        <div className="text-center mb-16 md:mb-24">
          <div className="flex items-center justify-center gap-2 mb-4">
            <LayoutGrid className="text-[#FFC107]" size={24} />
            <p className="text-[#FFC107] font-black uppercase tracking-[0.2em] md:tracking-[0.4em] text-xs md:text-base">
              GALLERY
            </p>
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-white uppercase italic leading-tight">
            We handle <span className="text-[#FFC107]">premium cars</span> <br /> 
            professionally
          </h2>
          <div className="h-1.5 md:h-2 w-24 md:w-32 bg-[#FFC107] mx-auto mt-6 md:mt-8" />
        </div>

        {/* Dynamic Category Sections - Spacing adjusted for mobile */}
        <div className="space-y-16 md:space-y-32 max-w-7xl mx-auto">
          {sections.map((section, sIndex) => (
            <div key={sIndex} className="space-y-6 md:space-y-10">
              
              {/* Category Title */}
              <div className="border-l-4 md:border-l-8 border-[#FFC107] pl-4 md:pl-6">
                <h3 className="text-2xl md:text-4xl font-black text-white uppercase italic mb-2">
                  {section.category}
                </h3>
                <p className="text-gray-400 text-xs md:text-lg font-bold uppercase tracking-widest">
                  {section.subtitle}
                </p>
              </div>

              {/* Image Grid - 1 col on mobile, 2 on tablet, 3 on desktop */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {section.images.map((image, iIndex) => (
                  <div
                    key={iIndex}
                    className="relative overflow-hidden rounded-2xl border-2 border-white/5 group aspect-[4/3] bg-neutral-900 shadow-2xl"
                  >
                    <img
                      src={image.url}
                      alt={image.alt}
                      loading="lazy"
                      className="w-full h-full object-cover transition duration-700 transform group-hover:scale-105 opacity-80 md:opacity-70 group-hover:opacity-100"
                    />
                    
                    {/* Info Overlay - Always visible on mobile for accessibility, hover on desktop */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6 md:p-8">
                      <div className="flex items-center gap-2">
                         <div className="w-6 md:w-8 h-[2px] bg-[#FFC107]" />
                         <p className="text-[#FFC107] font-black uppercase italic text-sm md:text-base tracking-wider">
                           {image.alt}
                         </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}