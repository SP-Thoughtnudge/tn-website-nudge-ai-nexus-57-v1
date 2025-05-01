
import { BrainCircuit, BarChart, Compass, Zap } from "lucide-react";

const AutonomousSection = () => {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -right-40 top-20 w-80 h-80 bg-brand-pink/10 rounded-full blur-3xl"></div>
      <div className="absolute -left-40 bottom-20 w-80 h-80 bg-brand-yellow/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
            Autonomous Execution, Minimal Effort
          </h2>
          <p className="text-xl text-gray-600">
            Set your goals and guardrails once, then let ThoughtNudge's Agentic AI handle everything else—no manual optimization required.
          </p>
        </div>

        {/* Autonomous execution visualization */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-brand-black mb-6">From Manual to Autonomous</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 bg-red-100 p-2 rounded-full text-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">No More Building Complex Rules</p>
                    <p className="text-gray-600 mt-1">Stop creating endless if-then rules that quickly become unmanageable.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 bg-red-100 p-2 rounded-full text-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">No More A/B Testing Fatigue</p>
                    <p className="text-gray-600 mt-1">Eliminate time-consuming testing across multiple segments and variations.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 bg-red-100 p-2 rounded-full text-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">No More Campaign Creation Burnout</p>
                    <p className="text-gray-600 mt-1">Stop building separate campaigns for every segment and scenario.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              {/* Designer placeholder for autonomous execution visualization */}
              <div className="text-center p-4 border border-dashed border-gray-300 rounded-lg">
                <p className="text-gray-500 italic mb-4">
                  [DESIGNER: Create a visualization showing the autonomous execution cycle:
                  1. Marketers set goals and action spaces (content, offers, channels)
                  2. AI makes decisions in real-time for each customer 
                  3. Results feed back into the system
                  4. System continuously improves]
                </p>
                <p className="text-gray-600">Show how marketers only need to define what's possible, then the AI handles everything else.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <Zap className="w-12 h-12 text-brand-orange mb-6" />
            <h3 className="text-xl font-bold text-brand-black mb-4">
              Set It, Don't Forget It
            </h3>
            <p className="text-gray-600">
              Define your goals and guardrails once, then let the AI handle the rest. No constant monitoring required.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <BrainCircuit className="w-12 h-12 text-brand-pink mb-6" />
            <h3 className="text-xl font-bold text-brand-black mb-4">
              Customer-Offer Fit
            </h3>
            <p className="text-gray-600">
              Our AI identifies which offer will resonate most with each customer based on their unique behaviors and preferences.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <BarChart className="w-12 h-12 text-brand-yellow mb-6" />
            <h3 className="text-xl font-bold text-brand-black mb-4">
              Channel Optimization
            </h3>
            <p className="text-gray-600">
              Automatically selects the perfect channel, timing, and frequency for each customer to maximize engagement.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <Compass className="w-12 h-12 text-brand-orange mb-6" />
            <h3 className="text-xl font-bold text-brand-black mb-4">
              Message Resonance
            </h3>
            <p className="text-gray-600">
              Delivers perfectly matched messaging that speaks to each customer's emotional and psychographic profile.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutonomousSection;
