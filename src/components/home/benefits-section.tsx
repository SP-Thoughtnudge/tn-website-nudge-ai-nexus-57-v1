
import { Bot, BrainCircuit, BarChart, Compass } from "lucide-react";

const BenefitCard = ({ 
  title, 
  description, 
  icon: Icon,
  className = ""
}) => {
  return (
    <div className={`bg-white rounded-xl p-8 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:translate-y-[-4px] ${className}`}>
      <div className="inline-flex items-center justify-center p-3 bg-brand-yellow/20 rounded-lg mb-6">
        <Icon className="w-7 h-7 text-brand-orange" />
      </div>
      <h3 className="text-xl font-bold text-brand-black mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const BenefitsSection = () => {
  const benefits = [
    {
      title: "No More A/B Testing Fatigue",
      description: "Let AI discover what works best for each customer instead of manually creating and analyzing endless test variations.",
      icon: BarChart,
      className: "border-l-4 border-l-brand-orange"
    },
    {
      title: "Autonomous Customer Decisioning",
      description: "The platform makes real-time decisions on what to send, when to send it, and which channel to use—all autonomously.",
      icon: BrainCircuit,
      className: "border-l-4 border-l-brand-pink"
    },
    {
      title: "Explains Every Decision It Makes",
      description: "Unlike black-box AI, Thoughtnudge shows you why it made each decision, building trust and providing valuable insights.",
      icon: Bot,
      className: "border-l-4 border-l-brand-yellow"
    },
    {
      title: "Cross-Channel, Cross-Journey",
      description: "Deliver consistent yet personalized experiences across email, SMS, push, and on-site interactions throughout the customer lifecycle.",
      icon: Compass,
      className: "border-l-4 border-l-brand-orange"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
            Your AI Teammate for Personalization at Scale
          </h2>
          <p className="text-xl text-gray-600">
            Thoughtnudge works alongside your team, handling the complexity of 1:1 marketing while you focus on strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard 
              key={index}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
              className={benefit.className}
            />
          ))}
        </div>

        <div className="mt-16 bg-gray-50 p-8 rounded-xl">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold text-brand-black mb-4">
                The Neuronudge Framework: AI × Behavioral Science
              </h3>
              <p className="text-gray-600 mb-6">
                We go beyond personalization. Our agents understand psychographic traits — choosing how to communicate, not just what to say. We build a psychographic profile of each customer, making every engagement more effective than the last.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-brand-orange font-bold mr-2">•</span>
                  <span>Learns individual preferences and behaviors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-orange font-bold mr-2">•</span>
                  <span>Adapts tone, timing, and channel per customer</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-orange font-bold mr-2">•</span>
                  <span>Creates persistent memory that evolves over time</span>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-pink/20 to-brand-orange/20 rounded-full blur-3xl"></div>
                <div className="relative bg-white p-6 rounded-xl shadow-md">
                  <h4 className="text-lg font-bold text-center mb-4">Continuous Intelligence</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-3 rounded-lg text-center">
                      <p className="text-sm font-medium">Learn</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg text-center">
                      <p className="text-sm font-medium">Decide</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg text-center">
                      <p className="text-sm font-medium">Act</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg text-center">
                      <p className="text-sm font-medium">Improve</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
