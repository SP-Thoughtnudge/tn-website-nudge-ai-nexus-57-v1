
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import HeroSection from "@/components/home/hero-section";
import ProblemSection from "@/components/home/problem-section";
import BenefitsSection from "@/components/home/benefits-section";
import HowItWorksSection from "@/components/home/how-it-works-section";
import CtaSection from "@/components/home/cta-section";
import LogoCloud from "@/components/home/logo-cloud";
import AutonomousSection from "@/components/home/autonomous-section";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <LogoCloud />
        <ProblemSection />
        <AutonomousSection />
        <BenefitsSection />
        <HowItWorksSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
