'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from './RandomSurprise.module.css';

const surprises = [
  { emoji: '💕', message: 'Anu makes my heart smile!' },
  { emoji: '🌟', message: 'You shine brighter than any star!' },
  { emoji: '✨', message: 'Magic happens when you smile!' },
  { emoji: '💖', message: 'Every day with Anu is a gift!' },
  { emoji: '🎉', message: 'Celebrating you, always!' },
  { emoji: '🌈', message: 'You color my world beautiful!' },
];

export default function RandomSurprise() {
  const [show, setShow] = useState(false);
  const [currentSurprise, setCurrentSurprise] = useState(surprises[0]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const showSurprise = () => {
      setCurrentSurprise(surprises[Math.floor(Math.random() * surprises.length)]);
      setShow(true);
      setTimeout(() => setShow(false), 3000);
    };

    // Show first surprise after 10 seconds
    const firstTimer = setTimeout(showSurprise, 10000);

    // Then show random surprises every 30-60 seconds
    const interval = setInterval(() => {
      showSurprise();
    }, Math.random() * 30000 + 30000);

    return () => {
      clearTimeout(firstTimer);
      clearInterval(interval);
    };
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className={styles.surprise}
          initial={{ scale: 0, rotate: -180, opacity: 0 }}
          animate={{
            scale: 1,
            rotate: 0,
            opacity: 1,
          }}
          exit={{
            scale: 0,
            rotate: 180,
            opacity: 0,
          }}
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 15,
          }}
        >
          <motion.div
            className={styles.emoji}
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 20, -20, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          >
            {currentSurprise.emoji}
          </motion.div>
          <p className={styles.message}>{currentSurprise.message}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
