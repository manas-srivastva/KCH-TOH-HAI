import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Heart } from 'lucide-react';

export const LightboxModal = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md cursor-pointer select-none"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 30 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-3xl w-full bg-slate-900/90 border border-slate-700/80 rounded-3xl overflow-hidden shadow-2xl shadow-pink-500/20 cursor-default"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close Lightbox"
            className="absolute top-4 right-4 z-10 p-2.5 bg-slate-950/70 hover:bg-pink-600 text-white rounded-full transition-colors cursor-pointer border border-slate-700/60"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Image Container */}
          <div className="relative w-full max-h-[70vh] bg-slate-950 flex items-center justify-center overflow-hidden p-2">
            <img
              src={item.image || item.nowImage || item.thenImage}
              alt={item.title || item.caption || "Expanded photo"}
              className="max-h-[65vh] w-auto max-w-full object-contain rounded-xl shadow-lg"
              loading="lazy"
            />
          </div>

          {/* Details Bar */}
          <div className="p-6 bg-gradient-to-t from-slate-900 via-slate-900/95 to-slate-900/80 border-t border-slate-800">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 bg-pink-500/20 text-pink-300 border border-pink-500/30 text-xs font-semibold rounded-full flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-pink-400" />
                {item.tag || item.era || "Birthday Memory"}
              </span>
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                Special Moment
              </span>
            </div>

            {item.title && (
              <h3 className="text-2xl font-bold text-white mb-1 font-serif-heading">
                {item.title}
              </h3>
            )}
            {(item.caption || item.description) && (
              <p className="text-slate-300 text-base leading-relaxed">
                {item.caption || item.description}
              </p>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
