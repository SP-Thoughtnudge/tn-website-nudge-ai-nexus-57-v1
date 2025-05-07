
import React from "react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { ArrowRight, Check, MessageSquare, Users, Mail, Bell, Mic, Target, Package, CircleCheck, CircleX, Info, Settings, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Test = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16 pb-8">
        <section className="container mx-auto px-3">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-xl md:text-2xl font-bold text-brand-black mb-2 text-center">
              How Thoughtnudge Drives Upsell Revenue
            </h1>
            <p className="text-xs text-center text-brand-gray mb-4 max-w-3xl mx-auto">
              Our AI autonomously increases hotel revenue by making personalized upsell recommendations 
              for each guest at optimal moments.
            </p>

            {/* Main Content Area */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 mb-6">
              {/* Left Column - Configuration */}
              <div className="lg:col-span-4 bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <div className="bg-[#D72660]/10 p-2 border-b border-gray-100">
                  <h3 className="text-sm font-semibold text-brand-black">Growth Manager Setup</h3>
                </div>
                <div className="p-3">
                  <div className="space-y-3">
                    {/* Goal Setting */}
                    <div className="bg-gray-50 p-2 rounded">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="h-5 w-5 rounded-full bg-[#D72660] flex items-center justify-center text-white font-medium text-xs">1</div>
                        <h4 className="font-semibold text-xs flex items-center gap-1">
                          <Target size={12} /> Define Goal
                        </h4>
                      </div>
                      <div className="bg-white p-2 rounded border border-gray-200 mb-1 text-xs">
                        <span className="text-2xs text-brand-gray">GOAL</span>
                        <p className="font-medium">Increase post-booking revenue by 40%</p>
                      </div>
                      <div className="bg-white p-2 rounded border border-gray-200 text-xs">
                        <span className="text-2xs text-brand-gray">AUDIENCE</span>
                        <p className="font-medium">Guests with confirmed reservations</p>
                      </div>
                    </div>

                    {/* Available Options */}
                    <div className="bg-gray-50 p-2 rounded">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="h-5 w-5 rounded-full bg-[#F6C343] flex items-center justify-center text-[#5A5A5A] font-medium text-xs">2</div>
                        <h4 className="font-semibold text-xs">Define Options</h4>
                      </div>
                      <div className="space-y-1">
                        <div className="bg-white p-2 rounded border border-gray-200">
                          <span className="text-2xs text-brand-gray flex items-center gap-1 mb-1">CHANNELS</span>
                          <div className="flex flex-wrap gap-1">
                            <span className="px-1 py-0.5 bg-gray-100 rounded text-2xs flex items-center gap-1"><Mail size={8} /> Email</span>
                            <span className="px-1 py-0.5 bg-gray-100 rounded text-2xs flex items-center gap-1"><MessageSquare size={8} /> SMS</span>
                            <span className="px-1 py-0.5 bg-gray-100 rounded text-2xs flex items-center gap-1"><Bell size={8} /> Push</span>
                            <span className="px-1 py-0.5 bg-gray-100 rounded text-2xs flex items-center gap-1"><Mic size={8} /> Voice</span>
                          </div>
                        </div>
                        <div className="bg-white p-2 rounded border border-gray-200">
                          <span className="text-2xs text-brand-gray flex items-center gap-1 mb-1">UPSELL PRODUCTS</span>
                          <div className="flex flex-wrap gap-1">
                            <span className="px-1 py-0.5 bg-gray-100 rounded text-2xs flex items-center gap-1"><Package size={8} /> Room Upgrade</span>
                            <span className="px-1 py-0.5 bg-gray-100 rounded text-2xs flex items-center gap-1"><Package size={8} /> Spa Package</span>
                            <span className="px-1 py-0.5 bg-gray-100 rounded text-2xs flex items-center gap-1"><Package size={8} /> Dining Credit</span>
                            <span className="px-1 py-0.5 bg-gray-100 rounded text-2xs flex items-center gap-1"><Package size={8} /> Airport Transfer</span>
                            <span className="px-1 py-0.5 bg-gray-100 rounded text-2xs flex items-center gap-1"><Package size={8} /> Late Checkout</span>
                          </div>
                        </div>
                        <div className="bg-white p-2 rounded border border-gray-200">
                          <span className="text-2xs text-brand-gray mb-1">OFFERS</span>
                          <div className="flex flex-wrap gap-1">
                            <span className="px-1 py-0.5 bg-gray-100 rounded text-2xs">20% Early Bird</span>
                            <span className="px-1 py-0.5 bg-gray-100 rounded text-2xs">Bundle Discount</span>
                            <span className="px-1 py-0.5 bg-gray-100 rounded text-2xs">Loyalty Points 2x</span>
                            <span className="px-1 py-0.5 bg-gray-100 rounded text-2xs">Free Add-on</span>
                          </div>
                        </div>
                        <div className="bg-white p-2 rounded border border-gray-200">
                          <span className="text-2xs text-brand-gray mb-1">MESSAGE VARIATIONS</span>
                          <div className="grid grid-cols-5 gap-1">
                            <span className="px-1 py-0.5 bg-gray-100 rounded text-2xs text-center">Excited</span>
                            <span className="px-1 py-0.5 bg-gray-100 rounded text-2xs text-center">Urgent</span>
                            <span className="px-1 py-0.5 bg-gray-100 rounded text-2xs text-center">Casual</span>
                            <span className="px-1 py-0.5 bg-gray-100 rounded text-2xs text-center">Formal</span>
                            <span className="px-1 py-0.5 bg-gray-100 rounded text-2xs text-center">Personal</span>
                          </div>
                          <div className="grid grid-cols-5 gap-1 mt-1">
                            <span className="px-1 py-0.5 bg-gray-100 rounded text-2xs text-center">M1</span>
                            <span className="px-1 py-0.5 bg-gray-100 rounded text-2xs text-center">M2</span>
                            <span className="px-1 py-0.5 bg-gray-100 rounded text-2xs text-center">M3</span>
                            <span className="px-1 py-0.5 bg-gray-100 rounded text-2xs text-center">M4</span>
                            <span className="px-1 py-0.5 bg-[#5A5A5A]/20 rounded text-2xs text-center text-[#5A5A5A]">+15</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Guardrails */}
                    <div className="bg-gray-50 p-2 rounded">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="h-5 w-5 rounded-full bg-[#5A5A5A] flex items-center justify-center text-white font-medium text-xs">3</div>
                        <h4 className="font-semibold text-xs flex items-center gap-1">
                          <Settings size={12} /> Set Guardrails
                        </h4>
                      </div>
                      <div className="grid grid-cols-3 gap-1">
                        <div className="bg-white p-1 rounded border border-gray-200 text-xs">
                          <span className="text-2xs text-brand-gray block">FREQUENCY</span>
                          <p className="font-medium text-2xs">Max 2/week</p>
                        </div>
                        <div className="bg-white p-1 rounded border border-gray-200 text-xs">
                          <span className="text-2xs text-brand-gray block">TIMING</span>
                          <p className="font-medium text-2xs">7 days before</p>
                        </div>
                        <div className="bg-white p-1 rounded border border-gray-200 text-xs">
                          <span className="text-2xs text-brand-gray block">STOPS</span>
                          <p className="font-medium text-2xs">At check-in</p>
                        </div>
                      </div>
                    </div>
                    
                    <Button variant="orange" size="sm" className="w-full text-2xs">Launch AI Agent</Button>
                  </div>
                </div>
              </div>

              {/* Middle Column - AI Decisioning Visualization */}
              <div className="lg:col-span-5 bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <div className="bg-[#F6C343]/10 p-2 border-b border-gray-100">
                  <h3 className="text-sm font-semibold text-brand-black">AI Decisioning in Action</h3>
                </div>
                <div className="p-3">
                  {/* User Profiles */}
                  <div className="space-y-3">
                    {/* Customer 1 */}
                    <div className="bg-gray-50 p-2 rounded">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-1">
                          <div className="h-6 w-6 rounded-full bg-[#D72660]/20 flex items-center justify-center">
                            <Users className="h-3 w-3 text-[#D72660]" />
                          </div>
                          <h4 className="font-semibold text-2xs">Emily R. <span className="text-2xs font-normal text-brand-gray">(Luxury Traveler)</span></h4>
                        </div>
                      </div>
                      
                      {/* Journey Steps */}
                      <div className="flex items-stretch space-x-1 mb-1">
                        <div className="bg-white p-1 rounded border border-gray-200 flex-1 flex flex-col text-2xs">
                          <div className="flex justify-between items-start">
                            <span className="font-medium flex items-center gap-1">
                              <Mail size={8} /> Email
                            </span>
                            <span className="text-2xs bg-[#F6C343]/20 text-[#5A5A5A] px-1 rounded flex items-center gap-0.5"><Clock size={7} /> Mon 9am</span>
                          </div>
                          <div className="flex justify-between text-2xs text-brand-gray">
                            <span>Room Upgrade</span>
                            <span>Formal M2</span>
                          </div>
                        </div>
                        <ArrowRight className="h-3 w-3 self-center text-gray-400" />
                        <div className="bg-white p-1 rounded border border-gray-200 flex-1 flex flex-col text-2xs">
                          <div className="flex justify-between items-start">
                            <span className="font-medium flex items-center gap-1">
                              <Bell size={8} /> Push
                            </span>
                            <span className="text-2xs bg-[#F6C343]/20 text-[#5A5A5A] px-1 rounded flex items-center gap-0.5"><Clock size={7} /> Wed 4pm</span>
                          </div>
                          <div className="flex justify-between text-2xs text-brand-gray">
                            <span>Spa Package</span>
                            <span>Personal M8</span>
                          </div>
                        </div>
                        <ArrowRight className="h-3 w-3 self-center text-gray-400" />
                        <div className="bg-green-50 p-1 rounded border border-green-200 flex-1 flex flex-col text-2xs">
                          <div className="flex justify-between items-start">
                            <span className="font-medium text-green-700 flex items-center gap-1">
                              <CircleCheck className="h-2 w-2" /> Converted
                            </span>
                            <span className="text-2xs bg-green-100 text-green-700 px-1 rounded flex items-center gap-0.5"><Clock size={7} /> Wed 5pm</span>
                          </div>
                          <div className="text-2xs text-green-600 flex justify-between">
                            <span>$350 Spa Package</span>
                            <span>Loyalty 2x</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Customer 2 */}
                    <div className="bg-gray-50 p-2 rounded">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-1">
                          <div className="h-6 w-6 rounded-full bg-[#F6C343]/20 flex items-center justify-center">
                            <Users className="h-3 w-3 text-[#F6C343]" />
                          </div>
                          <h4 className="font-semibold text-2xs">James T. <span className="text-2xs font-normal text-brand-gray">(Business Traveler)</span></h4>
                        </div>
                      </div>
                      
                      {/* Journey Steps */}
                      <div className="flex items-stretch space-x-1">
                        <div className="bg-white p-1 rounded border border-gray-200 flex-1 flex flex-col text-2xs">
                          <div className="flex justify-between items-start">
                            <span className="font-medium flex items-center gap-1">
                              <MessageSquare size={8} /> SMS
                            </span>
                            <span className="text-2xs bg-[#F6C343]/20 text-[#5A5A5A] px-1 rounded flex items-center gap-0.5"><Clock size={7} /> Tue 7am</span>
                          </div>
                          <div className="flex justify-between text-2xs text-brand-gray">
                            <span>Airport Transfer</span>
                            <span>Urgent M4</span>
                          </div>
                        </div>
                        <ArrowRight className="h-3 w-3 self-center text-gray-400" />
                        <div className="bg-white p-1 rounded border border-gray-200 flex-1 flex flex-col text-2xs">
                          <div className="flex justify-between items-start">
                            <span className="font-medium flex items-center gap-1">
                              <Mail size={8} /> Email
                            </span>
                            <span className="text-2xs bg-[#F6C343]/20 text-[#5A5A5A] px-1 rounded flex items-center gap-0.5"><Clock size={7} /> Thu 6pm</span>
                          </div>
                          <div className="flex justify-between text-2xs text-brand-gray">
                            <span>Late Checkout</span>
                            <span>Formal M12</span>
                          </div>
                        </div>
                        <ArrowRight className="h-3 w-3 self-center text-gray-400" />
                        <div className="bg-green-50 p-1 rounded border border-green-200 flex-1 flex flex-col text-2xs">
                          <div className="flex justify-between items-start">
                            <span className="font-medium text-green-700 flex items-center gap-1">
                              <CircleCheck className="h-2 w-2" /> Converted
                            </span>
                            <span className="text-2xs bg-green-100 text-green-700 px-1 rounded flex items-center gap-0.5"><Clock size={7} /> Fri 8am</span>
                          </div>
                          <div className="text-2xs text-green-600 flex justify-between">
                            <span>Both Services</span>
                            <span>Bundle Discount</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Customer 3 */}
                    <div className="bg-gray-50 p-2 rounded">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-1">
                          <div className="h-6 w-6 rounded-full bg-[#5A5A5A]/20 flex items-center justify-center">
                            <Users className="h-3 w-3 text-[#5A5A5A]" />
                          </div>
                          <h4 className="font-semibold text-2xs">Sarah M. <span className="text-2xs font-normal text-brand-gray">(Family Vacation)</span></h4>
                        </div>
                      </div>
                      
                      {/* Journey Steps */}
                      <div className="flex items-stretch space-x-1">
                        <div className="bg-white p-1 rounded border border-gray-200 flex-1 flex flex-col text-2xs">
                          <div className="flex justify-between items-start">
                            <span className="font-medium flex items-center gap-1">
                              <Mail size={8} /> Email
                            </span>
                            <span className="text-2xs bg-[#F6C343]/20 text-[#5A5A5A] px-1 rounded flex items-center gap-0.5"><Clock size={7} /> Mon 2pm</span>
                          </div>
                          <div className="flex justify-between text-2xs text-brand-gray">
                            <span>Dining Credit</span>
                            <span>Excited M3</span>
                          </div>
                        </div>
                        <ArrowRight className="h-3 w-3 self-center text-gray-400" />
                        <div className="bg-white p-1 rounded border border-gray-200 flex-1 flex flex-col text-2xs">
                          <div className="flex justify-between items-start">
                            <span className="font-medium flex items-center gap-1">
                              <Mic size={8} /> Voice
                            </span>
                            <span className="text-2xs bg-[#F6C343]/20 text-[#5A5A5A] px-1 rounded flex items-center gap-0.5"><Clock size={7} /> Fri 5pm</span>
                          </div>
                          <div className="flex justify-between text-2xs text-brand-gray">
                            <span>Room Upgrade</span>
                            <span>Personal M15</span>
                          </div>
                        </div>
                        <ArrowRight className="h-3 w-3 self-center text-gray-400" />
                        <div className="bg-green-50 p-1 rounded border border-green-200 flex-1 flex flex-col text-2xs">
                          <div className="flex justify-between items-start">
                            <span className="font-medium text-green-700 flex items-center gap-1">
                              <CircleCheck className="h-2 w-2" /> Converted
                            </span>
                            <span className="text-2xs bg-green-100 text-green-700 px-1 rounded flex items-center gap-0.5"><Clock size={7} /> Sat 9am</span>
                          </div>
                          <div className="text-2xs text-green-600 flex justify-between">
                            <span>Room Upgrade</span>
                            <span>Early Bird 20%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Customer 4 */}
                    <div className="bg-gray-50 p-2 rounded">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-1">
                          <div className="h-6 w-6 rounded-full bg-[#D72660]/20 flex items-center justify-center">
                            <Users className="h-3 w-3 text-[#D72660]" />
                          </div>
                          <h4 className="font-semibold text-2xs">David K. <span className="text-2xs font-normal text-brand-gray">(Budget Conscious)</span></h4>
                        </div>
                      </div>
                      
                      {/* Journey Steps */}
                      <div className="flex items-stretch space-x-1">
                        <div className="bg-white p-1 rounded border border-gray-200 flex-1 flex flex-col text-2xs">
                          <div className="flex justify-between items-start">
                            <span className="font-medium flex items-center gap-1">
                              <Bell size={8} /> Push
                            </span>
                            <span className="text-2xs bg-[#F6C343]/20 text-[#5A5A5A] px-1 rounded flex items-center gap-0.5"><Clock size={7} /> Wed 9am</span>
                          </div>
                          <div className="flex justify-between text-2xs text-brand-gray">
                            <span>Late Checkout</span>
                            <span>Casual M7</span>
                          </div>
                        </div>
                        <ArrowRight className="h-3 w-3 self-center text-gray-400" />
                        <div className="bg-white p-1 rounded border border-gray-200 flex-1 flex flex-col text-2xs">
                          <div className="flex justify-between items-start">
                            <span className="font-medium flex items-center gap-1">
                              <MessageSquare size={8} /> SMS
                            </span>
                            <span className="text-2xs bg-[#F6C343]/20 text-[#5A5A5A] px-1 rounded flex items-center gap-0.5"><Clock size={7} /> Thu 1pm</span>
                          </div>
                          <div className="flex justify-between text-2xs text-brand-gray">
                            <span>Dining Credit</span>
                            <span>Urgent M10</span>
                          </div>
                        </div>
                        <ArrowRight className="h-3 w-3 self-center text-gray-400" />
                        <div className="bg-green-50 p-1 rounded border border-green-200 flex-1 flex flex-col text-2xs">
                          <div className="flex justify-between items-start">
                            <span className="font-medium text-green-700 flex items-center gap-1">
                              <CircleCheck className="h-2 w-2" /> Converted
                            </span>
                            <span className="text-2xs bg-green-100 text-green-700 px-1 rounded flex items-center gap-0.5"><Clock size={7} /> Thu 3pm</span>
                          </div>
                          <div className="text-2xs text-green-600 flex justify-between">
                            <span>Dining Credit</span>
                            <span>Free Add-on</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Decision Explanation */}
              <div className="lg:col-span-3 bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <div className="bg-[#5A5A5A]/10 p-2 border-b border-gray-100">
                  <h3 className="text-sm font-semibold text-brand-black flex items-center gap-1">
                    <Info size={12} /> Decision Insights
                  </h3>
                </div>
                <div className="p-2">
                  <div className="bg-gray-50 p-2 rounded mb-2">
                    <div className="flex items-center gap-1 mb-1">
                      <div className="h-4 w-4 rounded-full bg-white border border-[#D72660] flex items-center justify-center">
                        <Info className="h-2 w-2 text-[#D72660]" />
                      </div>
                      <p className="font-medium text-2xs">Emily R.</p>
                    </div>
                    <ul className="list-disc pl-4 space-y-0.5">
                      <li className="text-2xs text-brand-gray">Emotional: Aspirational, status-driven</li>
                      <li className="text-2xs text-brand-gray">Tone preference: Sophisticated, exclusive</li>
                      <li className="text-2xs text-brand-gray">Opens emails 9am-10am (87%)</li>
                      <li className="text-2xs text-brand-gray">Push sent after email unopened 24hrs</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-2 rounded mb-2">
                    <div className="flex items-center gap-1 mb-1">
                      <div className="h-4 w-4 rounded-full bg-white border border-[#F6C343] flex items-center justify-center">
                        <Info className="h-2 w-2 text-[#F6C343]" />
                      </div>
                      <p className="font-medium text-2xs">James T.</p>
                    </div>
                    <ul className="list-disc pl-4 space-y-0.5">
                      <li className="text-2xs text-brand-gray">Emotional: Practical, efficiency-focused</li>
                      <li className="text-2xs text-brand-gray">Tone preference: Direct, concise</li>
                      <li className="text-2xs text-brand-gray">High SMS response rate (92%)</li>
                      <li className="text-2xs text-brand-gray">Email follow-up with formal details</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-2 rounded mb-2">
                    <div className="flex items-center gap-1 mb-1">
                      <div className="h-4 w-4 rounded-full bg-white border border-[#5A5A5A] flex items-center justify-center">
                        <Info className="h-2 w-2 text-[#5A5A5A]" />
                      </div>
                      <p className="font-medium text-2xs">Sarah M.</p>
                    </div>
                    <ul className="list-disc pl-4 space-y-0.5">
                      <li className="text-2xs text-brand-gray">Emotional: Family-focused, value-seeking</li>
                      <li className="text-2xs text-brand-gray">Tone preference: Friendly, enthusiastic</li>
                      <li className="text-2xs text-brand-gray">Room upgrade urgency created after 2PM follow-up call</li>
                      <li className="text-2xs text-brand-gray">Voice performed 3x better than email</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-2 rounded">
                    <div className="flex items-center gap-1 mb-1">
                      <div className="h-4 w-4 rounded-full bg-white border border-[#D72660] flex items-center justify-center">
                        <Info className="h-2 w-2 text-[#D72660]" />
                      </div>
                      <p className="font-medium text-2xs">David K.</p>
                    </div>
                    <ul className="list-disc pl-4 space-y-0.5">
                      <li className="text-2xs text-brand-gray">Emotional: Price-conscious, deal-seeking</li>
                      <li className="text-2xs text-brand-gray">Tone preference: Casual, straightforward</li>
                      <li className="text-2xs text-brand-gray">Push → SMS sequence when free offer available</li>
                      <li className="text-2xs text-brand-gray">Time-limited offer created urgency</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section - Summary/CTA */}
            <div className="bg-gradient-to-r from-[#D72660]/10 to-[#F6C343]/10 p-3 rounded-lg text-center">
              <h3 className="text-lg font-bold text-brand-black mb-1">No Black Box - Full Transparency</h3>
              <p className="text-xs text-brand-gray mb-3 max-w-3xl mx-auto">
                Thoughtnudge provides complete visibility into every AI decision, 
                optimizing for each guest like a dedicated concierge working 24/7.
              </p>
              <div className="flex justify-center gap-3">
                <Button variant="orange" size="sm" className="text-xs">
                  Book a Demo
                </Button>
                <Button variant="outline" size="sm" className="text-xs">
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
