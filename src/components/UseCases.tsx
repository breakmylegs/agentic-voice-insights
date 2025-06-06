
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Settings, Users, Calendar } from "lucide-react";

const UseCases = () => {
  const useCases = [
    {
      icon: Phone,
      title: "Billing & Usage Inquiries",
      description: "Instantly check account balances, explain charges, set up payment plans, and provide detailed usage breakdowns with natural language understanding."
    },
    {
      icon: Settings,
      title: "Plan Upgrades & Changes",
      description: "Compare packages, process upgrades, modify services, and handle contract renewals while ensuring customers get the best value for their needs."
    },
    {
      icon: Users,
      title: "Technical Support",
      description: "Diagnose connectivity issues, guide through troubleshooting steps, schedule engineer visits, and provide real-time network status updates."
    },
    {
      icon: Calendar,
      title: "Account Management",
      description: "Process address changes, handle cancellations with retention offers, manage family accounts, and coordinate service transfers seamlessly."
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Telecoms Use Cases
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Designed specifically for the telecommunications industry with deep understanding of customer needs and operational workflows.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((useCase, index) => (
            <Card 
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 group"
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                  <useCase.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-white">
                  {useCase.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed text-center">
                  {useCase.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
