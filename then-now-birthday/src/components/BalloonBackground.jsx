import React, { useMemo } from 'react';

export const BalloonBackground = () => {
  // Pre-calculate 3D balloon properties
  const balloons = useMemo(() => {
    const colors = [
      'from-pink-500/40 via-rose-500/30 to-purple-600/25 border-pink-300/40 shadow-pink-500/30',
      'from-purple-500/40 via-indigo-500/30 to-blue-600/25 border-purple-300/40 shadow-purple-500/30',
      'from-amber-400/40 via-pink-500/30 to-rose-600/25 border-amber-300/40 shadow-amber-500/30',
      'from-cyan-400/40 via-blue-500/30 to-purple-600/25 border-cyan-300/40 shadow-cyan-500/30',
      'from-rose-500/40 via-pink-500/30 to-amber-500/25 border-rose-300/40 shadow-rose-500/30',
    ];
    return Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      left: `${(i * 6 + 2) % 96}%`,
      size: 50 + (i * 15) % 45,
      duration: 10 + (i * 2.5) % 12,
      delay: (i * 1.4) % 7,
      color: colors[i % colors.length],
      rotateDeg: ((i * 17) % 30) - 15,
      depth: 20 + (i * 10) % 60,
    }));
  }, []);

  // 3D Geometric Floating Orbs
  const geometricOrbs = useMemo(() => {
    return Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      top: `${(i * 17 + 8) % 90}%`,
      left: `${(i * 29 + 5) % 92}%`,
      size: 15 + (i * 8) % 25,
      duration: 8 + (i * 3) % 10,
      delay: (i * 0.8) % 5,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none" aria-hidden="true" style={{ perspective: '1000px' }}>
      {/* 3D Depth Glowing Ambient Light Spheres */}
      <div className="absolute -top-40 -left-40 w-[550px] h-[550px] bg-gradient-to-tr from-pink-600/25 to-purple-600/20 rounded-full blur-[140px] animate-pulse-glow" />
      <div className="absolute top-1/3 -right-40 w-[550px] h-[550px] bg-gradient-to-br from-purple-600/25 to-indigo-600/20 rounded-full blur-[140px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-10 left-1/4 w-[550px] h-[550px] bg-gradient-to-tr from-amber-500/20 to-pink-600/20 rounded-full blur-[140px] animate-pulse-glow" style={{ animationDelay: '4s' }} />

      {/* Floating 3D Balloons with Specular Shading & String */}
      {balloons.map((b) => (
        <div
          key={b.id}
          className="absolute bottom-[-140px] animate-float-slow"
          style={{
            left: b.left,
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
            animationIterationCount: 'infinite',
            transform: `rotate(${b.rotateDeg}deg) translateZ(${b.depth}px)`,
          }}
        >
          <div
            className={`relative rounded-[50%_50%_50%_50%/40%_40%_60%_60%] bg-gradient-to-tr ${b.color} border-2 backdrop-blur-xs shadow-2xl transition-transform transform-style-3d`}
            style={{ width: `${b.size}px`, height: `${b.size * 1.3}px` }}
          >
            {/* 3D Specular Curved Highlight */}
            <div className="absolute top-3 left-4 w-4 h-7 bg-white/50 rounded-full rotate-[-25deg] blur-[0.5px]" />
            {/* Secondary Inner Shadow */}
            <div className="absolute inset-0 rounded-[50%_50%_50%_50%/40%_40%_60%_60%] shadow-inner" />
            
            {/* Balloon Tie Knot */}
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-2.5 bg-pink-400/80 rounded-full shadow-md" />
            {/* Wavy Ribbon String */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-[1.5px] h-20 bg-gradient-to-b from-pink-300/60 via-purple-300/40 to-transparent shadow-xs" />
          </div>
        </div>
      ))}

      {/* Floating 3D Geometric Orbs */}
      {geometricOrbs.map((orb) => (
        <div
          key={orb.id}
          className="absolute rounded-full bg-gradient-to-tr from-pink-400/40 to-amber-300/40 border border-white/40 shadow-[0_0_20px_rgba(255,255,255,0.4)] animate-float-reverse"
          style={{
            top: orb.top,
            left: orb.left,
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            animationDuration: `${orb.duration}s`,
            animationDelay: `${orb.delay}s`,
          }}
        />
      ))}
    </div>
  );
};
