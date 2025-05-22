
import React from "react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Settings, Users, Shield, FilePen, ArrowRight, Brain, Clock, Calendar, Mail, MessageSquare, Phone } from "lucide-react";

const Test = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold text-center mb-6">Insurance AI Decisioning Framework</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Growth Manager Setup */}
            <Card className="bg-red-50">
              <CardContent className="p-4">
                <h2 className="font-bold text-lg mb-4">Growth Manager Setup</h2>
                
                {/* Define Goal Section */}
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <div className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center text-sm mr-2">1</div>
                    <span className="font-semibold flex items-center">
                      <Settings className="h-4 w-4 mr-1" /> Define Goal
                    </span>
                  </div>
                  
                  <div className="bg-white p-3 rounded border border-gray-200 mb-3">
                    <div className="uppercase text-xs text-gray-500 mb-1">GOAL</div>
                    <div className="text-sm">Increase policy renewal rate by 15%</div>
                  </div>
                  
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <div className="uppercase text-xs text-gray-500 mb-1">AUDIENCE</div>
                    <div className="text-sm">Customers with policies expiring in 30 days</div>
                  </div>
                </div>
                
                {/* Define Options Section */}
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <div className="w-6 h-6 rounded-full bg-yellow-500 text-white flex items-center justify-center text-sm mr-2">2</div>
                    <span className="font-semibold">Define Options</span>
                  </div>
                  
                  <div className="bg-white p-3 rounded border border-gray-200 mb-3">
                    <div className="uppercase text-xs text-gray-500 mb-1">CHANNELS</div>
                    <div className="flex flex-wrap gap-2 text-xs">
                      <div className="flex items-center">
                        <Mail className="h-3 w-3 mr-1" /> Email
                      </div>
                      <div className="flex items-center">
                        <MessageSquare className="h-3 w-3 mr-1" /> SMS
                      </div>
                      <div className="flex items-center">
                        <ArrowRight className="h-3 w-3 mr-1" /> Push
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-3 w-3 mr-1" /> Voice
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-3 rounded border border-gray-200 mb-3">
                    <div className="uppercase text-xs text-gray-500 mb-1">UPSELL PRODUCTS</div>
                    <div className="flex flex-wrap gap-2 text-xs">
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-1"></span> Home Insurance
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-1"></span> Umbrella Policy
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-1"></span> Life Insurance
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-1"></span> Roadside Assistance
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-3 rounded border border-gray-200 mb-3">
                    <div className="uppercase text-xs text-gray-500 mb-1">OFFERS</div>
                    <div className="flex flex-wrap gap-2 text-xs">
                      <span className="px-2 py-1 bg-gray-100 rounded">10% Loyalty Discount</span>
                      <span className="px-2 py-1 bg-gray-100 rounded">Bundle Discount</span>
                      <span className="px-2 py-1 bg-gray-100 rounded">Accident Forgiveness</span>
                      <span className="px-2 py-1 bg-gray-100 rounded">Free Add-on</span>
                    </div>
                  </div>
                  
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <div className="uppercase text-xs text-gray-500 mb-1">MESSAGE VARIATIONS</div>
                    <div className="flex flex-wrap gap-2 text-xs">
                      <span className="px-2 py-1 bg-gray-100 rounded">Savings</span>
                      <span className="px-2 py-1 bg-gray-100 rounded">Urgent</span>
                      <span className="px-2 py-1 bg-gray-100 rounded">Casual</span>
                      <span className="px-2 py-1 bg-gray-100 rounded">Formal</span>
                      <span className="px-2 py-1 bg-gray-100 rounded">Personal</span>
                    </div>
                    <div className="flex flex-wrap gap-2 text-xs mt-2">
                      <span className="px-2 py-1 bg-gray-100 rounded">M1</span>
                      <span className="px-2 py-1 bg-gray-100 rounded">M2</span>
                      <span className="px-2 py-1 bg-gray-100 rounded">M3</span>
                      <span className="px-2 py-1 bg-gray-100 rounded">M4</span>
                      <span className="px-2 py-1 bg-gray-100 rounded">+15</span>
                    </div>
                  </div>
                </div>
                
                {/* Set Guardrails Section */}
                <div>
                  <div className="flex items-center mb-2">
                    <div className="w-6 h-6 rounded-full bg-gray-500 text-white flex items-center justify-center text-sm mr-2">3</div>
                    <span className="font-semibold flex items-center">
                      <Shield className="h-4 w-4 mr-1" /> Set Guardrails
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-white p-2 rounded border border-gray-200">
                      <div className="uppercase text-xs text-gray-500 mb-1">FREQUENCY</div>
                      <div className="text-xs">Max 3/week</div>
                    </div>
                    <div className="bg-white p-2 rounded border border-gray-200">
                      <div className="uppercase text-xs text-gray-500 mb-1">TIMING</div>
                      <div className="text-xs">30 days before</div>
                    </div>
                    <div className="bg-white p-2 rounded border border-gray-200">
                      <div className="uppercase text-xs text-gray-500 mb-1">STOPS</div>
                      <div className="text-xs">At renewal</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* AI Decisioning in Action */}
            <Card className="bg-green-50">
              <CardContent className="p-4">
                <h2 className="font-bold text-lg mb-4">AI Decisioning in Action</h2>
                
                {/* Customer Journey 1 */}
                <div className="mb-5">
                  <div className="flex items-center mb-2">
                    <div className="w-6 h-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center text-sm mr-2">
                      <Users className="h-3 w-3" />
                    </div>
                    <span className="font-semibold">John M. <span className="text-xs font-normal text-gray-500">(Safety-Focused)</span></span>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 mb-2">
                    <div className="bg-white p-2 rounded border border-gray-200">
                      <div className="flex items-center text-xs mb-1">
                        <Mail className="h-3 w-3 mr-1" /> Email
                      </div>
                      <div className="text-xs">Renewal Notice</div>
                    </div>
                    <div className="flex items-center justify-center text-xs">
                      <div className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full flex items-center">
                        <Clock className="h-3 w-3 mr-1" /> Mon 9am
                      </div>
                      <ArrowRight className="mx-1 h-3 w-3 text-gray-400" />
                    </div>
                    <div className="bg-white p-2 rounded border border-gray-200">
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span> Converted
                        </span>
                        <span className="text-xs text-gray-500">Mon 11am</span>
                      </div>
                      <div className="text-xs">Standard Renewal</div>
                      <div className="text-xs bg-green-100 text-green-800 px-1 rounded mt-1 text-center">Accident Forgiveness</div>
                    </div>
                  </div>
                  <div className="text-xs bg-yellow-50 border border-yellow-100 p-1 rounded text-yellow-700 flex items-center">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-1"></span> Opened, Clicked CTA
                  </div>
                </div>
                
                {/* Customer Journey 2 */}
                <div className="mb-5">
                  <div className="flex items-center mb-2">
                    <div className="w-6 h-6 rounded-full bg-yellow-100 text-yellow-500 flex items-center justify-center text-sm mr-2">
                      <Users className="h-3 w-3" />
                    </div>
                    <span className="font-semibold">Sarah T. <span className="text-xs font-normal text-gray-500">(Price-Sensitive)</span></span>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 mb-2">
                    <div className="bg-white p-2 rounded border border-gray-200">
                      <div className="flex items-center text-xs mb-1">
                        <Mail className="h-3 w-3 mr-1" /> Email
                      </div>
                      <div className="text-xs">Auto + Home Bundle</div>
                    </div>
                    <div className="flex items-center justify-center text-xs">
                      <div className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full flex items-center">
                        <Clock className="h-3 w-3 mr-1" /> Tue 7am
                      </div>
                      <ArrowRight className="mx-1 h-3 w-3 text-gray-400" />
                    </div>
                    <div className="bg-white p-2 rounded border border-gray-200">
                      <div className="flex items-center text-xs mb-1">
                        <MessageSquare className="h-3 w-3 mr-1" /> SMS
                      </div>
                      <div className="text-xs">Same offer</div>
                      <div className="text-xs text-gray-500">Urgent M2</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-xs mb-2">
                    <ArrowRight className="mx-1 h-3 w-3 text-gray-400" />
                    <div className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full flex items-center">
                      <Clock className="h-3 w-3 mr-1" /> Thu 6pm
                    </div>
                    <ArrowRight className="mx-1 h-3 w-3 text-gray-400" />
                  </div>
                  
                  <div className="flex justify-end">
                    <div className="bg-white p-2 rounded border border-gray-200 w-2/3">
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span> Converted
                        </span>
                        <span className="text-xs text-gray-500">Thu 7pm</span>
                      </div>
                      <div className="text-xs">Auto Renewal</div>
                      <div className="text-xs bg-green-100 text-green-800 px-1 rounded mt-1 text-center">Bundle Discount</div>
                    </div>
                  </div>
                </div>
                
                {/* Customer Journey 3 */}
                <div className="mb-5">
                  <div className="flex items-center mb-2">
                    <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center text-sm mr-2">
                      <Users className="h-3 w-3" />
                    </div>
                    <span className="font-semibold">Robert K. <span className="text-xs font-normal text-gray-500">(Family-Focused)</span></span>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 mb-2">
                    <div className="bg-white p-2 rounded border border-gray-200">
                      <div className="flex items-center text-xs mb-1">
                        <Mail className="h-3 w-3 mr-1" /> Email
                      </div>
                      <div className="text-xs">Life Insurance</div>
                      <div className="text-xs text-gray-500">Savings M3</div>
                    </div>
                    <div className="flex items-center justify-center text-xs">
                      <div className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full flex items-center">
                        <Clock className="h-3 w-3 mr-1" /> Mon 2pm
                      </div>
                      <ArrowRight className="mx-1 h-3 w-3 text-gray-400" />
                    </div>
                    <div className="bg-white p-2 rounded border border-gray-200">
                      <div className="flex items-center text-xs mb-1">
                        <Phone className="h-3 w-3 mr-1" /> Voice
                      </div>
                      <div className="text-xs">Life Insurance</div>
                      <div className="text-xs text-gray-500">Personal M1</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-xs mb-2">
                    <ArrowRight className="mx-1 h-3 w-3 text-gray-400" />
                    <div className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full flex items-center">
                      <Clock className="h-3 w-3 mr-1" /> Sat 10am
                    </div>
                    <ArrowRight className="mx-1 h-3 w-3 text-gray-400" />
                  </div>
                  
                  <div className="flex justify-end">
                    <div className="bg-white p-2 rounded border border-gray-200 w-2/3">
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span> Converted
                        </span>
                        <span className="text-xs text-gray-500">Sat 11am</span>
                      </div>
                      <div className="text-xs">Family Auto + Life</div>
                      <div className="text-xs bg-green-100 text-green-800 px-1 rounded mt-1 text-center">10% Loyalty</div>
                    </div>
                  </div>
                </div>
                
                {/* Customer Journey 4 */}
                <div>
                  <div className="flex items-center mb-2">
                    <div className="w-6 h-6 rounded-full bg-purple-100 text-purple-500 flex items-center justify-center text-sm mr-2">
                      <Users className="h-3 w-3" />
                    </div>
                    <span className="font-semibold">David L. <span className="text-xs font-normal text-gray-500">(Budget Conscious)</span></span>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 mb-2">
                    <div className="bg-white p-2 rounded border border-gray-200">
                      <div className="flex items-center text-xs mb-1">
                        <ArrowRight className="h-3 w-3 mr-1" /> Push
                      </div>
                      <div className="text-xs">Renewal Reminder</div>
                      <div className="text-xs text-gray-500">Casual M1</div>
                    </div>
                    <div className="flex items-center justify-center text-xs">
                      <div className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full flex items-center">
                        <Clock className="h-3 w-3 mr-1" /> Wed 9am
                      </div>
                      <ArrowRight className="mx-1 h-3 w-3 text-gray-400" />
                    </div>
                    <div className="bg-white p-2 rounded border border-gray-200">
                      <div className="flex items-center text-xs mb-1">
                        <MessageSquare className="h-3 w-3 mr-1" /> SMS
                      </div>
                      <div className="text-xs">Basic Renewal</div>
                      <div className="text-xs text-gray-500">Urgent M2</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-xs mb-2">
                    <ArrowRight className="mx-1 h-3 w-3 text-gray-400" />
                    <div className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full flex items-center">
                      <Clock className="h-3 w-3 mr-1" /> Thu 1pm
                    </div>
                    <ArrowRight className="mx-1 h-3 w-3 text-gray-400" />
                  </div>
                  
                  <div className="flex justify-end">
                    <div className="bg-white p-2 rounded border border-gray-200 w-2/3">
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span> Converted
                        </span>
                        <span className="text-xs text-gray-500">Thu 3pm</span>
                      </div>
                      <div className="text-xs">Basic Auto Policy</div>
                      <div className="text-xs bg-green-100 text-green-800 px-1 rounded mt-1 text-center">Free Roadside</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Decision Insights */}
            <Card className="bg-gray-50">
              <CardContent className="p-4">
                <h2 className="font-bold text-lg mb-4 flex items-center">
                  <Clock className="h-4 w-4 mr-1" /> Decision Insights
                </h2>
                
                {/* Customer Insight 1 */}
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <div className="w-6 h-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center text-sm mr-2">
                      <Users className="h-3 w-3" />
                    </div>
                    <span className="font-semibold">John M.</span>
                  </div>
                  
                  <ul className="text-xs space-y-2 pl-8">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-1">•</span>
                      <span>Emotional: Safety-focused, risk-averse</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-1">•</span>
                      <span>Tone preference: Formal, feature-focused</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-1">•</span>
                      <span>Opens emails 8am-10am (92%)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-1">•</span>
                      <span>First-attempt conversion confirmed tone & timing matches</span>
                    </li>
                  </ul>
                </div>
                
                {/* Customer Insight 2 */}
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <div className="w-6 h-6 rounded-full bg-yellow-100 text-yellow-500 flex items-center justify-center text-sm mr-2">
                      <Users className="h-3 w-3" />
                    </div>
                    <span className="font-semibold">Sarah T.</span>
                  </div>
                  
                  <ul className="text-xs space-y-2 pl-8">
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-1">•</span>
                      <span>Emotional: Price-sensitive, value-focused</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-1">•</span>
                      <span>Tone preference: Direct, savings-focused</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-1">•</span>
                      <span>Channel shift after email open without action</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-1">•</span>
                      <span>SMS response rate jumped to 87% after urgency applied</span>
                    </li>
                  </ul>
                </div>
                
                {/* Customer Insight 3 */}
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center text-sm mr-2">
                      <Users className="h-3 w-3" />
                    </div>
                    <span className="font-semibold">Robert K.</span>
                  </div>
                  
                  <ul className="text-xs space-y-2 pl-8">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-1">•</span>
                      <span>Emotional: Family-focused, protection-seeking</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-1">•</span>
                      <span>Tone preference shifted from savings to personal</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-1">•</span>
                      <span>Weekend engagement 3x higher than weekdays</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-1">•</span>
                      <span>Voice performed 5x better than email for this segment</span>
                    </li>
                  </ul>
                </div>
                
                {/* Customer Insight 4 */}
                <div>
                  <div className="flex items-center mb-2">
                    <div className="w-6 h-6 rounded-full bg-purple-100 text-purple-500 flex items-center justify-center text-sm mr-2">
                      <Users className="h-3 w-3" />
                    </div>
                    <span className="font-semibold">David L.</span>
                  </div>
                  
                  <ul className="text-xs space-y-2 pl-8">
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-1">•</span>
                      <span>Emotional: Price-conscious, deal-seeking</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-1">•</span>
                      <span>Tone shift: Casual → Urgent drives action</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-1">•</span>
                      <span>Product switch after interest but no purchase</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-1">•</span>
                      <span>"Free" terminology increased conversion by 65%</span>
                    </li>
                  </ul>
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
