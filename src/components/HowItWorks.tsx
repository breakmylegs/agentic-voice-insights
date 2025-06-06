
import { ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Voice Input",
      description: "Customer speaks naturally to the AI assistant through phone or digital channels",
      detail: "Advanced speech recognition with noise cancellation and accent adaptation"
    },
    {
      number: "02", 
      title: "AI Processing",
      description: "Natural language understanding extracts intent and context from the conversation",
      detail: "Machine learning models trained on telecoms-specific scenarios and terminology"
    },
    {
      number: "03",
      title: "API Integration",
      description: "Seamless connection to your existing CRM, billing, and network management systems",
      detail: "Real-time data access with secure authentication and audit trails"
    },
    {
      number: "04",
      title: "Intelligent Response",
      description: "Personalized solutions delivered through natural voice synthesis",
      detail: "Context-aware responses with escalation to human agents when needed"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-gray-800/50 to-slate-800/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Powered by AWS infrastructure with enterprise-grade security and scalability built for telecoms operations.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Connecting line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform translate-x-4 z-0">
                    <ArrowRight className="absolute -right-2 -top-2 h-4 w-4 text-purple-500" />
                  </div>
                )}
                
                <div className="relative z-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-bold text-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {step.number}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    
                    <p className="text-sm text-gray-400 italic">
                      {step.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* AWS Badge */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-3 bg-gray-800/50 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-600">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-yellow-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">AWS</span>
              </div>
              <span className="text-gray-300 font-medium">Hosted on Amazon Web Services</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
