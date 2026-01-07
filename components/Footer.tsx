
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-rose-100 bg-white text-center">
      <div className="max-w-4xl mx-auto space-y-6">
        <h3 className="text-3xl font-cursive text-rose-500">Happy Birthday Debjani!</h3>
        <p className="text-gray-400 text-sm">
          Made with ❤️ and all nighter for a special day.
        </p>
        <div className="flex justify-center gap-6">
          <button className="w-10 h-10 rounded-full bg-rose-50 text-rose-400 flex items-center justify-center hover:bg-rose-500 hover:text-white transition-all">
            📸
          </button>
          <button className="w-10 h-10 rounded-full bg-rose-50 text-rose-400 flex items-center justify-center hover:bg-rose-500 hover:text-white transition-all">
            🎈
          </button>
          <button className="w-10 h-10 rounded-full bg-rose-50 text-rose-400 flex items-center justify-center hover:bg-rose-500 hover:text-white transition-all">
            💝
          </button>
        </div>
        <p className="text-xs text-gray-300 mt-8 uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Celebration Space
        </p>
      </div>
    </footer>
  );
};

export default Footer;
