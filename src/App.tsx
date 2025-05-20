import React from 'react';
import CardDesigner from './components/CardDesigner';
import { Wallet } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <header className="w-full bg-gray-800/50 backdrop-blur-lg border-b border-gray-700/50 py-4 px-6">
        <div className="flex items-center gap-2">
          <Wallet className="w-8 h-8 text-purple-400" />
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            SBT Card Designer
          </h1>
        </div>
      </header>
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <CardDesigner />
      </main>
      
      <footer className="w-full bg-gray-800/50 backdrop-blur-lg border-t border-gray-700/50 py-4 px-6 text-center text-gray-400 text-sm">
        <p>Not affiliated with any blockchain. Just for fun! 🎮</p>
      </footer>
    </div>
  );
}

export default App;