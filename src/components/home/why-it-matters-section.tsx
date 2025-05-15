
import React from "react";
import { Target, TrendingUp } from "lucide-react";

const WhyItMattersSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">
            Why It Matters
          </h2>
          <p className="text-lg text-gray-600">
            Thoughtnudge transforms how businesses connect with their customers, delivering measurable impact where it matters most.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
            <div className="h-12 w-12 bg-brand-orange/10 rounded-lg flex items-center justify-center mb-6">
              <Target className="h-6 w-6 text-brand-orange" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-brand-black">For Marketers</h3>
            <p className="text-gray-600">
              Less time buried in tools, more time on strategy. No rules, no journeys, no AB tests, no manual optimization. AI handles the execution so you can focus on strategic elements.
            </p>
            <div className="mt-6 pt-6 border-t border-gray-100">
              <p className="text-sm font-medium text-brand-orange">60% increase in marketing efficiency</p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
            <div className="h-12 w-12 bg-brand-pink/10 rounded-lg flex items-center justify-center mb-6">
              <TrendingUp className="h-6 w-6 text-brand-pink" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-brand-black">For Growth Leaders</h3>
            <p className="text-gray-600">
              Higher conversion because the AI focuses on individual customers and what AI does resonates with more customers. The agents deliver you higher growth.
            </p>
            <div className="mt-6 pt-6 border-t border-gray-100">
              <p className="text-sm font-medium text-brand-pink">40% improvement in conversion rates</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItMattersSection;
