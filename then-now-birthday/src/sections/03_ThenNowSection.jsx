import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap, Flame } from 'lucide-react';
import { TiltCard } from '../components/TiltCard';

export const ThenNowSection = ({ birthdayData, onSelectPhoto }) => {
  const { thenVsNow } = birthdayData;

  return (
    <section id="then-vs-now" className="relative py-24 px-4 max-w-6xl mx-auto select-none">
      {/* Bright Party Backdrop Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-gradient-to-r from-pink-300/30 via-purple-300/30 to-amber-300/30 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-16 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/90 border-2 border-pink-400 text-pink-600 text-sm font-extrabold shadow-md mb-4"
        >
          <Zap className="w-4 h-4 text-amber-500 fill-amber-500" />
          <span>{thenVsNow.sectionTitle}</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-6xl font-extrabold text-slate-800 mb-4 tracking-tight font-serif-heading"
        >
          The Ultimate <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-500 to-amber-500">Party Glow Up</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.2 }}
          className="text-slate-700 text-lg sm:text-xl max-w-xl mx-auto font-semibold"
        >
          {thenVsNow.subtitle}
        </motion.p>
      </div>

      {/* Comparisons Grid */}
      <div className="space-y-14">
        {thenVsNow.comparisons.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <TiltCard depth={35} className="bg-white/95 border-2 border-pink-200 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl shadow-pink-200/50 hover:border-pink-400 transition-all duration-300">
              {/* Card Title Header */}
              <div className="flex items-center justify-between border-b border-pink-100 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <span className="w-3.5 h-3.5 rounded-full bg-pink-500 animate-ping" />
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-800 font-serif-heading">
                    {item.title}
                  </h3>
                </div>
                <span className="px-3.5 py-1 bg-pink-50 text-pink-600 text-xs font-extrabold rounded-full border border-pink-200 flex items-center gap-1.5 shadow-xs">
                  <Flame className="w-3.5 h-3.5 text-amber-500" /> Comparison #{index + 1}
                </span>
              </div>

              {/* Side by Side 3D Comparison Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                {/* THEN Card */}
                <div
                  onClick={() => onSelectPhoto({ ...item, image: item.thenImage, tag: item.tagThen })}
                  className="relative group/card cursor-pointer"
                >
                  <div className="absolute top-3 left-3 z-10 px-3.5 py-1.5 bg-pink-500 text-white font-extrabold text-xs rounded-full shadow-lg border border-white flex items-center gap-1.5">
                    <span>{item.tagThen}</span>
                  </div>

                  <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-rose-50 border-4 border-pink-300 shadow-xl transform group-hover/card:scale-[1.03] transition-transform duration-300">
                    <img
                      src={item.thenImage}
                      alt={`${item.title} Then`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-pink-900/60 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity flex items-end p-4">
                      <span className="text-xs text-white font-bold flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5 text-amber-300" /> View 3D Photo
                      </span>
                    </div>
                  </div>
                </div>

                {/* NOW Card */}
                <div
                  onClick={() => onSelectPhoto({ ...item, image: item.nowImage, tag: item.tagNow })}
                  className="relative group/card cursor-pointer"
                >
                  <div className="absolute top-3 left-3 z-10 px-3.5 py-1.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-extrabold text-xs rounded-full shadow-lg border border-white flex items-center gap-1.5">
                    <span>{item.tagNow}</span>
                  </div>

                  <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-purple-50 border-4 border-purple-300 shadow-xl transform group-hover/card:scale-[1.03] transition-transform duration-300">
                    <img
                      src={item.nowImage}
                      alt={`${item.title} Now`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity flex items-end p-4">
                      <span className="text-xs text-white font-bold flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5 text-amber-300" /> View 3D Photo
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Funny Caption Bar */}
              <div className="mt-6 p-4 bg-gradient-to-r from-pink-100 via-rose-100 to-amber-100 border-2 border-pink-200 rounded-2xl text-center shadow-inner">
                <p className="text-xl sm:text-2xl font-bold text-pink-700 tracking-wide font-handwriting">
                  “{item.caption}”
                </p>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
