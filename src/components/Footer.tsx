
import { Separator } from "@/components/ui/separator";
import { Phone, Link, Calendar, Users } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900/80 backdrop-blur-sm border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <h3 className="text-xl font-bold text-white">TelecomsAI</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Revolutionizing customer service in telecommunications with intelligent voice AI powered by AWS infrastructure.
            </p>
          </div>
          
          {/* Solutions */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Solutions</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white transition-colors cursor-pointer">Voice AI Assistant</li>
              <li className="hover:text-white transition-colors cursor-pointer">Billing Automation</li>
              <li className="hover:text-white transition-colors cursor-pointer">Technical Support</li>
              <li className="hover:text-white transition-colors cursor-pointer">Account Management</li>
            </ul>
          </div>
          
          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white transition-colors cursor-pointer">Documentation</li>
              <li className="hover:text-white transition-colors cursor-pointer">API Reference</li>
              <li className="hover:text-white transition-colors cursor-pointer">Case Studies</li>
              <li className="hover:text-white transition-colors cursor-pointer">Support</li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="h-4 w-4" />
                <span>+44 20 7946 0958</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Link className="h-4 w-4" />
                <span>hello@telecomsai.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Calendar className="h-4 w-4" />
                <span>Schedule a Demo</span>
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="my-8 bg-gray-800" />
        
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © 2024 TelecomsAI. All rights reserved. Powered by Amazon Web Services.
          </div>
          
          <div className="flex space-x-6">
            <div className="flex items-center space-x-4 text-gray-400">
              <span className="text-sm">Follow us:</span>
              <div className="flex space-x-3">
                <div className="w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center cursor-pointer transition-colors">
                  <Link className="h-4 w-4" />
                </div>
                <div className="w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center cursor-pointer transition-colors">
                  <Users className="h-4 w-4" />
                </div>
                <div className="w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center cursor-pointer transition-colors">
                  <Calendar className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
