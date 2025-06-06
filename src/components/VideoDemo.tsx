
import { Button } from "@/components/ui/button";
import { Video } from "lucide-react";

const VideoDemo = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            See AI Voice Assistant in Action
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience how our AI handles real customer interactions with natural language processing and intelligent responses.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl">
            {/* Video placeholder */}
            <div className="relative aspect-video bg-gray-700 rounded-xl overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-purple-600/30 flex items-center justify-center">
                <Button 
                  size="lg" 
                  className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/30 rounded-full p-6 transition-all duration-300 group-hover:scale-110"
                >
                  <Video className="h-8 w-8" />
                </Button>
              </div>
              
              {/* Overlay text */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-white font-semibold">
                    🎧 Customer Service Demo: "Help me upgrade my broadband plan"
                  </p>
                  <p className="text-gray-300 text-sm mt-1">
                    Duration: 2:35 • Hosted on AWS
                  </p>
                </div>
              </div>
            </div>
            
            {/* Demo stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">95%</div>
                <div className="text-gray-300">Resolution Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">2.1s</div>
                <div className="text-gray-300">Average Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">24/7</div>
                <div className="text-gray-300">Availability</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoDemo;
