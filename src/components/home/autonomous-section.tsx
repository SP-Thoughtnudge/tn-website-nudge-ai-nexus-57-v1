
import { BrainCircuit, BarChart, Compass } from "lucide-react";

const AutonomousSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
            Your AI Brain That Never Sleeps
          </h2>
          <p className="text-xl text-gray-600">
            Set your goals and guardrails, then let Thoughtnudge's Agentic AI optimize every customer interaction 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <BrainCircuit className="w-12 h-12 text-brand-orange mb-6" />
            <h3 className="text-xl font-bold text-brand-black mb-4">
              Continuous Learning
            </h3>
            <p className="text-gray-600">
              Our AI learns from every interaction, constantly improving its understanding of what works for each customer.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <BarChart className="w-12 h-12 text-brand-pink mb-6" />
            <h3 className="text-xl font-bold text-brand-black mb-4">
              Real-time Optimization
            </h3>
            <p className="text-gray-600">
              Instantly adapts messaging, timing, and channels based on live customer behavior and preferences.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <Compass className="w-12 h-12 text-brand-yellow mb-6" />
            <h3 className="text-xl font-bold text-brand-black mb-4">
              Beyond Segments
            </h3>
            <p className="text-gray-600">
              True 1:1 personalization that treats each customer as a unique individual, not just another segment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutonomousSection;
