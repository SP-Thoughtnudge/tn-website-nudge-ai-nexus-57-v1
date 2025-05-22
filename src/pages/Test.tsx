
import React from "react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import InsuranceJourney from "@/components/product/insurance-journey";
import PsychographicProfiles from "@/components/product/psychographic-profiles";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Settings, Users, Shield, FilePen, ArrowRight, Brain, UserCheck } from "lucide-react";

const Test = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold text-center mb-4">Insurance AI Decisioning Framework</h1>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            How ThoughtNudge AI transforms insurance customer experiences by enabling personalized, real-time decisioning
          </p>
          
          <Tabs defaultValue="manager-setup" className="w-full">
            <div className="flex justify-center mb-6">
              <TabsList>
                <TabsTrigger value="manager-setup">Manager Setup</TabsTrigger>
                <TabsTrigger value="ai-decisioning">AI Decisioning</TabsTrigger>
                <TabsTrigger value="customer-profiles">Customer Profiles</TabsTrigger>
              </TabsList>
            </div>
            
            {/* Manager Setup Tab */}
            <TabsContent value="manager-setup">
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h2 className="text-2xl font-semibold text-brand-black mb-6 text-center">Digital Manager Configuration</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {/* Business Goals */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <div className="flex items-center mb-4">
                      <Settings className="h-6 w-6 text-brand-orange mr-2" />
                      <h3 className="text-xl font-semibold text-brand-black">Business Goals</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg border border-gray-100">
                        <h4 className="font-medium text-brand-gray">Primary Goal</h4>
                        <p className="text-brand-black">Increase policy renewal rate by 15%</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-gray-100">
                        <h4 className="font-medium text-brand-gray">Secondary Goal</h4>
                        <p className="text-brand-black">Cross-sell home insurance to auto policy holders</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-gray-100">
                        <h4 className="font-medium text-brand-gray">Timing</h4>
                        <p className="text-brand-black">Begin outreach 30 days before policy expiration</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Target Audience */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <div className="flex items-center mb-4">
                      <Users className="h-6 w-6 text-brand-pink mr-2" />
                      <h3 className="text-xl font-semibold text-brand-black">Target Audience</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg border border-gray-100">
                        <h4 className="font-medium text-brand-gray">Primary Segment</h4>
                        <p className="text-brand-black">Auto insurance customers with 30-day renewal window</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-gray-100">
                        <h4 className="font-medium text-brand-gray">Opportunity Segment</h4>
                        <p className="text-brand-black">Single-policy holders with no home insurance</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-gray-100">
                        <h4 className="font-medium text-brand-gray">Priority Traits</h4>
                        <p className="text-brand-black">3+ years customer tenure, no recent claims</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {/* Business Guardrails */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <div className="flex items-center mb-4">
                      <Shield className="h-6 w-6 text-brand-orange mr-2" />
                      <h3 className="text-xl font-semibold text-brand-black">Business Guardrails</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg border border-gray-100">
                        <h4 className="font-medium text-brand-gray">Contact Limits</h4>
                        <p className="text-brand-black">Maximum 4 touchpoints per customer during renewal window</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-gray-100">
                        <h4 className="font-medium text-brand-gray">Discount Thresholds</h4>
                        <p className="text-brand-black">Bundle discount max 15%, loyalty discount max 5%</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-gray-100">
                        <h4 className="font-medium text-brand-gray">Compliance</h4>
                        <p className="text-brand-black">All communications must include policy disclosure links</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Action Space Content */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <div className="flex items-center mb-4">
                      <FilePen className="h-6 w-6 text-brand-pink mr-2" />
                      <h3 className="text-xl font-semibold text-brand-black">Action Space Content</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg border border-gray-100">
                        <h4 className="font-medium text-brand-gray">Offer Options</h4>
                        <p className="text-brand-black">Standard renewal, loyalty discount, home+auto bundle</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-gray-100">
                        <h4 className="font-medium text-brand-gray">Channel Options</h4>
                        <p className="text-brand-black">Email, SMS, mobile push, agent call</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-gray-100">
                        <h4 className="font-medium text-brand-gray">Message Variants</h4>
                        <p className="text-brand-black">Value-focused, savings-focused, convenience-focused</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center mt-8">
                  <div className="flex items-center text-brand-orange">
                    <p className="font-medium mr-2">AI Takes Over From Here</p>
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* AI Decisioning Tab */}
            <TabsContent value="ai-decisioning">
              <InsuranceJourney />
            </TabsContent>
            
            {/* Customer Profiles Tab */}
            <TabsContent value="customer-profiles">
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm mb-8">
                <div className="flex items-center justify-center mb-6">
                  <UserCheck className="h-6 w-6 text-brand-orange mr-2" />
                  <h2 className="text-2xl font-semibold text-brand-black">Customer Psychographic Profiles</h2>
                </div>
                <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
                  AI-generated customer profiles based on behaviors, preferences and emotional drivers
                </p>
                
                <PsychographicProfiles />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Test;
