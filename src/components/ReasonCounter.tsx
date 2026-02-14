'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from './ReasonCounter.module.css';

const REASONS = [
  { id: 1, text: "Your smile lights up my entire world 😊", emoji: "✨" },
  { id: 2, text: "The way you laugh makes my heart skip a beat 💓", emoji: "🎵" },
  { id: 3, text: "You make every ordinary moment extraordinary 🌟", emoji: "⭐" },
  { id: 4, text: "Your kindness inspires me every single day 🌸", emoji: "🌺" },
  { id: 5, text: "You understand me like no one else does 💭", emoji: "🤝" },
  { id: 6, text: "Your presence makes everything better 🌈", emoji: "🌟" },
  { id: 7, text: "You're my best friend and my love ❤️", emoji: "👫" },
  { id: 8, text: "Your hugs feel like home 🏡", emoji: "🤗" },
  { id: 9, text: "You inspire me to be a better person 🚀", emoji: "💪" },
  { id: 10, text: "Every day with you is an adventure 🎢", emoji: "🗺️" },
];

export default function ReasonCounter() {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const [currentReason, setCurrentReason] = useState(0);
  const [showReasons, setShowReasons] = useState(false);

  useEffect(() => {
    const animation = animate(count, 127, {
      duration: 3,
      ease: 'easeOut',
    });

    return animation.stop;
  }, [count]);

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.counter}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <motion.h2 className={styles.number}>
          {rounded}
        </motion.h2>
        <p className={styles.label}>Reasons Why I Love Annu🍒</p>

        <motion.button
          className={styles.btn}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowReasons(!showReasons)}
        >
          {showReasons ? 'Hide Reasons 💕' : 'Show Me! 💝'}
        </motion.button>
      </motion.div>

      {showReasons && (
        <motion.div
          className={styles.reasonsList}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {REASONS.map((reason, index) => (
            <motion.div
              key={reason.id}
              className={styles.reasonCard}
              initial={{ opacity: 0, x: -50, rotate: -10 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ delay: index * 0.1, type: 'spring' }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 12px 48px rgba(255, 105, 180, 0.5)',
              }}
            >
              <span className={styles.reasonEmoji}>{reason.emoji}</span>
              <p className={styles.reasonText}>{reason.text}</p>
            </motion.div>
          ))}

          <motion.div
            className={styles.moreReasons}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <p>...and 117 more reasons that would take forever to list! 💕✨</p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
