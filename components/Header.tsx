
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-rose-100 px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h2 className="text-2xl font-serif text-rose-600 italic">Debjani's Day</h2>
        <nav className="hidden md:flex space-x-8 text-rose-500 font-medium">
          <a href="#home" className="hover:text-rose-700 transition-colors">Home</a>
          <a href="#cake" className="hover:text-rose-700 transition-colors">The Cake</a>
          <a href="#message" className="hover:text-rose-700 transition-colors">Surprise</a>
          <a href="#wishes" className="hover:text-rose-700 transition-colors">Magic Wishes</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
