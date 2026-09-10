import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, RotateCcw, Heart, PartyPopper } from 'lucide-react';
import { triggerConfettiExplosion, triggerFireworks } from '../components/CelebrationOverlay';

export const FinalSurpriseSection = ({ birthdayData, onReplay }) => {
  const { finalSurprise } = birthdayData;

  const handleReplayClick = () => {
    triggerConfettiExplosion();
    triggerFireworks();
    onReplay();
  };

  return (
    <section id="final-surprise" className="relative py-28 px-4 max-w-4xl mx-auto text-center overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-gradient-to-r from-pink-600/20 via-rose-500/20 to-purple-600/20 rounded-full blur-[140px] pointer-events-none" />

      {/* Sequence Reveal Text */}
      <div className="space-y-8 mb-14 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-xl sm:text-2xl text-slate-300 font-light tracking-wide uppercase"
        >
          {finalSurprise.line1}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.2 }}
          className="text-4xl sm:text-6xl font-bold text-white font-serif-heading"
        >
          {finalSurprise.line2}
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.4 }}
          onViewportEnter={() => {
            triggerConfettiExplosion();
          }}
          className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-300 to-amber-300 font-serif-heading"
        >
          {finalSurprise.line3}
        </motion.h3>
      </div>

      {/* Replay Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="flex justify-center"
      >
        <button
          onClick={handleReplayClick}
          className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-lg rounded-full shadow-2xl shadow-pink-500/30 flex items-center gap-3 transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer border border-white/20"
        >
          <RotateCcw className="w-5 h-5 text-amber-300 animate-spin" style={{ animationDuration: '8s' }} />
          <span>{finalSurprise.replayButton}</span>
          <Sparkles className="w-5 h-5 text-amber-300" />
        </button>
      </motion.div>
    </section>
  );
};
