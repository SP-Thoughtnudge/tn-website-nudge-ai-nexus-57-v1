
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, SignalHigh, Users, BarChart3, MessageSquare, ShieldCheck, Zap, Check, BrainCircuit, Infinity, Network, Clock } from "lucide-react";

const TelecomBrochure = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section - Business Outcome Focused */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-white to-brand-pink/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col-reverse md:flex-row gap-8 items-center">
                <div className="w-full md:w-3/5 space-y-5">
                  <div className="flex space-x-3 items-center">
                    <span className="bg-brand-pink/10 text-brand-pink text-sm font-medium px-3 py-1 rounded-full">Telecom</span>
                    <span className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">Agentic AI Solution</span>
                  </div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-black animate-fade-in">
                    <span className="text-brand-pink">Unlock Higher ARPU. Win Back Lost Users. Retain At-Risk Customers.</span>
                  </h1>
                  <p className="text-xl text-gray-700">
                    The agentic AI system that knows what to say, when to say it, and how to grow your revenue — autonomously.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="pink" size="lg" asChild>
                      <Link to="/demo">
                        Book a Demo <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="w-full md:w-2/5 relative">
                  <div className="absolute -z-10 inset-0 bg-gradient-to-br from-brand-pink/30 to-brand-yellow/20 rounded-full blur-3xl"></div>
                  <div className="bg-white rounded-xl shadow-lg p-4 animate-scale-in">
                    <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center p-4">
                      <div className="text-center">
                        <SignalHigh className="h-12 w-12 text-brand-pink mx-auto mb-4" />
                        <p className="text-gray-500 font-medium">
                          From subscription customers to lifetime advocates
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Challenge Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row gap-10">
                <div className="w-full md:w-1/3">
                  <h2 className="text-2xl md:text-3xl font-bold text-brand-black mb-4">
                    The Challenge
                  </h2>
                </div>
                <div className="w-full md:w-2/3">
                  <p className="text-lg text-gray-700 mb-4">
                    Telecom providers manage millions of customers across fragmented systems and touchpoints. But real growth doesn't come from more messages or more automation — it comes from smarter decisions.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center shrink-0 mt-1">
                        <span className="text-brand-pink font-bold">·</span>
                      </div>
                      <p className="text-gray-600">Traditional systems don't adapt in real time and rely on rules that oversimplify customer behavior</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center shrink-0 mt-1">
                        <span className="text-brand-pink font-bold">·</span>
                      </div>
                      <p className="text-gray-600">Siloed automation across channels — SMS, WhatsApp, email, app, IVR — with static journeys</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center shrink-0 mt-1">
                        <span className="text-brand-pink font-bold">·</span>
                      </div>
                      <p className="text-gray-600">The result: flat ARPU, rising churn, and missed upsell opportunities</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center shrink-0 mt-1">
                        <span className="text-brand-pink font-bold">·</span>
                      </div>
                      <p className="text-gray-600">Customers don't think in channels — they expect relevance, timing, and contextual value</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Solution Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row gap-10">
                <div className="w-full md:w-1/3">
                  <h2 className="text-2xl md:text-3xl font-bold text-brand-black mb-4">
                    The Solution
                  </h2>
                </div>
                <div className="w-full md:w-2/3">
                  <p className="text-lg text-gray-700 mb-6">
                    A system of goal-driven AI agents that think, act, and learn — individually for each customer.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-brand-pink/10 rounded-full flex items-center justify-center">
                          <BrainCircuit className="h-5 w-5 text-brand-pink" />
                        </div>
                        <h3 className="font-semibold">One Agent Per Customer</h3>
                      </div>
                      <p className="text-gray-600 text-sm">Each customer gets a dedicated AI agent that optimizes their specific journey</p>
                    </div>
                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-brand-orange/10 rounded-full flex items-center justify-center">
                          <Network className="h-5 w-5 text-brand-orange" />
                        </div>
                        <h3 className="font-semibold">Cross-Channel Learning</h3>
                      </div>
                      <p className="text-gray-600 text-sm">Unified intelligence learns from every interaction across all channels</p>
                    </div>
                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-yellow-500/10 rounded-full flex items-center justify-center">
                          <Clock className="h-5 w-5 text-yellow-600" />
                        </div>
                        <h3 className="font-semibold">Persistent Memory</h3>
                      </div>
                      <p className="text-gray-600 text-sm">Remembers every interaction and adapts strategy over time</p>
                    </div>
                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center">
                          <Zap className="h-5 w-5 text-green-600" />
                        </div>
                        <h3 className="font-semibold">Intelligent Automation</h3>
                      </div>
                      <p className="text-gray-600 text-sm">Takes the best action at the right time to achieve business goals</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* High-Impact Use Cases Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-black mb-6 text-center">
                High-Impact Telecom Use Cases
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {/* Use Case 1 */}
                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden">
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-brand-pink/10 rounded-full flex items-center justify-center shrink-0">
                        <Users className="w-5 h-5 text-brand-pink" />
                      </div>
                      <h3 className="text-base font-semibold text-brand-black">Boost ARPU via Cross-Sell & Upsell</h3>
                    </div>
                    <p className="text-sm text-gray-700 mb-3">
                      Agents recommend the right add-ons — TV, broadband, premium packs — based on profiles, timing, and behavior triggers.
                    </p>
                    <div className="bg-gray-50 px-3 py-2 rounded-md">
                      <p className="text-sm font-medium">Impact: <span className="text-brand-pink">+32% ARPU growth</span></p>
                    </div>
                  </div>
                </div>

                {/* Use Case 2 */}
                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden">
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-brand-orange/10 rounded-full flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-brand-orange" />
                      </div>
                      <h3 className="text-base font-semibold text-brand-black">Plan Optimization for Each Customer</h3>
                    </div>
                    <p className="text-sm text-gray-700 mb-3">
                      Move customers to better-fit plans with personalized offers and messages — not generic nudges.
                    </p>
                    <div className="bg-gray-50 px-3 py-2 rounded-md">
                      <p className="text-sm font-medium">Impact: <span className="text-brand-orange">+25% plan upgrades</span></p>
                    </div>
                  </div>
                </div>

                {/* Use Case 3 */}
                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden">
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-yellow-500/10 rounded-full flex items-center justify-center shrink-0">
                        <MessageSquare className="w-5 h-5 text-yellow-600" />
                      </div>
                      <h3 className="text-base font-semibold text-brand-black">Win Back Lost Users</h3>
                    </div>
                    <p className="text-sm text-gray-700 mb-3">
                      Re-engage dormant or churned users with sequences crafted uniquely per person — right message, channel, and incentive.
                    </p>
                    <div className="bg-gray-50 px-3 py-2 rounded-md">
                      <p className="text-sm font-medium">Impact: <span className="text-yellow-600">+40% win-back rate</span></p>
                    </div>
                  </div>
                </div>

                {/* Use Case 4 */}
                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden">
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-5 h-5 text-green-600" />
                      </div>
                      <h3 className="text-base font-semibold text-brand-black">Retain At-Risk Customers</h3>
                    </div>
                    <p className="text-sm text-gray-700 mb-3">
                      When churn risk is flagged, our agents act — running tailored retention journeys with the most likely-to-work offer and narrative.
                    </p>
                    <div className="bg-gray-50 px-3 py-2 rounded-md">
                      <p className="text-sm font-medium">Impact: <span className="text-green-600">-38% churn reduction</span></p>
                    </div>
                  </div>
                </div>

                {/* Use Case 5 */}
                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden">
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center shrink-0">
                        <Zap className="w-5 h-5 text-blue-600" />
                      </div>
                      <h3 className="text-base font-semibold text-brand-black">Drive Renewals & Upgrades</h3>
                    </div>
                    <p className="text-sm text-gray-700 mb-3">
                      Agents learn which renewal incentive, plan upgrade, or timing works best — per user.
                    </p>
                    <div className="bg-gray-50 px-3 py-2 rounded-md">
                      <p className="text-sm font-medium">Impact: <span className="text-blue-600">+35% renewal rate</span></p>
                    </div>
                  </div>
                </div>
                
                {/* Business Impact Summary */}
                <div className="bg-gradient-to-br from-brand-pink/5 to-brand-orange/5 rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="p-5">
                    <h3 className="text-base font-semibold text-brand-black mb-3">Business Outcomes</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-brand-pink mt-0.5" />
                        <span className="text-sm">15-40% improvement in key metrics</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-brand-pink mt-0.5" />
                        <span className="text-sm">7x faster time-to-value than traditional approaches</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-brand-pink mt-0.5" />
                        <span className="text-sm">70% less operational overhead</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works - Condensed Version */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-black mb-6 text-center">
                How Thoughtnudge Works
              </h2>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-1/2">
                    <h3 className="text-xl font-bold text-brand-black mb-4">The Neuronudge Framework</h3>
                    <p className="text-gray-700 mb-4">
                      Our proprietary system combines AI with behavioral science to create agents that not only understand customer behavior but take autonomous action.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="mt-1 mr-3 w-8 h-8 bg-brand-pink/20 rounded-full flex items-center justify-center">
                          <BrainCircuit className="h-5 w-5 text-brand-pink" />
                        </div>
                        <div>
                          <h4 className="font-bold">Goal-Driven Intelligence</h4>
                          <p className="text-sm text-gray-600">Agents optimize towards your business goals</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="mt-1 mr-3 w-8 h-8 bg-brand-orange/20 rounded-full flex items-center justify-center">
                          <Infinity className="h-5 w-5 text-brand-orange" />
                        </div>
                        <div>
                          <h4 className="font-bold">Autonomous Execution</h4>
                          <p className="text-sm text-gray-600">Agents act independently to optimize each variable</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="mt-1 mr-3 w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center">
                          <Network className="h-5 w-5 text-yellow-600" />
                        </div>
                        <div>
                          <h4 className="font-bold">Cross-Channel Intelligence</h4>
                          <p className="text-sm text-gray-600">Unified learning across all touchpoints</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <div className="bg-gray-50 p-4 rounded-lg h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="relative inline-block">
                          <div className="w-16 h-16 bg-brand-pink/20 rounded-full absolute -top-3 -left-3 animate-pulse"></div>
                          <div className="w-16 h-16 bg-brand-orange/20 rounded-full absolute -bottom-3 -right-3 animate-pulse delay-500"></div>
                          <BrainCircuit className="h-20 w-20 text-brand-pink relative z-10" />
                        </div>
                        <p className="mt-4 font-medium">Reinforcement Learning + Behavioral Science</p>
                        <p className="text-sm text-gray-600 mt-2">Continuous optimization for every individual customer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Thoughtnudge + CTA */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="w-full md:w-1/2">
                  <h2 className="text-2xl md:text-3xl font-bold text-brand-black mb-4">
                    Why Thoughtnudge
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-brand-pink/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-brand-pink" />
                      </div>
                      <div>
                        <p className="font-medium">Autonomous Operation</p>
                        <p className="text-sm text-gray-600">No rule-building or complex workflows — set goals and let agents optimize</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-brand-pink/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-brand-pink" />
                      </div>
                      <div>
                        <p className="font-medium">Fast Implementation</p>
                        <p className="text-sm text-gray-600">Live in weeks, not months, with minimal IT resources</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-brand-pink/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-brand-pink" />
                      </div>
                      <div>
                        <p className="font-medium">Continuous Improvement</p>
                        <p className="text-sm text-gray-600">System gets smarter over time with every customer interaction</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-brand-pink/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-brand-pink" />
                      </div>
                      <div>
                        <p className="font-medium">Measurable ROI</p>
                        <p className="text-sm text-gray-600">Clear impact on revenue KPIs from day one</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="w-full md:w-1/2">
                  <div className="bg-gradient-to-br from-brand-black to-gray-800 text-white rounded-xl p-6 shadow-lg">
                    <h3 className="text-xl font-bold mb-3">Ready to Transform Your Growth Strategy?</h3>
                    <p className="mb-6">
                      Join forward-thinking telecom providers using Thoughtnudge's autonomous growth agents to deliver personalized customer experiences and drive revenue growth.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button variant="pink" size="lg" className="group" asChild>
                        <Link to="/demo">
                          Book a Demo
                          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
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

export default TelecomBrochure;
