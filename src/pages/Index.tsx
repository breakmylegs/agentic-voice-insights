
import Hero from "@/components/Hero";
import VideoDemo from "@/components/VideoDemo";
import ConversationDemo from "@/components/ConversationDemo";
import UseCases from "@/components/UseCases";
import HowItWorks from "@/components/HowItWorks";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
      <Hero />
      <VideoDemo />
      <ConversationDemo />
      <UseCases />
      <HowItWorks />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
