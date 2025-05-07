
import React from "react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { ArrowRight, Check, MessageSquare, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Test = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-16">
        <section className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-brand-black mb-6 text-center">
              How Thoughtnudge Makes Decisions
            </h1>
            <p className="text-lg text-center text-brand-gray mb-12 max-w-3xl mx-auto">
              See how our AI autonomously drives growth by making the right decision for each customer, 
              at the right time, through the right channel.
            </p>

            {/* Main Content Area */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
              {/* Left Column - Configuration */}
              <div className="lg:col-span-4 bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
                <div className="bg-brand-pink/10 p-4 border-b border-gray-100">
                  <h3 className="text-xl font-semibold text-brand-black">Growth Manager Setup</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-6">
                    {/* Goal Setting */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-8 w-8 rounded-full bg-brand-pink flex items-center justify-center text-white font-medium">1</div>
                        <h4 className="font-semibold text-lg">Define Goal</h4>
                      </div>
                      <div className="bg-white p-3 rounded border border-gray-200 mb-2">
                        <span className="text-sm text-brand-gray">GOAL</span>
                        <p className="font-medium">Increase product adoption by 30%</p>
                      </div>
                      <div className="bg-white p-3 rounded border border-gray-200">
                        <span className="text-sm text-brand-gray">AUDIENCE</span>
                        <p className="font-medium">New users with &lt;2 logins</p>
                      </div>
                    </div>

                    {/* Available Options */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-8 w-8 rounded-full bg-brand-orange flex items-center justify-center text-white font-medium">2</div>
                        <h4 className="font-semibold text-lg">Define Options</h4>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-white p-3 rounded border border-gray-200">
                          <span className="text-sm text-brand-gray">CHANNELS</span>
                          <div className="flex flex-wrap gap-2 mt-1">
                            <span className="px-2 py-1 bg-gray-100 rounded text-sm">Email</span>
                            <span className="px-2 py-1 bg-gray-100 rounded text-sm">SMS</span>
                            <span className="px-2 py-1 bg-gray-100 rounded text-sm">Push</span>
                            <span className="px-2 py-1 bg-gray-100 rounded text-sm">WhatsApp</span>
                          </div>
                        </div>
                        <div className="bg-white p-3 rounded border border-gray-200">
                          <span className="text-sm text-brand-gray">PRODUCTS</span>
                          <div className="flex flex-wrap gap-2 mt-1">
                            <span className="px-2 py-1 bg-gray-100 rounded text-sm">Feature A</span>
                            <span className="px-2 py-1 bg-gray-100 rounded text-sm">Feature B</span>
                            <span className="px-2 py-1 bg-gray-100 rounded text-sm">Feature C</span>
                          </div>
                        </div>
                        <div className="bg-white p-3 rounded border border-gray-200">
                          <span className="text-sm text-brand-gray">OFFERS</span>
                          <div className="flex flex-wrap gap-2 mt-1">
                            <span className="px-2 py-1 bg-gray-100 rounded text-sm">10% Off</span>
                            <span className="px-2 py-1 bg-gray-100 rounded text-sm">Free Trial</span>
                            <span className="px-2 py-1 bg-gray-100 rounded text-sm">Premium</span>
                          </div>
                        </div>
                        <div className="bg-white p-3 rounded border border-gray-200">
                          <span className="text-sm text-brand-gray">MESSAGE VARIATIONS</span>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {Array.from({ length: 10 }, (_, i) => (
                              <span key={i} className="px-2 py-1 bg-gray-100 rounded text-sm">M{i+1}</span>
                            ))}
                            <span className="px-2 py-1 bg-brand-gray/20 rounded text-sm text-brand-gray">+10 more</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Guardrails */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-8 w-8 rounded-full bg-brand-yellow flex items-center justify-center text-brand-black font-medium">3</div>
                        <h4 className="font-semibold text-lg">Set Guardrails</h4>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-white p-3 rounded border border-gray-200">
                          <span className="text-sm text-brand-gray">FREQUENCY</span>
                          <p className="font-medium">Max 3 messages/week</p>
                        </div>
                        <div className="bg-white p-3 rounded border border-gray-200">
                          <span className="text-sm text-brand-gray">BUDGET</span>
                          <p className="font-medium">$5K max campaign spend</p>
                        </div>
                        <div className="bg-white p-3 rounded border border-gray-200">
                          <span className="text-sm text-brand-gray">TIMING</span>
                          <p className="font-medium">Business hours only</p>
                        </div>
                      </div>
                    </div>
                    
                    <Button variant="orange" className="w-full">Launch AI Agent</Button>
                  </div>
                </div>
              </div>

              {/* Middle Column - AI Decisioning Visualization */}
              <div className="lg:col-span-5 bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
                <div className="bg-brand-orange/10 p-4 border-b border-gray-100">
                  <h3 className="text-xl font-semibold text-brand-black">AI Decisioning in Action</h3>
                </div>
                <div className="p-6">
                  {/* User Profiles */}
                  <div className="space-y-6">
                    {/* Customer 1 */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className="h-10 w-10 rounded-full bg-brand-pink/20 flex items-center justify-center">
                            <Users className="h-5 w-5 text-brand-pink" />
                          </div>
                          <h4 className="font-semibold">Sarah K.</h4>
                        </div>
                        <span className="text-brand-gray text-sm">User Persona: Early Adopter</span>
                      </div>
                      
                      {/* Journey Steps */}
                      <div className="space-y-3">
                        <div className="relative pl-8">
                          <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-200"></div>
                          <div className="absolute left-[-4px] top-1 h-8 w-8 rounded-full bg-white border-2 border-brand-pink flex items-center justify-center">
                            <span className="text-sm font-medium">1</span>
                          </div>
                          <div className="bg-white p-3 rounded border border-gray-200">
                            <div className="flex justify-between items-start mb-1">
                              <span className="font-medium">WhatsApp Message</span>
                              <span className="text-xs bg-brand-yellow/20 text-brand-black px-2 py-0.5 rounded">Day 1, 9:30 AM</span>
                            </div>
                            <p className="text-sm text-brand-gray">Feature tutorial (M3) with personalized onboarding</p>
                          </div>
                        </div>
                        <div className="relative pl-8">
                          <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-200"></div>
                          <div className="absolute left-[-4px] top-1 h-8 w-8 rounded-full bg-white border-2 border-brand-orange flex items-center justify-center">
                            <span className="text-sm font-medium">2</span>
                          </div>
                          <div className="bg-white p-3 rounded border border-gray-200">
                            <div className="flex justify-between items-start mb-1">
                              <span className="font-medium">Push Notification</span>
                              <span className="text-xs bg-brand-yellow/20 text-brand-black px-2 py-0.5 rounded">Day 3, 4:15 PM</span>
                            </div>
                            <p className="text-sm text-brand-gray">Feature usage reminder (M7) with social proof</p>
                          </div>
                        </div>
                        <div className="relative pl-8">
                          <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-200"></div>
                          <div className="absolute left-[-4px] top-1 h-8 w-8 rounded-full bg-white border-2 border-green-500 flex items-center justify-center">
                            <Check className="h-4 w-4 text-green-500" />
                          </div>
                          <div className="bg-green-50 p-3 rounded border border-green-200">
                            <div className="flex justify-between items-start mb-1">
                              <span className="font-medium text-green-700">Goal Achieved</span>
                              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">Day 4</span>
                            </div>
                            <p className="text-sm text-green-600">Feature adoption complete, 2 features used</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Customer 2 */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className="h-10 w-10 rounded-full bg-brand-orange/20 flex items-center justify-center">
                            <Users className="h-5 w-5 text-brand-orange" />
                          </div>
                          <h4 className="font-semibold">Michael T.</h4>
                        </div>
                        <span className="text-brand-gray text-sm">User Persona: Busy Professional</span>
                      </div>
                      
                      {/* Journey Steps */}
                      <div className="space-y-3">
                        <div className="relative pl-8">
                          <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-200"></div>
                          <div className="absolute left-[-4px] top-1 h-8 w-8 rounded-full bg-white border-2 border-brand-pink flex items-center justify-center">
                            <span className="text-sm font-medium">1</span>
                          </div>
                          <div className="bg-white p-3 rounded border border-gray-200">
                            <div className="flex justify-between items-start mb-1">
                              <span className="font-medium">Email</span>
                              <span className="text-xs bg-brand-yellow/20 text-brand-black px-2 py-0.5 rounded">Day 1, 7:00 AM</span>
                            </div>
                            <p className="text-sm text-brand-gray">Productivity benefits (M12) with time-saving stats</p>
                          </div>
                        </div>
                        <div className="relative pl-8">
                          <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-200"></div>
                          <div className="absolute left-[-4px] top-1 h-8 w-8 rounded-full bg-white border-2 border-brand-orange flex items-center justify-center">
                            <span className="text-sm font-medium">2</span>
                          </div>
                          <div className="bg-white p-3 rounded border border-gray-200">
                            <div className="flex justify-between items-start mb-1">
                              <span className="font-medium">SMS</span>
                              <span className="text-xs bg-brand-yellow/20 text-brand-black px-2 py-0.5 rounded">Day 2, 8:30 AM</span>
                            </div>
                            <p className="text-sm text-brand-gray">Quick tip (M15) with one-click activation</p>
                          </div>
                        </div>
                        <div className="relative pl-8">
                          <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-200"></div>
                          <div className="absolute left-[-4px] top-1 h-8 w-8 rounded-full bg-white border-2 border-brand-yellow flex items-center justify-center">
                            <span className="text-sm font-medium">3</span>
                          </div>
                          <div className="bg-white p-3 rounded border border-gray-200">
                            <div className="flex justify-between items-start mb-1">
                              <span className="font-medium">WhatsApp</span>
                              <span className="text-xs bg-brand-yellow/20 text-brand-black px-2 py-0.5 rounded">Day 5, 12:15 PM</span>
                            </div>
                            <p className="text-sm text-brand-gray">Premium offer (M19) with free trial period</p>
                          </div>
                        </div>
                        <div className="relative pl-8">
                          <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-200"></div>
                          <div className="absolute left-[-4px] top-1 h-8 w-8 rounded-full bg-white border-2 border-green-500 flex items-center justify-center">
                            <Check className="h-4 w-4 text-green-500" />
                          </div>
                          <div className="bg-green-50 p-3 rounded border border-green-200">
                            <div className="flex justify-between items-start mb-1">
                              <span className="font-medium text-green-700">Goal Achieved</span>
                              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">Day 7</span>
                            </div>
                            <p className="text-sm text-green-600">Premium subscription activated</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Decision Explanation */}
              <div className="lg:col-span-3 bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
                <div className="bg-brand-yellow/10 p-4 border-b border-gray-100">
                  <h3 className="text-xl font-semibold text-brand-black">Decision Insights</h3>
                </div>
                <div className="p-6">
                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="h-8 w-8 rounded-full bg-white border-2 border-brand-pink flex items-center justify-center">
                        <MessageSquare className="h-4 w-4 text-brand-pink" />
                      </div>
                      <p className="font-medium">Sarah's Journey Analysis</p>
                    </div>
                    <div className="space-y-3 text-sm">
                      <div className="bg-white p-3 rounded border border-gray-200">
                        <span className="font-medium block mb-1">Signal Analysis:</span>
                        <p className="text-brand-gray">Early adoption behavior, high app opens, feature discovery pattern</p>
                      </div>
                      <div className="bg-white p-3 rounded border border-gray-200">
                        <span className="font-medium block mb-1">Why WhatsApp:</span>
                        <p className="text-brand-gray">High WhatsApp open rate (92%), responds quickly to rich visual content</p>
                      </div>
                      <div className="bg-white p-3 rounded border border-gray-200">
                        <span className="font-medium block mb-1">Why Message M3:</span>
                        <p className="text-brand-gray">Visual learner persona, responds to step-by-step instructions</p>
                      </div>
                      <div className="bg-white p-3 rounded border border-gray-200">
                        <span className="font-medium block mb-1">Response Data:</span>
                        <p className="text-brand-gray">Message opened in 3 minutes, features explored same day</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="h-8 w-8 rounded-full bg-white border-2 border-brand-orange flex items-center justify-center">
                        <MessageSquare className="h-4 w-4 text-brand-orange" />
                      </div>
                      <p className="font-medium">Michael's Journey Analysis</p>
                    </div>
                    <div className="space-y-3 text-sm">
                      <div className="bg-white p-3 rounded border border-gray-200">
                        <span className="font-medium block mb-1">Signal Analysis:</span>
                        <p className="text-brand-gray">Morning app usage pattern, business hours activity, price-sensitive</p>
                      </div>
                      <div className="bg-white p-3 rounded border border-gray-200">
                        <span className="font-medium block mb-1">Why Email First:</span>
                        <p className="text-brand-gray">Early morning email checking pattern, 75% open rate before 8am</p>
                      </div>
                      <div className="bg-white p-3 rounded border border-gray-200">
                        <span className="font-medium block mb-1">Why SMS Next:</span>
                        <p className="text-brand-gray">No email action, high SMS responsiveness (88% during morning commute)</p>
                      </div>
                      <div className="bg-white p-3 rounded border border-gray-200">
                        <span className="font-medium block mb-1">Offer Choice:</span>
                        <p className="text-brand-gray">Premium trial conversion highest among similar segment (43% vs 12%)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section - Summary/CTA */}
            <div className="bg-gradient-to-r from-brand-pink/10 to-brand-orange/10 p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold text-brand-black mb-4">No Black Box - Full Transparency</h3>
              <p className="text-lg text-brand-gray mb-6 max-w-3xl mx-auto">
                Thoughtnudge provides complete visibility into every decision, from signal detection to channel selection to message choice.
                It's like having a growth expert analyzing and optimizing for each customer, 24/7.
              </p>
              <div className="flex justify-center gap-4">
                <Button variant="orange" size="lg">
                  Book a Demo
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Test;
