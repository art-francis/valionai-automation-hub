
import { ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Consultation & Needs Analysis",
      description: "We analyze your business processes and identify automation opportunities that will deliver the most value.",
    },
    {
      number: "02",
      title: "Tailored Automation Setup",
      description: "Our experts implement custom AI solutions designed specifically for your business requirements.",
    },
    {
      number: "03",
      title: "Ongoing Support & Optimization",
      description: "We continuously monitor, maintain, and improve your AI systems to ensure optimal performance.",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined process brings powerful AI automation to your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-md relative"
            >
              <div className="text-5xl font-bold text-blue-100 mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {step.description}
              </p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="h-6 w-6 text-blue-400" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
