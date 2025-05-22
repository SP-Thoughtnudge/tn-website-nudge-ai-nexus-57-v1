
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import HeroSection from "@/components/home/hero-section";
import ValueProposition from "@/components/home/value-proposition";
import AutonomousSection from "@/components/home/autonomous-section";
import IntegrationSection from "@/components/home/integration-section";
import TestimonialSection from "@/components/home/testimonial-section";
import NeuronudgeSection from "@/components/home/neuronudge-section";
import CtaSection from "@/components/home/cta-section";
import LogoCloud from "@/components/home/logo-cloud";
import HowItWorksSimple from "@/components/home/how-it-works-simple";
import WhyItMattersSection from "@/components/home/why-it-matters-section";
import BenefitsSection from "@/components/home/benefits-section";
import ProblemSection from "@/components/home/problem-section";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <LogoCloud />
        <ValueProposition />
        <WhyItMattersSection />
        <BenefitsSection />
        <ProblemSection />
        <HowItWorksSimple />
        <AutonomousSection />
        <NeuronudgeSection />
        <IntegrationSection />
        <TestimonialSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
