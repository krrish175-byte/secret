
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-24 px-6 flex flex-col items-center text-center">
      <div className="max-w-4xl space-y-8">
        <div className="inline-flex items-center gap-2 px-6 py-2 bg-rose-100 text-rose-600 rounded-full text-xs font-black tracking-[0.2em] uppercase mb-4 shadow-sm">
          <span className="animate-ping w-2 h-2 bg-rose-500 rounded-full"></span>
          It's Your Special Day
        </div>
        
        <h1 className="text-7xl md:text-9xl font-serif text-gray-900 leading-[1.1]">
          Happy <br/>
          <span className="text-rose-500 italic font-cursive relative inline-block">
            Birthday
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 20" fill="none">
              <path d="M5 15Q150 5 295 15" stroke="#F43F5E" strokeWidth="4" strokeLinecap="round" opacity="0.3" />
            </svg>
          </span>
        </h1>
        
        <p className="text-2xl md:text-3xl text-gray-400 font-light italic max-w-2xl mx-auto leading-relaxed">
          Celebrating 4 years of growth, laughter, and witnessing you become the bold diva you are today.
        </p>

        <div className="flex justify-center gap-8 pt-10">
          <div className="group cursor-default">
            <div className="w-16 h-16 rounded-2xl bg-rose-50 flex items-center justify-center transition-all group-hover:rotate-12 group-hover:scale-110 shadow-sm border border-rose-100">
              <span className="text-3xl">🎂</span>
            </div>
          </div>
          <div className="group cursor-default">
            <div className="w-16 h-16 rounded-2xl bg-yellow-50 flex items-center justify-center transition-all group-hover:-rotate-12 group-hover:scale-110 shadow-sm border border-yellow-100">
              <span className="text-3xl">🥂</span>
            </div>
          </div>
          <div className="group cursor-default">
            <div className="w-16 h-16 rounded-2xl bg-purple-50 flex items-center justify-center transition-all group-hover:rotate-6 group-hover:scale-110 shadow-sm border border-purple-100">
              <span className="text-3xl">🎁</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
