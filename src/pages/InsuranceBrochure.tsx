
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, FileCheck, Users, BarChart3, MessageSquare, Clock, Zap, Check, BrainCircuit, Infinity, Network } from "lucide-react";

const InsuranceBrochure = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-white to-brand-yellow/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col-reverse md:flex-row gap-8 items-center">
                <div className="w-full md:w-3/5 space-y-5">
                  <div className="flex space-x-3 items-center">
                    <span className="bg-brand-yellow/20 text-yellow-600 text-sm font-medium px-3 py-1 rounded-full">Insurance</span>
                    <span className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">AI Growth Solution</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-brand-black animate-fade-in">
                    <span className="text-yellow-600">Transform Policyholder Relationships</span> Into Growth Opportunities
                  </h1>
                  <p className="text-xl text-gray-700">
                    Deploy autonomous AI agents that understand each policyholder's unique needs to deliver personalized experiences that increase conversion, reduce lapses, and maximize customer lifetime value.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="yellow" size="lg" asChild>
                      <Link to="/demo">
                        Book a Demo <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="w-full md:w-2/5 relative">
                  <div className="absolute -z-10 inset-0 bg-gradient-to-br from-brand-yellow/30 to-brand-orange/20 rounded-full blur-3xl"></div>
                  <div className="bg-white rounded-xl shadow-lg p-4 animate-scale-in">
                    <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center p-4">
                      <div className="text-center">
                        <Shield className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                        <p className="text-gray-500 font-medium">
                          From policy quotes to lifelong customer relationships
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Use Cases Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">
                  Key Insurance Use Cases
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Transform your insurance business with autonomous AI agents that deliver personalized experiences at scale
                </p>
              </div>
              
              {/* Grid of Use Cases - 2 columns on larger screens */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Use Case 1 */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden h-full">
                  <div className="p-6 border-l-4 border-yellow-600">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-brand-yellow/20 rounded-full flex items-center justify-center">
                        <Shield className="w-6 h-6 text-yellow-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-bold text-brand-black">Increase Policy Renewals with Personalized Nudges</h3>
                        <p className="text-sm font-medium text-yellow-600">Goal: Improve policy renewal rates</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="w-5 h-5 rounded-full bg-brand-yellow/20 flex items-center justify-center mr-2 mt-0.5">
                            <Check className="w-3 h-3 text-yellow-600" />
                          </div>
                          <span className="text-sm">Identify individual motivation triggers (security, family care, savings)</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-5 h-5 rounded-full bg-brand-yellow/20 flex items-center justify-center mr-2 mt-0.5">
                            <Check className="w-3 h-3 text-yellow-600" />
                          </div>
                          <span className="text-sm">Optimize renewal sequences with perfectly timed reminders across channels</span>
                        </li>
                      </ul>
                      <div className="pt-2">
                        <p className="text-sm font-medium text-gray-800">Outcome: <span className="text-yellow-600">Higher retention, reduced lapse rate, stronger LTV</span></p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Use Case 2 */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden h-full">
                  <div className="p-6 border-l-4 border-brand-orange">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-brand-orange/20 rounded-full flex items-center justify-center">
                        <FileCheck className="w-6 h-6 text-brand-orange" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-bold text-brand-black">Boost Cross-Sell & Upsell of Policies</h3>
                        <p className="text-sm font-medium text-brand-orange">Goal: Increase ARPU with intelligent cross-selling</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="w-5 h-5 rounded-full bg-brand-orange/20 flex items-center justify-center mr-2 mt-0.5">
                            <Check className="w-3 h-3 text-brand-orange" />
                          </div>
                          <span className="text-sm">Identify interest signals and life-stage needs for personalized recommendations</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-5 h-5 rounded-full bg-brand-orange/20 flex items-center justify-center mr-2 mt-0.5">
                            <Check className="w-3 h-3 text-brand-orange" />
                          </div>
                          <span className="text-sm">Optimize messaging and offers across all touchpoints (WhatsApp, SMS, in-app)</span>
                        </li>
                      </ul>
                      <div className="pt-2">
                        <p className="text-sm font-medium text-gray-800">Outcome: <span className="text-brand-orange">More policies per customer, improved ARPU</span></p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Use Case 3 */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden h-full">
                  <div className="p-6 border-l-4 border-brand-pink">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-brand-pink/20 rounded-full flex items-center justify-center">
                        <MessageSquare className="w-6 h-6 text-brand-pink" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-bold text-brand-black">Convert Leads with Contextual Engagement</h3>
                        <p className="text-sm font-medium text-brand-pink">Goal: Maximize conversion of new leads</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="w-5 h-5 rounded-full bg-brand-pink/20 flex items-center justify-center mr-2 mt-0.5">
                            <Check className="w-3 h-3 text-brand-pink" />
                          </div>
                          <span className="text-sm">Adapt approach in real-time based on how users interact with messages</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-5 h-5 rounded-full bg-brand-pink/20 flex items-center justify-center mr-2 mt-0.5">
                            <Check className="w-3 h-3 text-brand-pink" />
                          </div>
                          <span className="text-sm">Personalize product pitch, tone, follow-up timing, and incentives</span>
                        </li>
                      </ul>
                      <div className="pt-2">
                        <p className="text-sm font-medium text-gray-800">Outcome: <span className="text-brand-pink">Shorter conversion time, higher lead-to-policy rates</span></p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Use Case 4 */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden h-full">
                  <div className="p-6 border-l-4 border-green-600">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                        <Clock className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-bold text-brand-black">Prevent Churn with Adaptive Retention</h3>
                        <p className="text-sm font-medium text-green-600">Goal: Retain high-value at-risk customers</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center mr-2 mt-0.5">
                            <Check className="w-3 h-3 text-green-600" />
                          </div>
                          <span className="text-sm">Match retention offers to customer type and specific concerns</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center mr-2 mt-0.5">
                            <Check className="w-3 h-3 text-green-600" />
                          </div>
                          <span className="text-sm">Use behavioral science to find emotional triggers instead of over-discounting</span>
                        </li>
                      </ul>
                      <div className="pt-2">
                        <p className="text-sm font-medium text-gray-800">Outcome: <span className="text-green-600">Lower churn among high-value customers</span></p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Use Case 5-6 (combined) */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden h-full md:col-span-2">
                  <div className="p-6 border-l-4 border-blue-600">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-bold text-brand-black">Drive Loyalty & Referrals with Personalized Campaigns</h3>
                        <p className="text-sm font-medium text-blue-600">Goal: Increase customer advocacy and organic acquisition</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center mr-2 mt-0.5">
                            <Check className="w-3 h-3 text-blue-600" />
                          </div>
                          <span className="text-sm">Identify perfect moments (post-claim, post-renewal) to trigger personalized referral nudges</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center mr-2 mt-0.5">
                            <Check className="w-3 h-3 text-blue-600" />
                          </div>
                          <span className="text-sm">Tailor incentives based on customer's psychographic profile (cashback, premium discount, added cover)</span>
                        </li>
                      </ul>
                      <div className="pt-2">
                        <p className="text-sm font-medium text-gray-800">Outcome: <span className="text-blue-600">Higher referral conversion, improved loyalty, organic acquisition at lower CAC</span></p>
                      </div>
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
                Real Impact for Insurance Leaders
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand-yellow/10 mb-4">
                    <Shield className="h-7 w-7 text-yellow-600" />
                  </div>
                  <h3 className="text-4xl font-bold text-yellow-600 mb-2">+35%</h3>
                  <p className="text-lg text-gray-700 font-medium">Quote-to-Policy Conversion</p>
                  <p className="text-sm text-gray-600 mt-1">Through personalized recommendations</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand-orange/10 mb-4">
                    <FileCheck className="h-7 w-7 text-brand-orange" />
                  </div>
                  <h3 className="text-4xl font-bold text-brand-orange mb-2">+48%</h3>
                  <p className="text-lg text-gray-700 font-medium">Product Attachment Rate</p>
                  <p className="text-sm text-gray-600 mt-1">Through intelligent cross-selling</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand-pink/10 mb-4">
                    <BarChart3 className="h-7 w-7 text-brand-pink" />
                  </div>
                  <h3 className="text-4xl font-bold text-brand-pink mb-2">-44%</h3>
                  <p className="text-lg text-gray-700 font-medium">Policy Lapse Rate</p>
                  <p className="text-sm text-gray-600 mt-1">Through personalized retention strategies</p>
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
                  One AI agent per policyholder. Always learning. Always optimizing.
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
                        <div className="mt-1 mr-3 w-8 h-8 bg-brand-yellow/20 rounded-full flex items-center justify-center">
                          <BrainCircuit className="h-5 w-5 text-yellow-600" />
                        </div>
                        <div>
                          <h4 className="font-bold">Goal-Driven Intelligence</h4>
                          <p className="text-gray-700">Agents optimize towards your business goals, not just engagement metrics</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="mt-1 mr-3 w-8 h-8 bg-brand-orange/20 rounded-full flex items-center justify-center">
                          <Infinity className="h-5 w-5 text-brand-orange" />
                        </div>
                        <div>
                          <h4 className="font-bold">Autonomous Execution</h4>
                          <p className="text-gray-700">Agents act independently to optimize message, offer, product, channel, and timing</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="mt-1 mr-3 w-8 h-8 bg-brand-pink/20 rounded-full flex items-center justify-center">
                          <Network className="h-5 w-5 text-brand-pink" />
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
                      <div className="aspect-square relative overflow-hidden rounded-lg bg-gradient-to-br from-brand-yellow/10 to-brand-orange/10 flex items-center justify-center">
                        <div className="absolute w-32 h-32 bg-brand-yellow/20 rounded-full blur-xl animate-pulse"></div>
                        <div className="absolute w-24 h-24 bg-brand-orange/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: "1s" }}></div>
                        <div className="relative z-10 text-center p-6">
                          <BrainCircuit className="mx-auto h-16 w-16 text-yellow-600 mb-4" />
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
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-yellow rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-orange rounded-full -translate-x-1/3 translate-y-1/3 blur-3xl"></div>
              </div>
              
              <div className="relative z-10 p-10 md:p-12 flex flex-col items-center text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Policyholder Relationships?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                  Join forward-thinking insurers using Thoughtnudge's autonomous growth agents to build intelligence that increases conversion, reduces lapses, and maximizes customer lifetime value.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="yellow" size="xl" className="group">
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

export default InsuranceBrochure;
