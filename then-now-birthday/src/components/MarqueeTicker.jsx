import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Scrolling marquee ticker with fun birthday messages.
 */
export const MarqueeTicker = ({ birthdayName = "Sophia" }) => {
  const messages = [
    `🎂 HAPPY BIRTHDAY ${birthdayName.toUpperCase()}!!!`,
    '🎈 PARTY MODE: ACTIVATED',
    '🎉 TODAY WE CELEBRATE A LEGEND',
    '💖 SENDING INFINITE LOVE & CAKE',
    `👑 ${birthdayName.toUpperCase()} IS THE MAIN CHARACTER TODAY`,
    '🍰 CALORIES DON\'T COUNT ON BIRTHDAYS',
    '🥳 CERTIFIED BIRTHDAY VIP',
    '✨ GLOWING UP SINCE DAY ONE',
    '🎁 UNWRAPPING A WHOLE NEW YEAR OF MAGIC',
    `🌟 ${birthdayName.toUpperCase()} APPRECIATION POST`,
  ];

  const repeatedMessages = [...messages, ...messages, ...messages];

  return (
    <div className="relative w-full overflow-hidden py-4 bg-gradient-to-r from-pink-600/20 via-purple-600/20 to-amber-500/20 border-y border-pink-500/30">
      <motion.div
        animate={{ x: ['0%', '-33.33%'] }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        className="flex gap-12 whitespace-nowrap"
      >
        {repeatedMessages.map((msg, i) => (
          <span
            key={i}
            className="text-sm sm:text-base font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-amber-300 to-purple-400 flex-shrink-0"
          >
            {msg}
            <span className="mx-6 text-pink-500">•</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};
