import React from 'react';
import { motion } from 'framer-motion';
import { PartyPopper, Sparkles, Flame } from 'lucide-react';
import { triggerConfettiExplosion, triggerFireworks, triggerHeartBurst } from '../components/CelebrationOverlay';
import { Snoopy3D } from '../components/Snoopy3D';

export const CelebrationSection = ({ birthdayData }) => {
  const { celebration, birthdayPerson } = birthdayData;

  const handleTriggerCelebration = () => {
    triggerConfettiExplosion();
    triggerFireworks();
    triggerHeartBurst();
  };

  return (
    <section id="celebration" className="relative py-28 px-4 max-w-5xl mx-auto text-center overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-pink-500/25 via-rose-500/20 to-amber-500/20 rounded-full blur-[140px] pointer-events-none" />

      {/* Prelude Roast Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-slate-900/90 border border-amber-500/50 text-amber-300 font-bold text-sm sm:text-base uppercase tracking-widest mb-6 shadow-xl shadow-amber-500/10"
      >
        <Flame className="w-5 h-5 text-amber-400 fill-amber-400 animate-bounce" />
        <span>{celebration.roastText}</span>
        <Flame className="w-5 h-5 text-amber-400 fill-amber-400 animate-bounce" />
      </motion.div>

      {/* Grand Reveal Container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        onViewportEnter={handleTriggerCelebration}
        className="relative bg-slate-900/90 border-2 border-pink-500/50 rounded-3xl p-8 sm:p-14 backdrop-blur-2xl shadow-2xl shadow-pink-500/30 overflow-hidden"
      >
        {/* Interactive 3D Snoopy Reveal */}
        <div className="flex justify-center mb-4">
          <Snoopy3D birthdayName={birthdayPerson.name} />
        </div>

        {/* Grand Headline */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-300 to-amber-300 mb-6 leading-tight font-serif-heading tracking-tight">
          HAPPY BIRTHDAY, <span className="underline decoration-pink-500/60 decoration-wavy">{birthdayPerson.name.toUpperCase()}</span>!!! 🎂🎉❤️
        </h2>

        {/* Subtitle */}
        <p className="text-slate-200 text-lg sm:text-2xl max-w-2xl mx-auto font-light leading-relaxed mb-8">
          {celebration.subtitle}
        </p>

        {/* Interactive Celebration Trigger Button */}
        <div className="flex justify-center items-center gap-4 flex-wrap">
          <button
            onClick={handleTriggerCelebration}
            className="px-8 py-4 bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 hover:from-pink-400 hover:to-amber-400 text-white font-bold text-lg rounded-full shadow-2xl shadow-pink-500/40 flex items-center gap-2 transform hover:scale-105 transition-all duration-300 cursor-pointer border border-white/30"
          >
            <PartyPopper className="w-6 h-6 animate-bounce" />
            <span>Celebrate Again! 🎉</span>
            <Sparkles className="w-5 h-5 text-amber-200" />
          </button>
        </div>
      </motion.div>
    </section>
  );
};
