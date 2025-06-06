
const ConversationDemo = () => {
  const conversation = [
    {
      speaker: "AI Assistant",
      message: "Hi, I'm your BT virtual assistant. How can I help you today?",
      isAI: true,
      timestamp: "Just now"
    },
    {
      speaker: "Customer",
      message: "I need to cancel my broadband service at my Windsor address. I'm moving next month.",
      isAI: false,
      timestamp: "Just now"
    },
    {
      speaker: "AI Assistant",
      message: "I can help you with that cancellation. Let me pull up your account details for the Windsor address. I see you have our Superfast Fibre package. Can you confirm your moving date?",
      isAI: true,
      timestamp: "Just now"
    },
    {
      speaker: "Customer",
      message: "Yes, I'm moving on March 15th. Will there be any cancellation fees?",
      isAI: false,
      timestamp: "Just now"
    },
    {
      speaker: "AI Assistant",
      message: "Good news! Since you've been with us for over 18 months, there are no early termination fees. I can schedule your service to end on March 15th and arrange for equipment collection. Would you like me to also check if we can serve your new address?",
      isAI: true,
      timestamp: "Just now"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-gray-800/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Natural Conversation Flow
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our AI understands context, remembers details, and provides personalized solutions just like your best human agents.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-700">
            <div className="space-y-6">
              {conversation.map((item, index) => (
                <div 
                  key={index}
                  className={`flex ${item.isAI ? 'justify-start' : 'justify-end'} animate-fade-in`}
                  style={{ animationDelay: `${index * 0.5}s` }}
                >
                  <div className={`max-w-[80%] ${item.isAI ? 'order-1' : 'order-2'}`}>
                    <div className={`flex items-center gap-2 mb-2 ${item.isAI ? '' : 'justify-end'}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                        item.isAI 
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' 
                          : 'bg-gray-600 text-gray-200'
                      }`}>
                        {item.isAI ? 'AI' : 'C'}
                      </div>
                      <span className="text-sm text-gray-400">{item.speaker}</span>
                      <span className="text-xs text-gray-500">{item.timestamp}</span>
                    </div>
                    
                    <div className={`rounded-2xl p-4 ${
                      item.isAI 
                        ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30' 
                        : 'bg-gray-700/50 border border-gray-600'
                    }`}>
                      <p className="text-white leading-relaxed">{item.message}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Typing indicator */}
              <div className="flex justify-start animate-pulse">
                <div className="max-w-[80%]">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-xs font-bold text-white">
                      AI
                    </div>
                    <span className="text-sm text-gray-400">AI Assistant</span>
                    <span className="text-xs text-gray-500">typing...</span>
                  </div>
                  <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-4">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConversationDemo;
