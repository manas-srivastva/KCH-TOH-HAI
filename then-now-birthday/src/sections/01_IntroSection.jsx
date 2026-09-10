import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Gift, ChevronDown, Heart, Disc } from 'lucide-react';
import { triggerConfettiExplosion } from '../components/CelebrationOverlay';
import { Snoopy3D } from '../components/Snoopy3D';

export const IntroSection = ({ birthdayData, onStartJourney, onOpenGift }) => {
  const { intro, birthdayPerson } = birthdayData;

  const handleStart = () => {
    triggerConfettiExplosion();
    onStartJourney();
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-16 overflow-hidden select-none">
      {/* DJ Laser Glow Center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-pink-600/30 via-cyan-500/25 to-purple-600/30 rounded-full blur-[140px] pointer-events-none" />

      {/* DJ Party Header Badge */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-slate-900/90 border-2 border-pink-500/60 text-pink-300 backdrop-blur-md shadow-[0_0_25px_rgba(255,0,127,0.4)] mb-6"
      >
        <Disc className="w-4 h-4 text-cyan-400 animate-spin" style={{ animationDuration: '4s' }} />
        <span className="text-xs sm:text-sm font-extrabold tracking-wider uppercase text-cyan-300">
          DJ NIGHT EDITION • {birthdayPerson.name}'s {birthdayPerson.turningAge} BASH 🎧
        </span>
        <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
      </motion.div>

      {/* DJ Club Headline */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.85, rotateX: -20 }}
        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-cyan-300 to-amber-300 drop-shadow-[0_10px_35px_rgba(255,0,127,0.5)] mb-4 leading-tight max-w-5xl font-serif-heading"
      >
        {intro.heading}
      </motion.h1>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-lg sm:text-2xl text-slate-300 max-w-2xl font-light mb-4 leading-relaxed"
      >
        {intro.subheading}
      </motion.p>

      {/* DJ Pop-up Action Triggers */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.45 }}
        className="flex items-center justify-center gap-3 flex-wrap my-3 z-20"
      >
        <button
          onClick={onOpenGift}
          className="px-5 py-2.5 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-extrabold text-xs sm:text-sm rounded-full shadow-[0_0_20px_rgba(255,0,127,0.5)] border border-pink-400/50 flex items-center gap-2 cursor-pointer transform hover:scale-105 transition-all"
        >
          <Gift className="w-4 h-4 text-amber-300 animate-bounce" />
          <span>Surprise VIP Gift! 🎁</span>
        </button>

      </motion.div>

      {/* 3D Snoopy Stage */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <Snoopy3D birthdayName={birthdayPerson.name} />
      </motion.div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="relative group mt-2"
      >
        <div className="absolute -inset-1.5 bg-gradient-to-r from-pink-500 via-cyan-400 to-purple-600 rounded-full blur-md opacity-85 group-hover:opacity-100 transition duration-500 group-hover:scale-105 animate-pulse" />
        <button
          onClick={handleStart}
          aria-label="Start the birthday journey"
          className="relative px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-extrabold text-lg sm:text-xl rounded-full shadow-2xl flex items-center gap-3 transition-all duration-300 transform group-hover:scale-105 cursor-pointer active:scale-95 border border-white/30"
        >
          <Gift className="w-6 h-6 text-amber-300 animate-bounce" />
          <span>{intro.ctaButton}</span>
          <Sparkles className="w-5 h-5 text-amber-300" />
        </button>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="mt-10 flex flex-col items-center gap-2 text-cyan-400 text-xs font-extrabold tracking-widest uppercase cursor-pointer"
        onClick={onStartJourney}
      >
        <span>Scroll for DJ Experience</span>
        <ChevronDown className="w-5 h-5 animate-bounce text-pink-400" />
      </motion.div>
    </section>
  );
};
