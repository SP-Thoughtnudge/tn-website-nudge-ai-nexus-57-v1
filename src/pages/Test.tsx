
import React from "react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Settings, Users, Shield, Brain, Clock, Calendar, Mail, MessageSquare, Phone, Zap } from "lucide-react";

const Test = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-2 py-4">
          <h1 className="text-xl font-bold text-center mb-4">Insurance AI Decisioning Framework</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Growth Manager Setup */}
            <Card className="bg-red-50">
              <CardContent className="p-3">
                <h2 className="font-bold text-sm mb-3">Growth Manager Setup</h2>
                
                {/* Define Goal Section */}
                <div className="mb-3">
                  <div className="flex items-center mb-1">
                    <div className="w-5 h-5 rounded-full bg-red-500 text-white flex items-center justify-center text-xs mr-2">1</div>
                    <span className="font-semibold text-xs flex items-center">
                      <Settings className="h-3 w-3 mr-1" /> Define Goal
                    </span>
                  </div>
                  
                  <div className="bg-white p-2 rounded border border-gray-200 mb-2">
                    <div className="uppercase text-xs text-gray-500 mb-0.5">GOAL</div>
                    <div className="text-xs">Policy Renewal</div>
                  </div>
                  
                  <div className="bg-white p-2 rounded border border-gray-200">
                    <div className="uppercase text-xs text-gray-500 mb-0.5">AUDIENCE</div>
                    <div className="text-xs">Customers with policies expiring in 30 days</div>
                  </div>
                </div>
                
                {/* Define Options Section */}
                <div className="mb-3">
                  <div className="flex items-center mb-1">
                    <div className="w-5 h-5 rounded-full bg-yellow-500 text-white flex items-center justify-center text-xs mr-2">2</div>
                    <span className="font-semibold text-xs">Define Options</span>
                  </div>
                  
                  <div className="bg-white p-2 rounded border border-gray-200 mb-2">
                    <div className="uppercase text-xs text-gray-500 mb-0.5">CHANNELS</div>
                    <div className="flex flex-wrap gap-1 text-xs">
                      <div className="flex items-center">
                        <Mail className="h-3 w-3 mr-0.5" /> Email
                      </div>
                      <div className="flex items-center">
                        <MessageSquare className="h-3 w-3 mr-0.5" /> SMS
                      </div>
                      <div className="flex items-center">
                        <MessageSquare className="h-3 w-3 mr-0.5" /> WhatsApp
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-3 w-3 mr-0.5" /> Voice
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-2 rounded border border-gray-200 mb-2">
                    <div className="uppercase text-xs text-gray-500 mb-0.5">UPSELL PRODUCTS</div>
                    <div className="flex flex-wrap gap-1 text-xs">
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-0.5"></span> Home Insurance
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-0.5"></span> Umbrella Policy
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-0.5"></span> Life Insurance
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-0.5"></span> Roadside Assistance
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-2 rounded border border-gray-200 mb-2">
                    <div className="uppercase text-xs text-gray-500 mb-0.5">OFFERS</div>
                    <div className="flex flex-wrap gap-1 text-xs">
                      <span className="px-1 py-0.5 bg-gray-100 rounded">10% Loyalty Discount</span>
                      <span className="px-1 py-0.5 bg-gray-100 rounded">Bundle Discount</span>
                      <span className="px-1 py-0.5 bg-gray-100 rounded">Accident Forgiveness</span>
                      <span className="px-1 py-0.5 bg-gray-100 rounded">Free Add-on</span>
                    </div>
                  </div>
                  
                  <div className="bg-white p-2 rounded border border-gray-200">
                    <div className="uppercase text-xs text-gray-500 mb-0.5">MESSAGE VARIATIONS</div>
                    <div className="flex flex-wrap gap-1 text-xs">
                      <span className="px-1 py-0.5 bg-gray-100 rounded">Savings</span>
                      <span className="px-1 py-0.5 bg-gray-100 rounded">Urgent</span>
                      <span className="px-1 py-0.5 bg-gray-100 rounded">Casual</span>
                      <span className="px-1 py-0.5 bg-gray-100 rounded">Formal</span>
                      <span className="px-1 py-0.5 bg-gray-100 rounded">Personal</span>
                    </div>
                  </div>
                </div>
                
                {/* Set Guardrails Section */}
                <div>
                  <div className="flex items-center mb-1">
                    <div className="w-5 h-5 rounded-full bg-gray-500 text-white flex items-center justify-center text-xs mr-2">3</div>
                    <span className="font-semibold text-xs flex items-center">
                      <Shield className="h-3 w-3 mr-1" /> Set Guardrails
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-1">
                    <div className="bg-white p-1 rounded border border-gray-200">
                      <div className="uppercase text-xs text-gray-500">FREQUENCY</div>
                      <div className="text-xs">Max 3/week</div>
                    </div>
                    <div className="bg-white p-1 rounded border border-gray-200">
                      <div className="uppercase text-xs text-gray-500">TIMING</div>
                      <div className="text-xs">30 days before</div>
                    </div>
                    <div className="bg-white p-1 rounded border border-gray-200">
                      <div className="uppercase text-xs text-gray-500">STOPS</div>
                      <div className="text-xs">At renewal</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* AI Decisioning in Action */}
            <Card className="bg-green-50">
              <CardContent className="p-3">
                <h2 className="font-bold text-sm mb-3 flex items-center">
                  <Zap className="h-3 w-3 mr-1" /> AI Decisioning in Action
                </h2>
                
                {/* Customer Journey 1 */}
                <div className="mb-3">
                  <div className="flex items-center mb-1">
                    <div className="w-5 h-5 rounded-full bg-red-100 text-red-500 flex items-center justify-center text-xs mr-2">
                      <Users className="h-3 w-3" />
                    </div>
                    <span className="font-semibold text-xs">John M. <span className="text-xs font-normal text-gray-500">(Safety-Focused)</span></span>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-1 mb-1">
                    <div className="bg-white p-1 rounded border border-gray-200">
                      <div className="flex items-center text-xs">
                        <Mail className="h-2 w-2 mr-1" /> Email
                      </div>
                      <div className="text-xs">Renewal Notice</div>
                    </div>
                    <div className="flex items-center justify-center text-xs">
                      <div className="bg-yellow-100 text-yellow-800 text-xs px-1 py-0.5 rounded-full flex items-center">
                        <Clock className="h-2 w-2 mr-1" /> Mon 9am
                      </div>
                    </div>
                    <div className="bg-white p-1 rounded border border-gray-200">
                      <div className="flex items-center justify-between text-xs">
                        <span className="flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span> Converted
                        </span>
                      </div>
                      <div className="text-xs">Standard Renewal</div>
                    </div>
                  </div>
                  <div className="text-xs bg-yellow-50 border border-yellow-100 p-1 rounded text-yellow-700 mb-1">
                    <span className="text-xs font-medium">RL Decision:</span> Safety-focused messaging with single touchpoint resulted in direct conversion
                  </div>
                </div>
                
                {/* Customer Journey 2 */}
                <div className="mb-3">
                  <div className="flex items-center mb-1">
                    <div className="w-5 h-5 rounded-full bg-yellow-100 text-yellow-500 flex items-center justify-center text-xs mr-2">
                      <Users className="h-3 w-3" />
                    </div>
                    <span className="font-semibold text-xs">Sarah T. <span className="text-xs font-normal text-gray-500">(Price-Sensitive)</span></span>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-1 mb-1">
                    <div className="bg-white p-1 rounded border border-gray-200">
                      <div className="flex items-center text-xs">
                        <Mail className="h-2 w-2 mr-1" /> Email
                      </div>
                      <div className="text-xs">Auto + Home Bundle</div>
                    </div>
                    <div className="flex items-center justify-center text-xs">
                      <div className="bg-yellow-100 text-yellow-800 text-xs px-1 py-0.5 rounded-full flex items-center">
                        <Clock className="h-2 w-2 mr-1" /> Tue 7am
                      </div>
                    </div>
                    <div className="bg-white p-1 rounded border border-gray-200">
                      <div className="flex items-center text-xs">
                        <MessageSquare className="h-2 w-2 mr-1" /> SMS
                      </div>
                      <div className="text-xs">Same offer + Urgency</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-xs justify-end mb-1">
                    <div className="bg-yellow-100 text-yellow-800 text-xs px-1 py-0.5 rounded-full flex items-center">
                      <Clock className="h-2 w-2 mr-1" /> Thu 6pm
                    </div>
                  </div>
                  
                  <div className="flex justify-end mb-1">
                    <div className="bg-white p-1 rounded border border-gray-200 w-2/3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span> Converted
                        </span>
                      </div>
                      <div className="text-xs">Auto + Home Bundle</div>
                    </div>
                  </div>
                  
                  <div className="text-xs bg-yellow-50 border border-yellow-100 p-1 rounded text-yellow-700 mb-1">
                    <span className="text-xs font-medium">RL Decision:</span> Multiple touchpoints with channel shift and upsell based on browsing behavior
                  </div>
                </div>
                
                {/* Customer Journey 3 */}
                <div className="mb-3">
                  <div className="flex items-center mb-1">
                    <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center text-xs mr-2">
                      <Users className="h-3 w-3" />
                    </div>
                    <span className="font-semibold text-xs">Robert K. <span className="text-xs font-normal text-gray-500">(Family-Focused)</span></span>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-1 mb-1">
                    <div className="bg-white p-1 rounded border border-gray-200">
                      <div className="flex items-center text-xs">
                        <MessageSquare className="h-2 w-2 mr-1" /> WhatsApp
                      </div>
                      <div className="text-xs">Life Insurance Upsell</div>
                    </div>
                    <div className="flex items-center justify-center text-xs">
                      <div className="bg-yellow-100 text-yellow-800 text-xs px-1 py-0.5 rounded-full flex items-center">
                        <Clock className="h-2 w-2 mr-1" /> Mon 2pm
                      </div>
                    </div>
                    <div className="bg-white p-1 rounded border border-gray-200">
                      <div className="flex items-center text-xs">
                        <Phone className="h-2 w-2 mr-1" /> Voice
                      </div>
                      <div className="text-xs">Agent Call</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-xs justify-end mb-1">
                    <div className="bg-yellow-100 text-yellow-800 text-xs px-1 py-0.5 rounded-full flex items-center">
                      <Clock className="h-2 w-2 mr-1" /> Sat 10am
                    </div>
                  </div>
                  
                  <div className="flex justify-end mb-1">
                    <div className="bg-white p-1 rounded border border-gray-200 w-2/3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span> Converted
                        </span>
                      </div>
                      <div className="text-xs">Family Auto + Life</div>
                    </div>
                  </div>
                  
                  <div className="text-xs bg-yellow-50 border border-yellow-100 p-1 rounded text-yellow-700 mb-1">
                    <span className="text-xs font-medium">RL Decision:</span> Human touchpoint after digital engagement based on complexity of decision
                  </div>
                </div>
                
                {/* Customer Journey 4 */}
                <div>
                  <div className="flex items-center mb-1">
                    <div className="w-5 h-5 rounded-full bg-purple-100 text-purple-500 flex items-center justify-center text-xs mr-2">
                      <Users className="h-3 w-3" />
                    </div>
                    <span className="font-semibold text-xs">David L. <span className="text-xs font-normal text-gray-500">(Budget Conscious)</span></span>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-1 mb-1">
                    <div className="bg-white p-1 rounded border border-gray-200">
                      <div className="flex items-center text-xs">
                        <MessageSquare className="h-2 w-2 mr-1" /> SMS
                      </div>
                      <div className="text-xs">Renewal Reminder</div>
                    </div>
                    <div className="flex items-center justify-center text-xs">
                      <div className="bg-yellow-100 text-yellow-800 text-xs px-1 py-0.5 rounded-full flex items-center">
                        <Clock className="h-2 w-2 mr-1" /> Wed 9am
                      </div>
                    </div>
                    <div className="bg-white p-1 rounded border border-gray-200">
                      <div className="flex items-center text-xs">
                        <Mail className="h-2 w-2 mr-1" /> Email
                      </div>
                      <div className="text-xs">Urgent Reminder</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-xs justify-end mb-1">
                    <div className="bg-red-100 text-red-800 text-xs px-1 py-0.5 rounded-full flex items-center">
                      <Clock className="h-2 w-2 mr-1" /> 5 days later
                    </div>
                  </div>
                  
                  <div className="flex justify-end mb-1">
                    <div className="bg-white p-1 rounded border border-gray-200 w-2/3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="flex items-center">
                          <span className="w-2 h-2 bg-red-500 rounded-full mr-1"></span> Not Renewed
                        </span>
                      </div>
                      <div className="text-xs">Policy Lapsed</div>
                    </div>
                  </div>
                  
                  <div className="text-xs bg-yellow-50 border border-yellow-100 p-1 rounded text-yellow-700">
                    <span className="text-xs font-medium">RL Decision:</span> Multiple attempts with value-focused messaging, flagged for retention specialist
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Decision Insights */}
            <Card className="bg-gray-50">
              <CardContent className="p-3">
                <h2 className="font-bold text-sm mb-3 flex items-center">
                  <Brain className="h-3 w-3 mr-1" /> Decision Insights
                </h2>
                
                {/* Customer Insight 1 */}
                <div className="mb-2">
                  <div className="flex items-center mb-1">
                    <div className="w-5 h-5 rounded-full bg-red-100 text-red-500 flex items-center justify-center text-xs mr-2">
                      <Users className="h-3 w-3" />
                    </div>
                    <span className="font-semibold text-xs">John M.</span>
                  </div>
                  
                  <ul className="text-xs space-y-1 pl-7">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-1">•</span>
                      <span>Safety-focused, risk-averse</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-1">•</span>
                      <span>Formal tone preference</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-1">•</span>
                      <span>Opens emails 8am-10am (92%)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-1">•</span>
                      <span>First-attempt conversions for safety messaging</span>
                    </li>
                  </ul>
                </div>
                
                {/* Customer Insight 2 */}
                <div className="mb-2">
                  <div className="flex items-center mb-1">
                    <div className="w-5 h-5 rounded-full bg-yellow-100 text-yellow-500 flex items-center justify-center text-xs mr-2">
                      <Users className="h-3 w-3" />
                    </div>
                    <span className="font-semibold text-xs">Sarah T.</span>
                  </div>
                  
                  <ul className="text-xs space-y-1 pl-7">
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-1">•</span>
                      <span>Price-sensitive, value-focused</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-1">•</span>
                      <span>Direct, savings-focused messaging</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-1">•</span>
                      <span>Channel shift effective after no action</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-1">•</span>
                      <span>Responds to bundled savings opportunities</span>
                    </li>
                  </ul>
                </div>
                
                {/* Customer Insight 3 */}
                <div className="mb-2">
                  <div className="flex items-center mb-1">
                    <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center text-xs mr-2">
                      <Users className="h-3 w-3" />
                    </div>
                    <span className="font-semibold text-xs">Robert K.</span>
                  </div>
                  
                  <ul className="text-xs space-y-1 pl-7">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-1">•</span>
                      <span>Family-focused, protection-seeking</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-1">•</span>
                      <span>Shifted from savings to personal messaging</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-1">•</span>
                      <span>Weekend engagement 3x higher</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-1">•</span>
                      <span>Human touchpoint essential for complex products</span>
                    </li>
                  </ul>
                </div>
                
                {/* Customer Insight 4 */}
                <div>
                  <div className="flex items-center mb-1">
                    <div className="w-5 h-5 rounded-full bg-purple-100 text-purple-500 flex items-center justify-center text-xs mr-2">
                      <Users className="h-3 w-3" />
                    </div>
                    <span className="font-semibold text-xs">David L.</span>
                  </div>
                  
                  <ul className="text-xs space-y-1 pl-7">
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-1">•</span>
                      <span>Price-conscious, deal-seeking</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-1">•</span>
                      <span>Tone shift: Casual → Urgent drives action</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-1">•</span>
                      <span>Non-responsiveness pattern detected</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-1">•</span>
                      <span>Identified for specialized retention efforts</span>
                    </li>
                  </ul>
                </div>
                
                <div className="mt-3 text-center">
                  <p className="text-xs text-gray-500 font-medium">AI Reinforcement Learning</p>
                  <p className="text-xs text-gray-400">Customer profiles continuously updated based on interaction patterns and outcomes</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Test;
