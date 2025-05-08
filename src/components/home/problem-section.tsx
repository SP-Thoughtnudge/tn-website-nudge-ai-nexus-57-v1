
const ProblemSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
            The Broken State of Customer Engagement
          </h2>
          <p className="text-xl text-gray-600">
            Despite massive investments in different channels and automation technologies, customer engagement still feels robotic, broken, and siloed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-brand-black mb-3">Channel-Centric Silos</h3>
              <p className="text-gray-600">
                Businesses have automated channels—emails, WhatsApp, voice, SMS—individually, but customers don't experience your brand in silos.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-brand-black mb-3">Automation Without Intelligence</h3>
              <p className="text-gray-600">
                Most platforms automate messaging, not intelligence. They don't truly learn what works for each customer across touchpoints.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-brand-black mb-3">No Evolution Over Time</h3>
              <p className="text-gray-600">
                Even new LLM-based agents are reactive—stuck in one channel, lacking persistent context and continuous intelligence that evolves.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -z-10 inset-0 bg-gradient-to-br from-brand-yellow/30 to-brand-pink/20 rounded-full blur-3xl"></div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-brand-black mb-6">
                What if AI could unify customer intelligence across every touchpoint?
              </h3>
              <p className="text-gray-600 mb-6">
                Thoughtnudge deploys autonomous growth agents that learn, optimize, and adapt across all customer interactions—not channel-first, not campaign-first, but customer-first and goal-first.
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
