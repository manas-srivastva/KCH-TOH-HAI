import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, MessageCircle, Volume2 } from 'lucide-react';
import { triggerConfettiExplosion, triggerHeartBurst } from './CelebrationOverlay';

export const SnoopyAnimation = ({ birthdayName = "Sophia" }) => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [isDancing, setIsDancing] = useState(false);

  const quotes = [
    `HAPPY BIRTHDAY, ${birthdayName.toUpperCase()}! 🎂🐾`,
    "Sending 1000% Woodstock hugs & happiness! 🐥❤️",
    "Did someone say... BIRTHDAY CAKE?! 🍰😋",
    "Stay cool, legendary & iconic! 😎✨",
    "To the best human in the universe! 🌟💖",
  ];

  const handleSnoopyClick = () => {
    setIsDancing(true);
    setQuoteIndex((prev) => (prev + 1) % quotes.length);
    triggerConfettiExplosion();
    triggerHeartBurst();

    // Play cheerful Snoopy bark sound effect via Web Audio synth
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        const ctx = new AudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(450, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(150, ctx.currentTime + 0.15);
        gain.gain.setValueAtTime(0.3, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.15);
      }
    } catch (e) {
      // Ignored
    }

    setTimeout(() => setIsDancing(false), 800);
  };

  return (
    <div className="relative flex flex-col items-center justify-center my-8 select-none">
      {/* Speech Bubble */}
      <AnimatePresence mode="wait">
        <motion.div
          key={quoteIndex}
          initial={{ opacity: 0, y: 15, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.8 }}
          className="relative mb-6 px-6 py-3.5 bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 text-white rounded-3xl shadow-xl shadow-pink-500/30 border-2 border-white/40 max-w-sm text-center cursor-pointer transform hover:scale-105 transition-transform"
          onClick={handleSnoopyClick}
        >
          <div className="flex items-center gap-2 justify-center font-bold text-sm sm:text-base font-sans tracking-wide">
            <Sparkles className="w-4 h-4 text-amber-300 animate-spin" />
            <span>{quotes[quoteIndex]}</span>
            <Heart className="w-4 h-4 text-amber-200 fill-amber-200 animate-pulse" />
          </div>
          {/* Speech Pointer Tail */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[12px] border-t-purple-600 drop-shadow-md" />
        </motion.div>
      </AnimatePresence>

      {/* Snoopy Interactive 3D Canvas Stage */}
      <motion.div
        animate={isDancing ? { rotateY: [0, 360], scale: [1, 1.25, 1], y: [0, -30, 0] } : { y: [0, -8, 0] }}
        transition={
          isDancing
            ? { duration: 0.8, ease: 'easeInOut' }
            : { duration: 3, repeat: Infinity, ease: 'easeInOut' }
        }
        onClick={handleSnoopyClick}
        className="relative cursor-pointer group"
      >
        {/* Click Me Glow Hint */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-3 py-1 bg-amber-400 text-slate-950 font-bold text-[10px] uppercase rounded-full shadow-md animate-bounce opacity-90 group-hover:scale-110">
          Tap Snoopy! 🐾
        </div>

        {/* Vector SVG Snoopy on Doghouse with Party Hat & Woodstock */}
        <svg
          width="260"
          height="280"
          viewBox="0 0 260 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_15px_35px_rgba(255,71,126,0.35)]"
        >
          {/* Ground Glow Shadow */}
          <ellipse cx="130" cy="265" rx="90" ry="12" fill="rgba(0, 0, 0, 0.4)" />

          {/* Red Snoopy Doghouse Roof */}
          <path d="M 30 200 L 130 130 L 230 200 Z" fill="#e11d48" stroke="#9f1239" strokeWidth="4" />
          {/* Doghouse Body */}
          <rect x="45" y="198" width="170" height="65" fill="#be123c" rx="4" stroke="#881337" strokeWidth="4" />
          {/* Door Entrance */}
          <ellipse cx="130" cy="263" rx="35" ry="40" fill="#4c0519" />

          {/* Doghouse Party Lights */}
          <circle cx="50" cy="205" r="5" fill="#facc15" className="animate-pulse" />
          <circle cx="85" cy="180" r="5" fill="#38bdf8" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
          <circle cx="130" cy="150" r="6" fill="#f43f5e" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
          <circle cx="175" cy="180" r="5" fill="#a855f7" className="animate-pulse" style={{ animationDelay: '0.9s' }} />
          <circle cx="210" cy="205" r="5" fill="#4ade80" className="animate-pulse" style={{ animationDelay: '1.2s' }} />

          {/* SNOOPY BODY */}
          {/* Back feet lying down */}
          <ellipse cx="80" cy="132" rx="14" ry="10" fill="#ffffff" stroke="#1e293b" strokeWidth="3" />

          {/* Snoopy Main Body */}
          <ellipse cx="125" cy="128" rx="42" ry="24" fill="#ffffff" stroke="#1e293b" strokeWidth="3.5" />
          {/* Black Spot on Back */}
          <path d="M 100 115 C 90 120 90 135 105 138 Z" fill="#1e293b" />

          {/* Wagging Tail */}
          <motion.path
            d="M 75 125 Q 55 110 50 95"
            stroke="#1e293b"
            strokeWidth="5"
            strokeLinecap="round"
            animate={{ rotate: [-8, 12, -8] }}
            transition={{ repeat: Infinity, duration: 0.6 }}
          />

          {/* Snoopy Paws */}
          <ellipse cx="145" cy="142" rx="12" ry="9" fill="#ffffff" stroke="#1e293b" strokeWidth="3" />
          <ellipse cx="120" cy="144" rx="12" ry="9" fill="#ffffff" stroke="#1e293b" strokeWidth="3" />

          {/* SNOOPY HEAD */}
          <g>
            {/* Head Base */}
            <ellipse cx="175" cy="100" rx="30" ry="22" fill="#ffffff" stroke="#1e293b" strokeWidth="3.5" />
            {/* Snout */}
            <path d="M 185 85 Q 220 95 205 118 Q 170 120 165 105 Z" fill="#ffffff" stroke="#1e293b" strokeWidth="3.5" />

            {/* Nose */}
            <ellipse cx="212" cy="100" rx="7" ry="6" fill="#1e293b" />
            {/* Eye (Happy Wink/Closed Curve) */}
            <path d="M 182 94 Q 188 87 194 94" stroke="#1e293b" strokeWidth="3.5" strokeLinecap="round" fill="none" />

            {/* Smile */}
            <path d="M 195 108 Q 185 116 175 108" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" fill="none" />

            {/* Floppy Ear */}
            <motion.path
              d="M 155 95 C 135 100 135 135 152 130 C 160 120 162 105 155 95 Z"
              fill="#1e293b"
              animate={{ rotate: [-3, 6, -3] }}
              transition={{ repeat: Infinity, duration: 1.2 }}
            />

            {/* PARTY HAT ON SNOOPY */}
            <polygon points="160,78 185,25 198,72" fill="#ec4899" stroke="#9d174d" strokeWidth="2.5" />
            {/* Party Hat Yellow Polka Dots */}
            <circle cx="178" cy="55" r="3" fill="#facc15" />
            <circle cx="186" cy="40" r="2.5" fill="#facc15" />
            <circle cx="172" cy="68" r="3" fill="#facc15" />
            {/* Fluffy Pom Pom on Hat */}
            <circle cx="185" cy="22" r="7" fill="#fde047" className="animate-ping" />
          </g>

          {/* WOODSTOCK (Snoopy's Little Yellow Bird Friend with Mini Party Hat!) */}
          <g>
            {/* Woodstock Body */}
            <ellipse cx="225" cy="70" rx="9" ry="12" fill="#facc15" stroke="#ca8a04" strokeWidth="2" />
            {/* Head */}
            <circle cx="228" cy="54" r="8" fill="#facc15" stroke="#ca8a04" strokeWidth="2" />
            {/* Beak */}
            <path d="M 235 54 L 244 56 L 235 59 Z" fill="#eab308" />
            {/* Eye */}
            <circle cx="231" cy="52" r="1.5" fill="#1e293b" />
            {/* Wings */}
            <path d="M 220 68 Q 212 60 222 72" stroke="#ca8a04" strokeWidth="2.5" strokeLinecap="round" />
            {/* Woodstock Mini Party Hat */}
            <polygon points="225,47 230,32 233,46" fill="#38bdf8" />
          </g>
        </svg>
      </motion.div>
    </div>
  );
};
