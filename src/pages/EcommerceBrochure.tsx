
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingCart, Zap, BarChart3, Percent, Tag, Users, TrendingUp, Check, MessageSquare, BrainCircuit, Infinity, Network, Clock } from "lucide-react";

const EcommerceBrochure = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-white to-brand-orange/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col-reverse md:flex-row gap-8 items-center">
                <div className="w-full md:w-3/5 space-y-5">
                  <div className="flex space-x-3 items-center">
                    <span className="bg-brand-orange/10 text-brand-orange text-sm font-medium px-3 py-1 rounded-full">E-Commerce</span>
                    <span className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">AI Growth Solution</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-brand-black animate-fade-in">
                    <span className="text-brand-orange">Transform Customer Journeys</span> Into Revenue Engines
                  </h1>
                  <p className="text-xl text-gray-700">
                    Deploy autonomous AI agents that understand each shopper's unique preferences to deliver personalized experiences that dramatically increase conversion, repeat purchases, and lifetime value.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="orange" size="lg" asChild>
                      <Link to="/demo">
                        Book a Demo <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="w-full md:w-2/5 relative">
                  <div className="absolute -z-10 inset-0 bg-gradient-to-br from-brand-orange/30 to-brand-pink/20 rounded-full blur-3xl"></div>
                  <div className="bg-white rounded-xl shadow-lg p-4 animate-scale-in">
                    <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center p-4">
                      <div className="text-center">
                        <ShoppingCart className="h-12 w-12 text-brand-orange mx-auto mb-4" />
                        <p className="text-gray-500 font-medium">
                          From abandoned carts to loyal customers
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Use Cases Section - Optimized Layout */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">
                  Key E-Commerce Use Cases
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Transform your e-commerce business with autonomous AI agents that deliver personalized shopping experiences
                </p>
              </div>
              
              {/* Use Cases - Card Grid Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Use Case 1 */}
                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-brand-orange/10 rounded-full flex items-center justify-center shrink-0">
                        <ShoppingCart className="w-5 h-5 text-brand-orange" />
                      </div>
                      <h3 className="text-lg font-semibold text-brand-black">Reduce Cart Abandonment</h3>
                    </div>
                    <p className="text-sm text-brand-orange font-medium mb-3">Goal: Convert abandoned carts into sales</p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start gap-2 text-sm text-gray-700">
                        <Check className="w-4 h-4 text-brand-orange mt-0.5 shrink-0" />
                        <span>Personalized, behaviorally triggered nudges across email, SMS, WhatsApp</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-700">
                        <Check className="w-4 h-4 text-brand-orange mt-0.5 shrink-0" />
                        <span>Dynamic content and psychographic-specific incentives to maximize conversion</span>
                      </li>
                    </ul>
                    <div className="bg-gray-50 px-3 py-2 rounded-md">
                      <p className="text-sm font-medium">Outcome: <span className="text-brand-orange">Better recovery rates and incremental revenue</span></p>
                    </div>
                  </div>
                </div>

                {/* Use Case 2 */}
                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-brand-pink/10 rounded-full flex items-center justify-center shrink-0">
                        <TrendingUp className="w-5 h-5 text-brand-pink" />
                      </div>
                      <h3 className="text-lg font-semibold text-brand-black">Optimize Paid Media Retargeting</h3>
                    </div>
                    <p className="text-sm text-brand-pink font-medium mb-3">Goal: Maximize advertising ROAS</p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start gap-2 text-sm text-gray-700">
                        <Check className="w-4 h-4 text-brand-pink mt-0.5 shrink-0" />
                        <span>Deliver highly personalized, goal-oriented messages to re-engage site visitors</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-700">
                        <Check className="w-4 h-4 text-brand-pink mt-0.5 shrink-0" />
                        <span>Dynamically select message, channel, offer, and timing for each customer</span>
                      </li>
                    </ul>
                    <div className="bg-gray-50 px-3 py-2 rounded-md">
                      <p className="text-sm font-medium">Outcome: <span className="text-brand-pink">Higher conversion rates on retargeting campaigns</span></p>
                    </div>
                  </div>
                </div>

                {/* Use Case 3 */}
                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-yellow-500/10 rounded-full flex items-center justify-center shrink-0">
                        <Users className="w-5 h-5 text-yellow-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-brand-black">Target Offers to Loyalty Program Members</h3>
                    </div>
                    <p className="text-sm text-yellow-600 font-medium mb-3">Goal: Maximize loyalty member value</p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start gap-2 text-sm text-gray-700">
                        <Check className="w-4 h-4 text-yellow-600 mt-0.5 shrink-0" />
                        <span>Drive higher lifetime value with contextually relevant rewards and offers</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-700">
                        <Check className="w-4 h-4 text-yellow-600 mt-0.5 shrink-0" />
                        <span>Encourage loyalty tier upgrades and strategic reward redemption</span>
                      </li>
                    </ul>
                    <div className="bg-gray-50 px-3 py-2 rounded-md">
                      <p className="text-sm font-medium">Outcome: <span className="text-yellow-600">Increased program engagement and customer retention</span></p>
                    </div>
                  </div>
                </div>

                {/* Use Case 4 */}
                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center shrink-0">
                        <Zap className="w-5 h-5 text-green-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-brand-black">Increase Repurchase Frequency</h3>
                    </div>
                    <p className="text-sm text-green-600 font-medium mb-3">Goal: Boost repeat purchase rate</p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start gap-2 text-sm text-gray-700">
                        <Check className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                        <span>Identify optimal moments to re-engage past buyers with relevant products</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-700">
                        <Check className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                        <span>Use contextual triggers instead of blanket offers to avoid discount fatigue</span>
                      </li>
                    </ul>
                    <div className="bg-gray-50 px-3 py-2 rounded-md">
                      <p className="text-sm font-medium">Outcome: <span className="text-green-600">Higher repeat purchase rates at better margins</span></p>
                    </div>
                  </div>
                </div>

                {/* Use Case 5 - Full width on mobile, same width on desktop */}
                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden md:col-span-2">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center shrink-0">
                        <MessageSquare className="w-5 h-5 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-brand-black">Encourage Category Expansion</h3>
                    </div>
                    <p className="text-sm text-blue-600 font-medium mb-3">Goal: Increase customer basket size and discovery</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-sm text-gray-700">
                          <Check className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                          <span>Use agents to subtly introduce new categories/products each customer is likely to find relevant</span>
                        </li>
                      </ul>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-sm text-gray-700">
                          <Check className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                          <span>Expand basket size by matching cross-category recommendations to interest signals and buying patterns</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 px-3 py-2 rounded-md mt-4">
                      <p className="text-sm font-medium">Outcome: <span className="text-blue-600">Higher average order value and product exploration</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Impact Metrics */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-black mb-10">
                Real Impact for E-Commerce Leaders
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand-orange/10 mb-4">
                    <Percent className="h-7 w-7 text-brand-orange" />
                  </div>
                  <h3 className="text-4xl font-bold text-brand-orange mb-2">+32%</h3>
                  <p className="text-lg text-gray-700 font-medium">Higher Conversion Rate</p>
                  <p className="text-sm text-gray-600 mt-1">Across all customer touchpoints</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand-pink/10 mb-4">
                    <ShoppingCart className="h-7 w-7 text-brand-pink" />
                  </div>
                  <h3 className="text-4xl font-bold text-brand-pink mb-2">+41%</h3>
                  <p className="text-lg text-gray-700 font-medium">Increase in AOV</p>
                  <p className="text-sm text-gray-600 mt-1">Through personalized recommendations</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand-yellow/10 mb-4">
                    <BarChart3 className="h-7 w-7 text-yellow-600" />
                  </div>
                  <h3 className="text-4xl font-bold text-yellow-600 mb-2">+47%</h3>
                  <p className="text-lg text-gray-700 font-medium">Customer Lifetime Value</p>
                  <p className="text-sm text-gray-600 mt-1">Through intelligent retention strategies</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works - Neuronudge Framework */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">
                  How Thoughtnudge Works
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  One AI agent per customer. Always learning. Always optimizing.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-brand-black mb-4">The Neuronudge Framework</h3>
                    <p className="text-gray-700 mb-6">
                      We marry AI with behavioral science to create autonomous agents that not only generate insights but act on them to deliver measurable outcomes.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="mt-1 mr-3 w-8 h-8 bg-brand-orange/20 rounded-full flex items-center justify-center">
                          <BrainCircuit className="h-5 w-5 text-brand-orange" />
                        </div>
                        <div>
                          <h4 className="font-bold">Goal-Driven Intelligence</h4>
                          <p className="text-gray-700">Agents optimize towards your business goals, not just engagement metrics</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="mt-1 mr-3 w-8 h-8 bg-brand-pink/20 rounded-full flex items-center justify-center">
                          <Infinity className="h-5 w-5 text-brand-pink" />
                        </div>
                        <div>
                          <h4 className="font-bold">Autonomous Execution</h4>
                          <p className="text-gray-700">Agents act independently to optimize message, offer, product, channel, and timing</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="mt-1 mr-3 w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center">
                          <Network className="h-5 w-5 text-yellow-600" />
                        </div>
                        <div>
                          <h4 className="font-bold">Cross-Channel Intelligence</h4>
                          <p className="text-gray-700">Unified learning across all customer touchpoints, breaking down silos</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="mt-1 mr-3 w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                          <Clock className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-bold">Contextual Continuous Learning</h4>
                          <p className="text-gray-700">Agents get smarter over time with persistent memory and feedback loops</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="bg-gray-50 rounded-lg p-6 w-full">
                      <div className="aspect-square relative overflow-hidden rounded-lg bg-gradient-to-br from-brand-orange/10 to-brand-pink/10 flex items-center justify-center">
                        <div className="absolute w-32 h-32 bg-brand-orange/20 rounded-full blur-xl animate-pulse"></div>
                        <div className="absolute w-24 h-24 bg-brand-pink/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: "1s" }}></div>
                        <div className="relative z-10 text-center p-6">
                          <BrainCircuit className="mx-auto h-16 w-16 text-brand-orange mb-4" />
                          <p className="text-lg font-medium text-brand-black">Neuronudge Framework</p>
                          <p className="text-sm text-gray-600">AI + Behavioral Science</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                  <p className="text-center font-medium text-gray-700">
                    These intelligent agents don't just provide insights — they take action to deliver real business outcomes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="relative max-w-4xl mx-auto overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-black to-gray-900 rounded-2xl"></div>
              <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-pink rounded-full -translate-x-1/3 translate-y-1/3 blur-3xl"></div>
              </div>
              
              <div className="relative z-10 p-10 md:p-12 flex flex-col items-center text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Transform Your E-Commerce Growth?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                  Join forward-thinking e-commerce brands using Thoughtnudge's autonomous growth agents to build intelligence that delivers personalized shopping experiences and real revenue growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="orange" size="xl" className="group">
                    Book a Demo
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
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

export default EcommerceBrochure;
