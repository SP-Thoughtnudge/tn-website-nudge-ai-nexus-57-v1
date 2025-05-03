
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { LinkedinIcon } from "lucide-react";

const TeamSection = () => {
  const founders = [
    {
      name: "Founder",
      role: "Co-Founder & CEO",
      bio: "Previously deployed conversational AI systems across multiple channels, working with enterprise marketing and CX teams globally. Identified the critical need for centralized customer intelligence beyond siloed channels.",
      image: "/placeholder.svg",
      linkedin: "#"
    },
    {
      name: "SP",
      role: "Co-Founder & CTO",
      bio: "Former Amazon leader who implemented 1:1 personalization at scale, driving significant improvements in customer lifetime value, conversion rates, and user retention through AI-powered systems.",
      image: "/placeholder.svg",
      linkedin: "#"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
            Our Team
          </h2>
          <p className="text-xl text-gray-600">
            Meet the founders behind Thoughtnudge's vision
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {founders.map((founder, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-lg">
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  <img 
                    src={founder.image} 
                    alt={founder.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-1 text-brand-black">{founder.name}</h3>
                  <p className="text-brand-orange font-medium mb-4">{founder.role}</p>
                  <p className="text-gray-600 mb-4">{founder.bio}</p>
                  <a 
                    href={founder.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-700 hover:text-brand-orange transition-colors"
                  >
                    <LinkedinIcon className="h-5 w-5 mr-2" />
                    <span>LinkedIn Profile</span>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
