
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, FileCheck, Users, BarChart3, MessageSquare, Clock, Zap, Check } from "lucide-react";

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
        <section className="py-20 md:py-24 bg-gradient-to-br from-white to-brand-yellow/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-12 items-center">
                <div className="w-full md:w-3/5 space-y-6">
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
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">
                  Key Insurance Use Cases
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Our autonomous AI agents transform these critical insurance growth opportunities
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {/* Use Case 1 */}
                <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-brand-yellow">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-brand-yellow/20 rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-yellow-600" />
                    </div>
                    <h3 className="text-xl font-bold text-brand-black ml-4">Policy Recommendations</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      <span className="font-bold text-yellow-600">35% Higher Conversion</span> through personalized coverage matching
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-brand-yellow/20 flex items-center justify-center mr-2 mt-0.5">
                          <Check className="w-3 h-3 text-yellow-600" />
                        </div>
                        <span>Personalized policy bundles</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-brand-yellow/20 flex items-center justify-center mr-2 mt-0.5">
                          <Check className="w-3 h-3 text-yellow-600" />
                        </div>
                        <span>Coverage level optimization</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-brand-yellow/20 flex items-center justify-center mr-2 mt-0.5">
                          <Check className="w-3 h-3 text-yellow-600" />
                        </div>
                        <span>Risk-appropriate product matching</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Use Case 2 */}
                <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-brand-orange">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-brand-orange/20 rounded-full flex items-center justify-center">
                      <FileCheck className="w-6 h-6 text-brand-orange" />
                    </div>
                    <h3 className="text-xl font-bold text-brand-black ml-4">Cross-Sell/Upsell</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      <span className="font-bold text-brand-orange">48% Higher Adoption</span> through intelligent product recommendations
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-brand-orange/20 flex items-center justify-center mr-2 mt-0.5">
                          <Check className="w-3 h-3 text-brand-orange" />
                        </div>
                        <span>Life stage-based recommendations</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-brand-orange/20 flex items-center justify-center mr-2 mt-0.5">
                          <Check className="w-3 h-3 text-brand-orange" />
                        </div>
                        <span>Cover gap identification</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-brand-orange/20 flex items-center justify-center mr-2 mt-0.5">
                          <Check className="w-3 h-3 text-brand-orange" />
                        </div>
                        <span>Premium coverage introductions</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Use Case 3 */}
                <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-brand-pink">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-brand-pink/20 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-brand-pink" />
                    </div>
                    <h3 className="text-xl font-bold text-brand-black ml-4">Lapse Prevention</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      <span className="font-bold text-brand-pink">44% Lower Lapses</span> through personalized retention
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-brand-pink/20 flex items-center justify-center mr-2 mt-0.5">
                          <Check className="w-3 h-3 text-brand-pink" />
                        </div>
                        <span>Early risk identification</span>
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
              </div>
            </div>
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-black mb-12">
                Real Impact for Insurance Leaders
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-md text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-yellow/10 mb-4">
                    <Shield className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h3 className="text-4xl font-bold text-yellow-600 mb-2">+35%</h3>
                  <p className="text-lg text-gray-700 font-medium">Quote-to-Policy Conversion</p>
                  <p className="text-gray-600 mt-2">Through personalized recommendations</p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-md text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-orange/10 mb-4">
                    <FileCheck className="h-8 w-8 text-brand-orange" />
                  </div>
                  <h3 className="text-4xl font-bold text-brand-orange mb-2">+48%</h3>
                  <p className="text-lg text-gray-700 font-medium">Product Attachment Rate</p>
                  <p className="text-gray-600 mt-2">Through intelligent cross-selling</p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-md text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-pink/10 mb-4">
                    <BarChart3 className="h-8 w-8 text-brand-pink" />
                  </div>
                  <h3 className="text-4xl font-bold text-brand-pink mb-2">-44%</h3>
                  <p className="text-lg text-gray-700 font-medium">Policy Lapse Rate</p>
                  <p className="text-gray-600 mt-2">Through personalized retention strategies</p>
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
                For Insurance Leaders
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <div className="flex items-center mb-4">
                    <Users className="h-6 w-6 text-yellow-600 mr-2" />
                    <h3 className="text-xl font-bold text-brand-black">For CMOs</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Create personalized customer experiences that resonate with individual policyholders and drive higher engagement across all touchpoints.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-brand-yellow/20 flex items-center justify-center mr-2 mt-0.5">
                        <Check className="w-3 h-3 text-yellow-600" />
                      </div>
                      <span>Deliver truly personalized communications</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-brand-yellow/20 flex items-center justify-center mr-2 mt-0.5">
                        <Check className="w-3 h-3 text-yellow-600" />
                      </div>
                      <span>Eliminate manual campaign optimization</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-brand-yellow/20 flex items-center justify-center mr-2 mt-0.5">
                        <Check className="w-3 h-3 text-yellow-600" />
                      </div>
                      <span>Improve engagement metrics across all channels</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <div className="flex items-center mb-4">
                    <BarChart3 className="h-6 w-6 text-brand-orange mr-2" />
                    <h3 className="text-xl font-bold text-brand-black">For Growth Leaders</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Drive measurable growth with AI that identifies the perfect product mix and timing for each policyholder's unique situation.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-brand-orange/20 flex items-center justify-center mr-2 mt-0.5">
                        <Check className="w-3 h-3 text-brand-orange" />
                      </div>
                      <span>Increase quote-to-policy conversion rates</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-brand-orange/20 flex items-center justify-center mr-2 mt-0.5">
                        <Check className="w-3 h-3 text-brand-orange" />
                      </div>
                      <span>Boost multi-policy households</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-brand-orange/20 flex items-center justify-center mr-2 mt-0.5">
                        <Check className="w-3 h-3 text-brand-orange" />
                      </div>
                      <span>Reduce policy lapse rates</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <div className="flex items-center mb-4">
                    <Shield className="h-6 w-6 text-brand-pink mr-2" />
                    <h3 className="text-xl font-bold text-brand-black">For Digital Leaders</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Unify digital experiences across all channels with AI agents that create a consistent, contextual customer journey at each touchpoint.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-brand-pink/20 flex items-center justify-center mr-2 mt-0.5">
                        <Check className="w-3 h-3 text-brand-pink" />
                      </div>
                      <span>Connect digital & agent experiences</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-brand-pink/20 flex items-center justify-center mr-2 mt-0.5">
                        <Check className="w-3 h-3 text-brand-pink" />
                      </div>
                      <span>Extract value from existing data sources</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-brand-pink/20 flex items-center justify-center mr-2 mt-0.5">
                        <Check className="w-3 h-3 text-brand-pink" />
                      </div>
                      <span>Maximize digital self-service adoption</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <div className="flex items-center mb-4">
                    <MessageSquare className="h-6 w-6 text-yellow-600 mr-2" />
                    <h3 className="text-xl font-bold text-brand-black">For Underwriting Leaders</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Optimize policy selection and pricing with AI that aligns customer coverage needs with appropriate risk levels and product selection.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-brand-yellow/20 flex items-center justify-center mr-2 mt-0.5">
                        <Check className="w-3 h-3 text-yellow-600" />
                      </div>
                      <span>Match customers with appropriate risk products</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-brand-yellow/20 flex items-center justify-center mr-2 mt-0.5">
                        <Check className="w-3 h-3 text-yellow-600" />
                      </div>
                      <span>Guide customers to right-fit coverage levels</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-brand-yellow/20 flex items-center justify-center mr-2 mt-0.5">
                        <Check className="w-3 h-3 text-yellow-600" />
                      </div>
                      <span>Identify optimal policy bundle structures</span>
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
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-yellow rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-orange rounded-full -translate-x-1/3 translate-y-1/3 blur-3xl"></div>
              </div>
              
              <div className="relative z-10 p-12 md:p-16 flex flex-col items-center text-center">
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
