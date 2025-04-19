
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

const Product = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-black mb-6">Product</h1>
          <p className="text-xl text-gray-600 mb-8">
            Coming soon: Detailed overview of the Thoughtnudge platform capabilities.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Product;
