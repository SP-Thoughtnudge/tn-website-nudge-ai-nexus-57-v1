
import { useEffect } from "react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { 
  Card, 
  CardContent 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import MissionSection from "@/components/about/mission-section";
import StorySection from "@/components/about/story-section";
import ValuesSection from "@/components/about/values-section";
import TeamSection from "@/components/about/team-section";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pb-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-brand-black mb-6 leading-tight">
                Redefining Customer Engagement with AI
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
                We're building the future of personalization where every customer interaction is handled with precision, 
                intelligence, and genuine understanding—just like your favorite local business knows you by name.
              </p>
              <Button variant="orange" size="xl" className="mt-4">
                <a href="/brochure" className="inline-block">
                  Learn Our Approach
                </a>
              </Button>
            </div>
          </div>
        </section>

        <MissionSection />
        <StorySection />
        <ValuesSection />
        <TeamSection />

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-brand-orange/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <Card className="border-none shadow-lg overflow-hidden">
                <CardContent className="p-8 md:p-12">
                  <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
                      Ready to Transform Your Customer Engagement?
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                      Join the companies already using Thoughtnudge to deliver truly personalized experiences that drive growth.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                      <Button variant="orange" size="lg">
                        Schedule a Demo
                      </Button>
                      <Button variant="outline" size="lg">
                        View Product Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
