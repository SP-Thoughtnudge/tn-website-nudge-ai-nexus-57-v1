
const LogoCloud = () => {
  // Updated company logos with new images
  const logos = [
    { 
      src: "/lovable-uploads/c0bf89d6-693b-4937-a2ea-bba9658803eb.png", 
      alt: "Conscious Chemist", 
      className: "h-12 w-auto object-contain" 
    },
    { 
      src: "/lovable-uploads/d11d516d-db05-4e2f-ba79-18ddc6238a3c.png", 
      alt: "Cooked", 
      className: "h-12 w-auto object-contain" 
    },
    { 
      src: "/lovable-uploads/cf44b6d1-6cbe-4d7b-981c-ef62fe6012f4.png", 
      alt: "Alice Blue", 
      className: "h-12 w-auto object-contain" 
    },
    { 
      src: "/lovable-uploads/bcd2babc-3041-43b5-b6e3-a5696fc23edd.png", 
      alt: "Green Logo", 
      className: "h-14 w-auto object-contain" 
    }
  ];

  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <p className="text-lg font-semibold text-brand-black">
            Trusted by innovative growth teams
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center mb-12">
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
