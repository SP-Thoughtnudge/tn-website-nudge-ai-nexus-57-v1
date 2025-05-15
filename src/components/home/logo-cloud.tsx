
const LogoCloud = () => {
  // Real company logos
  const logos = [
    { 
      src: "/lovable-uploads/2ecd3e81-daa9-4c0e-8a37-7448f8f39df6.png", 
      alt: "Conscious Chemist", 
      className: "h-12 w-32 object-contain" 
    },
    { 
      src: "/lovable-uploads/f7996a52-3684-4c71-a780-2533d4ae8cfd.png", 
      alt: "Cooked", 
      className: "h-12 w-32 object-contain" 
    },
    { 
      src: "/lovable-uploads/72da9cc0-80c9-429e-b00c-7235581ebd26.png", 
      alt: "Sugarbox", 
      className: "h-12 w-32 object-contain" 
    },
    { 
      src: "/lovable-uploads/f7996a52-3684-4c71-a780-2533d4ae8cfd.png", 
      alt: "Cooked", 
      className: "h-12 w-32 object-contain" 
    },
    { 
      src: "/lovable-uploads/2ecd3e81-daa9-4c0e-8a37-7448f8f39df6.png", 
      alt: "Conscious Chemist", 
      className: "h-12 w-32 object-contain" 
    },
    { 
      src: "/lovable-uploads/72da9cc0-80c9-429e-b00c-7235581ebd26.png", 
      alt: "Sugarbox", 
      className: "h-12 w-32 object-contain" 
    },
  ];

  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <p className="text-lg font-semibold text-brand-black">
            Trusted by innovative growth teams
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center mb-12">
          {logos.map((logo, i) => (
            <div key={i} className="flex items-center justify-center p-4 bg-white rounded shadow-sm border border-gray-50 hover:shadow-md transition-shadow">
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className={logo.className}
              />
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center mt-8 border-t border-gray-100 pt-12">
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-3xl font-bold text-brand-pink mb-2">40%</p>
            <p className="text-brand-gray">higher conversion</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-3xl font-bold text-brand-orange mb-2">60%</p>
            <p className="text-brand-gray">higher efficiency</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-3xl font-bold text-brand-yellow mb-2">35%</p>
            <p className="text-brand-gray">lower costs</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-3xl font-bold text-brand-pink mb-2">25%</p>
            <p className="text-brand-gray">higher CLTV</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;
