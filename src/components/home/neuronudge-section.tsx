
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const NeuronudgeSection = () => {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-brand-yellow/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-brand-orange/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
            The Neuronudge Framework: You Remain in Control
          </h2>
          <p className="text-xl text-gray-600">
            Our proprietary framework combines AI with behavioral science to understand customers at a deeper level—all while keeping you in the driver's seat.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-white rounded-xl shadow-md p-8">
            {/* Designer placeholder for Neuronudge framework visualization */}
            <div className="text-center p-8 border border-dashed border-gray-300 rounded-lg">
              <p className="text-gray-500 italic mb-6">
                [DESIGNER: Create a visualization of the Neuronudge Framework showing:
                1. Data inputs (behavior, context, psychographics)
                2. AI processing layer
                3. Decision outputs
                4. Human control panel/dashboard
                
                Use a brain-inspired design that shows both the AI intelligence and the human control elements.]
              </p>
              <p className="text-gray-600">
                Visualize how the framework processes customer data through multiple layers while maintaining human oversight.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-brand-yellow">
              <h3 className="text-xl font-bold text-brand-black mb-3">Psychographic Understanding</h3>
              <p className="text-gray-600">
                Goes beyond demographics and behavior to understand the "why" behind customer actions—their motivations, preferences, and decision-making patterns.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-brand-orange">
              <h3 className="text-xl font-bold text-brand-black mb-3">Goal-Oriented Design</h3>
              <p className="text-gray-600">
                You set the business goals and guardrails. The AI optimizes within those boundaries, ensuring alignment with your strategy.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-brand-pink">
              <h3 className="text-xl font-bold text-brand-black mb-3">Transparent Decision-Making</h3>
              <p className="text-gray-600">
                Unlike black-box AI, ThoughtNudge explains why it made each decision, giving you insights and maintaining accountability.
              </p>
            </div>
            
            <Button asChild variant="default" className="mt-4 group bg-brand-black text-white hover:bg-brand-black/90">
              <Link to="/how-it-works">
                Explore the Framework
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeuronudgeSection;
