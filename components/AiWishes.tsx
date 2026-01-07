
import React, { useState, useEffect } from 'react';
import { generateBirthdayPoem } from '../services/gemini';

const AiWishes: React.FC = () => {
  const [poem, setPoem] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  const fetchWish = async () => {
    setLoading(true);
    const text = await generateBirthdayPoem('Debjani');
    setPoem(text);
    setLoading(false);
  };

  useEffect(() => {
    fetchWish();
  }, []);

  return (
    <section id="wishes" className="py-20 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-16 rounded-3xl shadow-xl border border-rose-50 relative overflow-hidden">
        {/* Decorative corner */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-rose-50 rounded-bl-full -mr-16 -mt-16"></div>
        
        <div className="relative z-10 text-center space-y-8">
          <h2 className="text-3xl font-serif text-gray-800">A Heartfelt Note...</h2>
          
          <div className="min-h-[150px] flex items-center justify-center">
            {loading ? (
              <div className="space-y-4 w-full">
                <div className="h-4 bg-gray-100 rounded w-3/4 mx-auto animate-pulse"></div>
                <div className="h-4 bg-gray-100 rounded w-full animate-pulse"></div>
                <div className="h-4 bg-gray-100 rounded w-2/3 mx-auto animate-pulse"></div>
              </div>
            ) : (
              <p className="text-xl md:text-2xl font-light italic text-gray-700 leading-relaxed font-cursive">
                "{poem}"
              </p>
            )}
          </div>

          <div className="pt-8">
            <button 
              onClick={fetchWish}
              disabled={loading}
              className="text-rose-500 hover:text-rose-700 font-medium transition-colors flex items-center justify-center gap-2 mx-auto disabled:opacity-50"
            >
              <span>{loading ? "Thinking..." : "Generate Another Magic Message"}</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiWishes;
