
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Check, BrainCircuit, Zap, Users, ChartPie, Layers, Shield } from "lucide-react";
import TechnologyDiagram from "@/components/product/technology-diagram";
import AgentWorkflow from "@/components/product/agent-workflow";
import CustomerJourney from "@/components/product/customer-journey";
import PsychographicProfiles from "@/components/product/psychographic-profiles";
import IntegrationsCloud from "@/components/product/integrations-cloud";
import DecisionIntelligence from "@/components/product/decision-intelligence";

const Product = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-brand-black mb-6 animate-fade-in">
                Autonomous Decision Intelligence for Every Customer
              </h1>
              <p className="text-xl text-gray-600 mb-8 animate-fade-in [animation-delay:200ms]">
                Thoughtnudge combines statistical AI models with behavioral science to deliver the perfect message, offer, and experience for each individual customer—with minimal manual work.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in [animation-delay:400ms]">
                <Button variant="orange" size="lg" asChild>
                  <Link to="/demo">
                    See It In Action
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Dual Value Proposition */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="h-16 w-16 flex items-center justify-center bg-brand-orange/20 text-brand-orange rounded-full mb-6">
                  <ChartPie className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-brand-black mb-4">Higher Conversion Rates</h3>
                <p className="text-gray-600 mb-6">
                  1:1 personalized decisions for each customer means the right message, offer, channel, timing, and frequency—resulting in 2-3x higher conversion rates than traditional approaches.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand-orange mr-2 flex-shrink-0 mt-0.5" />
                    <span>Individual-level understanding vs. segment-based</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand-orange mr-2 flex-shrink-0 mt-0.5" />
                    <span>Psychographic profiling of each customer</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand-orange mr-2 flex-shrink-0 mt-0.5" />
                    <span>Real-time context-aware decisions</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="h-16 w-16 flex items-center justify-center bg-brand-pink/20 text-brand-pink rounded-full mb-6">
                  <Zap className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-brand-black mb-4">Eliminate Manual Work</h3>
                <p className="text-gray-600 mb-6">
                  Our autonomous agents eliminate the need for manual A/B testing, complex journey building, rule management, and optimization across multiple tools and channels.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand-pink mr-2 flex-shrink-0 mt-0.5" />
                    <span>No more manual A/B testing</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand-pink mr-2 flex-shrink-0 mt-0.5" />
                    <span>70% reduction in campaign setup time</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand-pink mr-2 flex-shrink-0 mt-0.5" />
                    <span>Unified management across all channels</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
                Our Technology
              </h2>
              <p className="text-xl text-gray-600">
                Thoughtnudge combines advanced statistical AI models with behavioral science to deliver results that were previously impossible.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
                <BrainCircuit className="w-12 h-12 text-brand-orange mb-6" />
                <h3 className="text-xl font-bold text-brand-black mb-4">
                  Agentic AI Architecture
                </h3>
                <p className="text-gray-600">
                  Unlike traditional AI that just predicts, our agentic AI makes decisions, takes actions, and learns from outcomes. Each customer gets their own AI agent that continuously optimizes their experience.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
                <Zap className="w-12 h-12 text-brand-pink mb-6" />
                <h3 className="text-xl font-bold text-brand-black mb-4">
                  Neuronudge Framework
                </h3>
                <p className="text-gray-600">
                  Our proprietary framework combines behavioral science with AI to understand deep customer psychographics—knowing not just what users do, but why they do it and what motivates them.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
                <Users className="w-12 h-12 text-brand-yellow mb-6" />
                <h3 className="text-xl font-bold text-brand-black mb-4">
                  Continuous Learning System
                </h3>
                <p className="text-gray-600">
                  Our platform conducts thousands of micro-experiments in parallel, continuously improving its understanding of what works for each individual through experimentation and feedback loops.
                </p>
              </div>
            </div>
            
            <div className="mb-16">
              <TechnologyDiagram />
            </div>
          </div>
        </section>

        {/* How Agents Work */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
                How Thoughtnudge Agents Work
              </h2>
              <p className="text-xl text-gray-600">
                Set goals and guardrails, then let our AI agents deliver results autonomously.
              </p>
            </div>
            
            <AgentWorkflow />

            <div className="mt-12 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-brand-black mb-4">Your Role vs. AI's Role</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-brand-black mb-4">You Provide:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-brand-orange text-white flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">1</div>
                      <span><strong>One Goal</strong> for the agent (e.g., increase repeat purchases)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-brand-orange text-white flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">2</div>
                      <span><strong>Action Options</strong> (messages, offers, products, channels)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-brand-orange text-white flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">3</div>
                      <span><strong>Guardrails</strong> (message frequency, budget limits, time constraints)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-brand-orange text-white flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">4</div>
                      <span><strong>Trigger & Exit Conditions</strong> (when to engage/disengage)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-brand-black mb-4">The AI Handles:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-brand-pink text-white flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">1</div>
                      <span><strong>Experimentation</strong> across all variables</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-brand-pink text-white flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">2</div>
                      <span><strong>Customer Profiling</strong> to understand psychographics and preferences</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-brand-pink text-white flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">3</div>
                      <span><strong>Decision-making</strong> for each individual customer in real-time</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-brand-pink text-white flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">4</div>
                      <span><strong>Execution</strong> across channels with explanations for each decision</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Journey Sample */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
                Customer Journey with Thoughtnudge
              </h2>
              <p className="text-xl text-gray-600">
                See how our AI makes decisions at each step and adapts based on customer behavior.
              </p>
            </div>
            
            <CustomerJourney />

            <div className="mt-16 bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-brand-black mb-6 text-center">Real-world Decision Example</h3>
              <DecisionIntelligence />
            </div>
          </div>
        </section>

        {/* Psychographic Profiles */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
                AI-Generated Psychographic Profiles
              </h2>
              <p className="text-xl text-gray-600">
                Our AI builds detailed psychographic profiles for each customer through continuous experimentation and learning.
              </p>
            </div>
            
            <PsychographicProfiles />

            <div className="mt-12 max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-brand-orange/10 rounded-full">
                  <Shield className="w-8 h-8 text-brand-orange" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-black mb-2">Beyond Black Box AI</h3>
                  <p className="text-gray-600">
                    Unlike traditional black box AI, Thoughtnudge provides complete transparency into why each decision was made, what the AI is learning about each customer, and how these insights are being applied to achieve your goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
                Works With Your Existing Stack
              </h2>
              <p className="text-xl text-gray-600">
                Thoughtnudge integrates with 50+ platforms, enhancing your current tools with autonomous intelligence rather than replacing them.
              </p>
            </div>
            
            <IntegrationsCloud />

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h4 className="text-lg font-semibold text-brand-black mb-4">
                  Data Sources
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-brand-orange rounded-full mr-2"></span>
                    <span>Customer Data Platforms</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-brand-orange rounded-full mr-2"></span>
                    <span>CRM Systems</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-brand-orange rounded-full mr-2"></span>
                    <span>Data Warehouses</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-brand-orange rounded-full mr-2"></span>
                    <span>Analytics Tools</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h4 className="text-lg font-semibold text-brand-black mb-4">
                  Marketing Platforms
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-brand-pink rounded-full mr-2"></span>
                    <span>Email Service Providers</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-brand-pink rounded-full mr-2"></span>
                    <span>SMS Platforms</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-brand-pink rounded-full mr-2"></span>
                    <span>Marketing Automation</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-brand-pink rounded-full mr-2"></span>
                    <span>Ad Platforms</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h4 className="text-lg font-semibold text-brand-black mb-4">
                  Communication Channels
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-brand-yellow rounded-full mr-2"></span>
                    <span>Voice AI Systems</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-brand-yellow rounded-full mr-2"></span>
                    <span>WhatsApp</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-brand-yellow rounded-full mr-2"></span>
                    <span>Push Notification Systems</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-brand-yellow rounded-full mr-2"></span>
                    <span>Website/App Personalization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
                Ready to Transform Your Customer Engagement?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Join innovative brands using Thoughtnudge to deliver hyper-personalized experiences that drive conversions without the manual work.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="orange" size="lg" asChild>
                  <Link to="/demo">
                    Request a Demo
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/case-studies">
                    View Customer Stories
                  </Link>
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

export default Product;
