
import React from "react";
import { Target, Users, TrendingUp, Lightbulb, BarChart3, BrainCircuit } from "lucide-react";
import { Link } from "react-router-dom";

const ImpactSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
              Why It Matters
            </h2>
            <div className="h-1 w-20 bg-brand-orange mb-6 mx-auto"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our AI-driven approach reimagines customer engagement, delivering measurable results across 
              your organization while eliminating complexity.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow transform hover:-translate-y-1 duration-300">
              <div className="h-12 w-12 bg-brand-orange/10 rounded-lg flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-brand-orange" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-brand-black">For Marketers</h3>
              <p className="text-gray-600 mb-6">
                It means less time buried in tools — and more time focused on strategy.
                No more complex segmentation, manual A/B testing, or struggling with rigid journey builders.
              </p>
              <div className="border-t border-gray-100 pt-4 mt-auto">
                <div className="flex items-center text-brand-orange">
                  <BarChart3 className="h-5 w-5 mr-2" />
                  <span className="font-medium">70% reduction in campaign setup time</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow transform hover:-translate-y-1 duration-300">
              <div className="h-12 w-12 bg-brand-pink/10 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="h-6 w-6 text-brand-pink" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-brand-black">For Growth Leaders</h3>
              <p className="text-gray-600 mb-6">
                It means measurable ROI, faster experimentation, and compounding performance.
                Move beyond broad segments to truly individualized experiences that drive 
                higher conversion rates.
              </p>
              <div className="border-t border-gray-100 pt-4 mt-auto">
                <div className="flex items-center text-brand-pink">
                  <BarChart3 className="h-5 w-5 mr-2" />
                  <span className="font-medium">40% increase in customer retention</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow transform hover:-translate-y-1 duration-300">
              <div className="h-12 w-12 bg-brand-black/10 rounded-lg flex items-center justify-center mb-6">
                <Lightbulb className="h-6 w-6 text-gray-700" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-brand-black">For Investors</h3>
              <p className="text-gray-600 mb-6">
                It's the future of how brands engage, convert, and retain customers — at scale.
                We're building the infrastructure for a new generation of personalized marketing
                that delivers better results with less manual effort.
              </p>
              <div className="border-t border-gray-100 pt-4 mt-auto">
                <div className="flex items-center text-gray-700">
                  <BrainCircuit className="h-5 w-5 mr-2" />
                  <span className="font-medium">First-mover advantage in AI decisioning</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow transform hover:-translate-y-1 duration-300">
              <div className="h-12 w-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-gray-700" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-brand-black">For Our Team</h3>
              <p className="text-gray-600 mb-6">
                It's a chance to redefine the industry. We're tackling complex challenges at the 
                intersection of AI, marketing, and human psychology to create something genuinely new.
              </p>
              <div className="border-t border-gray-100 pt-4 mt-auto">
                <div className="flex items-center text-gray-700">
                  <BrainCircuit className="h-5 w-5 mr-2" />
                  <span className="font-medium">Building technology that understands people</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Link 
              to="/how-it-works" 
              className="inline-block bg-white py-3 px-6 rounded-lg border border-gray-200 text-brand-black hover:bg-gray-50 transition-colors shadow-sm"
            >
              <span className="font-medium">See how our technology works</span>
            </Link>
          </div>
          
          <div className="border-b border-gray-200 my-16 max-w-xs mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
