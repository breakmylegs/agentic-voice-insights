
const ConversationDemo = () => {
  const conversation = [
    {
      speaker: "AI Assistant",
      message: "Hi, I'm your BT virtual assistant. How can I help you today?",
      isAI: true,
      timestamp: "00:01"
    },
    {
      speaker: "Customer",
      message: "I need to cancel my broadband service at my Windsor address. I'm moving next month.",
      isAI: false,
      timestamp: "00:05"
    },
    {
      speaker: "AI Assistant",
      message: "I can help you with that cancellation. Let me pull up your account details for the Windsor address. I see you have our Superfast Fibre package. Can you confirm your moving date?",
      isAI: true,
      timestamp: "00:12"
    },
    {
      speaker: "Customer",
      message: "Yes, I'm moving on March 15th. Will there be any cancellation fees?",
      isAI: false,
      timestamp: "00:18"
    },
    {
      speaker: "AI Assistant",
      message: "Good news! Since you've been with us for over 18 months, there are no early termination fees. I can schedule your service to end on March 15th and arrange for equipment collection. Would you like me to also check if we can serve your new address?",
      isAI: true,
      timestamp: "00:25"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-gray-800/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Voice Conversation Flow
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Listen to how our AI understands natural speech, processes context, and provides personalized solutions through voice interaction.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-700">
            {/* Voice indicator header */}
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center gap-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full px-6 py-3 border border-blue-500/30">
                <div className="flex space-x-1">
                  <div className="w-2 h-6 bg-blue-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-4 bg-blue-400 rounded-full animate-pulse delay-75"></div>
                  <div className="w-2 h-8 bg-purple-400 rounded-full animate-pulse delay-150"></div>
                  <div className="w-2 h-3 bg-purple-400 rounded-full animate-pulse delay-300"></div>
                  <div className="w-2 h-6 bg-blue-400 rounded-full animate-pulse delay-500"></div>
                </div>
                <span className="text-white font-medium">🎧 Voice Conversation Transcript</span>
              </div>
            </div>
            
            <div className="space-y-6">
              {conversation.map((item, index) => (
                <div 
                  key={index}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.5}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                      item.isAI 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' 
                        : 'bg-gray-600 text-gray-200'
                    }`}>
                      {item.isAI ? 'AI' : '👤'}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-medium text-white">{item.speaker}</span>
                        <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">{item.timestamp}</span>
                        {item.isAI && (
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
                            <span className="text-xs text-green-400">Speaking</span>
                          </div>
                        )}
                      </div>
                      
                      <div className={`rounded-lg p-4 ${
                        item.isAI 
                          ? 'bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20' 
                          : 'bg-gray-800/50 border border-gray-600/50'
                      }`}>
                        <p className="text-gray-200 leading-relaxed">{item.message}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Voice processing indicator */}
              <div className="flex items-start gap-4 animate-pulse">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-sm font-bold text-white">
                  AI
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-medium text-white">AI Assistant</span>
                    <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">00:30</span>
                    <div className="flex items-center gap-1">
                      <div className="w-1 h-1 bg-yellow-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-yellow-400">Processing speech...</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-lg p-4">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
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
