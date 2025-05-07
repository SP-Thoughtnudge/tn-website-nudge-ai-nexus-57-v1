
import React from "react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { ArrowRight, Check, MessageSquare, Users, Mail, Bell, Mic, Target, Package, CircleCheck, CircleX, Info, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Test = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20 pb-12">
        <section className="container mx-auto px-3">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-bold text-brand-black mb-3 text-center">
              How Thoughtnudge Makes Decisions
            </h1>
            <p className="text-base text-center text-brand-gray mb-6 max-w-3xl mx-auto">
              Our AI autonomously drives growth by making the right decision for each customer,
              at the right time, through the right channel.
            </p>

            {/* Main Content Area */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-8">
              {/* Left Column - Configuration */}
              <div className="lg:col-span-4 bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <div className="bg-brand-pink/10 p-3 border-b border-gray-100">
                  <h3 className="text-lg font-semibold text-brand-black">Growth Manager Setup</h3>
                </div>
                <div className="p-4">
                  <div className="space-y-4">
                    {/* Goal Setting */}
                    <div className="bg-gray-50 p-3 rounded">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="h-6 w-6 rounded-full bg-brand-pink flex items-center justify-center text-white font-medium text-xs">1</div>
                        <h4 className="font-semibold text-base flex items-center gap-1">
                          <Target size={16} /> Define Goal
                        </h4>
                      </div>
                      <div className="bg-white p-2 rounded border border-gray-200 mb-2 text-sm">
                        <span className="text-xs text-brand-gray">GOAL</span>
                        <p className="font-medium">Increase product adoption by 30%</p>
                      </div>
                      <div className="bg-white p-2 rounded border border-gray-200 text-sm">
                        <span className="text-xs text-brand-gray">AUDIENCE</span>
                        <p className="font-medium">New users with &lt;2 logins</p>
                      </div>
                    </div>

                    {/* Available Options */}
                    <div className="bg-gray-50 p-3 rounded">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="h-6 w-6 rounded-full bg-brand-orange flex items-center justify-center text-white font-medium text-xs">2</div>
                        <h4 className="font-semibold text-base">Define Options</h4>
                      </div>
                      <div className="space-y-2">
                        <div className="bg-white p-2 rounded border border-gray-200">
                          <span className="text-xs text-brand-gray flex items-center gap-1 mb-1">CHANNELS</span>
                          <div className="flex flex-wrap gap-1">
                            <span className="px-2 py-0.5 bg-gray-100 rounded text-xs flex items-center gap-1"><Mail size={10} /> Email</span>
                            <span className="px-2 py-0.5 bg-gray-100 rounded text-xs flex items-center gap-1"><MessageSquare size={10} /> SMS</span>
                            <span className="px-2 py-0.5 bg-gray-100 rounded text-xs flex items-center gap-1"><Bell size={10} /> Push</span>
                            <span className="px-2 py-0.5 bg-gray-100 rounded text-xs flex items-center gap-1"><Mic size={10} /> Voice</span>
                          </div>
                        </div>
                        <div className="bg-white p-2 rounded border border-gray-200">
                          <span className="text-xs text-brand-gray flex items-center gap-1 mb-1">PRODUCTS</span>
                          <div className="flex flex-wrap gap-1">
                            <span className="px-2 py-0.5 bg-gray-100 rounded text-xs flex items-center gap-1"><Package size={10} /> Feature A</span>
                            <span className="px-2 py-0.5 bg-gray-100 rounded text-xs flex items-center gap-1"><Package size={10} /> Feature B</span>
                            <span className="px-2 py-0.5 bg-gray-100 rounded text-xs flex items-center gap-1"><Package size={10} /> Feature C</span>
                          </div>
                        </div>
                        <div className="bg-white p-2 rounded border border-gray-200">
                          <span className="text-xs text-brand-gray mb-1">OFFERS</span>
                          <div className="flex flex-wrap gap-1">
                            <span className="px-2 py-0.5 bg-gray-100 rounded text-xs">10% Off</span>
                            <span className="px-2 py-0.5 bg-gray-100 rounded text-xs">Free Trial</span>
                            <span className="px-2 py-0.5 bg-gray-100 rounded text-xs">Premium</span>
                          </div>
                        </div>
                        <div className="bg-white p-2 rounded border border-gray-200">
                          <span className="text-xs text-brand-gray mb-1">MESSAGE VARIATIONS</span>
                          <div className="grid grid-cols-5 gap-1">
                            {Array.from({ length: 10 }, (_, i) => (
                              <span key={i} className="px-1 py-0.5 bg-gray-100 rounded text-xs text-center">M{i+1}</span>
                            ))}
                            <span className="px-1 py-0.5 bg-brand-gray/20 rounded text-xs text-center text-brand-gray">+10</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Guardrails */}
                    <div className="bg-gray-50 p-3 rounded">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="h-6 w-6 rounded-full bg-brand-yellow flex items-center justify-center text-brand-black font-medium text-xs">3</div>
                        <h4 className="font-semibold text-base flex items-center gap-1">
                          <Settings size={16} /> Set Guardrails
                        </h4>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="bg-white p-2 rounded border border-gray-200 text-sm">
                          <span className="text-xs text-brand-gray block">FREQUENCY</span>
                          <p className="font-medium text-xs">Max 3/week</p>
                        </div>
                        <div className="bg-white p-2 rounded border border-gray-200 text-sm">
                          <span className="text-xs text-brand-gray block">BUDGET</span>
                          <p className="font-medium text-xs">$5K max</p>
                        </div>
                        <div className="bg-white p-2 rounded border border-gray-200 text-sm">
                          <span className="text-xs text-brand-gray block">TIMING</span>
                          <p className="font-medium text-xs">Business hrs</p>
                        </div>
                      </div>
                    </div>
                    
                    <Button variant="orange" size="sm" className="w-full text-xs">Launch AI Agent</Button>
                  </div>
                </div>
              </div>

              {/* Middle Column - AI Decisioning Visualization */}
              <div className="lg:col-span-5 bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <div className="bg-brand-orange/10 p-3 border-b border-gray-100">
                  <h3 className="text-lg font-semibold text-brand-black">AI Decisioning in Action</h3>
                </div>
                <div className="p-4">
                  {/* User Profiles */}
                  <div className="space-y-4">
                    {/* Customer 1 */}
                    <div className="bg-gray-50 p-3 rounded">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded-full bg-brand-pink/20 flex items-center justify-center">
                            <Users className="h-4 w-4 text-brand-pink" />
                          </div>
                          <h4 className="font-semibold text-sm">Sarah K. <span className="text-xs font-normal text-brand-gray">(Early Adopter)</span></h4>
                        </div>
                      </div>
                      
                      {/* Journey Steps */}
                      <div className="flex items-stretch space-x-1 mb-1">
                        <div className="bg-white p-2 rounded border border-gray-200 flex-1 flex flex-col text-xs">
                          <div className="flex justify-between items-start mb-1">
                            <span className="font-medium flex items-center gap-1">
                              <Bell size={12} /> Push
                            </span>
                            <span className="text-2xs bg-brand-yellow/20 text-brand-black px-1 rounded">Day 1</span>
                          </div>
                          <p className="text-2xs text-brand-gray">Tutorial (M3)</p>
                        </div>
                        <ArrowRight className="h-4 w-4 self-center text-gray-400" />
                        <div className="bg-white p-2 rounded border border-gray-200 flex-1 flex flex-col text-xs">
                          <div className="flex justify-between items-start mb-1">
                            <span className="font-medium flex items-center gap-1">
                              <Mail size={12} /> Email
                            </span>
                            <span className="text-2xs bg-brand-yellow/20 text-brand-black px-1 rounded">Day 3</span>
                          </div>
                          <p className="text-2xs text-brand-gray">Reminder (M7)</p>
                        </div>
                        <ArrowRight className="h-4 w-4 self-center text-gray-400" />
                        <div className="bg-green-50 p-2 rounded border border-green-200 flex-1 flex flex-col text-xs">
                          <div className="flex justify-between items-start mb-1">
                            <span className="font-medium text-green-700 flex items-center gap-1">
                              <CircleCheck className="h-3 w-3" /> Goal
                            </span>
                            <span className="text-2xs bg-green-100 text-green-700 px-1 rounded">Day 4</span>
                          </div>
                          <p className="text-2xs text-green-600">2 features used</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Customer 2 */}
                    <div className="bg-gray-50 p-3 rounded">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded-full bg-brand-orange/20 flex items-center justify-center">
                            <Users className="h-4 w-4 text-brand-orange" />
                          </div>
                          <h4 className="font-semibold text-sm">Michael T. <span className="text-xs font-normal text-brand-gray">(Busy Professional)</span></h4>
                        </div>
                      </div>
                      
                      {/* Journey Steps */}
                      <div className="flex items-stretch space-x-1">
                        <div className="bg-white p-2 rounded border border-gray-200 flex-1 flex flex-col text-xs">
                          <div className="flex justify-between items-start mb-1">
                            <span className="font-medium flex items-center gap-1">
                              <Mail size={12} /> Email
                            </span>
                            <span className="text-2xs bg-brand-yellow/20 text-brand-black px-1 rounded">Day 1</span>
                          </div>
                          <p className="text-2xs text-brand-gray">Benefits (M12)</p>
                        </div>
                        <ArrowRight className="h-4 w-4 self-center text-gray-400" />
                        <div className="bg-white p-2 rounded border border-gray-200 flex-1 flex flex-col text-xs">
                          <div className="flex justify-between items-start mb-1">
                            <span className="font-medium flex items-center gap-1">
                              <MessageSquare size={12} /> SMS
                            </span>
                            <span className="text-2xs bg-brand-yellow/20 text-brand-black px-1 rounded">Day 2</span>
                          </div>
                          <p className="text-2xs text-brand-gray">Quick tip (M15)</p>
                        </div>
                        <ArrowRight className="h-4 w-4 self-center text-gray-400" />
                        <div className="bg-green-50 p-2 rounded border border-green-200 flex-1 flex flex-col text-xs">
                          <div className="flex justify-between items-start mb-1">
                            <span className="font-medium text-green-700 flex items-center gap-1">
                              <CircleCheck className="h-3 w-3" /> Goal
                            </span>
                            <span className="text-2xs bg-green-100 text-green-700 px-1 rounded">Day 5</span>
                          </div>
                          <p className="text-2xs text-green-600">Premium activated</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Customer 3 */}
                    <div className="bg-gray-50 p-3 rounded">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded-full bg-brand-pink/20 flex items-center justify-center">
                            <Users className="h-4 w-4 text-brand-pink" />
                          </div>
                          <h4 className="font-semibold text-sm">David R. <span className="text-xs font-normal text-brand-gray">(Price Sensitive)</span></h4>
                        </div>
                      </div>
                      
                      {/* Journey Steps */}
                      <div className="flex items-stretch space-x-1">
                        <div className="bg-white p-2 rounded border border-gray-200 flex-1 flex flex-col text-xs">
                          <div className="flex justify-between items-start mb-1">
                            <span className="font-medium flex items-center gap-1">
                              <Mic size={12} /> Voice
                            </span>
                            <span className="text-2xs bg-brand-yellow/20 text-brand-black px-1 rounded">Day 1</span>
                          </div>
                          <p className="text-2xs text-brand-gray">Welcome (M1)</p>
                        </div>
                        <ArrowRight className="h-4 w-4 self-center text-gray-400" />
                        <div className="bg-white p-2 rounded border border-gray-200 flex-1 flex flex-col text-xs">
                          <div className="flex justify-between items-start mb-1">
                            <span className="font-medium flex items-center gap-1">
                              <Bell size={12} /> Push
                            </span>
                            <span className="text-2xs bg-brand-yellow/20 text-brand-black px-1 rounded">Day 3</span>
                          </div>
                          <p className="text-2xs text-brand-gray">Discount (M9)</p>
                        </div>
                        <ArrowRight className="h-4 w-4 self-center text-gray-400" />
                        <div className="bg-green-50 p-2 rounded border border-green-200 flex-1 flex flex-col text-xs">
                          <div className="flex justify-between items-start mb-1">
                            <span className="font-medium text-green-700 flex items-center gap-1">
                              <CircleCheck className="h-3 w-3" /> Goal
                            </span>
                            <span className="text-2xs bg-green-100 text-green-700 px-1 rounded">Day 6</span>
                          </div>
                          <p className="text-2xs text-green-600">Feature activated</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Customer 4 */}
                    <div className="bg-gray-50 p-3 rounded">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded-full bg-brand-yellow/20 flex items-center justify-center">
                            <Users className="h-4 w-4 text-brand-yellow" />
                          </div>
                          <h4 className="font-semibold text-sm">Emma L. <span className="text-xs font-normal text-brand-gray">(Casual User)</span></h4>
                        </div>
                      </div>
                      
                      {/* Journey Steps */}
                      <div className="flex items-stretch space-x-1">
                        <div className="bg-white p-2 rounded border border-gray-200 flex-1 flex flex-col text-xs">
                          <div className="flex justify-between items-start mb-1">
                            <span className="font-medium flex items-center gap-1">
                              <MessageSquare size={12} /> SMS
                            </span>
                            <span className="text-2xs bg-brand-yellow/20 text-brand-black px-1 rounded">Day 2</span>
                          </div>
                          <p className="text-2xs text-brand-gray">Feature (M5)</p>
                        </div>
                        <ArrowRight className="h-4 w-4 self-center text-gray-400" />
                        <div className="bg-white p-2 rounded border border-gray-200 flex-1 flex flex-col text-xs">
                          <div className="flex justify-between items-start mb-1">
                            <span className="font-medium flex items-center gap-1">
                              <Mail size={12} /> Email
                            </span>
                            <span className="text-2xs bg-brand-yellow/20 text-brand-black px-1 rounded">Day 4</span>
                          </div>
                          <p className="text-2xs text-brand-gray">Social proof (M11)</p>
                        </div>
                        <ArrowRight className="h-4 w-4 self-center text-gray-400" />
                        <div className="bg-green-50 p-2 rounded border border-green-200 flex-1 flex flex-col text-xs">
                          <div className="flex justify-between items-start mb-1">
                            <span className="font-medium text-green-700 flex items-center gap-1">
                              <CircleCheck className="h-3 w-3" /> Goal
                            </span>
                            <span className="text-2xs bg-green-100 text-green-700 px-1 rounded">Day 7</span>
                          </div>
                          <p className="text-2xs text-green-600">Trial upgraded</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Decision Explanation */}
              <div className="lg:col-span-3 bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <div className="bg-brand-yellow/10 p-3 border-b border-gray-100">
                  <h3 className="text-lg font-semibold text-brand-black flex items-center gap-1">
                    <Info size={16} /> Decision Insights
                  </h3>
                </div>
                <div className="p-3">
                  <div className="bg-gray-50 p-2 rounded mb-3">
                    <div className="flex items-center gap-1 mb-1">
                      <div className="h-4 w-4 rounded-full bg-white border border-brand-pink flex items-center justify-center">
                        <Info className="h-2 w-2 text-brand-pink" />
                      </div>
                      <p className="font-medium text-xs">Why Push for Sarah?</p>
                    </div>
                    <ul className="list-disc pl-4 space-y-0.5">
                      <li className="text-2xs text-brand-gray">92% open rate on Push</li>
                      <li className="text-2xs text-brand-gray">Visual learning pattern</li>
                      <li className="text-2xs text-brand-gray">Active 9am-11am daily</li>
                      <li className="text-2xs text-brand-gray">Previous feature interest</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-2 rounded mb-3">
                    <div className="flex items-center gap-1 mb-1">
                      <div className="h-4 w-4 rounded-full bg-white border border-brand-orange flex items-center justify-center">
                        <Info className="h-2 w-2 text-brand-orange" />
                      </div>
                      <p className="font-medium text-xs">Why Email for Michael?</p>
                    </div>
                    <ul className="list-disc pl-4 space-y-0.5">
                      <li className="text-2xs text-brand-gray">Morning email checking (75% open)</li>
                      <li className="text-2xs text-brand-gray">Business profile triggers</li>
                      <li className="text-2xs text-brand-gray">Productivity value focus</li>
                      <li className="text-2xs text-brand-gray">Previous similar conversions</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-2 rounded mb-3">
                    <div className="flex items-center gap-1 mb-1">
                      <div className="h-4 w-4 rounded-full bg-white border border-brand-pink flex items-center justify-center">
                        <Info className="h-2 w-2 text-brand-pink" />
                      </div>
                      <p className="font-medium text-xs">Why Voice for David?</p>
                    </div>
                    <ul className="list-disc pl-4 space-y-0.5">
                      <li className="text-2xs text-brand-gray">Low text engagement history</li>
                      <li className="text-2xs text-brand-gray">Voice completion rate 83%</li>
                      <li className="text-2xs text-brand-gray">Price sensitivity patterns</li>
                      <li className="text-2xs text-brand-gray">Weekend activity profile</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-2 rounded">
                    <div className="flex items-center gap-1 mb-1">
                      <div className="h-4 w-4 rounded-full bg-white border border-brand-yellow flex items-center justify-center">
                        <Info className="h-2 w-2 text-brand-yellow" />
                      </div>
                      <p className="font-medium text-xs">Why SMS for Emma?</p>
                    </div>
                    <ul className="list-disc pl-4 space-y-0.5">
                      <li className="text-2xs text-brand-gray">88% SMS response rate</li>
                      <li className="text-2xs text-brand-gray">Afternoon engagement peaks</li>
                      <li className="text-2xs text-brand-gray">Responds to concise messaging</li>
                      <li className="text-2xs text-brand-gray">Mobile-first behavior profile</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section - Summary/CTA */}
            <div className="bg-gradient-to-r from-brand-pink/10 to-brand-orange/10 p-4 rounded-lg text-center">
              <h3 className="text-xl font-bold text-brand-black mb-2">No Black Box - Full Transparency</h3>
              <p className="text-sm text-brand-gray mb-4 max-w-3xl mx-auto">
                Thoughtnudge provides complete visibility into every AI decision, 
                optimizing for each customer like a dedicated growth expert working 24/7.
              </p>
              <div className="flex justify-center gap-3">
                <Button variant="orange" size="sm">
                  Book a Demo
                </Button>
                <Button variant="outline" size="sm">
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
