import React, { useState, useEffect } from 'react';
import { Heart, Sparkles } from 'lucide-react';

export const Navbar = ({ birthdayData }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-40 transition-all duration-500 max-w-2xl w-[92%] ${
        scrolled
          ? 'bg-slate-900/80 border border-slate-700/80 shadow-2xl shadow-pink-500/10 backdrop-blur-md rounded-full py-2.5 px-5'
          : 'bg-transparent py-4 px-2'
      }`}
    >
      <div className="flex items-center justify-between gap-2">
        {/* Logo / Brand */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 text-white font-bold text-sm sm:text-base cursor-pointer hover:opacity-80 transition-opacity"
        >
          <span className="p-1.5 rounded-full bg-pink-500/20 text-pink-400 border border-pink-500/30">
            <Heart className="w-4 h-4 fill-pink-400" />
          </span>
          <span className="hidden sm:inline font-serif-heading">
            {birthdayData.birthdayPerson.name}'s Birthday
          </span>
        </button>

        {/* Quick Links */}
        <nav className="flex items-center gap-1 sm:gap-2 text-xs font-semibold">
          <button
            onClick={() => scrollToSection('then-vs-now')}
            className="px-2.5 py-1 rounded-full text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors cursor-pointer"
          >
            Then vs Now
          </button>
          <button
            onClick={() => scrollToSection('timeline')}
            className="px-2.5 py-1 rounded-full text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors cursor-pointer"
          >
            Timeline
          </button>
          <button
            onClick={() => scrollToSection('gallery')}
            className="px-2.5 py-1 rounded-full text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors cursor-pointer"
          >
            Gallery
          </button>
          <button
            onClick={() => scrollToSection('cake')}
            className="px-2.5 py-1 rounded-full text-pink-300 hover:text-pink-200 hover:bg-pink-500/20 transition-colors cursor-pointer flex items-center gap-1 border border-pink-500/30"
          >
            <Sparkles className="w-3 h-3 text-amber-300" /> Cake 🎂
          </button>
        </nav>
      </div>
    </header>
  );
};
