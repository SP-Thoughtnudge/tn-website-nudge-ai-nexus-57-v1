
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingCart, Zap, BarChart3, Percent, Tag, Users, TrendingUp, Check, MessageSquare } from "lucide-react";

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
        <section className="py-20 md:py-24 bg-gradient-to-br from-white to-brand-orange/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-12 items-center">
                <div className="w-full md:w-3/5 space-y-6">
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

        {/* Key Use Cases Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">
                  Key E-Commerce Use Cases
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Our autonomous AI agents transform these critical revenue opportunities
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {/* Use Case 1 */}
                <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-brand-orange">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-brand-orange/20 rounded-full flex items-center justify-center">
                      <ShoppingCart className="w-6 h-6 text-brand-orange" />
                    </div>
                    <h3 className="text-xl font-bold text-brand-black ml-4">Cart Recovery</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      <span className="font-bold text-brand-orange">42% Higher Recovery</span> through perfect timing and personalized offers
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-brand-orange/20 flex items-center justify-center mr-2 mt-0.5">
                          <Check className="w-3 h-3 text-brand-orange" />
                        </div>
                        <span>Perfect message & emotional tone</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-brand-orange/20 flex items-center justify-center mr-2 mt-0.5">
                          <Check className="w-3 h-3 text-brand-orange" />
                        </div>
                        <span>Optimal channel selection (email, SMS, push)</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-brand-orange/20 flex items-center justify-center mr-2 mt-0.5">
                          <Check className="w-3 h-3 text-brand-orange" />
                        </div>
                        <span>Personalized incentives that maximize profit</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Use Case 2 */}
                <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-brand-pink">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-brand-pink/20 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-brand-pink" />
                    </div>
                    <h3 className="text-xl font-bold text-brand-black ml-4">Cross-sell & Upsell</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      <span className="font-bold text-brand-pink">36% Higher AOV</span> through intelligent product recommendations
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-brand-pink/20 flex items-center justify-center mr-2 mt-0.5">
                          <Check className="w-3 h-3 text-brand-pink" />
                        </div>
                        <span>Post-purchase recommendation flow</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-brand-pink/20 flex items-center justify-center mr-2 mt-0.5">
                          <Check className="w-3 h-3 text-brand-pink" />
                        </div>
                        <span>Cross-category discovery</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-brand-pink/20 flex items-center justify-center mr-2 mt-0.5">
                          <Check className="w-3 h-3 text-brand-pink" />
                        </div>
                        <span>Premium product upgrade pathways</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Use Case 3 */}
                <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-brand-yellow">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-brand-yellow/20 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-yellow-600" />
                    </div>
                    <h3 className="text-xl font-bold text-brand-black ml-4">Loyalty Building</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      <span className="font-bold text-yellow-600">53% Higher Retention</span> through intelligent customer nurturing
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-brand-yellow/20 flex items-center justify-center mr-2 mt-0.5">
                          <Check className="w-3 h-3 text-yellow-600" />
                        </div>
                        <span>Personalized rewards and incentives</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-brand-yellow/20 flex items-center justify-center mr-2 mt-0.5">
                          <Check className="w-3 h-3 text-yellow-600" />
                        </div>
                        <span>Re-engagement at optimal moments</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-brand-yellow/20 flex items-center justify-center mr-2 mt-0.5">
                          <Check className="w-3 h-3 text-yellow-600" />
                        </div>
                        <span>VIP customer identification & cultivation</span>
                      </li>
                    </ul>
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
              <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-black mb-12">
                Real Impact for E-Commerce Leaders
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-md text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-orange/10 mb-4">
                    <Percent className="h-8 w-8 text-brand-orange" />
                  </div>
                  <h3 className="text-4xl font-bold text-brand-orange mb-2">+32%</h3>
                  <p className="text-lg text-gray-700 font-medium">Higher Conversion Rate</p>
                  <p className="text-gray-600 mt-2">Across all customer touchpoints</p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-md text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-pink/10 mb-4">
                    <ShoppingCart className="h-8 w-8 text-brand-pink" />
                  </div>
                  <h3 className="text-4xl font-bold text-brand-pink mb-2">+41%</h3>
                  <p className="text-lg text-gray-700 font-medium">Increase in AOV</p>
                  <p className="text-gray-600 mt-2">Through personalized recommendations</p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-md text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-yellow/10 mb-4">
                    <BarChart3 className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h3 className="text-4xl font-bold text-yellow-600 mb-2">+47%</h3>
                  <p className="text-lg text-gray-700 font-medium">Customer Lifetime Value</p>
                  <p className="text-gray-600 mt-2">Through intelligent retention strategies</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stakeholder Messaging */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-black mb-12">
                For E-Commerce Leaders
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <div className="flex items-center mb-4">
                    <Tag className="h-6 w-6 text-brand-orange mr-2" />
                    <h3 className="text-xl font-bold text-brand-black">For CMOs</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Move beyond basic personalization to true individualization that drives measurable revenue growth. Stop guessing which segments need which messages.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-brand-orange/20 flex items-center justify-center mr-2 mt-0.5">
                        <Check className="w-3 h-3 text-brand-orange" />
                      </div>
                      <span>Eliminate manual campaign optimization</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-brand-orange/20 flex items-center justify-center mr-2 mt-0.5">
                        <Check className="w-3 h-3 text-brand-orange" />
                      </div>
                      <span>Deliver predictable revenue increases</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-brand-orange/20 flex items-center justify-center mr-2 mt-0.5">
                        <Check className="w-3 h-3 text-brand-orange" />
                      </div>
                      <span>Gain insights on what works for different customers</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <div className="flex items-center mb-4">
                    <BarChart3 className="h-6 w-6 text-brand-pink mr-2" />
                    <h3 className="text-xl font-bold text-brand-black">For CROs</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Transform your conversion optimization strategy from broad-based testing to AI-driven individualized decisioning that maximizes revenue.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-brand-pink/20 flex items-center justify-center mr-2 mt-0.5">
                        <Check className="w-3 h-3 text-brand-pink" />
                      </div>
                      <span>Increase AOV with intelligent cross-sells</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-brand-pink/20 flex items-center justify-center mr-2 mt-0.5">
                        <Check className="w-3 h-3 text-brand-pink" />
                      </div>
                      <span>Reduce cart abandonment with personalized recovery</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-brand-pink/20 flex items-center justify-center mr-2 mt-0.5">
                        <Check className="w-3 h-3 text-brand-pink" />
                      </div>
                      <span>Drive repeat purchases through custom journeys</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <div className="flex items-center mb-4">
                    <Zap className="h-6 w-6 text-yellow-600 mr-2" />
                    <h3 className="text-xl font-bold text-brand-black">For Digital Leaders</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Bridge the gap between your channels and platforms with AI agents that learn across all touchpoints and unify the customer experience.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-brand-yellow/20 flex items-center justify-center mr-2 mt-0.5">
                        <Check className="w-3 h-3 text-yellow-600" />
                      </div>
                      <span>Create seamless omnichannel experiences</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-brand-yellow/20 flex items-center justify-center mr-2 mt-0.5">
                        <Check className="w-3 h-3 text-yellow-600" />
                      </div>
                      <span>Unify customer data into actionable intelligence</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-brand-yellow/20 flex items-center justify-center mr-2 mt-0.5">
                        <Check className="w-3 h-3 text-yellow-600" />
                      </div>
                      <span>Eliminate technology silos across channels</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <div className="flex items-center mb-4">
                    <MessageSquare className="h-6 w-6 text-brand-orange mr-2" />
                    <h3 className="text-xl font-bold text-brand-black">For CEOs</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Deploy AI that delivers tangible business outcomes, not just promises. Thoughtnudge provides measurable revenue impact without massive investment.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-brand-orange/20 flex items-center justify-center mr-2 mt-0.5">
                        <Check className="w-3 h-3 text-brand-orange" />
                      </div>
                      <span>Rapid deployment, fast time-to-value</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-brand-orange/20 flex items-center justify-center mr-2 mt-0.5">
                        <Check className="w-3 h-3 text-brand-orange" />
                      </div>
                      <span>No large teams needed to manage campaigns</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-brand-orange/20 flex items-center justify-center mr-2 mt-0.5">
                        <Check className="w-3 h-3 text-brand-orange" />
                      </div>
                      <span>Clear ROI with predictable revenue growth</span>
                    </li>
                  </ul>
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
              
              <div className="relative z-10 p-12 md:p-16 flex flex-col items-center text-center">
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
