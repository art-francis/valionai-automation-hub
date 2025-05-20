
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6 md:px-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Smarter Automation.
              <span className="text-blue-600 block">Real Business Value.</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              AI-powered automation for agencies and businesses seeking measurable impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link to="/contact">
                  Book a Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/solutions">Explore Solutions</Link>
              </Button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="absolute -z-10 w-72 h-72 bg-blue-300/30 rounded-full blur-3xl top-0 right-0"></div>
            <div className="absolute -z-10 w-72 h-72 bg-lime-300/20 rounded-full blur-3xl -bottom-10 -left-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
              alt="AI Technology" 
              className="w-full h-auto rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
