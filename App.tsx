
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CakeSection from './components/CakeSection';
import MiniGame from './components/MiniGame';
import PersonalMessage from './components/PersonalMessage';
import GiftReveal from './components/GiftReveal';
import AiWishes from './components/AiWishes';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isCelebrationStarted, setIsCelebrationStarted] = useState(false);
  const [isGameFinished, setIsGameFinished] = useState(false);

  const startCelebration = () => {
    setIsCelebrationStarted(true);
    if ((window as any).confetti) {
      (window as any).confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff69b4', '#ffd700', '#ffffff', '#ffb6c1']
      });
    }
  };

  const handleGameFinish = () => {
    setIsGameFinished(true);
    if ((window as any).confetti) {
      (window as any).confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.5 },
        colors: ['#ff0000', '#ff69b4', '#92400e']
      });
    }
  };

  return (
    <div className="min-h-screen bg-rose-50 text-gray-800 selection:bg-rose-200">
      {!isCelebrationStarted ? (
        <div className="h-screen flex flex-col items-center justify-center bg-[#fffafa] overflow-hidden relative">
          {/* Animated Background Ornaments */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30">
            <div className="absolute top-10 left-10 text-4xl animate-bounce" style={{ animationDuration: '3s' }}>✨</div>
            <div className="absolute top-1/4 right-20 text-3xl animate-float" style={{ animationDelay: '1s' }}>💖</div>
            <div className="absolute bottom-1/4 left-20 text-4xl animate-float" style={{ animationDelay: '2s' }}>🌸</div>
            <div className="absolute bottom-10 right-10 text-3xl animate-bounce" style={{ animationDuration: '4s' }}>✨</div>
          </div>
          
          <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-rose-100 rounded-full blur-[120px] opacity-40 animate-pulse"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-rose-200 rounded-full blur-[140px] opacity-30"></div>
          
          <div className="text-center space-y-12 px-4 relative z-10 max-w-lg">
            <div className="relative inline-block mb-4">
              <div className="absolute -inset-4 bg-rose-200 rounded-full blur-xl opacity-50 animate-pulse"></div>
              <span className="relative text-9xl">🎁</span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-serif text-rose-600 drop-shadow-md">
                Happy <br/><span className="italic font-cursive">Birthday!</span>
              </h1>
              <div className="h-1 w-32 bg-rose-300 mx-auto rounded-full"></div>
              <p className="text-lg text-gray-400 font-light tracking-[0.3em] uppercase">Something special awaits you</p>
            </div>

            <button
              onClick={startCelebration}
              className="group relative px-14 py-6 bg-rose-500 hover:bg-rose-600 text-white rounded-full text-2xl font-semibold shadow-[0_15px_35px_rgba(244,63,94,0.4)] transition-all hover:scale-110 active:scale-95 flex items-center gap-4 mx-auto overflow-hidden"
            >
              <span className="relative z-10">Step Inside</span>
              <span className="relative z-10 text-3xl group-hover:rotate-12 transition-transform">✨</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>
          </div>
          
          {/* Decorative Sparkles */}
          <style>{`
            .sparkle-dot { position: absolute; background: #fda4af; border-radius: 50%; opacity: 0.6; animation: sparkle 5s linear infinite; }
            @keyframes sparkle { 
              0% { transform: translateY(0) scale(0); opacity: 0; }
              50% { opacity: 0.6; }
              100% { transform: translateY(-100vh) scale(1); opacity: 0; }
            }
          `}</style>
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className="sparkle-dot" 
              style={{ 
                left: `${Math.random() * 100}%`, 
                top: `${Math.random() * 100}%`, 
                width: `${Math.random() * 6 + 2}px`, 
                height: `${Math.random() * 6 + 2}px`, 
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 5 + 5}s`
              }} 
            />
          ))}
        </div>
      ) : (
        <div className="animate-in fade-in duration-1000">
          <Header />
          <main className="space-y-24 pb-20">
            <Hero />
            <CakeSection />
            
            {!isGameFinished ? (
              <MiniGame onFinish={handleGameFinish} />
            ) : (
              <div className="animate-in zoom-in duration-1000">
                <GiftReveal />
                <PersonalMessage />
              </div>
            )}
            
            <AiWishes />
          </main>
          <Footer />
          
          <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
             {[...Array(15)].map((_, i) => (
               <div 
                 key={i} 
                 className="balloon"
                 style={{
                   left: `${Math.random() * 100}%`,
                   animationDelay: `${Math.random() * 8}s`,
                   backgroundColor: ['#ffc0cb', '#ff69b4', '#ffd700', '#add8e6', '#fbcfe8'][Math.floor(Math.random() * 5)],
                   width: `${20 + Math.random() * 20}px`,
                   height: `${30 + Math.random() * 20}px`,
                   borderRadius: '50% 50% 50% 50% / 40% 40% 60% 60%',
                   opacity: 0.4
                 }}
               />
             ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
