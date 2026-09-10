import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, X, Sparkles, RefreshCw } from 'lucide-react';
import { triggerConfettiExplosion, triggerFireworks } from './CelebrationOverlay';

export const SpinWheelModal = ({ birthdayName = "Sophia", isOpen, onClose }) => {
  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [winner, setWinner] = useState(null);

  const prizes = [
    { title: "👑 Queen of Main Character Energy", color: "#ec4899" },
    { title: "🍰 Official Master Cake Destroyer", color: "#8b5cf6" },
    { title: "🌀 Chaos Energy Grand Champion", color: "#f59e0b" },
    { title: "🤳 Selfie Hall of Fame Inductee", color: "#10b981" },
    { title: "🍩 Dessert Raider of the Year", color: "#3b82f6" },
    { title: "💖 100% Iconic Legend Status", color: "#f43f5e" },
  ];

  const handleSpin = () => {
    if (spinning) return;
    setSpinning(true);
    setWinner(null);

    const prizeIndex = Math.floor(Math.random() * prizes.length);
    const extraRounds = 5 * 360; // Spin 5 full turns
    const segmentAngle = 360 / prizes.length;
    const finalRotation = rotation + extraRounds + (360 - prizeIndex * segmentAngle - segmentAngle / 2);

    setRotation(finalRotation);

    setTimeout(() => {
      setSpinning(false);
      setWinner(prizes[prizeIndex]);
      triggerConfettiExplosion();
      triggerFireworks();
    }, 4000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-pink-950/70 backdrop-blur-md cursor-pointer select-none"
      >
        <motion.div
          initial={{ scale: 0.7, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.7, y: 50 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-lg w-full bg-gradient-to-b from-white via-amber-50 to-pink-100 border-4 border-amber-400 rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_rgba(245,158,11,0.4)] text-center cursor-default flex flex-col items-center"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-pink-500 hover:bg-pink-600 text-white rounded-full transition-colors cursor-pointer shadow-md"
          >
            <X className="w-6 h-6" />
          </button>

          <h3 className="text-3xl font-extrabold text-pink-600 mb-1 font-serif-heading">
            Birthday Wheel of Fortune! 🎡
          </h3>
          <p className="text-slate-600 text-sm mb-6 font-semibold">
            Spin the wheel to win {birthdayName}'s official birthday title!
          </p>

          {/* Wheel Container */}
          <div className="relative w-64 h-64 my-4 flex items-center justify-center">
            {/* Top Pointer Arrow */}
            <div className="absolute -top-3 z-30 w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-t-[22px] border-t-amber-500 drop-shadow-md" />

            {/* Rotating Wheel */}
            <motion.div
              animate={{ rotate: rotation }}
              transition={{ duration: 4, ease: [0.15, 0.85, 0.35, 1.0] }}
              className="w-full h-full rounded-full border-4 border-amber-400 shadow-2xl relative overflow-hidden flex items-center justify-center"
              style={{
                background: `conic-gradient(
                  #ec4899 0deg 60deg,
                  #8b5cf6 60deg 120deg,
                  #f59e0b 120deg 180deg,
                  #10b981 180deg 240deg,
                  #3b82f6 240deg 300deg,
                  #f43f5e 300deg 360deg
                )`,
              }}
            >
              {/* Wheel Center Badge */}
              <div className="w-16 h-16 rounded-full bg-white border-4 border-amber-400 shadow-inner flex items-center justify-center font-bold text-pink-600 text-xs">
                SPIN! 🎡
              </div>
            </motion.div>
          </div>

          {/* Winner Display */}
          {winner && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="mt-4 p-4 bg-white/90 rounded-2xl border-2 border-pink-400 shadow-lg w-full"
            >
              <Trophy className="w-8 h-8 text-amber-500 mx-auto mb-1 animate-bounce" />
              <span className="text-xs font-bold uppercase text-slate-500 tracking-wider">Winning Title:</span>
              <p className="text-xl font-extrabold text-pink-600 mt-1 font-serif-heading">
                {winner.title}
              </p>
            </motion.div>
          )}

          {/* Spin Button */}
          <button
            onClick={handleSpin}
            disabled={spinning}
            className="mt-6 px-8 py-3.5 bg-gradient-to-r from-amber-500 via-pink-500 to-rose-500 hover:from-amber-400 hover:to-pink-400 text-white font-extrabold text-lg rounded-full shadow-xl flex items-center gap-2 transform hover:scale-105 transition-all cursor-pointer border-2 border-white disabled:opacity-50"
          >
            <RefreshCw className={`w-5 h-5 text-amber-200 ${spinning ? 'animate-spin' : ''}`} />
            <span>{spinning ? 'Spinning...' : 'SPIN THE WHEEL! 🎡'}</span>
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
