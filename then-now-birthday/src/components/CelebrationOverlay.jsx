import confetti from 'canvas-confetti';

/**
 * Triggers a massive confetti explosion burst across the window.
 */
export const triggerConfettiExplosion = () => {
  const count = 200;
  const defaults = {
    origin: { y: 0.7 },
    zIndex: 9999,
  };

  function fire(particleRatio, opts) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    });
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
    colors: ['#ff477e', '#ff70a6', '#ff9770', '#ffd670'],
  });
  fire(0.2, {
    spread: 60,
    colors: ['#70d6ff', '#ff70a6', '#e9ff70'],
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
    colors: ['#ffffff', '#ff477e', '#7928ca'],
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
    colors: ['#ffd700', '#ff007f', '#00ffff'],
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
};

/**
 * Triggers fireworks display with side cannons.
 */
export const triggerFireworks = () => {
  const duration = 3 * 1000;
  const animationEnd = Date.now() + duration;

  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);
    confetti({
      particleCount,
      startVelocity: 30,
      spread: 360,
      ticks: 60,
      origin: { x: Math.random(), y: Math.random() - 0.2 },
      zIndex: 9999,
      colors: ['#ff477e', '#a855f7', '#3b82f6', '#eab308', '#ec4899'],
    });
  }, 250);
};

/**
 * Triggers heart confetti burst.
 */
export const triggerHeartBurst = () => {
  confetti({
    particleCount: 80,
    spread: 80,
    origin: { y: 0.6 },
    shapes: ['heart', 'star'],
    colors: ['#ff477e', '#ff70a6', '#f43f5e', '#fb7185'],
    zIndex: 9999,
    scalar: 1.3,
  });
};
