'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from './SecretMessage.module.css';

export default function SecretMessage() {
  const [revealed, setRevealed] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const secretMessages = [
    "Click 3 times to reveal something special... 🤫",
    "Almost there... Keep clicking! 💕",
    "One more click! ✨",
  ];

  const handleClick = () => {
    if (clickCount < 2) {
      setClickCount(prev => prev + 1);
    } else {
      setRevealed(true);
    }
  };

  return (
    <div className={styles.container}>
      {!revealed ? (
        <motion.div
          className={styles.hiddenBox}
          onClick={handleClick}
          whileHover={{ scale: 1.05, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            y: [0, -10, 0],
            boxShadow: [
              '0 8px 32px rgba(255, 105, 180, 0.3)',
              '0 12px 48px rgba(255, 105, 180, 0.5)',
              '0 8px 32px rgba(255, 105, 180, 0.3)',
            ]
          }}
          transition={{
            y: { duration: 2, repeat: Infinity },
            boxShadow: { duration: 2, repeat: Infinity }
          }}
        >
          <div className={styles.lockEmoji}>🔒</div>
          <p>{secretMessages[clickCount]}</p>
        </motion.div>
      ) : (
        <motion.div
          className={styles.revealedBox}
          initial={{ scale: 0, rotate: -180, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        >
          <motion.div
            className={styles.heart}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            💖
          </motion.div>

          <h2>For Anu Rawat 💕</h2>

          <div className={styles.message}>
            <p>
              Out of billions of people in this world,
              <br />
              I found the most amazing one - <strong>YOU</strong>.
            </p>
            <p>
              Every moment with you feels like a dream,
              <br />
              And I never want to wake up.
            </p>
            <p>
              You make ordinary days extraordinary,
              <br />
              Just by being in them.
            </p>
            <p className={styles.signature}>
              ✨ Forever grateful to have you ✨
            </p>
          </div>

          <div className={styles.sparkles}>
            {[...Array(12)].map((_, i) => (
              <motion.span
                key={i}
                className={styles.sparkle}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                  rotate: 360,
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.2,
                  repeat: Infinity,
                }}
              >
                ✨
              </motion.span>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
