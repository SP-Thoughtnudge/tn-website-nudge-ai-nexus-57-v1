
import React from "react";
import { 
  Users, Brain, Zap, MessageSquare, Mail, Bell, Mic, 
  Infinity, Settings, Shield, CircleCheck 
} from "lucide-react";

const SolutionSlide = () => {
  return (
    <section className="py-6 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-brand-black mb-2">
              Thoughtnudge: Agentic AI That Delivers Outcomes
            </h2>
            <p className="text-sm text-gray-600 max-w-3xl mx-auto">
              You set the goals and guardrails. Our AI agents deliver the results.
            </p>
          </div>
          
          {/* Main Content Grid */}
          <div className="grid grid-cols-2 gap-5 mb-6">
            {/* Left Column - Key Features */}
            <div className="space-y-5">
              {/* 1:1 Decision */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-[#9b87f5]/20 flex items-center justify-center flex-shrink-0">
                    <Brain className="h-6 w-6 text-[#9b87f5]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-black mb-1">1:1 Real-time Decisioning</h3>
                    <p className="text-xs text-gray-600 mb-2">
                      One dedicated AI agent per customer that learns and adapts in real-time
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-gray-50 p-2 rounded">
                        <h4 className="text-xs font-semibold mb-1 flex items-center gap-1">
                          <MessageSquare className="h-3 w-3" /> Smart Decisions
                        </h4>
                        <ul className="text-2xs text-gray-600 space-y-0.5 pl-3">
                          <li className="list-disc">Right message</li>
                          <li className="list-disc">Right offer</li>
                          <li className="list-disc">Right channel</li>
                          <li className="list-disc">Right timing</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-2 rounded">
                        <h4 className="text-xs font-semibold mb-1 flex items-center gap-1">
                          <Users className="h-3 w-3" /> Customer Signals
                        </h4>
                        <ul className="text-2xs text-gray-600 space-y-0.5 pl-3">
                          <li className="list-disc">Behavior patterns</li>
                          <li className="list-disc">Response data</li>
                          <li className="list-disc">Interaction history</li>
                          <li className="list-disc">Psychographic profile</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Autonomous Execution */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-[#F97316]/20 flex items-center justify-center flex-shrink-0">
                    <Zap className="h-6 w-6 text-[#F97316]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-black mb-1">Autonomous Execution</h3>
                    <p className="text-xs text-gray-600 mb-2">
                      AI operates autonomously to achieve your business objectives
                    </p>
                    
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-gray-50 p-2 rounded">
                        <h4 className="text-xs font-semibold mb-1">Traditional Approach</h4>
                        <ul className="text-2xs text-gray-600 space-y-0.5 pl-3">
                          <li className="flex items-center gap-1">
                            <CircleCheck className="h-2 w-2 text-red-500" /> Static rules
                          </li>
                          <li className="flex items-center gap-1">
                            <CircleCheck className="h-2 w-2 text-red-500" /> Predefined journeys
                          </li>
                          <li className="flex items-center gap-1">
                            <CircleCheck className="h-2 w-2 text-red-500" /> Manual A/B tests
                          </li>
                          <li className="flex items-center gap-1">
                            <CircleCheck className="h-2 w-2 text-red-500" /> Static segmentation
                          </li>
                        </ul>
                      </div>
                      <div className="bg-[#F97316]/10 p-2 rounded">
                        <h4 className="text-xs font-semibold mb-1">Thoughtnudge Way</h4>
                        <ul className="text-2xs text-gray-600 space-y-0.5 pl-3">
                          <li className="flex items-center gap-1">
                            <CircleCheck className="h-2 w-2 text-green-500" /> Goal-based AI
                          </li>
                          <li className="flex items-center gap-1">
                            <CircleCheck className="h-2 w-2 text-green-500" /> Dynamic adaptation
                          </li>
                          <li className="flex items-center gap-1">
                            <CircleCheck className="h-2 w-2 text-green-500" /> Continuous learning
                          </li>
                          <li className="flex items-center gap-1">
                            <CircleCheck className="h-2 w-2 text-green-500" /> Individual optimization
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column */}
            <div className="space-y-5">
              {/* Cross-Channel Intelligence */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-[#0EA5E9]/20 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="h-6 w-6 text-[#0EA5E9]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-black mb-1">Unified Cross-Channel Intelligence</h3>
                    <p className="text-xs text-gray-600 mb-2">
                      Holistic view of customer behavior across all touchpoints
                    </p>
                    
                    <div className="bg-[#0EA5E9]/5 p-2 rounded mb-2">
                      <h4 className="text-xs font-semibold mb-1">Channel Integration</h4>
                      <div className="flex flex-wrap gap-2">
                        <div className="px-2 py-1 bg-white rounded-full shadow-sm flex items-center gap-1">
                          <Mail className="h-3 w-3 text-[#0EA5E9]" />
                          <span className="text-2xs">Email</span>
                        </div>
                        <div className="px-2 py-1 bg-white rounded-full shadow-sm flex items-center gap-1">
                          <MessageSquare className="h-3 w-3 text-[#0EA5E9]" />
                          <span className="text-2xs">SMS</span>
                        </div>
                        <div className="px-2 py-1 bg-white rounded-full shadow-sm flex items-center gap-1">
                          <Bell className="h-3 w-3 text-[#0EA5E9]" />
                          <span className="text-2xs">Push</span>
                        </div>
                        <div className="px-2 py-1 bg-white rounded-full shadow-sm flex items-center gap-1">
                          <Mic className="h-3 w-3 text-[#0EA5E9]" />
                          <span className="text-2xs">Voice</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-2 rounded">
                      <h4 className="text-xs font-semibold mb-1">Learning Across Channels:</h4>
                      <p className="text-2xs text-gray-600">
                        AI synthesizes signals from all channels to create a unified customer understanding,
                        applying insights from one channel to optimize others.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Continuous Intelligence */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-[#D946EF]/20 flex items-center justify-center flex-shrink-0">
                    <Infinity className="h-6 w-6 text-[#D946EF]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-black mb-1">Continuous Intelligence</h3>
                    <p className="text-xs text-gray-600 mb-2">
                      AI that constantly learns and improves with every interaction
                    </p>
                    
                    <div className="bg-gray-50 p-2 rounded flex items-start gap-2">
                      <div className="flex-1">
                        <h4 className="text-xs font-semibold mb-1">Learning Loop</h4>
                        <ul className="text-2xs text-gray-600 space-y-0.5 pl-3">
                          <li className="list-disc">Collect signals</li>
                          <li className="list-disc">Analyze patterns</li>
                          <li className="list-disc">Test hypotheses</li>
                          <li className="list-disc">Implement insights</li>
                        </ul>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xs font-semibold mb-1">Always Improving</h4>
                        <p className="text-2xs text-gray-600">
                          Unlike static systems, our AI agents evolve with each customer
                          interaction, becoming more effective over time.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Row - Control & Transparency */}
          <div className="bg-gradient-to-r from-[#9b87f5]/10 to-[#F97316]/10 p-4 rounded-lg mb-3">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                <Shield className="h-6 w-6 text-[#403E43]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-brand-black">You're Always in Control</h3>
                <p className="text-xs text-gray-600 mb-2">
                  Explainable AI with complete transparency and control
                </p>
                
                <div className="flex gap-4">
                  <div className="bg-white p-2 rounded shadow-sm flex-1">
                    <h4 className="text-xs font-semibold flex items-center gap-1 mb-1">
                      <Settings className="h-3 w-3" /> Set Guardrails
                    </h4>
                    <p className="text-2xs text-gray-600">
                      Define parameters for frequency, timing, tone, and message content
                    </p>
                  </div>
                  <div className="bg-white p-2 rounded shadow-sm flex-1">
                    <h4 className="text-xs font-semibold flex items-center gap-1 mb-1">
                      <Brain className="h-3 w-3" /> Full Transparency
                    </h4>
                    <p className="text-2xs text-gray-600">
                      See exactly why each decision was made with complete audit trails
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-xs font-semibold text-brand-black">
              Set your business goals. Our agentic AI does the rest.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSlide;
