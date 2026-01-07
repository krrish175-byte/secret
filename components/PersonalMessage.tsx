
import React from 'react';

const PersonalMessage: React.FC = () => {
  return (
    <section id="message" className="py-20 px-6">
      <div className="max-w-4xl mx-auto bg-[#fffdfa] p-10 md:p-20 rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-rose-100 relative">
        {/* Letter Aesthetic elements */}
        <div className="absolute top-10 right-10 opacity-20 hidden md:block">
           <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="48" stroke="#E11D48" strokeWidth="2" strokeDasharray="5 5" />
              <path d="M30 50L45 65L70 35" stroke="#E11D48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
           </svg>
        </div>

        <div className="space-y-10">
          <header className="border-b border-rose-100 pb-6">
            <h2 className="text-4xl font-cursive text-rose-500 mb-2">To Debjani,</h2>
            <p className="text-gray-400 font-serif italic">From the desk of Krrish</p>
          </header>

          <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed font-light">
            <p>
              I was just randomly sitting in a corner doing math when I saw two figures walk in. I didn't make it out at first, but then I saw you and my eyes hooked on to you.
            </p>
            <p>
              I can't believe it's already been 4 years. From that chubby silly girl I knew to the bold diva you are today, I've seen it all. I'm glad I could become one of your "that" kinda friends who knows what is actually going on in your life (well, not that much, but I still know some things!).
            </p>
            <p>
              Happy Birthday, Debjani. I just wish that you get all the things you want and desire (includes human beings too!) and yeah, your mom took 9 months to make you a heart—don't let someone break it in seconds. I'll always be there for you if you ever need me.
            </p>
            
            <div className="pt-10 border-t border-rose-50">
              <p className="text-base text-gray-500 italic leading-snug">
                <span className="font-bold text-rose-400 not-italic block mb-2">PS:</span>
                I know it's not much, but this is what I am currently capable of giving to you as a gift. And yeah, don't worry, I will try not to disturb you more like I do currently (honestly it sucks being left on seen, then told again and again you will never feel me, so yeah I hope this will bring some peace in your already chaotic life, lol).
              </p>
              <p className="text-base text-gray-500 italic mt-4">
                But yeah, I will still be open if your mind changes somewhere in between :) please don't be angry again because of this message ;-; have a wonderful day and year.
              </p>
            </div>
          </div>

          <footer className="text-right pt-8">
            <p className="font-cursive text-3xl text-rose-500">Yours, Krrish</p>
          </footer>
        </div>

        {/* Decorative Tape */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-10 bg-rose-200/40 backdrop-blur-sm -rotate-1"></div>
      </div>
    </section>
  );
};

export default PersonalMessage;
