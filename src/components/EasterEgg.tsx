'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './EasterEgg.module.css';

export default function EasterEgg() {
  const [show, setShow] = useState(false);
  const [keys, setKeys] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);

  // Easter egg codes
  const secretCode = ['a', 'n', 'u']; // Type "anu" anywhere
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleKeyPress = (e: KeyboardEvent) => {
      const newKeys = [...keys, e.key.toLowerCase()].slice(-10);
      setKeys(newKeys);

      // Check for "anu" code
      if (newKeys.slice(-3).join('') === 'anu') {
        setShow(true);
        setTimeout(() => setShow(false), 5000);
        setKeys([]);
      }

      // Check for Konami code
      if (newKeys.join(',') === konamiCode.map(k => k.toLowerCase()).join(',')) {
        setShow(true);
        setTimeout(() => setShow(false), 5000);
        setKeys([]);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [keys, mounted]);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className={styles.easterEgg}
          initial={{ scale: 0, opacity: 0, rotateY: 180 }}
          animate={{ scale: 1, opacity: 1, rotateY: 0 }}
          exit={{ scale: 0, opacity: 0, rotateY: -180 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          <motion.div
            className={styles.content}
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className={styles.bigEmoji}>🎉</div>
            <h2>You Found The Secret! 🎊</h2>
            <p className={styles.secretMessage}>
              Anu, you're absolutely AMAZING! 💖
              <br />
              Finding this means you're curious and adventurous,
              <br />
              just like I love about you! ✨
            </p>
            <div className={styles.hearts}>
              {[...Array(20)].map((_, i) => (
                <span
                  key={i}
                  className={styles.floatingHeart}
                  style={{
                    left: `${(i * 5)}%`,
                    animationDelay: `${i * 0.15}s`,
                  }}
                >
                  💕
                </span>
              ))}
            </div>
            <p className={styles.hint}>
              💡 Hint: Try typing "anu" anywhere on the site!
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
