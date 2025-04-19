
const ProblemSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
            The Problem with Traditional Personalization
          </h2>
          <p className="text-xl text-gray-600">
            Today's marketing tools force you to create rigid rules, manual campaigns, and endless A/B tests that don't scale with your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-brand-black mb-3">Rule-Based Limitations</h3>
              <p className="text-gray-600">
                Static "if-this-then-that" rules can't adapt to evolving customer behavior or unexpected situations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-brand-black mb-3">Manual Campaign Creation</h3>
              <p className="text-gray-600">
                Building separate journeys for each segment is time-consuming and impossible to scale to truly 1:1 personalization.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-brand-black mb-3">A/B Testing Fatigue</h3>
              <p className="text-gray-600">
                Running tests for every variant and segment creates analysis paralysis and can't optimize for long-term customer value.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -z-10 inset-0 bg-gradient-to-br from-brand-yellow/30 to-brand-pink/20 rounded-full blur-3xl"></div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-brand-black mb-6">
                What if your AI could make these decisions autonomously?
              </h3>
              <p className="text-gray-600 mb-6">
                Thoughtnudge is the AI brain behind every customer decision, replacing rigid rules with a system that learns and adapts to each individual in real-time.
              </p>
              <div className="flex justify-center">
                <img
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800"
                  alt="AI decision making"
                  className="rounded-lg shadow-md max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
