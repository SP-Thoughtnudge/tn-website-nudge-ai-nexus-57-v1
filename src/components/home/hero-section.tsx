
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        {/* Decorative elements */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-orange/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-brand-yellow/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-brand-pink/10 rounded-full blur-2xl"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-black leading-tight mb-6 animate-fade-in">
            Beyond Segments: <span className="text-brand-orange">True 1:1 Decisions</span> for Every Customer
          </h1>
          
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto animate-fade-in [animation-delay:200ms]">
            ThoughtNudge's Agentic AI makes real-time decisions for each individual customer—delivering the right message, offer, and timing without rules or manual optimization.
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

        {/* Visual representation of 1:1 personalization */}
        <div className="mt-16 relative z-10">
          {/* Container for the visualization */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-scale-in">
            <div className="aspect-video bg-gray-50 relative p-4">
              {/* This would be replaced with an actual visualization/animation */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Placeholder for designer - visualization showing multiple customer paths */}
                <div className="text-center p-8 max-w-lg">
                  <p className="text-gray-500 mb-4 italic">
                    [DESIGNER: Create a dynamic visualization showing 4-5 different customer profiles, each receiving unique 
                    treatments across different channels with varying messages and timing. Use animation to show decisions 
                    happening in real time, with arrows converging from data points to decisions to outcomes.]
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 text-center">
              <p className="text-lg text-gray-700 font-medium">
                Every customer receives their own unique experience—no segments, no rules, just intelligent decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
