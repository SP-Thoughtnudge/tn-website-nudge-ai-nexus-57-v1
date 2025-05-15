
import { BrainCircuit, Target, TrendingUp, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import CalendarDialog from "@/components/ui/calendar-dialog";

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
            AI Agents That Deliver Real Business Impact
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Our autonomous growth agents learn and adapt with every interaction, guiding each customer toward your business goals.
          </p>
          <p className="text-2xl font-bold text-brand-orange mb-8">
            Higher Conversions. Greater Efficiency. Autonomous Growth.
          </p>
          <div className="flex justify-center">
            <CalendarDialog buttonVariant="pink">
              Schedule a Demo
            </CalendarDialog>
          </div>
        </div>
        
        {/* Transformation visualization - now leads with solution */}
        <div className="mb-16 relative">
          <div className="bg-white rounded-xl shadow-md p-8 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="w-full md:w-1/2">
                <div className="bg-brand-orange/10 p-6 rounded-lg border-l-4 border-brand-orange">
                  <h3 className="text-xl font-medium text-gray-800 mb-4">ThoughtNudge: Intelligent Growth</h3>
                  <div className="space-y-3">
                    <div className="flex items-center bg-white p-3 rounded shadow-sm">
                      <div className="w-3 h-3 bg-brand-orange rounded-full mr-3"></div>
                      <p className="text-gray-600">One AI agent per customer, guiding toward goals</p>
                    </div>
                    <div className="flex items-center bg-white p-3 rounded shadow-sm">
                      <div className="w-3 h-3 bg-brand-orange rounded-full mr-3"></div>
                      <p className="text-gray-600">Context-aware decisions across all channels</p>
                    </div>
                    <div className="flex items-center bg-white p-3 rounded shadow-sm">
                      <div className="w-3 h-3 bg-brand-orange rounded-full mr-3"></div>
                      <p className="text-gray-600">Continuous learning that improves over time</p>
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
              
              <div className="w-full md:w-1/2">
                <div className="bg-green-500/10 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-xl font-medium text-gray-800 mb-4">Measurable Business Impact</h3>
                  <div className="space-y-3">
                    <div className="flex items-center bg-white p-3 rounded shadow-sm">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                      <p className="text-gray-600">40% higher conversions with personalized experiences</p>
                    </div>
                    <div className="flex items-center bg-white p-3 rounded shadow-sm">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                      <p className="text-gray-600">60% improved efficiency with autonomous execution</p>
                    </div>
                    <div className="flex items-center bg-white p-3 rounded shadow-sm">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                      <p className="text-gray-600">35% lower costs with targeted, effective messaging</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Value cards - highlighting key aspects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <ValueCard 
            icon={BrainCircuit}
            title="AI Agents for Every Customer"
            description="A dedicated AI agent for each customer that learns preferences, behaviors, and context—then intelligently guides them toward your business goals."
          />
          <ValueCard 
            icon={Target}
            title="Context-Aware Decisions"
            description="Every outreach is driven by real-time behavioral signals and psychographic insights, making each interaction natural, timely, and effective."
          />
          <ValueCard 
            icon={TrendingUp}
            title="Fully Autonomous Growth"
            description="You set the goals and guardrails. Our system continuously learns, decides, and acts—improving with every customer interaction without manual effort."
          />
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
