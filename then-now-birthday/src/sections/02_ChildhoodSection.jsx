import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Camera } from 'lucide-react';
import { TiltCard } from '../components/TiltCard';

export const ChildhoodSection = ({ birthdayData, onSelectPhoto }) => {
  const { childhood } = birthdayData;

  return (
    <section id="childhood" className="relative py-24 px-4 max-w-6xl mx-auto overflow-hidden">
      {/* Header */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-sm font-semibold mb-4"
        >
          <Camera className="w-4 h-4 text-pink-400" />
          <span>{childhood.sectionTitle}</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-bold text-white mb-4 leading-tight font-serif-heading"
        >
          “{childhood.quote}”
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-lg max-w-xl mx-auto"
        >
          {childhood.description}
        </motion.p>
      </div>

      {/* 3D Polaroid Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {childhood.photos.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: item.rotate || 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <TiltCard depth={40}>
              <div
                onClick={() => onSelectPhoto(item)}
                className="polaroid-frame p-4 rounded-2xl cursor-pointer group relative"
              >
                {/* Washi Tape Accent */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-amber-200/70 backdrop-blur-xs rounded-xs rotate-[-3deg] shadow-xs z-10 border border-amber-300/40" />

                {/* Sticker Badge */}
                {item.sticker && (
                  <span className="absolute top-3 right-3 text-2xl z-20 transform group-hover:scale-125 transition-transform">
                    {item.sticker}
                  </span>
                )}

                {/* Photo with 3D Zoom */}
                <div className="relative aspect-square w-full bg-slate-200 rounded-xl overflow-hidden mb-4 border border-slate-300/50">
                  <img
                    src={item.image}
                    alt={item.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-3">
                    <span className="text-xs text-white bg-slate-950/80 px-3 py-1 rounded-full backdrop-blur-xs flex items-center gap-1 border border-white/20">
                      <Sparkles className="w-3 h-3 text-amber-300" /> Click for 3D View
                    </span>
                  </div>
                </div>

                {/* Caption */}
                <div className="text-center px-1 pb-2">
                  <p className="font-handwriting text-2xl text-slate-800 leading-snug font-semibold">
                    {item.caption}
                  </p>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
