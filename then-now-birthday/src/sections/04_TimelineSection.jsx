import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Sparkles, Star } from 'lucide-react';

export const TimelineSection = ({ birthdayData, onSelectPhoto }) => {
  const { timeline } = birthdayData;

  return (
    <section id="timeline" className="relative py-24 px-4 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-sm font-semibold mb-4"
        >
          <Clock className="w-4 h-4 text-purple-400" />
          <span>{timeline.sectionTitle}</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl font-bold text-white mb-4 font-serif-heading"
        >
          The Journey Through Time 🚀
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-lg max-w-lg mx-auto"
        >
          {timeline.subtitle}
        </motion.p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Central Vertical Glowing Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-500 via-purple-500 to-amber-400 -translate-x-1/2 rounded-full shadow-[0_0_15px_rgba(255,71,126,0.5)]" />

        {/* Timeline Items */}
        <div className="space-y-16">
          {timeline.stages.map((stage, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Center Node Icon */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-20 w-10 h-10 rounded-full bg-slate-900 border-2 border-pink-500 flex items-center justify-center shadow-lg shadow-pink-500/30">
                  <Star className="w-4 h-4 text-amber-300 fill-amber-300 animate-pulse" />
                </div>

                {/* Content Card */}
                <div className="w-full md:w-1/2 pl-12 md:pl-0">
                  <div className="p-6 sm:p-8 bg-slate-900/90 border border-slate-800 rounded-3xl backdrop-blur-xl shadow-xl hover:border-purple-500/40 transition-all duration-300 group">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-3 py-1 text-xs font-bold rounded-full border ${stage.badgeColor}`}>
                        {stage.era}
                      </span>
                      <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                        {stage.year}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2 font-serif-heading">
                      {stage.title}
                    </h3>

                    <p className="text-slate-300 text-sm leading-relaxed mb-4">
                      {stage.description}
                    </p>

                    {/* Stage Preview Image */}
                    {stage.image && (
                      <div
                        onClick={() => onSelectPhoto({ ...stage, caption: stage.description })}
                        className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 cursor-pointer group/img"
                      >
                        <img
                          src={stage.image}
                          alt={stage.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="px-3 py-1 bg-pink-600/90 text-white text-xs font-semibold rounded-full flex items-center gap-1 border border-pink-400/40">
                            <Sparkles className="w-3.5 h-3.5" /> Expand
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Empty Space filler for opposite column */}
                <div className="hidden md:block w-1/2" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
