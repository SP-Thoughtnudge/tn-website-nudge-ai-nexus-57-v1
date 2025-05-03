
import React from "react";
import { Brain, Target, Heart, Shield, Globe, BookOpen } from "lucide-react";

const ValuesSection = () => {
  const values = [
    {
      icon: <Brain className="h-7 w-7 text-brand-orange" />,
      title: "Intelligence-First",
      description: "We believe in letting AI handle repetitive tasks while humans focus on strategy and creativity."
    },
    {
      icon: <Target className="h-7 w-7 text-brand-orange" />,
      title: "Customer Obsession",
      description: "Every decision we make starts with the question: 'How does this benefit our customers?'"
    },
    {
      icon: <Heart className="h-7 w-7 text-brand-orange" />,
      title: "Authentic Engagement",
      description: "We believe marketing should feel like a service, not an interruption."
    },
    {
      icon: <Shield className="h-7 w-7 text-brand-orange" />,
      title: "Ethical AI",
      description: "We develop AI that respects privacy, promotes transparency, and avoids harmful biases."
    },
    {
      icon: <Globe className="h-7 w-7 text-brand-orange" />,
      title: "Global Perspective",
      description: "We embrace diverse viewpoints and build solutions that work across cultural boundaries."
    },
    {
      icon: <BookOpen className="h-7 w-7 text-brand-orange" />,
      title: "Continuous Learning",
      description: "We're constantly evolving, experimenting, and improving—just like our AI."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
            Our Values
          </h2>
          <p className="text-xl text-gray-600">
            The principles that guide our team and shape our product
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="h-14 w-14 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-brand-black">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
