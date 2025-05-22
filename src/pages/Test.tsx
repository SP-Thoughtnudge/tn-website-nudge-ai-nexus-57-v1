
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import InsuranceJourney from "@/components/product/insurance-journey";

const Test = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold text-center mb-8">Insurance Renewal Case Study</h1>
          <InsuranceJourney />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Test;
