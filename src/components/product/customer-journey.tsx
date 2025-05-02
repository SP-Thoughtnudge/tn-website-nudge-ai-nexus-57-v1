
import React from "react";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const CustomerJourney = () => {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
      <div className="relative">
        {/* Journey Timeline */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2"></div>
        
        {/* Step 1: Website Visit */}
        <div className="flex flex-col md:flex-row items-start md:items-center mb-16 relative">
          <div className="md:w-1/2 pr-8 md:text-right mb-4 md:mb-0">
            <h4 className="text-lg font-semibold text-brand-black">Customer visits website</h4>
            <p className="text-gray-600">Browses products, adds item to cart, but doesn't complete purchase</p>
          </div>
          
          <div className="hidden md:flex items-center justify-center z-10 bg-white rounded-full h-10 w-10 border-2 border-brand-orange absolute left-1/2 transform -translate-x-1/2"></div>
          
          <div className="md:w-1/2 pl-0 md:pl-8">
            <Card>
              <CardContent className="p-4 flex">
                <div className="bg-gray-100 w-16 h-16 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-xs text-gray-500">User action</span>
                </div>
                <div>
                  <h5 className="font-medium text-brand-black">Signal Collection</h5>
                  <p className="text-sm text-gray-600">AI captures browsing behavior, product interest, and exit intent</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Step 2: AI Decision */}
        <div className="flex flex-col md:flex-row items-start md:items-center mb-16 relative">
          <div className="md:w-1/2 pr-8 md:text-right mb-4 md:mb-0">
            <Card>
              <CardContent className="p-4 flex">
                <div className="bg-brand-orange/10 w-16 h-16 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-xs text-brand-orange">AI decision</span>
                </div>
                <div>
                  <h5 className="font-medium text-brand-black">Decision Making</h5>
                  <p className="text-sm text-gray-600">AI analyzes customer profile and signals, decides to send an email with a 10% discount for first-time purchase</p>
                  <div className="mt-2 p-2 bg-gray-50 rounded text-xs">
                    <strong>Why this decision?</strong> Analysis shows customer is price-sensitive and responds well to exclusive offers
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="hidden md:flex items-center justify-center z-10 bg-white rounded-full h-10 w-10 border-2 border-brand-pink absolute left-1/2 transform -translate-x-1/2"></div>
          
          <div className="md:w-1/2 pl-0 md:pl-8">
            <h4 className="text-lg font-semibold text-brand-black">AI makes personalized decision</h4>
            <p className="text-gray-600">Decides on optimal channel, message, offer, and timing for this specific customer</p>
          </div>
        </div>
        
        {/* Step 3: Email Sent */}
        <div className="flex flex-col md:flex-row items-start md:items-center mb-16 relative">
          <div className="md:w-1/2 pr-8 md:text-right mb-4 md:mb-0">
            <h4 className="text-lg font-semibold text-brand-black">Customer receives email</h4>
            <p className="text-gray-600">Opens email but doesn't click through immediately</p>
          </div>
          
          <div className="hidden md:flex items-center justify-center z-10 bg-white rounded-full h-10 w-10 border-2 border-gray-300 absolute left-1/2 transform -translate-x-1/2"></div>
          
          <div className="md:w-1/2 pl-0 md:pl-8">
            <Card>
              <CardContent className="p-4 flex">
                <div className="bg-gray-100 w-16 h-16 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-xs text-gray-500">Email</span>
                </div>
                <div>
                  <h5 className="font-medium text-brand-black">Email Execution</h5>
                  <p className="text-sm text-gray-600">Email sent with personalized headline that appeals to value-focused messaging based on customer profile</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Step 4: Another AI Decision */}
        <div className="flex flex-col md:flex-row items-start md:items-center mb-16 relative">
          <div className="md:w-1/2 pr-8 md:text-right mb-4 md:mb-0">
            <Card>
              <CardContent className="p-4 flex">
                <div className="bg-brand-orange/10 w-16 h-16 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-xs text-brand-orange">AI decision</span>
                </div>
                <div>
                  <h5 className="font-medium text-brand-black">Follow-Up Decision</h5>
                  <p className="text-sm text-gray-600">After 24 hours with no purchase, AI decides to send SMS with product features highlighting quality</p>
                  <div className="mt-2 p-2 bg-gray-50 rounded text-xs">
                    <strong>Why this decision?</strong> Customer profile shows higher SMS engagement than email and responds to quality-focused messaging
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="hidden md:flex items-center justify-center z-10 bg-white rounded-full h-10 w-10 border-2 border-brand-pink absolute left-1/2 transform -translate-x-1/2"></div>
          
          <div className="md:w-1/2 pl-0 md:pl-8">
            <h4 className="text-lg font-semibold text-brand-black">AI adapts strategy</h4>
            <p className="text-gray-600">Based on email open without conversion, AI updates approach</p>
          </div>
        </div>
        
        {/* Step 5: Conversion */}
        <div className="flex flex-col md:flex-row items-start md:items-center relative">
          <div className="md:w-1/2 pr-8 md:text-right mb-4 md:mb-0">
            <h4 className="text-lg font-semibold text-brand-black">Customer makes purchase</h4>
            <p className="text-gray-600">Completes order and becomes a customer</p>
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
                  <p className="text-sm text-gray-600">Records successful conversion path and strengthens understanding of customer preferences</p>
                  <div className="mt-2 p-2 bg-gray-50 rounded text-xs">
                    <strong>Learned:</strong> Customer responds to quality-focused messaging via SMS after email priming
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-gray-500 italic">This is just one example journey. The AI creates unique paths for each customer.</p>
      </div>
    </div>
  );
};

export default CustomerJourney;
