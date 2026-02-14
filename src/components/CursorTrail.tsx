'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  emoji: string;
}

export default function CursorTrail() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [counter, setCounter] = useState(0);
  const [mounted, setMounted] = useState(false);

  const emojis = ['A', 'N', 'U', '💕', '✨', '💖', '🌹'];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleMouseMove = (e: MouseEvent) => {
      const newParticle: Particle = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        emoji: emojis[counter % emojis.length],
      };

      setParticles(prev => [...prev.slice(-15), newParticle]);
      setCounter(prev => prev + 1);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [counter, mounted]);

  if (!mounted) return null;

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 9999 }}>
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          initial={{
            x: particle.x - 10,
            y: particle.y - 10,
            opacity: 1,
            scale: 0,
          }}
          animate={{
            y: particle.y - 100,
            opacity: 0,
            scale: 1.5,
          }}
          transition={{
            duration: 1.5,
            ease: 'easeOut',
          }}
          style={{
            position: 'absolute',
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#ff69b4',
            textShadow: '0 0 10px rgba(255, 105, 180, 0.8)',
          }}
          onAnimationComplete={() => {
            setParticles(prev => prev.filter(p => p.id !== particle.id));
          }}
        >
          {particle.emoji}
        </motion.div>
      ))}
    </div>
  );
}
