import React, { useState } from 'react';
import CardDesigner from './components/CardDesigner';
import { Wallet, Copy, Check, Lock, Shield, Zap, Twitter, Send, Sparkles } from 'lucide-react';
import { defaultTemplate } from './data/cardTemplates';

function App() {
  const [copied, setCopied] = useState(false);
  const [isChecking, setIsChecking] = useState(false);
  const [isApproved, setIsApproved] = useState(false);

  const copyContractAddress = async () => {
    try {
      await navigator.clipboard.writeText(defaultTemplate.contractAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const checkApproval = () => {
    setIsChecking(true);
    // Simulate checking process
    setTimeout(() => {
      setIsChecking(false);
      setIsApproved(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#0A0118] flex flex-col">
      <header className="w-full bg-black/20 backdrop-blur-xl border-b border-purple-500/10 py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Wallet className="w-8 h-8 text-[#00F5FF]" />
            <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00F5FF] to-[#FF00E5]">
              SBT Token
            </h1>
          </div>
        </div>
      </header>

      <div className="w-full bg-black/30 border-b border-purple-500/10 py-3">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <span className="text-sm text-[#00F5FF]">Contract Address:</span>
            <div className="flex items-center gap-2 flex-1 w-full bg-black/40 rounded-lg px-3 py-2">
              <code className="flex-1 font-mono text-sm text-[#FF00E5] overflow-x-auto">
                {defaultTemplate.contractAddress}
              </code>
              <button
                onClick={copyContractAddress}
                className="flex items-center justify-center w-8 h-8 rounded-lg hover:bg-white/5 transition-colors"
                title="Copy contract address"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-green-400" />
                ) : (
                  <Copy className="w-4 h-4 text-[#00F5FF]" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-4 relative">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://i.postimg.cc/66LzcrtG/sbtcardcollagefina-YELLOWBACKGROUND.png')`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'repeat-x',
            opacity: 0.4
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="flex items-center gap-2 bg-black/30 hover:bg-black/50 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 border border-purple-500/10 hover:border-[#00F5FF]/30 shadow-[0_0_20px_rgba(0,245,255,0.1)] hover:shadow-[0_0_30px_rgba(0,245,255,0.2)] backdrop-blur-sm"
            >
              <Twitter className="w-5 h-5 text-[#00F5FF]" />
              <span>Follow on X</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 bg-black/30 hover:bg-black/50 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 border border-purple-500/10 hover:border-[#00F5FF]/30 shadow-[0_0_20px_rgba(0,245,255,0.1)] hover:shadow-[0_0_30px_rgba(0,245,255,0.2)] backdrop-blur-sm"
            >
              <Send className="w-5 h-5 text-[#00F5FF]" />
              <span>Join Telegram</span>
            </a>
            <a
              href="https://dexscreener.com"
              className="flex items-center gap-2 bg-black/30 hover:bg-black/50 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 border border-purple-500/10 hover:border-[#00F5FF]/30 shadow-[0_0_20px_rgba(0,245,255,0.1)] hover:shadow-[0_0_30px_rgba(0,245,255,0.2)] backdrop-blur-sm"
            >
              <img 
                src="https://dexscreener.com/favicon.png" 
                alt="DEX Screener" 
                className="w-5 h-5"
              />
              <span>View Chart</span>
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-8">
        {!isApproved ? (
          <div className="max-w-lg mx-auto text-center">
            <div className="bg-black/20 rounded-2xl p-8 border border-purple-500/10 shadow-[0_0_50px_rgba(0,245,255,0.1)]">
              <Sparkles className="w-16 h-16 text-[#00F5FF] mx-auto mb-6 animate-pulse" />
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00F5FF] to-[#FF00E5] mb-4">
                Check Your SBT Card Eligibility
              </h2>
              <p className="text-[#B4B7FF] mb-8">
                Our advanced AI system will analyze your wallet to determine if you're eligible for an exclusive SBT Card.
              </p>
              <button
                onClick={checkApproval}
                disabled={isChecking}
                className="w-full bg-gradient-to-r from-[#00F5FF] to-[#FF00E5] hover:from-[#00F5FF] hover:to-[#FF00E5] text-black font-bold rounded-lg py-3 px-6 transition-all duration-300 hover:scale-105 disabled:opacity-75 disabled:cursor-wait shadow-[0_0_20px_rgba(0,245,255,0.3)] hover:shadow-[0_0_30px_rgba(0,245,255,0.4)]"
              >
                {isChecking ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-5 h-5 border-4 border-black/30 border-t-black rounded-full animate-spin" />
                    Checking eligibility...
                  </span>
                ) : (
                  'Check Eligibility'
                )}
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="max-w-4xl mx-auto mb-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-[#00F5FF] to-[#FF00E5] text-transparent bg-clip-text">
                  Congratulations! You're Approved! 🎉
                </h2>
                <p className="text-[#B4B7FF] text-lg mb-6">
                  Welcome to the exclusive club of SBT Card holders. Customize your card below!
                </p>
              </div>
            </div>

            <CardDesigner />

            <div className="max-w-4xl mx-auto mt-16">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
                <div className="bg-black/20 rounded-xl p-6 border border-purple-500/10 transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,245,255,0.2)]">
                  <Lock className="w-8 h-8 text-[#00F5FF] mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Permanently Locked</h3>
                  <p className="text-[#B4B7FF]">Liquidity permanently locked for maximum security</p>
                </div>
                <div className="bg-black/20 rounded-xl p-6 border border-purple-500/10 transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,245,255,0.2)]">
                  <Shield className="w-8 h-8 text-[#FF00E5] mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Authority Revoked</h3>
                  <p className="text-[#B4B7FF]">Mint and freeze authority permanently revoked</p>
                </div>
                <div className="bg-black/20 rounded-xl p-6 border border-purple-500/10 transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,245,255,0.2)]">
                  <Zap className="w-8 h-8 text-yellow-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Zero Tax</h3>
                  <p className="text-[#B4B7FF]">0% buy and sell tax for maximum efficiency</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-500/5 via-[#FF00E5]/5 to-[#00F5FF]/5 rounded-xl p-6 border border-purple-500/10 mb-12 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,245,255,0.1)]">
                <h3 className="text-xl font-semibold text-white mb-4">Tokenomics</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="text-center transform transition-all duration-300 hover:scale-105">
                    <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00F5FF] to-[#FF00E5]">1B</div>
                    <div className="text-sm text-[#B4B7FF]">Total Supply</div>
                  </div>
                  <div className="text-center transform transition-all duration-300 hover:scale-105">
                    <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00F5FF] to-[#FF00E5]">10%</div>
                    <div className="text-sm text-[#B4B7FF]">Monthly Milestone Burns</div>
                  </div>
                  <div className="text-center transform transition-all duration-300 hover:scale-105">
                    <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00F5FF] to-[#FF00E5]">0%</div>
                    <div className="text-sm text-[#B4B7FF]">Tax</div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      
      <footer className="w-full bg-black/20 backdrop-blur-xl border-t border-purple-500/10 py-6 px-6 mt-auto">
        <div className="container mx-auto text-center">
          <p className="text-[#B4B7FF] text-sm">
            SBT Token
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;