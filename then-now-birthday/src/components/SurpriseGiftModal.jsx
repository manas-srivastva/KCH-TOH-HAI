import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, X, Sparkles, Trophy, Heart } from 'lucide-react';
import { triggerConfettiExplosion, triggerFireworks, triggerHeartBurst } from './CelebrationOverlay';

export const SurpriseGiftModal = ({ birthdayName = "Sophia", isOpen, onClose }) => {
  const [opened, setOpened] = useState(false);

  const gifts = [
    { title: "VIP VIP Birthday Pass 🎫", desc: "Valid for 1000% immunity from all chores & adulting today!", emoji: "👑" },
    { title: "Unlimited Dessert Voucher 🍰", desc: "Entitles you to infinite cake, ice cream & chocolate refills!", emoji: "🍩" },
    { title: "Golden Best Friend Ticket 🌟", desc: "Redeemable for 1 spontaneous road trip & late night food run!", emoji: "🚗" },
  ];

  const [selectedGift] = useState(() => gifts[Math.floor(Math.random() * gifts.length)]);

  const handleUnwrap = () => {
    setOpened(true);
    triggerConfettiExplosion();
    triggerFireworks();
    triggerHeartBurst();
  };

  const handleClose = () => {
    setOpened(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleClose}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-purple-950/70 backdrop-blur-md cursor-pointer select-none"
      >
        <motion.div
          initial={{ scale: 0.7, y: 50, rotateX: -20 }}
          animate={{ scale: 1, y: 0, rotateX: 0 }}
          exit={{ scale: 0.7, y: 50, rotateX: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-lg w-full bg-gradient-to-b from-white via-pink-50 to-rose-100 border-4 border-pink-400 rounded-3xl p-8 shadow-[0_25px_60px_rgba(236,72,153,0.5)] text-center cursor-default overflow-hidden"
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 bg-pink-500 hover:bg-pink-600 text-white rounded-full transition-colors cursor-pointer shadow-md"
          >
            <X className="w-6 h-6" />
          </button>

          {!opened ? (
            <div className="py-6 flex flex-col items-center">
              <motion.div
                animate={{ rotate: [-4, 4, -4], y: [0, -10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-32 h-32 rounded-3xl bg-gradient-to-tr from-pink-500 via-rose-500 to-amber-400 border-4 border-white shadow-2xl flex items-center justify-center mb-6 cursor-pointer"
                onClick={handleUnwrap}
              >
                <Gift className="w-16 h-16 text-white animate-pulse" />
              </motion.div>

              <h3 className="text-3xl font-extrabold text-pink-600 mb-2 font-serif-heading">
                A Surprise Gift for {birthdayName}! 🎁
              </h3>
              <p className="text-slate-600 text-base mb-6 font-medium">
                Tap the mystery gift box below to unwrap your special birthday ticket!
              </p>

              <button
                onClick={handleUnwrap}
                className="px-8 py-4 bg-gradient-to-r from-pink-500 via-rose-500 to-amber-400 hover:from-pink-600 hover:to-amber-500 text-white font-extrabold text-lg rounded-full shadow-xl flex items-center gap-2 transform hover:scale-105 transition-all cursor-pointer border-2 border-white"
              >
                <Sparkles className="w-5 h-5 text-amber-200 animate-spin" />
                <span>UNWRAP MY GIFT! 🎉</span>
              </button>
            </div>
          ) : (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="py-6 flex flex-col items-center"
            >
              <div className="text-6xl mb-4 animate-bounce">{selectedGift.emoji}</div>
              <span className="px-4 py-1 bg-amber-300 text-amber-950 text-xs font-bold rounded-full uppercase tracking-wider mb-2 border border-amber-400">
                ⭐ Golden Birthday Ticket ⭐
              </span>
              <h3 className="text-3xl font-extrabold text-pink-600 mb-3 font-serif-heading">
                {selectedGift.title}
              </h3>
              <p className="text-slate-700 text-lg font-semibold bg-white/80 p-4 rounded-2xl border border-pink-200 shadow-inner mb-6">
                "{selectedGift.desc}"
              </p>

              <button
                onClick={handleClose}
                className="px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white font-bold text-base rounded-full shadow-lg cursor-pointer"
              >
                Claim & Continue Celebrating! 🎉
              </button>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
