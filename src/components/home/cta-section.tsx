
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import CalendarDialog from "@/components/ui/calendar-dialog";

const CtaSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative max-w-4xl mx-auto overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-black to-gray-900 rounded-2xl"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-pink rounded-full -translate-x-1/3 translate-y-1/3 blur-3xl"></div>
          </div>
          
          <div className="relative z-10 p-12 md:p-16 flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready for AI That Truly Learns?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Join forward-thinking brands using Thoughtnudge's autonomous growth agents to build intelligence that unifies customer experiences across all touchpoints and delivers real business outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CalendarDialog buttonVariant="pink">
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </CalendarDialog>
              <Button variant="outline" size="xl" className="text-white border-white hover:bg-white/10" asChild>
                <a href="/how-it-works">See How It Works</a>
              </Button>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-3xl font-bold text-brand-orange">40%</p>
                <p className="text-gray-400">Higher conversions</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-brand-yellow">60%</p>
                <p className="text-gray-400">Higher efficiency</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-brand-pink">35%</p>
                <p className="text-gray-400">Lower costs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
