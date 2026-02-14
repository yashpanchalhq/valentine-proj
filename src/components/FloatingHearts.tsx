'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Heart {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  symbol: string;
}

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const generateHearts = () => {
      const newHearts: Heart[] = [];
      const symbols = ['💕', '💕', '💕', '💖', '💗', 'A', 'N', 'U', '✨'];

      for (let i = 0; i < 20; i++) {
        newHearts.push({
          id: i,
          x: Math.random() * 100,
          size: Math.random() * 20 + 10,
          duration: Math.random() * 10 + 15,
          delay: Math.random() * 10,
          symbol: symbols[Math.floor(Math.random() * symbols.length)],
        });
      }
      setHearts(newHearts);
    };
    generateHearts();
  }, []);

  if (!mounted) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      overflow: 'hidden',
      zIndex: 0,
    }}>
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ 
            y: '100vh',
            x: `${heart.x}vw`,
            opacity: 0.6,
            rotate: 0,
          }}
          animate={{ 
            y: '-100vh',
            rotate: 360,
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            position: 'absolute',
            fontSize: heart.size,
            filter: 'drop-shadow(0 0 5px rgba(255, 105, 180, 0.5))',
            fontWeight: heart.symbol.match(/[ANU]/) ? 'bold' : 'normal',
            color: heart.symbol.match(/[ANU]/) ? '#ff1493' : 'inherit',
          }}
        >
          {heart.symbol}
        </motion.div>
      ))}
    </div>
  );
}
