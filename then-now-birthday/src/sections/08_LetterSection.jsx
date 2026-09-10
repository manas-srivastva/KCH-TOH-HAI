import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Mail, Sparkles, Edit3 } from 'lucide-react';

export const LetterSection = ({ birthdayData }) => {
  const { letter } = birthdayData;

  return (
    <section id="letter" className="relative py-24 px-4 max-w-4xl mx-auto">
      {/* Glow Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Section Title Header */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-sm font-semibold mb-4"
        >
          <Mail className="w-4 h-4 text-pink-400" />
          <span>{letter.sectionTitle}</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl font-bold text-white mb-2 font-serif-heading"
        >
          From the Heart ❤️
        </motion.h2>
      </div>

      {/* Handwritten Parchment Letter Card */}
      <motion.div
        initial={{ opacity: 0, y: 40, rotate: -1 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
        className="relative bg-gradient-to-b from-amber-50 via-orange-50/90 to-amber-100 text-slate-900 rounded-3xl p-8 sm:p-14 shadow-2xl shadow-pink-500/15 border-4 border-amber-200/80 font-handwriting select-text"
      >
        {/* Decorative Wax Seal */}
        <div className="absolute -top-6 right-8 w-14 h-14 rounded-full bg-gradient-to-tr from-rose-700 to-pink-600 text-white flex items-center justify-center shadow-lg border-2 border-amber-200">
          <Heart className="w-7 h-7 fill-white animate-pulse" />
        </div>

        {/* Greeting */}
        <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 font-handwriting">
          {letter.greeting}
        </h3>

        {/* Letter Paragraphs */}
        <div className="space-y-6 text-xl sm:text-2xl text-slate-800 leading-relaxed font-semibold">
          {letter.paragraphs.map((paragraph, index) => (
            <p key={index} className="indent-4">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Sign off & Sender */}
        <div className="mt-10 pt-6 border-t border-amber-300/60 text-right">
          <p className="text-xl sm:text-2xl text-slate-700 font-semibold mb-1">
            {letter.signOff}
          </p>
          <p className="text-2xl sm:text-3xl text-pink-700 font-bold">
            {letter.sender}
          </p>
        </div>

        {/* Subtle Editable Notice for User */}
        <div className="mt-8 pt-4 border-t border-dashed border-amber-300/50 text-center select-none">
          <span className="text-xs font-sans text-amber-800/60 flex items-center justify-center gap-1">
            <Edit3 className="w-3.5 h-3.5" /> Easily edit this letter in <code className="bg-amber-200/60 px-1.5 py-0.5 rounded text-amber-900 font-mono">birthdayData.js</code>
          </span>
        </div>
      </motion.div>
    </section>
  );
};
