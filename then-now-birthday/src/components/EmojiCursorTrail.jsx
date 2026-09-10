import React, { useState, useEffect, useRef } from 'react';

/**
 * Fun emoji cursor trail that follows the mouse with a sparkly tail.
 */
export const EmojiCursorTrail = () => {
  const [particles, setParticles] = useState([]);
  const idCounter = useRef(0);

  const emojis = ['✨', '💖', '🎂', '🎉', '🌟', '🎈', '💫', '🦋', '🌸', '🎀', '⭐', '🍰'];

  useEffect(() => {
    let throttle = false;
    const handleMouseMove = (e) => {
      if (throttle) return;
      throttle = true;
      setTimeout(() => { throttle = false; }, 80);

      const id = idCounter.current++;
      const emoji = emojis[Math.floor(Math.random() * emojis.length)];
      const newParticle = {
        id,
        x: e.clientX,
        y: e.clientY,
        emoji,
        size: 14 + Math.random() * 14,
        rotation: Math.random() * 360,
      };

      setParticles((prev) => [...prev.slice(-18), newParticle]);

      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== id));
      }, 1200);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[60] overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute transition-all duration-1000 ease-out"
          style={{
            left: p.x,
            top: p.y,
            fontSize: `${p.size}px`,
            transform: `translate(-50%, -50%) rotate(${p.rotation}deg)`,
            opacity: 0,
            animation: 'cursorTrailFade 1.2s ease-out forwards',
          }}
        >
          {p.emoji}
        </span>
      ))}

      <style>{`
        @keyframes cursorTrailFade {
          0% { opacity: 1; transform: translate(-50%, -50%) scale(1) translateY(0); }
          100% { opacity: 0; transform: translate(-50%, -50%) scale(0.3) translateY(-40px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .cursor-trail-particle { display: none !important; }
        }
      `}</style>
    </div>
  );
};
