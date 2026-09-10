import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, Gift, MessageCircle, RefreshCw } from 'lucide-react';
import { triggerHeartBurst } from '../components/CelebrationOverlay';

/**
 * Tap-to-reveal compliment generator section reading from birthdayData.js.
 */
export const ComplimentGeneratorSection = ({ birthdayData }) => {
  const name = birthdayData.birthdayPerson.name;
  const compliments = birthdayData.compliments || [];
  const [currentCompliment, setCurrentCompliment] = useState(null);
  const [complimentIndex, setComplimentIndex] = useState(0);

  const handleGenerate = () => {
    if (!compliments.length) return;
    const nextIdx = (complimentIndex + 1) % compliments.length;
    setComplimentIndex(nextIdx);
    setCurrentCompliment(compliments[nextIdx]);
    triggerHeartBurst();
  };

  return (
    <section id="compliments" className="relative py-20 px-4 max-w-3xl mx-auto text-center select-none">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        className="mb-8"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-sm font-semibold mb-4">
          <MessageCircle className="w-4 h-4 text-purple-400" />
          <span>Compliment Machine 💬</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-bold text-white mb-3 font-serif-heading">
          {name} Appreciation Machine 💐
        </h2>

        <p className="text-slate-400 text-base max-w-md mx-auto">
          Every tap generates a 100% custom compliment! (Editable in <code className="text-pink-400 font-mono">birthdayData.js</code>)
        </p>
      </motion.div>

      {/* Compliment Display Card */}
      <div className="min-h-[160px] flex items-center justify-center mb-6">
        <AnimatePresence mode="wait">
          {currentCompliment ? (
            <motion.div
              key={complimentIndex}
              initial={{ opacity: 0, scale: 0.85, rotateX: -20 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              exit={{ opacity: 0, scale: 0.85, rotateX: 20 }}
              className="p-8 bg-slate-900/90 border-2 border-purple-500/50 rounded-3xl shadow-2xl shadow-purple-500/20 max-w-lg w-full"
            >
              <span className="text-5xl mb-4 block">{currentCompliment.emoji}</span>
              <p className="text-lg sm:text-xl text-slate-200 font-semibold leading-relaxed">
                {currentCompliment.text}
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-8 bg-slate-900/60 border border-dashed border-purple-500/40 rounded-3xl max-w-lg w-full"
            >
              <Gift className="w-12 h-12 text-purple-400 mx-auto mb-3 animate-bounce" />
              <p className="text-slate-400 text-base">Tap the button to generate a compliment! ✨</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Generate Button */}
      <button
        onClick={handleGenerate}
        className="px-8 py-3.5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-base rounded-full shadow-xl shadow-purple-500/30 flex items-center gap-2 mx-auto transform hover:scale-105 transition-all duration-300 cursor-pointer border border-white/20"
      >
        <RefreshCw className="w-5 h-5 text-amber-300 animate-spin" style={{ animationDuration: '4s' }} />
        <span>{currentCompliment ? 'Another One! 🎲' : 'Generate Compliment ✨'}</span>
        <Heart className="w-5 h-5 text-pink-300 fill-pink-300" />
      </button>
    </section>
  );
};
