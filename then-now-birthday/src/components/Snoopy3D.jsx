import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, X, PartyPopper, Volume2 } from 'lucide-react';
import { triggerConfettiExplosion, triggerFireworks, triggerHeartBurst } from './CelebrationOverlay';

export const Snoopy3D = ({ birthdayName = "Sophia" }) => {
  const [rotateY, setRotateY] = useState(0);
  const [rotateX, setRotateX] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [writtenText, setWrittenText] = useState("");
  const [isWriting, setIsWriting] = useState(false);

  const fullBirthdayText = `HAPPY BIRTHDAY, ${birthdayName.toUpperCase()}! 🎂🎉❤️`;

  const playHappyBirthdayTune = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();

      // Cheerful Happy Birthday Melody Notes
      const notes = [
        { note: 261.63, duration: 0.3 }, // C4
        { note: 261.63, duration: 0.3 }, // C4
        { note: 293.66, duration: 0.6 }, // D4
        { note: 261.63, duration: 0.6 }, // C4
        { note: 349.23, duration: 0.6 }, // F4
        { note: 329.63, duration: 1.0 }, // E4

        { note: 261.63, duration: 0.3 }, // C4
        { note: 261.63, duration: 0.3 }, // C4
        { note: 293.66, duration: 0.6 }, // D4
        { note: 261.63, duration: 0.6 }, // C4
        { note: 392.00, duration: 0.6 }, // G4
        { note: 349.23, duration: 1.0 }, // F4

        { note: 261.63, duration: 0.3 }, // C4
        { note: 261.63, duration: 0.3 }, // C4
        { note: 523.25, duration: 0.6 }, // C5
        { note: 440.00, duration: 0.6 }, // A4
        { note: 349.23, duration: 0.6 }, // F4
        { note: 329.63, duration: 0.6 }, // E4
        { note: 293.66, duration: 0.8 }, // D4
      ];

      let delay = 0;
      notes.forEach(({ note, duration }) => {
        setTimeout(() => {
          if (ctx.state === 'closed') return;
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.value = note;
          gain.gain.setValueAtTime(0.2, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start();
          osc.stop(ctx.currentTime + duration);
        }, delay * 1000);
        delay += duration + 0.05;
      });
    } catch (e) {
      console.warn("Audio play issue:", e);
    }
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotateY((x / rect.width) * 45);
    setRotateX(-(y / rect.height) * 35);
  };

  const handleMouseLeave = () => {
    setRotateY(0);
    setRotateX(0);
  };

  const handleSnoopyTap = () => {
    setIsFullScreen(true);
    triggerConfettiExplosion();
    triggerFireworks();
    triggerHeartBurst();
    playHappyBirthdayTune();

    // Reset and trigger handwriting text animation
    setWrittenText("");
    setIsWriting(true);
  };

  useEffect(() => {
    if (isWriting) {
      let index = 0;
      const interval = setInterval(() => {
        if (index <= fullBirthdayText.length) {
          setWrittenText(fullBirthdayText.slice(0, index));
          index++;
        } else {
          clearInterval(interval);
          setIsWriting(false);
        }
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isWriting, fullBirthdayText]);

  return (
    <div className="relative flex flex-col items-center justify-center my-8 select-none">
      {/* Tap Instruction Hint */}
      <div
        onClick={handleSnoopyTap}
        className="px-5 py-2 rounded-full bg-slate-900/90 border border-pink-500/50 text-pink-300 text-xs font-bold uppercase tracking-wider shadow-lg mb-4 cursor-pointer transform hover:scale-105 transition-transform flex items-center gap-2"
      >
        <Sparkles className="w-4 h-4 text-amber-300 animate-spin" />
        <span>Tap Snoopy for Full-Screen 3D Birthday Celebration & Music! 🐾</span>
      </div>

      {/* Main Inline 3D Snoopy Stage */}
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleSnoopyTap}
        className="relative w-80 h-96 flex items-center justify-center cursor-pointer group"
        style={{ perspective: '1200px' }}
      >
        {/* Click Me Badge */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 px-3 py-1 bg-amber-400 text-slate-950 font-bold text-[10px] uppercase rounded-full shadow-lg animate-bounce z-30 group-hover:scale-110">
          Tap Snoopy! 🐾
        </div>

        {/* 3D Stage Card */}
        <motion.div
          animate={{ rotateY, rotateX, y: [0, -10, 0] }}
          transition={{ type: 'spring', stiffness: 220, damping: 18 }}
          style={{ transformStyle: 'preserve-3d' }}
          className="relative w-72 h-80 flex flex-col items-center justify-end pb-4"
        >
          {/* 3D Glass Backdrop */}
          <div
            style={{ transform: 'translateZ(-30px)' }}
            className="absolute inset-4 rounded-3xl bg-gradient-to-tr from-pink-500/20 via-purple-500/15 to-amber-500/20 border-2 border-white/20 shadow-[0_20px_50px_rgba(255,71,126,0.3)] backdrop-blur-md"
          />

          {/* 3D Platform Ring */}
          <div
            style={{ transform: 'rotateX(82deg) translateZ(-10px)' }}
            className="absolute bottom-2 w-64 h-64 rounded-full bg-gradient-to-tr from-pink-600/40 via-rose-500/30 to-amber-400/30 border-4 border-pink-400/60 shadow-[0_0_80px_rgba(255,71,126,0.6)]"
          />

          {/* Snoopy Image Pop-Out */}
          <div
            style={{ transform: 'translateZ(65px)', transformStyle: 'preserve-3d' }}
            className="relative flex flex-col items-center"
          >
            {/* 3D Party Hat */}
            <div
              style={{ transform: 'translateY(16px) translateX(2px) translateZ(45px)' }}
              className="z-30 flex flex-col items-center pointer-events-none"
            >
              <div className="w-5 h-5 rounded-full bg-amber-300 shadow-[0_0_20px_rgba(251,191,36,0.95)] animate-pulse mb-[-4px]" />
              <div
                style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
                className="w-10 h-14 bg-gradient-to-tr from-pink-500 via-rose-400 to-amber-300 border border-white/80 shadow-2xl"
              />
            </div>

            {/* Snoopy Character */}
            <div style={{ transform: 'translateZ(35px)' }} className="relative">
              <img
                src="/images/snoopy.png"
                alt="3D Snoopy"
                className="relative z-10 w-52 h-auto object-contain filter drop-shadow-[0_20px_35px_rgba(255,71,126,0.5)] transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Orbiting Woodstock */}
          <motion.div
            animate={{ rotateY: [0, 360] }}
            transition={{ repeat: Infinity, duration: 3.2, ease: 'linear' }}
            style={{ transformStyle: 'preserve-3d' }}
            className="absolute inset-0 pointer-events-none"
          >
            <div
              style={{ transform: 'translateX(95px) translateY(30px) translateZ(80px)' }}
              className="relative flex items-center gap-1"
            >
              <div className="w-8 h-8 rounded-full bg-amber-400 border-2 border-amber-600 shadow-2xl flex items-center justify-center font-bold text-xs text-amber-950">
                🐥
              </div>
              <Sparkles className="w-4 h-4 text-amber-300 animate-spin" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* FULL-SCREEN 3D POP-UP CELEBRATION MODAL */}
      <AnimatePresence>
        {isFullScreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsFullScreen(false)}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950/90 backdrop-blur-xl p-4 overflow-hidden select-none cursor-pointer"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsFullScreen(false)}
              aria-label="Close full screen Snoopy modal"
              className="absolute top-6 right-6 p-3 bg-slate-900/90 text-white rounded-full border border-slate-700 hover:bg-pink-600 transition-colors shadow-2xl z-50 cursor-pointer"
            >
              <X className="w-7 h-7" />
            </button>

            {/* Glowing Center Radial Light */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-pink-500/30 via-rose-500/25 to-amber-500/25 rounded-full blur-[160px] pointer-events-none" />

            {/* 3D Animated Container */}
            <motion.div
              initial={{ scale: 0.6, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.6, y: 50, opacity: 0 }}
              transition={{ type: 'spring', damping: 20, stiffness: 250 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full flex flex-col items-center justify-center text-center p-8 bg-slate-900/80 border-2 border-pink-500/50 rounded-3xl shadow-2xl shadow-pink-500/40 cursor-default"
              style={{ perspective: '1200px' }}
            >
              {/* Handwritten Happy Birthday Banner */}
              <div className="mb-6 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: [0.95, 1.05, 0.95] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="px-6 py-4 bg-gradient-to-r from-pink-600 via-rose-500 to-amber-400 text-white rounded-3xl shadow-2xl shadow-pink-500/50 border-2 border-white/70 font-handwriting text-3xl sm:text-5xl font-extrabold flex items-center gap-3 tracking-wide"
                >
                  <PartyPopper className="w-8 h-8 text-amber-200 animate-bounce" />
                  <span>{writtenText || fullBirthdayText}</span>
                  <Sparkles className="w-8 h-8 text-amber-200 animate-spin" />
                </motion.div>
              </div>

              {/* Full-Screen 3D Snoopy Stage */}
              <motion.div
                animate={{ rotateY: [0, 360], y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                style={{ transformStyle: 'preserve-3d' }}
                className="relative my-4 flex flex-col items-center justify-center"
              >
                {/* 3D Glowing Podium Base */}
                <div
                  style={{ transform: 'rotateX(82deg) translateZ(-20px)' }}
                  className="absolute -bottom-8 w-80 h-80 rounded-full bg-gradient-to-tr from-pink-600/50 via-rose-500/40 to-amber-400/40 border-4 border-pink-300 shadow-[0_0_100px_rgba(255,71,126,0.8)]"
                />

                {/* 3D Snoopy Figure */}
                <div style={{ transform: 'translateZ(80px)' }} className="relative">
                  {/* 3D Party Hat */}
                  <div
                    style={{ transform: 'translateY(22px) translateX(4px) translateZ(50px)' }}
                    className="z-30 flex flex-col items-center pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2"
                  >
                    <div className="w-6 h-6 rounded-full bg-amber-300 shadow-[0_0_25px_rgba(251,191,36,1)] animate-pulse mb-[-4px]" />
                    <div
                      style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
                      className="w-12 h-16 bg-gradient-to-tr from-pink-500 via-rose-400 to-amber-300 border border-white shadow-2xl"
                    />
                  </div>

                  <img
                    src="/images/snoopy.png"
                    alt="Snoopy Full Screen Birthday"
                    className="w-64 sm:w-72 h-auto object-contain filter drop-shadow-[0_25px_45px_rgba(255,71,126,0.6)]"
                  />
                </div>

                {/* Floating Orbiting Woodstock */}
                <motion.div
                  animate={{ rotateY: [0, -360] }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: 'linear' }}
                  style={{ transformStyle: 'preserve-3d' }}
                  className="absolute inset-0 pointer-events-none"
                >
                  <div
                    style={{ transform: 'translateX(120px) translateY(40px) translateZ(100px)' }}
                    className="relative flex items-center gap-1"
                  >
                    <div className="w-10 h-10 rounded-full bg-amber-400 border-2 border-amber-600 shadow-2xl flex items-center justify-center font-bold text-sm text-amber-950">
                      🐥
                    </div>
                    <Sparkles className="w-5 h-5 text-amber-300 animate-spin" />
                  </div>
                </motion.div>
              </motion.div>

              {/* Subtext */}
              <p className="mt-6 text-slate-300 text-base sm:text-lg font-light">
                Tap anywhere to close • Tap Snoopy again for more magic! ✨
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
