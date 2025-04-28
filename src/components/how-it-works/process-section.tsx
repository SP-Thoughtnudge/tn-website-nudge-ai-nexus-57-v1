
import { ArrowRight } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Signal Collection",
      description: "Thoughtnudge collects behavioral, contextual, and psychographic signals across all your customer touchpoints—creating a comprehensive understanding of each individual customer.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=900"
    },
    {
      number: "02",
      title: "Autonomous Experimentation",
      description: "Each customer gets their own AI agent that conducts continuous micro-experiments to learn their preferences, motivations, and decision drivers.",
      image: "https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?auto=format&fit=crop&q=80&w=900"
    },
    {
      number: "03",
      title: "Intelligent Decisioning",
      description: "The platform processes these signals through our Neuronudge Framework to determine the optimal message, offer, channel, and timing for each customer.",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=900"
    },
    {
      number: "04",
      title: "Dynamic Execution",
      description: "Decisions are translated into actions across your marketing channels—email, SMS, push notifications, on-site—with no manual campaign setup required.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=900"
    },
    {
      number: "05",
      title: "Continuous Optimization",
      description: "The system learns from each interaction, continuously improving its understanding and effectiveness, optimizing toward your business goals.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=900"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
            How Thoughtnudge Works
          </h2>
          <p className="text-xl text-gray-600">
            From signal collection to continuous optimization, our platform handles the entire customer engagement cycle autonomously.
          </p>
        </div>

        <div className="space-y-16">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 lg:gap-16 items-center`}
            >
              <div className="w-full md:w-1/2 space-y-6">
                <span className="inline-block text-4xl font-bold text-brand-orange/40">
                  {step.number}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-brand-black">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-600">
                  {step.description}
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2">
              <div className="aspect-video bg-gray-100 rounded flex items-center justify-center">
                [Interactive animation showing the agent learning cycle]
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <h3 className="text-2xl font-bold text-brand-black">The Agent Learning Cycle</h3>
              <p className="text-gray-600">
                Unlike static systems that follow pre-defined rules, Thoughtnudge's agents continuously learn and adapt. Every interaction becomes an opportunity to improve future decisions.
              </p>
              <div className="flex items-center">
                <ArrowRight className="text-brand-orange mr-2" />
                <span className="text-brand-black font-medium">See how this drives higher conversions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
