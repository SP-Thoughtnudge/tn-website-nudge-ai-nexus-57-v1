
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import UseCases from "./pages/UseCases";
import Product from "./pages/Product";
import HowItWorks from "./pages/HowItWorks";
import Integrations from "./pages/Integrations";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import EcommerceBrochure from "./pages/EcommerceBrochure";
import TelecomBrochure from "./pages/TelecomBrochure";
import InsuranceBrochure from "./pages/InsuranceBrochure";
import Test from "./pages/Test";

// Create a new QueryClient instance
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/use-cases" element={<UseCases />} />
            <Route path="/product" element={<Product />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/integrations" element={<Integrations />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/test" element={<Test />} />
            <Route path="/brochure/ecommerce" element={<EcommerceBrochure />} />
            <Route path="/brochure/telecom" element={<TelecomBrochure />} />
            <Route path="/brochure/insurance" element={<InsuranceBrochure />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
