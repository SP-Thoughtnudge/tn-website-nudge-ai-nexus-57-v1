
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const InsuranceJourney = () => {
  const [activeTab, setActiveTab] = useState("policy-renewal");
  
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex justify-center mb-6">
          <TabsList>
            <TabsTrigger value="policy-renewal">Policy Renewal</TabsTrigger>
            <TabsTrigger value="claims-support">Claims Support</TabsTrigger>
            <TabsTrigger value="coverage-upgrade">Coverage Upgrade</TabsTrigger>
          </TabsList>
        </div>
        
        {/* Policy Renewal Journey */}
        <TabsContent value="policy-renewal" className="mt-6">
          <div className="mb-4 text-center">
            <p className="text-sm text-gray-500">Days 1-14: This customer's auto policy is up for renewal with opportunity for cross-selling</p>
          </div>
          <div className="relative">
            {/* Journey Timeline */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2"></div>
            
            {/* Step 1: Policy Pre-Renewal */}
            <div className="flex flex-col md:flex-row items-start md:items-center mb-16 relative">
              <div className="md:w-1/2 pr-8 md:text-right mb-4 md:mb-0">
                <h4 className="text-lg font-semibold text-brand-black">Auto policy approaching renewal</h4>
                <p className="text-gray-600">Customer's policy is set to renew in 30 days with potential premium increase due to market conditions</p>
                <p className="text-sm text-brand-orange mt-2">Day 1</p>
              </div>
              
              <div className="hidden md:flex items-center justify-center z-10 bg-white rounded-full h-10 w-10 border-2 border-brand-orange absolute left-1/2 transform -translate-x-1/2"></div>
              
              <div className="md:w-1/2 pl-0 md:pl-8">
                <Card>
                  <CardContent className="p-4 flex">
                    <div className="bg-gray-100 w-16 h-16 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-xs text-gray-500">Signal</span>
                    </div>
                    <div>
                      <h5 className="font-medium text-brand-black">Customer Profile Analysis</h5>
                      <p className="text-sm text-gray-600">AI analyzes customer history, claim patterns, life events, and risk profile</p>
                      <div className="mt-2 p-2 bg-gray-50 rounded text-xs">
                        <strong>Insight:</strong> Customer has multiple vehicles but no home insurance; price-sensitive but values bundled coverage
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Step 2: AI First Contact Decision */}
            <div className="flex flex-col md:flex-row items-start md:items-center mb-16 relative">
              <div className="md:w-1/2 pr-8 md:text-right mb-4 md:mb-0">
                <Card>
                  <CardContent className="p-4 flex">
                    <div className="bg-brand-orange/10 w-16 h-16 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-xs text-brand-orange">AI decision</span>
                    </div>
                    <div>
                      <h5 className="font-medium text-brand-black">Initial Outreach Strategy</h5>
                      <p className="text-sm text-gray-600">AI determines early outreach via email with value-focused messaging rather than price-only approach</p>
                      <div className="mt-2 p-2 bg-gray-50 rounded text-xs">
                        <strong>Why this decision?</strong> Historical engagement shows customer responds to value messaging; morning emails have 62% higher open rate
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="hidden md:flex items-center justify-center z-10 bg-white rounded-full h-10 w-10 border-2 border-brand-pink absolute left-1/2 transform -translate-x-1/2"></div>
              
              <div className="md:w-1/2 pl-0 md:pl-8">
                <h4 className="text-lg font-semibold text-brand-black">Early renewal email sent</h4>
                <p className="text-gray-600">Value-focused email highlighting new policy benefits and bundling options sent at optimal time</p>
                <p className="text-sm text-brand-pink mt-2">Day 3, 8:15 AM</p>
              </div>
            </div>
            
            {/* Step 3: Customer Response */}
            <div className="flex flex-col md:flex-row items-start md:items-center mb-16 relative">
              <div className="md:w-1/2 pr-8 md:text-right mb-4 md:mb-0">
                <h4 className="text-lg font-semibold text-brand-black">Customer opens but doesn't act</h4>
                <p className="text-gray-600">Opens email, briefly reviews bundling options, but exits without taking action</p>
                <p className="text-sm text-brand-orange mt-2">Day 3, 12:30 PM</p>
              </div>
              
              <div className="hidden md:flex items-center justify-center z-10 bg-white rounded-full h-10 w-10 border-2 border-gray-300 absolute left-1/2 transform -translate-x-1/2"></div>
              
              <div className="md:w-1/2 pl-0 md:pl-8">
                <Card>
                  <CardContent className="p-4 flex">
                    <div className="bg-gray-100 w-16 h-16 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-xs text-gray-500">Signal</span>
                    </div>
                    <div>
                      <h5 className="font-medium text-brand-black">Browsing Behavior Analysis</h5>
                      <p className="text-sm text-gray-600">AI detects customer browsing homeowners insurance pages on website after email open</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Step 4: AI Channel Shift */}
            <div className="flex flex-col md:flex-row items-start md:items-center mb-16 relative">
              <div className="md:w-1/2 pr-8 md:text-right mb-4 md:mb-0">
                <Card>
                  <CardContent className="p-4 flex">
                    <div className="bg-brand-orange/10 w-16 h-16 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-xs text-brand-orange">AI decision</span>
                    </div>
                    <div>
                      <h5 className="font-medium text-brand-black">Channel Switch Strategy</h5>
                      <p className="text-sm text-gray-600">AI shifts to SMS with personalized home+auto bundle quote based on browsing signals</p>
                      <div className="mt-2 p-2 bg-gray-50 rounded text-xs">
                        <strong>Why this decision?</strong> Website behavior suggests interest in home insurance; SMS has higher response rate for time-sensitive offers
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="hidden md:flex items-center justify-center z-10 bg-white rounded-full h-10 w-10 border-2 border-brand-pink absolute left-1/2 transform -translate-x-1/2"></div>
              
              <div className="md:w-1/2 pl-0 md:pl-8">
                <h4 className="text-lg font-semibold text-brand-black">Personalized SMS bundle offer</h4>
                <p className="text-gray-600">SMS with specific home+auto bundle savings and limited-time discount sent</p>
                <p className="text-sm text-brand-pink mt-2">Day 5, 4:30 PM</p>
              </div>
            </div>
            
            {/* Step 5: Customer Response */}
            <div className="flex flex-col md:flex-row items-start md:items-center mb-16 relative">
              <div className="md:w-1/2 pr-8 md:text-right mb-4 md:mb-0">
                <h4 className="text-lg font-semibold text-brand-black">Customer shows interest</h4>
                <p className="text-gray-600">Clicks through SMS link to view detailed bundle quote but doesn't complete purchase</p>
                <p className="text-sm text-brand-orange mt-2">Day 5, 6:15 PM</p>
              </div>
              
              <div className="hidden md:flex items-center justify-center z-10 bg-white rounded-full h-10 w-10 border-2 border-gray-300 absolute left-1/2 transform -translate-x-1/2"></div>
              
              <div className="md:w-1/2 pl-0 md:pl-8">
                <Card>
                  <CardContent className="p-4 flex">
                    <div className="bg-gray-100 w-16 h-16 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-xs text-gray-500">Signal</span>
                    </div>
                    <div>
                      <h5 className="font-medium text-brand-black">Engagement Analysis</h5>
                      <p className="text-sm text-gray-600">AI detects high interest in bundle savings calculator but hesitation at coverage details page</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Step 6: AI Human Touch Decision */}
            <div className="flex flex-col md:flex-row items-start md:items-center mb-16 relative">
              <div className="md:w-1/2 pr-8 md:text-right mb-4 md:mb-0">
                <Card>
                  <CardContent className="p-4 flex">
                    <div className="bg-brand-orange/10 w-16 h-16 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-xs text-brand-orange">AI decision</span>
                    </div>
                    <div>
                      <h5 className="font-medium text-brand-black">Human Touch Intervention</h5>
                      <p className="text-sm text-gray-600">AI determines personalized agent call is needed to address coverage questions</p>
                      <div className="mt-2 p-2 bg-gray-50 rounded text-xs">
                        <strong>Why this decision?</strong> Complex coverage questions benefit from human explanation; customer profile shows preference for expert guidance on technical details
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="hidden md:flex items-center justify-center z-10 bg-white rounded-full h-10 w-10 border-2 border-brand-pink absolute left-1/2 transform -translate-x-1/2"></div>
              
              <div className="md:w-1/2 pl-0 md:pl-8">
                <h4 className="text-lg font-semibold text-brand-black">Agent schedules personalized call</h4>
                <p className="text-gray-600">AI triggers agent outreach with full context of customer's journey and specific concerns</p>
                <p className="text-sm text-brand-pink mt-2">Day 7, 10:00 AM</p>
              </div>
            </div>
            
            {/* Step 7: Conversion */}
            <div className="flex flex-col md:flex-row items-start md:items-center relative">
              <div className="md:w-1/2 pr-8 md:text-right mb-4 md:mb-0">
                <h4 className="text-lg font-semibold text-brand-black">Customer converts on bundle</h4>
                <p className="text-gray-600">Completes auto policy renewal with addition of homeowners insurance bundle</p>
                <p className="text-sm text-brand-orange mt-2">Day 14</p>
              </div>
              
              <div className="hidden md:flex items-center justify-center z-10 bg-brand-orange rounded-full h-10 w-10 absolute left-1/2 transform -translate-x-1/2">
                <span className="text-white">✓</span>
              </div>
              
              <div className="md:w-1/2 pl-0 md:pl-8">
                <Card>
                  <CardContent className="p-4 flex">
                    <div className="bg-brand-orange/20 w-16 h-16 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-xs text-brand-orange">Learning</span>
                    </div>
                    <div>
                      <h5 className="font-medium text-brand-black">AI Updates Customer Profile</h5>
                      <p className="text-sm text-gray-600">Records successful multi-channel journey and preference for human touchpoint on complex decisions</p>
                      <div className="mt-2 p-2 bg-gray-50 rounded text-xs">
                        <strong>Learned:</strong> Customer values bundled savings, responds to SMS for offers, prefers agent explanation for complex coverage details, 57% higher CLTV with bundle
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </TabsContent>
        
        {/* Claims Support Journey */}
        <TabsContent value="claims-support" className="mt-6">
          <div className="mb-4 text-center">
            <p className="text-sm text-gray-500">Days 1-10: Proactive support during a customer's first auto claim experience</p>
          </div>
          <div className="relative">
            {/* Journey Timeline */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2"></div>
            
            {/* Step 1: Claim Filed */}
            <div className="flex flex-col md:flex-row items-start md:items-center mb-16 relative">
              <div className="md:w-1/2 pr-8 md:text-right mb-4 md:mb-0">
                <h4 className="text-lg font-semibold text-brand-black">Customer files first claim</h4>
                <p className="text-gray-600">Customer reports minor auto accident through mobile app</p>
                <p className="text-sm text-brand-orange mt-2">Day 1, 7:45 PM</p>
              </div>
              
              <div className="hidden md:flex items-center justify-center z-10 bg-white rounded-full h-10 w-10 border-2 border-brand-orange absolute left-1/2 transform -translate-x-1/2"></div>
              
              <div className="md:w-1/2 pl-0 md:pl-8">
                <Card>
                  <CardContent className="p-4 flex">
                    <div className="bg-gray-100 w-16 h-16 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-xs text-gray-500">Signal</span>
                    </div>
                    <div>
                      <h5 className="font-medium text-brand-black">Situation Analysis</h5>
                      <p className="text-sm text-gray-600">AI analyzes claim details, customer history, and emotional indicators in app interactions</p>
                      <div className="mt-2 p-2 bg-gray-50 rounded text-xs">
                        <strong>Insight:</strong> First-time claimant showing anxiety signals; high-value customer with 3+ years loyalty; evening submission indicates urgency
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Step 2: AI First Response */}
            <div className="flex flex-col md:flex-row items-start md:items-center mb-16 relative">
              <div className="md:w-1/2 pr-8 md:text-right mb-4 md:mb-0">
                <Card>
                  <CardContent className="p-4 flex">
                    <div className="bg-brand-orange/10 w-16 h-16 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-xs text-brand-orange">AI decision</span>
                    </div>
                    <div>
                      <h5 className="font-medium text-brand-black">Immediate Support Response</h5>
                      <p className="text-sm text-gray-600">AI prioritizes immediate outreach via phone call with empathetic adjuster rather than standard next-day response</p>
                      <div className="mt-2 p-2 bg-gray-50 rounded text-xs">
                        <strong>Why this decision?</strong> First claim experience is critical for retention; anxiety signals suggest need for human reassurance; high-value customer warrants priority handling
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="hidden md:flex items-center justify-center z-10 bg-white rounded-full h-10 w-10 border-2 border-brand-pink absolute left-1/2 transform -translate-x-1/2"></div>
              
              <div className="md:w-1/2 pl-0 md:pl-8">
                <h4 className="text-lg font-semibold text-brand-black">Immediate adjuster call</h4>
                <p className="text-gray-600">Senior adjuster calls with empathetic script and expedited claim handling</p>
                <p className="text-sm text-brand-pink mt-2">Day 1, 8:15 PM</p>
              </div>
            </div>
            
            {/* More steps would follow here for Claims Support */}
            <div className="flex justify-center my-8">
              <p className="text-gray-400 italic">Additional journey steps not shown for brevity...</p>
            </div>
          </div>
        </TabsContent>
        
        {/* Coverage Upgrade Journey */}
        <TabsContent value="coverage-upgrade" className="mt-6">
          <div className="mb-4 text-center">
            <p className="text-sm text-gray-500">Days 1-21: Life event triggered opportunity to expand coverage with a long-term customer</p>
          </div>
          <div className="relative">
            {/* Journey Timeline */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2"></div>
            
            {/* Step 1: Life Event Detection */}
            <div className="flex flex-col md:flex-row items-start md:items-center mb-16 relative">
              <div className="md:w-1/2 pr-8 md:text-right mb-4 md:mb-0">
                <h4 className="text-lg font-semibold text-brand-black">Life event detected</h4>
                <p className="text-gray-600">Customer updates address and adds vehicle to auto policy</p>
                <p className="text-sm text-brand-orange mt-2">Day 1</p>
              </div>
              
              <div className="hidden md:flex items-center justify-center z-10 bg-white rounded-full h-10 w-10 border-2 border-brand-orange absolute left-1/2 transform -translate-x-1/2"></div>
              
              <div className="md:w-1/2 pl-0 md:pl-8">
                <Card>
                  <CardContent className="p-4 flex">
                    <div className="bg-gray-100 w-16 h-16 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-xs text-gray-500">Signal</span>
                    </div>
                    <div>
                      <h5 className="font-medium text-brand-black">Life Stage Analysis</h5>
                      <p className="text-sm text-gray-600">AI identifies likely move to larger home in suburban area with family growth signals</p>
                      <div className="mt-2 p-2 bg-gray-50 rounded text-xs">
                        <strong>Insight:</strong> Customer likely purchased home; life stage shift suggests family growth; coverage needs likely changing
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* More steps would follow here for Coverage Upgrade */}
            <div className="flex justify-center my-8">
              <p className="text-gray-400 italic">Additional journey steps not shown for brevity...</p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="mt-12 text-center">
        <p className="text-gray-500 italic">These are example journeys. The AI creates unique paths for each customer based on individual behavior and preferences.</p>
        <p className="text-sm text-gray-400 mt-2">Each journey shows how AI agents continuously adapt strategies based on real-time customer responses.</p>
      </div>
    </div>
  );
};

export default InsuranceJourney;
