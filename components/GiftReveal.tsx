
import React from 'react';

const GiftReveal: React.FC = () => {
  return (
    <section className="pt-20 pb-10 px-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 text-center">
        <div className="group animate-bounce-slow">
          <div className="relative">
            <span className="text-8xl block transition-transform group-hover:scale-110">💐</span>
            <div className="absolute -top-4 -right-4 bg-rose-400 text-white text-xs px-2 py-1 rounded-full rotate-12">Freshly picked</div>
          </div>
          <p className="mt-4 font-cursive text-2xl text-rose-600">A Bouquet for You</p>
        </div>
        
        <div className="group animate-bounce-slow delay-300">
          <div className="relative">
            <span className="text-8xl block transition-transform group-hover:scale-110">🍫</span>
            <div className="absolute -top-4 -left-4 bg-amber-700 text-white text-xs px-2 py-1 rounded-full -rotate-12">Sweet treats</div>
          </div>
          <p className="mt-4 font-cursive text-2xl text-amber-800">Gourmet Chocolates</p>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-gray-400 italic">"Because you deserve all the sweetness in the world."</p>
      </div>
      
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default GiftReveal;
