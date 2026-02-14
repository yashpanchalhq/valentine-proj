'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from './CountdownTimer.module.css';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const calculateTimeLeft = () => {
      const now = new Date();
      const valentine = new Date(now.getFullYear(), 1, 14, 23, 59, 59); // Feb 14 end of day

      const diff = valentine.getTime() - now.getTime();

      // If it's Valentine's Day or the countdown is negative
      if (diff <= 0 || (now.getMonth() === 1 && now.getDate() === 14)) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      }

      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return <div className={styles.container}><div className={styles.loading}>💕</div></div>;
  }

  const isValentinesDay = timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0;

  if (isValentinesDay) {
    return (
      <motion.div
        className={styles.container}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200 }}
      >
        <motion.div
          className={styles.celebration}
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 2, -2, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          <motion.div
            className={styles.bigHeart}
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 10, -10, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity
            }}
          >
            💖
          </motion.div>
          <h2 className={styles.celebrationTitle}>
            🎉 IT'S VALENTINE'S DAY! 🎉
          </h2>
          <p className={styles.celebrationMessage}>
            Happy Valentine's Day, Annu🍒! 💕
            <br />
            This is OUR day! ✨
          </p>
        </motion.div>
      </motion.div>
    );
  }

  const timeUnits = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hours' },
    { value: timeLeft.minutes, label: 'Minutes' },
    { value: timeLeft.seconds, label: 'Seconds' },
  ];

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Countdown to Valentine's Day with Annu 💕</h3>
      <div className={styles.timer}>
        {timeUnits.map((unit, index) => (
          <motion.div
            key={unit.label}
            className={styles.unit}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.1, type: 'spring', stiffness: 200 }}
          >
            <motion.span
              className={styles.value}
              key={unit.value}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {String(unit.value).padStart(2, '0')}
            </motion.span>
            <span className={styles.label}>{unit.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
