
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
            1:1 Decisions Mean Higher Conversions
          </h2>
          <p className="text-xl text-gray-600">
            While others claim to personalize, we make unique decisions for each customer in real-time—across all touchpoints.
          </p>
        </div>
        
        {/* The transformation visualization */}
        <div className="mb-16 relative">
          <div className="bg-white rounded-xl shadow-md p-8 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="w-full md:w-2/5">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-xl font-medium text-gray-800 mb-4">The Old Way: Segments & Rules</h3>
                  <div className="space-y-3">
                    <div className="flex items-center bg-white p-3 rounded shadow-sm">
                      <div className="w-3 h-3 bg-gray-400 rounded-full mr-3"></div>
                      <p className="text-gray-600">Static segments that don't adapt</p>
                    </div>
                    <div className="flex items-center bg-white p-3 rounded shadow-sm">
                      <div className="w-3 h-3 bg-gray-400 rounded-full mr-3"></div>
                      <p className="text-gray-600">Manual A/B testing with limited variants</p>
                    </div>
                    <div className="flex items-center bg-white p-3 rounded shadow-sm">
                      <div className="w-3 h-3 bg-gray-400 rounded-full mr-3"></div>
                      <p className="text-gray-600">Rigid journeys that break easily</p>
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
                  <h3 className="text-xl font-medium text-gray-800 mb-4">ThoughtNudge: 1:1 Intelligence</h3>
                  <div className="space-y-3">
                    <div className="flex items-center bg-white p-3 rounded shadow-sm">
                      <div className="w-3 h-3 bg-brand-orange rounded-full mr-3"></div>
                      <p className="text-gray-600">Unique decisions for each customer</p>
                    </div>
                    <div className="flex items-center bg-white p-3 rounded shadow-sm">
                      <div className="w-3 h-3 bg-brand-orange rounded-full mr-3"></div>
                      <p className="text-gray-600">Continuous learning and adaptation</p>
                    </div>
                    <div className="flex items-center bg-white p-3 rounded shadow-sm">
                      <div className="w-3 h-3 bg-brand-orange rounded-full mr-3"></div>
                      <p className="text-gray-600">Dynamic journeys that evolve in real-time</p>
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
            title="Cross-Channel Learning"
            description="Our AI learns from every interaction across all channels—email, SMS, push, on-site—creating a unified understanding of each customer's preferences."
          />
          <ValueCard 
            icon={Target}
            title="Perfect Match Delivery"
            description="Automatically delivers the right message, offer, channel, timing, frequency and sequence tailored to each individual customer."
          />
          <ValueCard 
            icon={TrendingUp}
            title="Conversion Focused"
            description="With true 1:1 decisions, customers receive exactly what resonates with them, resulting in significantly higher engagement and conversion rates."
          />
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
