
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, BrainCircuit, MessageCircle, Rocket, Users } from "lucide-react";

const Brochure = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-brand-black mb-6 animate-fade-in">
                Unlock Exponential Growth with Agentic AI
              </h1>
              <p className="text-xl text-gray-600 mb-8 animate-fade-in [animation-delay:200ms]">
                Thoughtnudge: The AI Teammate That Drives 1:1 Customer Decisions, Autonomously
              </p>
              <div className="flex justify-center">
                <div className="max-w-md">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=900" 
                    alt="Growth leader using Thoughtnudge platform" 
                    className="rounded-xl shadow-lg mb-8 animate-scale-in"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in [animation-delay:400ms]">
                <Button variant="orange" size="lg" asChild>
                  <Link to="/demo">
                    Request a Demo <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Page 1: Value Proposition */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-brand-black">
                    Beyond Black Box AI: Your Intelligent Customer Brain
                  </h2>
                  <p className="text-lg text-gray-600">
                    Imagine a world where every customer interaction is optimized for conversion, retention, and loyalty – without the endless manual effort.
                  </p>
                  <p className="text-lg text-gray-600">
                    Thoughtnudge creates a dedicated AI agent for each customer that continuously observes, learns, and makes decisions across all your channels – delivering the perfect message, at the perfect moment.
                  </p>
                  <div className="pt-4">
                    <h3 className="text-xl font-bold text-brand-orange mb-3">True 1:1 Personalization</h3>
                    <p className="text-gray-700">
                      Move beyond limited segments to understand each customer's unique preferences and behaviors, resulting in significantly higher conversions and lifetime value.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-gray-100 p-4 rounded-lg shadow-sm border border-gray-200 h-72 flex items-center justify-center">
                    <p className="text-gray-500 text-center max-w-xs">
                      [IMAGE: Visualization showing multiple customers receiving different, personalized experiences across channels simultaneously, with AI agents making decisions for each]
                    </p>
                  </div>
                  <div className="absolute -bottom-6 -right-6 h-24 w-24 bg-brand-yellow/30 rounded-full blur-xl -z-10"></div>
                </div>
              </div>

              <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 border-l-4 border-l-brand-orange">
                  <BrainCircuit className="h-8 w-8 text-brand-orange mb-4" />
                  <h3 className="text-lg font-bold text-brand-black mb-2">Cross-Channel Intelligence</h3>
                  <p className="text-gray-600">
                    Learning from all customer touchpoints to create a unified understanding that drives consistent, effective engagement.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 border-l-4 border-l-brand-pink">
                  <MessageCircle className="h-8 w-8 text-brand-pink mb-4" />
                  <h3 className="text-lg font-bold text-brand-black mb-2">Psychographic Resonance</h3>
                  <p className="text-gray-600">
                    Connecting with customers on a deeper level by understanding their motivations, not just their demographic profile.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 border-l-4 border-l-brand-yellow">
                  <Rocket className="h-8 w-8 text-brand-yellow mb-4" />
                  <h3 className="text-lg font-bold text-brand-black mb-2">Scalable Growth</h3>
                  <p className="text-gray-600">
                    Automatically optimizing thousands of interactions simultaneously without increasing your team's workload.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Page 2: Features & Benefits */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-10 text-center">
                How Thoughtnudge Works: Intelligent Automation for Unprecedented Results
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                <div className="order-2 md:order-1 bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                  <div className="bg-gray-100 h-64 flex items-center justify-center">
                    <p className="text-gray-500 text-center max-w-xs">
                      [DIAGRAM: The AI Learning Cycle - showing circular flow between Signal Collection → Autonomous Experimentation → Decision Making → Execution → Feedback → back to Signal Collection]
                    </p>
                  </div>
                </div>
                <div className="order-1 md:order-2 space-y-6">
                  <h3 className="text-2xl font-bold text-brand-black">Autonomous Execution</h3>
                  <p className="text-lg text-gray-600">
                    Set your business goals and decision parameters once, then let Thoughtnudge handle the rest. No more:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-brand-orange/20 text-brand-orange rounded-full mr-3 mt-1">✓</span>
                      <span>Manual A/B testing of countless variants</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-brand-orange/20 text-brand-orange rounded-full mr-3 mt-1">✓</span>
                      <span>Building complex journey maps for each segment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-brand-orange/20 text-brand-orange rounded-full mr-3 mt-1">✓</span>
                      <span>Tweaking rules that quickly become outdated</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-brand-orange/20 text-brand-orange rounded-full mr-3 mt-1">✓</span>
                      <span>Managing fragmented tools across channels</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 mb-16 relative">
                <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-brand-pink/20 rounded-full blur-3xl -z-10"></div>
                
                <h3 className="text-2xl font-bold text-brand-black mb-6">
                  The Customer-Offer Fit Revolution
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-gray-700 mb-6">
                      Thoughtnudge's Neuronudge Framework combines behavioral science with machine learning to understand what truly motivates each customer:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="inline-flex items-center justify-center w-6 h-6 bg-brand-orange/20 text-brand-orange rounded-full mr-3 mt-1">•</span>
                        <span><strong>Value-seekers</strong> receive quality-focused messaging</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-flex items-center justify-center w-6 h-6 bg-brand-pink/20 text-brand-pink rounded-full mr-3 mt-1">•</span>
                        <span><strong>Deal-hunters</strong> see offers that emphasize savings</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-flex items-center justify-center w-6 h-6 bg-brand-yellow/20 text-brand-yellow rounded-full mr-3 mt-1">•</span>
                        <span><strong>Novelty-seekers</strong> discover what's new and exciting</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded border border-gray-100">
                    <div className="h-48 flex items-center justify-center">
                      <p className="text-gray-500 text-center max-w-xs">
                        [IMAGE: Visual showing how the same product is presented with three different value propositions to different customer types]
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-full md:w-1/2">
                    <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
                      <div className="bg-gray-100 h-64 flex items-center justify-center">
                        <p className="text-gray-500 text-center max-w-xs">
                          [IMAGE: Dashboard visualization showing AI decision explanations and performance metrics with upward trending graphs]
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 space-y-4">
                    <h3 className="text-2xl font-bold text-brand-black">Full Transparency, Real Results</h3>
                    <p className="text-gray-600">
                      Unlike black-box AI, Thoughtnudge explains every decision it makes, providing valuable insights into customer preferences while delivering measurable outcomes:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Users className="h-5 w-5 text-brand-orange mr-2 mt-0.5" />
                        <span><strong className="text-brand-black">40%+</strong> increase in customer engagement</span>
                      </li>
                      <li className="flex items-start">
                        <Users className="h-5 w-5 text-brand-orange mr-2 mt-0.5" />
                        <span><strong className="text-brand-black">32%</strong> higher conversion rates</span>
                      </li>
                      <li className="flex items-start">
                        <Users className="h-5 w-5 text-brand-orange mr-2 mt-0.5" />
                        <span><strong className="text-brand-black">70%</strong> reduction in campaign setup time</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-16 text-center">
                <h3 className="text-2xl font-bold text-brand-black mb-6">
                  Ready to Transform Your Customer Engagement?
                </h3>
                <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto">
                  Join innovative brands using Thoughtnudge to deliver hyper-personalized experiences that drive conversions without the manual work.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="orange" size="lg" asChild>
                    <Link to="/demo">
                      Book a Demo
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/case-studies">
                      View Success Stories
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
