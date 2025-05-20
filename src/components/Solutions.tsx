
import { BriefcaseBusiness, FileText, Database, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Solutions = () => {
  const solutions = [
    {
      title: "Workflow Automation",
      description: "Streamline repetitive tasks and business processes with intelligent automation that saves time and reduces errors.",
      icon: <BriefcaseBusiness className="h-10 w-10 text-white" />,
      color: "bg-blue-600",
    },
    {
      title: "AI Content Generation",
      description: "Create high-quality, customized content at scale with AI tools trained on your brand voice and industry knowledge.",
      icon: <FileText className="h-10 w-10 text-white" />,
      color: "bg-blue-500",
    },
    {
      title: "Data Integration",
      description: "Connect and synchronize data across your business systems for better insights and decision-making.",
      icon: <Database className="h-10 w-10 text-white" />,
      color: "bg-blue-400",
    },
    {
      title: "Custom Chatbots",
      description: "Engage customers and automate support with intelligent conversational AI tailored to your specific needs.",
      icon: <Bot className="h-10 w-10 text-white" />,
      color: "bg-blue-300",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful AI-driven services to transform your business operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6 p-8 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className={`${solution.color} p-4 rounded-xl self-start`}>
                {solution.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {solution.description}
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link to="/solutions" onClick={() => window.scrollTo(0, 0)}>Learn more</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
