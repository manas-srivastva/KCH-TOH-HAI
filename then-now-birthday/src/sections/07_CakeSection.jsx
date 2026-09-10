import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cake, Sparkles, Wind, Heart, Star } from 'lucide-react';
import { triggerConfettiExplosion, triggerHeartBurst } from '../components/CelebrationOverlay';

export const CakeSection = ({ birthdayData }) => {
  const { cake, birthdayPerson } = birthdayData;
  const [candlesLit, setCandlesLit] = useState(true);
  const [wishMade, setWishMade] = useState(false);

  const handleMakeWish = () => {
    setCandlesLit(false);
    setWishMade(true);
    triggerConfettiExplosion();
    triggerHeartBurst();
  };

  const handleRelight = () => {
    setCandlesLit(true);
    setWishMade(false);
  };

  return (
    <section id="cake" className="relative py-24 px-4 max-w-4xl mx-auto text-center">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        className="mb-12"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-sm font-semibold mb-4">
          <Cake className="w-4 h-4 text-amber-400" />
          <span>{cake.sectionTitle}</span>
        </div>

        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-3 font-serif-heading">
          Make a Secret Wish! 🕯️
        </h2>

        <p className="text-slate-300 text-lg max-w-md mx-auto">
          {cake.subtitle}
        </p>
      </motion.div>

      {/* 3D Cake Visual */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        className="relative bg-slate-900/90 border border-slate-800 rounded-3xl p-8 sm:p-12 backdrop-blur-xl shadow-2xl flex flex-col items-center justify-center max-w-lg mx-auto"
      >
        {/* Cake Container */}
        <div className="relative my-8 flex flex-col items-center">
          {/* Candles Row */}
          <div className="flex justify-center items-end gap-6 mb-1 z-10">
            {[1, 2, 3].map((id) => (
              <div key={id} className="relative flex flex-col items-center">
                {/* Flame / Smoke */}
                <AnimatePresence mode="wait">
                  {candlesLit ? (
                    <motion.div
                      key="flame"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0, y: -10, opacity: 0 }}
                      className="w-5 h-7 rounded-full bg-gradient-to-t from-amber-500 via-orange-400 to-yellow-200 animate-flicker shadow-[0_0_15px_rgba(251,191,36,0.9)] mb-1"
                    />
                  ) : (
                    <motion.div
                      key="smoke"
                      initial={{ opacity: 0, y: 0 }}
                      animate={{ opacity: [0.8, 0.4, 0], y: -25, x: [0, 5, -5] }}
                      transition={{ duration: 1.5 }}
                      className="w-2 h-4 bg-slate-400/50 blur-xs rounded-full mb-1"
                    />
                  )}
                </AnimatePresence>

                {/* Candle Stick */}
                <div className="w-3 h-12 bg-gradient-to-b from-pink-300 via-pink-400 to-purple-500 rounded-t-sm shadow-md border-x border-pink-200/40" />
              </div>
            ))}
          </div>

          {/* Top Layer */}
          <div className="w-48 h-16 bg-gradient-to-r from-pink-400 via-rose-300 to-pink-400 rounded-t-2xl border-t-4 border-white/60 shadow-lg relative flex items-center justify-center overflow-hidden">
            {/* Frosting Drips */}
            <div className="absolute top-0 inset-x-0 flex justify-around">
              <div className="w-4 h-5 bg-white rounded-b-full shadow-xs" />
              <div className="w-5 h-7 bg-white rounded-b-full shadow-xs" />
              <div className="w-4 h-4 bg-white rounded-b-full shadow-xs" />
              <div className="w-5 h-6 bg-white rounded-b-full shadow-xs" />
            </div>
            <span className="text-slate-800 font-bold text-xs tracking-wider uppercase z-10 pt-2 font-serif-heading">
              {birthdayPerson.name}
            </span>
          </div>

          {/* Bottom Layer */}
          <div className="w-64 h-20 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-b-2xl border-t-2 border-pink-300/40 shadow-2xl relative flex items-center justify-center">
            {/* Decor Circles */}
            <div className="flex gap-4">
              <div className="w-3 h-3 rounded-full bg-amber-300 animate-ping" />
              <div className="w-3 h-3 rounded-full bg-pink-300 animate-ping" style={{ animationDelay: '0.3s' }} />
              <div className="w-3 h-3 rounded-full bg-indigo-300 animate-ping" style={{ animationDelay: '0.6s' }} />
            </div>
          </div>

          {/* Cake Stand */}
          <div className="w-72 h-4 bg-slate-300/90 rounded-full shadow-xl border-t border-white" />
          <div className="w-24 h-6 bg-slate-400/80 rounded-b-xl shadow-inner" />
        </div>

        {/* Action Button */}
        {candlesLit ? (
          <button
            onClick={handleMakeWish}
            className="px-8 py-3.5 bg-gradient-to-r from-amber-500 to-pink-500 hover:from-amber-400 hover:to-pink-400 text-slate-950 font-bold text-lg rounded-full shadow-xl shadow-amber-500/25 flex items-center gap-2 transition-all duration-300 transform hover:scale-105 cursor-pointer active:scale-95 border border-amber-200/50"
          >
            <Wind className="w-5 h-5 text-slate-950 animate-pulse" />
            <span>{cake.buttonText}</span>
            <Sparkles className="w-5 h-5 text-slate-950" />
          </button>
        ) : (
          <button
            onClick={handleRelight}
            className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-semibold rounded-full border border-slate-700 flex items-center gap-2 transition-colors cursor-pointer"
          >
            <span>Relight Candles 🕯️</span>
          </button>
        )}

        {/* Wish Granted Card */}
        {wishMade && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="mt-8 p-6 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-amber-500/20 border border-pink-500/40 rounded-2xl text-center"
          >
            <h3 className="text-xl font-bold text-pink-300 mb-2 flex items-center justify-center gap-2">
              <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
              {cake.wishGrantedTitle}
              <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
            </h3>
            <p className="text-slate-200 text-sm leading-relaxed">
              {cake.wishGrantedMessage}
            </p>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};
