
import React, { useState, useEffect } from 'react';

interface MiniGameProps {
  onFinish: () => void;
}

const MiniGame: React.FC<MiniGameProps> = ({ onFinish }) => {
  const [score, setScore] = useState(0);
  const [targetPos, setTargetPos] = useState({ top: 50, left: 50 });
  const targetScore = 7;

  const moveTarget = () => {
    const top = Math.floor(Math.random() * 80) + 10;
    const left = Math.floor(Math.random() * 80) + 10;
    setTargetPos({ top, left });
  };

  const handleClick = () => {
    const newScore = score + 1;
    setScore(newScore);
    if (newScore >= targetScore) {
      onFinish();
    } else {
      moveTarget();
    }
  };

  return (
    <section id="game" className="py-20 px-6 text-center">
      <div className="max-w-2xl mx-auto bg-white p-12 rounded-3xl shadow-lg border-2 border-dashed border-rose-200">
        <h3 className="text-3xl font-serif text-gray-800 mb-4">The Final Lock 🗝️</h3>
        <p className="text-gray-500 mb-8 italic">
          To read the message from Krrish, you must catch {targetScore} magical golden hearts!
        </p>
        
        <div className="relative w-full h-64 bg-rose-50/30 rounded-xl overflow-hidden cursor-crosshair border border-rose-100">
          <div 
            onClick={handleClick}
            className="absolute transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-125"
            style={{ top: `${targetPos.top}%`, left: `${targetPos.left}%` }}
          >
            <span className="text-5xl drop-shadow-md animate-bounce">💛</span>
          </div>
          
          <div className="absolute top-4 right-4 bg-white px-4 py-1 rounded-full text-rose-500 font-bold shadow-sm">
            Hearts: {score}/{targetScore}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiniGame;
