
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import TechnologySection from "@/components/how-it-works/technology-section";
import ProcessSection from "@/components/how-it-works/process-section";
import ComparisonSection from "@/components/how-it-works/comparison-section";
import IntegrationSection from "@/components/how-it-works/integration-section";
import CaseStudyPreview from "@/components/how-it-works/case-study-preview";

const HowItWorks = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-brand-black mb-6 animate-fade-in">
                Autonomous Growth Agents With Contextual Memory
              </h1>
              <p className="text-xl text-brand-gray mb-8 animate-fade-in [animation-delay:200ms]">
                Unlike siloed systems that don't learn over time, Thoughtnudge deploys AI agents that build intelligence across all touchpoints, coordinating experiences that drive real business outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in [animation-delay:400ms]">
                <Button variant="pink" size="lg" asChild>
                  <Link to="/demo">
                    Get a Demo
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Technology & Process */}
        <ProcessSection />
        <TechnologySection />
        <ComparisonSection />
        <IntegrationSection />
        <CaseStudyPreview />

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
                Ready for AI That Gets Better Over Time?
              </h2>
              <p className="text-xl text-brand-gray mb-8">
                Join innovative brands using Thoughtnudge to deliver unified customer experiences that continuously evolve and improve with every interaction.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="pink" size="lg" asChild>
                  <Link to="/demo">
                    Request a Demo
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/case-studies">
                    View Customer Stories
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;
