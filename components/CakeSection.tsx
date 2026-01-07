
import React, { useState } from 'react';

const CakeSection: React.FC = () => {
  const [candlesBlown, setCandlesBlown] = useState(false);
  const [isSliced, setIsSliced] = useState(false);

  const handleBlowOut = () => {
    if (!candlesBlown) {
      setCandlesBlown(true);
      if ((window as any).confetti) {
        (window as any).confetti({
          particleCount: 120,
          spread: 90,
          origin: { y: 0.7 },
          colors: ['#ffd700', '#ffffff', '#ff69b4', '#fbcfe8']
        });
      }
    }
  };

  const handleCutSlice = () => {
    if (candlesBlown && !isSliced) {
      setIsSliced(true);
      if ((window as any).confetti) {
        (window as any).confetti({
          particleCount: 40,
          spread: 50,
          origin: { y: 0.8 },
          colors: ['#fff', '#fbcfe8']
        });
      }
    }
  };

  return (
    <section id="cake" className="py-20 bg-white/50 relative overflow-hidden">
      <style>{`
        @keyframes cake-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes flame-flicker {
          0%, 100% { transform: translateX(-50%) scale(1); opacity: 0.9; }
          25% { transform: translateX(-52%) scale(1.1) rotate(-2deg); opacity: 1; }
          50% { transform: translateX(-48%) scale(0.95) rotate(2deg); opacity: 0.8; }
          75% { transform: translateX(-50%) scale(1.05); opacity: 0.95; }
        }
        @keyframes layer-sway {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(0.5deg); }
        }
        @keyframes slide-slice {
          0% { transform: translateX(0) rotate(0deg); opacity: 0; }
          100% { transform: translateX(120px) rotate(10deg); opacity: 1; }
        }
        .animate-cake-float { animation: cake-float 4s ease-in-out infinite; }
        .animate-flame { animation: flame-flicker 0.6s infinite alternate; }
        .animate-sway { animation: layer-sway 3s ease-in-out infinite; }
        .animate-slice { animation: slide-slice 0.8s forwards ease-out; }
      `}</style>

      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-serif mb-16 text-gray-800">Make a Wish</h2>
        
        <div className="relative inline-block mt-20">
          {/* Sliced Piece Visual (Appears next to cake) */}
          {isSliced && (
            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 z-50 pointer-events-none animate-slice">
              <div className="relative w-24 h-24">
                <div className="w-16 h-12 bg-rose-400 rounded-t-lg shadow-md"></div>
                <div className="w-16 h-8 bg-rose-300 rounded-b-lg shadow-sm"></div>
                <div className="absolute -bottom-2 -left-2 w-20 h-2 bg-white rounded-full shadow-sm"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 text-2xl">🍓</div>
              </div>
            </div>
          )}

          {/* The Cake Visual */}
          <div 
            onClick={handleCutSlice}
            className={`relative w-72 h-72 md:w-96 md:h-96 mx-auto group ${candlesBlown && !isSliced ? 'cursor-pointer hover:scale-105' : ''} transition-all duration-500`}
          >
            {/* Cut indicator (hint) */}
            {candlesBlown && !isSliced && (
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-rose-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-bounce z-[60]">
                Click to Cut! 🔪
              </div>
            )}
            
            {/* Bottom Layer */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[35%] bg-rose-400 rounded-t-2xl border-b-8 border-rose-500 shadow-xl z-10">
               {isSliced && (
                 <div className="absolute top-0 left-[60%] w-12 h-full bg-rose-600/20 clip-path-slice"></div>
               )}
               <div className="flex justify-around mt-4">
                 {[...Array(6)].map((_, i) => (
                    <div key={i} className="w-3 h-3 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
                 ))}
               </div>
            </div>
            
            {/* Middle Layer */}
            <div className="absolute bottom-[30%] left-1/2 -translate-x-1/2 w-[80%] h-[28%] z-20">
               <div className="w-full h-full bg-rose-300 rounded-t-2xl border-b-8 border-rose-400 shadow-lg animate-sway">
                 <div className="flex justify-around mt-3">
                   {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-4 h-4 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: `${i * 0.3}s` }}></div>
                   ))}
                 </div>
               </div>
            </div>
            
            {/* Top Layer */}
            <div className="absolute bottom-[55%] left-1/2 -translate-x-1/2 w-[60%] h-[25%] z-30">
               <div className="w-full h-full bg-rose-200 rounded-t-2xl border-b-4 border-rose-300 shadow-md animate-cake-float">
                   {/* Candles */}
                   <div className="absolute -top-14 left-0 right-0 flex justify-center gap-6">
                     {[1, 2, 3].map((i) => (
                       <div key={i} className="relative w-3 h-16 bg-gradient-to-t from-pink-100 to-pink-200 rounded-full border border-pink-300 shadow-inner">
                         {!candlesBlown && (
                           <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-6 h-10 bg-orange-400 rounded-full animate-flame shadow-[0_0_25px_rgba(251,146,60,1)] z-50">
                             <div className="w-3 h-5 bg-yellow-200 rounded-full mx-auto mt-1 blur-[1px]"></div>
                           </div>
                         )}
                         {candlesBlown && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-gray-400 animate-pulse">
                              ✨
                            </div>
                         )}
                       </div>
                     ))}
                   </div>
               </div>
            </div>

            {/* Cake Plate */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[115%] h-6 bg-gradient-to-r from-gray-200 via-white to-gray-200 rounded-full shadow-lg z-0"></div>
          </div>
          
          <div className="mt-24 space-y-6">
            <p className="text-gray-500 font-light italic text-lg max-w-md mx-auto">
              {isSliced 
                ? "Delicious! Hope you're enjoying your day. ❤️" 
                : candlesBlown 
                  ? "Your wish is granted! Now, why not have a slice of cake?" 
                  : "A special day calls for a special wish. Close your eyes and blow out the candles."}
            </p>
            
            {!candlesBlown && (
              <button 
                onClick={handleBlowOut}
                className="px-12 py-4 bg-rose-500 hover:bg-rose-600 text-white rounded-full font-bold transition-all shadow-xl hover:shadow-rose-300 hover:scale-105 active:scale-95 group flex items-center gap-3 mx-auto"
              >
                <span>Blow Out Candles</span>
                <span className="group-hover:animate-bounce">🕯️</span>
              </button>
            )}

            {isSliced && (
               <button 
                 onClick={() => { setIsSliced(false); setCandlesBlown(false); }}
                 className="text-rose-400 hover:text-rose-600 underline text-sm tracking-widest uppercase font-bold"
               >
                 Reset Cake? 🎂
               </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CakeSection;
