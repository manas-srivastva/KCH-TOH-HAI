import React from 'react';
import { motion } from 'framer-motion';
import { Image, Eye, Heart } from 'lucide-react';
import { TiltCard } from '../components/TiltCard';

export const GallerySection = ({ birthdayData, onSelectPhoto }) => {
  const { gallery } = birthdayData;

  return (
    <section id="gallery" className="relative py-24 px-4 max-w-6xl mx-auto overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-sm font-semibold mb-4"
        >
          <Image className="w-4 h-4 text-indigo-400" />
          <span>{gallery.sectionTitle}</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl font-bold text-white mb-4 font-serif-heading"
        >
          3D Memory Vault 📸
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-lg max-w-md mx-auto"
        >
          {gallery.subtitle}
        </motion.p>
      </div>

      {/* Floating 3D Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {gallery.photos.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40, rotate: item.rotate || 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: item.rotate || 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <TiltCard depth={45}>
              <div
                onClick={() => onSelectPhoto(item)}
                className="relative bg-slate-900/90 border border-slate-800 rounded-3xl p-4 cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-pink-500/20 hover:border-pink-500/50 transition-all duration-300 group"
              >
                {/* Corner Heart Sticker */}
                <div className="absolute -top-2 -right-2 z-10 w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center shadow-lg border border-white/20 transform group-hover:scale-125 transition-transform">
                  <Heart className="w-4 h-4 fill-white" />
                </div>

                {/* Photo Card */}
                <div className={`relative ${item.aspect || 'aspect-square'} w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800/80 mb-4`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                    <span className="px-4 py-1.5 bg-pink-600/90 text-white text-xs font-semibold rounded-full backdrop-blur-md flex items-center gap-1.5 border border-pink-400/40">
                      <Eye className="w-3.5 h-3.5" /> 3D Zoom
                    </span>
                  </div>
                </div>

                {/* Info Footer */}
                <div className="px-2 pb-2">
                  <h3 className="text-xl font-bold text-white mb-1 font-serif-heading">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
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
