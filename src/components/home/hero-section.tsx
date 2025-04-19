
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center relative">
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-brand-yellow rounded-full opacity-50 blur-xl"></div>
          <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-brand-pink rounded-full opacity-30 blur-2xl"></div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-black leading-tight mb-6 animate-fade-in">
            Turn Every Customer Touchpoint into a Conversion Moment—Autonomously.
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in [animation-delay:200ms]">
            Thoughtnudge is your AI teammate that makes 1:1 marketing decisions in real time—what to send, when to send it, and why it works—across every channel and every customer, at scale.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in [animation-delay:400ms]">
            <Button variant="orange" size="xl">
              Book a Demo
            </Button>
            <Button variant="outline" size="xl">
              See How It Works
            </Button>
          </div>
          
          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent h-12 bottom-0 z-10"></div>
            <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden relative animate-scale-in">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" 
                alt="AI personalization platform" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/10 to-brand-pink/10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
