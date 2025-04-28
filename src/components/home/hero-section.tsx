
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-brand-yellow rounded-full opacity-50 blur-xl"></div>
          <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-brand-pink rounded-full opacity-30 blur-2xl"></div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-black leading-tight mb-6 animate-fade-in">
            Meet Your AI Teammate for Growth
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in [animation-delay:200ms]">
            Thoughtnudge's Agentic AI makes 1:1 decisions for each customer in real-time. No rules, no segments, no A/B tests—just set your goals and watch your outcomes soar.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in [animation-delay:400ms]">
            <Button variant="orange" size="xl" asChild>
              <Link to="/demo">
                Book a Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/how-it-works">See How It Works</Link>
            </Button>
          </div>
        </div>

        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent h-12 bottom-0 z-10"></div>
          <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden relative animate-scale-in">
            {/* Image placeholder - Replace with actual dashboard/UI showing personalized decisions */}
            <div className="aspect-video bg-gray-100 relative">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                [Interactive visualization showing different customers receiving personalized experiences]
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
