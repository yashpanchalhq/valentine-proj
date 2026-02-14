'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from './ParticleText.module.css';

interface ParticleTextProps {
  text: string;
}

export default function ParticleText({ text }: ParticleTextProps) {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const createParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
        });
      }
      setParticles(newParticles);
    };

    createParticles();
  }, []);

  if (!mounted) {
    return (
      <div className={styles.container}>
        <h1 className={styles.text}>{text}</h1>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <motion.h1
        className={styles.text}
        initial={{ scale: 0, rotateY: 180 }}
        animate={{ scale: 1, rotateY: 0 }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 15,
          duration: 1.5
        }}
      >
        {text.split('').map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.05,
              type: 'spring',
              stiffness: 200
            }}
            whileHover={{
              scale: 1.3,
              color: '#ff1493',
              textShadow: '0 0 20px #ff69b4',
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.h1>

      <div className={styles.particleContainer}>
        {particles.map(particle => (
          <motion.div
            key={particle.id}
            className={styles.particle}
            initial={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
              rotate: 360,
            }}
            transition={{
              duration: 2,
              delay: Math.random() * 2,
              repeat: Infinity,
              repeatDelay: Math.random() * 3,
            }}
          >
            ✨
          </motion.div>
        ))}
      </div>
    </div>
  );
}
