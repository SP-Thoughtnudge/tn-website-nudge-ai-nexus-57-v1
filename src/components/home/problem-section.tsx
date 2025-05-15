
const ProblemSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
            Beyond Automated Messaging
          </h2>
          <p className="text-xl text-gray-600">
            While others focus on automating messages, we're transforming how businesses make decisions for each customer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -z-10 inset-0 bg-gradient-to-br from-brand-yellow/30 to-brand-pink/20 rounded-full blur-3xl"></div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-brand-black mb-6">
                What if AI could unify customer intelligence across every touchpoint?
              </h3>
              <p className="text-gray-600 mb-6">
                Thoughtnudge deploys autonomous growth agents that learn, optimize, and adapt across all customer interactions—focusing on each individual customer and your business goals.
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

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-brand-black mb-3">Customer-First Intelligence</h3>
              <p className="text-gray-600">
                Each AI agent builds understanding of one customer across all touchpoints, creating a unified experience rather than fragmented interactions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-brand-black mb-3">Continuous Learning System</h3>
              <p className="text-gray-600">
                While most platforms automate messaging, our system continuously learns what works for each individual customer across all channels.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-brand-black mb-3">Autonomous Execution</h3>
              <p className="text-gray-600">
                Set your business goals and guardrails. The AI handles execution—making decisions on what to say, when, where, and how for maximum impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
