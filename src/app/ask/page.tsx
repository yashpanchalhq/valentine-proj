'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';

export default function AskPage() {
  const router = useRouter();
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
  const [yesHovered, setYesHovered] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [rejectionMessage, setRejectionMessage] = useState('');
  const [showRejection, setShowRejection] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const noButtonRef = useRef<HTMLButtonElement>(null);

  const rejectionMessages = [
    "No chance, babe 💕",
    "You can't escape, My love 💖",
    "Try again, sweetheart 😘",
    "Not happening, darling 🥰",
    "Nice try, my cherry 🍒",
    "Think again, beautiful 💝",
    "Never, my love 💞"
  ];

  // Heartbeat animation for Yes button
  const scale = useMotionValue(1);

  // Detect if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  useEffect(() => {
    if (yesHovered) {
      // Heartbeat animation
      const heartbeat = async () => {
        while (yesHovered) {
          await animate(scale, 1.15, { duration: 0.15 });
          await animate(scale, 1.05, { duration: 0.1 });
          await animate(scale, 1.2, { duration: 0.15 });
          await animate(scale, 1.05, { duration: 0.3 });
        }
      };
      heartbeat();
    } else {
      animate(scale, 1, { duration: 0.3 });
    }
  }, [yesHovered, scale]);

  const handleNoMouseEnter = () => {
    // On mobile, show rejection message instead of moving the button
    if (isMobile) {
      return;
    }

    if (!containerRef.current || !noButtonRef.current) return;

    const container = containerRef.current.getBoundingClientRect();
    const button = noButtonRef.current.getBoundingClientRect();

    // Random position within container bounds
    const maxX = container.width - button.width - 100;
    const maxY = container.height - button.height - 100;

    const newX = Math.random() * maxX - maxX / 2;
    const newY = Math.random() * maxY - maxY / 2;

    setNoButtonPos({ x: newX, y: newY });
  };

  const handleNoClick = () => {
    // On mobile, show a random rejection message
    if (isMobile) {
      const randomMessage = rejectionMessages[Math.floor(Math.random() * rejectionMessages.length)];
      setRejectionMessage(randomMessage);
      setShowRejection(true);
      setTimeout(() => {
        setShowRejection(false);
      }, 2000);
    }
  };

  const handleYesClick = () => {
    setAnswered(true);
    setTimeout(() => {
      router.push('/home');
    }, 1500);
  };

  if (answered) {
    return (
      <div className={styles.page}>
        <motion.div
          className={styles.celebration}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          <motion.div
            className={styles.bigHeart}
            animate={{ 
              scale: [1, 1.2, 1],
            }}
            transition={{ 
              duration: 0.5,
              repeat: Infinity,
            }}
          >
            💕
          </motion.div>
          <h1 className={styles.yayTitle}>Yay! I Love You! 💖</h1>
          <p className={styles.yayMessage}>Get ready for the most romantic week ever...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={styles.page} ref={containerRef}>
      <motion.div 
        className={styles.card}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <motion.div
          className={styles.emoji}
          animate={{ 
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
          }}
        >
          💝
        </motion.div>
        
        <h1 className={styles.title}>Will You Be My Valentine?</h1>
        <p className={styles.subtitle}>Pretty please? 🥺</p>
        
        <div className={styles.buttons}>
          <motion.button
            className={styles.yesButton}
            style={{ scale }}
            onMouseEnter={() => setYesHovered(true)}
            onMouseLeave={() => setYesHovered(false)}
            onClick={handleYesClick}
            whileTap={{ scale: 0.95 }}
          >
            Yes! 💕
          </motion.button>
          
          <motion.button
            ref={noButtonRef}
            className={styles.noButton}
            animate={{
              x: noButtonPos.x,
              y: noButtonPos.y,
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 20
            }}
            onMouseEnter={handleNoMouseEnter}
            onFocus={handleNoMouseEnter}
            onClick={handleNoClick}
          >
            No 😢
          </motion.button>
        </div>
        
        <p className={styles.hint}>
          (Hint: The right answer makes me happy 🥰)
        </p>

        {/* Rejection Message for Mobile */}
        {showRejection && (
          <motion.div
            className={styles.rejectionMessage}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {rejectionMessage}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
