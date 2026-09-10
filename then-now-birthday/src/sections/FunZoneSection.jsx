import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, RotateCcw, Trophy, Flame, Heart, Star } from 'lucide-react';
import { triggerConfettiExplosion, triggerHeartBurst } from '../components/CelebrationOverlay';

/**
 * Fun interactive quiz/rating section about the birthday person.
 */
export const FunZoneSection = ({ birthdayData }) => {
  const { birthdayPerson } = birthdayData;
  const name = birthdayPerson.name;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [revealed, setRevealed] = useState({});
  const [score, setScore] = useState(0);

  const funCards = [
    {
      type: 'rate',
      title: `${name}'s Official Rating Card 📊`,
      stats: [
        { label: 'Cuteness Level', value: 120, emoji: '💖', color: 'from-pink-500 to-rose-500' },
        { label: 'Chaos Energy', value: 95, emoji: '🌀', color: 'from-purple-500 to-indigo-500' },
        { label: 'Iconic Status', value: 100, emoji: '👑', color: 'from-amber-400 to-orange-500' },
        { label: 'Snack Raiding Ability', value: 88, emoji: '🍕', color: 'from-green-400 to-emerald-500' },
        { label: 'Drama Queen Level', value: 110, emoji: '🎭', color: 'from-red-400 to-pink-500' },
      ],
    },
    {
      type: 'wouldYouRather',
      title: 'Would She Rather…? 🤔',
      questions: [
        { q: 'Sleep till 3pm OR Get free pizza for life?', a: "Both. She would negotiate both. 😂", emoji: '🍕' },
        { q: 'Have a personal DJ OR a personal chef?', a: "Chef. Duh. Food > Everything.", emoji: '👨‍🍳' },
        { q: 'Time travel to the past OR the future?', a: "Past. To warn herself about bad haircuts. 💇‍♀️", emoji: '⏰' },
      ],
    },
    {
      type: 'superlatives',
      title: `${name}'s Superlative Awards 🏆`,
      awards: [
        { award: 'Most Likely to Send 47 Texts in a Row', emoji: '📱' },
        { award: 'Best Laugh That Makes Everyone Else Laugh', emoji: '😂' },
        { award: 'Champion of "Just 5 More Minutes" (of sleep)', emoji: '😴' },
        { award: 'CEO of Making Plans & Cancelling Them', emoji: '📅' },
        { award: 'World Record Holder: Longest Group Selfie Session', emoji: '🤳' },
      ],
    },
    {
      type: 'predictions',
      title: `${name} in 10 Years ✨`,
      predictions: [
        { text: `${name} will have 3 pets and name them all after desserts 🍩`, emoji: '🐶' },
        { text: 'Will still be sending memes at 2 AM', emoji: '📱' },
        { text: 'CEO of a company or CEO of her couch. No in-between.', emoji: '👩‍💼' },
        { text: 'Her laugh will be heard from at least 2 blocks away', emoji: '🔊' },
        { text: `Still asking "What should we eat?" 50 times a day`, emoji: '🍔' },
      ],
    },
  ];

  const currentCard = funCards[currentSlide];

  const handleReveal = (idx) => {
    const key = `${currentSlide}-${idx}`;
    if (!revealed[key]) {
      setRevealed((prev) => ({ ...prev, [key]: true }));
      setScore((prev) => prev + 10);
      triggerHeartBurst();
    }
  };

  const goNext = () => {
    setCurrentSlide((prev) => (prev + 1) % funCards.length);
    triggerConfettiExplosion();
  };

  return (
    <section id="fun-zone" className="relative py-24 px-4 max-w-4xl mx-auto select-none">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-amber-500/15 via-pink-500/15 to-purple-500/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-sm font-semibold mb-4"
        >
          <Flame className="w-4 h-4 text-amber-400 fill-amber-400" />
          <span>Fun Zone 🎮</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl font-bold text-white mb-3 font-serif-heading"
        >
          Random Fun Stuff 🎲
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-lg max-w-lg mx-auto"
        >
          Because what's a birthday without some interactive chaos?
        </motion.p>

        {/* Score Counter */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/20 to-pink-500/20 border border-amber-400/40 text-amber-200 font-bold text-sm shadow-lg"
        >
          <Trophy className="w-4 h-4 text-amber-400" />
          <span>Fun Points: {score} ⭐</span>
        </motion.div>
      </div>

      {/* Fun Card Container */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 80, rotateY: 15 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          exit={{ opacity: 0, x: -80, rotateY: -15 }}
          transition={{ duration: 0.5 }}
          className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl"
        >
          {/* Card Title */}
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3 font-serif-heading">
            <Star className="w-6 h-6 text-amber-400 fill-amber-400" />
            {currentCard.title}
          </h3>

          {/* RATING CARD */}
          {currentCard.type === 'rate' && (
            <div className="space-y-5">
              {currentCard.stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center justify-between text-sm font-semibold">
                    <span className="text-slate-300 flex items-center gap-2">
                      <span className="text-lg">{stat.emoji}</span> {stat.label}
                    </span>
                    <span className="text-pink-300 font-bold">{stat.value}%</span>
                  </div>
                  <div className="w-full h-4 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${Math.min(stat.value, 100)}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: idx * 0.15, ease: 'easeOut' }}
                      className={`h-full bg-gradient-to-r ${stat.color} rounded-full shadow-md relative`}
                    >
                      {stat.value > 100 && (
                        <span className="absolute right-1 top-0 text-[10px] font-bold text-white animate-pulse">
                          MAXED! 🔥
                        </span>
                      )}
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* WOULD SHE RATHER */}
          {currentCard.type === 'wouldYouRather' && (
            <div className="space-y-6">
              {currentCard.questions.map((q, idx) => {
                const key = `${currentSlide}-${idx}`;
                return (
                  <div key={idx} className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700">
                    <p className="text-white font-semibold text-lg mb-3 flex items-start gap-2">
                      <span className="text-2xl">{q.emoji}</span> {q.q}
                    </p>
                    {revealed[key] ? (
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-pink-300 font-handwriting text-xl font-bold pl-8"
                      >
                        → {q.a}
                      </motion.p>
                    ) : (
                      <button
                        onClick={() => handleReveal(idx)}
                        className="ml-8 px-4 py-2 bg-pink-500/20 hover:bg-pink-500/40 text-pink-300 text-sm font-semibold rounded-full border border-pink-500/40 cursor-pointer transition-colors flex items-center gap-1.5"
                      >
                        <Sparkles className="w-3.5 h-3.5" /> Tap to Reveal Answer
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* SUPERLATIVE AWARDS */}
          {currentCard.type === 'superlatives' && (
            <div className="space-y-4">
              {currentCard.awards.map((a, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.12 }}
                  className="flex items-center gap-4 p-4 bg-slate-800/70 rounded-2xl border border-slate-700 hover:border-amber-500/40 transition-colors group cursor-default"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-500/30 to-pink-500/30 border border-amber-400/50 flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform">
                    {a.emoji}
                  </div>
                  <p className="text-slate-200 font-semibold text-sm sm:text-base flex-1">
                    🏆 {a.award}
                  </p>
                  <Heart className="w-4 h-4 text-pink-500 fill-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>
          )}

          {/* PREDICTIONS */}
          {currentCard.type === 'predictions' && (
            <div className="space-y-4">
              {currentCard.predictions.map((p, idx) => {
                const key = `${currentSlide}-${idx}`;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    {revealed[key] ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="p-4 bg-gradient-to-r from-pink-500/15 to-purple-500/15 border border-pink-500/30 rounded-2xl"
                      >
                        <p className="text-slate-200 font-semibold text-base flex items-start gap-3">
                          <span className="text-2xl">{p.emoji}</span> {p.text}
                        </p>
                      </motion.div>
                    ) : (
                      <button
                        onClick={() => handleReveal(idx)}
                        className="w-full p-4 bg-slate-800/80 border border-slate-700 rounded-2xl hover:bg-slate-800 transition-colors cursor-pointer text-left flex items-center gap-3"
                      >
                        <span className="text-2xl">🔮</span>
                        <span className="text-slate-400 text-sm font-semibold">
                          Prediction #{idx + 1} — Tap to reveal!
                        </span>
                        <Sparkles className="w-4 h-4 text-amber-400 ml-auto" />
                      </button>
                    )}
                  </motion.div>
                );
              })}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Button */}
      <div className="flex justify-center mt-8 gap-4">
        <button
          onClick={goNext}
          className="px-8 py-3.5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-base rounded-full shadow-xl shadow-pink-500/25 flex items-center gap-2 transform hover:scale-105 transition-all duration-300 cursor-pointer border border-white/20"
        >
          <RotateCcw className="w-5 h-5 text-amber-300" />
          <span>Next Fun Card! 🎲</span>
          <Sparkles className="w-5 h-5 text-amber-300" />
        </button>
      </div>

      {/* Card Progress Dots */}
      <div className="flex justify-center gap-2 mt-5">
        {funCards.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              currentSlide === idx
                ? 'bg-pink-500 scale-125 shadow-lg shadow-pink-500/50'
                : 'bg-slate-700 hover:bg-slate-600'
            }`}
          />
        ))}
      </div>
    </section>
  );
};
