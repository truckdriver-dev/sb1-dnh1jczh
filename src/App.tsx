import React from 'react';
import { Clock, Sparkles } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0118] via-[#1a0b2e] to-[#16213e] flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00F5FF]/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FF00E5]/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500" />
        </div>

        {/* Main content */}
        <div className="relative z-10">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <Sparkles className="w-24 h-24 text-[#00F5FF] animate-pulse" />
              <div className="absolute inset-0 w-24 h-24 bg-[#00F5FF]/20 rounded-full blur-xl animate-ping" />
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-[#00F5FF] via-[#FF00E5] to-[#00F5FF] text-transparent bg-clip-text animate-pulse">
            Coming Soon
          </h1>

          <p className="text-xl md:text-2xl text-[#B4B7FF] mb-8 leading-relaxed">
            Something amazing is being built here.
            <br />
            Stay tuned for the big reveal.
          </p>

          <div className="flex items-center justify-center gap-3 text-[#00F5FF] mb-12">
            <Clock className="w-6 h-6 animate-spin" />
            <span className="text-lg font-medium">Under Development</span>
          </div>

          {/* Decorative elements */}
          <div className="flex justify-center space-x-4">
            <div className="w-3 h-3 bg-[#00F5FF] rounded-full animate-bounce" />
            <div className="w-3 h-3 bg-[#FF00E5] rounded-full animate-bounce delay-100" />
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce delay-200" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;