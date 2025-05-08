
import { BrainCircuit, Target, TrendingUp, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ValueCard = ({ icon: Icon, title, description }) => {
  return (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
      <CardContent className="p-8">
        <div className="mb-6 inline-flex items-center justify-center p-3 bg-brand-orange/10 rounded-lg">
          <Icon className="w-8 h-8 text-brand-orange" />
        </div>
        <h3 className="text-2xl font-bold text-brand-black mb-4">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

const ValueProposition = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
            Beyond Siloed Automation
          </h2>
          <p className="text-xl text-gray-600">
            Customers don't experience your brand in silos. Why is your customer engagement still fragmented?
          </p>
        </div>
        
        {/* The transformation visualization */}
        <div className="mb-16 relative">
          <div className="bg-white rounded-xl shadow-md p-8 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="w-full md:w-2/5">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-xl font-medium text-gray-800 mb-4">Today's Broken Approach</h3>
                  <div className="space-y-3">
                    <div className="flex items-center bg-white p-3 rounded shadow-sm">
                      <div className="w-3 h-3 bg-gray-400 rounded-full mr-3"></div>
                      <p className="text-gray-600">Channel-centric, siloed systems</p>
                    </div>
                    <div className="flex items-center bg-white p-3 rounded shadow-sm">
                      <div className="w-3 h-3 bg-gray-400 rounded-full mr-3"></div>
                      <p className="text-gray-600">Rules-based, reactive messaging</p>
                    </div>
                    <div className="flex items-center bg-white p-3 rounded shadow-sm">
                      <div className="w-3 h-3 bg-gray-400 rounded-full mr-3"></div>
                      <p className="text-gray-600">No memory, no evolution over time</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Arrow transformation */}
              <div className="py-6 md:py-0">
                <div className="w-16 h-16 bg-brand-orange/20 rounded-full flex items-center justify-center">
                  <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-2/5">
                <div className="bg-brand-orange/10 p-6 rounded-lg border-l-4 border-brand-orange">
                  <h3 className="text-xl font-medium text-gray-800 mb-4">ThoughtNudge: Autonomous Intelligence</h3>
                  <div className="space-y-3">
                    <div className="flex items-center bg-white p-3 rounded shadow-sm">
                      <div className="w-3 h-3 bg-brand-orange rounded-full mr-3"></div>
                      <p className="text-gray-600">Customer-first, goal-first approach</p>
                    </div>
                    <div className="flex items-center bg-white p-3 rounded shadow-sm">
                      <div className="w-3 h-3 bg-brand-orange rounded-full mr-3"></div>
                      <p className="text-gray-600">Cross-channel contextual intelligence</p>
                    </div>
                    <div className="flex items-center bg-white p-3 rounded shadow-sm">
                      <div className="w-3 h-3 bg-brand-orange rounded-full mr-3"></div>
                      <p className="text-gray-600">Persistent memory that evolves over time</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Value cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <ValueCard 
            icon={BrainCircuit}
            title="Contextual Intelligence"
            description="Our agents learn from every interaction across all touchpoints, building a unified understanding that grows stronger with each customer engagement."
          />
          <ValueCard 
            icon={Target}
            title="Autonomous Optimization"
            description="Acting on first-party data, our agents continuously learn what works for each individual user, improving their approach with every interaction."
          />
          <ValueCard 
            icon={TrendingUp}
            title="Goal-First Results"
            description="Set your business goals, and our agents coordinate messaging across channels to deliver higher conversions autonomously, not just automated messages."
          />
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
