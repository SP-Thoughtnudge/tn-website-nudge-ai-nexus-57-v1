
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, SignalHigh, Users, BarChart3, MessageSquare, ShieldCheck, Zap, Check } from "lucide-react";

const TelecomBrochure = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 md:py-24 bg-gradient-to-br from-white to-brand-pink/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-12 items-center">
                <div className="w-full md:w-3/5 space-y-6">
                  <div className="flex space-x-3 items-center">
                    <span className="bg-brand-pink/10 text-brand-pink text-sm font-medium px-3 py-1 rounded-full">Telecom</span>
                    <span className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">AI Growth Solution</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-brand-black animate-fade-in">
                    <span className="text-brand-pink">Maximize Customer Value</span> Across the Entire Lifecycle
                  </h1>
                  <p className="text-xl text-gray-700">
                    Deploy autonomous AI agents that reduce churn, increase ARPU, and optimize the customer journey across every touchpoint and channel in your telecom business.
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

        {/* Key Use Cases Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">
                  Key Telecom Use Cases
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Our autonomous AI agents transform these critical telecom growth opportunities
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {/* Use Case 1 */}
                <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-brand-pink">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-brand-pink/20 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-brand-pink" />
                    </div>
                    <h3 className="text-xl font-bold text-brand-black ml-4">Churn Reduction</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      <span className="font-bold text-brand-pink">38% Lower Churn</span> through early intervention and personalized retention
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-brand-pink/20 flex items-center justify-center mr-2 mt-0.5">
                          <Check className="w-3 h-3 text-brand-pink" />
                        </div>
                        <span>Predictive churn identification</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-brand-pink/20 flex items-center justify-center mr-2 mt-0.5">
                          <Check className="w-3 h-3 text-brand-pink" />
                        </div>
                        <span>Personalized retention offers</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-brand-pink/20 flex items-center justify-center mr-2 mt-0.5">
                          <Check className="w-3 h-3 text-brand-pink" />
                        </div>
                        <span>Tailored communication strategies</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Use Case 2 */}
                <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-brand-orange">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-brand-orange/20 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-brand-orange" />
                    </div>
                    <h3 className="text-xl font-bold text-brand-black ml-4">ARPU Growth</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      <span className="font-bold text-brand-orange">27% Higher ARPU</span> through intelligent service upgrades and cross-selling
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-brand-orange/20 flex items-center justify-center mr-2 mt-0.5">
                          <Check className="w-3 h-3 text-brand-orange" />
                        </div>
                        <span>Usage-based plan recommendations</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-brand-orange/20 flex items-center justify-center mr-2 mt-0.5">
                          <Check className="w-3 h-3 text-brand-orange" />
                        </div>
                        <span>Value-added service adoption</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-brand-orange/20 flex items-center justify-center mr-2 mt-0.5">
                          <Check className="w-3 h-3 text-brand-orange" />
                        </div>
                        <span>Device upgrade optimization</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Use Case 3 */}
                <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-brand-yellow">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-brand-yellow/20 rounded-full flex items-center justify-center">
                      <ShieldCheck className="w-6 h-6 text-yellow-600" />
                    </div>
                    <h3 className="text-xl font-bold text-brand-black ml-4">Customer Onboarding</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      <span className="font-bold text-yellow-600">45% Better Activation</span> through personalized onboarding journeys
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-brand-yellow/20 flex items-center justify-center mr-2 mt-0.5">
                          <Check className="w-3 h-3 text-yellow-600" />
                        </div>
                        <span>Adaptive welcome sequences</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-brand-yellow/20 flex items-center justify-center mr-2 mt-0.5">
                          <Check className="w-3 h-3 text-yellow-600" />
                        </div>
                        <span>Feature adoption pathways</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-brand-yellow/20 flex items-center justify-center mr-2 mt-0.5">
                          <Check className="w-3 h-3 text-yellow-600" />
                        </div>
                        <span>Service verification and support</span>
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
                Real Impact for Telecom Leaders
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-md text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-pink/10 mb-4">
                    <Users className="h-8 w-8 text-brand-pink" />
                  </div>
                  <h3 className="text-4xl font-bold text-brand-pink mb-2">-38%</h3>
                  <p className="text-lg text-gray-700 font-medium">Churn Reduction</p>
                  <p className="text-gray-600 mt-2">Through proactive personalized retention</p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-md text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-orange/10 mb-4">
                    <Phone className="h-8 w-8 text-brand-orange" />
                  </div>
                  <h3 className="text-4xl font-bold text-brand-orange mb-2">+27%</h3>
                  <p className="text-lg text-gray-700 font-medium">ARPU Growth</p>
                  <p className="text-gray-600 mt-2">Through intelligent service recommendations</p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-md text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-yellow/10 mb-4">
                    <BarChart3 className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h3 className="text-4xl font-bold text-yellow-600 mb-2">+53%</h3>
                  <p className="text-lg text-gray-700 font-medium">Customer Satisfaction</p>
                  <p className="text-gray-600 mt-2">Through personalized customer journeys</p>
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
                For Telecom Leaders
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <div className="flex items-center mb-4">
                    <Users className="h-6 w-6 text-brand-pink mr-2" />
                    <h3 className="text-xl font-bold text-brand-black">For CMOs</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Transform how you engage with subscribers through AI that understands what each individual needs at every moment in their journey.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-brand-pink/20 flex items-center justify-center mr-2 mt-0.5">
                        <Check className="w-3 h-3 text-brand-pink" />
                      </div>
                      <span>Deliver truly personalized experiences</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-brand-pink/20 flex items-center justify-center mr-2 mt-0.5">
                        <Check className="w-3 h-3 text-brand-pink" />
                      </div>
                      <span>Eliminate complex campaign management</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-brand-pink/20 flex items-center justify-center mr-2 mt-0.5">
                        <Check className="w-3 h-3 text-brand-pink" />
                      </div>
                      <span>Increase cross-selling and upselling success</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <div className="flex items-center mb-4">
                    <BarChart3 className="h-6 w-6 text-brand-orange mr-2" />
                    <h3 className="text-xl font-bold text-brand-black">For CROs</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Drive predictable revenue growth with AI that maximizes the lifetime value of each subscriber through personalized experiences.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-brand-orange/20 flex items-center justify-center mr-2 mt-0.5">
                        <Check className="w-3 h-3 text-brand-orange" />
                      </div>
                      <span>Identify high-value upgrade opportunities</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-brand-orange/20 flex items-center justify-center mr-2 mt-0.5">
                        <Check className="w-3 h-3 text-brand-orange" />
                      </div>
                      <span>Reduce churn of valuable subscribers</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-brand-orange/20 flex items-center justify-center mr-2 mt-0.5">
                        <Check className="w-3 h-3 text-brand-orange" />
                      </div>
                      <span>Increase ARPU through personalized offers</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <div className="flex items-center mb-4">
                    <SignalHigh className="h-6 w-6 text-yellow-600 mr-2" />
                    <h3 className="text-xl font-bold text-brand-black">For Technology Leaders</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Unify your customer data and activation platforms with AI that learns across all touchpoints and creates seamless experiences.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-brand-yellow/20 flex items-center justify-center mr-2 mt-0.5">
                        <Check className="w-3 h-3 text-yellow-600" />
                      </div>
                      <span>Connect siloed customer touchpoints</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-brand-yellow/20 flex items-center justify-center mr-2 mt-0.5">
                        <Check className="w-3 h-3 text-yellow-600" />
                      </div>
                      <span>Extract value from existing data sources</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-brand-yellow/20 flex items-center justify-center mr-2 mt-0.5">
                        <Check className="w-3 h-3 text-yellow-600" />
                      </div>
                      <span>Easy integration with existing systems</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <div className="flex items-center mb-4">
                    <MessageSquare className="h-6 w-6 text-brand-pink mr-2" />
                    <h3 className="text-xl font-bold text-brand-black">For Customer Experience Leaders</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Create seamless, personalized experiences that make customers feel truly understood and valued across every interaction.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-brand-pink/20 flex items-center justify-center mr-2 mt-0.5">
                        <Check className="w-3 h-3 text-brand-pink" />
                      </div>
                      <span>Deliver true 1:1 personalization</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-brand-pink/20 flex items-center justify-center mr-2 mt-0.5">
                        <Check className="w-3 h-3 text-brand-pink" />
                      </div>
                      <span>Anticipate customer needs proactively</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-brand-pink/20 flex items-center justify-center mr-2 mt-0.5">
                        <Check className="w-3 h-3 text-brand-pink" />
                      </div>
                      <span>Increase satisfaction and loyalty metrics</span>
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
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-pink rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-yellow rounded-full -translate-x-1/3 translate-y-1/3 blur-3xl"></div>
              </div>
              
              <div className="relative z-10 p-12 md:p-16 flex flex-col items-center text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Telecom Customer Experience?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                  Join forward-thinking telecom providers using Thoughtnudge's autonomous growth agents to build intelligence that drives customer growth, reduces churn, and increases lifetime value.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="pink" size="xl" className="group">
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

export default TelecomBrochure;
