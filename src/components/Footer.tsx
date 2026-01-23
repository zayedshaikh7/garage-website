export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 md:py-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-8">
          
          {/* Logo and Tagline Area */}
          <div className="flex flex-col items-center md:items-start gap-4">
            {/* Logo container */}
            <div className="bg-white p-2 rounded-xl shadow-lg">
               <img 
                 src="/logo.jpeg" 
                 alt="United Auto Logo" 
                 className="h-10 md:h-14 w-auto object-contain" 
               />
            </div>
            <p className="text-gray-500 text-xs md:text-sm italic font-medium">
              Premium Automotive Care in Mumbai.
            </p>
          </div>
          
          {/* Copyright and Brand Promise */}
          <div className="text-center md:text-right flex flex-col gap-2">
            <p className="text-sm text-gray-400">
              © 2024 <span className="text-white font-bold">United Auto Garage.</span>
              <br className="md:hidden" /> All rights reserved.
            </p>
            <p className="text-[#FFC107] text-[10px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-widest">
              Quality Service at Half the Price
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}