
import React from "react";

const IntegrationsCloud = () => {
  // Placeholder integration logos - in a real implementation, these would be actual partner logos
  const integrations = [
    { name: "Salesforce", category: "CRM" },
    { name: "Braze", category: "Marketing" },
    { name: "Segment", category: "CDP" },
    { name: "Twilio", category: "Messaging" },
    { name: "HubSpot", category: "Marketing" },
    { name: "Klaviyo", category: "Email" },
    { name: "Shopify", category: "E-commerce" },
    { name: "Iterable", category: "Marketing" },
    { name: "Customer.io", category: "Marketing" },
    { name: "SendGrid", category: "Email" },
    { name: "OneSignal", category: "Push" },
    { name: "BigCommerce", category: "E-commerce" }
  ];
  
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
      <div className="text-center mb-8">
        <h3 className="text-xl font-bold text-brand-black mb-2">Our Integration Ecosystem</h3>
        <p className="text-gray-600">Thoughtnudge works with all your favorite tools</p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-4">
        {integrations.map((integration, index) => (
          <div 
            key={index} 
            className="h-16 w-32 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100 shadow-sm"
            style={{ transform: `rotate(${Math.random() * 4 - 2}deg)` }}
          >
            <div className="text-center">
              <div className="font-medium text-sm">{integration.name}</div>
              <div className="text-xs text-gray-500">{integration.category}</div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 text-center text-gray-500 text-sm">
        <p>And 40+ more platforms supported through our flexible API</p>
      </div>
      
      <div className="mt-8 bg-gray-50 p-4 rounded-lg">
        <h4 className="font-medium text-brand-black mb-2">Unified Intelligence Layer</h4>
        <p className="text-sm text-gray-600">
          Thoughtnudge sits on top of your existing stack as a decision engine, connecting your data sources with your execution channels through a centralized AI brain.
        </p>
      </div>
    </div>
  );
};

export default IntegrationsCloud;
