
const LogoCloud = () => {
  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <p className="text-lg font-semibold text-gray-600">
            Trusted by innovative growth teams
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {/* Replace with actual customer logos */}
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-12 w-32 bg-gray-100 rounded animate-pulse"></div>
          ))}
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-3xl font-bold text-brand-black">93%</p>
            <p className="text-gray-600">increase in customer engagement</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-brand-black">2.4x</p>
            <p className="text-gray-600">higher conversion rates</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-brand-black">60%</p>
            <p className="text-gray-600">reduction in campaign setup time</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;
