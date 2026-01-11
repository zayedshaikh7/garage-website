export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            {/* Using a background container to ensure the logo is visible if it has dark parts */}
            <div className="bg-white p-2 rounded-lg">
               <img src="/logo.jpeg" alt="United Auto Logo" className="h-14 w-auto" />
            </div>
            <p className="text-gray-500 text-sm italic">Premium Automotive Care in Mumbai.</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-400">© 2024 United Auto Garage. All rights reserved.</p>
            <p className="text-[#FFC107] text-xs font-black uppercase mt-2 tracking-widest">Quality Service at Half the Price</p>
          </div>
        </div>
      </div>
    </footer>
  );
}