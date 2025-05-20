
import { CheckCircle, TrendingUp, Zap, BarChart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Benefits = () => {
  const benefits = [
    {
      title: "Unlock productivity",
      description: "Intelligent workflow automation that saves hours of manual work",
      icon: <TrendingUp className="h-10 w-10 text-blue-600" />,
    },
    {
      title: "Reduce costs and errors",
      description: "Reliable AI solutions that improve accuracy and cut operational expenses",
      icon: <BarChart className="h-10 w-10 text-blue-600" />,
    },
    {
      title: "Seamless integration",
      description: "Connect AI with your existing tools without disrupting workflows",
      icon: <Zap className="h-10 w-10 text-blue-600" />,
    },
    {
      title: "Expert support & ROI",
      description: "Get guidance and measurable return on your automation investment",
      icon: <CheckCircle className="h-10 w-10 text-blue-600" />,
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            AI Benefits That Drive Growth
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leverage AI automation to transform your business operations and outcomes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-full bg-blue-50">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
