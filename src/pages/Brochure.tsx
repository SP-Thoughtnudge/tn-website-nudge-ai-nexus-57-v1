
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, BrainCircuit, MessageCircle, Rocket, Zap, Infinity, Layers, Check } from "lucide-react";
import ValueProposition from "@/components/home/value-proposition";

const Brochure = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section - Clear Value Proposition */}
        <section className="py-20 md:py-24 bg-gradient-to-br from-white to-brand-yellow/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-12 items-center">
                <div className="w-full md:w-3/5 space-y-6">
                  <div className="flex space-x-3 items-center">
                    <span className="bg-brand-orange/10 text-brand-orange text-sm font-medium px-3 py-1 rounded-full">ThoughtNudge</span>
                    <span className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">PDF Brochure</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-brand-black animate-fade-in">
                    <span className="text-brand-orange">Unlock 40% Higher Conversions</span> with Customer-Specific Decisions
                  </h1>
                  <p className="text-xl text-gray-700 animate-fade-in [animation-delay:200ms]">
                    Thoughtnudge: The AI platform that makes unique decisions for each customer—delivering the perfect message, offer, channel, timing, and frequency to maximize your business goals.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 animate-fade-in [animation-delay:400ms]">
                    <Button variant="orange" size="lg" asChild>
                      <Link to="/demo">
                        Request a Demo <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="w-full md:w-2/5 relative">
                  <div className="bg-white rounded-xl shadow-lg p-4 animate-scale-in">
                    <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
                      <p className="text-gray-500 text-center max-w-xs px-6">
                        [IMAGE: Customer journey visualization showing AI making personalized decisions across channels for individual customers]
                      </p>
                    </div>
                  </div>
                  {/* Floating elements to show movement/intelligence */}
                  <div className="absolute -top-4 -right-4 h-12 w-12 bg-brand-orange/20 rounded-full animate-float"></div>
                  <div className="absolute -bottom-6 -left-6 h-16 w-16 bg-brand-pink/20 rounded-full animate-float [animation-delay:1s]"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dual Value Proposition Section - 1:1 Decisions & Autonomous Execution */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">
                  The Dual Advantage
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  ThoughtNudge delivers two transformative values that no other platform can offer
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {/* Value 1: 1:1 Decisions */}
                <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-brand-orange">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-brand-orange/20 rounded-full flex items-center justify-center">
                      <BrainCircuit className="w-6 h-6 text-brand-orange" />
                    </div>
                    <h3 className="text-2xl font-bold text-brand-black ml-4">1:1 Decisions</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      <span className="font-bold text-brand-orange">40% Higher Conversions</span> through true individuation that goes beyond segments
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-brand-orange/20 flex items-center justify-center mr-2 mt-0.5">
                          <Check className="w-3 h-3 text-brand-orange" />
                        </div>
                        <span>Right message & emotional tone for each individual</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-brand-orange/20 flex items-center justify-center mr-2 mt-0.5">
                          <Check className="w-3 h-3 text-brand-orange" />
                        </div>
                        <span>Perfect offers matched to individual preferences</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-brand-orange/20 flex items-center justify-center mr-2 mt-0.5">
                          <Check className="w-3 h-3 text-brand-orange" />
                        </div>
                        <span>Optimal channel, timing & frequency for each customer</span>
                      </li>
                    </ul>
                    <div className="bg-gray-50 p-4 rounded-lg mt-4">
                      <p className="text-sm text-gray-500 italic">
                        [IMAGE: Visual showing how the AI makes unique decisions for each individual customer based on their specific preferences and behaviors]
                      </p>
                    </div>
                  </div>
                </div>

                {/* Value 2: Autonomous Execution */}
                <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-brand-pink">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-brand-pink/20 rounded-full flex items-center justify-center">
                      <Rocket className="w-6 h-6 text-brand-pink" />
                    </div>
                    <h3 className="text-2xl font-bold text-brand-black ml-4">Autonomous Execution</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      <span className="font-bold text-brand-pink">70% Less Manual Work</span> through agentic AI that runs independently
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-brand-pink/20 flex items-center justify-center mr-2 mt-0.5">
                          <Check className="w-3 h-3 text-brand-pink" />
                        </div>
                        <span>No more complex A/B testing across segments</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-brand-pink/20 flex items-center justify-center mr-2 mt-0.5">
                          <Check className="w-3 h-3 text-brand-pink" />
                        </div>
                        <span>Eliminate endless rule-building and journey mapping</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-brand-pink/20 flex items-center justify-center mr-2 mt-0.5">
                          <Check className="w-3 h-3 text-brand-pink" />
                        </div>
                        <span>No more manual campaign optimizations</span>
                      </li>
                    </ul>
                    <div className="bg-gray-50 p-4 rounded-lg mt-4">
                      <p className="text-sm text-gray-500 italic">
                        [IMAGE: Visualization contrasting the old complex workflow vs. ThoughtNudge's simple "set it and forget it" approach]
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works - Customer Journey */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">
                  How Thoughtnudge Works
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  A continuous learning system that adapts to each customer's behavior
                </p>
              </div>
              
              {/* Customer Journey Map */}
              <div className="bg-white p-6 rounded-xl shadow-lg mb-12">
                <div className="flex flex-col space-y-12">
                  {/* Step 1: Setup */}
                  <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
                    <div className="w-full md:w-2/5">
                      <div className="bg-brand-orange/10 p-4 rounded-lg border-l-4 border-brand-orange flex items-center">
                        <div className="w-12 h-12 bg-brand-orange/20 rounded-full flex items-center justify-center mr-4">
                          <span className="text-2xl font-bold text-brand-orange">1</span>
                        </div>
                        <h3 className="text-xl font-bold text-brand-black">Set Up the Decision Space</h3>
                      </div>
                    </div>
                    <div className="w-full md:w-3/5 pl-0 md:pl-6">
                      <p className="text-gray-700 mb-4">
                        You provide all the possible options:
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        <div className="bg-white p-3 rounded border border-gray-200 shadow-sm">
                          <Layers className="h-5 w-5 text-brand-orange mb-1" />
                          <p className="text-sm">100s of message variations with different emotional tones</p>
                        </div>
                        <div className="bg-white p-3 rounded border border-gray-200 shadow-sm">
                          <MessageCircle className="h-5 w-5 text-brand-pink mb-1" />
                          <p className="text-sm">Multiple channels (email, SMS, push, web)</p>
                        </div>
                        <div className="bg-white p-3 rounded border border-gray-200 shadow-sm">
                          <Rocket className="h-5 w-5 text-brand-orange mb-1" />
                          <p className="text-sm">Various offers and products</p>
                        </div>
                      </div>
                      <div className="mt-4 bg-gray-50 p-3 rounded">
                        <p className="text-sm text-gray-600 italic">
                          [IMAGE: Dashboard interface showing message library, channel options, offer configurations, and other decision inputs]
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Arrow connector */}
                  <div className="flex justify-center">
                    <div className="h-8 w-0.5 bg-gray-300"></div>
                  </div>
                  
                  {/* Step 2: AI Decision */}
                  <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
                    <div className="w-full md:w-2/5">
                      <div className="bg-brand-pink/10 p-4 rounded-lg border-l-4 border-brand-pink flex items-center">
                        <div className="w-12 h-12 bg-brand-pink/20 rounded-full flex items-center justify-center mr-4">
                          <span className="text-2xl font-bold text-brand-pink">2</span>
                        </div>
                        <h3 className="text-xl font-bold text-brand-black">1:1 Decision Making</h3>
                      </div>
                    </div>
                    <div className="w-full md:w-3/5 pl-0 md:pl-6">
                      <p className="text-gray-700 mb-4">
                        ThoughtNudge AI makes unique decisions for each customer using our Neuronudge Framework:
                      </p>
                      <div className="flex flex-col space-y-2">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-brand-pink rounded-full mr-2"></div>
                          <p>Analyzes psychographic patterns & emotional responses</p>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-brand-orange rounded-full mr-2"></div>
                          <p>Determines optimal messages, offers & channels</p>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-brand-yellow rounded-full mr-2"></div>
                          <p>Calculates perfect timing & frequency for each person</p>
                        </div>
                      </div>
                      <div className="mt-4 bg-gray-50 p-3 rounded">
                        <p className="text-sm text-gray-600 italic">
                          [DIAGRAM: Neuronudge Framework visual showing how AI + behavioral science creates a deep understanding of each customer that drives decisions]
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Arrow connector */}
                  <div className="flex justify-center">
                    <div className="h-8 w-0.5 bg-gray-300"></div>
                  </div>
                  
                  {/* Step 3: Activation & Learning */}
                  <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
                    <div className="w-full md:w-2/5">
                      <div className="bg-brand-yellow/20 p-4 rounded-lg border-l-4 border-yellow-500 flex items-center">
                        <div className="w-12 h-12 bg-brand-yellow/30 rounded-full flex items-center justify-center mr-4">
                          <span className="text-2xl font-bold text-yellow-600">3</span>
                        </div>
                        <h3 className="text-xl font-bold text-brand-black">Activation & Learning</h3>
                      </div>
                    </div>
                    <div className="w-full md:w-3/5 pl-0 md:pl-6">
                      <p className="text-gray-700 mb-4">
                        The AI executes decisions and continuously learns:
                      </p>
                      <div className="flex space-x-2 mb-3">
                        <div className="flex-1 bg-white p-3 rounded border border-gray-200 shadow-sm text-center">
                          <Zap className="h-5 w-5 mx-auto text-yellow-500 mb-1" />
                          <p className="text-sm">Autonomous Execution</p>
                        </div>
                        <div className="flex-1 bg-white p-3 rounded border border-gray-200 shadow-sm text-center">
                          <BrainCircuit className="h-5 w-5 mx-auto text-brand-orange mb-1" />
                          <p className="text-sm">Analyze Response</p>
                        </div>
                        <div className="flex-1 bg-white p-3 rounded border border-gray-200 shadow-sm text-center">
                          <Infinity className="h-5 w-5 mx-auto text-brand-pink mb-1" />
                          <p className="text-sm">Continuous Improvement</p>
                        </div>
                      </div>
                      <div className="mt-4 bg-gray-50 p-3 rounded">
                        <p className="text-sm text-gray-600 italic">
                          [DIAGRAM: Circular flow showing execution across channels, feedback collection, insight generation, and continuous optimization process]
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* The Neuronudge Framework */}
              <div className="mt-16 bg-white p-8 rounded-xl shadow-lg">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-full md:w-2/5">
                    <h3 className="text-2xl font-bold text-brand-black mb-4">The Neuronudge Framework</h3>
                    <p className="text-gray-700 mb-6">
                      Our proprietary system that combines AI with behavioral science to understand the "why" behind customer actions.
                    </p>
                    <div className="space-y-4">
                      <div className="bg-brand-orange/10 p-3 rounded-lg border-l-3 border-brand-orange">
                        <p className="font-medium">Psychographic Profiling</p>
                        <p className="text-sm text-gray-600">Understands emotional drivers and decision patterns</p>
                      </div>
                      <div className="bg-brand-pink/10 p-3 rounded-lg border-l-3 border-brand-pink">
                        <p className="font-medium">Cross-Channel Learning</p>
                        <p className="text-sm text-gray-600">Creates a unified view from all customer interactions</p>
                      </div>
                      <div className="bg-brand-yellow/10 p-3 rounded-lg border-l-3 border-yellow-500">
                        <p className="font-medium">Insight Generation</p>
                        <p className="text-sm text-gray-600">Discovers patterns that humans can't see</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-3/5">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <p className="text-gray-500 italic text-center">
                        [IMAGE: Visual representation of the Neuronudge Framework showing the intersection of AI technology and behavioral science, highlighting how customer signals are processed through multiple layers to create deep understanding]
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results & Control */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-2xl font-bold text-brand-black mb-4 flex items-center">
                    <Rocket className="mr-3 h-6 w-6 text-brand-orange" />
                    Proven Results
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-brand-orange/20 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-brand-orange font-bold">✓</span>
                      </div>
                      <div>
                        <p className="font-medium">40%+ increase in engagement</p>
                        <p className="text-sm text-gray-600">Across all customer touchpoints</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-brand-orange/20 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-brand-orange font-bold">✓</span>
                      </div>
                      <div>
                        <p className="font-medium">32% higher conversion rates</p>
                        <p className="text-sm text-gray-600">From personalized customer journeys</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-brand-orange/20 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-brand-orange font-bold">✓</span>
                      </div>
                      <div>
                        <p className="font-medium">70% reduction in campaign setup</p>
                        <p className="text-sm text-gray-600">Through automated decision-making</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-2xl font-bold text-brand-black mb-4 flex items-center">
                    <BrainCircuit className="mr-3 h-6 w-6 text-brand-pink" />
                    Full Control & Transparency
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Unlike black-box AI solutions, Thoughtnudge provides:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-brand-pink/20 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-brand-pink font-bold">•</span>
                      </div>
                      <p>Complete visibility into AI decision rationale</p>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-brand-pink/20 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-brand-pink font-bold">•</span>
                      </div>
                      <p>Actionable insights about customer preferences</p>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-brand-pink/20 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-brand-pink font-bold">•</span>
                      </div>
                      <p>Full control over goals and decision parameters</p>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Integration Section */}
              <div className="mt-12 bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-brand-black mb-6 text-center">
                  Seamless Integration with Your Tech Stack
                </h3>
                <p className="text-gray-700 mb-8 text-center max-w-2xl mx-auto">
                  ThoughtNudge connects with your existing systems and makes your current stack intelligent—no rip and replace required.
                </p>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-center p-4 border border-dashed border-gray-300 rounded-lg">
                    <p className="text-gray-500 italic">
                      [IMAGE: Integration diagram showing ThoughtNudge connecting with CRMs, marketing platforms, analytics tools, and e-commerce systems]
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-16 text-center bg-gradient-to-br from-brand-orange/5 to-brand-pink/5 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-brand-black mb-4">
                  Ready to Transform Your Customer Engagement?
                </h3>
                <p className="text-lg text-gray-700 mb-8 max-w-lg mx-auto">
                  Join innovative brands using Thoughtnudge to deliver hyper-personalized experiences that drive conversions without the manual work.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="orange" size="lg" asChild>
                    <Link to="/demo">
                      Book Your Demo Today
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Brochure;
