import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef(null);
  const synthRef = useRef(null);

  // Web Audio Synth Fallback for Happy Birthday tune
  const playSynthMelody = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      synthRef.current = ctx;

      const notes = [
        { note: 261.63, duration: 0.35 }, // C4
        { note: 261.63, duration: 0.35 }, // C4
        { note: 293.66, duration: 0.7 },  // D4
        { note: 261.63, duration: 0.7 },  // C4
        { note: 349.23, duration: 0.7 },  // F4
        { note: 329.63, duration: 1.2 },  // E4

        { note: 261.63, duration: 0.35 }, // C4
        { note: 261.63, duration: 0.35 }, // C4
        { note: 293.66, duration: 0.7 },  // D4
        { note: 261.63, duration: 0.7 },  // C4
        { note: 392.00, duration: 0.7 },  // G4
        { note: 349.23, duration: 1.2 },  // F4
      ];

      let delay = 0;
      notes.forEach(({ note, duration }) => {
        setTimeout(() => {
          if (!ctx || ctx.state === 'closed') return;
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.value = note;
          gain.gain.setValueAtTime(0.15, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start();
          osc.stop(ctx.currentTime + duration);
        }, delay * 1000);
        delay += duration + 0.05;
      });
    } catch (e) {
      console.warn("Web audio synth fallback ignored:", e);
    }
  };

  const toggleAudio = () => {
    if (isPlaying) {
      if (audioRef.current) audioRef.current.pause();
      if (synthRef.current && synthRef.current.state !== 'closed') {
        synthRef.current.close();
      }
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      setHasInteracted(true);
      if (audioRef.current && audioRef.current.src) {
        audioRef.current.play().catch(() => {
          // If no custom audio file found, fallback to Web Audio synth tune
          playSynthMelody();
        });
      } else {
        playSynthMelody();
      }
    }
  };

  return (
    <div className="fixed top-5 right-5 z-50">
      <button
        onClick={toggleAudio}
        aria-label="Toggle background birthday music"
        className={`flex items-center gap-2 px-4 py-2.5 rounded-full border backdrop-blur-md transition-all duration-300 shadow-xl cursor-pointer ${
          isPlaying
            ? 'bg-pink-500/30 border-pink-400/60 text-pink-200 shadow-pink-500/25 scale-105 animate-pulse'
            : 'bg-slate-900/60 border-slate-700/60 text-slate-300 hover:bg-slate-800/80 hover:text-white'
        }`}
      >
        {isPlaying ? (
          <>
            <Volume2 className="w-5 h-5 text-pink-400 animate-spin" style={{ animationDuration: '4s' }} />
            <span className="text-xs font-semibold tracking-wider uppercase">Music ON 🎵</span>
          </>
        ) : (
          <>
            <VolumeX className="w-5 h-5 text-slate-400" />
            <span className="text-xs font-semibold tracking-wider uppercase">Music OFF</span>
          </>
        )}
      </button>

      {/* Audio element pointing to user's optional audio track */}
      <audio
        ref={audioRef}
        src="/audio/birthday-music.mp3"
        loop
        preload="auto"
        onError={() => {
          // Silent fallback to Web Audio API when file isn't found
        }}
      />
    </div>
  );
};
