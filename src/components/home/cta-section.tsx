
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative max-w-4xl mx-auto bg-gradient-to-br from-brand-black to-gray-900 rounded-2xl overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-pink rounded-full -translate-x-1/3 translate-y-1/3 blur-3xl"></div>
          </div>
          
          <div className="relative z-10 p-12 md:p-16 flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to transform your customer experiences?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Join innovative brands using Thoughtnudge to deliver hyper-personalized interactions that drive conversions and build lasting customer relationships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="orange" size="lg">
                Book a Demo
              </Button>
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                See Customer Stories
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
