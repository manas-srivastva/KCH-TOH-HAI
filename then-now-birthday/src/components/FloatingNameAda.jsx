import React, { useMemo } from 'react';

export const FloatingNameAda = () => {
  // Generate floating 3D neon "ADA" text particles
  const floatingTexts = useMemo(() => {
    const styles = [
      "text-pink-400 drop-shadow-[0_4px_0_#be185d]",
      "text-cyan-300 drop-shadow-[0_4px_0_#0284c7]",
      "text-rose-400 drop-shadow-[0_4px_0_#9f1239]",
      "text-purple-300 drop-shadow-[0_4px_0_#6b21a8]",
      "text-amber-300 drop-shadow-[0_4px_0_#b45309]",
    ];

    return Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      text: i % 3 === 0 ? "ADA ✨" : i % 3 === 1 ? "ADA 💖" : "ADA 🎂",
      style: styles[i % styles.length],
      top: `${(i * 17 + 5) % 92}%`,
      left: `${(i * 22 + 4) % 92}%`,
      size: 22 + (i * 8) % 28,
      duration: 10 + (i * 2.5) % 10,
      delay: (i * 0.8) % 5,
      rotX: ((i * 13) % 40) - 20,
      rotY: ((i * 17) % 50) - 25,
      rotZ: ((i * 11) % 30) - 15,
      depth: 20 + (i * 15) % 80,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[2] overflow-hidden select-none" aria-hidden="true" style={{ perspective: '1000px' }}>
      {floatingTexts.map((item) => (
        <div
          key={item.id}
          className={`absolute animate-float-slow font-black font-serif-heading tracking-widest transition-all opacity-30 hover:opacity-80 ${item.style}`}
          style={{
            top: item.top,
            left: item.left,
            fontSize: `${item.size}px`,
            animationDuration: `${item.duration}s`,
            animationDelay: `${item.delay}s`,
            transformStyle: 'preserve-3d',
            transform: `rotateX(${item.rotX}deg) rotateY(${item.rotY}deg) rotateZ(${item.rotZ}deg) translateZ(${item.depth}px)`,
          }}
        >
          {item.text}
        </div>
      ))}
    </div>
  );
};
