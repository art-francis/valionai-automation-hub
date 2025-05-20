
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  BriefcaseBusiness, 
  FileText, 
  Database, 
  Bot, 
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const SolutionsPage = () => {
  const solutions = [
    {
      title: "Workflow Automation",
      description: "Streamline repetitive tasks and business processes with intelligent automation that saves time and reduces errors.",
      detailedDescription: "Our workflow automation solutions analyze your existing processes and identify bottlenecks and inefficiencies. We then create custom automation workflows that integrate with your existing tools, reducing manual work and eliminating error-prone tasks.",
      benefits: [
        "Reduce manual data entry by up to 80%",
        "Accelerate approval processes",
        "Automatic document generation and processing",
        "Custom alerts and notifications"
      ],
      icon: <BriefcaseBusiness className="h-10 w-10 text-white" />,
      color: "bg-blue-600",
    },
    {
      title: "AI Content Generation",
      description: "Create high-quality, customized content at scale with AI tools trained on your brand voice and industry knowledge.",
      detailedDescription: "Our AI content generation tools are trained on your specific brand voice, industry knowledge, and content requirements. From blog posts and social media content to product descriptions and marketing copy, we help you create consistent, high-quality content at scale.",
      benefits: [
        "Generate SEO-optimized blog content",
        "Create consistent product descriptions",
        "Draft email campaigns and newsletters",
        "Localize content for global markets"
      ],
      icon: <FileText className="h-10 w-10 text-white" />,
      color: "bg-blue-500",
    },
    {
      title: "Data Integration",
      description: "Connect and synchronize data across your business systems for better insights and decision-making.",
      detailedDescription: "Our data integration solutions connect disparate systems, databases, and applications to create a unified data ecosystem. By breaking down data silos, we help you gain comprehensive insights and make better business decisions based on complete information.",
      benefits: [
        "Real-time data synchronization",
        "Automated reporting and dashboards",
        "Cross-platform data validation",
        "Custom API development and integration"
      ],
      icon: <Database className="h-10 w-10 text-white" />,
      color: "bg-blue-400",
    },
    {
      title: "Custom Chatbots",
      description: "Engage customers and automate support with intelligent conversational AI tailored to your specific needs.",
      detailedDescription: "Our custom chatbots are designed to handle customer inquiries, support requests, and common transactions with human-like conversation abilities. Each chatbot is built specifically for your business needs, and continuously improves through machine learning.",
      benefits: [
        "24/7 customer support automation",
        "Personalized customer interactions",
        "Seamless handoff to human agents when needed",
        "Multi-channel deployment (website, messaging apps, etc.)"
      ],
      icon: <Bot className="h-10 w-10 text-white" />,
      color: "bg-blue-300",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-6 md:px-12 bg-gray-50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Solutions
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                AI-powered automation solutions designed to transform your business operations and drive measurable results.
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Solutions Section */}
        <section className="py-16 px-6 md:px-12 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-12">
              {solutions.map((solution, index) => (
                <div key={index} className="flex flex-col lg:flex-row gap-8 items-start">
                  <div className={`${solution.color} p-6 rounded-xl self-start lg:w-1/4 w-full`}>
                    <div className="flex flex-col text-white">
                      {solution.icon}
                      <h2 className="text-2xl font-bold mt-4">{solution.title}</h2>
                      <p className="mt-2 text-white/90">{solution.description}</p>
                    </div>
                  </div>
                  
                  <div className="lg:w-3/4 w-full">
                    <Card>
                      <CardHeader>
                        <CardTitle>{solution.title}</CardTitle>
                        <CardDescription>
                          {solution.detailedDescription}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <h3 className="font-semibold mb-3">Key Benefits:</h3>
                        <ul className="space-y-2">
                          {solution.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <ArrowRight className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button asChild>
                          <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Request a Demo</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 md:px-12 bg-blue-50">
          <div className="container mx-auto max-w-7xl text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to transform your business?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Schedule a free consultation to discuss how our AI solutions can address your specific business challenges.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Book a Free Consultation</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SolutionsPage;
