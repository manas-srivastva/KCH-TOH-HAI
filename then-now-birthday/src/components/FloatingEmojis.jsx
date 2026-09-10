import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Random floating emoji stickers that rain/float across the viewport.
 */
export const FloatingEmojis = () => {
  const [emojis, setEmojis] = useState([]);

  const emojiPool = useMemo(() => [
    '🎂', '🎈', '🎉', '🎁', '🥳', '🍰', '🧁', '🎊',
    '💖', '🌟', '✨', '🦋', '🌸', '🎀', '💫', '🎵',
    '🍭', '🍬', '🍫', '🧸', '👑', '🌈', '💐', '🎶',
  ], []);

  useEffect(() => {
    const spawnEmoji = () => {
      const id = Date.now() + Math.random();
      const emoji = emojiPool[Math.floor(Math.random() * emojiPool.length)];
      setEmojis((prev) => [
        ...prev.slice(-12),
        {
          id,
          emoji,
          left: Math.random() * 95,
          size: 20 + Math.random() * 28,
          duration: 6 + Math.random() * 8,
          delay: Math.random() * 2,
          swayAmount: 30 + Math.random() * 60,
        },
      ]);

      setTimeout(() => {
        setEmojis((prev) => prev.filter((e) => e.id !== id));
      }, 15000);
    };

    const interval = setInterval(spawnEmoji, 2500);
    // Spawn a few immediately
    for (let i = 0; i < 5; i++) {
      setTimeout(spawnEmoji, i * 400);
    }
    return () => clearInterval(interval);
  }, [emojiPool]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden" aria-hidden="true">
      <AnimatePresence>
        {emojis.map((e) => (
          <motion.span
            key={e.id}
            initial={{ y: -60, x: 0, opacity: 0.9, rotate: 0 }}
            animate={{
              y: window.innerHeight + 60,
              x: [0, e.swayAmount, -e.swayAmount, e.swayAmount / 2, 0],
              rotate: [0, 180, -90, 360],
              opacity: [0.9, 0.8, 0.6, 0.3, 0],
            }}
            transition={{
              duration: e.duration,
              delay: e.delay,
              ease: 'linear',
            }}
            exit={{ opacity: 0 }}
            className="absolute"
            style={{
              left: `${e.left}%`,
              fontSize: `${e.size}px`,
            }}
          >
            {e.emoji}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
};
