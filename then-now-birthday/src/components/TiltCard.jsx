import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const TiltCard = ({ children, className = '', depth = 30 }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const rY = ((mouseX - width / 2) / (width / 2)) * 18; // Max 18 deg tilt
    const rX = -((mouseY - height / 2) / (height / 2)) * 18;

    const glareX = (mouseX / width) * 100;
    const glareY = (mouseY / height) * 100;

    setRotateX(rX);
    setRotateY(rY);
    setGlare({ x: glareX, y: glareY, opacity: 0.35 });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlare({ x: 50, y: 50, opacity: 0 });
  };

  return (
    <motion.div
      style={{
        perspective: '1200px',
        transformStyle: 'preserve-3d',
      }}
      className="relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        animate={{
          rotateX,
          rotateY,
          scale: rotateX !== 0 ? 1.04 : 1,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        style={{ transformStyle: 'preserve-3d' }}
        className={`relative overflow-hidden rounded-3xl ${className}`}
      >
        {/* Specular Glare Highlight */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none z-30 transition-opacity duration-300 rounded-3xl"
          style={{
            opacity: glare.opacity,
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 70%)`,
          }}
        />

        {/* Card Content with 3D Depth Layering */}
        <div style={{ transform: `translateZ(${depth}px)`, transformStyle: 'preserve-3d' }}>
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
};
