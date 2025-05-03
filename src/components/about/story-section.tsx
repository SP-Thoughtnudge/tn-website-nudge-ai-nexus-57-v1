
import React from "react";

const StorySection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
            Our Story
          </h2>
          <p className="text-xl text-gray-600">
            How we discovered the need for truly individualized AI in customer engagement
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 mb-16 items-center">
            <div className="md:col-span-2">
              <div className="bg-white p-1 rounded-lg shadow-md overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Customer interactions analysis" 
                  className="w-full h-auto rounded" 
                />
              </div>
            </div>
            <div className="md:col-span-3">
              <h3 className="text-2xl font-bold mb-4 text-brand-black">The Realization</h3>
              <p className="text-gray-600 mb-4">
                While deploying conversational AI systems across voice and WhatsApp channels, we faced a persistent challenge: 
                creating rules and customer journeys that actually resonated with individuals. Despite using cutting-edge technology, 
                we struggled to provide clear ROI because enterprises viewed everything as just another channel.
              </p>
              <p className="text-gray-600">
                Through countless conversations with enterprises, marketing teams, and growth leaders across the globe, 
                one truth became increasingly clear: <span className="font-semibold">each customer is fundamentally unique</span>. 
                No single approach could possibly resonate with everyone.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-5 gap-8 mb-16 items-center">
            <div className="md:col-span-3 md:order-1 order-2">
              <h3 className="text-2xl font-bold mb-4 text-brand-black">The Missing Intelligence</h3>
              <p className="text-gray-600 mb-4">
                Analyzing voice recordings, chat logs, and page visits only strengthened our belief: 
                customers leave digital footprints everywhere—when they take actions in apps, raise complaints, 
                respond to emails, or even when they don't respond at all.
              </p>
              <p className="text-gray-600">
                Yet these valuable signals remained siloed. Learnings from email campaigns couldn't inform push notifications. 
                Insights from service interactions never reached marketing teams. What was missing was a 
                <span className="font-semibold"> central intelligence</span> that could continuously learn about each individual customer.
              </p>
            </div>
            <div className="md:col-span-2 md:order-2 order-1">
              <div className="bg-white p-1 rounded-lg shadow-md overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Data silos visualization" 
                  className="w-full h-auto rounded" 
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-5 gap-8 mb-16 items-center">
            <div className="md:col-span-2">
              <div className="bg-white p-1 rounded-lg shadow-md overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Amazon personalization example" 
                  className="w-full h-auto rounded" 
                />
              </div>
            </div>
            <div className="md:col-span-3">
              <h3 className="text-2xl font-bold mb-4 text-brand-black">The Amazon Experience</h3>
              <p className="text-gray-600 mb-4">
                Meanwhile, our co-founder SP was witnessing the power of 1:1 personalization firsthand at Amazon, 
                implementing systems that dramatically improved customer lifetime value, conversion rates, and user stickiness.
              </p>
              <p className="text-gray-600">
                The contrast was stark. While Amazon tailored experiences to individuals with remarkable precision, 
                most enterprises were still struggling with rigid segments and broad-brush approaches 
                that treated thousands of unique customers the same way.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3 md:order-1 order-2">
              <h3 className="text-2xl font-bold mb-4 text-brand-black">The Revolution</h3>
              <p className="text-gray-600 mb-4">
                We observed another critical problem: today's marketing tools are overwhelmingly complex. 
                From Salesforce Marketing Cloud to CDPs, ESPs, and now AI agents—marketers struggle to connect data, 
                build segments, run A/B tests, and implement their strategies within the constraints of rigid platforms.
              </p>
              <p className="text-gray-600 mb-4">
                The result? Bloated operations teams, suboptimal results, and endless manual work analyzing behaviors 
                and optimizing journeys.
              </p>
              <p className="text-gray-600">
                We asked ourselves: <span className="italic">"In a world where AI can drive cars, why are marketers still doing so much manual labor?"</span> 
                The answer was clear—they shouldn't be. And thus, Thoughtnudge was born.
              </p>
            </div>
            <div className="md:col-span-2 md:order-2 order-1">
              <div className="bg-white p-1 rounded-lg shadow-md overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Marketing automation complexity" 
                  className="w-full h-auto rounded" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
