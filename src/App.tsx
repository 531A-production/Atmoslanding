import React from 'react';
import { Logo } from './components/Logo';
import { FeatureCard } from './components/FeatureCard';
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { 
  MessageSquare, 
  Wallet, 
  Repeat, 
  Shield, 
  Zap, 
  Users,
  ArrowRight,
  Github,
  Twitter,
  Send,
  Sparkles,
  Code2,
  Database,
  Lock
} from 'lucide-react';

export default function App() {
  const features = [
    {
      icon: <MessageSquare size={32} />,
      title: "Telegram Integration",
      description: "Brings blockchain functionality directly into Telegram, where users already spend time, eliminating the need for separate wallet applications.",
      highlights: [
        "No separate app downloads required",
        "Chat-based commands for easy interaction",
        "Seamless user experience"
      ]
    },
    {
      icon: <Wallet size={32} />,
      title: "Simplified Wallet Management",
      description: "Create and manage your Supra L1 wallets through simple chat commands, making blockchain interaction approachable for newcomers.",
      highlights: [
        "Easy wallet creation",
        "Balance checking across multiple tokens",
        "Secure key management"
      ]
    },
    {
      icon: <Repeat size={32} />,
      title: "Token Operations",
      description: "Perform complex DeFi operations like token swaps through conversational interactions, making them accessible to non-technical users.",
      highlights: [
        "Token transfers",
        "Token swaps",
        "Faucet claims with cooldown tracking"
      ]
    },
    {
      icon: <Shield size={32} />,
      title: "Secure Transactions",
      description: "Built on Supra L1 with robust security measures, including session management and careful parameter handling for all operations.",
      highlights: [
        "Raw transaction support using Supra L1 SDK",
        "Multi-step operation tracking",
        "Secure transaction handling"
      ]
    }
  ];

  const challenges = [
    {
      icon: <Database size={24} />,
      title: "Session Management",
      description: "Implemented robust session system that tracks multi-step operation states for complex transactions like token swaps."
    },
    {
      icon: <Code2 size={24} />,
      title: "Transaction Handling",
      description: "Developed careful parameter handling and type conversion system for converting user inputs into blockchain transactions."
    },
    {
      icon: <Lock size={24} />,
      title: "Cooldown Management",
      description: "Built faucet cooldown system with time tracking and remaining window calculations using helper functions."
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#8B5CF6]/15 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-[#8B5CF6]/5 rounded-full blur-2xl animate-pulse-slow"></div>
      </div>

      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Logo />
            <div className="flex items-center gap-6">
              <Badge variant="outline" className="border-[#8B5CF6]/50 text-[#8B5CF6] bg-[#8B5CF6]/5 backdrop-blur-sm px-4 py-2">
                <Zap size={14} className="mr-2" />
                Live on Supra L1
              </Badge>
              <Button 
                variant="outline" 
                size="sm" 
                className="border-[#8B5CF6]/50 text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white transition-all duration-300 hover:glow-purple"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#8B5CF6]/10 to-[#8B5CF6]/5 border border-[#8B5CF6]/30 rounded-full px-6 py-3 mb-8 backdrop-blur-sm">
              <Send size={18} className="text-[#8B5CF6]" />
              <span className="text-[#8B5CF6] font-medium">Telegram Bot for Supra Blockchain</span>
              <Sparkles size={16} className="text-[#8B5CF6] animate-pulse" />
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight">
              Blockchain Made
              <span className="block bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-[#8B5CF6] bg-clip-text text-transparent text-glow-purple-strong animate-pulse-slow">
                Simple & Accessible
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
              Supratmos brings the power of Supra L1 blockchain directly to Telegram. 
              Create wallets, manage tokens, and perform DeFi operations through simple chat commands.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="bg-[#8B5CF6] hover:bg-[#7c3aed] text-white glow-purple-strong text-lg px-8 py-4 h-auto transition-all duration-300 hover:scale-105"
              >
                <Send size={20} className="mr-3" />
                Start Using Bot
                <ArrowRight size={20} className="ml-3" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-[#8B5CF6]/50 text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white text-lg px-8 py-4 h-auto transition-all duration-300 hover:glow-purple"
              >
                <Github size={20} className="mr-3" />
                View Documentation
              </Button>
            </div>
          </div>

          {/* Hero Banner/Demo */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/20 via-transparent to-[#8B5CF6]/20 blur-3xl"></div>
            <Card className="relative bg-gradient-to-br from-card/80 to-card/40 border-[#8B5CF6]/30 backdrop-blur-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/5 to-transparent"></div>
              <CardContent className="relative p-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-6">
                        Experience DeFi in Telegram
                      </h3>
                      <p className="text-lg text-muted-foreground mb-8">
                        Simple commands, powerful results. No technical knowledge required.
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      {[
                        { cmd: "/create_wallet", desc: "Create new Supra wallet" },
                        { cmd: "/balance", desc: "Check token balances" },
                        { cmd: "/swap SUPRA USDC 100", desc: "Swap tokens instantly" },
                        { cmd: "/faucet", desc: "Claim test tokens" }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-[#8B5CF6]/5 border border-[#8B5CF6]/20 hover:bg-[#8B5CF6]/10 transition-all duration-300">
                          <div className="w-3 h-3 bg-[#8B5CF6] rounded-full glow-purple animate-pulse"></div>
                          <code className="text-[#8B5CF6] font-mono font-medium">{item.cmd}</code>
                          <span className="text-muted-foreground">- {item.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <div className="relative group">
                      <div className="w-80 h-80 bg-gradient-to-br from-[#8B5CF6]/30 via-[#8B5CF6]/20 to-[#A855F7]/30 rounded-3xl border border-[#8B5CF6]/40 flex items-center justify-center backdrop-blur-sm group-hover:scale-105 transition-transform duration-500">
                        <Send size={120} className="text-[#8B5CF6] glow-purple-strong animate-float" />
                      </div>
                      
                      {/* Floating decorative elements */}
                      <div className="absolute -top-6 -right-6 w-12 h-12 bg-[#8B5CF6] rounded-full glow-purple-strong animate-bounce"></div>
                      <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-[#A855F7] rounded-full glow-purple animate-pulse"></div>
                      <div className="absolute top-1/2 -left-8 w-6 h-6 bg-[#8B5CF6] rounded-full glow-purple animate-ping"></div>
                      <div className="absolute top-1/4 -right-4 w-4 h-4 bg-[#8B5CF6] rounded-full glow-purple animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#8B5CF6]/5 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 text-[#8B5CF6] mb-6">
              <Sparkles size={20} />
              <span className="font-medium">Features</span>
              <Sparkles size={20} />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Why Choose Supratmos?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We solve key problems in blockchain user experience, making DeFi accessible to everyone through Telegram.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  highlights={feature.highlights}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Challenges Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-[#8B5CF6]/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 text-[#8B5CF6] mb-6">
              <Code2 size={20} />
              <span className="font-medium">Technical Excellence</span>
              <Code2 size={20} />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Built for Performance
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Robust architecture with careful attention to security and user experience.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => (
              <Card key={index} className="bg-card/50 border-[#8B5CF6]/20 backdrop-blur-sm hover:bg-card/70 hover:border-[#8B5CF6]/40 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#8B5CF6]/20 to-[#8B5CF6]/10 border border-[#8B5CF6]/30 rounded-xl flex items-center justify-center mb-6 group-hover:glow-purple transition-all duration-300">
                    <div className="text-[#8B5CF6]">{challenge.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {challenge.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {challenge.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/10 via-transparent to-[#8B5CF6]/10"></div>
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-[#8B5CF6] mb-8">
            <Sparkles size={20} className="animate-pulse" />
            <span className="font-medium">Get Started Today</span>
            <Sparkles size={20} className="animate-pulse" />
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Join thousands of users already using Supratmos to interact with Supra blockchain through Telegram.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-[#8B5CF6] hover:bg-[#7c3aed] text-white glow-purple-strong text-lg px-10 py-5 h-auto transition-all duration-300 hover:scale-105"
            >
              <Send size={22} className="mr-3" />
              Open Telegram Bot
              <ArrowRight size={22} className="ml-3" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-[#8B5CF6]/50 text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white text-lg px-10 py-5 h-auto transition-all duration-300 hover:glow-purple"
            >
              <Github size={22} className="mr-3" />
              View Source Code
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-[#8B5CF6]/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center lg:items-start">
              <Logo className="mb-4" />
              <p className="text-muted-foreground text-center lg:text-left max-w-md">
                Making DeFi accessible through Telegram. Built on Supra L1 blockchain with security and simplicity in mind.
              </p>
            </div>
            
            <div className="flex flex-col items-center gap-6">
              <div className="flex items-center gap-6">
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-[#8B5CF6] transition-colors duration-300">
                  <Twitter size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-[#8B5CF6] transition-colors duration-300">
                  <Github size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-[#8B5CF6] transition-colors duration-300">
                  <Send size={20} />
                </Button>
              </div>
              
              <div className="text-center">
                <p className="text-muted-foreground text-sm mb-2">
                  © 2025 Supratmos. All rights reserved.
                </p>
                <p className="text-[#8B5CF6] text-xs">
                  Built with ❤️ on Supra L1
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}